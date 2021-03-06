import './App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import TranslatePage from './pages/TranslatePage';
import ProfilePage from './pages/ProfilePage';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Router>
      <div className="App">
        
        <Switch>
            <Route path="/login" component={ LoginPage } />
            <Route path="/translate" component={ TranslatePage } />
            <Route path="/profile" component={ ProfilePage } />
            <Route path="*" component={ NotFound } />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
