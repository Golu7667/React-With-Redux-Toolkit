import { useSelector } from "react-redux"
function Coin() {
 const coin = useSelector((state) => state.counterme.count)
 const themeTextColor = useSelector((state) => state.theme.color)
 return (
  <div >
   
  </div>
 )
}

export default Coin