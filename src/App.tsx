import React from "react";
import { Provider } from "react-redux";

import { store } from "./redux";
import { AlertProvider } from "./components/Alert";
import { ModalProvider } from "./components/Modal";

import Routes from "./Routes";

function App() {
  return (
    <Provider store={store}>
      <ModalProvider>
        <AlertProvider>
          <Routes />
        </AlertProvider>
      </ModalProvider>
    </Provider>
  );
}

export default App;
