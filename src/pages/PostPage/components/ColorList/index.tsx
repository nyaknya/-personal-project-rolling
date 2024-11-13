import { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './ColorList.module.scss';
import ColorOption from '../ColorOption';

const cn = classNames.bind(styles);

export default function ColorList() {
  const [selectedColor, setSelectedColor] = useState<string | null>('Beige');

  const handleColorSelect = (color: string) => {
    setSelectedColor(color);
  };

  return (
    <div className={cn('color-list')}>
      <ColorOption
        color="Beige"
        selected={selectedColor === 'Beige'}
        onSelect={handleColorSelect}
      />
      <ColorOption
        color="Purple"
        selected={selectedColor === 'Purple'}
        onSelect={handleColorSelect}
      />
      <ColorOption
        color="Blue"
        selected={selectedColor === 'Blue'}
        onSelect={handleColorSelect}
      />
      <ColorOption
        color="Green"
        selected={selectedColor === 'Green'}
        onSelect={handleColorSelect}
      />
    </div>
  );
}
