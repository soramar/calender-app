import React from "react";
import ReactDOM from "react-dom";
import CalendarBoard from "./components/CalenderBoard/index";

const App = () => {
  return (
    <div>
      <CalendarBoard />
    </div>
  )
};

ReactDOM.render(<App />, document.getElementById("root"));
