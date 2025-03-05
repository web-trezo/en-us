import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface CryptoPrice {
  symbol: string;
  name: string;
  price: number;
  change: number;
}

export default function CryptoTicker() {
  const [prices, setPrices] = useState<CryptoPrice[]>([
    { symbol: 'BTC', name: 'Bitcoin', price: 0, change: 0 },
    { symbol: 'ETH', name: 'Ethereum', price: 0, change: 0 },
    { symbol: 'BNB', name: 'Binance Coin', price: 0, change: 0 },
    { symbol: 'SOL', name: 'Solana', price: 0, change: 0 },
    { symbol: 'XRP', name: 'Ripple', price: 0, change: 0 },
    { symbol: 'ADA', name: 'Cardano', price: 0, change: 0 },
    { symbol: 'AVAX', name: 'Avalanche', price: 0, change: 0 },
    { symbol: 'DOGE', name: 'Dogecoin', price: 0, change: 0 },
    { symbol: 'DOT', name: 'Polkadot', price: 0, change: 0 },
    { symbol: 'MATIC', name: 'Polygon', price: 0, change: 0 },
    { symbol: 'LINK', name: 'Chainlink', price: 0, change: 0 },
    { symbol: 'UNI', name: 'Uniswap', price: 0, change: 0 },
    { symbol: 'ATOM', name: 'Cosmos', price: 0, change: 0 },
    { symbol: 'LTC', name: 'Litecoin', price: 0, change: 0 },
    { symbol: 'OP', name: 'Optimism', price: 0, change: 0 },
    { symbol: 'NEAR', name: 'NEAR Protocol', price: 0, change: 0 },
    { symbol: 'ARB', name: 'Arbitrum', price: 0, change: 0 },
    { symbol: 'FIL', name: 'Filecoin', price: 0, change: 0 },
    { symbol: 'AAVE', name: 'Aave', price: 0, change: 0 },
    { symbol: 'GRT', name: 'The Graph', price: 0, change: 0 },
  ]);

  useEffect(() => {
    const updatePrices = () => {
      setPrices(prev => prev.map(crypto => ({
        ...crypto,
        price: Math.random() * (crypto.symbol === 'BTC' ? 50000 : 3000),
        change: (Math.random() * 10) - 5
      })));
    };

    updatePrices();
    const interval = setInterval(updatePrices, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="w-full bg-astra-green text-white py-3 overflow-hidden"
    >
      <div className="container mx-auto">
        <motion.div 
          className="flex overflow-x-auto whitespace-nowrap gap-8 py-1 scrollbar-hide"
          animate={{ x: [0, -100, 0] }}
          transition={{ 
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          {prices.map((crypto) => (
            <motion.div
              key={crypto.symbol}
              className="flex items-center space-x-2 min-w-fit"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <span className="font-bold">{crypto.symbol}</span>
              <span className="text-sm opacity-75">{crypto.name}</span>
              <span>${crypto.price.toFixed(2)}</span>
              <span className={`text-sm ${crypto.change >= 0 ? 'text-green-300' : 'text-red-300'}`}>
                {crypto.change >= 0 ? '+' : ''}{crypto.change.toFixed(2)}%
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}