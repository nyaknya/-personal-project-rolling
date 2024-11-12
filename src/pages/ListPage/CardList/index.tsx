/* eslint-disable */
import { useEffect, useState, useCallback, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { Swiper as SwiperType } from 'swiper';
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
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

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
      <button
        ref={prevRef}
        className={cn('swiper-button', 'prev')}
        aria-label="Previous Slide"
      >
        <img src="/images/arrowleft.svg" alt="Previous" />
      </button>
      <button
        ref={nextRef}
        className={cn('swiper-button', 'next')}
        aria-label="Next Slide"
      >
        <img src="/images/arrowright.svg" alt="Next" />
      </button>

      <Swiper
        spaceBetween={20}
        slidesPerView={4}
        slidesPerGroup={4}
        modules={[Navigation]}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onBeforeInit={(swiper: SwiperType) => {
          const { params } = swiper;
          if (params.navigation && typeof params.navigation !== 'boolean') {
            params.navigation.prevEl = prevRef.current;
            params.navigation.nextEl = nextRef.current;
          }
        }}
        breakpoints={{
          320: {
            slidesPerView: 2,
            spaceBetween: 12,
            slidesPerGroup: 1,
          },
          768: {
            slidesPerView: 3,
            slidesPerGroup: 1,
          },
          1024: {
            slidesPerView: 4,
            slidesPerGroup: 1,
          },
        }}
      >
        {cardlist.map((list) => (
          <SwiperSlide key={list.id} className={cn('card-list-item')}>
            <Card data={list} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
