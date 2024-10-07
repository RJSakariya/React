import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CreateUser from './Pages/CreateUser';
import EditUser from './Pages/EditUser';
import UserList from './Pages/UserList';
import Navbar from './Components/Navbar';
import './App.css';
import { useState } from 'react';

function App() {
  const [users, setUsers] = useState([
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Jane Doe', email: 'jane@example.com' }
  ]);
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<UserList users={users} setUsers={setUsers} />} />
        <Route path="/create-user" element={<CreateUser users={users} setUsers={setUsers} />} />
        <Route path="/edit-user" element={<EditUser users={users} />} />
      </Routes>
    </Router>
  );
}

export default App;