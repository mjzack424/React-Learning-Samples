import './App.css';
import EventHandlingComp from './components/EventHandlingComp';
import EventHandlingRegisterComp from './components/EventHandlingRegisterComp';
import LoginForm from './components/practice/LoginForm';

function App() {
  return (
    <div className="App">
      <LoginForm />
      <EventHandlingComp />
      <hr/>
      <EventHandlingRegisterComp />
    </div>
  );
}

export default App;
