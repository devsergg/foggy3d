'use client';

import { ProductCategory } from '@/types';

interface FilterBarProps {
  activeFilter: ProductCategory | 'all';
  onFilterChange: (filter: ProductCategory | 'all') => void;
  productCounts: Record<ProductCategory | 'all', number>;
}

const filterOptions: { key: ProductCategory | 'all'; label: string; emoji: string }[] = [
  { key: 'all', label: 'All Products', emoji: '🎨' },
  { key: 'sf-souvenirs', label: 'SF Souvenirs', emoji: '🌉' },
  { key: 'vases', label: 'Vases & Decor', emoji: '🏺' },
  { key: 'lamps', label: 'Lamps', emoji: '💡' },
  { key: 'flexi-toys', label: 'Flexi Toys', emoji: '🐉' },
  { key: 'keychains', label: 'Keychains', emoji: '🔑' },
  { key: 'functional', label: 'Functional', emoji: '⚙️' },
  { key: 'home-decor', label: 'Home Decor', emoji: '🏠' },
];

export default function FilterBar({ activeFilter, onFilterChange, productCounts }: FilterBarProps) {
  return (
    <div className="bg-white border-2 border-neutral-200 rounded-xl p-6 shadow-md">
      <h3 className="text-lg font-bold text-neutral-900 mb-4">Filter by Category</h3>
      
      <div className="flex flex-wrap gap-3">
        {filterOptions.map((option) => {
          const isActive = activeFilter === option.key;
          const count = productCounts[option.key] || 0;
          
          return (
            <button
              key={option.key}
              onClick={() => onFilterChange(option.key)}
              className={`
                flex items-center space-x-2 px-4 py-3 rounded-lg font-semibold transition-all duration-200 transform hover:-translate-y-0.5 hover:shadow-lg
                ${isActive 
                  ? 'bg-primary-500 text-neutral-900 border-2 border-primary-600 shadow-lg' 
                  : 'bg-neutral-100 text-neutral-900 border-2 border-neutral-200 hover:border-primary-400 hover:bg-primary-50'
                }
              `}
            >
              <span className="text-lg">{option.emoji}</span>
              <span>{option.label}</span>
              <span className={`
                ml-1 px-2 py-0.5 rounded-full text-xs font-bold
                ${isActive 
                  ? 'bg-white text-primary-600' 
                  : 'bg-neutral-200 text-neutral-800'
                }
              `}>
                {count}
              </span>
            </button>
          );
        })}
      </div>
      
      {/* Results Summary */}
      <div className="mt-4 pt-4 border-t border-neutral-200">
        <p className="text-sm text-neutral-700">
          {activeFilter === 'all' 
            ? `Showing all ${productCounts.all} products` 
            : `Showing ${productCounts[activeFilter]} ${filterOptions.find(f => f.key === activeFilter)?.label.toLowerCase()} products`
          }
        </p>
      </div>
    </div>
  );
} 