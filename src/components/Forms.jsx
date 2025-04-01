import { useState } from "react";


 export default function Index () {
const grupos = [
    { id: 'agrovid', name: 'Agrovid', fincas: ['Bocatoma', 'Teresa', 'Circasia'] },
    { id: 'agroterra', name: 'Agros', fincas: ['Vijagual', 'San Pedro', 'Ceiba'] },
    { id: 'agroplus', name: 'Banarica', fincas: ['Maria Luisa', 'San Francisco', 'California'] },
  ];

  // Estado para manejar los valores del formulario
  const [grupoSeleccionado, setGrupoSeleccionado] = useState('');
  const [fincaSeleccionada, setFincaSeleccionada] = useState('');
  const [tecnologiaSeleccionada, setTecnologiaSeleccionada] = useState('');

  // Filtrar las fincas según el grupo seleccionado
  const grupo = grupos.find(g => g.id === grupoSeleccionado);
  const fincas = grupo ? grupo.fincas : [];

  // Función para manejar cambios en el grupo seleccionado
  const manejarGrupoCambio = (e) => {
    setGrupoSeleccionado(e.target.value);
    setFincaSeleccionada(''); // Resetear finca al cambiar grupo
  };

  // Función para manejar el envío del formulario
  const manejarEnvio = (e) => {
    e.preventDefault();
    alert(`Grupo: ${grupoSeleccionado}, Finca: ${fincaSeleccionada}, Tecnología: ${tecnologiaSeleccionada}`);
  };

  return (
    <div className="container">
        <header className="header">
            <h1 className="text-center">Formulario Agroindustria</h1>
        </header>
      <form onSubmit={manejarEnvio}>
        <div className="form-group">
        <label htmlFor="grupo">Selecciona un Grupo:</label>
        <select className="form-control" id="grupo" value={grupoSeleccionado} onChange={manejarGrupoCambio}>
          <option value="">Seleccione un grupo</option>
          {grupos.map(grupo => (
            <option key={grupo.id} value={grupo.id}>{grupo.name}</option>
          ))}
        </select>
        </div> 
        
        <div className="form-group">x
        <label htmlFor="finca">Selecciona una Finca:</label>
        <select
        className="form-control"
          id="finca"
          value={fincaSeleccionada}
          onChange={(e) => setFincaSeleccionada(e.target.value)}
          disabled={!grupoSeleccionado}
        >
          <option value="">Seleccione una finca</option>
          {fincas.map((finca, index) => (
            <option key={index} value={finca}>{finca}</option>
          ))}
        </select>
        </div>

        <div className="form-grouo">        <label htmlFor="tecnologia">Selecciona una Tecnología:</label>
        <select
        className="form-control"
          id="tecnologia"
          value={tecnologiaSeleccionada}
          onChange={(e) => setTecnologiaSeleccionada(e.target.value)}
        >
          <option value="">Seleccione una tecnología</option>
          <option value="riego">Riego</option>
          <option value="fertilizacion">Fertilización</option>
          <option value="pesticidas">Pesticidas</option>
        </select>
        </div>

        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}