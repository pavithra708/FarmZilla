import { ChatMessage, Disease, FertilizerRecommendation, LoanScheme, MarketPrice } from '../types';

// Mock chat messages
export const mockChatMessages: ChatMessage[] = [
  {
    id: '1',
    content: 'Hello! How can I assist you with farming today?',
    sender: 'bot',
    timestamp: new Date('2023-10-01T10:00:00'),
  },
  {
    id: '2',
    content: 'I want to know about tomato diseases',
    sender: 'user',
    timestamp: new Date('2023-10-01T10:01:00'),
  },
  {
    id: '3',
    content: 'Common tomato diseases include Early Blight, Late Blight, Septoria Leaf Spot, and Fusarium Wilt. Would you like information about a specific disease?',
    sender: 'bot',
    timestamp: new Date('2023-10-01T10:01:30'),
  },
];

// Mock diseases
export const mockDiseases: Disease[] = [
  {
    id: '1',
    name: 'Early Blight',
    description: 'A fungal disease that affects tomato, potato, and other nightshade plants.',
    symptoms: [
      'Dark brown spots with concentric rings',
      'Yellowing of leaves around the spots',
      'Spots primarily on lower/older leaves',
      'Eventual leaf drop'
    ],
    treatment: 'Apply fungicides containing chlorothalonil or copper. Remove and destroy infected leaves.',
    preventiveMeasures: [
      'Crop rotation',
      'Proper plant spacing for air circulation',
      'Avoid overhead watering',
      'Use disease-resistant varieties'
    ],
    imageUrl: 'https://images.pexels.com/photos/7728093/pexels-photo-7728093.jpeg'
  },
  {
    id: '2',
    name: 'Powdery Mildew',
    description: 'A fungal disease that affects a wide range of plants including grains, vegetables, and ornamentals.',
    symptoms: [
      'White powdery spots on leaves and stems',
      'Leaves may become yellow and dry',
      'Distorted growth',
      'Reduced yield'
    ],
    treatment: 'Apply fungicides containing sulfur or potassium bicarbonate. Neem oil can also be effective for mild cases.',
    preventiveMeasures: [
      'Plant resistant varieties',
      'Ensure good air circulation',
      'Avoid overhead watering',
      'Remove and destroy infected plant parts'
    ],
    imageUrl: 'https://images.pexels.com/photos/5313174/pexels-photo-5313174.jpeg'
  },
];

// Mock fertilizer recommendations
export const mockFertilizerRecommendations: FertilizerRecommendation[] = [
  {
    id: '1',
    cropType: 'Rice',
    soilType: 'Clay',
    nitrogen: 120,
    phosphorus: 60,
    potassium: 60,
    additionalNotes: 'Apply in three splits: 50% as basal dose, 25% at tillering, and 25% at panicle initiation.'
  },
  {
    id: '2',
    cropType: 'Wheat',
    soilType: 'Loamy',
    nitrogen: 100,
    phosphorus: 50,
    potassium: 50,
    additionalNotes: 'Apply 50% nitrogen as basal dose and the remainder in two equal splits after first and second irrigation.'
  },
  {
    id: '3',
    cropType: 'Tomato',
    soilType: 'Sandy Loam',
    nitrogen: 150,
    phosphorus: 100,
    potassium: 120,
    additionalNotes: 'Apply phosphorus and potassium as basal dose. Apply nitrogen in 4-5 splits starting from transplanting to fruit development.'
  },
];

// Mock loan schemes
export const mockLoanSchemes: LoanScheme[] = [
  {
    id: '1',
    name: 'Kisan Credit Card',
    provider: 'All Public Sector Banks',
    interestRate: 7,
    maxAmount: 300000,
    tenure: 'Up to 5 years',
    eligibility: 'All farmers including tenant farmers, oral lessees and share croppers',
    documentsRequired: [
      'Identity Proof (Aadhaar/Voter ID/Driving License)',
      'Address Proof',
      'Land Records (7/12 extract, Khata, etc.)',
      'Passport size photographs',
      'Bank account details'
    ]
  },
  {
    id: '2',
    name: 'Agriculture Infrastructure Fund',
    provider: 'NABARD',
    interestRate: 3,
    maxAmount: 2000000,
    tenure: 'Up to 10 years with 2-year moratorium',
    eligibility: 'Farmers, FPOs, PACS, Marketing Cooperative Societies, SHGs',
    documentsRequired: [
      'Identity Proof',
      'Address Proof',
      'Business Plan',
      'Land Documents',
      'No-Objection Certificate from local authorities',
      'Bank account details'
    ]
  },
];

// Mock market prices
export const mockMarketPrices: MarketPrice[] = [
  {
    id: '1',
    commodity: 'Rice',
    location: 'Delhi',
    price: 2200,
    unit: 'quintal',
    date: new Date('2025-09-27'),
    trend: 'up',
    percentChange: 2.5
  },
  {
    id: '2',
    commodity: 'Rice',
    location: 'Mumbai',
    price: 2350,
    unit: 'quintal',
    date: new Date('2025-09-27'),
    trend: 'up',
    percentChange: 1.8
  },
  {
    id: '3',
    commodity: 'Rice',
    location: 'Chennai',
    price: 2100,
    unit: 'quintal',
    date: new Date('2025-09-27'),
    trend: 'down',
    percentChange: -0.5
  },
  {
    id: '4',
    commodity: 'Wheat',
    location: 'Delhi',
    price: 2400,
    unit: 'quintal',
    date: new Date('2025-09-27'),
    trend: 'stable',
    percentChange: 0
  },
  {
    id: '5',
    commodity: 'Wheat',
    location: 'Mumbai',
    price: 2500,
    unit: 'quintal',
    date: new Date('2025-09-27'),
    trend: 'up',
    percentChange: 1.2
  },
  {
    id: '6',
    commodity: 'Tomato',
    location: 'Delhi',
    price: 4500,
    unit: 'quintal',
    date: new Date('2025-09-27'),
    trend: 'down',
    percentChange: -3.2
  },
  {
    id: '7',
    commodity: 'Tomato',
    location: 'Mumbai',
    price: 4800,
    unit: 'quintal',
    date: new Date('2025-09-27'),
    trend: 'down',
    percentChange: -2.5
  },
  {
    id: '8',
    commodity: 'Onion',
    location: 'Delhi',
    price: 2800,
    unit: 'quintal',
    date: new Date('2025-09-27'),
    trend: 'up',
    percentChange: 5.2
  },
];