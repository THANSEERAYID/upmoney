import { useContext } from "react";
import { AccordionContext } from "./AccordionContext";

export const AccordionBody = (props) => {
  const { bodyId, children } = props;
  const { open } = useContext(AccordionContext);
  return (
    <div style={{ display: bodyId == open ? "" : "none" }} className="text-left text-gray-500 md:w-[600px] my-2">{children}</div>
  );
};
