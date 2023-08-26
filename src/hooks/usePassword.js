import { useState } from "react"

function usePassword() {
    const [password, setPassword] = useState("")
    const [errorMsg, setErrorMsg] = useState("")
    let charset = ""
    let passwordGen = ""
    function generatePassword (checkBoxData, charLength){
        charset = ""
        let selectedBoxes = checkBoxData.filter(box => box.value)
        if(selectedBoxes.length === 0){
            setErrorMsg("Please select at least one checkbox.")
            setPassword("")
            return
        }
        selectedBoxes?.forEach(box => {
            if(box.value === true){
                switch(box.name){
                    case "Include Uppercase" : charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
                    break;
                    case "Include Lowercase" : charset += "abcdefghijklmnopqrstuvwxyz"
                    break;
                    case "Include Numbers" : charset += "0123456789"
                    break;
                    case "Include Symbols" : charset += "!@#_"
                    break;
                    default : charset = ""
                    break
                }
            }
        })
        for(let i=0; i<charLength; i++){
            let randomIndex = Math.floor(Math.random()*charset.length)
            passwordGen += charset[randomIndex]
        }
        setPassword(passwordGen)
        setErrorMsg("")
    }
    return [password, errorMsg, generatePassword]
}

export default usePassword