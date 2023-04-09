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
                <div className='text'>
                    <div >
                        <h3>The Course</h3>
                        <p>A 1050 mile route between Land’s End and John O’Groats. 21 days of relentless, gruelling running. All-terrain, all weather. The course has been designed to take our competitors through each university: Oxford, Cambridge, and St Andrews. There will be stages ending in each of these locations, and if the “home” team finishes first in that stage, this will be worth extra weight in the final analysis. Will Oxford be able to win their home stage? Cambridge and St Andrews will be sure to want to spoil the homecoming... but at what cost for the rest of the race?
                        </p>
                    </div>
                </div>

                <div className='text' style={{ marginLeft: "auto"}}>
                    <div>
                        <h3>The Teams</h3>
                        <p>Three pairs, representing all three universities – each featuring a male and female runner, sharing the burden equally.
                        </p>
                    </div>
                </div>

            </div>

            <div className='about_game_plan_container_2'>
                <img src={image2} alt='about_game_plan_img2' className='about_game_plan__img' />
                <div className='about_overlay'></div>
                <div className='text about_text' style={{ height: "100%" }}>
                    <div>
                        <h3>The Twist</h3>
                        <p>University Ultra Run has a sting in the tail. This challenge is not just about athleticism, endurance, and strategy. Our pairs must also demonstrate orienteering skills, problem solving, and teamwork when they are at their lowest ebb. After over 800 miles of racing they will be driven blindfolded to a mystery highland location, and given limited materials to reach the finish. They must plot a route through highland terrain, and find their way to John O’Groats.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default GamePlan