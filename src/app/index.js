import React from "react";
import { render } from "react-dom";

import { Header } from "./components/Header";
import { Home } from "./components/Home";

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            homeLink: "Initial Link",
            homeMounted: true,
            status: 0
        };
    }

    onGreet() {
        alert("greet")
    }
    
    onChangeLinkName(newName) {
        this.setState({
            homeLink: newName
        })
    }

    onChangeHomeMounted() {
        this.setState({
            homeMounted: !this.state.homeMounted
        })
    }

    render() {
        let HomeCmp = "";
        if (this.state.homeMounted) {
            HomeCmp = <Home name={"JOHN"} 
                user={user} 
                initialAge={27} 
                greet={this.onGreet}
                changeLink={this.onChangeLinkName.bind(this)}
                initialLinkName={this.state.homeLink}> 
                <b>CHILDREEEEN</b>
            </Home>
        }
        var user = {
            realName: "dsadas",
            hobbies: ["Sports", "Learning", "SLEEPING"]
        }
        return (
            <div className="container">                
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        <Header homeLink={this.state.homeLink}/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        {HomeCmp}
                    </div>
                </div>
                <button className="btn btn-primary" onClick={this.onChangeHomeMounted.bind(this)}>(Un)Mount Home Component</button>
            </div>
        );
    }
}

render(<App/>, window.document.getElementById("app"));