import logo from './logo.svg';
import './App.css';
import StudentComponent from './StudentComponent';
import StudentComponentClass from './StudentComponentClass';
import StudnetFunctionEvent from './StudentFunctionEvent';
import StudentFunctionEventClass from './StudentFunctionEventClass';
import StudentPropsParentComponent from './StudentPropsParentComponent';
import StudentPropsParentComponentClass from './StudentPropsParentComponentClass';

function App() {
  return (
    <div className="App">
      {/* <StudentComponent /> */}
      {/* <StudentComponentClass /> */}
      {/* <StudnetFunctionEvent /> */}
      {/* <StudentFunctionEventClass /> */}
      {/* <StudentPropsParentComponent /> */}
      <StudentPropsParentComponentClass />
    </div>
  );
}

export default App;
