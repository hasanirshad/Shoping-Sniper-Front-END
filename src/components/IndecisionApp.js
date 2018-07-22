import React from 'react';
import Header from './Header';
import SideBar from "./SideBar";
import Banner from "./Banner";
import ContentContainer from "./ContentContainer";



export default class IndecisionApp extends React.Component {



  render() {

    return (
      <div className="flowtoleft main">
        <Header/>
          <Banner/>
          <ContentContainer/>
      </div>
    );
  }
}
