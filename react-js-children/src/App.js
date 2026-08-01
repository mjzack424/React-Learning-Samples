import './App.css';
import CompChild from './CompChild';
import CompChild02 from './CompChild02';

function App() {
  return (
    <div className="App">
      <CompChild  className={"text-danger"}>
        <p>
          این چه کاری بود که کردی!
        </p>
      </CompChild>
      <CompChild02 className={"text-success"}>
        <p>
          این چه کاری بود که کردی!
        </p>
      </CompChild02>
      <CompChild02 >
        <p style={{color:'whitesmoke'}}>
          این چه کاری بود که کردی!
        </p>
      </CompChild02>
    </div>
  );
}

export default App;
