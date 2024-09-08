let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
 cursor: "<span style='color: #fb4993;'>|</span>",
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style="color:#b6938c ;">Estudiante de Ingeniería en Tecnologías de la Información y Comunicaciones </span>')
  .pauseFor(200)
  .deleteChars(5)
  .start();