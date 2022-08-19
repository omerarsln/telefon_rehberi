import React from 'react';
import Contacts from './Contacts';
import './App.css';

class App extends  React.Component{

  constructor() {
    super();
    this.addContact=this.addContact.bind(this);
  }

  state = {
    contacts : [
      {
        name : "Ömer Arslan",
        phone : "5543519082"
      },
      {
        name : "Ahmet Arslan",
        phone : "5543519081"
      },
      {
        name : "Ayşe Arslan",
        phone : "5545856326"
      }
    ]
  };

  addContact(contact){
    this.state.contacts.push(contact);

    this.setState(
        contact
    )
  }

  render() {
    return (
        <div className="App">
          <Contacts contacts={this.state.contacts} addContact={this.addContact}/>
        </div>
    );
  }
}
export default App;