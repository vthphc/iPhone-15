import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import EighthPage from "./pages/EighthPage";
import FifthPage from "./pages/FifthPage";
import FirstPage from "./pages/FirstPage";
import FourthPage from "./pages/FourthPage";
import HomePage from "./pages/HomePage";
import NinthPage from "./pages/NinthPage";
import SecondPage from "./pages/SecondPage";
import SeventhPage from "./pages/SeventhPage";
import SixthPage from "./pages/SixthPage";
import ThirdPage from "./pages/ThirdPage";

function App() {
    return (
        <div className="font-inter bg-zinc-100">
            <NavBar />
            <FirstPage />
            <SecondPage />
            <ThirdPage />
            <FourthPage />
            <FifthPage />
            <SixthPage />
            <SeventhPage />
            <EighthPage />
            <NinthPage />
            <Footer />
        </div>
    );
}

export default App;
