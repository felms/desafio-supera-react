const TabelaTransferencias = ({
  todasTransferencias,
  transferenciasSelecionadas,
}) => {
  const formataData = (input) => {
    let data = new Date(input),
      dia = data.getDate().toString(),
      diaF = dia.length === 1 ? "0" + dia : dia,
      mes = (data.getMonth() + 1).toString(), //+1 pois no getMonth Janeiro começa com zero.
      mesF = mes.length === 1 ? "0" + mes : mes,
      anoF = data.getFullYear();
    return diaF + "/" + mesF + "/" + anoF;
  };

  const formataTipo = (transferencia) => {
    if (transferencia.tipo === "DEPOSITO") {
      return "Depósito";
    }

    if (transferencia.tipo === "SAQUE") {
      return "Saque";
    }

    if (Number(transferencia.valor) > 0) {
      return "Transferência Entrada";
    }

    return "Transferencia Saída";
  };

  const saldo = (transferencias) => {
    return transferencias.reduce((soma, transferencia) => {
      return soma + Number(transferencia.valor);
    }, 0).toFixed(2);
  };

  return (
    <>
      <table>
        <thead>
          <tr>
            <th colSpan={4}><pre>{"Saldo Total: R$ " +
              saldo(todasTransferencias) +
              "\t\tSaldo no período: " +
              saldo(transferenciasSelecionadas)}</pre>
          </th></tr>
          <tr>
            <td>Dados</td>
            <td>Valentia</td>
            <td>Tipo</td>
            <td>Nome operador transacionado</td>
          </tr>
        </thead>
        <tbody>
          {transferenciasSelecionadas.map((transferencia) => {
            return (
              <tr key={transferencia.id}>
                <td>{formataData(transferencia.dataTransferencia)}</td>
                <td>{"R$ " + transferencia.valor}</td>
                <td>{formataTipo(transferencia)}</td>
                <td>{transferencia.conta.nomeResponsavel}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default TabelaTransferencias;
