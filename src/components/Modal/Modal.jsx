import { useEffect, useRef } from "react";
import "./Modal.scss";
import { trackEvent } from "../../utils/analytics";

const Modal = ({ img, title, subtitle, link, technology, modalClose }) => {
  const dialogRef = useRef(null);
  const ignoreCloseRef = useRef(false);

  useEffect(() => {
    const dialog = dialogRef.current;
    const previouslyFocused = document.activeElement;

    ignoreCloseRef.current = false;
    dialog.showModal();

    return () => {
      ignoreCloseRef.current = true;
      if (dialog.open) dialog.close();
      previouslyFocused?.focus?.();
    };
  }, []);

  const handleProjectClick = () => {
    trackEvent("project_outbound_click", {
      project_title: title,
      project_url: link,
    });
  };

  return (
    <dialog
      className="st-modal"
      ref={dialogRef}
      aria-labelledby="creation-modal-title"
      onClose={() => {
        if (!ignoreCloseRef.current) modalClose();
      }}
      onClick={(event) => {
        if (event.target === event.currentTarget) event.currentTarget.close();
      }}
    >
      <div className="modal-dialog modal-lg modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <div>
              <p className="modal-eyebrow">{subtitle}</p>
              <h2 className="modal-title" id="creation-modal-title">
                {title}
              </h2>
            </div>
            <button
              type="button"
              className="btn-close"
              aria-label="Close project details"
              onClick={() => dialogRef.current.close()}
            ></button>
          </div>
          <div className="modal-body">
            <div className="modal-media">
              <img
                src={img}
                alt={title}
                width="1200"
                height="900"
                loading="lazy"
                decoding="async"
              />
            </div>
            {technology?.length > 0 && (
              <div className="modal-tech-list" aria-label="Technologies used">
                {technology.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            )}
            {link && (
              <a
                href={link}
                className="modal-link"
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleProjectClick}
              >
                Visit project
              </a>
            )}
          </div>
        </div>
      </div>
    </dialog>
  );
};

export default Modal;
