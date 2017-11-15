import React from "react";
import PropTypes from "prop-types";

export class Home extends React.Component {
    constructor(props) {
        super();
        this.state = {
            age: props.initialAge,
            status: 0,
            homeLink: props.initialLinkName
        } 
        setTimeout(() => {
            this.setState({
                status: 1
            })
        }, 3000);
        console.log("Constructor");   
    }

    componentWillMount() {
        console.log("Component will mount");
    }

    componentDidMount() {
        console.log("Component did mount");
    }

    componentWillReceiveProps(nextProps) {
        console.log("Component will recieve props", nextProps);
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log("Should component update", nextProps, nextState);
        // if (nextState.status === 1) {
        //     return false;
        // }
        return true;
    }

    componentWillUpdate(nextProps, nextState) {
        console.log("Component will update", nextProps, nextState);
    }

    componentDidUpdate(prevProps, prevState) {
        console.log("Component did update", prevProps, prevState);
    }

    componentWillUnmount() {
        console.log("Component will unmount");
    }

    onMakeOlder() {
        this.setState({
           age: this.state.age + 3 
        });
    }

    onChangeLink() {
        this.props.changeLink(this.state.homeLink);
    }

    onHandleChange(event) {
        this.setState({
            homeLink: event.target.value
        })
    }

    render() {
        return(
            <div>
                <p>NAME: {this.props.name}</p>  
                <p>AGE: {this.state.age}</p> 
                <p>CHILDREN: {this.props.children}</p> 
                <button className="btn btn-primary" onClick={() => this.onMakeOlder()}>MAKE ME OLDER MY FRIEND</button>
                <button className="btn btn-primary" onClick={this.props.greet}>CLICK ME MY FRIEND</button><hr/>
                <input type="text" 
                    value={this.state.homeLink}
                    onChange={(event) => this.onHandleChange(event)}/>
                <button className="btn btn-primary" onClick={this.onChangeLink.bind(this)}>Change Header Link</button>
            </div>
        );
    }
}

Home.PropTypes = {
    name: PropTypes.string,
    initialAge: PropTypes.number,
    greet: PropTypes.func,
    initialLinkName: PropTypes.string
}