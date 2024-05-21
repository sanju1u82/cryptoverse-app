import React from "react";
import  {createRoot} from "react-dom/client"; //This function is used to create a root element for rendering the React application.
import { BrowserRouter as Router } from "react-router-dom"; // provide route to application
import { Provider } from "react-redux"; // wraps the application and provides redux store to entire app
import App from './App';
import store from './app/store';
const rootElement = document.getElementById("root"); //rootElement is the DOM element with id "root"
const root = createRoot(rootElement);
//The JSX code within the root.render function represents the application hierarchy.
root.render(
    <Router>
    <Provider store={store}>
        <App /> 
    </Provider>
</Router>,
);
