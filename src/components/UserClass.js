import React from "react";

class UserClass extends React.Component {
    constructor(props){
        super(props); 

        this.state={
            userInfo: {
                name:"default",
                location:"default"
            }
        };
    };
    
    async componentDidMount() {
        const getUserInfo = await fetch("https://api.github.com/users/rohanpramanik");
        const json = await getUserInfo.json();
        console.log("printData");
        this.setState({
            userInfo:json,
        });
        console.log(json);
    }

    componentDidUpdate() {
        console.log("update called");
    }

    componentWillUnmount() {
        console.log("it will call when we rout to other component");
    }

    render() {
        const {name, location} = this.state.userInfo;
        // debugger;
        return (
            <div className="user-card">
                <h2>Name: {name}</h2>
                <h2>Location: {location}</h2>
                <h2>Contact: @rohan</h2>
            </div>
        );
    }
};

export default  UserClass;