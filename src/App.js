
import { useState } from 'react';
import './App.css';
import Count from './Count'

const App = () => {

  let obj = [
    {
      name:'huzaifa',
      age:23
    },
    {
      name:'ahsan',
      age:22
    },
    {
      name:'dost',
      age:18,
      adress:"Karachi"
    }
  ]

  // const[name, SetName]= useState('Huzaifa'); 


    

  //   const updateName = (e) =>{
  //     SetName(e?.target?.value);
  //   }



  return (
    <div className="App">
      <Count/>
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
      })}
    </div>
  );
}

export default App;

//1 obj k array ko map me kese krte he or key provide krte takke error na ai ye sekha he
//2 usestae parha he ye islye use krte he takke ham changes pr apni application data ko 
// set kr sake Q k app ek bar rnder ho jati he and then phr state change hoti he sirf jese 
// agar updateName wale fucn me agar ham direct e.targer.value krenge to name change nhi hoga 
// tabhi hamne useState me setname se name ko change kiya he