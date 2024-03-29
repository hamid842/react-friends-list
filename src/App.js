import React from "react";
import "./App.css";

const App = () => <PersonList />;

const PersonList = () => {
  const people = [
    {
      img: 37,
      name: "Hamid",
      job: "developer"
    },
    {
      img: 34,
      name: "bob",
      job: "designer"
    },
    {
      img: 56,
      name: "peter",
      job: "artist"
    }
  ];
  return (
    <section>
      <Person person={people[0]} />
      <Person person={people[1]}>some additional information</Person>
      <Person person={people[2]} />
    </section>
  );
};

const Person = props => {
  const { img, name, job } = props.person;
  const { children } = props;
  const url = `https://randomuser.me/api/portraits/thumb/men/${img}.jpg`;
  return (
    <div className="person">
      <img src={url} />
      <div>
        <h4>{name}</h4>
        <h4>{job}</h4>
        {children}
      </div>
    </div>
  );
};

export default App;
