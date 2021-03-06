import React, { PureComponent } from "react";
import Person from "./Person/Person";

class Persons extends PureComponent {
  // static getDerivedStateFromProps(props, state) {
  //   console.log("Persons.js getDerivedStateFromProps");
  // }

  

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("Persons.js getSnapshotBeforeUpdate");
    return {
      message: "Persons.js getSnapshotBeforeUpdate",
    };
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("Persons.js Hello World");
    console.log(snapshot);
  }

  componentWillUnmount() {
    console.log("Persons.js componentWillUnmount");
  }

  render() {
    console.log("Persons.js is rendering");
    return this.props.persons.map((person, index) => (
      <Person
        click={() => this.props.clicked(index)}
        name={person.name}
        age={person.age}
        key={person.id}
        changed={(event) => this.props.changed(event, person.id)}
      />
    ));
  }
}

// const Persons = (props) => {
//     console.log("Persons.js is rendering");
//     return props.persons.map((person, index) => (
//         <Person
//             click={() => props.clicked(index)}
//             name={person.name}
//             age={person.age}
//             key={person.id}
//             changed={(event) => props.changed(event, person.id)} />
//     ));
// };

export default Persons;
