import "bulma/css/bulma.min.css";
import { useCallback, useEffect, useMemo, useState } from "react";
import "./App.css";
import { Input } from "./components/input";
import { StartButton } from "./components/start-button";
import { SuccessModal } from "./components/success-modal/success-modal.component";

export type NameWithNumber = {
  name: string;
  number: number;
};

enum Status {
  notStarted,
  inProgress,
  finished,
}
function App() {
  const [names, setNames] = useState<NameWithNumber[]>([]);
  const [status, setStatus] = useState<Status>(Status.notStarted);

  const NameListComponent = useMemo(
    () => (
      <div className="container flex flex-col gap-2">
        {names.map((name, i) => {
          return (
            <Input
              key={i}
              name={name.name}
              disabled={[Status.inProgress, Status.finished].includes(status)}
              placeholder="Name..."
              onChange={(newName) => {
                setNames((names) => {
                  const newNames = [...names];
                  newNames[i].name = newName;
                  return newNames;
                });
              }}
              number={name.number}
              onDelete={() => {
                setNames((names) =>
                  [...names].filter((e) => e.number !== name.number)
                );
              }}
            />
          );
        })}{" "}
      </div>
    ),
    [names, status]
  );

  const handleOnAdd = useCallback(() => {
    setNames([
      ...names,
      {
        name: "",
        number:
          (names?.reverse()?.shift() ?? { number: 0, name: "" }).number + 1,
      },
    ]);
  }, [names]);

  const handleOnPrimary = useCallback(() => {
    if (names.some((a) => !a.name.length)) return;
    const randomInList = Math.floor(Math.random() * names.length);
    const name = names[randomInList];
    setNames([...names].filter((e) => e.number !== name.number));

    if (status === Status.notStarted) {
      return setStatus(Status.inProgress);
    }

    if (status === Status.inProgress && names.length === 1) {
      return setStatus(Status.finished);
    }

    if (status === Status.finished) {
      setStatus(Status.notStarted);
      setNames([]);
      return;
    }
  }, [names, status]);

  useEffect(() => {
    if (status === Status.notStarted) return;
    else if (status === Status.inProgress && names.length === 1) {
      return setStatus(Status.finished);
    }
  }, [names, status]);

  const handleOnHide = useCallback(() => {
    setStatus(Status.notStarted);
    setNames([]);
  }, [names, status]);

  const subtitle = useMemo(() => {
    if (status === Status.notStarted)
      return "Add names and hit 'Start' when ready.";
    else if (status === Status.inProgress)
      return "Press 'continue' to draw the rest of the names.";
    return "";
  }, [status]);

  return (
    <>
      <SuccessModal
        name={[...names].shift()?.name ?? ""}
        isVisible={status === Status.finished}
        onHide={handleOnHide}
      />
      <h1 className="title is-1">Tombola</h1>
      <p className="subtitle">{subtitle}</p>
      <div>{NameListComponent}</div>

      <div className="flex flex-col gap-2 mt-2">
        <button
          className="button is-link is-fullwidth"
          onClick={handleOnAdd}
          disabled={[Status.inProgress, Status.finished].includes(status)}
        >
          Add
        </button>
        <StartButton
          names={names}
          hasStarted={[Status.inProgress, Status.finished].includes(status)}
          onClick={handleOnPrimary}
        />
      </div>
    </>
  );
}

export default App;
