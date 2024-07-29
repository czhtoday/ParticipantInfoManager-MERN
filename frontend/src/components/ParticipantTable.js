import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getAllParticipants, deleteParticipant } from '../services/participantService';
import './ParticipantTable.css';


function ParticipantTable() {
    const [participants, setParticipants] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        const fetchParticipants = async () => {
            const data = await getAllParticipants();
            setParticipants(data);
        };
        fetchParticipants();
    }, []);

    useEffect(() => {
        const fetchParticipants = async () => {
            const data = await getAllParticipants();
            const filteredData = data.filter(participant =>
                participant.firstname.toLowerCase().includes(searchTerm.toLowerCase()) ||
                participant.lastname.toLowerCase().includes(searchTerm.toLowerCase())
            );
            setParticipants(filteredData);
        };

        if (searchTerm) {
            fetchParticipants();
        } else {
            fetchParticipants(); // fetch all if search term is cleared
        }
    }, [searchTerm]);

    const deleteRow = async (id) => {
        await deleteParticipant(id);
        setParticipants(participants.filter(participant => participant._id !== id));
    };

    return (
        <div>
            <div className="search-container">
                <span style={{ color: '#004225', fontWeight: 'bold' }}>Find Participant: </span>
                <input
                    type="text"
                    value={searchTerm}
                    onChange={e => setSearchTerm(e.target.value)}
                    placeholder="Search by name..."
                    className="search-input"
                />
            </div>
            <table className="participant-table">
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
                                <Link to={`/edit-participant/${participant._id}`} className="button-edit">Edit</Link>
                                <button onClick={() => deleteRow(participant._id)} className="button-delete">Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default ParticipantTable;
