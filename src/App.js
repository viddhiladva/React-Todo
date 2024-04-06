import React, { useState } from 'react';
import './App.css';
import Input from './component/Input';
import List from './component/List';

function App() {
  const [list,getList] = useState([]);
  let addList=(inputText)=>{
    if(inputText !== ' ')
    getList([...list,inputText]);
  }
  const deleteItem = (key)=>{
    let newItem = [...list];
    newItem.splice(key,1)
    getList([...newItem])
  }
  return (
    <>
      <div className='main-container'>
        <div className='center-container'>
        <Input addList={addList} />
        <h1 className='app-heading'>your list..</h1>
        <hr/>
       {list.map((listItem,i)=>{
        return(
          <List key={i} item={listItem} delete={deleteItem} index={i}/>
        )
       })}
        </div>
      </div>
    </>
  );
}

export default App;
