import React from "react";


class SideBar extends React.Component
{
    constructor(props){
        super(props);
        this.closeNav= this.closeNav.bind(this);
        this.openNav= this.openNav.bind(this);
        this.state = {
            active : false
        };
    }

    openNav() {
        this.setState((prevstate)=>{
            return{
                active:true
            }

        });

    }
    closeNav() {
        this.setState((prevstate)=>{
            return{
                active: false
            }
        });

    }
    render() {

        return (
                <div className="flowtoleft">
                    <div id="mySidenav" className="sidenav" style={ this.state.active ? {width:'250px'} : null }>
                        <a className="closebtn"  onClick={this.closeNav}>&times;</a>
                        <a href="#">About</a>
                        <a href="#">Services</a>
                        <a href="#">Clients</a>
                        <a href="#">Contact</a>
                    </div>
                    <span className="flowtoleft" onClick={this.openNav}>&#9776;</span>
                    <marquee behavior="scroll" direction="left" className="marqueetext">Your scrolling text goes here</marquee>


                </div>
        );
    }


}
export default SideBar;
