import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Other(props) {

    return (
        <div>
            <Navbar title="Other Stuff"/>
            <div>
                <div className="flex-1 items-center">
                    <div>
                        <h1>Think of the possiblities of this page</h1> 
                    </div>

                    <div>
                        <h1>What could I possibly put here?</h1> 
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}