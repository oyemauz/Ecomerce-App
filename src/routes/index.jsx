import {
  createBrowserRouter,
  //Navigate,
  //RouterProvider,
} from "react-router-dom";
import routes from "./routes";

function Index() {
  return createBrowserRouter(routes);
}

export default Index;
