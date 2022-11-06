import { useState } from "react";


const ContactCard = (props) => {
    const [showAge, setShowAge] = useState(false)
    return (
        <div className="contact-card">
            <img 
                src={props.avatarUrl}
                alt="profile">
            </img>
            <div className="userDeatails">
                <p>Name: {props.name}</p>
                <p>Email: {props.email}</p>
                <button onClick={() =>setShowAge(!showAge)}>Show Age</button>
                {showAge && <p>Age: {props.age}</p>}
            </div>
        </div>
    )
}

export default ContactCard;