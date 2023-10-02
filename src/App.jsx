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

function App() {
  const route = createBrowserRouter([
    { path: '/', element: <Home /> },
    { path: '/about', element: <About /> },
    { path: '/article', element: <Artical /> },
    { path: '/clinet', element: <Clinet /> },
    { path: '/services', element: <Services /> },
    { path: "/fintech", element: <Fintech /> },
    { path: "/transportion", element: <Transportion /> }
  ])
  return <RouterProvider router={route} />
}

export default App;