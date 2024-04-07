
import { useEffect, useState } from 'react';
import './App.css'
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import UserProfile from './components/UserProfile';

function App () {
  const apiUrl ="http://localhost:8000/api";
  //token letárolása
  const [token, setToken] = useState('');
  const [userData, setUserData] = useState(null);

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
      setToken('');
    }
  }
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
      setToken(data.token);
      alert("Sikeres bejelentkezés")
  }else {
      alert(data.message);
  }

}
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
    setToken('');
  }else{
    const data = await response.json();
    alert(data.message);
  }
}

  return (<main>

    {userData != null ?
      <UserProfile user={userData} logoutClick={logout} logoutEverywhereClick={logoutEverywhere} />
      :
      <>
      <RegisterForm/>
      <LoginForm onSubmit={login}/>
      </>
    }
  </main>  );
}

export default App ;