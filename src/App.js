import logo from './logo.svg';
import './App.css';
import ComponentDid from './ComponentDid';
import ShouldComponent from './ShouldComponent';
import GetSnapShotExample from './GetSnapShotExample';
import ComponentUnmountExample from './ComponentUnmountExample';

function App() {

      
  return (
    <div className="App">
   Hello react
{/* 
   <ComponentDid color='red'/>
   <ShouldComponent/>
   <GetSnapShotExample/> */}
   <ComponentUnmountExample/>
    </div>
  );
}

export default App;
