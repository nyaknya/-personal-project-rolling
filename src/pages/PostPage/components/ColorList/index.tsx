import { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './ColorList.module.scss';
import ColorOption from '../ColorOption';

const cn = classNames.bind(styles);

interface ColorListProps {
  selectedColor: string;
  onColorChange: (color: string) => void;
}

export default function ColorList({
  selectedColor,
  onColorChange,
}: ColorListProps) {
  return (
    <div className={cn('color-list')}>
      <ColorOption
        color="Beige"
        selected={selectedColor === 'Beige'}
        onSelect={onColorChange}
      />
      <ColorOption
        color="Purple"
        selected={selectedColor === 'Purple'}
        onSelect={onColorChange}
      />
      <ColorOption
        color="Blue"
        selected={selectedColor === 'Blue'}
        onSelect={onColorChange}
      />
      <ColorOption
        color="Green"
        selected={selectedColor === 'Green'}
        onSelect={onColorChange}
      />
    </div>
  );
}
