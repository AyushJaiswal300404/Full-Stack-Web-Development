import { useState } from 'react';

export default function Form(){
    let [formData, setFormData] = useState({
        fullName: "",
        username: "",
        password: ""
    });

    const handleSubmit = (event) => {
        event.preventDefault();
        setFormData({
            fullName: "",
            username: "",
            password: ""
        });
    }

    let handleInputChange = (event) => {
        let fieldName = event.target.name;
        let newValue = event.target.value;
        setFormData((currData) => {
            return {
                ...currData,
                [fieldName]: newValue
            };
        });
    }

    return( 
        <form onSubmit={handleSubmit}>
            <label htmlFor="fullName">Full Name</label>
            <input 
                placeholder="Enter your full name: " 
                value={formData.fullName}
                onChange={handleInputChange}
                id="fullName"
                name="fullName"
            /><br/>
            <label htmlFor="username">Username</label>
            <input 
                placeholder="Enter your username: " 
                value={formData.username}
                onChange={handleInputChange}
                id="username"
                name="username"
            />
            <br/>
            <label htmlFor="password">Password</label>
            <input 
                placeholder="Enter your password: " 
                value={formData.username}
                onChange={handleInputChange}
                id="password"
                name="password"
            />
            <br/>
            <button>Submit</button>
        </form>
    )
}