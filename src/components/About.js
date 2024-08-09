import React, { Component } from 'react'
import UserClass from './UserClass';
import UserContext from '../utils/UserContext';

class About extends Component {
  // constructer(props){
  //   super(props);
  // }

  componentDidMount() {
    console.log("didmount");
  }

 render(){
  return (
    <div>
      <h1>About</h1>
      <h2>This is Nameste React</h2>
      <div>
        <UserContext.Consumer>
          {({LoggedInUser})=>{
            console.log(LoggedInUser);
          }}
        </UserContext.Consumer>
      </div>
      {/* <UserClass name={"rohan"} location={"Jharkhand"}/> */}
    </div>
  )
 }
};

export default About;