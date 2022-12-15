import "./App.css";
import { useRoutes } from "react-router-dom";
import { Router } from "./router/Router";

const App = () => {
  const routing = useRoutes(Router);
  return <div>{routing}</div>;
};

export default App;
