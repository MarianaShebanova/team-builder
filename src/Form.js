import React, { useState } from "react";
import { Button } from 'reactstrap';

const Form = props => {
    const [member, setMember] = useState({
        nameM: "", role: "" , email: ""});

    const handleChanges = e => {
        setMember({ ...member, [e.target.name]: e.target.value });
        console.log(e.target.name);
    };

    const submitForm = e => {
        e.preventDefault();
        props.addNewMember(member);
        setMember({ nameM: "", role: "" , email: ""});
    };
    return (
        <form onSubmit={submitForm}>
            <label htmlFor="nameM">Name</label>
            <input
                id="nameM"
                type="text"
                name="nameM"
                onChange={handleChanges}
                value={member.nameM}
            />
            <label htmlFor="email">Email</label>
            <input
                id="email"
                type="email"
                name="email"
                onChange={handleChanges}
                value={member.email}
            />
            <label htmlFor="role">Role</label>
            <select id="role" name="role" onChange={handleChanges}>
                <option value="Backend engineer">Backend engineer</option>
                <option value="Frontend engineer">Frontend engineer</option>
                <option value="Designer">Designer</option>
            </select>
            <Button color="primary">Add member</Button>
        </form>
    );
};

export default Form;