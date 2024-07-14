import React from 'react';
import './Page1.css';
//import { Link } from 'react-router-dom';// 追加 Linkタブを読み込む
import Sidebar from "./components/Sidebar"

class Page1 extends React.Component {   //Page1クラスにReact.Componentを継承する
    render() {                          //画面表示の為のrenderメソッドを定義する
        return (
            <div className="Page1">
                <Sidebar /> {/* サイドバーを作成するコンポーネント */}
            </div>
        );
    }
}
export default Page1;