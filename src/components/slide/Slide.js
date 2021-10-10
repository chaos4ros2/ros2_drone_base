// reactのインプットは必須
import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import Start from './start';
import MicroRosOverview from './micro_ros/micro_ros_overview';
import MicroRosDevelopment from './micro_ros/micro_ros_development';
import Px4Overview from './px4/px4_overview';
import Px4Development from './px4/px4_development';
import SDK from './sdk/sdk';
import Comparison from './comparison';
import End from './end';

// 日付取得
const today = new Date();
const date = `${today.getFullYear()}/${today.getMonth()+1}/${today.getDate()}`;

// todo：ページの配列を渡して自動作成、表示非表示パラメーター
function Slide() {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        <Start title='どうしてもROS2でドローンを弄りたいあなたに幸あれ'/>
      </SwiperSlide>
      <SwiperSlide>
        <MicroRosOverview title='選択肢 1：micro-ROS' />
      </SwiperSlide>
      <SwiperSlide>
        <MicroRosDevelopment title='micro-ROS ✖ ドローン' />
      </SwiperSlide>
      <SwiperSlide>
        <Px4Overview title='選択肢 2：PX4' />
      </SwiperSlide>
      <SwiperSlide>
        <Px4Development title='PX4 ✖ ドローン' />
      </SwiperSlide>
      <SwiperSlide>
        <SDK title='選択肢 3：SDK' />
      </SwiperSlide>        
      <SwiperSlide>
        <Comparison title='比較' />
      </SwiperSlide>        
      <SwiperSlide>
        <End date={date} />
      </SwiperSlide>
    </Swiper>
  );
}

export default Slide;