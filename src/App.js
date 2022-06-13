import { Route, Router } from 'react-router-dom';
import './App.css';
import AddUser from './features/users/AddUser';
import UserList from './features/users/UserList';

function App() {
  return (
    <div className='container mx-auto px-2 max-w-5xl pt-10 md:pt-32'>
      <h1 className='text-center font-bold text-2xl text-gray-600 pb-4'>Crud With Redux Toolkit</h1>
      
      <Router>
        <Route path='/' element={<UserList/>}/>
        <Route path='/add-user' element={<AddUser/>}/>
      </Router>

      <UserList />
    </div>
  );
}

export default App;
