import { useState } from "react";

export default function Alert({ children, type, message }) {
  const [isShow, setIsShow] = useState(true);

  const renderElAlert = function () {
    return React.cloneElement(children);
  };

  const handleClose = (e) => {
    e.preventDefault();
    setIsShow(false);
  };

  return (
    <div className={!isShow}>
      <span onClick={handleClose}>&times;</span>
      {children ? renderElAlert() : message}
    </div>
  );
}
