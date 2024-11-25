import { useEffect, useState, useCallback } from 'react';
import classNames from 'classnames/bind';
import styles from './ProfileSelect.module.scss';
import apiRequest from '../../../../utils/apiRequest';

const cn = classNames.bind(styles);

interface ProfileSelectProps {
  selected: string | null;
  onSelect: (profile: string) => void;
}

export default function ProfileSelect({
  selected,
  onSelect,
}: ProfileSelectProps) {
  const [profileList, setProfileList] = useState<string[]>([]);

  const getProfileList = useCallback(async () => {
    try {
      const data = await apiRequest({
        endpoint: '/profile-images/',
        useAlternateBase: true,
      });
      setProfileList(data.imageUrls);
      if (data.imageUrls.length > 0 && !selected) {
        onSelect(data.imageUrls[0]);
      }
    } catch (error) {
      console.error(error);
    }
  }, [onSelect, selected]);

  useEffect(() => {
    getProfileList();
  }, [getProfileList]);

  return (
    <div className={cn('profile-select')}>
      <div className={cn('now-selected')}>
        <img src={selected || profileList[0]} alt="현재 선택된 이미지" />
      </div>
      <div className={cn('profile-list')}>
        <span>프로필 이미지를 선택해주세요!</span>
        <ul>
          {profileList.map((profile) => (
            <li
              key={profile}
              onClick={() => onSelect(profile)}
              className={cn({ selected: selected === profile })}
            >
              {selected === profile && (
                <img
                  src="/images/check.svg"
                  alt="선택됨"
                  className={cn('check')}
                />
              )}
              <img
                src={profile}
                alt="프로필 리스트 이미지"
                className={cn('profile-image')}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
