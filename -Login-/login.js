
const usuarios= [
    {id: 1, usuario:'usuario1', clave:'1234'},
    {id: 2, usuario:'usuario2', clave:'5678'},
    {id: 3, usuario:'usuario3', clave:'9101'},
    {id: 4, usuario:'usuario4', clave:'1121'},
    {id: 5, ususario:'usuario5',clave:'3141'},

]
const ingreso= usuario.find (u=> u.usuario === usuario)
const intentosFallidos=JSON.parse(localStorage.getItem('intentosfallidos'))|| {}


if(logeo.clave!==clave){

}

function intentosFallidos(usuario) {
    intentosFallidos[usuario]=(intentosFallidos[usuario] || 0)+1
    localStorage.setItem('intentosFallidos',JSON.stringify(intentosFallidos)) 
}

function cargarIntentos() {
    
    const intentos = localStorage.getItem ('intentos'),
    return intentos ? JSON.parse ('intentos'):{}
}

function iniciarSesion(ususario,clave) {
    const intentos= cargarIntentos(),
    if(intentos[usuario]&& intentos[usuario].bloqueado){
        alert('Su usuario ha sido bloqueado.'),
        return;

    }
    const usuarioEncontrado = usuarios.find(u=>u.usuario === usuario && u.clave === clave);
    if (usuarioEncontrado){
        alert('Bienvenido');
        guardarIntentos('intentos')
    } else{
        aler('usuario o clave incorrectos');
        if(!intentos[usuario]){
            intentos[usuario]={count 0, bloqueado:false};

        }
        intentos[usuario].count+=1;
    
    }
    if (intentos[usuario].count>=3) {
        intentos[usuario].bloqueado=true;
        alert('Usuario bloqueado');
        
    }
    guardarIntentos('intentos');
}