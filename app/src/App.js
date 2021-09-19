import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from './components/header';
import Footer from './components/footer';

import Home from './pages/home';
import About from './pages/about';
import Contact from './pages/contact';

function App() {
  return (
    <div className="App">
      <Router>
      <header className="App-header">
        <h1>App.js</h1>
        <Header />
        <main>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="contact" component={Contact} />
        </main>
        <Footer />
      </header>
      </Router>
    </div>
  );
}

export default App;
