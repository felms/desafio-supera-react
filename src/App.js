import PesquisaForm from "./components/pesquisaForm";
import TabelaTransferencias from "./components/tabelaTransferencias";

function App() {
  let transferencias = [
    {
      id: 1,
      dataTransferencia: "2019-01-01T07:00:00-02:00",
      valor: 30895.46,
      tipo: "DEPOSITO",
      conta: {
        id: 1,
        nomeResponsavel: "Fulano",
      },
    },
    {
      id: 2,
      dataTransferencia: "2019-02-03T04:53:27-02:00",
      valor: 12.24,
      tipo: "DEPOSITO",
      conta: {
        id: 2,
        nomeResponsavel: "Sicrano",
      },
    },
    {
      id: 3,
      dataTransferencia: "2019-05-04T02:12:45-03:00",
      valor: -500.5,
      tipo: "SAQUE",
      conta: {
        id: 1,
        nomeResponsavel: "Fulano",
      },
    },
    {
      id: 4,
      dataTransferencia: "2019-08-07T02:12:45-03:00",
      valor: -530.5,
      tipo: "SAQUE",
      conta: {
        id: 2,
        nomeResponsavel: "Sicrano",
      },
    },
    {
      id: 5,
      dataTransferencia: "2020-06-08T04:15:01-03:00",
      valor: -3241.23,
      tipo: "TRANSFERENCIA",
      conta: {
        id: 1,
        nomeResponsavel: "Fulano",
      },
    },
    {
      id: 6,
      dataTransferencia: "2021-04-01T06:12:04-03:00",
      valor: 25173.09,
      tipo: "TRANSFERENCIA",
      conta: {
        id: 2,
        nomeResponsavel: "Sicrano",
      },
    },
    {
      id: 1,
      dataTransferencia: "2019-01-01T07:00:00-02:00",
      valor: 30895.46,
      tipo: "DEPOSITO",
      conta: {
        id: 1,
        nomeResponsavel: "Fulano",
      },
    },
    {
      id: 2,
      dataTransferencia: "2019-02-03T04:53:27-02:00",
      valor: 12.24,
      tipo: "DEPOSITO",
      conta: {
        id: 2,
        nomeResponsavel: "Sicrano",
      },
    },
    {
      id: 3,
      dataTransferencia: "2019-05-04T02:12:45-03:00",
      valor: -500.5,
      tipo: "SAQUE",
      conta: {
        id: 1,
        nomeResponsavel: "Fulano",
      },
    },
    {
      id: 4,
      dataTransferencia: "2019-08-07T02:12:45-03:00",
      valor: -530.5,
      tipo: "SAQUE",
      conta: {
        id: 2,
        nomeResponsavel: "Sicrano",
      },
    },
    {
      id: 5,
      dataTransferencia: "2020-06-08T04:15:01-03:00",
      valor: -3241.23,
      tipo: "TRANSFERENCIA",
      conta: {
        id: 1,
        nomeResponsavel: "Fulano",
      },
    },
    {
      id: 6,
      dataTransferencia: "2021-04-01T06:12:04-03:00",
      valor: 25173.09,
      tipo: "TRANSFERENCIA",
      conta: {
        id: 2,
        nomeResponsavel: "Sicrano",
      },
    },
  ];

  return (
    <div className="container">
      <h3>Transferências</h3>
      <PesquisaForm />
      <TabelaTransferencias
        todasTransferencias={transferencias}
        transferenciasSelecionadas={transferencias}
      />
    </div>
  );
}

export default App;
