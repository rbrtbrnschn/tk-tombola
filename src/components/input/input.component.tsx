import { InputProps } from "./input.types";

export const Input = ({
  name,
  onChange,
  number,
  disabled,
  onDelete,
  ...props
}: InputProps) => {
  return (
    <div className="flex items-center gap-2">
      <div className="">#{number}</div>
      <input
        className="input flex-grow"
        value={name}
        disabled={disabled}
        onChange={(e) => {
          onChange(e.currentTarget.value);
        }}
        {...props}
      />
      <button
        className="button is-danger is-outlined"
        onClick={onDelete}
        disabled={disabled}
      >
        <span>Delete</span>
        <span className="icon is-small">
          <i className="fas fa-times"></i>
        </span>
      </button>
    </div>
  );
};
