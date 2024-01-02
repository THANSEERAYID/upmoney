import { useMemo } from "react";
import { AccordionContext } from "./AccordionContext";

export const Accordion = (props) => {
  const { open, toggle, children, Id } = props;

  const accordionContext = useMemo(() => ({
    open,
    toggle,
  }));

  return (
    <AccordionContext.Provider value={accordionContext}>
      <div className="flex justify-between w-full">
        <div>{children}</div>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 md:w-6 md:h-6" onClick={()=>{toggle(Id)}}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </div>
    </AccordionContext.Provider>
  );
};
