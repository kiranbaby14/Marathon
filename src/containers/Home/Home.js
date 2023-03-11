import video from "../../assets/running.mp4";
import Counter from '../Counter/Counter';
import Footer from '../../components/Footer/Footer';
import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";
import Contestants from '../Contestants/Contestants';
import "./Home.css";

const Home = () => {

    return (
        <>
            <section className="showcase" id="home">
                <Header />
                {/* <video src={video} muted loop autoPlay ></video> */}
                <video aria-hidden="true" muted autoPlay loop playsInline>
                    <source src={video} type="video/mp4"></source>
                </video>
                <div className="overlay"></div>
                <div className="text">
                    <h2>University Ultra Run </h2>
                    <h3>Oxford vs Cambridge vs St Andrews</h3>
                    <p>A 1000 mile ultra marathon with sports oldest rivalry at its core
                    University Ultra Run UK pits Oxford and Cambrdige against one another, with a new challenger joining the party…St Andrews!!
                    </p>
                    <a href="#">Become a Patron</a>
                </div>
                {/* <ul className="social">
                    <li><a href="#"><img src="https://i.ibb.co/x7P24fL/facebook.png" alt='facebook' /></a></li>
                    <li><a href="#"><img src="https://i.ibb.co/Wnxq2Nq/twitter.png" alt='twitter' /></a></li>
                    <li><a href="#"><img src="https://i.ibb.co/ySwtH4B/instagram.png" alt='instagram' /></a></li>
                </ul> */}

                <Navbar />
            </section>

            <Counter />
            <Contestants/>
            <Footer />
        </>
    );
}

export default Home