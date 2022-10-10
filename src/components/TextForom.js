import React, { useState } from 'react'

export default function TextForom(props) {
  const [text, setText] = useState("Enter text here")
  const onClickUpHandler = ()=>{
    setText(text.toLocaleUpperCase());
  }
  const onClickLoHandler = (event)=>{
    setText(text.toLocaleLowerCase());
  }
  const onChangeHandler = (event)=>{
    setText(event.target.value);
  }
  return (
    <>
    <div style={{ color: props.mode === 'light' ? 'black  ': 'white'}}>
        <div className="mb-3">
            <h1>{props.heading}</h1>
            <textarea value={text} className="form-control" style={{ backgroundColor: props.mode === 'light' ? 'white  ': 'gray' ,color: props.mode === 'light' ? 'black  ': 'white'}} onChange={onChangeHandler} id="myBox" rows="10"></textarea>
            <button className='btn btn-primary my-3 mx-3' onClick={onClickUpHandler}>Convert To Uppercase</button>
            <button className='btn btn-primary my-3 mx-3' onClick={onClickLoHandler}>Convert To Lowercase</button>
        </div>
    </div>
    <div className='container my-3' style={{ color: props.mode === 'light' ? 'black  ': 'white'}}>
      <h1>Your Text Summary</h1>
      <p> {text.split(' ').length} words, {text.length} characters</p>
      <p>{text.split(' ').length * 0.008} Mminute Read</p>
      <h2>Preview</h2>
      <p>{text}</p>
    </div>
    
    </>
    
  )
}
