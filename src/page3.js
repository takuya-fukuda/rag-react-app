import React from 'react';
import './Page3.css';
import Sidebar from "./components/Sidebar"
import ApiFetch2 from './components/ApiFetch2';

const Page3 = () => { 
    return (
        <div className="Page3">
            <Sidebar />
            <div className="Content">
                <ApiFetch2/>
            </div>
        </div>
    );
}


export default Page3;