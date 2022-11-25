import Left from "./Left";
import Menu from "./Menu";
import MiddleSection from "./MiddleSection";
import Footer from "./Footer";
import "./Main.css";
import Parent from "./Parent";
function Main() {
    return (
        <div>

            <div>
                <Menu />
            </div>

            <div className="middle1">
                <Left />
            </div>

            <div className="middle2">
                <MiddleSection />
            </div>

            <div className="middle3">
                <Footer />
            </div>
            
            <div className="middle4">
<Parent/>
            </div>

        </div>
    );
}

export default Main;