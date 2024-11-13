import { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Input.module.scss';

const cn = classNames.bind(styles);

interface InputProps {
  placeholder: string;
  onChange?: (value: string) => void;
}

export default function Input({ placeholder, onChange }: InputProps) {
  const [inputValue, setInputValue] = useState<string>('');

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setInputValue(value);

    if (onChange) onChange(value);
  };

  return (
    <input
      type="text"
      placeholder={placeholder}
      className={cn('text-input')}
      value={inputValue}
      onChange={handleOnChange}
    />
  );
}
