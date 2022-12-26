import { useState, useEffect } from "react";

import PesquisaForm from "./components/pesquisaForm";
import TabelaTransferencias from "./components/tabelaTransferencias";

function App() {
  const [transferencias, setTransferencias] = useState([]);
  const [transferenciasSelecionadas, setTransferenciasSelecionadas] = useState(
    []
  );

  useEffect(() => {
    const getTransferencias = async () => {
      const transfFromServer = await fetchAll();
      setTransferencias(transfFromServer);
      setTransferenciasSelecionadas(transfFromServer);
    };

    getTransferencias();
  }, []);

  const fetchAll = async () => {
    const res = await fetch("http://localhost:8080/api/transferencias");
    const data = await res.json();
    return data;
  };

  const pesquisaOperador = async (operador) => {
    const res = await fetch(
      `http://localhost:8080/api/transferencias/operador/${operador}`
    );
    if (res.status === 200) {
      const data = await res.json();
      setTransferenciasSelecionadas(data);
    }
  };

  const pesquisaPeriodo = async (dataInicio, dataFim) => {
    const res = await fetch(
      `http://localhost:8080/api/transferencias/periodo?dataInicio=${dataInicio}&dataFim=${dataFim}`
    );
    if (res.status === 200) {
      const data = await res.json();
      console.log("data: ", data);
      setTransferenciasSelecionadas(data);
    }
  };

  const pesquisaOperadorEPeriodo = async (dataInicio, dataFim, operador) => {
    const res = await fetch(
      `http://localhost:8080/api/transferencias/operador/periodo?dataInicio=${dataInicio}&dataFim=${dataFim}&operador=${operador}`
    );
    if (res.status === 200) {
      const data = await res.json();
      console.log("data: ", data);
      setTransferenciasSelecionadas(data);
    }
  };

  const resetPesquisa = async () => {
    const transfFromServer = await fetchAll();
    setTransferencias(transfFromServer);
    setTransferenciasSelecionadas(transfFromServer);
  };

  return (
    <div className="container">
      <h3>Transferências</h3>
      <PesquisaForm
        pesquisaOperador={pesquisaOperador}
        pesquisaPeriodo={pesquisaPeriodo}
        pesquisaOperadorEPeriodo={pesquisaOperadorEPeriodo}
        resetPesquisa={resetPesquisa}
      />
      <TabelaTransferencias
        todasTransferencias={transferencias}
        transferenciasSelecionadas={transferenciasSelecionadas}
      />
    </div>
  );
}

export default App;
