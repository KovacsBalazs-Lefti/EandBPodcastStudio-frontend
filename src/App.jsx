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
import { AuthProvider } from './context/AuthContext';

function App() {


  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout token={token} />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "/user-profile",
          element: <UserProfilePage />,
        },
        {
          path: "/register",
          element: <RegisterPage />,
        },
        {
          path: "/login",
          element: <LoginPage />
        },
        {
          path: "/my-bookings",
          element: <MyBookings />
        },
      ],
    },
  ]);


  return (
      <AuthProvider>
      <RouterProvider router={router} />
      </AuthProvider>
  );
}

export default App;