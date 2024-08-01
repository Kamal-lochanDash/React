
import { useRouteError } from "react-router-dom"; //userout error is hoock that is use to display a more deatailed message abot the error

const Error=()=>{

    const err=new useRouteError();
    console.log(err) //err gives a object containing all the info about the errror 
    return (
        <div className="error">
            <h1>Oops!!!</h1>
            <h2>Something went wrong!!🐱🐱🐱🐱🐱💦</h2>
            <h3>{err.status}:{err.statusText}</h3>
        </div>
    )
}

export default Error;