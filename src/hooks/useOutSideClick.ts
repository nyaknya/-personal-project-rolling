import { useEffect } from 'react';

export type useOutSideClickProps<T> = {
  ref: React.RefObject<T>;
  callback: () => void;
  enabled?: boolean;
};

export default function useOutsideClick<
  T extends HTMLElement = HTMLDivElement,
>({ ref, callback, enabled = true }: useOutSideClickProps<T>) {
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        callback();
      }
    };

    if (enabled) {
      document.addEventListener('click', handleClickOutside);
    }

    return () => {
      if (enabled) {
        document.removeEventListener('click', handleClickOutside);
      }
    };
  }, [ref, callback, enabled]);
}
