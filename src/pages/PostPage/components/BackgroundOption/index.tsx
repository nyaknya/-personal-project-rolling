import classNames from 'classnames/bind';
import styles from './BackgroundOption.module.scss';

const cn = classNames.bind(styles);

interface BackgroundOptionProps {
  background: string;
  selected: boolean;
  onSelect: (color: string) => void;
}

export default function BackgroundOption({
  background,
  selected,
  onSelect,
}: BackgroundOptionProps) {
  return (
    <div
      className={cn('background-option')}
      onClick={() => onSelect(background)}
      role="button"
      tabIndex={0}
      style={{ backgroundImage: `url(${background})` }}
      onKeyDown={(e) => e.key === 'Enter' && onSelect(background)}
    >
      {selected && (
        <img src="/images/colorselected.svg" alt="백그라운드 셀렉" />
      )}
    </div>
  );
}
