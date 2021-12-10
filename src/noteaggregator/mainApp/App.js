import react from "react";
import TextArea from "./components/textArea";

export default class App extends react.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputText: "",
            ignoreText: "",
            outputText: ""
        }
        this.inputChange = this.inputChange.bind(this);
        this.ignoreChange = this.ignoreChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.downloadFile = this.downloadFile.bind(this);
    }

    async inputChange(e) {
        this.setState({
            inputText: e.target.value
        });
    }

    async ignoreChange(e) {
        this.setState({
            ignoreText: e.target.value
        });
    }

    handleClick() {
        var outputArr = {

        };
        var inputSplit = this.state.inputText.split("\n");
        var ignoreSplit = this.state.ignoreText.split("\n");
        var outputWords = [];


        inputSplit.forEach(word => {
            word = word.replace("•\t", "");
            ignoreSplit.forEach(ignore => {
                if (word.includes(ignore)) {
                    word = word.replace(ignore, "");
                }
            });


            outputArr[word] = (outputArr[word] || 0) + 1;
        });

        var items = Object.keys(outputArr).map(function(key) {
            return [key, outputArr[key]];
        });
        
        items.sort(function(first, second) {
            return second[1] - first[1];
        }); 
        
        items.forEach(item => {
            if(item[1] > 1) {
                outputWords.push(item[1] + " instances of: " + item[0]);
            }
            else{
                outputWords.push(item[1] + " instance of: " + item[0]);
            }
        });


        this.setState({outputText: outputWords.join("\n")});

    }
    
    downloadFile() {
        var newDate = new Date();
        var date = newDate.getDate() + "-" + (newDate.getMonth() + 1) + "-" + newDate.getFullYear();
        var getTime = newDate.getHours() + "-" + newDate.getMinutes() + "-" + newDate.getSeconds();
        var filename = `Output ${date} ${getTime}.csv`;
        var element = document.createElement('a');
        var text = this.state.outputText;
        element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
        element.setAttribute('download', filename);
      
        element.style.display = 'none';
        document.body.appendChild(element);
      
        element.click();
      
        document.body.removeChild(element);
      }

    render() {
        return (
            <div className="my-2 mt-1">
                <div className="mx-5 text-center inline-block">
                    <div>
                        asd:
                        <TextArea
                            onChange={this.inputChange}
                            value={this.state.inputText}
                            placeholder={"This is the input text."}/> 
                    </div>
                    <div>
                        <TextArea
                            onChange={this.ignoreChange}
                            value={this.state.ignoreText}
                            placeholder={"Place words you want to ignore here."}/> 
                    </div>
                    <div>
                        <button
                            onClick={this.handleClick}
                            className={"border-2 border-black rounded-lg px-4 py-1 my-3 float-left"}
                            id="ag-button">
                            Aggregate  
                        </button>
                    </div>
                    <div>
                        <TextArea 
                            placeholder={"This will be the output"}
                            onChange={() => {}}
                            value={this.state.outputText}
                            disabled/>
                    </div>
                </div>
                <div className="mt-2">
                    <button
                        onClick={this.downloadFile}
                        className={"border-2 border-black rounded-lg px-4 py-1 ml-5"}
                        id="ag-button">
                        Download
                    </button>
                </div>
            </div>
        );
    }
}