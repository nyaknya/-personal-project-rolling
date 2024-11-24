import { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Select.module.scss';

const cn = classNames.bind(styles);

interface CustomSelectProps {
  options: string[];
  selected: string;
  onSelect: (option: string) => void;
}

export default function Select({
  options,
  selected,
  onSelect,
}: CustomSelectProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  const handleOptionClick = (option: string) => {
    onSelect(option);
    setIsOpen(false);
  };

  return (
    <div
      className={cn('custom-select', { open: isOpen })}
      onClick={toggleDropdown}
    >
      <div className={cn('selected-option')}>
        {selected}
        <span className={cn('arrow')} />
      </div>
      {isOpen && (
        <ul className={cn('options')}>
          {options.map((option) => (
            <li
              key={option}
              onClick={() => handleOptionClick(option)}
              className={cn({ selected: selected === option }, 'option')}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
