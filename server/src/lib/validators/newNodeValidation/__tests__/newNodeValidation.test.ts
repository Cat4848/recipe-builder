import { newNodeValidation } from "../newNodeValidation";
import { ValidationError } from "yup";

test("if it passes with a correct new node", async () => {
  expect.assertions(1);
  const reqBody = {
    position_x: 0,
    position_y: 100,
    type: "input",
    content: "flour"
  };
  const mockWrapper = jest.fn(async () => await newNodeValidation(reqBody));
  expect(mockWrapper).not.toThrow();
});

test("if it fails with empty new node", async () => {
  expect.assertions(1);
  const reqBody = {};
  try {
    await newNodeValidation(reqBody);
  } catch (e) {
    expect(e).toBeInstanceOf(ValidationError);
  }
});
