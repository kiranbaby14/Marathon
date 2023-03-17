import React, { useEffect } from 'react'
import image3 from "../../../assets/image3.jpg";
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
                    <img src={image3} className="about_info_img"/>
                    <div className="about_overlay"></div>
                    <div className='text about_info_content'>
                        <h3>Remember…</h3>
                        <p>That over 400 Olympic medals have been won by students from the 3 universities
                            Harold Maurice Abrahams Olympic achievements captured in cinescope in Chariots of Fire
                            George Herbert Leigh Mallory, who took part in the first three British expeditions to Mount Everest in the early 1920s
                            Sir Roger Gilbert Bannister, the middle-distance athlete, who ran the first sub-4-minute mile
                            Sir Christopher Andrew Hoy MBE, who is an eleven-times world champion and a six-times Olympic champion
                        </p>
                    </div>
                </div>

                <div className='about_info_panel'>
                    <img src={image3} className="about_info_img"/>
                    <div className="about_overlay"></div>
                    <div className='text about_info_content'>
                        <h3>Remember…</h3>
                        <p>That over 400 Olympic medals have been won by students from the 3 universities
                            Harold Maurice Abrahams Olympic achievements captured in cinescope in Chariots of Fire
                            George Herbert Leigh Mallory, who took part in the first three British expeditions to Mount Everest in the early 1920s
                            Sir Roger Gilbert Bannister, the middle-distance athlete, who ran the first sub-4-minute mile
                            Sir Christopher Andrew Hoy MBE, who is an eleven-times world champion and a six-times Olympic champion
                        </p>
                    </div>
                </div>

                <div className='about_info_panel'>
                    <img src={image3} className="about_info_img"/>
                    <div className="about_overlay"></div>
                    <div className='text about_info_content'>
                        <h3>Remember…</h3>
                        <p>That over 400 Olympic medals have been won by students from the 3 universities
                            Harold Maurice Abrahams Olympic achievements captured in cinescope in Chariots of Fire
                            George Herbert Leigh Mallory, who took part in the first three British expeditions to Mount Everest in the early 1920s
                            Sir Roger Gilbert Bannister, the middle-distance athlete, who ran the first sub-4-minute mile
                            Sir Christopher Andrew Hoy MBE, who is an eleven-times world champion and a six-times Olympic champion
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Info