import React, { useRef } from 'react';
import classNames from 'classnames/bind';
import styles from './Popover.module.scss';
import useOutsideClick from '../../../../hooks/useOutSideClick';

const cn = classNames.bind(styles);

interface PopoverProps {
  onClose: () => void;
  children: React.ReactNode;
}

export default function Popover({ onClose, children }: PopoverProps) {
  const popoverRef = useRef<HTMLDivElement>(null);

  useOutsideClick({
    ref: popoverRef,
    callback: onClose,
  });

  return (
    <div ref={popoverRef} className={cn('popover')}>
      {children}
    </div>
  );
}
