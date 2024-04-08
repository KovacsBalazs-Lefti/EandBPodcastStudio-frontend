
import { useEffect, useState } from 'react';
import './App.css'
import LoginForm from './pages/LoginForm';
import RegisterForm from './pages/RegisterForm';
import UserProfile from './pages/UserProfile';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

function App () {
  const apiUrl ="http://localhost:8000/api";
  //token letárolása
  const [token, setToken] = useState('');
  const [userData, setUserData] = useState(null);

  const router = createBrowserRouter([{
  path: "/",
  element: <div>Hello World</div>
  },
  {
    path: "/rolunk",
    element: <div>Rólunk</div>
  }

]);

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken){
      setToken(storedToken);
    }
  }, []);
  //lekérdezés amikor a token megváltozik (uef)
  useEffect(() => {
    if (token){
      loadUserData();
    }else{
      setUserData(null);
    }
  }, [token]);
 


const login = async FormData => {
  const url = apiUrl + "/login";
  const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify(FormData),
      headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
      }
  });
  const data = await response.json();
  console.log(data);
  if  (response.ok) {
      localStorage.setItem("token", data.token);
      setToken(data.token);
      alert("Sikeres bejelentkezés")
  }else {
      alert(data.message);
  }

};

const loadUserData = async () => {
  const url = apiUrl + "/user"
  const response = await fetch(url, {
    method: "GET",
    headers: {
      "Accept": "application/json",
      "Authorization": "Bearer "+token
    }
  });
  const data = await response.json();
  if (response.ok){
    setUserData(data);
  }else{
    localStorage.removeItem("token");
    setToken('');
  }
};


const logout = async () =>{
  const url = apiUrl + "/logout";
  const response = await fetch(url, {
    method: "POST",
    headers: {
      Accept: "application/json",
      Authorization: "Bearer " + token
    }
  })
  if (response.ok){
    localStorage.removeItem("token");
    setToken('');
  }else{
    const data = await response.json();
    alert(data.message);
  }
}

const logoutEverywhere = async () => {
  const url = apiUrl + "/logout-logoutEverywhere";
  const response = await fetch(url, {
    method: "POST",
    headers: {
      Accept: "application/json",
      Authorization: "Bearer " + token
    }
  })
  if (response.ok){
    localStorage.removeItem("token");
    setToken('');
  }else{
    const data = await response.json();
    alert(data.message);
  }
}

  return (
    
  <div>
    <RouterProvider router={router}/>
    <main>
      {userData != null ? (
        <UserProfile user={userData} logoutClick={logout} logoutEverywhereClick={logoutEverywhere} />
      )  : (
        <>
        <RegisterForm/>
        <LoginForm onSubmit={login}/>
        </>
      )}
    </main>
  </div>  

  );
}

export default App ;