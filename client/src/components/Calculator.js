import React, {useState} from 'react';
import '../calculator.css';
import CalcButton from '../components/CalcButton';

const Calculator = props => {

    const [input, setInput] = useState("0");
    const [recall, setRecall] = useState(null);
    const [action, setAction] = useState(null);

    const onClick = content => () => {
        const num =parseFloat(input)
        if (content === "AC") {
            setInput("0");
            setRecall(null);
            setAction(null);
            return;
        }

        if(content === ".") {
            if(input.includes(".")) return;
            setInput(input + ".");
            return;
        }

        if (content === "+") {
            if(action !== null) {
                if(action === "+") {
                    setRecall(recall + parseFloat(input));
                } else if (action === "-") {
                    setRecall(recall - parseFloat(input));
                } else if (action === "*") {
                    setRecall(recall * parseFloat(input));
                } else if (action === "÷") {
                    setRecall(recall / parseFloat(input));
                }
            } else {
                setRecall(parseFloat(input))
            }
            setInput("0");
            setAction("+");
            return;
        }

        if (content === "-") {
            if(action !== null) {
                if(action === "+") {
                    setRecall(recall + parseFloat(input));
                } else if (action === "-") {
                    setRecall(recall - parseFloat(input));
                } else if (action === "*") {
                    setRecall(recall * parseFloat(input));
                } else if (action === "÷") {
                    setRecall(recall / parseFloat(input));
                }
            } else {
                setRecall(parseFloat(input))
            }
            setInput("0");
            setAction("-");
            return;
        }

        if (content === "*") {
            if(action !== null) {
                if(action === "+") {
                    setRecall(recall + parseFloat(input));
                } else if (action === "-") {
                    setRecall(recall - parseFloat(input));
                } else if (action === "*") {
                    setRecall(recall * parseFloat(input));
                } else if (action === "÷") {
                    setRecall(recall / parseFloat(input));
                }
            } else {
                setRecall(parseFloat(input))
            }
            setInput("0");
            setAction("*");
            return;
        }

        if (content === "÷") {
            if(action !== null) {
                if(action === "+") {
                    setRecall(recall + parseFloat(input));
                } else if (action === "-") {
                    setRecall(recall - parseFloat(input));
                } else if (action === "*") {
                    setRecall(recall * parseFloat(input));
                } else if (action === "÷") {
                    setRecall(recall / parseFloat(input));
                }
            } else {
                setRecall(parseFloat(input))
            }
            setInput("0");
            setAction("÷");
            return;
        }

        if (content === "=") {
            if(!action) return;

            if(action === "+") {
                setInput((recall + parseFloat(input)).toString());
            } else if (action === "-") {
                setInput((recall - parseFloat(input)).toString());
            } else if (action === "*") {
                setInput((recall * parseFloat(input)).toString());
            } else if (action === "÷") {
                setInput((recall / parseFloat(input)).toString());
            }
            setRecall(null);
            setAction(null);
            return;
        }

        if(input[input.length - 1] === ".") {
            setInput(input + content);
        } else {
            setInput((parseFloat(num + content)).toString());
        }

    }

    return (
        <div className="calculator">
            <h1 style={{fontSize: "40px", marginTop: "70px", marginBottom: "20px", fontWeight: "bold"}}>Calculator</h1>

            <div className="calculator-grid">
                <div className="calculation">
                    <div id="current" className="current">{input}</div>
                </div>
                <button className="three"><CalcButton className="button" onClick={onClick} content="AC" type="function"/></button>
                <button><CalcButton onClick={onClick} content="÷" type="action"/></button>
                <button><CalcButton onClick={onClick} content="1"/></button>
                <button><CalcButton onClick={onClick} content="2"/></button>
                <button><CalcButton onClick={onClick} content="3"/></button>
                <button><CalcButton onClick={onClick} content="*" type="action"/></button>
                <button><CalcButton onClick={onClick} content="4"/></button>
                <button><CalcButton onClick={onClick} content="5"/></button>
                <button><CalcButton onClick={onClick} content="6"/></button>
                <button><CalcButton onClick={onClick} content="+" type="action"/></button>
                <button><CalcButton onClick={onClick} content="7"/></button>
                <button><CalcButton onClick={onClick} content="8"/></button>
                <button><CalcButton onClick={onClick} content="9"/></button>
                <button><CalcButton onClick={onClick} content="-" type="action"/></button>
                <button><CalcButton onClick={onClick} content="."/></button>
                <button><CalcButton onClick={onClick} content="0"/></button>
                <button className="two"><CalcButton  onClick={onClick} content="=" type="action"/></button>
            </div>
        
        </div>
    )

}

export default Calculator