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
import IntervalClassCounter from './Components/08_useEffectIncorrectDependency/IntervalClassCounter';
import IntervalHookCounter from './Components/08_useEffectIncorrectDependency/IntervalHookCounter';
import DataFetching from './Components/09_FetchingData/DataFecthing';
import ComponentC from './Components/10_UseContext/ComponentC';
import { UserContext, UserTeam } from './Components/10_UseContext/UserContext'
import Counter from './Components/12_useMemoHook/Counter';
import ClassTimer from './Components/13_UseRefHook/ClassTimer';
import HookTimer from './Components/13_UseRefHook/HookTimer';

function App() {
  return (
    <div className="App">
      <div className="header_tutorial">
        <h1>React Hooks</h1>
      </div>

      {/* 13  */}

      < HookTimer />
      < ClassTimer />

      {/* 12 */}

      {/* <Counter /> */}

      {/* 11  */}

      {/* <ParentComponent /> */}

      {/* 10 */}
      
      {/* <UserContext.Provider value={'Vishwas'}>
        <UserTeam.Provider value={'Developer'}>
          <ComponentC />
        </UserTeam.Provider>
      </UserContext.Provider> */}

      {/* 09 */}

      {/* <DataFetching /> */}

      {/* 08 */}

      {/* <IntervalHookCounter /> */}
      {/* <IntervalClassCounter /> */}

      {/* 07 */}

      {/* <MouseContainer /> */}

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
