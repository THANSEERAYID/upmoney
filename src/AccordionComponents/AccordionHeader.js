import { useContext } from "react";
import { AccordionContext } from "./AccordionContext";

export const AccordionHeader = (props) => {
  const { headerId, children } = props;
  const { open, toggle } = useContext(AccordionContext);
  return (
    <div>
      <button onClick={() => toggle(headerId)} className=" font-[500] text-[16px]  md:text-[18px] text-left flex justify-start">{children}</button>
    </div>
  );
};
