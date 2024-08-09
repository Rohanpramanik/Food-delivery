import { sum } from "../components/sum"

test("sum of two no", ()=> {
    const result = sum(3,5);
    
    //assertion
    expect(result).toBe(8);
})

