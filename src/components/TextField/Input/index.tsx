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
  const [isEmpty, setIsEmpty] = useState<boolean>(false);

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setInputValue(value);

    if (onChange) onChange(value);
  };

  const handleIsEmpty = (e: React.FocusEvent<HTMLInputElement>) => {
    if (e.currentTarget.textContent === '') {
      setIsEmpty(true);
    } else {
      setIsEmpty(false);
    }
  };

  return (
    <div className={cn('input-box')}>
      <input
        type="text"
        placeholder={placeholder}
        className={cn('text-input', { isEmpty })}
        value={inputValue}
        onChange={handleOnChange}
        onBlur={handleIsEmpty}
      />
      {isEmpty && <span className={cn({ isEmpty })}>값을 입력해 주세요.</span>}
    </div>
  );
}
