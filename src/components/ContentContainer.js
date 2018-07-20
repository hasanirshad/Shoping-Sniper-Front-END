import React from 'react';
import Discountslide from "./Discountslide";

class ContentContainer extends  React.Component{
    constructor(props){
        super(props);
    }

    render() {
        return(
            <div className="CContainer">
            <Discountslide/>
            </div>
        );

    }
}

export default ContentContainer;