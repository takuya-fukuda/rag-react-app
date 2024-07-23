import React from 'react';
import './Page1.css';
//import { Link } from 'react-router-dom';// 追加 Linkタブを読み込む
import Sidebar from "./components/Sidebar"

const Page1 = () => {
    return (
        <div className="Page1">
            <Sidebar /> {/* サイドバーを作成するコンポーネント */}
            <div className="Content">
                <h1>RAG APP</h1>
                    <p>これはRAGアプリのサンプルUIです</p>
                    <p>設計書⇒マニュアル</p>
                    <p>マニュアルからHTML化</p>
                    <p>HTMLのアップロード</p>
                    <p>RAGの回答</p>                    
            </div>
        </div>
    );
}
export default Page1;