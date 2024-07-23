import React from 'react';
import './Page5.css';
import Sidebar from "./components/Sidebar"
import ApiFetch4 from './components/ApiFetch4';

const Page5 = () => { 

    return (
        <div className="Page5">
            <Sidebar />
            <div className="Content">
                <ApiFetch4 />
            </div>
        </div>
    );
}


export default Page5;