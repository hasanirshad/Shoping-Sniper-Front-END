import React from 'react'

export default class Adcard extends React.Component{



    render(){
        return(
            <div className="Adcard" >
                <p>{this.props.status}</p>
                <img src='../../images/img1.jpg'/>
            </div>
        );
    }
}