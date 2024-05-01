import React from 'react';
import { useState } from 'react';
import './App.css';
import User from './Components/User.js';
import Nav from './Components/Navbar.js';


const App = () => {
  const [users, setUsers] = useState([
    { id: 1, name: 'hemanth', desc: '23' },
  ]);

  const [doneItems, setdoneItems] = useState([
    // { id: 1, name: 'hemanth', desc: '23' },
  ]);
  const [name, setName] = useState('');
  const [desc, setDesc] = useState('');
  const addNewHandler = () => {
    const newUser = {
      id: users.length + doneItems.length + 1,
      name: name,
      desc: desc,
    };
    setUsers([...users, newUser])
  };

  const deleteUserHandler = (id) => {
    const userList = users.filter((user) => user.id !== id);
    const itemDone = users.filter((user) => user.id === id)[0];
    setdoneItems(...doneItems, itemDone);
    setUsers(userList);

  };

  return (
    <div className='content-over'>
      <Nav />
      <div className='content-align'>
        <div className='inp-grp'>
          <b>Title:</b><input value={name} onChange={(e) => setName(e.target.value)} placeholder='name' />
          <b>Content:</b><input value={desc} onChange={(e) => setDesc(e.target.value)} placeholder='desc' />
        </div>
        <div className='btn-grp'>
          <button className='btn btn-outline-success' onClick={addNewHandler}>add</button>
        </div>
      </div>
      <div className='state'>
        <h4>Working..</h4>
        <div className='container-sec'>
          {users.map((user) => {
            return <User user={user} key={user.id} handleDelete={deleteUserHandler} />
          })}
        </div>
        <h4 style={{marginTop: '20px'}}>Done...</h4>
        <div className='container-sec'>
          {users.map((doneItems) => {
            return <User user={doneItems} key={doneItems.id} />
          })}
        </div>
      </div>
      
    </div>
  );
}

export default App;
