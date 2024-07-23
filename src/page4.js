import React from 'react';
import './Page4.css';
import Sidebar from "./components/Sidebar"
import ApiFetch3 from './components/ApiFetch3';

//Reactのポイント
//状態管理はuseStateで行う

const Page4 = () => { 
    return (
        <div className="Page4">
            <Sidebar /> {/* サイドバーを作成するコンポーネント */}
            <div className="Content">
                <ApiFetch3/>
            </div>
        </div>
    );
}


export default Page4;