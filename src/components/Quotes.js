import React from "react";
import '../../src/assets/scss/_quotes.scss';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

class Quotes extends React.Component{
    constructor(props){
        super(props);
        this.state = {quotes: [
            {
                key: 1,
                quote: "Live is not about money, but live is about how ur way to get what u want .",
            },{
                key: 2,
                quote: "Money is not my priority, but my priority is my happiness in this world",
            },{
                key: 3,
                quote: "Time isn't the main thing. It's only thing.",
            }
        ]}
    };

    render(){
        return (
        <div className="quotes">
            <img src={require('../assets/images/tree-2.png')} className="tree-2"/>
            <div className="header">
                My<span className="green"> Quotes</span>
            </div>
            <div className="row justify-content-md-center">
            {   
                this.state.quotes.map(function(val, i){
                    return(
                        <div className="col-md-12 col-lg-4" key={val.key}>
                            <div className="card-custom">
                                {val.quote}
                            </div>
                        </div>
                    )
                })
            }
            </div>
            <div className="header mt-5">
                My<span className="green"> Motivation</span>
            </div>
            <div className="video">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/gHhQB8enVqQ" frameBorder="false" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
        </div>
        )
    }
}

export default Quotes;