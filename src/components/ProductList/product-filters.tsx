import { useCategories } from '@/hooks/useCategories';
import { RadioGroup, RadioGroupItem } from '../ui/radio-group';
import { Label } from '../ui/label';
import { Button } from '../ui/button';
import { useState } from 'react';
import { cn } from '@/lib/utils';

const ProductFilters = ({
  onCategoryChange,
  isOpen,
}: {
  onCategoryChange: (category: string) => void;
  isOpen: boolean;
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const { data, isLoading, error } = useCategories();

  const handleCategoryChange = (value: string) => {
    setSelectedCategory(value);
    onCategoryChange(value);
  };

  const handleClearFilters = () => {
    setSelectedCategory(null);
    onCategoryChange('');
  };

  return (
    <aside className={cn('filters', isOpen ? 'block' : 'hidden md:block')}>
      <h2 className='text-lg font-bold mb-4'>Filters</h2>
      {isLoading && <div>Loading...</div>}
      {error && <div>Error loading categories</div>}
      {data && (
        <RadioGroup
          onValueChange={handleCategoryChange}
          value={selectedCategory || ''}
        >
          <h3 className='text-sm font-bold mb-2'>Categories</h3>
          {data.map((category: string) => (
            <div
              className='flex items-center space-x-2 cursor-pointer w-full'
              key={category}
            >
              <RadioGroupItem value={category} id={category} />
              <Label htmlFor={category} className='cursor-pointer'>
                {category.toUpperCase()}
              </Label>
            </div>
          ))}
        </RadioGroup>
      )}
      <Button className='mt-8' onClick={handleClearFilters}>
        Clear filters
      </Button>
    </aside>
  );
};

export default ProductFilters;
