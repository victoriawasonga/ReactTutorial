import './App.css';
import Comps from './Components/Comps';
import Job from './Components/Job';
import Props from './Components/Props';

function App() {
  return (
    <div className="App">
      <h1>Hello World</h1>
      <Comps/>
      <Props name="Victoria" email="v@gmail.com" age={32}/>
      <Job salary={3000} position="Software Developer" company="VTech solutions"/>
    </div>
  );
}

export default App;
