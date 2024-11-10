import classNames from 'classnames/bind';
import styles from './ListCard.module.scss';
import { Link } from 'react-router-dom';

const cn = classNames.bind(styles);

export default function ListCard() {
  return (
    <div>
      <Link to="/"></Link>
    </div>
  );
}
