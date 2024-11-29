import { useEffect } from 'react';

export type UseOutsideClickProps<T> = {
  ref: React.RefObject<T>;
  callback: (event: MouseEvent) => void;
  enabled?: boolean;
};

export default function useOutsideClick<
  T extends HTMLElement = HTMLDivElement,
>({ ref, callback, enabled = true }: UseOutsideClickProps<T>) {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        callback(event);
      }
    };

    if (enabled) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      if (enabled) {
        document.removeEventListener('mousedown', handleClickOutside);
      }
    };
  }, [ref, callback, enabled]);
}
