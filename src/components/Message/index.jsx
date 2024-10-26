import { Button, Toast, ToastBody, ToastHeader } from "reactstrap";
import { PropTypes } from "prop-types";
import { useState, useEffect } from "react";

const Message = ({ title, body, icon, isOpen, toggle }) => {
  const [show, setShow] = useState(isOpen);

  useEffect(() => {
    if (isOpen) {
      setShow(true);

      if (icon !== "danger") {
        const timer = setTimeout(() => {
          setShow(false);
          toggle();
        }, 1500);

        return () => clearTimeout(timer);
      }
    }
  }, [isOpen, toggle, icon]);

  const handleClose = () => {
    setShow(false);
    toggle();
  };

  return (
    <>
      {show ? (
        <Toast
          isOpen={true}
          className="position-fixed top-50 start-50 translate-middle"
          style={{ zIndex: 2 }}
        >
          {title ? (
            <ToastHeader
              icon={icon || "info"}
              toggle={function noRefCheck() {}}
              className={`bg-light text-black text-bold py-2 border fs-5`}
              close={<></>}
            >
              {title}
            </ToastHeader>
          ) : (
            <></>
          )}

          <ToastBody
            className={`bg-secondary p-4 text-black bg-opacity-25 d-flex flex-column fs-6`}
          >
            {body}
            {icon === "danger" ? (
              <Button
                className="btn w-25 mt-3 m-auto fs-6 btn-primary"
                onClick={handleClose}
              >
                OK
              </Button>
            ) : (
              <></>
            )}
          </ToastBody>
        </Toast>
      ) : (
        <></>
      )}
    </>
  );
};

Message.propTypes = {
  title: PropTypes.node,
  body: PropTypes.node,
  icon: PropTypes.node,
  isOpen: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired,
};

export default Message;
