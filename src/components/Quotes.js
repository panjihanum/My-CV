import React from "react";
import '../../src/assets/scss/_quotes.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';


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
    }

    render(){
        return (
        <div className="quotes">
            {/* <img alt="tree" src={require('../assets/images/webp/tree-2.webp')} className="tree-2"/> */}
            <img alt="butterfly" src={require('../assets/images/animated-butterfly-image-0289.gif')} className="butterfly"/>
            <div className="header">
                My <span className="green">Quotes</span>
            </div>
            <div className="row justify-content-md-center">
            {   
                this.state.quotes.map(function(val, i){
                    return(
                        <div className="col-md-12 col-lg-4"key={val.key}>
                            <div className="card-custom">
                                
                                <div className="card-custom-content">
                                    <div className="card-custom-header">
                                        <FontAwesomeIcon icon={faQuoteLeft} className="iconQuote"/>
                                    </div>
                                    {val.quote}
                                </div>
                            </div>
                        </div>
                    )
                })
            }
            </div>
            <div className="header mt-5">
                My <span className="green">Motivation</span>
            </div>
            <div className="video">
                <div className="wrapper">
                    <div className="youtube" data-embed="gHhQB8enVqQ">
                        <div className="play-button"></div>
                    </div>
                </div>
            </div>
        </div>
        
        )
    }
}


export default Quotes;