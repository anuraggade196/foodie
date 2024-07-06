import { render, waitFor } from "@testing-library/react"
import { Provider } from "react-redux"
import { StaticRouter } from "react-router-dom/server"
import { store } from "../utils/Store"
import Body from "../Body"


test("Restaurrants should load on Homepage", async () =>{
    const body = render(
        <StaticRouter>
            <Provider store = {store}>
                <Body />
            </Provider>
        </StaticRouter>
    )
    await waitFor(() => expect (body.getByTestId("search-btn")))
    const shimmer = body.getByTestId("shimmer")
    expect(shimmer.children.length).toBe(10);
    console.log(shimmer)
}
)