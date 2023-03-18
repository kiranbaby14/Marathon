import React, { useEffect } from 'react'
import info1 from "../../../assets/info1.jpg";
import info2 from "../../../assets/info2.png";
import info3 from "../../../assets/info3.jpg";

import "./Info.css";

const Info = () => {

    useEffect(() => {
        const panels = document.querySelectorAll(".about_info_panel")

        panels.forEach((panel) => {
            panel.addEventListener("click", (e) => {
                removeActiveClasses();
                panel.classList.add("active")
            })
        })

        const removeActiveClasses = () => {
            panels.forEach((panel) => {
                panel.classList.remove("active")
            })
        }
    }, [])

    return (
        <section className='about_info'>
            <div className='about_info_container'>
                <div className='about_info_panel active'>
                    <img src={info1} className="about_info_img" />
                    <div className="about_overlay"></div>
                    <div className='text about_info_content'>
                        <h3>Opportunity</h3>
                        <p>The University Ultra Run 2023 offers an exceptional opportunity to be an important part of an extraordinary journey.
                            In the archives of Oxford, Cambridge and St Andrews University many athletes and adventurers have achieved exceptional achievements which have been written about, shared through the media and celebrated by people from all over the world.

                        </p>
                    </div>
                </div>

                <div className='about_info_panel'>
                    <img src={info2} className="about_info_img" />
                    <div className="about_overlay"></div>
                    <div className='text about_info_content'>
                        <h3>Remember</h3>
                        <p>That over 400 Olympic medals have been won by students from the 3 universities
                            Harold Maurice Abrahams Olympic achievements captured in cinescope in Chariots of Fire
                            George Herbert Leigh Mallory, who took part in the first three British expeditions to Mount Everest in the early 1920s
                            Sir Roger Gilbert Bannister, the middle-distance athlete, who ran the first sub-4-minute mile
                            Sir Christopher Andrew Hoy MBE, who is an eleven-times world champion and a six-times Olympic champion
                        </p>
                    </div>
                </div>

                <div className='about_info_panel'>
                    <img src={info3} className="about_info_img" />
                    <div className="about_overlay"></div>
                    <div className='text about_info_content'>
                        <h3>They all have one thing in common</h3>
                        <p>To achieve their success, they had a team of supporters, patrons and professionals on the journey to their respective podiums. In most cases these people sit in the shadows of history, but will always be remembered and appreciated.
                            We want the University Ultra Run 2023 to be a people’s event and for everyone to shine in the success of achieving the perceived impossible.

                            With this in mind we have established our 1050 mile Patron fundraiser
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Info