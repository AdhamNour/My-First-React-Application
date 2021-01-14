import React, {useEffect} from "react";
import classes from "./Cockpit.css"

const Cockpit = (props) => {
  useEffect(() =>{
    console.log("Cockpit.js useEffect that depends on props.persons called");
    const timer = setTimeout(() =>{
      alert("Saved data");
    },1000)
    return () => {
      clearTimeout(timer)
      console.log("Cockpit.js cleanup works")
    }
  },[props.persons]);

  useEffect(() =>{
    console.log("Cockpit.js useEffect that depends on no thing called so it would be called in the first render cycle only");
    setTimeout(() =>{
      alert("Nothing Happened just Saying hello");
    },200);
    return () => {
      console.log("Cockpit.js cleanup works 2ndtime")
    }
  },[])

  useEffect(() =>{
    console.log("Cockpit.js useEffect that runs every render cycle that doesn't depends on anything")
    return () => {
      console.log("Cockpit.js cleanup works 3rd time")
    }
  })

    const assignedClasses = [];
    if (props.persons.length <= 2) {
      assignedClasses.push(classes.red); // classes = ['red']
    }
    if (props.persons.length <= 1) {
      assignedClasses.push(classes.bold); // classes = ['red', 'bold']
    }
    let btnClass = "";
    if(props.showPersons){
        btnClass = classes.Red;
    }


  return (
    <div className ={classes.Cockpit} >
      <h1>{props.title}</h1>
      <p className={assignedClasses.join(" ")}>This is really working!</p>
      <button className={btnClass} onClick={props.buttonClick}>
        Toggle Persons
      </button>
    </div> 
  );
};

export default Cockpit;
