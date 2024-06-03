import { library } from "@fortawesome/fontawesome-svg-core";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NameWithNumber } from "../../App";
type HistoryProps = {
  names: NameWithNumber[];
};
library.add(faArrowRight);

export const History = ({ names, ...props }: HistoryProps) => {
  return (
    <div className="notification is-link">
      <p className="title is-4">History</p>
      <span className="icon-text flex flex-col">
        {names.map((name) => (
          <div>
            <span className="icon">
              <FontAwesomeIcon icon="arrow-right" />
            </span>
            <span>
              #{name.number} - {name.name}
            </span>
          </div>
        ))}
      </span>
    </div>
  );
};
