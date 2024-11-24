import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './ProfileSelect.module.scss';
import apiRequest from '../../../../utils/apiRequest';
import BackgroundList from '../BackgroundList';

const cn = classNames.bind(styles);

interface ProfileSelectProps {
  selected?: string;
  onSelect?: (color: string) => void;
}

export default function ProfileSelect({
  selected,
  onSelect,
}: ProfileSelectProps) {
  const [profileList, setProfileList] = useState<string[]>([]);

  const getProfileList = async () => {
    try {
      const data = await apiRequest({
        endpoint: '/profile-images/',
        useAlternateBase: true,
      });
      setProfileList(data.imageUrls);
    } catch (error) {
      console.error(error);
    }
  };

  const defaultImage = profileList[0];

  useEffect(() => {
    getProfileList();
  }, []);

  return (
    <div className={cn('profile-select')}>
      <div className={cn('now-selected')}>
        <img src={defaultImage} alt="현재 선택된 이미지" />
      </div>
      <div className={cn('profile-list')}>
        <span>프로필 이미지를 선택해주세요!</span>
        <ul>
          {profileList.map((profile) => (
            <li key={profile}>
              <img src={profile} alt="프로필 리스트 이미지" />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
