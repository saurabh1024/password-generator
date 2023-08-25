import Slider from './Slider'
import '../styles/PasswordBox.css'
import { useEffect, useState } from 'react'
const PasswordBox = () => {
    const [charLength, setCharLength] = useState(4)
    const [password, setPassword] = useState("")
    const [copy, setCopy] = useState("copy")
    const [checkBoxData, setCheckBoxData] = useState([
        {id: 1, name:"Include Uppercase", value:false},
        {id: 2, name:"Include Lowercase", value:false},
        {id: 3, name:"Include Numbers", value:false},
        {id: 4, name:"Include Symbols", value:false},
    ])

    const handleGenerate = () => {
        let pass = "1234"
        setPassword(pass)
    }
    const handleCopy = () => {
        setCopy("copied!")
        console.log(password)
    }
    const handleCheck = (id) => {
        let newData = [...checkBoxData]
        newData.forEach(item => {
            if(item.id === id){
                item.value = !item.value
            }
        })
        setCheckBoxData(newData)
    }

    useEffect(()=>{
        if(copy !== "copy"){
            setTimeout(()=>{
                setCopy("copy")
            }, 1800)
        }
    },[copy])
  return (
    <div className='box'>
        <div className='passWordAndCopy'>
            <div className="password">{password}</div>
            <div className="copyBtn">
                <button onClick={handleCopy}>{copy}</button>
            </div>
        </div>
        <div className="sliderContainer">
            <div className="lengthContainer">
                <div>Character Length</div>
                <div>{charLength}</div>
            </div>
            <Slider charLength={charLength} setCharLength={setCharLength} />
        </div>
        <div className="checkboxesDiv">
            {checkBoxData.map(checkbox => {
                return <div key={checkbox.id} className="checkBoxInput">
                <input onClick={()=>handleCheck(checkbox.id)} type='checkbox' value={checkbox.value} />
                <label>{checkbox.name}</label>
            </div>
            })}
            
        </div>
        <div className="stregthContainer">
            <div>Strength:</div>
            <div className="strength">Medium</div>
        </div>
        <button onClick={handleGenerate} className='generateBtn'>Generate Password</button>
    </div>
  )
}

export default PasswordBox