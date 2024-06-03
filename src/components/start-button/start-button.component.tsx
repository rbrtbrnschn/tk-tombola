import { HTMLAttributes, useMemo } from "react";
import { NameWithNumber } from "../../App";

interface StartButtonProps extends HTMLAttributes<HTMLButtonElement> {
  hasStarted: boolean;
  names?: NameWithNumber[];
}
export const StartButton = ({
  onClick,
  hasStarted,
  names,
}: StartButtonProps) => {
  const name = hasStarted ? "Continue" : "Start";
  const usedClassNames = useMemo(() => {
    const formIsFilledOut = !names?.some((a) => !a.name.length);
    const base = "button is-fullwidth ";
    if (hasStarted) return base + "is-success is-outlined";
    else if (formIsFilledOut) return base + "is-success";
    else return base;
  }, [hasStarted, names]);
  return (
    <button className={usedClassNames} onClick={onClick}>
      {name}
    </button>
  );
};
