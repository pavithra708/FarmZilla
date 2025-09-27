import { useState, useMemo } from 'react';
import { ArrowUpIcon, ArrowDownIcon, Search, ChevronDown, Filter, RefreshCw } from 'lucide-react';
import { mockMarketPrices } from '../../utils/mockData';
import { MarketPrice } from '../../types';

type SortField = 'commodity' | 'location' | 'price' | 'date';
type SortDirection = 'asc' | 'desc';

const MarketPriceTable = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [commodityFilter, setCommodityFilter] = useState<string>('');
  const [sortField, setSortField] = useState<SortField>('commodity');
  const [sortDirection, setSortDirection] = useState<SortDirection>('asc');

  // Get unique commodities for filter dropdown
  const uniqueCommodities = useMemo(() => {
    const commodities = new Set<string>();
    mockMarketPrices.forEach((price) => commodities.add(price.commodity));
    return ['', ...Array.from(commodities)];
  }, []);

  // Filter and sort market prices
  const filteredAndSortedPrices = useMemo(() => {
    let result = [...mockMarketPrices];

    // Apply search filter
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      result = result.filter(
        (price) =>
          price.commodity.toLowerCase().includes(term) ||
          price.location.toLowerCase().includes(term)
      );
    }

    // Apply commodity filter
    if (commodityFilter) {
      result = result.filter((price) => price.commodity === commodityFilter);
    }

    // Apply sorting
    result.sort((a, b) => {
      let comparison = 0;
      
      if (sortField === 'commodity') {
        comparison = a.commodity.localeCompare(b.commodity);
      } else if (sortField === 'location') {
        comparison = a.location.localeCompare(b.location);
      } else if (sortField === 'price') {
        comparison = a.price - b.price;
      } else if (sortField === 'date') {
        comparison = a.date.getTime() - b.date.getTime();
      }

      return sortDirection === 'asc' ? comparison : -comparison;
    });

    return result;
  }, [searchTerm, commodityFilter, sortField, sortDirection]);

  // Handle header click for sorting
  const handleHeaderClick = (field: SortField) => {
    if (sortField === field) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('asc');
    }
  };

  // Render sort indicator
  const renderSortIndicator = (field: SortField) => {
    if (sortField !== field) return null;
    
    return sortDirection === 'asc' ? (
      <ArrowUpIcon className="h-4 w-4 ml-1" />
    ) : (
      <ArrowDownIcon className="h-4 w-4 ml-1" />
    );
  };

  // Format date
  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-IN', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="p-6">
        <h2 className="text-2xl font-semibold mb-2">Agricultural Market Prices</h2>
        <p className="text-gray-600 mb-6">
          Current prices of agricultural commodities across different markets in India.
        </p>

        {/* Search and Filters */}
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <div className="relative flex-grow">
            <input
              type="text"
              placeholder="Search commodity or location..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
            />
            <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
          </div>
          
          <div className="relative">
            <div className="flex items-center">
              <Filter className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
              <select
                value={commodityFilter}
                onChange={(e) => setCommodityFilter(e.target.value)}
                className="appearance-none w-full pl-10 pr-10 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              >
                <option value="">All Commodities</option>
                {uniqueCommodities.map((commodity) => 
                  commodity ? (
                    <option key={commodity} value={commodity}>
                      {commodity}
                    </option>
                  ) : null
                )}
              </select>
              <ChevronDown className="absolute right-3 top-2.5 h-5 w-5 text-gray-400 pointer-events-none" />
            </div>
          </div>
        </div>
        
        {/* Last updated info */}
        <div className="flex items-center justify-between mb-4">
          <div className="text-sm text-gray-500 flex items-center">
            <RefreshCw className="h-4 w-4 mr-1" />
            Last updated: {formatDate(new Date())}
          </div>
          <div className="text-sm text-primary-600">
            {filteredAndSortedPrices.length} results found
          </div>
        </div>

        {/* Market Prices Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th 
                  scope="col" 
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                  onClick={() => handleHeaderClick('commodity')}
                >
                  <div className="flex items-center">
                    Commodity
                    {renderSortIndicator('commodity')}
                  </div>
                </th>
                <th 
                  scope="col" 
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                  onClick={() => handleHeaderClick('location')}
                >
                  <div className="flex items-center">
                    Market Location
                    {renderSortIndicator('location')}
                  </div>
                </th>
                <th 
                  scope="col" 
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                  onClick={() => handleHeaderClick('price')}
                >
                  <div className="flex items-center">
                    Price
                    {renderSortIndicator('price')}
                  </div>
                </th>
                <th 
                  scope="col" 
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                  onClick={() => handleHeaderClick('date')}
                >
                  <div className="flex items-center">
                    Date
                    {renderSortIndicator('date')}
                  </div>
                </th>
                <th 
                  scope="col" 
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Trend
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredAndSortedPrices.map((price) => (
                <tr key={price.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="font-medium text-gray-800">{price.commodity}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-gray-600">{price.location}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="font-medium">
                      ₹{price.price.toLocaleString()} / {price.unit}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-gray-600">{formatDate(price.date)}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className={`flex items-center ${
                      price.trend === 'up' 
                        ? 'text-green-600' 
                        : price.trend === 'down' 
                        ? 'text-red-600' 
                        : 'text-gray-500'
                    }`}>
                      {price.trend === 'up' ? (
                        <>
                          <ArrowUpIcon className="h-4 w-4 mr-1" />
                          <span>+{price.percentChange.toFixed(1)}%</span>
                        </>
                      ) : price.trend === 'down' ? (
                        <>
                          <ArrowDownIcon className="h-4 w-4 mr-1" />
                          <span>{price.percentChange.toFixed(1)}%</span>
                        </>
                      ) : (
                        <span>Stable</span>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {filteredAndSortedPrices.length === 0 && (
          <div className="text-center py-8">
            <p className="text-gray-500">No market prices found matching your search criteria.</p>
          </div>
        )}
        
        {/* Note */}
        <div className="mt-6 text-sm text-gray-500">
          <p>
            <strong>Note:</strong> These prices are for reference only and may vary based on quality, 
            quantity, and local market conditions. For official rates, please check with your local 
            Agricultural Produce Market Committee (APMC).
          </p>
        </div>
      </div>
    </div>
  );
};

export default MarketPriceTable;