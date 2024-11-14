import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './BackgroundList.module.scss';
import BackgroundOption from '../BackgroundOption';
import apiRequest from '../../../../utils/apiRequest';

const cn = classNames.bind(styles);

export default function BackgroundList() {
  const [backgroundList, setBackgroundList] = useState<string[]>([]);
  const [selectedBackground, setSelectedBackground] = useState<string | null>(
    'https://picsum.photos/id/683/3840/2160',
  );

  const getBackgroundList = async () => {
    try {
      const data = await apiRequest({
        endpoint: '/background-images/',
        useAlternateBase: true,
      });
      setBackgroundList(data.imageUrls);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getBackgroundList();
  }, []);

  const handleColorSelect = (background: string) => {
    setSelectedBackground(background);
  };

  return (
    <div className={cn('background-list')}>
      {backgroundList.map((background) => (
        <BackgroundOption
          key={background}
          background={background}
          selected={selectedBackground === background}
          onSelect={handleColorSelect}
        />
      ))}
    </div>
  );
}
