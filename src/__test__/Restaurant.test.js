import { render, screen } from "@testing-library/react";
import RestaurantCard from "../components/RestaurantCard";
import MOCK_DATA from "../mocks/RestaurantCardMock.json";
import "@testing-library/jest-dom";;

it("should render restaurantCard component with props Data", ()=>{
    render(<RestaurantCard resData={MOCK_DATA}/>)
    const sname = screen.getByText("UBQ by Barbeque Nation");
    expect(sname).toBeInTheDocument();
});