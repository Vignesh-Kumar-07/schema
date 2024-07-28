import { HiChevronLeft } from "react-icons/hi";






export default function Main({setIsOpen}){
    return( 
    <>
        <div className="main">
                <header className="header">
                    <HiChevronLeft  className='icon'/>
                    <p>View Audience</p>
                </header>

            <button className="btn-outlined" onClick = {() => setIsOpen(isOpen => !isOpen)}>Save segment </button>
        </div>
        <div className="dark">
             
        </div>
    </>
)}



