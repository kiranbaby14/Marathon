import React from 'react'
import "./About.css"
import Footer from '../../components/Footer/Footer';
import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";
import Contestants from '../Contestants/Contestants';

const About = () => {
  return (
    <>
    <section>
                 <Header />
                <div className="section1">
                    <h2>About </h2>
                    <p>An elite team of experienced runners from Oxford, Cambridge and St Andrews plan to take part in an epic Ultra Race across the UK from Land’s End to John O’Groats with a target date of July 19th 2023.
                    </p>
                    <h3>The Course</h3>
                    <p>An elite team of experienced runners from Oxford, Cambridge and St Andrews plan to take part in an epic Ultra Race across the UK from Land’s End to John O’Groats with a target date of July 19th 2023.
                    </p>
                    <h3>The Teams</h3>
                    <p>An elite team of experienced runners from Oxford, Cambridge and St Andrews plan to take part in an epic Ultra Race across the UK from Land’s End to John O’Groats with a target date of July 19th 2023.
                    </p>
                    <h3>The Twist</h3>
                    <p>An elite team of experienced runners from Oxford, Cambridge and St Andrews plan to take part in an epic Ultra Race across the UK from Land’s End to John O’Groats with a target date of July 19th 2023.
                    </p>
                </div>
                <div className="section2">
                    <h2>Strategy </h2>
                    <p>A 1000 mile ultra marathon with sports oldest rivalry at its core
                    University Ultra Run UK pits Oxford and Cambrdige against one another, with a new challenger joining the party…St Andrews!!
                    </p>
                </div>
                <div className="section3">
                    <h2>Game Plan </h2>
                    <p>A 1000 mile ultra marathon with sports oldest rivalry at its core
                    University Ultra Run UK pits Oxford and Cambrdige against one another, with a new challenger joining the party…St Andrews!!
                    </p>
                </div>

                <Navbar />
            </section>

            <Contestants/>
            <Footer />
    </>
  );
}

export default About