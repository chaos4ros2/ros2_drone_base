import React from 'react';
import '../slide.css';

function MicroRosOverview (props) {
    let title = props.title;
    let concept_title = 'コンセプト';
    let concept_content = 'ROS2を組込みシステムで使えるようにする';
    let feature_title = '特徴';
    let features_list = [
        'スタンダードROS2と親和性の高い開発体験', 
        '複数リアルタイムOS、ボードへのサポート',
        'ドキュメンテーションおよびデモの充実さ'
    ];

    return (
      <div>
        <h1 className="text-center">
            {title}</h1>
        <div className="container">
          <div className="position-relative">　</div>
          <h2 className="position-relative w-32 m-auto mb-5">
            {concept_title}</h2>
          <h3 className="w-32 m-auto">
            <a href='https://micro.ros.org/docs/overview/ROS_2_feature_comparison/' target='_blank'>{concept_content}</a>
          </h3>
          <div className="position-relative">　</div>
          <div className="position-relative">　</div>
          <h2 className="position-relative w-32 m-auto">
            {feature_title}</h2> 
          <ul className="w-32 m-auto">
            { features_list.map( (value) => <li>{value}</li>) }
          </ul> 
          <div className="position-relative">　</div>
          <div className="position-relative">　</div>
        </div>
      </div>
    )
}

export default MicroRosOverview;