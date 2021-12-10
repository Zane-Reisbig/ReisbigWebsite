import Navbar from "./Navbar";
import Footer from "./Footer";

export default function About(props) {

    return (
        <div>
            <Navbar title="About"/>
                <p>
                    I made this website to learn React. <br />
                    I've wanted to learn React for a long time. <br />
                    It's been a few weeks since I started it. <br />
                    I'm still learning, but I'm getting better. <br />
                    I think it's going pretty well. <br />
                    {":)"}
                </p>   
            <Footer />
        </div>
    );
}