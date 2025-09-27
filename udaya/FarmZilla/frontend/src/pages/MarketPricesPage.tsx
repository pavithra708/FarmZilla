import React from 'react';
import MarketPriceTable from '../components/market/MarketPriceTable';

const MarketPricesPage = () => {
  return (
    <div className="container-custom mx-auto py-12">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold mb-2">Agricultural Market Prices</h1>
        <p className="text-gray-600 max-w-3xl mx-auto">
          Stay updated with the latest market prices for agricultural commodities across different 
          regions to make informed decisions about when and where to sell your produce.
        </p>
      </div>
      
      <MarketPriceTable />
    </div>
  );
};

export default MarketPricesPage;