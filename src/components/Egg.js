import Footer from "./Footer";
import Navbar from "./Navbar";

export default function Egg(props) {
    return (
        <div>
            <Navbar title={props.title}/>
                <p>Easter came early</p>
            <Footer otherInfo="This is an easter egg"/>
        </div>
    );
}