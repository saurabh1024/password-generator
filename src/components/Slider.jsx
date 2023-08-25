
import '../styles/Slider.css'

const Slider = ({charLength, setCharLength}) => {
    const handleChange = (e) => {
        setCharLength(e.target.value)
    }
  return (
    <div className='sliderContainer'>
        <input type='range' min={4} max={20} value={charLength} onChange={(e)=>handleChange(e)} />
    </div>
  )
}

export default Slider