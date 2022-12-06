import './App.css';
import { useState } from 'react';
var calc='';
function App() {
  const [fval, setfvalue] = useState('');
  const [sval, setsvalue] = useState('');
  const [operator, setoperator] = useState('');
  const [bfval, binary] = useState('');
  const [hfval, hexa] = useState('');
  const [ofval, octal] = useState('');
  const [dfval, decimal] = useState('');
  const [ddis , setdecimal] = useState(false);
  const [odis , setoctal] = useState(false);
  const [hdis , sethexa] = useState(false);
  const [bdis , setbinary] = useState(false);
  const handle = (m) => {
    setfvalue(fval + m.target.value)

  }
  const sign = (x) => {
    calc = x.target.value
    setoperator(calc)
    setsvalue(fval)
    setfvalue('')

  }
  const zero = (p) => {
    var p1 = p.target.value;
    setfvalue(fval + p1)
    if (fval == '0') {
      setfvalue('0')
    }
    if (fval == '') {
      if (p1 == '00') {
        setfvalue('0')
      }
    }
  }
  const equalhandler = (k) => {

   

    if (calc == '+') {
      var change=parseInt(sval) + parseInt(fval);
      setfvalue(change);
    }
    else if (calc == '-') {
      var change=parseInt(sval) - parseInt(fval);
      setfvalue(change);
    }
    else if (calc == '/') {
      var change=parseInt(sval) / parseInt(fval);
      setfvalue(change);
    }
    else if (calc == '*') {
      var change=parseInt(sval) * parseInt(fval);
      setfvalue(change);
    }
    else if (calc == '%') {
    }
    else if(calc == ''){
      setfvalue(fval);
      change=fval;
    }
    
    bin1(change);
    hex1(change);
    oct1(change);
    dec1(change);
  }
  const clear = () => {
    setfvalue('')
    binary('');
    hexa('');
    octal('');
    decimal('');
  }
  const back = () => {
    var v = fval.slice(0, fval.length - 1)
    setfvalue(v)
  }
  const bin1 = (change) => {
    var bin = Number(change).toString(2);
    binary(bin)
  }
  const hex1 = (change) => {
    var hex = Number(change).toString(16);
    hexa(hex)
  }
  const oct1 = (change) => {
    var oct = Number(change).toString(8);
    octal(oct)
  }
  const dec1 = (change) => {
    var dec = Number(change).toString(10);
    decimal(dec)
  }
  const decdis = () =>{
    setfvalue(fval);
    setdecimal(true);
  }
  const bindis = () =>{
    setfvalue(fval);
    setbinary(false);
    setdecimal(true);
    sethexa(true);
    setoctal(true);
  }
  return (
    <>
      <center>
        <div className="calc mt-4">
          <div className="display">
            <input type={'text'} className="disp" value={fval}></input><br />
            <input type={"button"} className="fixed" value="DEC"></input><input type={"text"} className="dec" value={dfval}  onClick={decdis}></input><br />
            <input type={"button"} className="fixed" value="HEX"></input><input type={"text"} className="hexa" value={hfval}></input><br />
            <input type={"button"} className="fixed" value="BIN"></input><input type={"text"} className="bin" value={bfval} onClick={bindis}></input><br />
            <input type={"button"} className="fixed" value="OCT"></input><input type={'text'} className="oct" value={ofval} ></input>
          </div>
          <div className="d-flex align-items-center justify-content-center gap-4">
            <input type={"button"} className="btn dis" value="A" disabled></input>
            <input type={"button"} className="btn" value="AC" onClick={clear}></input>
            <input type={"button"} className="btn" value="C" onClick={back}></input>
            <input type={"button"} className="btn" value="%" onClick={sign}></input>
            <input type={'button'} className="sign" value="*" onClick={sign}></input>
          </div>
          <div className="d-flex align-items-center justify-content-center gap-4">
            <input type={"button"} className="btn dis" value="B" disabled></input>
            <input type={'button'} className="btn" value="7" onClick={handle} disabled={ddis}></input>
            <input type={'button'} className="btn" value="8" onClick={handle} disabled={ddis}></input>
            <input type={'button'} className="btn" value="9" onClick={handle} disabled={ddis}></input>
            <input type={'button'} className="sign" value="-" onClick={sign}></input>
          </div>
          <div className=" d-flex align-items-center justify-content-center gap-4">
            <input type={"button"} className="btn dis" value="C" disabled></input>
            <input type={'button'} className="btn" value="4" onClick={handle} disabled={ddis}></input>
            <input type={'button'} className="btn" value="5" onClick={handle} disabled={ddis}></input>
            <input type={'button'} className="btn" value="6" onClick={handle} disabled={ddis}></input>
            <input type={'button'} className="sign" value="/" onClick={sign}></input>
          </div>
          <div className="d-flex align-items-center justify-content-center gap-4">
            <input type={"button"} className="btn dis" value="D" disabled></input>
            <input type={'button'} className="btn" value="1" onClick={handle} disabled={ddis}></input>
            <input type={'button'} className="btn" value="2" onClick={handle} disabled={ddis}></input>
            <input type={'button'} className="btn" value="3" onClick={handle} disabled={ddis}></input>
            <input type={'button'} className="sign" value="+" onClick={sign} disabled={ddis}></input>
          </div>
          <div className="d-flex align-items-center justify-content-center gap-4">
            <input type={"button"} className="btn dis" value="E" disabled></input>
            <input type={"button"} className="btn dis" value="F" disabled></input>
            <input type={'button'} className="btn" value="00" onClick={zero} disabled={ddis}></input>
            <input type={'button'} className="btn" value="0" onClick={handle} disabled={ddis}></input>
            <input type={"button"} className="sign" value="=" onClick={equalhandler}></input>
          </div>
        </div>
      </center>
    </>
  )
}
export default App;