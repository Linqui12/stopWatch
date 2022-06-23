import "./App.css";
import React, { Component } from "react";
import StopWatchTimeOut from "./components/StopWatchTimeOut";
import UserSection from './components/UserSection';

const App = () => {
  return <>
    <StopWatchTimeOut/>
    <UserSection />
  </>;
};
export default App;
