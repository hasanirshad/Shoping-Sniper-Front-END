import React from 'react';
import Adcard from "./Adcard";
import axios from 'axios'
import Loader from 'react-loader-spinner'
export default class Discountslide extends React.Component{

    constructor(props){



        super(props);
       this.state = {

           image:[],
           isLoading:true

       };


}

componentDidMount(){
    let Collector=[...this.state.image];
    axios.get("http://localhost:3000/api/brands").then(res=>{
        res.data.map((item,i)=>{

            Collector=[...Collector,item]

        });

        this.setState({
            image:Collector,
            isLoading:false
        })
    });

}
        render(){

    console.log(this.state.image);
        return(
            <div className="discountslide">
                <div className="d-s-tag">
                    <h2>{this.props.TagName}</h2>
                </div>
                <div className="container">

                    {/*Devloper-Arslan => Conditional Rendering For Api till Result is not loaded Show Loader to users for Better User Experience*/}
                    {
                        this.state.isLoading ? <div className="loaderClass">  <Loader
                        type="TailSpin"

                        /></div>  : this.state.image.map((image,i) => <Adcard key={i} status={image.name}  />)
                    }


                </div>
            </div>
        );

        }
}