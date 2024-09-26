App.js;

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home';
import AboutUs from './AboutUs';
import Services from './Services';
import './style.css';

const App = () => {
  return (
    <Router>
      <div>
        <header>
          <div className="logo-container"></div>
          <nav>
            <ul>
              <li>
                <a href="/">Início</a>
              </li>
              <li>
                <a href="/servicos">Serviços</a>
              </li>
              <li>
                <a href="/sobre-nos">Sobre Nós</a>
              </li>
              <li>
                <a href="#agendamento">Agendamento</a>
              </li>
            </ul>
          </nav>
        </header>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/servicos" component={Services} />
          <Route path="/sobre-nos" component={AboutUs} />
        </Switch>
        <footer>
          <p>
            &copy; 2024 Car Detail Estética Automotiva. Todos os direitos
            reservados.
          </p>
        </footer>
      </div>
    </Router>
  );
};

export default App;
