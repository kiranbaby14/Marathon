import Counter from '../../pageSections/Home/Counter/Counter';
import Footer from '../../components/Footer/Footer';
import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";
import LandingPage from "../../pageSections/Home/LandingPage/LandingPage";
import "./Home.css";
import Partners from '../../components/Partners/Partners';
import ScrollToTop from '../../jsScripts/ScrollToTop';

const Home = () => {

    return (
        <>
            <Header />
            <Navbar />
            <LandingPage />
            <Counter />
            <Partners />
            <Footer />
        </>
    );
}

export default Home