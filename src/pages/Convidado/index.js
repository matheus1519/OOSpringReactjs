import React, {useState, useEffect} from 'react';
import api from '../../services/api';

export default function Convidado()
{
    const [convidados, setConvidados] = useState([]);
    const [festas, setFestas] = useState([]);

    const [id, setId] = useState(0);
    const [nome, setNome] = useState('');
    const [qtde, setQtde] = useState(0);
    const [festaId, setFestaId] = useState(1);



    useEffect(() => {
        async function listarConvidados() {
            const response = await api.get('/api/convidados');
            setConvidados(response.data);
            const response2 = await api.get('/api/festas');
            setFestas(response2.data);
           console.log(response.data);
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
        var response;
        if (id == 0){
            response = await api.post('/api/convidados/',{
                nome,
                qtde,
                festa:{
                    id:festaId
                }
            });
        }
        else {
            response = await api.put(`/api/convidados/${id}`,{
                id,
                nome,
                qtde,
                festa:{
                    id:festaId
                }
            });
        }
        if (response.status == 200)
        {
            window.location.reload();
        }
    }

    async function handleUpdate(id) {
        const response = await api.get(`/api/convidados/${id}`);
        const convidado = response.data;
        setId(convidado.id);
        setNome(convidado.nome);
        setQtde(convidado.qtde);
        setFestaId(convidado.festa.id);
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
                            <input type="hidden" value={id}/>
                            <div className="form-group">
                                <label htmlFor="nome">Nome:</label>
                                <input type="text" id="nome" className="form-control" onChange={(event)=>{setNome(event.target.value)}} placeholder="Nome" value={nome}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="acompanhantes">Acompanhantes:</label>
                                <input type="number" id="acompanhantes" className="form-control" onChange={(event)=>{setQtde(event.target.value)}} placeholder="Acompanhantes" value={qtde}/>
                            </div>
                            <select className="form-control" id="festa" value={festaId} onChange={(event)=>{setFestaId(event.target.value)}}>
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
                                        <td><a className="btn btn-secondary glyphicon glyphicon-pencil"onClick={()=>{handleUpdate(convidado.id)}}>Alterar</a></td>
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