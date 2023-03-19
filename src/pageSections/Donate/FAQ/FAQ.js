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
                        <span id='line-break-1'>
                            Our silver patrons:
                            The route of the University Ultra Run will be divided into 1050 one mile segments. For every £100 donated an individual will be gifted 1 mile and will become a silver patron of the most extreme running race in British history.
                            Their name will be seen on our digital map in silver (at the top of this page) with the associated mile(s) they’re a patron of. They’re generous contribution will be shared across University Ultra Run’s social media.
                            Their name will also be inscribed on the inside of the athletes' clothing, forever etched and remembered as the DNA of University Ultra Run.
                            Our Silver Patrons will be the invisible force taking our brave athletes from Lands End to John O’groats.
                        </span>
                        <span id='line-break-2'>
                            Our golden patrons (10 available):
                            This is a limited edition patrons club whose members will be etched into the history of the event.
                            It allows patrons to share in the passion and heritage of an extraordinary event. Golden patrons will have their name inscribed in gold on a shield held for generations at an exclusive members club affiliated with the universities.
                            Gold patrons will also be invited to our black tie awards ceremony with our athletes, sponsors, incredible event team and other notable celebrity guests.
                            Your name will be embossed in gold on the digital event map and will be ever present throughout the event on social media, on the athletes clothing and our gantries.
                            There are only 10 gold places available at a minimum contribution of £5,000.
                        </span>
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
                        Become a patron via GoFundMe
                    </p>
                </div>
            </div>
        </section>
    )
}

export default FAQ