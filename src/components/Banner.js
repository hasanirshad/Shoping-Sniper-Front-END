import React from 'react';

class Banner extends React.Component{
    constructor(props){
        super();
    }

    render(){
        return(
          <div className="container banner">
            <img src='../../images/img1.jpg'/>
          </div>
        );
    }
}
export default Banner;