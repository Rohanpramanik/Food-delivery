import { render, screen} from "@testing-library/react";
import Contact from "../components/Contact";
import "@testing-library/jest-dom";


describe("testcases for contact us page", ()=>{
    //deecribe is just used to group multile test cases, 
    //we can use nested describe/describe inside describe
    
    // we can use it or test anything we can use
    test("load the contact page",()=>{
        render(<Contact/>);
        const heading = screen.getByRole("heading");
    
        //Assertion
        expect(heading).toBeInTheDocument();
    });
    
    it("should load button inside the contact component",()=>{
        render(<Contact/>);
        const button = screen.getByRole("button")
    
        //Assertion
        expect(button).toBeInTheDocument();
    });
    
    it("should have 2 input box inside the contact component",()=>{
        render(<Contact/>);
        const input = screen.getByPlaceholderText("name")
    
        //Assertion
        expect(input).toBeInTheDocument();
    });
    
    test("contact component should have 2 input boxs",()=>{
        render(<Contact/>);
        const inputBoxes = screen.getAllByRole("textbox")
    
        //Assertion
        expect(inputBoxes.length).toBe(2);
    });
});
