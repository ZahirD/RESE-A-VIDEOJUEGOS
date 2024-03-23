// Simulación de reseñas de videojuegos
const reseñas = [
 {
  nombre: 'Usuario1',
  opinión: 'Este juego es increíble. Me encanta la jugabilidad y los gráficos.',
 },
 {
  nombre: 'Usuario2',
  opinión:
   'No me gustó mucho este juego. La historia es aburrida y los controles son confusos.',
 },
]

const reseñasContainer = document.getElementById('reseñas-container')

// Función para mostrar las reseñas en la página
function mostrarReseñas() {
 reseñasContainer.innerHTML = ''
 reseñas.forEach((reseña) => {
  const div = document.createElement('div')
  div.classList.add('reseña')
  div.innerHTML = (
   <>
    <h3> $ {reseña.nombre}</h3>
    <p>${reseña.opinión}</p>
   </>
  )
  reseñasContainer.appendChild(div)
 })
}
// Mostrar las reseñas al cargar la página
mostrarReseñas()

// Manejar el envío del formulario de opinión
const opinarForm = document.getElementById('opinar-form')
opinarForm.addEventListener('submit', function (event) {
 event.preventDefault()
 const nombre = document.getElementById('nombre').value
 const opinion = document.getElementById('opinion').value
 reseñas.push({ nombre: nombre, opinión: opinion })
 mostrarReseñas()
 opinarForm.reset()
})
