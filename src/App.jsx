
import './App.css'
import LoginForm from './pages/LoginPage';
import RegisterForm from './pages/RegisterPage';
import UserProfile from './pages/UserProfilePage';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "/user-profile",
          element: <UserProfile />,
        },
        {
          path: "/register",
          element: <RegisterForm />,
        },
        {
          path: "/login",
          element: <LoginForm />
        },
      ],
    },
  ]);


  return (
      <RouterProvider router={router} />
  );
}

export default App;