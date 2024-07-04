import React from 'react';              //Reactを読み込んでいる
import { Link } from 'react-router-dom';// 追加 Linkタブを読み込む

class Page1 extends React.Component {   //Page1クラスにReact.Componentを継承する

    render() {                          //画面表示の為のrenderメソッドを定義する
        return (
            <div>
                <h1>RagApp</h1>
                <br/>
                <Link to={`/page2`}>RAGマニュアル作成</Link><br/>  {/* 追加　Go To page2をクリックするとhttp://localhost:3000/page2に遷移する */}
                <Link to={`/page3`}>マニュアルHTML化</Link>  {/* 追加　Go To page2をクリックするとhttp://localhost:3000/page2に遷移する */}
            </div>
        );
    }
}
export default Page1;