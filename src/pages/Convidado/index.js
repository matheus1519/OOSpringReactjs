import React, {useState, useEffect} from 'react';
import api from '../../services/api'

export default function Convidado()
{
    const [convidados, setConvidados] = useState([]);
    const [festas, setFestas] = useState([]);
    const [convidado, setConvidado] = useState({});


    useEffect(() => {
        async function listarConvidados() {
            const response = await api.get('/api/convidados');
            setConvidados(response.data);
            const response2 = await api.get('/api/festas');
            setFestas(response2.data);
            console.log(convidados);
        }
        listarConvidados();

    },[]);

    async function handleDelete(id) {
        const response = await api.delete(`/api/convidados/${id}`);
        if (response.status == 200)
        {
            window.location.reload();
        }
    }

    async function handleSubmit(e) {
        e.preventDefault();
        console.log(convidado);
        const response = await api.post('/api/convidados/',{
            id: convidado.id,
            nome : convidado.nome,
            qtde: convidado.qtde,
            festa: convidado.festa
        });
        if (response.status == 200)
        {
            window.location.reload();
        }
    }


    return (
        <div className="container mt-2">
            <div className="card">
                <div className="card-header">
                    <h2 className="text-center card-title">Lista de convidados</h2>
                </div>
                <div className="card-body">
                    <form method="POST"  onSubmit={handleSubmit}>
                        <div className="form-group">
                            <input type="hidden" value={convidado.id}/>
                            <div className="form-group">
                                <label htmlFor="nome">Nome:</label>
                                <input type="text" id="nome" className="form-control" onChange={(event)=>{setConvidado({nome:event.target.value})}} placeholder="Nome" value={convidado.nome}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="acompanhantes">Acompanhantes:</label>
                                <input type="number" id="acompanhantes" className="form-control" onChange={(event)=>{setConvidado({qtde:event.target.value})}} placeholder="Acompanhantes" value={convidado.qtde}/>
                            </div>
                            <select className="form-control" id="festa" value={convidado.festa}onChange={(event)=>{setConvidado({festa:event.target.value})}}>
                                { festas.map((festa) => (
                                    <option key={festa.id} value={festa.id}>{festa.nome}</option>
                                ))}
                            </select>

                        </div>
                        <input type="submit" className="btn btn-primary" value="Adicionar"/>
                    </form>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Nome</th>
                                <th>Acompanhantes</th>
                                <th>Festa</th>
                                <th colSpan="2">Acoes</th>
                            </tr>
                        </thead>
                        <tbody>
                            { convidados.map((convidado) => (
                                    <tr key={convidado.id}>
                                        <td>{convidado.nome}</td>
                                        <td>{convidado.qtde}</td>
                                        <td>{convidado.festa.nome}</td>
                                        <td><a className="btn btn-secondary glyphicon glyphicon-pencil" href={`/convidados/alterar/${convidado.id}`}>Alterar</a></td>
                                        <td><a className="btn btn-outline-secondary" onClick={() => handleDelete(convidado.id)} >Excluir</a></td>
                                    </tr>
                                )
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}