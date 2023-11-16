
import './App.css';
import React from 'react';
import Article from './authors_page/Article';
import Biography from './authors_page/Biography';
import FamousWorks from './authors_page/FamousWorks';
import WorkCollection from './authors_page/WorkCollection';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';

function App() {
  return (
    //<div>
      //<Article/>
    //</div>
    <Router>
      <div>
        <nav>
          <ul>
            <li><Link to="/bigraphy">Biography</Link></li>
            <li><Link to="/famous-works">Famous Works</Link></li>
            <li><Link to="/works-collection">Works</Link></li>
          </ul>
        </nav>
        <Switch>
            <Route path="/biography" component={Biography}/>
            <Route path="/famous-works" component={FamousWorks}></Route>
            <Route path="/works-collection" component={WorkCollection}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
