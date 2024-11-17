import { ReactNode } from 'react';
import classNames from 'classnames/bind';
import styles from './IconButton.module.scss';

const cn = classNames.bind(styles);

interface IconButtonProps {
  onClick: () => void;
  children: ReactNode;
}

export default function IconButton({ onClick, children }: IconButtonProps) {
  return (
    <button type="button" onClick={onClick} className={cn('icon-button')}>
      {children}
    </button>
  );
}
