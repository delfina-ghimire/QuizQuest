import { useEffect, useReducer } from "react";
import Header from "./components/Header";

import Loader from "./components/Loader";
import Error from "./components/Error";
import MainBody from "./components/MainBody";

const initailState = {
  question: [],

  //loading, error,ready, active, finished
  status: "loading",
};

function reducer(state, action) {
  switch (action.type) {
    case "dataReceived":
      return {
        ...state,
        question: action.payload,
        status: "ready",
      };
    case "dataFailed":
      return {
        ...state,
        status: "error",
      };
    default:
      throw new Error("Action is unknown");
  }
}

function App() {
  const [{ question, status }, dispatch] = useReducer(reducer, initailState);

  useEffect(function () {
    fetch("http://localhost:8000/questions")
      .then((res) => res.json())
      .then((data) => dispatch({ type: "dataReceived", payload: data }))
      .catch((err) => dispatch({ type: "dataFailed" }));
  }, []);

  return (
    <div className="app">
      <Header />
      <MainBody>
        {status === "loading" && <Loader />}
        {status === "error" && <Error />}
      </MainBody>
    </div>
  );
}

export default App;
