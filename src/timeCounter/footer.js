import logo from './LI-In-Bug.png'

function Footer() {
    return (
        <footer className="footer">
            <div className=" flex justify-center m-4 ">
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
            <h5>Created by Zane Reisbig <span style={{opacity:"0.2"}}> with love </span></h5> 
        </footer>
    );
  }


export default Footer;
