import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import styles from './brand.module.css';

import Header from './components/header';
import Footer from './components/footer';

import Home from './pages/home';
import About from './pages/about';
import Contact from './pages/contact';
import Portfolio from './pages/portfolio';

function App() {
  return (
    <div className={styles.App}>
      <Router>
      <Header />
      <div className={styles.pageContent}>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/about' component={About} />
        <Route path ='/portfolio' component={Portfolio} />
        <Route path='/contact' component={Contact} />
      </Switch>
      </div>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
