/* 

Los hooks solo pueden estar en el cuerpo de la funcion, es decir, en el primer nivel, no pueden estar dentro de 
condicionales in de constantes foo ni de funciones, a menos que se sean hooks personalizados, los cuales son 
funciones que se identifican anteponiendo la palabra use, por ejemplo

cons useHook = () => {

    const [clicks, setClicks] = useState(1)  

}

*/