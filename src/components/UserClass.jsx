import React from "react";
import { json } from "react-router-dom";
import UserContext from "../utils/UserContext";


class UserClass extends React.Component{  // Component is class inside the react
//<imp> Class based component is a class that which has some render method that returns some jsx

constructor(props){ // <c1> In the class based component constructor received the props
super(props) // it is necessary to pass the props to the parent constructor so that the props that is passed to us should achive all its properties
console.log("constructor")
//<c3> Every time the class is called a new instance of the class is created and in each instance the constructor is also called
//<c3> so inside the constructor is also the best place to create state variable ,before the functional components there were no hoocks to create state variable 
//<c4> There is a class property called state which is used to create state variables  i.e..
        this.state={
            userInfo:{
                name:"Dummy name",
                location:"dummy location"
            }

        }

    
}

async componentDidMount(){

   //here we can make this function as async to use await to call api
const data= await fetch("https://api.github.com/users/Kamal-lochanDash")
const json= await data.json();
console.log(json)

this.setState({
    userInfo:json
})


   
}


componentDidUpdate(){
    console.log("compomponent did mount")

   this.timer= setInterval(()=>{//<imp> here this enables the timer to be shared in the global context there by we can access this timer in the global scope
        console.log("i am set interval")
    },1000) //even if we change the page set interval still get called because in react only components get called and set interval is already registered
    //in the web api, it will not stop untill and unless the page is not refereshed #Disadvantage of the single page application


    //so we can clear this setInterval in the componentWillUnmount
}

componentWillUnmount(){
    clearInterval(this.timer) //clears the interval
    console.log("component will unMount")

    //called every time the component is unmount from the dom as react is a single page application is keeps mount or unmount the react components 
    // according to the routing done , so when we rout to another components this method is callled

    // In the case of the functional component it we can return a function inside the useEffect that uses the clearInterval to remove the set interval

    /*
    useEffect(()=>{
        api call
        setInterval(()=>{
            console.log("set interval")
            
            })
        
        
        
        })
    
    return ()=>{
        clearInterval(this.timer)
         <imp> it get called when the page rout has been changed
        }
    
        --> Note async functions cannot be passed to useEffect because async function return promise while useEffect return statement is used to do do cleanUp
    */
}

    render(){
        console.log("render")
        return (
         <div className="user-catd">
            <div className="about-name">
                <img src={this.state.userInfo.avatar_url} alt="" />
            <h2>Name:{this.state.userInfo.name} </h2>
            </div>
       
       
        <h3>Location:{this.state.userInfo.location}</h3>
        <h4>Contact: kamaldash.2004@gmail.com</h4>
        <h4>
            LoggedIn User:<UserContext.Consumer>
                {(data)=>{ //! here the "data" contains the context info as an object
                    console.log(data)
                    return data.loggedInUser;
                }}
            </UserContext.Consumer>{/* This is how we use context in the class based components */}

        </h4>
    </div>);
    }
}

export default UserClass; 





/*
- Parent constructor
-parent render
     

         -FirstChild Constructor
         -FirstChild render

         -SecondChild Constructor
         -SecondChild render
    <Dom updates -IN A SINGLE BATCH>

    - Firstchild ComponentDidMount
    - SecondChild ComponentDidMount

- parent ComponentDidMount


senerio where parent and child both are class based component and child component is called two times inside the parent
*/


/* 
   ---Mounting---

   -constructor(dumy data)
   -render(with dumy data)
               <Html Dummy is loded into the dom>
   -ComponentDidMount is called
                <Api calls>
                <this.setState> -> State variable is updated

                <imp> Once this.setState is called it triggers the updating phase
    ---Updating---
    render(with api data)
    <html with api data is lodated to the dom
    -ComponentDidUpdate() is called




*/

/*
--Extra stufs--
-> Component did mount is not equivalent to useEffect Hoocks
->   now we know everyTime the dependencies changes in the useEffect hoocks  it get called. but to do this in the class Based Components 
     we use ComponentDidUpdate because, after every update it get called or after every life cycle it get called

     ->componentwillUnmount when we are leaving the page


*/