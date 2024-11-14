import classNames from 'classnames/bind';
import styles from './ColorList.module.scss';
import BackgroundOption from '../BackgroundOption';
import { useState } from 'react';
import apiRequest from '../../../../utils/apiRequest';

const cn = classNames.bind(styles);

export default function BackgroundList() {
  const [selectedColor, setSelectedColor] = useState<string | null>('Beige');

  const getBackgroundList = async () => {
    try{
      const data = await apiRequest({endpoint: ""})
    }
  }

  const handleColorSelect = (background: string) => {
    setSelectedColor(background);
  };

  return (
    <div className={cn('background-list')}>
      <BackgroundOption background="" />
      <BackgroundOption background="" />
      <BackgroundOption background="" />
      <BackgroundOption background="" />
    </div>
  );
}
