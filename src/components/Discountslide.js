import React from 'react';
import Adcard from "./Adcard";

export default class Discountslide extends React.Component{

    constructor(props){
        super(props);
       this.state = {
           image:['this' , 'remain' , 'for' , 'image']
       }
}

        render(){
        return(
            <div className="discountslide">
                <div className="d-s-tag">
                    <h2>{this.props.TagName}</h2>
                </div>
                <div className="container">
                    {
                        this.state.image.map((image) => <Adcard key={image} status={image}  />)
                    }
                    {/*<Adcard*/}
                        {/*status={'helloo'}*/}
                    {/*/>*/}
                </div>
            </div>
        );

        }
}