import React, {useState, useEffect} from 'react';
import api from '../../services/api'

export default function Convidado()
{
    const [convidados, setConvidados] = useState([]);

    useEffect(() => {
        async function listarConvidados() {
            const response = await api.get('/api/convidados');
            setConvidados(response.data);
        }

        listarConvidados();

    },[convidados]);
    


    return (
        <div className="container mt-2">
            <div className="card">
                <div className="card-header">
                    <h2 className="text-center card-title">Lista de convidados</h2>
                </div>
                <div className="card-body">
                    {/* <form method="POST" style="margin: 20px 0" th:object="${convidado}" th:action="@{/convidados}">
                        <div className="form-group">
                            <input type="hidden" th:field="*{id}"/>
                            <div className="form-group">
                                <label for="nome">Nome:</label>
                                <input type="text" id="nome" className="form-control"	placeholder="Nome" th:field="*{nome}"/>
                            </div>
                            <div className="form-group">
                                <label for="acompanhantes">Acompanhantes:</label>
                                <input type="text" id="acompanhantes" className="form-control" placeholder="Acompanhantes" th:field="*{qtde}"/>
                            </div>
                            <select className="form-control" id="festa" th:field="*{festa}">
                                <option th:each="f : ${festas}" th:value="${f.id}" th:text="${f.nome}">
                                </option>
                            </select>

                        </div>
                        <button type="submit" className="btn btn-primary">Adicionar</button>
                    </form>*/}
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
                                        <td><a className="btn btn-outline-secondary glyphicon glyphicon-pencil" href={`/convidados/excluir/${convidado.id}`}>Excluir</a></td>
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