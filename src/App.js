import React from "react";
import "./App.css";

import {HTML5Backend as Backend} from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";
import store from "./store/store";
import { Provider } from "react-redux";
import DoneBoard from "./components/boards/DoneBoard";
import TodoBoard from "./components/boards/TodoBoard";

function App() {
  return (
    <Provider store={store}>
      <DndProvider backend={Backend}>
        <div className="App flexbox">
          <TodoBoard />
          <DoneBoard />
        </div>
      </DndProvider>
    </Provider>
  );
}

export default App;
