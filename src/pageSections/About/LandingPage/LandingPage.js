import React from 'react'
import "./LandingPage.css"
import image1 from "../../../assets/image1.JPG"

const LandingPage = () => {
    return (
        <section className='about_landing_page'>l̥
            <div className="about_intro">
                <img src={image1} className="about_intro_img"  alt='about_intro_img'/>
                <div className="about_overlay"></div>
                <div className='text'>
                    <h3 id=''>About </h3>
                    <p className='about_override_p_tag'>An elite team of experienced runners from Oxford, Cambridge and St Andrews plan to take part in an epic Ultra Race across the UK from Land’s End to John O’Groats with a target date of July 19th 2023.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default LandingPage