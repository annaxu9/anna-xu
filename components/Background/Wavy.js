export default function Wavy() {
    // transform: 'rotate(-45deg)'
    //  transform="rotate(-45)"
    return (
        <div  style={{position: 'absolute', zIndex: 1, left: '20vw', top: '10vh'}}>
            <svg width="100vw" height="400vh" viewBox="0 0 1000 100" xmlns="http://www.w3.org/2000/svg" >
                <path d="M 1130 50 L 531 655 L -26 50 Q 100 10, 90 50 T 170 50 T 250 50 T 330 50 T 410 50 T 490 50 T 570 50 T 650 50 T 730 50 T 810 50 T 890 50 T 970 50 T 1050 50 T 1130 50" stroke="#C4EAC3" fill="#C4EAC3" transform="rotate(-45)"/>
            </svg>
        </div>
    )
}