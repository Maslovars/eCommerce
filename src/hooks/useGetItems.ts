import { useEffect, useState } from 'react';
import { Items } from '../types.ts';

export const useGetItems = () => {
  const [items, setItems] = useState<Items[]>([]);
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);

  return items;
};
