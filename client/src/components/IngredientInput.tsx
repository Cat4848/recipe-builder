import { ChangeEvent, useCallback, useState } from "react";
import { Handle, Position } from "@xyflow/react";

interface Props {
  id: string;
  data: {label: string};
}

export default function IngredientInput({ id, data }: Props) {
  const [ingredient, setIngredient] = useState("");

  const onChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setIngredient(e.target.value);
  }, []);

  return (
    <div className="text-input">
      <div>{data.label}</div>
      <input
        id={id}
        name="ingredient"
        onChange={onChange}
        className="nodrag"
        value={ingredient}
      />
      <Handle type="source" position={Position.Right} />
    </div>
  );
}
