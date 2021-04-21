import React, { Component } from 'react'
import './App.css';
import ListContacts from './ListContacts'
import contacts from './utils/ContactsApi'

class App extends Component {
  state = {
    contacts : [
 {
   "id": "karen",
   "name": "Karen Isgrigg",
   "handle": "karen_isgrigg",
   "avatarURL": "http://localhost:5001/karen.jpg"
 },
 {
   "id": "richard",
   "name": "Richard Kalehoff",
   "handle": "richardkalehoff",
   "avatarURL": "http://localhost:5001/richard.jpg"
 },
 {
   "id": "tyler",
   "name": "Tyler McGinnis",
   "handle": "tylermcginnis",
   "avatarURL": "http://localhost:5001/tyler.jpg"
 },
]
  }

  removeContact = (contact) => {
    this.setState((currentState) => ({
      contacts: currentState.contacts.filter((c) => {
        return c.id !== contact.id
      })
    }))
  }

  render(){
  return (
   <ListContacts 
    removeContact={this.removeContact} 
    contacts={this.state.contacts} />
  );
}
}

export default App;
