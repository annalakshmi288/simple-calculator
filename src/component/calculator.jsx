import React from "react";
import { useState } from "react";

const Calculator = (props) => {
const [val, setVal] = useState('');

const backspace = () => {
    try {
        setVal(val.slice(0,-1));
    } catch (error) {
        setVal('');
    }
}
const calculate = () => {
    try {
        setVal(eval(val));
    } catch (error)  {
        setVal('Error');
    }
}

    return(
       <div className="container">
            <div className="row">
                <div className="col-12">
                    <h1 className="text-center mt-5 mb-10">{props.title}</h1>
                </div>
            </div>
            <div className="row justify-content-center mt-5">
                <div className="card shadow col-md-4 text-center">
                    <div className="card-body">
                        <input type="text" className="form-control form-control-lg mb-4 fs-4 shadow" value={val}/>
                        <div className="row mt-3">
                            <div className="col-3">
                                <button value="1" className="btn btn-light shadow p-4" onClick={(e)=>setVal(val + e.target.value)}>1</button>
                            </div>
                            <div className="col-3">
                                <button value="2" className="btn btn-light shadow p-4" onClick={(e)=>setVal(val + e.target.value)}>2</button>
                            </div>
                            <div className="col-3">
                                <button value="3" className="btn btn-light shadow p-4" onClick={(e)=>setVal(val + e.target.value)}>3</button>
                            </div>
                            <div className="col-3">
                                <button value className="btn btn-light shadow p-4" onClick={backspace}>CE</button>
                            </div>
                        </div>
                        <div className="row mt-3">
                            <div className="col-3">
                                <button value="4" className="btn btn-light shadow p-4" onClick={(e)=>setVal(val + e.target.value)}>4</button>
                            </div>
                            <div className="col-3">
                                <button value="5" className="btn btn-light shadow p-4" onClick={(e)=>setVal(val + e.target.value)}>5</button>
                            </div>
                            <div className="col-3">
                                <button value="6" className="btn btn-light shadow p-4" onClick={(e)=>setVal(val + e.target.value)}>6</button>
                            </div>
                            <div className="col-3">
                                <button value="+" className="btn btn-light shadow p-4" onClick={(e)=>setVal(val + e.target.value)}>+</button>
                            </div>
                        </div>
                        <div className="row mt-3">
                            <div className="col-3">
                                <button value="7" className="btn btn-light shadow p-4" onClick={(e)=>setVal(val + e.target.value)}>7</button>
                            </div>
                            <div className="col-3">
                                <button value="8" className="btn btn-light shadow p-4" onClick={(e)=>setVal(val + e.target.value)}>8</button>
                            </div>
                            <div className="col-3">
                                <button value="9" className="btn btn-light shadow p-4" onClick={(e)=>setVal(val + e.target.value)}>9</button>
                            </div>
                            <div className="col-3">
                                <button value="-" className="btn btn-light shadow p-4" onClick={(e)=>setVal(val + e.target.value)}>-</button>
                            </div>
                        </div>
                        <div className="row mt-3">
                            <div className="col-3">
                                <button value="*" className="btn btn-light shadow p-4" onClick={(e)=>setVal(val + e.target.value)}>*</button>
                            </div>
                            <div className="col-3">
                                <button value="0" className="btn btn-light shadow p-4" onClick={(e)=>setVal(val + e.target.value)}>0</button>
                            </div>
                            <div className="col-3">
                                <button value="/" className="btn btn-light shadow p-4" onClick={(e)=>setVal(val + e.target.value)}>/</button>
                            </div>
                            <div className="col-3">
                                <button value="=" className="btn btn-light shadow p-4" onClick={calculate}>=</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Calculator;