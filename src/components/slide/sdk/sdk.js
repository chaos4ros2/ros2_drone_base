import React from 'react';
import '../slide.css';

function SDK (props) {
    let title = props.title;
    let structure_title = '仕組み';
    let structure_content = 'ドローンのSDKにROS2を適用させる';
    let development_title = 'SDK ✖ ドローン';
    let development_content = 'tello_ros';

    return (
      <div>
        <h1 className="text-center">
            {title}</h1>
        <div className="container">
          <div className="position-relative">　</div>
          <h2 className="position-relative text-center">
            {structure_title}</h2>
          <h3 className="position-relative text-center">{structure_content}</h3>
          <div className="position-relative">　</div>
          <div className="position-relative">　</div>
          <h2 className="position-relative text-center">
            {development_title}</h2> 
          <h3 className="position-relative text-center">
            <a href='https://github.com/chaos4ros2/tello_ros' target='_blank'>{development_content}</a>
          </h3>
          <div className="position-relative">　</div>
        </div>
      </div>
    )
}

export default SDK;