import classNames from 'classnames/bind';
import styles from './BackgroundOption.module.scss';

const cn = classNames.bind(styles);

interface BackgroundOptionProps {
  background: string;
  selected: boolean;
  onSelect: (background: string | null) => void;
}

export default function BackgroundOption({
  background,
  selected,
  onSelect,
}: BackgroundOptionProps) {
  const handleClick = () => {
    if (selected) {
      onSelect(null);
    } else {
      onSelect(background);
    }
  };

  return (
    <div
      className={cn('background-option', { selected })}
      onClick={handleClick}
      role="button"
      tabIndex={0}
      style={{
        backgroundImage: `url(${background})`,
      }}
      onKeyDown={(e) => e.key === 'Enter' && handleClick()}
    >
      {selected && (
        <img src="/images/colorselected.svg" alt="백그라운드 선택됨" />
      )}
    </div>
  );
}
