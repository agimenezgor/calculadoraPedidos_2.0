import './App.css';
import Header from './components/header/header';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppRouter from './AppRouter';
import Footer from './components/footer/footer';
import "video-react/dist/video-react.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <Header/>
      </header>
      <main  className="App-content bg-info">
        <AppRouter className="container"/>
      </main>
      <footer className="App-footer">
        <Footer/>
      </footer>
    </div>
  );
}

export default App;
