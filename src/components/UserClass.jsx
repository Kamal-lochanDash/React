import React from "react";


class UserClass extends React.Component{  // Component is class inside the react
//<imp> Class based component is a class that which has some render method that returns some jsx

constructor(props){ // <c1> In the class based component constructor received the props
super(props) // it is necessary to pass the props to the parent constructor so that the props that is passed to us should achive all its properties
console.log("constructor")
//<c3> Every time the class is called a new instance of the class is created and in each instance the constructor is also called
//<c3> so inside the constructor is also the best place to create state variable ,before the functional components there were no hoocks to create state variable 
//<c4> There is a class property called state which is used to create state variables  i.e..
        this.state={
            count:0 , //<imp> if we want to create any another state variable then then we can create inside it
            
            //<b1> it a object that holds all the state variables i.e...
            count1:1

            //<c2> In the use state hoocks also behind the scenes react make an object of the state variables

        }

    
}

componentDidMount(){

     //<c3> first the constructor is called then the render is called
    //Once the constructor --> render methods is called and after rendering once this component is mounted over the DOM the this ComponentDidMount is called
    console.log("Component did mount")

    //<imp> This function most of the times used for api calls, it is bsically used when the useEffect hoocks are not developed,
    //<imp> works same as the useEffect hoock with an empty dependencie

    //<?> React Life cycle Diagram  
    //! Read projects.wojtekmaj.pl
                                                         //<c1>        Render phase          |                     Commit Phase
    //<c2> React has three periods 1. "Mounting priod"  i.e.. calls--> Constructors -> render-> update the Dom ->then componentDidMount is called
    //<c2>                         2. "updating period"
    //<c2>                         3. "unmounting period" 
}

    render(){
        console.log("render")
        return (<div className="user-catd">
        <h1>Using Class Based Components  </h1>
        <h2>Name: Kamal </h2>
        <button
        onClick={()=>{
            //Never update the state variable directly

            //<c5> here we will use function given by react that is this.setState to update the state variables that we have created, and we can use this function
            //<c5> anyWhere inside the class, inside this function we will pass some objects that will contain the updated value of the state variables. i.e..

            this.setState({
                count:this.state.count+1
            }) //here also every times the setState is called react will Rerender the component, and we can update more than one  state variable in a single setState call, and it will update the values that are only passed


           
        }}
        >Count Increase</button>
        <h2>Count:{this.state.count}</h2>
        <h3>Location: BBSR</h3>
        <h4>Contact: kamaldash.2004@gmail.com</h4>
        <h4>{this.props.name} Meow</h4>
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


senerio where parent and child both are class based component and child component is called two times in side the parent
*/