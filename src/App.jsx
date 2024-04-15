import './App.css'
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import UserProfilePage from './pages/UserProfilePage';
import MyBookings from './pages/MyBookings';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import { useEffect, useState } from 'react';

function App() {

  const [token, setToken] = useState(null);

  const refreshToken = () => {
    setToken(localStorage.getItem("token"));
  }

  useEffect(() => {
    refreshToken();
  },[]);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout token={token} />,
      children: [
        {
          path: "/",
          element: <HomePage refreshToken={refreshToken} />,
        },
        {
          path: "/user-profile",
          element: <UserProfilePage refreshToken={refreshToken} />,
        },
        {
          path: "/register",
          element: <RegisterPage />,
        },
        {
          path: "/login",
          element: <LoginPage refreshToken={refreshToken} />
        },
        {
          path: "/foglalas",
          element: <MyBookings refreshToken={refreshToken} />
        },
      ],
    },
  ]);


  return (
      <RouterProvider router={router} />
  );
}

export default App;