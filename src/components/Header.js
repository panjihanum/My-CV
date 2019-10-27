import React from "react";
import '../../src/assets/scss/_header.scss';

class Header extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            Menu : [
                {
                    key: 1,
                    name: "Home",
                    id: "home"
                },
                {
                    key: 2,
                    name: 'My Projects',
                    id: "projects"
                },
                {
                    key: 3,
                    name: "My Skills",
                    id: "skills"
                },
                {
                    key: 4,
                    name: "About Me",
                    id: "aboutMe"
                }
            ]
        }
    }
    render(){
        return (
            <header className="header" >
                <div className="left">
                    <img src={require("../assets/images/logo.png")} />
                </div>
                <div className="center">
                    {
                        this.state.Menu.map(function (val, i){
                            return (
                            <div className="menu" key={val.key}>
                                <div id={val.id} className="menu-link">{val.name}</div>
                            </div>
                            )
                        })
                    }
                </div>
            </header>
        );
    };
}

export default Header;