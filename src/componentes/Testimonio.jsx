import React from 'react';

function Testimonio(){
   return (
    <div ClassName='contenedor-testimonio'>
     <img ClassName='imagen-testimonio' src={require('../imagenes/testimonio-emma.png')} alt='foto de emma' />
     <div ClassName='contenedor-texto-testimonio'>
       <p ClassName='nombre-testimonio'>Emma Boastian en Suecia</p>
       
       <p ClassName='cargo-testimonio'>Ingenieria de Software en Spotify</p>

       <p ClassName='texto-testimonio'>"Siempre he tenido problemas para aprender JavaScript. He tomado muchos cursos, pero el curso de freeCodeCamp fue el que se quedó. Estudiar JavaScript, así como estructuras de datos y algoritmos en freeCodeCamp me dio las habilidades y la confianza que necesitaba para conseguir el trabajo de mis sueños como ingeniero de software en Spotify."</p>
     </div>
    </div>
   );
};

export default Testimonio;