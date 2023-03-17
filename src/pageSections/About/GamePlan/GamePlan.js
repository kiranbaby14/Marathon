import React from 'react'
import "./GamePlan.css";
import image2 from "../../../assets/image2.JPG"
import image4 from "../../../assets/image4.jpg"

const GamePlan = () => {
    return (
        <section className="about_game_plan">
            <div className='about_game_plan_container_1'>
                <img src={image4} alt='about_game_plan_img1' className='about_game_plan__img' />
                <div className='about_overlay'></div>
                <div className='text' style={{height: "50%"}}>
                    <div className='position_absolute_left'>
                        <h3>The Course</h3>
                        <p>An elite team of experienced runners from Oxford, Cambridge and St Andrews plan to take part in an epic Ultra Race across the UK from Land’s End to John O’Groats with a target date of July 19th 2023.
                        </p>
                    </div>
                </div>

                <div className='text' style={{height: "50%"}}>
                    <div className='position_absolute_right'>
                        <h3>The Teams</h3>
                        <p>An elite team of experienced runners from Oxford, Cambridge and St Andrews plan to take part in an epic Ultra Race across the UK from Land’s End to John O’Groats with a target date of July 19th 2023.
                        </p>
                    </div>
                </div>

            </div>

            <div className='about_game_plan_container_2'>
                <img src={image2} alt='about_game_plan_img2' className='about_game_plan__img' />
                <div className='about_overlay'></div>
                <div className='text about_text' style={{height: "100%"}}>
                    <div className='position_absolute_left'>
                        <h3>The Twist</h3>
                        <p>An elite team of experienced runners from Oxford, Cambridge and St Andrews plan to take part in an epic Ultra Race across the UK from Land’s End to John O’Groats with a target date of July 19th 2023.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default GamePlan