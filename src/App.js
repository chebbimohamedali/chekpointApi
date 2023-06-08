import './App.css';
import NavBar from './components/NavBar';
import Profil from './components/Profil';
import UserList from './components/UserList';
import {BrowserRouter,Routes,Route} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <header className="App-header">
        <NavBar />
      <Routes>
        <Route path="/" element={<UserList/>} />
        <Route path="/profil/:id" element={<Profil/>} />
      </Routes>
       
      </header>
    </div>
    </BrowserRouter>
  );
}
export default App;