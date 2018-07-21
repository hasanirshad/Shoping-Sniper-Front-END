import React from 'react';
import Discountslide from "./Discountslide";
import SideBar from "./SideBar";

class ContentContainer extends  React.Component{
    constructor(props){
        super(props);

        this.state = {
            TagName:['Trending', 'Latest'],
        }
    }

    render() {
        return(
            <div className="CContainer">
                <SideBar/>

                {this.state.TagName.map((TagName) => <Discountslide key={TagName} TagName={TagName}/>)}
            </div>
        );

    }
}

export default ContentContainer;