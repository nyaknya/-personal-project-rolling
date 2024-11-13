import { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Input.module.scss';

const cn = classNames.bind(styles);
interface InputProps {
  placeholder: string;
}

export default function Input({ placeholder }: InputProps) {
  const [inputValue, setInputValue] = useState<string>('');

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
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
