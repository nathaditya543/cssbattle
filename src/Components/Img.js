import Button from 'react-bootstrap/Button';
import "./style.css"
import "../Array_Complete/Fonts/WEB/css/array.css"

export default function Img(props) {
    
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
        <h2 className="qnum" style={{backgroundColor:props.colours[0], color: calculateBrightness(props.colours[0]) ? 'white' : 'black'}}>Question {props.qnum}</h2>
        <div style={{backgroundColor: props.colours[0], height:"850px",width:"100vw",display: "flex", justifyContent:"center"}}>
            
            <div className="image" style={{alignSelf:"center", justifySelf:"center"}}>
                <img src={props.img} style={{margin:"10px", height:"500px", width: "500px", objectFit: "containff"}} alt = "Design It!"/>         
            </div>

            <div className='btnGroup' style={{backgroundColor:calculateBrightness(props.colours[0]) ? 'rgba(255,255,255,0.3)' : 'rgba(0,0,0,0.3)', justifySelf:"end", alignSelf:"center", padding:"10px", borderRadius:"8px", display:"flex", flexWrap:"wrap", gap:"10px"}}>{
                props.colours.map((ele)=>{
                    return <Button onClick={() => CopyToClipboard(ele)} style={{backgroundColor:ele, color: calculateBrightness(ele) ? 'white' : 'black', border:"none"}}>{ele}</Button>
                })
            }</div>
        </div>
        </>
    )
}
