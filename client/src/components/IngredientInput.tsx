import { ChangeEvent, useCallback, useState } from "react";
import { Handle, Position } from "@xyflow/react";

interface Props {
  id: string;
  label: string;
}

export default function IngredientInput({ id, label }: Props) {
  const [ingredient, setIngredient] = useState("");

  const onChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setIngredient(e.target.value);
  }, []);

  return (
    <div className="text-input">
      <div>{label}</div>
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
