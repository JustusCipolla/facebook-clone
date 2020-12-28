import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Feed from './Feed';
import Widgets from './Widgets';
import Login from './Login';
import { useStateValue } from './StateProvider';

function App() {

  // eslint-disable-next-line no-unused-vars
  const [{user}, dispatch] = useStateValue();

  return (
    <div className="app">
      {!user ? (<Login />) : (
      <div className="wrapper">
        <Header />
          <div className="app__body">
            <Sidebar />
            <Feed />
            <Widgets />
          </div>
      </div>
      )}
    </div>
  );
}

export default App;
