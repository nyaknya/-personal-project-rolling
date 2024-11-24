import { useState, useRef } from 'react';
import classNames from 'classnames/bind';
import styles from './Select.module.scss';
import useOutsideClick from '../../../hooks/useOutSideClick';

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
  const selectRef = useRef<HTMLDivElement>(null);

  useOutsideClick({
    ref: selectRef,
    callback: () => setIsOpen(false),
    enabled: isOpen,
  });

  const toggleDropdown = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
    setIsOpen((prev) => !prev);
  };

  const handleOptionClick = (option: string) => {
    onSelect(option);
    setIsOpen(false);
  };

  return (
    <div className={cn('custom-select', { open: isOpen })} ref={selectRef}>
      <div className={cn('selected-option')} onClick={toggleDropdown}>
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
