import React from 'react';

const Blogs = () => {
  return (
    <div>

        <h1 className='text-5xl text-center text-[#003144] font-bold my-5'>Blogs</h1>
        <p className='text-xl text-center'>Click to show Answer</p>

      <div className="collapse bg-[#003144] text-white text-center w-3/4 mx-auto rounded-xl my-3">
  <input type="checkbox" /> 
  <div className="collapse-title text-xl font-medium">
  What are the different ways to manage a state in a React application?
  </div>
  <div className="collapse-content"> 
    <p>The Four Kinds of React State to Manage
Local state. Global state. Server state. URL state. React's useState is the best option for local state management. If you need a global state solution, the most popular ones are Redux, MobX, and the built-in Context API. Your choice will depend on the size of your project, your needs, and your engineers' expertise.</p>
  </div>
</div>


<div className="collapse bg-[#003144] text-white text-center w-3/4 mx-auto rounded-xl my-3">
  <input type="checkbox" /> 
  <div className="collapse-title text-xl font-medium">
  How does prototypical inheritance work?
  </div>
  <div className="collapse-content"> 
    <p>The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object. getPrototypeOf and Object.</p>
  </div>
</div>



<div className="collapse bg-[#003144] text-white text-center w-3/4 mx-auto rounded-xl my-3">
  <input type="checkbox" /> 
  <div className="collapse-title text-xl font-medium">
  What is a unit test? Why should we write unit tests?
  </div>
  <div className="collapse-content"> 
    <p>The main objective of unit testing is to isolate written code to test and determine if it works as intended. Unit testing is an important step in the development process, because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages.</p>
  </div>
</div>



<div className="collapse bg-[#003144] text-white text-center w-3/4 mx-auto rounded-xl my-3 mb-6">
  <input type="checkbox" /> 
  <div className="collapse-title text-xl font-medium ">
  React vs. Angular vs. Vue?
  </div>
  <div className="collapse-content"> 
    <p>Vue provides higher customizability and hence is easier to learn than Angular or React. Further, Vue has an overlap with Angular and React with respect to their functionality like the use of components. Hence, the transition to Vue from either of the two is an easy option.</p>
  </div>
</div>

    </div>
  );
};

export default Blogs;