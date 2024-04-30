import './App.css'
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import UserProfilePage from './pages/UserProfilePage';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import { AuthProvider } from './context/AuthContext';
import MyBookingsPage from './pages/MyBookingsPage';
import CreateBookingPage from './pages/CreateBookingPage';
import UpdateBookingPage from './pages/UpdateBookingPage';

/**
 * Az alkalmazás fő komponense
 * 
 */


function App() {

//React böngészőtár inicializálása
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
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
          element: <MyBookingsPage />
        },
        {
          path: "/create-bookings",
          element: <CreateBookingPage />        
        },
        {
          path: "/update-bookings/:user_felhasznaloid",
          element: <UpdateBookingPage/>        
        },
      ],
    },
  ]);

//AuthProvider a bejelentkezési állapot kontextusának biztosítására
  return (
      <AuthProvider>
      <RouterProvider router={router} />
      </AuthProvider>
  );
}

export default App;