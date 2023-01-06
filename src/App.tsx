import React, { useEffect,useContext } from 'react';
import Login from './pages/Login/Login';
import Main from './pages/Main/Main';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { useStateContext } from './context/StateContext';
import UserDetails from './components/UsersDetails/UserDetails';
const App = () => {
  const userContext= useStateContext();
  const navigate = useNavigate();


  useEffect(() => {
    if (!userContext?.user) navigate('/');
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Main/*" element={<Main />} />
      </Routes>
    </div>
  );
};

export default App;
