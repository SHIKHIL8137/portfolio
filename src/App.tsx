import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import AppLoadingScreen from "./components/AppLoadingScreen";

const Portfolio = lazy(() => import("./Portfolio"));
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Suspense fallback={<AppLoadingScreen />}>
            <Portfolio />
          </Suspense>} />
      </Routes>
    </>
  );
}

export default App;
