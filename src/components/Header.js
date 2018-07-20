import React from 'react';

const Header = (props) => (
  <div className="header">
    <div className="container">
      <h1 className="header__title">{props.title}</h1>
      {props.subtitle && <h2 className="header__subtitle">{props.subtitle}</h2>}
    </div>

          <div className="topnav" id="myTopnav">
              <a href="#home" className="active">Home</a>
              <a href="#news">News</a>
              <a href="#contact">Contact</a>
              <a href="#about">About</a>
              <a href="javascript:void(0);" className="icon" onClick={myFunction}>
                  <i className="fa fa-bars"></i>
              </a>
          </div>
      </div>



);

Header.defaultProps = {
  title:'Shopping-Sniper'
};

var myFunction = ()=> {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

export default Header;
