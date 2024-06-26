import logo from './logo.svg';
import './App.css';
import StudentComponent from './StudentComponent';
import StudentComponentClass from './StudentComponentClass';
import StudentFunctionEvent from './StudentFunctionEvent';
import StudentFunctionEventClass from './StudentFunctionEventClass';
import StudentPropsParentComponent from './StudentPropsParentComponent';
import StudentPropsParentComponentClass from './StudentPropsParentComponentClass';
import StudentState from './StudentState';
import StudentUseState from './StudentUseState';
import StudentStateClass from './StudentStateClass';
import StudentGetInputBoxData from './StudentGetInputBoxData';
import StudentGetInputBoxDataButton from './StudentGetInputBoxDataButton';
import StudentStateExample from './StudentStateExample';
import StudentStateExampleClass from './StudentStateExampleClass';
import StudentShowHide from './StudentShowHide';
import StudentForm from './StudentForm';
import StudentFormClass from './StudentFormClass';
import StudentParentGetData from './StudentParentGetData';
import ReactLifeCycleMethodClass from './ReactLifeCycleMethodClass';
import { useState } from 'react';
import StudentComponentWillUnmount from './StudentComponentWillUnmount';
import StudentUseEffect from './StudentUseEffect';
import StudentLifeCycleMethod from './ReactLifeCycleMethod';
import StudentComponentStyle from './StudentComponentStyle';
import StudentPureComponentClass from './StudentPureComponentClass';

function App() {
  // const [data, setData] = useState(1)
  return (
    <div className="App">
      {/* <StudentComponent /> */}
      {/* <StudentComponentClass /> */}
      {/* <StudnetFunctionEvent /> */}
      {/* <StudentFunctionEventClass /> */}
      {/* <StudentPropsParentComponent /> */}
      {/* <StudentPropsParentComponentClass /> */}
      {/* <StudentState /> */}
      {/* <StudentUseState /> */}
      {/* <StudentStateClass /> */}
      {/* <StudentGetInputBoxData /> */}
      {/* <StudentGetInputBoxDataButton /> */}
      {/* <StudentStateExample /> */}
      {/* <StudentStateExampleClass /> */}
      {/* <StudentShowHide /> */}
      {/* <StudentForm /> */}
      {/* <StudentFormClass /> */}
      {/* <StudentParentGetData /> */}
      {/* <ReactLifeCycleMethodClass passData={data}/> */}
      {/* <button onClick={() => setData(data+1)}>Update Props</button> */}
      {/* <ReactLifeCycleMethodClass /> */}
      {/* <StudentComponentWillUnmount /> */}
      {/* <StudentUseEffect /> */}
      {/* <StudentLifeCycleMethod /> */}
      {/* <StudentComponentStyle /> */}
      <StudentPureComponentClass />
    </div>
  );
}

export default App;
