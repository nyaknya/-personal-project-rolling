import classNames from 'classnames/bind';
import styles from './ColorOption.module.scss';

const cn = classNames.bind(styles);

interface ColorOptionProps {
  color: 'Beige' | 'Purple' | 'Blue' | 'Green';
  selected: boolean;
  onSelect: (color: string) => void;
}

export default function ColorOption({
  color,
  selected,
  onSelect,
}: ColorOptionProps) {
  return (
    <div
      className={cn(color, 'color-option')}
      onClick={() => onSelect(color)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && onSelect(color)}
    >
      {selected && <img src="/images/colorselected.svg" alt="컬러 셀렉" />}
    </div>
  );
}
