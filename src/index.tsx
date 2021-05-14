import React from "react";
import { render } from "react-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { Provider } from "react-redux";

import store from "./redux/index";
import AppRoutes from "./routes";

render(
  <React.StrictMode>
    <ChakraProvider>
      <Provider store={store}>
        <AppRoutes />
      </Provider>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
