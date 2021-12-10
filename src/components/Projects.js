import Navbar from "./Navbar";
import Footer from "./Footer";
import { Link } from "react-router-dom";

export default function Projects(props) {


    return (
        <div>
            <Navbar title="Projects"/>
                <div>
                    <table>
                        <tbody>
                        {Object.keys(props.projects).map((project, index) => {
                                return (
                                    <tr className={"clickAnimation hoverAnimation easeOut clickTransition"} key={index}>
                                        <td>
                                            <Link to={`/projects/${props.projects[project]}`} className={"text-3xl"} draggable={false} >
                                                {">"} {project}
                                            </Link>
                                        </td>
                                    </tr>
                                );
                            }
                        )}
                        </tbody>
                    </table>
                </div>
            <Footer/>
        </div>
    );
}