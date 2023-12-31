import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import BodyContainer from "./Components/BodyContainer";

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <BodyContainer />
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
