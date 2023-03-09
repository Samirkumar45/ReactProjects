// import logo from './logo.svg';
import './App.css';
import ErrorBoundary from './Components/ErrorBoundary';
import Hero from './Components/Hero';
// import Portal2 from './Components/Portal2';
// import PortalDemo from './Components/PortalDemo';
// import RefsOlds from './Components/refsDemo';
// import refsDemo from './Components/refsDemo';
// import refsDemo from './Components/refsDemo';
// import EveBinding from './Components/EveBinding';
// import FRParentInputs from './Components/FRParentInputs';
// import ClassCounter from './Hookfunctions/ClassCounter';
// import HookCounter from './Hookfunctions/HookCounter';
// import Header from './websiteDesign/Header';
// import HookCounter2 from './Hookfunctions/HookCounter2';
// import HookCounter3 from './Hookfunctions/HookCounter3';
// import Welcome from './Components/Welcome';
function App() {
  return (
    <div className='App'>
      {/* <refsDemo/> */}
      {/* <refsDemo/> */}
      {/* <EveBinding/> */}
      {/* <FRParentInputs/> */}
      {/* <ClassCounter/> */}
      {/* <HookCounter/> */}
      {/* <Header /> */}
      {/* <HookCounter2/> */}
      {/* <HookCounter3 /> */}
      {/* <Welcome name="Manav" Heroname="batman"/> */}
      {/* <Portal2 /> */}
      {/* <PortalDemo /> */}

      <ErrorBoundary>
        <Hero heroname='Batman'></Hero>
      </ErrorBoundary>
      <ErrorBoundary>
        <Hero heroname='Superman'></Hero>
      </ErrorBoundary>
      <ErrorBoundary>
        <Hero heroname='Joker'></Hero>
      </ErrorBoundary>
    </div>
  );
}

export default App;
