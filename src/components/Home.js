import React from 'react';
import './carousel.js';

const Home = () => {
  return (
    <main>
      <section id="galeria">
        <h2>Galeria</h2>
        <div className="carousel">
          <button className="prev">&#10094;</button>
          <div className="carousel-images">
            <img src="img/Imagem 1.jpg" alt="Imagem 1" className="active" />
            <img src="img/Imagem 2.jpg" alt="Imagem 2" />
            <img src="img/Imagem 3.jpg" alt="Imagem 3" />
            <img src="img/Imagem 4.jpg" alt="Imagem 4" />
            <img src="img/imagem 10.jpg" alt="Imagem 5" />
            <img src="img/imagem 11.jpg" alt="Imagem 6" />
            <img src="img/imagem 12.jpg" alt="Imagem 7" />
          </div>
          <button className="next">&#10095;</button>
        </div>
      </section>

      <section id="agendamento">
        <h2>Agendamento</h2>
        <section
          className="embed-container"
          data-slug="cardetail"
          data-url="https://www.gendoou.com/"
        ></section>
        <script
          type="text/javascript"
          src="https://www.gendoou.com/assets/embed/embed.js"
        ></script>
        <a href="https://www.gendoou.com/cardetail">
          <button type="submit">Agendar</button>
        </a>
      </section>
    </main>
  );
};

export default Home;
