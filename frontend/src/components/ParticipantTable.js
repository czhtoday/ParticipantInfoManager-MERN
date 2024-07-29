import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getAllParticipants, deleteParticipant } from '../services/participantService';

function ParticipantTable() {
    const [participants, setParticipants] = useState([]);

    useEffect(() => {
        const fetchParticipants = async () => {
            const data = await getAllParticipants();
            setParticipants(data);
        };
        fetchParticipants();
    }, []);

    const deleteRow = async (id) => {
        await deleteParticipant(id);
        setParticipants(participants.filter(participant => participant._id !== id));
    };

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Date of Birth</th>
                        <th>Living Location</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {participants.map(participant => (
                        <tr key={participant._id}>
                            <td>{participant.firstname}</td>
                            <td>{participant.lastname}</td>
                            <td>{new Date(participant.dateofbirth).toLocaleDateString()}</td>
                            <td>{participant.livingLocation}</td>
                            <td>
                                <Link to={`/edit-participant/${participant._id}`}>Edit</Link>
                                <button onClick={() => deleteRow(participant._id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default ParticipantTable;
