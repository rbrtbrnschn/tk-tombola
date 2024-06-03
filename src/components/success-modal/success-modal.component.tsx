import { Fragment } from "react/jsx-runtime";

interface SuccessModalProps {
  isVisible: boolean;
  onHide?: () => void;
  name: string;
}
export const SuccessModal = ({
  isVisible,
  onHide,
  name,
}: SuccessModalProps) => {
  if (!isVisible) return <Fragment />;

  return (
    <div className="modal is-active">
      <div className="modal-background" onClick={onHide}></div>
      <div className="modal-content">
        <p className="title is-3">Congratulations {name}!</p>
        <p className="image is-4by3">
          <div
            style={{
              width: "100%",
              height: "0",
              paddingBottom: "56%",
              position: "relative",
            }}
          >
            <iframe
              src="https://giphy.com/embed/BPJmthQ3YRwD6QqcVD"
              width="100%"
              height="100%"
              style={{ position: "absolute" }}
              frameBorder="0"
              className="giphy-embed"
              allowFullScreen
            ></iframe>
          </div>
          <p>
            <a href="https://giphy.com/gifs/HBOMax-hbomax-the-great-gatsby-2013-thegreatgatsbyonhbomax-BPJmthQ3YRwD6QqcVD">
              via GIPHY
            </a>
          </p>
        </p>
      </div>
      <button
        className="modal-close is-large"
        aria-label="close"
        onClick={onHide}
      ></button>
    </div>
  );
};
