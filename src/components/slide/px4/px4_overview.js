import React from 'react';
import '../slide.css';

function Px4Overview (props) {
    let title = props.title;
    let overview_title = '概略';
    let overview_list = [
        'オープンソースのフライトコントローラー用ファームウェア',
        '無人機、特にドローンに特化した開発プラットフォーム',
        'Dronecodeから分裂していて、ドローン開発といえばPX4とArduPilotの2強の局面になっている。'
    ]
    let feature_title = '特徴';
    let features_list = [
        '高度なモジュール化', 
        'コミュニティーの活発さ',
        '開発用のAPIやSDKの充実さ',
        '自動飛行タスク向けの機能の豊富さ'
    ];

    return (
      <div>
        <h1 className="text-center">
            {title}</h1>
        <div className="container">
          <div className="position-relative mb-5">　</div>
          <h2 className="position-relative w-50 m-auto">
            {overview_title}</h2>
          <ul className="text-primary w-50 m-auto">
            { overview_list.map( (value) => <li>{value}</li>) }
          </ul> 
          <div className="position-relative mb-5">　</div>
          <h2 className="position-relative w-50 m-auto">
            <a href='https://px4.io/software/software-overview/' target='_blank'>{feature_title}</a></h2>
          <ul className="text-primary w-50 m-auto">
            { features_list.map( (value) => <li>{value}</li>) }
          </ul> 
        </div>
      </div>
    )
}

export default Px4Overview;