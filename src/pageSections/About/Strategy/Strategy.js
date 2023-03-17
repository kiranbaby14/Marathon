import React from 'react'
import "./Strategy.css";
import image3 from "../../../assets/image3.jpg"

const Strategy = () => {
    return (
        <section className="about_strategy">
            <img src={image3} className="about_strategy_img" alt='strategy_img' />
            <div className='about_overlay'></div>
            <div className='text about_strategy_content'>
                <h2>Strategy </h2>
                <p>A 1000 mile ultra marathon with sports oldest rivalry at its core
                    University Ultra Run UK pits Oxford and Cambrdige against one another, with a new challenger joining the party…St Andrews!!
                </p>
            </div>

        </section>
    )
}

export default Strategy