import { useEffect, useState, useCallback } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

import classNames from 'classnames/bind';
import styles from './CardList.module.scss';
import apiRequest from '../../../utils/apiRequest';
import Card from '../Card';
import { CardListResultData } from '../../../types';

const cn = classNames.bind(styles);

interface CardListProps {
  sort?: string;
}

export default function CardList({ sort }: CardListProps) {
  const [cardlist, setCardlist] = useState<CardListResultData[]>([]);

  const getCardlist = useCallback(async () => {
    try {
      const endpoint = `/recipients/?limit=20&${sort ? `sort=${sort}` : ''}`;
      const data = await apiRequest({ endpoint });
      setCardlist(data.results);
    } catch (error) {
      console.error(error);
    }
  }, [sort]);

  useEffect(() => {
    getCardlist();
  }, [getCardlist]);

  return (
    <div className={cn('card-list-wrap')}>
      <Swiper
        spaceBetween={20}
        slidesPerView={4}
        slidesPerGroup={4}
        navigation={{
          nextEl: `.${cn('next')}`,
          prevEl: `.${cn('prev')}`,
        }}
        modules={[Navigation]}
      >
        <button
          className={cn('swiper-button', 'prev')}
          aria-label="Previous Slide"
        >
          <img src="/images/arrowleft.svg" alt="Previous" />
        </button>
        <button className={cn('swiper-button', 'next')} aria-label="Next Slide">
          <img src="/images/arrowright.svg" alt="Next" />
        </button>
        {cardlist?.map((list) => (
          <SwiperSlide key={list.id} className={cn('card-list-item')}>
            <Card data={list} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
