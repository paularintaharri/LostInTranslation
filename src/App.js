import './App.css';
import { BrowserRouter as Router} from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import TranslatePage from './pages/TranslatePage';
import ProfilePage from './pages/ProfilePage';

function App() {
  return (
    <Router>
      <div className="App">
        <LoginPage />
      
        {/* <Switch>
          <Route path="/" component={ LoginPage } />
          <Route path="/translate" component={ TranslatePage } />
          <Route path="/profile" component={ ProfilePage } />
        </Switch> */}
      </div>
    </Router>
  );
}

export default App;
