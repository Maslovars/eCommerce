import { useState, useEffect, useRef } from 'react';

export const useOutsideClick = (initialValue: boolean) => {
  const [isActive, setIsActive] = useState(initialValue);
  const ref = useRef<any>(null);

  const handleClick = (e: MouseEvent) => {
    if (ref.current && !ref.current.contains(e.target as Node)) {
      setIsActive(!isActive);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClick);
    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, [isActive]);

  return { ref, isActive, setIsActive };
};
