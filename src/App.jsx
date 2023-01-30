import Cart from "./components/Cart/Cart";
import StepperForm from "./components/Step/StepperForm";
import StepProgress from "./components/Step/StepProgress";
import classes from "./App.module.css";
import { useState } from "react";
import CartProvider from "./store/CartProvider";
import UserInputProvider from "./store/UserInputProvider";

function App() {
  const [currStep, setCurrStep] = useState("step1");

  const handlePrevStepChange = () => {
    switch (currStep) {
      case "step2":
        setCurrStep("step1");
        break;
      case "step3":
        setCurrStep("step2");
        break;
      default:
        break;
    }
  };

  const handleNextStepChange = () => {
    switch (currStep) {
      case "step1":
        setCurrStep("step2");
        break;
      case "step2":
        setCurrStep("step3");
        break;
      default:
        break;
    }
  };

  return (
    <CartProvider>
      <UserInputProvider>
        <main className={classes.mainContent}>
          <div className={classes.mainContainer}>
            <div>
              <StepProgress stepControl={currStep} />
              <StepperForm
                stepControl={currStep}
                onToPrevStep={handlePrevStepChange}
                onToNextStep={handleNextStepChange}
              />
            </div>
            <Cart />
          </div>
        </main>
      </UserInputProvider>
    </CartProvider>
  );
}

export default App;
