import './App.css';

import ClassCounter from './Components/01_UseState/ClassCounter';
import HookCounter from './Components/01_UseState/HookCounter';
import HookCounterTwo from './Components/02_PreviousState/HookCounterTwo';
import HookCounterThree from './Components/03_UseStateObject/HookCounterThree';
import HookCounterFour from './Components/04_UseStateArray/HookCounterFour';
import ClassCounterOne from './Components/05_useEffect/ClassCounterOne';
import HookCounterOne from './Components/05_useEffect/HookCounterOne';
import ClassMouse from './Components/06_runEffectsOnlyOnce/ClassMouse';
import HookMouse from './Components/06_runEffectsOnlyOnce/HookMouse';
import MouseContainer from './Components/07_useEffectCleanUp/MouseContainer';

function App() {
  return (
    <div className="App">
      <div className="header_tutorial">
        <h1>React Hooks</h1>
      </div>

      {/* 07 */}

      <MouseContainer />

      {/* 06  */}

      {/* < HookMouse /> */}
      {/* < ClassMouse /> */}

      {/* 05  */}

      {/* <HookCounterOne /> */}
      {/* <ClassCounterOne /> */}

      {/* 04 */}

      {/* <HookCounterFour /> */}

      {/* 03 */}

      {/* <HookCounterThree /> */}

      {/* 02 */}

      {/* < HookCounterTwo /> */}

      {/* 01 */}

      {/* <HookCounter /> */}
      {/* <ClassCounter /> */}

    </div>
  );
}

export default App;
