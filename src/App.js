import logo from './logo.svg';
import './App.css';
import DataComponent from './datafetch';
import UsersList from './datafetch';

function App() {
  return (
    <>
     <div className="container">
      <h1>Data Fetch</h1>
      <UsersList/>
    </div>
    </>
  );
}

export default App;
