import React from 'react'
import "./Strategy.css";
import image3 from "../../../assets/image3.jpg"

const Strategy = () => {
    return (
        <section className="about_strategy">
            <img src={image3} className="about_strategy_img" alt='strategy_img' />
            <div className='about_overlay'></div>
            <div className='text about_strategy_content'>
                <h3>Activation </h3>
                <p>We are currently in the process of raising funds/ self funding this fantastic upcoming event. We are also continuing to develop our world class team. It hasn’t been easy, as with all events that try to introduce something new and different…but we’ll get there! Stay tuned…
                </p>
                {/* <h3>Strategy </h3>
                <p>Racing in mixed ability pairs allows for strategy, intrigue, jeopardy, and the race staying competitive right to the end. As long as the miles are shared evenly, the teams can create and change strategy throughout the race. Injuries will become a hot topic – how teams react strategically to them, and the ticking clock for rehabilitation as soon as a runner is in recovery mode: Will they be ready to race again in two day’s time? Will they manage to complete their allotted miles?
                </p> */}
            </div>

        </section>
    )
}

export default Strategy