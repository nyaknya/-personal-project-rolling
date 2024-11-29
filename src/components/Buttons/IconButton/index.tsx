import { ReactNode } from 'react';
import classNames from 'classnames/bind';
import styles from './IconButton.module.scss';

const cn = classNames.bind(styles);

interface IconButtonProps {
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  children: ReactNode;
  classname?: string;
}

export default function IconButton({
  onClick,
  children,
  classname,
}: IconButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn('icon-button', classname)}
    >
      {children}
    </button>
  );
}
