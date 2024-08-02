import React from "react";
import ReactDOM from "react-dom";
import { SidebarProvider } from './context/sidebarContext';
import { MealProvider } from './context/mealContext';


import "./index.css";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <SidebarProvider>
      <MealProvider>
        <App />
      </MealProvider>
    </SidebarProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
