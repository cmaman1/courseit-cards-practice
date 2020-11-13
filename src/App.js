import './App.css';
import Card from './components/Card'
import Title from './components/Title'

function App() {
  return <div className="App">
    <Title content="Propuesta de Valor"></Title>
    <div className="cards-container">
      <Card imgUrl="https://courseit.io/static/vp-online.svg" title="CURSÁ COMO QUIERAS" description="Tenemos propuestas presenciales, 100% remotas o mixtas."></Card>
      <Card imgUrl="https://courseit.io/static/vp-play.svg" title="PLATAFORMA INTERACTIVA" description="Poné a prueba tu conocimiento o practicá con las distintas actividades que te proponemos."></Card>
      <Card imgUrl="https://courseit.io/static/vp-mentorship.svg" title="TE ACOMPAÑAMOS" description="Un equipo de trabajo especializado te acompaña durante toda la cursada"></Card>
    </div>

  </div>;
}

export default App;
