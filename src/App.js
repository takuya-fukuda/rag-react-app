import logo from './logo.svg';
import './App.css';
import React from 'react'; //Reactを読み込んでいる
//画面遷移で使用する{ BrowserRouter, Route, Switch }を'react-router-dom'から読み込んでいる
//import { BrowserRouter, Route, Switch } from 'react-router-dom'; 古いバージョン
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Page1 from './page1'; //作成したpage1.jsを読み込んでいる
import Page2 from './page2'; 
import Page3 from './page3';
import Page4 from './page4';
import Page5 from './page5';


class App extends React.Component {
  render(){
    return(
      <Router>
        <Routes>
          <Route exact path="/" element={<Page1 />} /> {/* URLのパスが'/'のみの時にPage1を表示する */}
          <Route exact path="/page2" element={<Page2 />} /> {/* 追加　URLで/page2を指定するとPage2を表示する */}
          <Route exact path="/page3" element={<Page3 />} />
          <Route exact path="/page4" element={<Page4 />} />
          <Route exact path="/page5" element={<Page5 />} />
        </Routes>
      </Router>
    );
  };
}

export default App;
