import React, { useRef } from 'react';
import classNames from 'classnames/bind';
import styles from './Popover.module.scss';
import useOutsideClick from '../../../../hooks/useOutSideClick';

const cn = classNames.bind(styles);

interface PopoverProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  children: React.ReactNode;
}

export default function Popover({ isOpen, setIsOpen, children }: PopoverProps) {
  const popoverRef = useRef<HTMLDivElement>(null);

  useOutsideClick({
    ref: popoverRef,
    callback: (event: MouseEvent) => {
      const target = event.target as HTMLElement;

      if (target.closest('.post-share')) return;

      setIsOpen(false);
    },
    enabled: isOpen,
  });

  if (!isOpen) return null;

  return (
    <div ref={popoverRef} className={cn('popover')}>
      {children}
    </div>
  );
}
