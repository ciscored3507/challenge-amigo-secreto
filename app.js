// Array vacío para almacenar los nombres de los amigos
let amigos = [];

function agregarAmigo() {
    // Obtener el elemento de entrada con el id 'amigo'
    let amigo = document.getElementById('amigo');
    // Verificar si el valor del campo de entrada está vacío
    if (amigo.value == '') {
        // Mostrar una alerta si el campo está vacío
        alert('Por favor, inserte un nombre.');
        return;
    }
    // Verificar si el nombre del amigo ya ha sido añadido
    if (amigos.includes(amigo.value)) {
        // Mostrar una alerta si el nombre ya está en la lista
        alert('Nombre ya añadido.');
        return;
    }
    // Obtener el elemento de la lista con el id 'listaAmigos'
    let lista = document.getElementById('listaAmigos');
    // Añadir el nombre del amigo al array
    amigos.push(amigo.value);
    // Crear un nuevo elemento de lista
    let nuevoElemento = document.createElement('li');
    // Establecer el texto del nuevo elemento como el nombre del amigo
    nuevoElemento.textContent = amigo.value;
    // Añadir el nuevo elemento a la lista
    lista.appendChild(nuevoElemento);
    // Vaciar el campo de entrada
    amigo.value = '';
} 

function sortearAmigo() {
    // Verificar si hay al menos 4 amigos en la lista
    if (amigos.length < 4) {
        // Mostrar una alerta si hay menos de 4 amigos
        alert('Cantidad mínima de amigos: 4');
        return;
    }
    // Obtener el elemento con el id 'resultado'
    let sorteo = document.getElementById('resultado');
    // Limpiar cualquier resultado anterior
    sorteo.innerHTML = '';
    // Seleccionar un amigo al azar de la lista
    const amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)];
    // Mostrar el nombre del amigo sorteado en el elemento 'resultado'
    sorteo.innerHTML = 'El amigo secreto sorteado es: ' + amigoSorteado;
    // Vaciar la lista de amigos
    amigos = [];
    // Obtener el elemento de la lista con el id 'listaAmigos'
    let lista = document.getElementById('listaAmigos');
    // Limpiar la lista de amigos
    lista.innerHTML = '';
}