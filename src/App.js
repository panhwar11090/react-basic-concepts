
import { useState } from 'react';
import './App.css';
import Count from './Count'

import Todo from './components/Todo';

const App = () => {

  // let obj = [
  //   {
  //     name:'huzaifa',
  //     age:23
  //   },
  //   {
  //     name:'ahsan',
  //     age:22
  //   },
  //   {
  //     name:'dost',
  //     age:18,
  //     adress:"Karachi"
  //   }
  // ]

  // // const[name, SetName]= useState('Huzaifa');     
  // //   const updateName = (e) =>{
  // //     SetName(e?.target?.value);
  // //   }


  const [key,setKey] = useState('');
  const [value , setValue] = useState('');
  const [obj, setObj] = useState({});

  // setKey(e => e?.target?.value?.replace(' ', '_'));
  // setValue(e => e?.target?.value);

  const addKeyValue = () =>{
    obj[key] = value;
    setObj({ ...obj});

    setKey('');
    setValue('');
  }

  const updateKey = (e) =>{
    setKey( e?.target?.value?.replace(' ', '_'));
  }

  const updateValue = (e) =>{
    setValue( e?.target?.value);
  }





  return (
    <div className="App">

      <Todo/>
      {/* <Count/>
      <h1>Names && Age</h1>
      {obj?.map((v, i )=>{
        return(
          <div key={i}>
            <span>{i +1} Name: {v?.name}</span>
            <br/>
            <span>&nbsp;&nbsp;&nbsp; Age: {v?.age}</span>
            <br/>
            {v?.adress && <span>&nbsp;&nbsp;&nbsp; Adress: {v?.adress}</span>}
          </div>
        )
      })} */}

      {/* //second class code */}
      {/* <input name='key' value={key} onChange={updateKey} placeholder='Please enter key here' />
      <input name='value' value={value} onChange={updateValue} placeholder='Please enter value here' />
      <button onClick={addKeyValue}>Add</button>


      <div>
        {Object.entries(obj)?.map((v,i)=>{
          return(
            <p key={i}>{`${v[0]?.charAt(0)?.toUpperCase()}${v[0]?.slice(1)}: 
            
            ${v[1]}`}
            </p>
          )
        })}
      </div> */}







    </div>
  );
}

export default App;

//1 obj k array ko map me kese krte he or key provide krte takke error na ai ye sekha he
//2 usestae parha he ye islye use krte he takke ham changes pr apni application data ko 
// set kr sake Q k app ek bar rnder ho jati he and then phr state change hoti he sirf jese 
// agar updateName wale fucn me agar ham direct e.targer.value krenge to name change nhi hoga 
// tabhi hamne useState me setname se name ko change kiya he