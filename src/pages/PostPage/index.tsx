import { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './PostPage.module.scss';
import DefaultHeader from '../../components/Header/DefaultHeader';
import PrimaryButton from '../../components/Buttons/PrimaryButton';
import Input from '../../components/TextField/Input';
import ColorList from './components/ColorList';

const cn = classNames.bind(styles);

export default function PostPage() {
  const [posttName, setPostName] = useState<string>('');
  const [toggleTab, setToggleTab] = useState<string | null>('컬러');

  const handleOnTabClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const text = e.currentTarget.textContent;
    setToggleTab(text);
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
          <p>컬러를 선택하거나, 이미지를 선택할 수 있습니다.</p>
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
            {toggleTab === '이미지' ? null : <ColorList />}
          </div>
        </section>
        <section className={cn('button-area')}>
          <PrimaryButton
            size="L"
            onClick={() => console.log('받는 사람:', posttName)}
          >
            생성하기
          </PrimaryButton>
        </section>
      </main>
    </>
  );
}
