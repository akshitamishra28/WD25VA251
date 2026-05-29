import React from 'react';
import './App.css';

function Student(props) {
  return (

    <div className="student-card">

      <h2>Student Details</h2>

      <p>
        <strong>Name:</strong> {props.name}
      </p>

      <p>
        <strong>Course:</strong> {props.course}
      </p>

      <p>
        <strong>Marks:</strong> {props.marks}
      </p>

      <button>View Profile</button>

    </div>

  );
}

function App() {

  return (

    <div className="App">

      <h1>Student Information System</h1>

      <div className="student-container">

        <Student
          name="Gauri Mishra"
          course="B.Tech CSE"
          marks="95"
        />

        <Student
          name="Ruhi Sharma"
          course="B.Tech IT"
          marks="88"
        />

        <Student
          name="Virat Kohli"
          course="B.Tech Data Science"
          marks="92"
        />

      </div>

    </div>

  );
}

export default App;