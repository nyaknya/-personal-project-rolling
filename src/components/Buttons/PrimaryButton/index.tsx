import { ReactNode } from 'react';
import classNames from 'classnames/bind';
import styles from './PrimaryButton.module.scss';

const cn = classNames.bind(styles);

interface PrimaryButtonProps {
  onClick: () => void;
  children: ReactNode;
  size?: 'L' | 'M' | 'S' | 'XS';
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

export default function PrimaryButton({
  onClick,
  children,
  size = 'M',
  type = 'button',
  disabled = false,
}: PrimaryButtonProps) {
  return (
    <button
      onClick={onClick}
      type={type}
      className={cn('primary-button', {
        large: size === 'L',
        medium: size === 'M',
        small: size === 'S',
        xsmall: size === 'XS',
      })}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
