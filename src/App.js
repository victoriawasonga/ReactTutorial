import './App.css';
import Comps from './Components/Comps';
import Condition from './Components/Condition';
import Job from './Components/Job';
import Lists from './Components/Lists';
import Objects from './Components/Objects';
import Planets from './Components/Planets';
import Props from './Components/Props';

function App() {
  return (
    <div className="App">
      <h1>Hello World</h1>
      <Comps/>
      <Props name="Victoria" email="v@gmail.com" age={32}/>
      <Job salary={3000} position="Software Developer" company="VTech solutions"/>
      <Condition/>
      <Lists/>
      <Objects/>
      <Planets/>
    </div>
  );
}

export default App;
