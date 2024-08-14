import React from 'react'; // React 라이브러리 불러오기
import ReactDOM from 'react-dom'; // ReactDOM 라이브러리 불러오기
import './index.css'; // 전역 css 파일 불러오기
import App from './App'; // App 컴포넌트 불러오기
import reportWebVitals from './reportWebVitals'; // 성능 측정을 위한 함수 불러오기

//import Library from './08.06/Library'; // Library 컴포넌트 불러오기
//import Clock from './08.12/clock'; // Clock 컴포넌트 불러오기
//import CommentList from './08.12/CommentList'; // CommentList 컴포넌트 불러오기
//import NotificationList from './08.13/NotificationList'; // NotificationList 컴포넌트 불러오기
//import ConfirmButton from './08.14/ConfirmButton'; // ConfirmButton 컴포넌트 불러오기
import LandingPage from './08.14/LandingPage';

ReactDOM.render(
  <React.StrictMode>
    <LandingPage />
  </React.StrictMode>,
  document.getElementById('root') // 렌더링할 HTML 요소의 id
  );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(); // 성능 측정 함수 호출