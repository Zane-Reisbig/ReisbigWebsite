import logo from '../timeCounter/LI-In-Bug.png'

export default function Footer(props) {

    return (
        <div className={"inline-block fixed bottom-0 left-3 "}>
            <footer className={"inline-block"} >
                <div className=" inline-block ">
                    <p className={"text-xl font-bold"}>&copy; {new Date().getFullYear()} Zane Reisbig</p>
                    {props.otherInfo != null ? <p className={"text-xl font-bold"}>{props.otherInfo}</p> : null}
                    {props.link != null ? <a href={props.link} target="_blank" rel="noreferrer" className={"text-xl font-bold"}>{props.link}</a> : null}

                    <div className=" flex justify-start ">
                        <a href="https://github.com/SRGTxTwinkie/punchIt.app" target="_blank" rel="noopener noreferrer">
                            <img
                                src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
                                alt="Github"
                                width="50px"
                                style={{opacity: "0.3", borderRadius:"5px", marginRight: "5px"}}/>
                        </a>
                        <a href="https://www.linkedin.com/in/zane-reisbig-328119200/" target="_blank" rel="noopener noreferrer">
                            <img
                                src={logo}
                                alt="LinkedIn"
                                width="58px"
                                style={{opacity: "0.3"}}/>
                        </a>
                    </div>
                </div>
            </footer>
        </div>
    );
}