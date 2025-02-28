import { Suspense } from "react";
import HomePage from "./components/HomePage";

const App = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading</div>}>
        <HomePage />
      </Suspense>
    </div>
  );
};

export default App;
