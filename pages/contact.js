import { FaInstagram, FaLinkedin } from 'react-icons/fa';

export default function Contact() {
    return (
        <div className="w-11/12 mx-auto">
            <h1 className="text-center">Contact Me!</h1>
            {/* <h1 className="text-center m-4">Currently actively looking for summer internships for software engineering and/or research opportunities in Human Computer Interaction.</h1> */}
            <div className="p-2 m-2 flex items-center justify-center">
                <div className="flex flex-col items-center justify-center">
                    <h2 className="text-center">Email</h2>
                    <p className="text-center"> 
                        <a href="mailto:anna.xu@yale.edu" target="_blank" className="underline">anna.xu@yale.edu</a>      
                    </p>
                </div>
            </div>
            <div className="p-2 m-2 flex items-center justify-center">
                <div className="flex items-center justify-center">
                    <a href="https://www.linkedin.com/in/anna-xu-354271192/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                        <FaLinkedin size={22} />
                    </a>
                    <a href="https://www.instagram.com/annax.u/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                        <FaInstagram size={22} />
                    </a>
                </div>
            </div>
        </div>
    )
}