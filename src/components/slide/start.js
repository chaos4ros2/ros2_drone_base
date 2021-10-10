// import React, { useState, useEffect } from 'react'
import React from 'react';
import './slide.css';

function Start (props) {
    let title = props.title;
    let sub_title = 'ROS2でドローンを開発できる三つの選択肢';
    let author = 'by Chaos';

    return (
      <div>
        <h1 className="text-center">
            {title}</h1>
        <div className="container">
          <div className="position-relative">　</div>
          <div className="position-relative">　</div>
          <div className="position-relative">　</div>
          <div className="position-relative">　</div>
          <div className="position-relative">　</div>
          <h2 className="position-relative w-100 translate-middle text-primary text-center my-3">
            {sub_title}</h2>
          <h3 className="position-relative w-100 translate-middle text-primary text-center">
            {author}</h3>
          <div className="position-relative">　</div>
          <div className="position-relative">　</div>
        </div>
      </div>
    )
}

export default Start