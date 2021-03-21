import Profile from './components/Profile';
import UserList from './components/UserList';
import UserState from './context/User/UserState';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <>
      <UserState>
        <div className="container p-4">
          <div className="row">
            <div className="col">
              <UserList />
            </div>
            <div className="col">
              <Profile />
            </div>
          </div>
        </div>
      </UserState>
    </>
  );
}

export default App;
