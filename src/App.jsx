import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Home, About,Artical, Clinet, Services } from './pages/index';
// import Home from "./pages/Home";
// import About from "./pages/About";

function App() {
  const route = createBrowserRouter([
    { path: '/', element: <Home/> },
    { path: '/about', element: <About/> },
    { path: '/article', element: <Artical/> },
    { path: '/clinet', element: <Clinet/> },
    { path: '/services', element: <Services /> },
  ])
  return <RouterProvider router={route} />
}

export default App;