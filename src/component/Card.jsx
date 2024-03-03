import React, { useState } from 'react'
import wallet from '../assets/wallet2.webp'
import 'animate.css';
import { FaCheck } from "react-icons/fa6";
import TrackVisibility from 'react-on-screen';

const Card = () => {

    const [modal, setModal] = useState(false);

    const toggleModal = () => {
        setModal(!modal);
    };

    if (modal) {
        document.body.classList.add('active-modal')
    } else {
        document.body.classList.remove('active-modal')
    }

    return (
        <div className='body bg-[#c9d6ff] flex items-center justify-center flex-col h-[100vh] w-screen p-20'>
            <div className='bg-white flex md:flex-row-reverse flex-col-reverse justify-end items-center shadow-[0_5px_15px_rgba(0,0,0,0.35)] overflow-hidden md:w-[768px] max-w-full md:min-h-[480px] md:h-fit rounded-[30px]'>
                <div className='h-[30%] transition-all duration-[0.6s] ease-[ease-in-out]'>
                    <div className='h-full m-auto flex flex-col items-center justify-center md:space-y-16 py-6 px-6'>
                        <button
                            onClick={toggleModal}
                            className="bg-[#512da8] text-lg border font-semibold md:shadow-[5px_20px_15px_rgba(0,0,0,0.35)] shadow-[5px_5px_15px_rgba(0,0,0,0.35)] hover:shadow-[5px_5px_15px_rgba(0,0,0,0.35)] tracking-[0.5px] cursor-pointer px-5 py-4 rounded-3xl border-solid border-transparent
                        hover:bg-white hover:border-[#512da8] hover:text-[#512da8] translate-x-0 transition-all duration-[0.6s] ease-[ease-in-out] "
                        >
                            Connect Wallet
                        </button>

                    </div>
                </div>
                <div className='md:w-[75%] h-full overflow-hidden transition-all duration-[0.6s] ease-[ease-in-out] md:rounded-[0px_100px_100px_0px] rounded-[0px_0px_50px_50px] shadow-[0_15px_15px_rgba(0,0,0,0.35)]'>
                    <div className="bg-[#512da8] text-white h-full translate-x-0 transition-all duration-[0.6s] ease-[ease-in-out]">
                        <div className="h-full space-y-4 flex items-center justify-center m-auto flex-col text-center translate-x-0 transition-all duration-[0.6s] ease-[ease-in-out] px-4 py-5 md:py-auto">
                                    <img src={wallet}
                                        className="md:w-[150px] w-[80px]"
                                        alt=""
                                    />
                            <h1 className='md:text-3xl text-xl font-bold '>Block Chain Quick Fix</h1>
                            <p className='md:text-2xl font-bold md:px-0 px-2 py-2  '>
                                Contact the team and we help with all your web3 troubleshoot
                            </p>
                            <h2 className='md:text-2xl p-2 md:w-full text-center text-lg font-semibold '>Just one connect and we do the rest</h2>
                        </div>
                    </div>
                </div>

                {modal && (
                    <div className="">
                        <div
                            onClick={toggleModal}
                            className="">
                        </div>
                        <div className=' bottom-1/2 flex md:flex-row-reverse flex-col-reverse justify-end items-center overflow-hidden md:w-[768px] max-w-full md:min-h-[480px] md:h-fit h-[90vh] '>
                            <div className="flex items-center flex-col justify-center w-full  m-auto space-y-2">
                                <TrackVisibility>
                                    {({ isVisible }) =>
                                        <div
                                        className={isVisible ? "animate__animated animate__bounce animate__delay-0.5s" : ""}>
                                            <FaCheck
                                                size={60}
                                                color='#6e4dbd'
                                                alt=""
                                            />
                                        </div>
                                    }
                                </TrackVisibility>
                                <h1 className='md:text-3xl text-2xl font-bold py-8 px-4 leading-10 text-center'>You've successfully connected your wallet</h1>
                            </div>


                            {/* <button className="close-modal" onClick={toggleModal}>
                                CLOSE
                            </button> */}
                        </div>
                    </div>
                )}
            </div>

        </div>
    )
}

export default Card