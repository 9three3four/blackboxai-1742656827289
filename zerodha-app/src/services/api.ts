// Mock API service
import { StockData, OrderData, HoldingData, UserPortfolio } from '../types';

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

// Mock data
const mockStocks: StockData[] = [
  { symbol: 'RELIANCE', name: 'Reliance Industries', price: 2500.45, change: 25.50, changePercent: 1.02 },
  { symbol: 'TCS', name: 'Tata Consultancy Services', price: 3456.70, change: -12.30, changePercent: -0.35 },
  { symbol: 'HDFC', name: 'HDFC Bank', price: 1678.90, change: 8.45, changePercent: 0.50 },
];

const mockOrders: OrderData[] = [
  { id: '1', symbol: 'RELIANCE', type: 'BUY', quantity: 10, price: 2490.00, status: 'COMPLETED', timestamp: new Date().toISOString() },
  { id: '2', symbol: 'TCS', type: 'SELL', quantity: 5, price: 3460.00, status: 'PENDING', timestamp: new Date().toISOString() },
];

const mockHoldings: HoldingData[] = [
  { symbol: 'RELIANCE', quantity: 10, avgPrice: 2490.00, currentPrice: 2500.45, pnl: 104.50, pnlPercent: 0.42 },
  { symbol: 'TCS', quantity: 15, avgPrice: 3400.00, currentPrice: 3456.70, pnl: 850.50, pnlPercent: 1.67 },
];

const mockPortfolio: UserPortfolio = {
  totalValue: 127500.00,
  todaysPnL: 955.00,
  totalPnL: 2850.00,
  holdings: mockHoldings,
};

export const api = {
  getStocks: async (): Promise<StockData[]> => {
    await delay(500);
    return mockStocks;
  },

  getOrders: async (): Promise<OrderData[]> => {
    await delay(500);
    return mockOrders;
  },

  getHoldings: async (): Promise<HoldingData[]> => {
    await delay(500);
    return mockHoldings;
  },

  getPortfolio: async (): Promise<UserPortfolio> => {
    await delay(500);
    return mockPortfolio;
  },

  placeOrder: async (order: Omit<OrderData, 'id' | 'status' | 'timestamp'>): Promise<OrderData> => {
    await delay(500);
    return {
      ...order,
      id: Math.random().toString(36).substr(2, 9),
      status: 'PENDING',
      timestamp: new Date().toISOString(),
    };
  },
};