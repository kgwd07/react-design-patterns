import { useState } from "react";
import { UncontrolledFlow } from "./components/uncontrolled-flow";
import { ControlledForm } from "./components/controlled-form";
import { ControlledFlow } from "./components/controlled-flow";
import { UncontrolledModal } from "./components/uncontrolled-modal";
import { ControlledModal } from "./components/controlled-modal";

const StepOne = ({ next }) => {
  return (
    <>
      <h1>Step #1: Enter your name</h1>
      <button onClick={() => next({ name: "TestName" })}>Next</button>
    </>
  );
};
const StepTwo = ({ next }) => {
  return (
    <>
      <h1>Step #2: Enter your age</h1>
      <button onClick={() => next({ age: 30 })}>Next</button>
    </>
  );
};
const StepThree = ({ next }) => {
  return (
    <>
      <h1>Step #3: You qualify!</h1>
      <button onClick={() => next({})}>Next</button>
    </>
  );
};

const StepFour = ({ next }) => {
  return (
    <>
      <h1>Step #4: Enter your country</h1>
      <button onClick={() => next({ country: "Poland" })}>Next</button>
    </>
  );
};

function App() {
  // const [shouldDisplay,setShouldDisplay] = useState(false)
  const [data, setData] = useState({});
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  const next = (dataFromStep) => {
    setData({...data, ...dataFromStep});
    setCurrentStepIndex(currentStepIndex + 1);
  };

  return (
    <>
    {/* <UncontrolledFlow/> */}
    {/* <ControlledForm/> */}

    {/* <UncontrolledModal/> */}
      {/* <h3>I am the body of the Modal</h3>   */}
    {/* <ControlledModal>
    </ControlledModal shouldDisplay={shouldDisplay} onClose={() => setShouldDisplay(false)}> */}
    {/* <button onClick={() => setShouldDisplay(!shouldDisplay)}>{shouldDisplay ? 'Hide modal' :'Display Modal'}</button> */}

    {/* <UncontrolledFlow onDone={data => {
      console.log(data);
      alert('yaee, you made it to the final step')
    }}>
    <StepOne />
    <StepTwo />
    </UncontrolledFlow> */}

      <ControlledFlow currentStepIndex={currentStepIndex} onNext={next} onDone={data => {
      console.log(data);
      alert('yaee, you made it to the final step')
    }}>
        <StepOne />
        <StepTwo />
        {data.age > 25 && <StepThree />}
        <StepFour />
      </ControlledFlow>
    </>
  );
}

export default App;
