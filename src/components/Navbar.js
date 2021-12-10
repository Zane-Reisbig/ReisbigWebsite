import { Link } from "react-router-dom";

const classNames = "p-1.5 rounded-md hover:bg-gray-300 transform active:translate-y-0.5 active:translate-x-0.5 font-bold"

export default function Navbar(props) {

    document.title = "Zane Reisbig - " + props.title;

    return (
        <div className="flex justify-between my-1.5 border-solid border-b-2 border-black mb-7 pb-4">
            <div className={classNames}>
                <Link to="/" className={"text-3xl"} draggable={false}>
                    <p>{"<"}Reisbig{">"}</p>
                </Link>
            </div>

            <div className={classNames}>
                <Link to="/other" className={"text-3xl"} draggable={false}>
                    <p>{"<"}Other Stuff{">"}</p>
                </Link>
            </div>

            <div className={classNames}>
                <Link to="/projects" className={"text-3xl"} draggable={false}>
                    <p>{"<"}Projects{">"}</p>
                </Link>
            </div>

            <div className={classNames}>
                <Link to="/about" className={"text-3xl"} draggable={false}>
                    <p>{"<"}About{">"}</p>
                </Link>
            </div>
        </div>
    );
}