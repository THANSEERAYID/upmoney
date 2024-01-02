import React from "react";
import img1 from "../Images/bodyImg1.png";
import img2 from "../Images/bodyImg2.png";
import video from '../Images/video.png'
import avatar1 from '../Images/Avatars/Avatar1.png'
import avatar2 from '../Images/Avatars/Avatar2.png'
import avatar3 from '../Images/Avatars/Avatar3.png'
import avatar4 from '../Images/Avatars/Avatar4.png'
import avatar5 from '../Images/Avatars/Avatar5.png'
import avatar6 from '../Images/Avatars/Avatar6.png'
import avatar7 from '../Images/Avatars/Avatar7.png'
import avatar8 from '../Images/Avatars/Avatar8.png'



function BodySection() {

    const avatars = [{
        img:avatar1,
        name:"Olivia Rhye",
        position:"Founder & CEO"
    },
    {
        img:avatar2,
        name:"Phoenix Baker",
        position:"Engineering Manager"
    },
    {
        img:avatar3,
        name:"Lana Steiner",
        position:"Product Manager"
    },
    {
        img:avatar4,
        name:"Demi Wilkinson",
        position:"Frontend Developer"
    },
    {
        img:avatar5,
        name:"Candice Wu",
        position:"Backend Developer"
    },
    {
        img:avatar6,
        name:"Natali Craig",
        position:"Product Designer"
    },
    {
        img:avatar7,
        name:"Drew Cano",
        position:"UX Researcher"
    },
    {
        img:avatar8,
        name:"Orlando Diggs",
        position:"Customer Success"
    },]
  return (
    <>
      <div className="md:flex-row flex flex-col justify-center mx-4 lg:mx-8 items-center justify-center">
        <div className="md:w-1/2 flex justify-center items-center">
          <div className="w-full md:w-[400px] lg:w-[520px]   ">
            <p className="text-[16px] bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-red-400 to-red-500 font-[600]">
              Improve your worklife
            </p>
            <p className="text-[30px] lg:text-[42px] mt-[16px] font-[700] w-full text-gray-900">
              Track all your payments in one place{" "}
            </p>
            <p className="text-[14px] lg:text-[18px] w-full md:[350px] lg:w-[430px] mt-[22px] font-[400] text-gray-500">
              Our app provides real-time access to your account information, so
              you can stay on top of your spending and keep track of your
              rewards.{" "}
            </p>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center items-center my-8">
          <img src={img1} />
        </div>
      </div>
      <div className="md:flex-row flex flex-col-reverse  mx-4 lg:mx-8 items-start justify-start">
        <div className="md:w-1/2 flex justify-start items-center my-8">
          <img src={img2} />
        </div>
        <div className="md:w-1/2 flex justify-start items-start">
          <div className="w-full md:w-[400px] lg:w-[520px]   ">
            <p className="text-[16px] bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-red-400 to-red-500 font-[600]">
              Improve your worklife
            </p>
            <p className="text-[30px] lg:text-[42px] mt-[16px] font-[700] w-full text-gray-900">
              Redeeming rewards has never been easier
            </p>
            <div className="md:flex font-[400] text-gray-500">
              <div className="flex mt-[22px] items-start md:w-[260px]  ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>

                <p className="text-[14px] lg:text-[18px] w-full   mx-2">
                  You can also receive alerts and notifications
                </p>
              </div>
              <div className="flex mt-[22px] items-start md:w-[280px]  ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>

                <p className="text-[14px] lg:text-[18px] w-full mx-2">
                  Robust security features, multi-factor authentication and
                  secure data storage
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex  justify-center text-center">
      <div className=" md:mx-4 flex-col justify-center text-center w-full md:w-[800px] lg:w-[1028px]">
        <p className="font-[600] text-[30px] lg:text-[42px] mx-2">With <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-red-400 to-red-500 font-[600] text-[30px] lg:text-[42px]">UPMONEY</span> app, you'll never miss a beat when it comes to managing your credit card.</p>
        <div className="flex justify-center">
        <img src={video} alt="video" className=" lg:w-[85%] "/>
        </div>
        
      </div>
      </div>
      <div>
      <div className="   flex flex-col justify-center items-center my-5 text-center ">
<p className=" font-[700] bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-red-400 to-pink-600 text-center">We’re hiring!</p>
<p className="text-[32px] lg:text-[36px] font-[700] my-2 text-center">Meet our team</p>
<p className="text-[14px] lg:text-[20px] my-2 text-gray-500 text-center mx-4 sm:mx-16 md:mx-20 lg:w-[800px]">Our philosophy is simple — hire a team of diverse, passionate people and foster a culture that empowers you to do you best work.</p>
        </div>
        <div className=" flex justify-center w-full items-center ">
        <div className=" w-full lg:w-[80%] grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 sm:gap-2 md:gap-4">

       
        { avatars.map((o, i)=>{
            return(
                <div className="flex flex-col items-center justify-center my-1" key={i}>
                <img src={o.img} className="my-4 w-[80px] h-[80px]"/>
                <p className="text-[18px] font-[600] ">{o.name}</p>
                <p className="md:text-[16px] text-[15px] font-[500] my-0.5 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-red-400 to-red-500">{o.position}</p>
            </div>
            )
        })
           
        }
            
        </div>  
        </div>
      </div>
      
      
    </>
  );
}

export default BodySection;
