import img from '../Images/headerSection.png'
const stats = [
    { name: 'Cards Delieverd', value: '5000' },
    { name: 'Transaction Completed', value: '1M+' },
    { name: 'Happy Customers', value: '230+' },

]

export default function Header() {
    return (
        <div className=" md:flex flex flex-col relative isolate overflow-hidden bg-white justify-center md:justify-start  items-center md:items-start w-full z-0">
           <div className='flex justify-center items-center'>
           <div className=" 2xl:mx-12 max-w-xl lg:max-w-4xl xl:max-w-7xl mx-4 md:px-6 lg:px-8 py-0 pt-6 md:py-[180px]">
                <div className="2xl:mx-12 md:max-w-3xl xl:max-w-[800px] lg:mx-0">
                    <h2 className="text-[36px] font-[800] tracking-tight text-grey-900 lg:text-[58px]">Empower Your Purchasing Power With Our Credit Cards</h2>
                    <p className="mt-6 text-lg leading-8 text-gray-600 max-w-xl text-[16px] lg:text-[18px] sm:w-[400px] lg:w-full ">
                        With a wide range of credit cards to choose from, you're sure to find the one that fits your lifestyle. From travel rewards to cash back, there's something for everyone.
                    </p>
                </div>
                <div className="2xl:mx-12  mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
                    <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base font-semibold leading-7 text-grey-900 sm:grid-cols-2 md:flex lg:gap-x-10">
                        <div className="hidden lg:flex h-[65px] justify-between w-[600px] xl:w-[620px] border-[1px] border-grey-400  rounded-[15px] focus:border-[0.2px] focus:outline-gray-600">
                            <input className=" w-full px-3 text-gray-900 text-[16px] bg-transparent" id="username" type="text" placeholder="Enter email address" />
                            <button className="bg-gray-900 w-[300px] text-[18px] text-white rounded-[10px] m-1 ">Get Free Card</button>
                        </div>
                        <div className=" lg:hidden  w-full sm:w-80 ">
                            <input className=" border-[1px] h-[54px] border-grey-400  rounded-[15px] focus:border-[0.2px] focus:outline-gray-600 w-full px-3 text-gray-900 text-[16px] bg-transparent" id="username" type="text" placeholder="Enter email address" />
                            <button className="bg-gray-900 w-[300px] h-[52px] text-[18px] text-white rounded-[10px] my-[12px] w-full">Get Free Card</button>
                        </div>
                    </div>
                    <dl className="mt-10 grid grid-cols-1 gap-4 md:gap-8  grid-cols-2 lg:grid-cols-3  lg:lg:grid-cols-4">
                        {stats.map((stat, i) => (
                            <div key={stat.name} className="flex flex-row-reverse items-center justify-end">
                                <dt className="text-base leading-7 text-gray-900 text-[14px] mx-1 w-24">{stat.name}</dt>
                                <dd className="lg:text-[38px] text-[24px] font-[500]  tracking-tight text-grey-900 mx-1">{stat.value}</dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
           </div>
          
            <div className='md:absolute  md:-right-80 lg:-right-72 xl:-right-36 top-0 xl:-top-14 2xl:-right-12 3xl:right-[15%]'>
                <img src={img} alt="girl with credit card" className='w-[100%]  md:w-[80%] lg:w-[90%] xl:w-[100%]'/>
            </div>
        </div>
    )
}
