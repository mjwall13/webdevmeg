import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import styles from './brand.module.css';

import Header from './components/header';
import Footer from './components/footer';

import Home from './pages/home';
import About from './pages/about';
import Contact from './pages/contact';

function App() {
  return (
    <div className={styles.App}>
      <Router>
      <Switch>
      <header >
        <Header />
        <main>
            <Route exact path='/' component={Home} />
            <Route path='/about' component={About} />
            <Route path='/contact' component={Contact} />
        </main>
        <Footer />
      </header>
      </Switch>

      </Router>
    </div>
  );
}

export default App;
