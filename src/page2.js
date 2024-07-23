import React from 'react';
import './Page2.css';
import Sidebar from "./components/Sidebar"
import ApiFetch from './components/ApiFetch';

const Page2 = () => {
    return (
        <div className="Page2">
            <Sidebar /> {/* サイドバーを作成するコンポーネント */}
            <div className="Content">
                <ApiFetch />
            </div>
        </div>
    );
}

export default Page2;

