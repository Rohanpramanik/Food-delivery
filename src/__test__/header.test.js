import { Provider } from "react-redux";
import Header from "../components/Header";
import { BrowserRouter } from "react-router-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import store from "../appStore/store";

it("should render login button",()=>{
    render(
        <BrowserRouter>
            <Provider store={store}>
                <Header/>
            </Provider>
        </BrowserRouter>
    )

    const loginButton = screen.getByRole("button",{ name: "Login" });
    // when we want to check a button which have specific name like Login

    expect(loginButton).toBeInTheDocument();
});

it("should have cart icon",()=>{
    render(
        <BrowserRouter>
            <Provider store={store}>
                <Header/>
            </Provider>
        </BrowserRouter>
    );

    const cartIcon = screen.getByTestId("cart-icon");
    // when we want to check a button which have specific name like Login
    
    expect(cartIcon).toBeInTheDocument();
});

it("should have 0 cart items",()=>{
    render(
        <BrowserRouter>
            <Provider store={store}>
                <Header/>
            </Provider>
        </BrowserRouter>
    )

    const cartItems = screen.getByText("0");
    // when we want to check a button which have specific name like Login
    
    expect(cartItems).toBeInTheDocument();
});

it("should change login button to loggout button on click",()=>{
    render(
        <BrowserRouter>
            <Provider store={store}>
                <Header/>
            </Provider>
        </BrowserRouter>
    )

    const loginButton = screen.getByRole("button",{ name: "Login" });
    
    fireEvent.click(loginButton);
    const logoutButton =  screen.getByRole("button", { name: "Loggout" });
    
    expect(logoutButton).toBeInTheDocument();
});

