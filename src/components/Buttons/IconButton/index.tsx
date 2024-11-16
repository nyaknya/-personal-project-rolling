import classNames from 'classnames/bind';
import styles from './IconButton.module.scss';
import { ReactNode } from 'react';

const cn = classNames.bind(styles);

interface IconButtonProps {
  onClick: () => void;
  children: ReactNode;
}

export default function IconButton({ onClick, children }: IconButtonProps) {
  return (
    <button type="button" onClick={onClick}>
      {children}
    </button>
  );
}
