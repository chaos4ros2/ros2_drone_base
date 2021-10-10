import React from 'react';
import '../slide.css';

function MicroRosDevelopment (props) {
    let title = props.title;
    let demo_title = 'デモ';
    let demo_content = 'crazyflie_demo';
    let development_title = '開発手順';
    let features_list = [
        'ファームウェア用ワークスペースの作成', 
        'ファームウェアのビルド',
        'ファームウェアの書き込み',
        'ファームウェアの開発',
    ];

    return (
      <div>
        <h1 className="text-center">
            {title}</h1>
        <div className="container">
          <div className="position-relative">　</div>
          <h2 className="position-relative w-32 m-auto">
            {demo_title}</h2>
          <h3 className="w-32 m-auto text-center">
            <a href='https://github.com/micro-ROS/micro-ROS_crazyflie_demo/tree/foxy#micro-ros-crazyflie-demo' target='_blank'>{demo_content}</a>
          </h3>
          <div className="position-relative">　</div>
          <div className="position-relative">　</div>
          <h2 className="position-relative w-32 m-auto">
            {development_title}</h2> 
          <ul className="w-32 m-auto">
            { features_list.map( (value) => <li>{value}</li>) }
          </ul> 
          <div className="position-relative">　</div>
        </div>
      </div>
    )
}

export default MicroRosDevelopment;