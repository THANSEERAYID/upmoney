import { useState } from "react";
import { Accordion } from "../AccordionComponents/Accordion";
import { AccordionBody } from "../AccordionComponents/AccordionBody";
import { AccordionHeader } from "../AccordionComponents/AccordionHeader";
import { AccordionItem } from "../AccordionComponents/AccordionItem";

export default function AccordionFunc() {
  const [open, setOpen] = useState()

  const accordion = [{
    heading: "Is there a free trial available?",
    answer: "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible."
  },
  {
    heading: "Can I change my plan later?",
    answer: "yes, you can change your plans later on."
  },
  {
    heading: "Can other info be added to an invoice?",
    answer: "yes, if request to some additional info it could be added."
  },
  {
    heading: "How does billing work?",
    answer: " ."
  },
  {
    heading: "How do I change my account email?",
    answer: "go to your profile then settings > general > edit Info > edit email."
  }]

  const toggle = (id) => {
    if (open === id) {
      setOpen()
    } else {
      setOpen(id)
    }
  }
  return (
    <div className="flex justify-center items-center mt-12 md:mt-32 text-center">
      <div>
        <p className="text-[32px] md:text-[36px] font-[600]">Frequently asked questions</p>
        <p className="my-2 text-[16px] md:text-[20px] font-[400]">Everything you need to know about the product and billing.</p>
        <div className="mt-16 w-screen md:w-[700px]">
          {accordion.map((o, i) => {
            return (
              <div className=" flex justify-between py-8 border-t border-gray-300 mx-8" key={i}>
                <Accordion open={open} toggle={toggle} Id={i}>
                  <AccordionItem>
                    <AccordionHeader headerId={i}>{o.heading}</AccordionHeader>
                    <AccordionBody bodyId={i}>
                      {o.answer}
                    </AccordionBody>
                  </AccordionItem>
                </Accordion>
                <div >
                  {open !== i ?
                    "" :
                    <div>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5  md:w-6 md:h-6" onClick={toggle}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    </div>}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  );
}
