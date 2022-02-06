import React, { useState } from 'react'; //Importamos React junto con los useState desde React.
import './App.css'; //Importamos nuestro documento de estilos en formato .css

//Esta función ya viene definida por defecto al momento de crear un App con React.Js la cual utilizaremos.
function App() {
  const [nombre, setNombre] = useState(""); //Asiganamos las constantes que nos ayudaran para ahacer el cambio 
  const [vehiculo, setVehiculo] = useState(""); //de caracteres en cada campo del formulario utilizando el useState
  const [modelo, setModelo] = useState("");
  const [placas, setPlacas] = useState("");
  const [numero, setNumero] = useState("");
  const [origen, setOrigen] = useState("");
  const [destino, setDestino] = useState("");

  const cambiarNombre = (e) => { //Creamos las constantes que utilizaremos para validar el cambio de caracteres
    const value = e.target.value; //Asignamos la cosnstante y el value con el target del value
    console.log(value); //Le pedimos que nos muestre los resultados tecleados en consola con el console.log
    const minValue = value.length>12; //Asignamos la constante del valor minimo la cual se validara en consola
    const maxValue = value.length<36; //Asignamos la constante del valor maximo la cual se validara en consola
    const onliLet = /^[a-zA-Z\s]*$/g.test(value); //Asignamos la constante que solo permitira liteales en el campo la cual se validara en consola

    console.log("min", minValue); //Validamos en consola el valor minimo
    console.log("maxValue", maxValue); //Validamos en consola el valor maximo
    console.log("onliLet", onliLet); //Validamos en consola solo literales

    setNombre(value); //Corroboramos el valor del cambio de nombre
  };

  const cambiarVehiculo = (e) => { //Creamos la constante la constate que utilizaremos para validar el cambio de carcateres
    const value = e.target.value; //Asignamos la cosnstante y el value con el target del value
    console.log(value); //Le pedimos que nos muestre los resultados tecleados en consola con el console.log
    const minValue = value.length>12; //Asignamos la constante del valor minimo la cual se validara en consola
    const maxValue = value.length<24; //Asignamos la constante del valor maximo la cual se validara en consola
    const onliLet = /^[a-zA-Z\s]*$/g.test(value); //Asignamos la constante que solo permitira liteales en el campo la cual se validara en consola

    console.log("min", minValue); //Validamos en consola el valor minimo
    console.log("maxValue", maxValue); //Validamos en consola el valor maximo
    console.log("onliLet", onliLet); //Validamos en consola solo literales

    setVehiculo(value); //Corroboramos el valor del cambio de vehiculo
  };

  const cambiarModelo = (e) => { //Creamos la constante la constate que utilizaremos para validar el cambio de carcateres
    const value = e.target.value; //Asignamos la cosnstante y el value con el target del value
    console.log(value); //Le pedimos que nos muestre los resultados tecleados en consola con el console.log
    const minValue = value.length>2; //Asignamos la constante del valor minimo la cual se validara en consola
    const maxValue = value.length<4; //Asignamos la constante del valor maximo la cual se validara en consola
    const onliLet = /^[0-9\s]*$/g.test(value); //Asignamos la constante que solo permitira números en el campo la cual se validara en consola

    console.log("min", minValue); //Validamos en consola el valor minimo
    console.log("maxValue", maxValue); //Validamos en consola el valor maximo
    console.log("onliLet", onliLet); //Validamos en consola solo números

    setModelo(value); //Corroboramos el valor del cambio de modelo
  };

  const cambiarPlacas = (e) => { //Creamos la constante la constate que utilizaremos para validar el cambio de carcateres
    const value = e.target.value; //Asignamos la cosnstante y el value con el target del value
    console.log(value); //Le pedimos que nos muestre los resultados tecleados en consola con el console.log
    const minValue = value.length>3; //Asignamos la constante del valor minimo la cual se validara en consola
    const maxValue = value.length<10;  //Asignamos la constante del valor maximo la cual se validara en consola
    const onliLet = /^[a-zA-Z-0-9\s]*$/g.test(value); //Asignamos la constante que solo permitira literales & números en el campo la cual se validara en consola

    console.log("min", minValue); //Validamos en consola el valor minimo
    console.log("maxValue", maxValue); //Validamos en consola el valor maximo
    console.log("onliLet", onliLet); //Validamos en consola números & literales

    setPlacas(value); //Corroboramos el valor del cambio de placas
  };

  const cambiarNumero = (e) => { //Creamos la constante la constate que utilizaremos para validar el cambio de carcateres
    const value = e.target.value; //Asignamos la cosnstante y el value con el target del value
    console.log(value); //Le pedimos que nos muestre los resultados tecleados en consola con el console.log
    const minValue = value.length>10; //Asignamos la constante del valor minimo la cual se validara en consola
    const maxValue = value.length<13; //Asignamos la constante del valor maximo la cual se validara en consola
    const onliLet = /^[0-9\s]*$/g.test(value); //Asignamos la constante que solo permitira números en el campo la cual se validara en consola

    console.log("min", minValue); //Validamos en consola el valor minimo
    console.log("maxValue", maxValue); //Validamos en consola el valor maximo
    console.log("onliLet", onliLet); //Validamos en consola solo números


    setNumero(value); //Corroboramos el valor del cambio de placas
  };

  const cambiarOrigen = (e) => { //Creamos la constante la constate que utilizaremos para validar el cambio de carcateres
    const value = e.target.value; //Asignamos la cosnstante y el value con el target del value
    console.log(value); //Le pedimos que nos muestre los resultados tecleados en consola con el console.log
    const minValue = value.length>24; //Asignamos la constante del valor minimo la cual se validara en consola
    const maxValue = value.length<50; //Asignamos la constante del valor maximo la cual se validara en consola
    const onliLet = /^[a-zA-Z\s]*$/g.test(value); //Asignamos la constante que solo permitira literales en el campo la cual se validara en consola

    console.log("min", minValue); //Validamos en consola el valor minimo
    console.log("maxValue", maxValue); //Validamos en consola el valor maximo
    console.log("onliLet", onliLet); //Validamos en consola solo números

    setOrigen(value); //Corroboramos el valor del cambio de origen
  };

  const cambiarDestino = (e) => { //Creamos la constante la constate que utilizaremos para validar el cambio de carcateres
    const value = e.target.value; //Asignamos la cosnstante y el value con el target del value
    console.log(value); //Le pedimos que nos muestre los resultados tecleados en consola con el console.log
    const minValue = value.length>24; //Asignamos la constante del valor minimo la cual se validara en consola
    const maxValue = value.length<50; //Asignamos la constante del valor maximo la cual se validara en consola
    const onliLet = /^[a-zA-Z\s]*$/g.test(value); //Asignamos la constante que solo permitira literales en el campo la cual se validara en consola

    console.log("min", minValue); //Validamos en consola el valor minimo
    console.log("maxValue", maxValue); //Validamos en consola el valor maximo
    console.log("onliLet", onliLet);  //Validamos en consola solo números

    setDestino(value); //Corroboramos el valor del cambio de origen
  };

  const enviar = () =>{
    alert("Informe de petición de servicio de grúa de: " + nombre + " número celular: " + numero + ", Para un vehiculo: " + vehiculo + " " + + modelo + " " + placas);
  }; //Creamos la constante la cual servira en función con el onClick del boton y nos enviara la compilación de los datos del usuario mostrandolos en un alert para confirmar

  return (
    <div className='contenedor-principal'> {/ utilizando la etiqueta de <div> creamos el contenedor principal, al cual le asignamso su respectiva clase/}
      <div className='contenedor-cabecera'> {/ Abrimos de nuevo una etiqueta <div> a la cual le asignamos la clase de contenedor de cabecera /}
        <h1 className='titulo-principal'>Servicio de Grúa</h1> {/ Dentro del contenedor-cabecera agregamos el titulo principal del proyecto /}
      </div>
      <div className='cuerpo'> {/ Dentro del contenedor-principal agregamos una nueva etiqueta <div> y asignamos la clase de cuerpo /}
      <h1 className='titulo-dos'>Petición de servicio de grúa</h1> {/ Dentro del cuerpo asignamos un <h1> el cual llamaremos titulo-dos para asignar su respectivo titulo/}
        <div className='contenedor-formulario'> {/ Agregamos una nueva etiqueta <div> y le asignamos la clase de contenedor-formulario /}
      <label className='label-uno'>Nombre: </label> {/ Dentro del contenedor-formulario agregamos todos los label e input que necesitaremos, sin olvidar asignarle su respectiva etiqueta /}
      <input className='input-uno' id="nombre" name="nombre" value={nombre} onChange={cambiarNombre} placeholder='Dhalia Alana'></input> {/ Tomando como referencia este input el cual sigue la misma base que los demas, en donde colocamos su id, name, value, onChange, inluso el placeholder designado para cada campo /}
      <label className='label-dos'>Vehiculo: </label>
      <input className='input-dos' type="text" id = 'vehiculo' name = 'vehiculo' value={vehiculo} onChange={cambiarVehiculo} placeholder='Chevrolet Suburban'></input>
      <label className='label-tres'>Modelo: </label>
      <input className='input-tres' type="number" id = 'modelo' name = 'modelo' value={modelo} onChange={cambiarModelo} placeholder='2005'></input>
      <label className='label-cuatro'>Placas: </label>
      <input className='input-cuatro' type="text" id = 'placas' name = 'placas' value={placas} onChange={cambiarPlacas} placeholder='CZY-98-65'></input>
      <label className='label-cinco'>Origen: </label>
      <input className='input-cinco' type="text" id = 'origen' name = 'origen' value={origen} onChange={cambiarOrigen} placeholder='Col. El Zcatal C. Rochin'></input>
      <label className='label-seis'>Destino: </label>
      <input className='input-seis' type="text" id = 'destino' name = 'destino' value={destino} onChange={cambiarDestino} placeholder='Agencia Chevrolet'></input>
      <label className='label-siete'>Telefono: </label>
      <input className='input-siete' type="number" id = 'numero' name = 'numero' value={numero} onChange={cambiarNumero}  placeholder='+52-xxx-xxx-xxxx'></input>
      <nav className='contenedor-menu'> {/ Llegamos a este punto y asignamos a una <nav> la clase de contenedor-menu /}
      <div className="contenido-menu"><span className="texto-menu">Enviar</span><button onClick={enviar} id='work' type="button" name="Hover"><a href="index.html"><i className="icono-enviar fas fa-share-square"></i></a></button></div> {/ Dentro del <nav> agregamos un nuevo <div> en el cual introducimos un <button> y dentro de este una <a> y por ultimo un <i> /}
      {/ los atributos anteriores del boton y de la etiqueta <span> nos serviran para llevar a cabo el proceso de enviado del formulario, y para formular una bonita animación con el boton, el cual es reciclado por mi desde un proyecto personal /}
      </nav>
        </div>
        <div className='contenedor-texto-uno'> {/ Asignamos un nuevo <div> debajo del contenedor-principal con la clase de contenedor-texto-uno/}
        <p className='texto-uno'> {/ Dentro del contenedor-texto-uno asignamos la etiqueta <p> con la clase de texto-uno en la cual introduciremos un texto referente al compromiso de la empresa dueña del sitio web con los clientes /}
                  En Grúas Amador proporcionamos servicios de transporte de vehículos y maniobras. 
                  Nos enfocamos en satisfacer las necesidades de nuestros clientes brindándoles un servicio rápido y profesional,
                  a la vez que ofrecemos seguridad y confianza en el transporte de vehículos y maniobras bajo condiciones 
                  controladas.</p>
        </div>
      </div>
    </div>
  );
}

export default App; //Exportamos el App
