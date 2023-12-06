import Quadrangle from "./Quadrangle"
import Wavy from "./Wavy"

export default function Background() {
    const FRINGYFLOWER = "#C4EAC3" 
    const PATINA = "#63A083" 
    const COSMOS = "#FFCDCD" 
    const EGGWHITE = "#FFF9C1"
    return (
        <>
            <Wavy/>
            <Quadrangle color={PATINA} height='150' width='80' top='0' left='0'/>
            <Quadrangle color='white' height='90' width='40' top='20' left='30'/>
            <Quadrangle color={PATINA} height='120' width='100' top='200' left='0'/>
            <Quadrangle color={FRINGYFLOWER} height='109.7' width='82.2' top='210.3' left='21.7'/>
            <Quadrangle color='white' height='30' width='80' top='250' left='0'/>
            {/* <Quadrangle color={PATINA} height='20' width='73.4' top='120' left='30'/> */}
        </>
    )
}