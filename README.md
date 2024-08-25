# My react journey
-->Higher order components are components that takes component and then return a component.



# React context
--> it is used to deal the problem with the props drilling

--><<ContextName>.Provider value={{data:<data that come from api>-->[This is how we update the data in the context]}}> 

  ->We wrap this around a component for that we want to change the data inside the context


 </<ContextName>>

 we can also use context.provider as nesting it, every context.provider space has their own local memory ,so data at every nesting levels can be different


 # Redux Toolkit
  - Install @reduxjs/toolkit and react-redux
  - Build our store
  - Connect our store to our app
  - slice (cartSlice)
  - dispatch(action)
  - Selector


  # Types of testing(for Developer)
  - unit testing
  - Integration testing
  - End to end testing => e2e Testing

  # Libriries for testing
  - React - testing library
  --> it is build on top of dom testing library
  --> it uses jest for testing (it is a javaScript testing frame work) 