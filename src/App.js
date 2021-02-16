import './App.css';
import Header from './components/header/header';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppRouter from './AppRouter';
import Footer from './components/footer/footer';
import "video-react/dist/video-react.css";
import {useState} from 'react';
import Cookies from 'universal-cookie';
import CookieConsent from "react-cookie-consent";

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
      <CookieConsent
          location="bottom"
          style={{
            background: "linear-gradient(to right, #abb2b9, #34495e)",
            textAlign: "center"
          }}
          buttonText="Acepto"
          buttonStyle={{
            background:"#d4ac0d",
            borderRadius: "0.3em",
            color: "#34495e",
            paddingLeft: "0.8em",
            paddingRight: "0.8em" 
          }}
          containerClasses="alert alert-warning col-lg-12"
          overlay
        >
          Este sitio web utiliza cookies para mejorar la experiencia del usuario.{" "}
          <div style={{ fontSize: "0.8em" }}>Si permaneces en la web, aceptas el uso de todas las cookies</div>
      </CookieConsent>
    </div>
  );
}

export default App;
