import {useState} from "react";


export default function Greeting() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");

    const handleFirstNameChange = (e) => {
        setFirstName(e.target.value);
    };

    const handleLastNameChange = (e) => {
        setLastName(e.target.value);
    };

    return (
        <div className={"text-center m-3"}>
            First Name :<input value={firstName} onChange={handleFirstNameChange} className={"m-3"}/>
            <br/>
            Last Name : <input value={lastName} onChange={handleLastNameChange}/>
            <p>
                Hello,{" "}
                <span className={"text-primary"}>
          {firstName} {lastName}
        </span>
            </p>
        </div>
    )
}