import { ReactNode } from 'react';
import classNames from 'classnames/bind';
import styles from './PrimaryButton.module.scss';

const cn = classNames.bind(styles);

interface PrimaryButtonProps {
  onClick: () => void;
  children: ReactNode;
  size?: 'L' | 'M' | 'S';
  type?: 'button' | 'submit' | 'reset';
}

export default function PrimaryButton({
  onClick,
  children,
  size = 'M',
  type = 'button',
}: PrimaryButtonProps) {
  return (
    <button
      onClick={onClick}
      type={type}
      className={cn('primary-button', {
        large: size === 'L',
        medium: size === 'M',
        small: size === 'S',
      })}
    >
      {children}
    </button>
  );
}
