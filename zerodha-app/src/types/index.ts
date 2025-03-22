export interface StockData {
  symbol: string;
  name: string;
  price: number;
  change: number;
  changePercent: number;
}

export interface OrderData {
  id: string;
  symbol: string;
  type: 'BUY' | 'SELL';
  quantity: number;
  price: number;
  status: 'PENDING' | 'COMPLETED' | 'CANCELLED';
  timestamp: string;
}

export interface HoldingData {
  symbol: string;
  quantity: number;
  avgPrice: number;
  currentPrice: number;
  pnl: number;
  pnlPercent: number;
}

export interface UserPortfolio {
  totalValue: number;
  todaysPnL: number;
  totalPnL: number;
  holdings: HoldingData[];
}