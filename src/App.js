import Header from "./components/Header";
import Body from "./components/Body";
import Error from "./components/Error";
import { createBrowserRouter, Outlet } from "react-router-dom";
import { FAQ} from "./components/FAQ";
import { RestaurantMenu } from "./components/RestaurantMenu";
import { lazy, Suspense } from "react";
import { Provider } from "react-redux";
import { store } from "./components/utils/Store";
import { Cart } from "./components/Cart";
import { Footer } from "./components/Footer";
import { Login } from "./components/Login";

function App() {
  return (
    <Provider store={store}>
      <Header />
      <Outlet />
      <Footer />
    </Provider>
  );
}
const About = lazy(() => import("./components/About"));
export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/faq",
        element: <FAQ />,
      },
      {
        path: "/restaurant/:id",
        element: <RestaurantMenu />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);

export default App;
