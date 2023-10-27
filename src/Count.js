import {useState} from 'react'

const Count = () => {

    const[name, setName] = useState('');
    const[WordCount,setWordCount ]= useState(0);
    const[same, setSame] = useState(0);

    
    const updateName = (e) => {
      setName(e?.target?.value);
      let inputName = e?.target?.value;

      setWordCount(e?.target?.value?.trim()?.split(' ')?.length);

      const repeatedWords = e?.target?.value?.split(' ').filter((word, index, self) => self.indexOf(word) !== index);

      setSame(repeatedWords.length);
    };


  return (
    <div>
        <h1>{name}</h1>
        <input placeholder='Enter your name' onChange={updateName}/>
        <p>Char Count : {name?.length}</p>
        <p>Word Count : {WordCount}</p>
        <p>same Count : {same}</p>
      
    </div>
  )
}

export default Count
