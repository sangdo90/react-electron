import React from "react";

interface Props {
  content: string;
  onRemove(): void;
}

const TodoItem = ({ content, onRemove }: Props) => {
  return (
    <div>
      <input type="checkbox" />
      <span>{content}</span>
      <span onClick={onRemove}>❌</span>
    </div>
  );
};

export default TodoItem;
