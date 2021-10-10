import React from 'react';
import './slide.css';

function Comparison (props) {
    let title = props.title;
    let demo_title = 'デモ';
    let demo_content = 'px4_demo';
    let build_title = '環境構築';
    let build_content = '環境構築手順';
    let development_title = '開発';
    let development_content = '開発手順';

    return (
      <div>
        <h1 className="text-center">{title}</h1>
        <div className="position-relative">　</div>
        <table>
          <tr>
            <th>Core</th><th>Interface</th><th>Flexibility</th><th>Doc</th>
          </tr>
          <tr>
            <td>micro-ROS</td><td>rcl</td><td>〇</td><td>◎</td>
          </tr>
          <tr>
            <td>PX4</td><td>rclcpp</td><td>〇</td><td>〇</td>
          </tr>
          <tr>
            <td>SDK</td><td>rclpy/rclcpp</td><td>◎</td><td>△</td>
          </tr>
        </table>
      </div>
    )
}

export default Comparison;