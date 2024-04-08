
import './App.css'
import LoginForm from './pages/LoginForm';
import RegisterForm from './pages/RegisterForm';
import UserProfile from './pages/UserProfile';
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
          path: "/foglalas",
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