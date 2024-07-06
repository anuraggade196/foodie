import Header from "../Header";

import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../utils/Store";
import { StaticRouter } from "react-router-dom/server";

test("Logo should load on rendering header", () => {
  // Load Header
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  );

  const logo = header.getAllByTestId("logo");
  console.log(logo);
  expect(logo[0].src).toBe("http://localhost/DummyLogo.png");

  // Checking if logo is Working
});

test("Online Status", () => {
  // Load Header
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  );

  const onlineStat = header.getByTestId("onlinestat");
  expect(onlineStat.innerHTML).toBe("Online Status : 🟢");
});

test("Cart should be rendered with 0 items", () => {
  // Load Header
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  );

  const cart = header.getByTestId("cart");
  expect(cart.innerHTML).toBe("Cart - 0");
});
