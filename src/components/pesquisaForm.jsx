const PesquisaForm = () => {
  return (
    <form className="form">
      <div className="search-form">
        <div className="form-control">
          <label>Data de Inicio:</label>
          <input type="date" />
        </div>
        <div className="form-control">
          <label>Data de Fim:</label>
          <input type="date" />
        </div>
        <div className="form-control">
          <label>Nome operador transacionado:</label>
          <input className="text-input" type="text" />
        </div>
      </div>
      <div className="submit-div">
        <input type="submit" value="Pesquisa" className="btn" />
      </div>
    </form>
  );
};

export default PesquisaForm;
