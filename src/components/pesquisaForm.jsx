import { useState } from "react";

const PesquisaForm = ({
  pesquisaOperador,
  pesquisaPeriodo,
  pesquisaOperadorEPeriodo,
  resetPesquisa,
}) => {
  const [dataInicio, setDataInicio] = useState([]);
  const [dataFim, setDataFim] = useState([]);
  const [operador, setOperador] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      dataInicio.length === 0 &&
      dataFim.length === 0 &&
      operador.length > 0
    ) {
      pesquisaOperador(operador);
    } else if (
      dataInicio.length > 0 &&
      dataFim.length > 0 &&
      operador.length === 0
    ) {
      pesquisaPeriodo(dataInicio, dataFim);
    } else if (
      dataInicio.length > 0 &&
      dataFim.length > 0 &&
      operador.length > 0
    ) {
      pesquisaOperadorEPeriodo(dataInicio, dataFim, operador);
    } else {
      resetPesquisa();
    }

    setDataInicio("");
    setDataFim("");
    setOperador("");
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="search-form">
        <div className="form-control">
          <label>Data de Inicio:</label>
          <input
            type="date"
            value={dataInicio}
            onChange={(e) => setDataInicio(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label>Data de Fim:</label>
          <input
            type="date"
            value={dataFim}
            onChange={(e) => setDataFim(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label>Nome operador transacionado:</label>
          <input
            className="text-input"
            type="text"
            value={operador}
            onChange={(e) => setOperador(e.target.value)}
          />
        </div>
      </div>
      <div className="submit-div">
        <input type="submit" value="Pesquisa" className="btn" />
      </div>
    </form>
  );
};

export default PesquisaForm;
