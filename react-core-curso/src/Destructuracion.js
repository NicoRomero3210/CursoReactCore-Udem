/*Basicamente con la destructuracion podemos sacar los valores de un objeto o array de forma mas legible
ya que pedimos el atributo entre llaves y los usamos como si fueran ctes o vbles dependiendo de como los
declaremos. Ahi pongo varios ejemplos de como tomar los datos de un objeto dentro de otro, o de mas de un
elemento de un array.*/

const user = {
    nombre:'Richar',
    apellido:'Asspero',
    domicilio:{
        Pais: 'Colombia',
        Calle:'Rivadavia',
        Numero:'1564'
    }
}

const saluda = (user) => {

    const {nombre:nombreGay,apellido,domicilio/*,Domicilio:{Numero:Numerito}*/} = user
    const {Calle} = domicilio //Si se ponen como var entonces dentro de las llaves podemos modificar el valor de esos atributos que traemos
    //con los dos puntos renombro el atributo asi no se llama igual que el del objeto

    const array1 = ['pizza','coca','birra',12,15,16];
    //const [comida,bebidaGay,bebidaPosta,num] = array1
    const [comida,bebidaGay,bebidaPosta, ...restantes] = array1

    //console.log(`Hola men me llamo ${nombreGay} ${apellido}, vivo en ${calle} al ${Numerito}`)
    console.log(`Hola men me llamo ${nombreGay} ${apellido}, vivo en ${Calle}`)
    console.log(comida,bebidaGay,restantes)


}

saluda(user)