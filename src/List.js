import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

const List = props => {
    return (
        <div>
            {props.members.map(member => (
                <div className="member" key={member.id}>
                    <h2>{member.nameM}</h2>
                    <p>{member.email}</p>
                    <p>{member.role}</p>
                </div>
            ))}
        </div>
    );
};

export default List;

