import { useEffect, useRef } from "react";
import "./Modal.scss";
import { trackEvent } from "../../utils/analytics";

const Modal = ({ img, title, subtitle, link, technology, modalClose }) => {
  const closeButtonRef = useRef(null);

  useEffect(() => {
    const previouslyFocused = document.activeElement;
    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const handleKeyDown = (event) => {
      if (event.key === "Escape") modalClose();
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
      previouslyFocused?.focus?.();
    };
  }, [modalClose]);

  const handleProjectClick = () => {
    trackEvent("project_outbound_click", {
      project_title: title,
      project_url: link,
    });
  };

  return (
    <div
      className="st-modal"
      role="dialog"
      aria-modal="true"
      aria-labelledby="creation-modal-title"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) modalClose();
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
              onClick={modalClose}
              ref={closeButtonRef}
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
    </div>
  );
};

export default Modal;
