import React from "react";
import '../../src/assets/scss/_home.scss';

const Home = () => {
    return (
    <div className="home">
        <div className="content">
            <img src={require('../assets/images/webp/tree.webp')} className="tree"/>
            <div className="text-container">
                <div className="text-animation animated bounceInLeft delay-1s">
                    <span className="text-content "><span className="green">Pan</span>hanum</span>
                </div>
                <span className="text-child-content animated bounceInLeft delay-2s"><br />
                    Perkenalkan, Saya  <span className="green">Panji</span> Hanum. Dan saya adalah seorang Programmer.
                </span>
            </div>
        </div>
    </div>
    )
}

export default Home;