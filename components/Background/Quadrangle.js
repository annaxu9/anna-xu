export default function Quadrangle({color, width, height, top, left}) {
    return (
        <div style={{ position: 'absolute', backgroundColor: color, width: width + 'vw', height: height + 'vh', top: top+'vh', left: left+'vw', zIndex: -1}}>
        </div>
    )
}