
import React ,{useState} from 'react';


export default function TextForm(props) {
    const handelUpClick = ()=>{
        // setText("You have cliked on handleupclick") setext value change ho jayegi
        const newText = text.toUpperCase();
        setText(newText);
        
    }
    const clearText = ()=>
      {
        const newText = " ";
        setText(newText);
      }
    const handellowClick = ()=>{
        // setText("You have cliked on handleupclick") setext value change ho jayegi
        const newText = text.toLowerCase();
        setText(newText);
        
    }
    const handelonChange = (event)=>{
        // console.log("on change");
        setText(event.target.value);
    }
    const handlecopy = ()=>{
      console.log("I m copy ");
      var text = document.getElementById("mybox");
      text.select();
     
      navigator.clipboard.writeText(text.value);
    }
    const handleExtraSpaces =()=>{
      let newText = text.split(/[ ]+ /);
      setText(newText.join(" "));
    }
    const [text , setText] = useState('');
    // text="new text" ; wrong way to set text 
    // setText("new text") ; correct way to set text
   
  return (
   <>
    <div style={{color: props.mode==='light'?'#042743':'white'}} className='container'>
      <h1>{props.heading}</h1>
      <div className="mb-3">
       
        <textarea style={{backgroundColor: props.mode==='dark'?'grey':'white' ,color: props.mode==='light'?'#042743':'white'}}
          className="form-control"
          id="mybox"
          onChange = {handelonChange}
         
          value={text}
           rows="8"  >
       
          </textarea>
      </div>
      <button className="btn btn-primary mx-2" onClick= {handelUpClick}> Convert to Uppercase</button>
      <button className="btn btn-primary mx-2" onClick= {handellowClick}> Convert to Lowercase</button>
      <button className="btn btn-primary mx-2" onClick= {clearText}> Clear</button>
      <button className="btn btn-primary mx-2" onClick= {handlecopy}> Copy </button>
      <button className="btn btn-primary mx-2" onClick= {handleExtraSpaces}>Remove Extra Space</button>
    </div>
    
    <div className="container my-4" style={{color: props.mode==='light'?'#042743':'white',  }}>
      <h2>Your Text Summary </h2>
      <p>{text.split(" ").length -1} Words and {text.length} Characters </p>
    <p>{0.008 * text.split(" ").length} Minutes read</p>  
    <h3>Preview</h3>
    <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
    </div>
    
    </>
  );
}
