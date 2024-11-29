import { ReactNode } from 'react';
import classNames from 'classnames/bind';
import styles from './Toast.module.scss';

const cn = classNames.bind(styles);

interface ToastProps {
  onClose: () => void;
  children: ReactNode;
}

export default function Toast({ onClose, children }: ToastProps) {
  return (
    <div className={cn('toast-container')}>
      <img src="/images/completed.svg" alt="체크 아이콘" />
      <span>{children}</span>
      <img src="/images/close.svg" alt="닫기 버튼" onClick={onClose} />
    </div>
  );
}
