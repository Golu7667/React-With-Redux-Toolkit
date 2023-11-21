import { useState } from "react"
import { useDispatch } from "react-redux"
import { changeTextColor } from "./themeSlice"

const Theme = () => {
 const [color, setColor] = useState("white")
 const dispatch = useDispatch()
 return (
  <div style={{paddingTop:'10px'}}>
   <input className="textbox" type="text" onChange={(e) => setColor(e.target.value)} style={{width:'300px',borderRadius:'10px'}}/>
   <button className="button" onClick={() => { dispatch(changeTextColor(color)) }}>Change Text Color</button>
  </div>
 )
}

export default Theme