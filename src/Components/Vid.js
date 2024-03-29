import Button from 'react-bootstrap/Button';
import "./style.css"
import "../Array_Complete/Fonts/WEB/css/array.css"

export default function Vid(props) {
    
    const CopyToClipboard = (ele) =>{
        navigator.clipboard.writeText(ele);
        alert("Color hex code copied!")
    }

    const calculateBrightness = (color) => {
        const hex = color.replace('#', '');
        const r = parseInt(hex.substring(0, 2), 16);
        const g = parseInt(hex.substring(2, 4), 16);
        const b = parseInt(hex.substring(4, 6), 16);
        const brightness = (r * 299 + g * 587 + b * 114) / 1000;
        return brightness < 128;
    };

    return (
        <>
        <h2 style={{fontFamily:"Array-Regular", fontSize:"65px",padding:"10px", paddingLeft:"20px", paddingBottom:"0px", width:"100vw", margin:"0px", backgroundColor:props.colours[0], color: calculateBrightness(props.colours[0]) ? 'white' : 'black'}}>Question {props.qnum}</h2>
        <div style={{backgroundColor: props.colours[0], height:"840px",width:"100vw",display: "flex", justifyContent:"center"}}>
            
            <div style={{alignSelf:"center", justifySelf:"center"}}>
                <video controls autoPlay loop muted style={{transform:"scale(0.5)",height:"500px",width:"600px",objectFit:"contain"}}>
                    <source src={props.video}/>
                </video>          
            </div>

            <div style={{backgroundColor:calculateBrightness(props.colours[0]) ? 'rgba(255,255,255,0.3)' : 'rgba(0,0,0,0.3)', justifySelf:"end", alignSelf:"center", padding:"10px", borderRadius:"8px", display:"flex", flexWrap:"wrap", gap:"10px"}}>{
                props.colours.map((ele)=>{
                    return <Button onClick={() => CopyToClipboard(ele)} style={{backgroundColor:ele, color: calculateBrightness(ele) ? 'white' : 'black', border:"none"}}>{ele}</Button>
                })
            }</div>
        </div>
        </>
    )
}
