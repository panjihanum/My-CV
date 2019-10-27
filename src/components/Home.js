import React from "react";
import '../../src/assets/scss/_home.scss';

const Home = () => {
    return (
    <div className="home">
        <div className="content">
            <img src={require('../assets/images/tree.png')} className="tree"/>
            <div className="text-container">
                <span className="text-content"><span className="green">Pan</span>hanum</span>
                <span className="text-child-content"><br />
                    Perkenalkan, Saya  <span className="green">Panji</span> Hanum. Dan saya adalah seorang Programmer.
                </span>
            </div>
        </div>
    </div>
    )
}

export default Home;