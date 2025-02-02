import { useState, useEffect } from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select';

const ProductSort = ({ onSort }: { onSort: (value: string) => void }) => {
  const [sort, setSort] = useState('default');

  useEffect(() => {
    onSort(sort);
  }, [sort]);

  return (
    <div className='flex justify-end items-center gap-2'>
      <Select value={sort} onValueChange={setSort}>
        <SelectTrigger className='w-40'>
          <SelectValue placeholder='Sort by' />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value='default'>Default</SelectItem>
          <SelectItem value='lowest'>Lowest price</SelectItem>
          <SelectItem value='highest'>Highest price</SelectItem>
          <SelectItem value='a-z'>A-Z</SelectItem>
          <SelectItem value='z-a'>Z-A</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};

export default ProductSort;
