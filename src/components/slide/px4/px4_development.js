import React from 'react';
import '../slide.css';

function Px4Development (props) {
    let title = props.title;
    let demo_title = 'デモ';
    let demo_content = 'px4_demo';
    let build_title = '環境構築';
    let build_content = '環境構築手順';
    let development_title = '開発';
    let development_content = '開発手順';

    return (
      <div>
        <h1 className="text-center">
            {title}</h1>
        <div className="container">
          <div className="position-relative">　</div>
          <h2 className="position-relative w-20 m-auto">
            {demo_title}</h2>
          <h3 className="position-relative text-center">
            <a href='https://docs.px4.io/master/en/ros/ros2_comm.html#sanity-check-the-installation' target='_blank'>{demo_content}</a>
          </h3>
          <div className="position-relative">　</div>
          <h2 className="position-relative w-20 m-auto mb-5">
            {build_title}</h2>
          <h3 className="position-relative text-center">
            <a href='http://localhost:3000/docs/px4/environmental_construction' target='_blank'>{build_content}</a>
          </h3>
          <div className="position-relative">　</div>
          <h2 className="position-relative w-20 m-auto">
            {development_title}</h2>
          <h3 className="position-relative text-center">
            <a href='https://docs.px4.io/master/en/ros/ros2_comm.html#ros-2-example-applications' target='_blank'>{development_content}</a>
          </h3>
          <div className="position-relative">　</div>
        </div>
      </div>
    )
}

export default Px4Development;