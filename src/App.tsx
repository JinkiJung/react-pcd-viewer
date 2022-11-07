import './App.css';
//import { PCDLoader } from 'three-stdlib';
import { ReactThreePcdViewer } from './component/ReactThreePcdViewer';

function App() {
  return (
    <div className="App">
      <ReactThreePcdViewer url="data/15_2_24.70_.pcd"></ReactThreePcdViewer>
    </div>
  );
}

export default App;
