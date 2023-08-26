import Slider from './Slider'
import { useState } from 'react'
import { checkBoxDataArray, Generate_Password, Character_Length, Strength_ } from '../utils/constants'
import usePassword from '../hooks/usePassword'
import '../styles/PasswordBox.css'

const PasswordBox = () => {
    const [charLength, setCharLength] = useState(4)
    const [copy, setCopy] = useState("copy")
    const [checkBoxData, setCheckBoxData] = useState(checkBoxDataArray)
    const [password, errorMsg, generatePassword] = usePassword()

    const handleGenerate = () => {
        generatePassword(checkBoxData, charLength)
    }
    const getStrength = () => {
        // can add more complex logic for checking strength
        let length = password.length
        if(length >= 15) return "ultra strong"
        if(length >= 12) return "very strong"
        else if(length >= 8) return "strong"
        else if(length > 4) return "average"
        else return "weak"
    }
    const handleCopy = () => {
        if(password){
            navigator.clipboard.writeText(password)
            setCopy("copied!")
            setTimeout(()=>{
                setCopy("copy")
            },1500)
        }
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
    
  return (
    <div className='box'>
        {password && <div className='passWordAndCopy'>
            <div className="password">{password}</div>
            <div className="copyBtn">
                <button onClick={handleCopy}>{copy}</button>
            </div>
        </div>}
        <div className="sliderContainer">
            <div className="lengthContainer">
                <div>{Character_Length}</div>
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
            <div>{Strength_}</div>
            <div className="strength">{getStrength()}</div>
        </div>

        {/* error and generate password button */}
        <div className='errorMsg'>{errorMsg}</div>
        <button onClick={handleGenerate} className='generateBtn'>{Generate_Password}</button>
    </div>
  )
}

export default PasswordBox