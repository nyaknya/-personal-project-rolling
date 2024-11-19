import { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './PostPage.module.scss';
import DefaultHeader from '../../components/Header/DefaultHeader';
import PrimaryButton from '../../components/Buttons/PrimaryButton';
import Input from '../../components/TextField/Input';
import ColorList from './components/ColorList';
import BackgroundList from './components/BackgroundList';
import apiRequest from '../../utils/apiRequest';

const cn = classNames.bind(styles);

export default function PostPage() {
  const [posttName, setPostName] = useState<string>('');
  const [toggleTab, setToggleTab] = useState<string | null>('컬러');
  const [selectedColor, setSelectedColor] = useState<string>('Beige');
  const [selectedBackground, setSelectedBackground] = useState<string | null>(
    null,
  );

  const handleButtonClick = async () => {
    const body = {
      team: '3-심은주',
      name: posttName,
      backgroundColor: selectedColor.toLowerCase(),
      backgroundImageURL: selectedBackground,
    };

    try {
      const response = await apiRequest({
        endpoint: '/recipients/',
        method: 'POST',
        body,
      });
    } catch (error) {
      console.error('API 요청 실패:', error);
    }
  };

  const handleOnTabClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const text = e.currentTarget.textContent;
    setToggleTab(text);
  };

  const handleBackgroundSelect = (background: string | null) => {
    if (selectedBackground === background) {
      setSelectedBackground(null);
    } else {
      setSelectedBackground(background);
    }
  };

  const handleColorChange = (color: string) => {
    setSelectedColor(color);
  };
  return (
    <>
      <DefaultHeader />
      <main>
        <section className={cn('post-add-content')}>
          <h2>To.</h2>
          <Input
            placeholder="받는 사람 이름을 입력해 주세요"
            onChange={(value) => setPostName(value)}
          />
        </section>
        <section className={cn('post-add-content')}>
          <h2>배경화면을 선택해 주세요.</h2>
          <p>
            컬러를 선택하거나, 이미지를 선택할 수 있습니다. 기본값은 컬러의
            베이지 색상입니다.
          </p>
          <div className={cn('toggle-tab')}>
            <div
              className={cn(
                'now-active',
                toggleTab === '이미지' ? 'image' : 'color',
              )}
            >
              {toggleTab}
            </div>
            <button type="button" onClick={handleOnTabClick}>
              컬러
            </button>
            <button type="button" onClick={handleOnTabClick}>
              이미지
            </button>
          </div>
          <div className={cn('toggle-tab-content')}>
            {toggleTab === '이미지' ? (
              <BackgroundList
                selectedBackground={selectedBackground}
                onBackgroundChange={handleBackgroundSelect}
              />
            ) : (
              <ColorList
                selectedColor={selectedColor}
                onColorChange={handleColorChange}
              />
            )}
          </div>
        </section>
        <section className={cn('button-area')}>
          <PrimaryButton
            size="L"
            onClick={handleButtonClick}
            disabled={!posttName || !(selectedColor || selectedBackground)}
          >
            생성하기
          </PrimaryButton>
        </section>
      </main>
    </>
  );
}
