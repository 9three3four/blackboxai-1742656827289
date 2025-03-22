import React, { useEffect, useState } from 'react';
import { api } from '../services/api';
import { ArrowUpIcon, ArrowDownIcon } from '@heroicons/react/solid';

export default function Dashboard() {
  const [stocks, setStocks] = useState([]);
  const [portfolio, setPortfolio] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const [stocksData, portfolioData] = await Promise.all([
        api.getStocks(),
        api.getPortfolio()
      ]);
      setStocks(stocksData);
      setPortfolio(portfolioData);
    };
    fetchData();
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      {/* Portfolio Overview */}
      {portfolio && (
        <div className="bg-white rounded-lg shadow p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4">Portfolio Overview</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 bg-gray-50 rounded-lg">
              <p className="text-sm text-gray-500">Total Value</p>
              <p className="text-2xl font-semibold">₹{portfolio.totalValue.toLocaleString()}</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <p className="text-sm text-gray-500">Today's P&L</p>
              <p className={`text-2xl font-semibold ${portfolio.todaysPnL >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                ₹{portfolio.todaysPnL.toLocaleString()}
              </p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <p className="text-sm text-gray-500">Total P&L</p>
              <p className={`text-2xl font-semibold ${portfolio.totalPnL >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                ₹{portfolio.totalPnL.toLocaleString()}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Watchlist */}
      <div className="bg-white rounded-lg shadow">
        <div className="px-6 py-4 border-b border-gray-200">
          <h2 className="text-xl font-semibold">Watchlist</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Symbol</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Change</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {stocks.map((stock) => (
                <tr key={stock.symbol} className="hover:bg-gray-50 cursor-pointer">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-[#387ed1]">
                    {stock.symbol}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {stock.name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-right">
                    ₹{stock.price.toFixed(2)}
                  </td>
                  <td className={`px-6 py-4 whitespace-nowrap text-sm text-right ${stock.change >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                    <span className="flex items-center justify-end">
                      {stock.change >= 0 ? (
                        <ArrowUpIcon className="h-4 w-4" />
                      ) : (
                        <ArrowDownIcon className="h-4 w-4" />
                      )}
                      {Math.abs(stock.change).toFixed(2)} ({Math.abs(stock.changePercent).toFixed(2)}%)
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}