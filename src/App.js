import './App.css';
import adulto from "./imagenes/adulto.jpg";
import niños from "./imagenes/niños.jpg";
import jovenes from "./imagenes/jovenes.jpg";

import facebook from "./imagenes/logo-facebook.png";
import instagram from "./imagenes/logo-instagram.png";
import twiter from "./imagenes/Twitter-X.jpg";

function App() {
  return (
    <div className="App">
    <header className="App-header">
      <div>
        <p>Articulos deportivos Vladimiro</p>
      </div>
      <div>
        <div>
          <nav>
            <a href="#ini">Inicio</a>
            <a>Hombre</a>
            <a>Mujeres</a>
            <a>Niños</a>
            <a href="#con">Contacto</a>
          </nav>
        </div>
      </div>
    </header>
    <br></br>
    <main>
      <div>
        <a name="ini"></a>
        <div>
          <h1>La mejor tienda de Bolivia</h1>
          <br/>
          <h3>¿Quieres vestir a la moda? !Visitanos¡ </h3>
        </div>
        <div className='car'>
          <div className='Modelo'><img src={adulto} alt='1'/><div className='descripcion'><h3>Deportivos para adultos</h3></div></div>
          <div className='Modelo'><img src={niños} alt='2'/><div className='descripcion'><h3>Deportivos para niños</h3></div></div>
          <div className='Modelo'><img src={jovenes} alt='3'/><div className='descripcion'><h3>Deportivos para jovenes</h3></div></div>
        </div>
        <br/>
        <div className='video'><iframe width="560" height="315" src="https://www.youtube.com/embed/DS0FNFDhYXE?si=cj6DCRCPY-WlOLuE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div>
        
      </div>
      <br></br>
      
    </main>
    <div>
        <a name="con"></a>
        <h2>Realize su pedido <a href="https://cosmic-arithmetic-ed98d1.netlify.app">aqui</a></h2>
        <h3>Informacion</h3>
        <p>Vladimr Ivan Daza Gomez</p>
        <br/>
        <p>C.I:12482077</p>
        <br/>
    </div>
      
    <footer>
      <div className='logos'>
        <img src={facebook} alt='4'/>
        <img src={instagram} alt='5'/>
        <img src={twiter} alt='6'/>
      </div>
      <div className='inf'>
        <p>Ave. Antonio Gallardo Nro"7"</p>
        <p>Zona Franz Tamayo</p>
      </div>

    </footer>
    </div>
  );
}

export default App;
