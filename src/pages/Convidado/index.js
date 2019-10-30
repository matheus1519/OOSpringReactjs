import React from 'react';
import api from '../../services/api'

export default function Convidado()
{
    async function handleApi() {
        const response = await api.get('/api/convidados');
        console.log(response);
    }

    return (
        <h2>Convidados</h2>
    );
}