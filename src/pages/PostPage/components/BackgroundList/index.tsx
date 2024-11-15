import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './BackgroundList.module.scss';
import BackgroundOption from '../BackgroundOption';
import apiRequest from '../../../../utils/apiRequest';

const cn = classNames.bind(styles);

interface BackgroundListProps {
  selectedBackground: string | null;
  onBackgroundChange: (color: string) => void;
}

export default function BackgroundList({
  selectedBackground,
  onBackgroundChange,
}: BackgroundListProps) {
  const [backgroundList, setBackgroundList] = useState<string[]>([]);

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

  return (
    <div className={cn('background-list')}>
      {backgroundList.map((background) => (
        <BackgroundOption
          key={background}
          background={background}
          selected={selectedBackground === background}
          onSelect={onBackgroundChange}
        />
      ))}
    </div>
  );
}
