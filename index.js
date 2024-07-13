import React from "react";
import ReactDOM from "react-dom/client";

// const heading=React.createElement("h1",{id: "heading"},"namaste react")

// const root=ReactDOM.createRoot(document.getElementById("root"))

// root.render(heading);

/**
 * --> React.createElement is not agood way to create elements because it is more complex than normal
 * --> Html and it is not also developer friendly
 * 
 * --> so facebook developers created something called a (JSX )
 * --> so JSX is a javascript syantax which is easier to create react Elements
 * --> react can also run without jsx
 */

//<b1> Creating the above using jsx

const jsxHeading=<h1 id="Heading">React using jsx</h1>; //<imp> This is not html it is jsx
//<imp> jsx is html like syantax , it also creates an object, behind the scenes React.create element is happening
console.log(jsxHeading);//<imp> here jsxHeading is a react Element
const root2=ReactDOM.createRoot(document.getElementById("root"))
root2.render(jsxHeading)

/*
--> js engine do not understand jsx , because it can only understand EcmaScript (ES)
--> jsx is not a valid pure javascript
--> this code can run due T0 {Parcel Bundler}, parcel manages all the things behind the scenes
<c2> jsx code is (transpiled/converted to the code that browsers can understand) by parcel before it reaches the js Engine
<c2> The transpilation is done by a dependency of parcel called (Babel)
<h1> understand more detail in babeljs.io
// --> babel aslo transphyle code of current version to older version so that older browser can understand the code
// <c3> class in html=className in JSX
// <c3> attributes jsx is in camel case
//<c3> if we are writing in multiple line jsx, wrap the code with () in jsx
*/

//<b4> #React Component

/*     
  <imp> Everything in react is a component
        <imp> A ReactJS application is made up of multiple components, each component responsible for outputting a small, reusable piece of HTML code
                  <imp> To create React app, we write React components that correspond to various elements. We organize these components inside higher level components which define the application structure.


        --> There are two types of component in react 
                        ->Class Based component - OLD way
                        ->Functional component - New way (now days functional component is used only)
        -->Functional component uses js functions to create component
        -->React functional component is just a normal javaScript function which return some jsx element or a bunch of jsx element/react Element
        -->we should name any component in react with capital letter otherwhise error is created
 */

        const TestHeadings1=()=>{
          return  <h2>I am a test heding h2</h2> ,// --> after "," the after part is returned not the previous
          <h2>i am a test heading h2 line 2</h2>   
};

const TestHeading2=()=>(
    <h3>I am a testHeading h3 by kamal</h3>  //<c6> another way of declaring a functional component
  );
            const HeadingComponent=()=>{
              return  <div id="container">
             <h1>This is my functional component</h1>
           <TestHeadings1/>  
            {
            /* 
            -->all the code in testHeading1 is copied down to this div block 
           --> this div block is jsx now, inside this div block we can write any javascript code using this
           --> curley braces inside the div block ,
           <c2> This is the reason why we are able to use comments inside the div block
           <c2> by this feature we can mix and match html & js code
           --> as react elements are also stored in js variables so we can write react element inside it.
           <?>  Example :-*/jsxHeading
           /*
           this is how we can use react Elements inside the components 
           <c5> we can also use this inside the react element
           */}
           
           <TestHeading2/>
           <TestHeading2></TestHeading2>{//we can also write it like this
            }
          
                </div>

                 //<c4> component inside a component is called a component composition 
              
            }

            const root3=ReactDOM.createRoot(document.getElementById("root2"))
            root3.render(<HeadingComponent/>) //or we can directly invoke by calling the function inside .render, But react elements are rendered normally
            //<h1> we can use an component inside an element also

            /*
            <h2> if any api send some malicious data and we are injecting it inside jsx, jsx will escape it
            basically jsx filter & verify the data before execution over react, it prevents crosssite scripting attacks
            <h3> we can even call components inside the curley braces inside the jsx
            */

           
