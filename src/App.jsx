import Cart from "./components/Cart/Cart";
import StepperForm from "./components/Step/StepperForm";
import StepProgress from "./components/Step/StepProgress";
import classes from "./App.module.css";

function App() {
  return (
    <main className={classes.mainContent}>
      <div className={classes.mainContainer}>
        <div>
          <StepProgress />
          <StepperForm />
        </div>
        <Cart />
      </div>
    </main>
  );
}

export default App;
