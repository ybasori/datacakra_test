import React, { MouseEventHandler } from "react";
import { ModalDataProps } from "./types";

interface ModalProps extends ModalDataProps {
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({
  onClose,
  title,
  body,
  onConfirm,
  confirmText,
  onCancel,
  cancelText,
  isCloseOnBackground = true,
  isLoading = false,
}) => {
  const onCancelDup: MouseEventHandler<HTMLButtonElement | HTMLDivElement> = (
    e
  ) => {
    if (onCancel) {
      onCancel(e);
    }
    onClose();
  };
  const onConfirmDup: MouseEventHandler<HTMLButtonElement> = (e) => {
    if (onConfirm) {
      onConfirm(e);
    }
  };

  return (
    <div className="modal is-active">
      <div
        className="modal-background"
        onClick={isCloseOnBackground || isLoading ? onCancelDup : () => null}
      ></div>
      {(confirmText || cancelText) && (
        <div className="modal-card">
          <header className="modal-card-head">
            <p className="modal-card-title">{title}</p>
            <button
              className="delete"
              aria-label="close"
              onClick={onCancelDup}
              disabled={isLoading}
            ></button>
          </header>
          {(confirmText || cancelText) && body && (
            <section className="modal-card-body">{body}</section>
          )}
          {(confirmText || cancelText) && (
            <footer className="modal-card-foot">
              {confirmText && (
                <button
                  className="button is-success"
                  onClick={onConfirmDup}
                  disabled={isLoading}
                >
                  {confirmText}
                </button>
              )}
              {cancelText && (
                <button
                  className="button"
                  onClick={onCancelDup}
                  disabled={isLoading}
                >
                  {cancelText}
                </button>
              )}
            </footer>
          )}
        </div>
      )}
      {!(confirmText || cancelText) && (
        <>
          <div className="modal-content">
            {body && <div className="box">{body}</div>}
          </div>
          <button
            className="modal-close is-large"
            onClick={onCancelDup}
            disabled={isLoading}
          ></button>
        </>
      )}
    </div>
  );
};

export default Modal;
