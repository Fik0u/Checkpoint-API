import './App.css';
import UserList from './components/UserList';


function App() {
  return (
    <div className="App">
      <h1 style={{marginTop:'40px'}}>Code Crafters</h1>
      <h5 style={{fontFamily: 'serif', fontWeight:'600', fontSize: '30px', margin: '50px'}}>Members of our team</h5>
      <h6 style={{fontFamily: 'serif', fontWeight:'400', fontSize: '20px', margin: '50px'}}>Dear crafters, we would like to thank you for your hard work and your continuous support</h6>
      <UserList />
    </div>
  );
}

export default App;
