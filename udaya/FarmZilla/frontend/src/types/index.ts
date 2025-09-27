export interface User {
  id: string;
  name: string;
  email: string;
  role: 'farmer' | 'expert' | 'admin';
}

export interface ChatMessage {
  id: string;
  content: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

export interface Disease {
  id: string;
  name: string;
  description: string;
  symptoms: string[];
  treatment: string;
  preventiveMeasures: string[];
  imageUrl?: string;
}

export interface FertilizerRecommendation {
  id: string;
  cropType: string;
  soilType: string;
  nitrogen: number;
  phosphorus: number;
  potassium: number;
  additionalNotes: string;
}

export interface LoanScheme {
  id: string;
  name: string;
  provider: string;
  interestRate: number;
  maxAmount: number;
  tenure: string;
  eligibility: string;
  documentsRequired: string[];
}

export interface MarketPrice {
  id: string;
  commodity: string;
  location: string;
  price: number;
  unit: string;
  date: Date;
  trend: 'up' | 'down' | 'stable';
  percentChange: number;
}