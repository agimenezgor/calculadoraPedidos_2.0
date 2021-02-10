import './App.css';
import Header from './components/header/header';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppRouter from './AppRouter';
import Footer from './components/footer/footer';
import "video-react/dist/video-react.css";
import {useState} from 'react';
import Cookies from 'universal-cookie';

function App() {
  const [user, setUser] = useState("");
  
  const cookies = new Cookies();
  let name = cookies.get('name');
  if(user === "" && name !== undefined){
    setUser(name);
  }
  return (
    <div className="App">
      <header className="App-header">
          <Header user={user} setUser={setUser}/>
      </header>
      <main  className="App-content bg-info">
          <AppRouter setUser={setUser} className="container"/>
      </main>
      <footer className="App-footer">
          <Footer/>
      </footer>
    </div>
  );
}

export default App;
