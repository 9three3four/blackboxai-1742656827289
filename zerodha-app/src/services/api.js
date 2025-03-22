// Mock API service
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// Mock data
const mockStocks = [
  { symbol: 'RELIANCE', name: 'Reliance Industries', price: 2500.45, change: 25.50, changePercent: 1.02 },
  { symbol: 'TCS', name: 'Tata Consultancy Services', price: 3456.70, change: -12.30, changePercent: -0.35 },
  { symbol: 'HDFC', name: 'HDFC Bank', price: 1678.90, change: 8.45, changePercent: 0.50 },
  { symbol: 'INFY', name: 'Infosys Limited', price: 1432.60, change: -5.20, changePercent: -0.36 },
  { symbol: 'WIPRO', name: 'Wipro Limited', price: 432.75, change: 3.25, changePercent: 0.76 }
];

const mockOrders = [
  { id: '1', symbol: 'RELIANCE', type: 'BUY', quantity: 10, price: 2490.00, status: 'COMPLETED', timestamp: new Date().toISOString() },
  { id: '2', symbol: 'TCS', type: 'SELL', quantity: 5, price: 3460.00, status: 'PENDING', timestamp: new Date().toISOString() },
];

const mockHoldings = [
  { symbol: 'RELIANCE', quantity: 10, avgPrice: 2490.00, currentPrice: 2500.45, pnl: 104.50, pnlPercent: 0.42 },
  { symbol: 'TCS', quantity: 15, avgPrice: 3400.00, currentPrice: 3456.70, pnl: 850.50, pnlPercent: 1.67 },
  { symbol: 'INFY', quantity: 20, avgPrice: 1420.00, currentPrice: 1432.60, pnl: 252.00, pnlPercent: 0.89 }
];

const mockPortfolio = {
  totalValue: 127500.00,
  todaysPnL: 955.00,
  totalPnL: 2850.00,
  holdings: mockHoldings,
};

export const api = {
  getStocks: async () => {
    await delay(500);
    return mockStocks;
  },

  getOrders: async () => {
    await delay(500);
    return mockOrders;
  },

  getHoldings: async () => {
    await delay(500);
    return mockHoldings;
  },

  getPortfolio: async () => {
    await delay(500);
    return mockPortfolio;
  },

  placeOrder: async (order) => {
    await delay(500);
    return {
      ...order,
      id: Math.random().toString(36).substr(2, 9),
      status: 'PENDING',
      timestamp: new Date().toISOString(),
    };
  },
};