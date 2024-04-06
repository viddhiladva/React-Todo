import React, { useState } from 'react'

function Input(props) {
    const [inputText,getInputText] = useState('');
    const handleEnterPress = (e)=>{
        if(e.keyCode===13){
            props.addList(inputText)
            getInputText("")
        }
    }
  return (
    <>
    <div className='input-continer'>
        <input type='text' className='input-box-todo' placeholder="Enter your todo list..." value={inputText}
        onChange={(e)=>{
            getInputText(e.target.value)
        }}
        onKeyDown={handleEnterPress}
        />
        <button className='add-btn' onClick={()=>{
            props.addList(inputText)
            getInputText(" ")
        }}>+</button>
        
    </div>
    </>
  )
}

export default Input