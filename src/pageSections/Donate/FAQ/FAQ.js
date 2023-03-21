import React, { useEffect } from 'react';
import "./FAQ.css";

const FAQ = () => {

    useEffect(() => {
        const faqs = document.querySelectorAll(".FAQ_container");

        faqs.forEach((faq) => {
            faq.addEventListener("click", () => {
                faq.classList.toggle("active");
            })
        })
    }, [])

    return (
        <section className='FAQ'>
            <div className='text'>
                <h3>FAQs</h3>
            </div>

            <div className='FAQ_container'>
                <div className='question'>

                    <h3>What is our 1050 mile Patron fundraiser?</h3>

                    <svg width={15} height={10} viewBox="0 0  42 25">
                        <path d="M3 3L21 21L39 3" stroke="white" stroke-width="7" stroke-linecap="round" />
                    </svg>
                </div>

                <div className='answer'>
                    <p>
                     To be confirmed
                    </p>

                </div>
            </div>

            <div className='FAQ_container'>
                <div className='question'>

                    <h3>How will your generous contribution be used?</h3>

                    <svg width={15} height={10} viewBox="0 0  42 25">
                        <path d="M3 3L21 21L39 3" stroke="white" stroke-width="7" stroke-linecap="round" />
                    </svg>
                </div>

                <div className='answer'>
                    <p>
                        The money will go towards the activation of the University Ultra Run. Your contribution will not be spent until we have hit our activation target (the money required for us to deliver the race). Patron’s will receive their money back if the event is canceled.
                    </p>

                </div>
            </div>

            <div className='FAQ_container'>
                <div className='question'>
                    <h3>How can I become a patron? </h3>
                    <svg width={15} height={10} viewBox="0 0  42 25">
                        <path d="M3 3L21 21L39 3" stroke="white" stroke-width="7" stroke-linecap="round" />
                    </svg>
                </div>

                <div className='answer'>
                    <p>
                        To be confirmed
                    </p>
                </div>
            </div>
        </section>
    )
}

export default FAQ