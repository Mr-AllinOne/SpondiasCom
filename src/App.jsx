import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Home, About, Artical, Clinet, Services } from './pages/index';
import {
  Fintech,
  Education,
  Health,
  Crm,
  Justice,
  Logistic,
  Retail,
  Transportion
} from './pages/subService/index'
import RootRouterService from "./components/RootRouterService";
import ErrorPage from "./components/ErrorPage";

function App() {
  const route = createBrowserRouter([
    { path: '/', element: <Home /> },
    { path: '/about', element: <About /> },
    { path: '/article', element: <Artical /> },
    { path: '/clinet', element: <Clinet /> },
    // { path: '/services', element: <Services /> },
    {
      path: '/services', element: <RootRouterService />,
      errorElement: <ErrorPage />,
      children: [
        { path: "fintech", element: <Fintech /> },
        { path: "transportion", element: <Transportion /> },
        { path: "crm", element: <Crm /> },
        { path: "justice", element: <Justice /> },
        { path: "education", element: <Education /> },
        { path: "logistic", element: <Logistic /> },
        { path: "ratail", element: <Retail /> },
        { path: "health", element: <Health /> },
      ]
    },
    { path: "/health", element: <Health /> },


  ])
  return <RouterProvider router={route} />
}


export default App;