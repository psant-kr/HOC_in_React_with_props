import './App.css';
import SampleComponent from './component/SampleComponent';
import { HOCofSampleComponent } from './component/SampleComponent';


function App() {
  return (
    <div className="App">
     this is fron app.js prashant
      <SampleComponent />
      <HOCofSampleComponent name={"prashant"} />
    </div>
  );
}

export default App;
