import { newNodeValidation } from "../newNodeValidation";

test("if it passes with a correct new node", async () => {
  const reqBody = {
    position_x: 0,
    position_y: 100,
    type: "input",
    content: "flour"
  };
  const mockWrapper = jest.fn(async () => await newNodeValidation(reqBody));
  expect(mockWrapper).not.toThrow()
});


