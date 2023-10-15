import Nav2 from "./Nav2.jsx"
import Mid from  './Mid.jsx'
import Hisab from './Hisab.jsx'
import './samosa.css'
function Samosa(prop){
console.log(prop.gg);

    return(<>

<div className="top">
<Nav2/>
<Mid d={prop.gg}/>
<Hisab/>
</div>
    </>
    )
}
export default Samosa