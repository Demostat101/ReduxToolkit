import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider} from "react-redux";
import { store } from "./app/Store.jsx";
import { fetchUsers } from "./features/users/usersSlice.jsx";

store.dispatch(fetchUsers())



createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
    <App/>
    </Provider>
  </StrictMode>
);
