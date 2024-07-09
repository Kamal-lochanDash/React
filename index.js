const heading= React.createElement("h1",{id:"heading"},"Hello World")//<c2> Empty object is the place we will give attributes to the tags
    console.log(heading) // This heading is a react element/ js Object created by react   
    //<imp> Inside the Heading object we get something called props which are combination children tags and attributes
//to manipulate dom in react , react need that individual node where it can do stuffs

const root=ReactDOM.createRoot(document.getElementById("root"))// --> React took this node & added to its virtual DOM
//-->The virtual DOM works fast as it only changes individual DOM elements instead of reloading complete DOM every time.
root.render(heading) // -->this root.render is the Virtual Dom that renders the stuff inside it once everyThing is completed
//--> it add this result in the main Dom , as a result main dom is reloded once instead of many times


//<c3> So here Basically the render function takes an the headind object create the h1 element/tag and attach to the root Element that has reference to the DOM

        //<b1> Creatin complex structures using react

        /**
         * --> let we want to create a structure like
         *         <div id="parent">
         *                  <div id="child">
         * -                         <h1> Im am h1 tag </h1>
         *                  </div>
         *         </div>
         * 
         * <imp> the third argument in the createElement Function is a childrens that we want
         * <imp> if we want multiple children we have to pass array of children
         */

        const structure=React.createElement("div",{id:"parent"},
            React.createElement("div",{id:"child"},[
                React.createElement("h1",{id:1},"I am h1 tag"),React.createElement("h2",{id:2},"i am a h2 tag")]))
                console.log(structure)

                

          root.render(structure) 

          /* 
          <c4> Now if we have to create a more complex structure than this, for example


                             <div id="parent">
                         <div id="child">
          -                         <h1> Im am h1 tag </h1>
                          </div>

                           <div id="child2">
          -                         <h1> Im am h1 tag </h1>
                          </div>
                          
                 </div>

                 <c4> Then the structure would have updated to

                  const structure=React.createElement("div",{id:"parent"},[
            React.createElement("div",{id:"child"},[
                React.createElement("h1",{id:1},"I am h1 tag"),
                React.createElement("h2",{id:2},"i am a h2 tag")
            ]),
             React.createElement("div",{id:"child"},[
                React.createElement("h1",{id:1},"I am h1 tag"),
                React.createElement("h2",{id:2},"i am a h2 tag")
                ])
                
                
            <h2> Which seems more complex than normal html

            //! Here come ito the picture the concept of JSX
            --> It simplifie the react code

                  <imp> node.render method replaces code passed to it with the existing code attaches to the node
                  <imp> React only work on the selected nodes in the DOM

                  <imp> A ReactJS application is made up of multiple components, each component responsible for outputting a small, reusable piece of HTML code
                  <imp> To create React app, we write React components that correspond to various elements. We organize these components inside higher level components which define the application structure.
                  <imp> 

          */
        