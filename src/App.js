import React from "react";
import "./App.css";

import { HTML5Backend as Backend } from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";
import store from "./store/store";
import { Provider } from "react-redux";
// import DoneBoard from "./components/boards/DoneBoard";
// import TodoBoard from "./components/boards/TodoBoard";
import { RoundCard } from "./components/layout/RoundCard";
import { CardContainer } from "./components/cards/CardContainer";
import { CardHolder } from "./components/cards/CardHolder";

function App() {
  return (
    <Provider store={store}>
      <DndProvider backend={Backend}>
        <div className="App flexbox">
          {/* <TodoBoard />
          <DoneBoard /> */}
          <div className="production">
            <CardContainer
              content={"material-stock"}
              type={"production"}
              text={"Material Stock"}
            />
            <CardContainer
              content={"mainfacturing"}
              type={"production"}
              text={"Manifaturing"}
            />
              <CardContainer
              content={"stock"}
              type={"production"}
              text={"stock"}
            />
            <CardContainer
              content={"assembly"}
              type={"production"}
              text={"Assembly"}
            />
          </div>
        </div>
      </DndProvider>
    </Provider>
  );
}

export default App;
