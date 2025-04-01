
function App() {

  return (
    <div className="container">
    <header className="header">
      <h1 id="title" className="text-center">Registro de informacion</h1>
    </header>
    <form id="survey-form">
      {/* grupos de fincas  */}
      <div className="form-group">
        <p>Seleciona un grupo :</p>
        <select id="most-like" name="mostLike" class="form-control" required>
          <option disabled selected value>Grupos</option>
          <option value="Agrovid">Agrovid</option>
          <option value="Banarica">Banarica</option>
          <option value="Agros">Agros</option>
        </select>
      </div>
      
      {/* fincas  */}

      <div className="form-group">
        <p>Seleciona un grupo :</p>
        <select id="most-like" name="mostLike" class="form-control" required>
          <option disabled selected value>Grupos</option>
          <option value="Agrovid">Agrovid</option>
          <option value="Banarica">Banarica</option>
          <option value="Agros">Agros</option>
        </select>
      </div>

      {/* Tecnologias  */}

      <div className="form-group">
        <p>Seleciona un grupo :</p>
        <select id="most-like" name="mostLike" class="form-control" required>
          <option disabled selected value>Grupos</option>
          <option value="Agrovid">Agrovid</option>
          <option value="Banarica">Banarica</option>
          <option value="Agros">Agros</option>
        </select>
      </div>
 
      <div className="form-group">
        <button type="submit" id="submit" class="submit-button">
          Submit
        </button>
      </div>
    </form>
  </div>
  )
}

export default App
