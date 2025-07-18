import { object, string, ObjectSchema, number } from "yup";
import { SemiNodeRecord } from "../../types";

const schema: ObjectSchema<SemiNodeRecord> = object({
  position_x: number().required("Node position_x is required"),
  position_y: number().required("Node position_y is required"),
  type: string().required("Node type is required"),
  content: string().required("Node content is required")
});

export const newNodeValidation = async (reqBody: any) => {
  reqBody.position_x = Number(reqBody.position_x);
  reqBody.position_y = Number(reqBody.position_y);
  const semiNode: SemiNodeRecord = await schema.validate(reqBody, {
    strict: true
  });
  return semiNode;
};
