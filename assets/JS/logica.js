const URL_BASE = 'https://swapi.dev/';
const URL_PEOPLE = "https://swapi.dev/api/people";
//const URL_PRIMARIOS = ['https://swapi.dev/people/1/', 'https://swapi.dev/people/2/', 'https://swapi.dev/people/3/', 'https://swapi.dev/people/4/', 'https://swapi.dev/people/5/'];
 

function* urlGenerator() {
    const urls = [
      'https://swapi.dev/api/people/1/',
      'https://swapi.dev/api/people/2/',
      'https://swapi.dev/api/people/3/',
      'https://swapi.dev/api/people/4/',
      'https://swapi.dev/api/people/5/'
    ];
  
    while (true) {
      for (const url of urls) {
        yield fetch(url)
          .then(response => response.json())
          .catch(error => console.log(`Error fetching ${url}:`, error));
      }
    }
  }
  
  const generator = urlGenerator();
  
  document.addEventListener("DOMContentLoaded", async () => {
    const cartaElement = document.getElementById("carta");
    const boton = document.getElementById("boton");
  
    boton.addEventListener('mouseover', handleMouseOver);
  
    function handleMouseOver(event) {
        const result = generator.next(); // Obtener el resultado de la llamada al generador
      
        if (!result.done) {
          result.value
            .then(data => {
              const { name, height, mass } = data; // Obtener el nombre, estatura y peso del objeto JSON
      
              // Formatear el contenido a mostrar
              const content = `Nombre: ${name}<br>
                               Estatura: ${height}<br>
                               Peso: ${mass}`;
      
              // Actualizar el contenido del elemento con la información obtenida
              cartaElement.innerHTML = content;
            })
            .catch(error => console.log('Error:', error));
        }}
      })
  
  //SEGUNDO GENERADOR
  function* urlGenerator1() {
    const urlss = [
      'https://swapi.dev/api/people/6/',
      'https://swapi.dev/api/people/7/',
      'https://swapi.dev/api/people/8/',
      'https://swapi.dev/api/people/9/',
      'https://swapi.dev/api/people/10/'
  ];
    
       
    for (const url of urlss) {
    yield fetch(url)
        .then(response => response.json())
        .then(data => data)
        .catch(error => console.log(`Error fetching ${url}:`, error));
      
    }
    
}

const generator1 = urlGenerator1();
  
  document.addEventListener("DOMContentLoaded", async () => {
    const carta2Element = document.getElementById("carta2");
    const boton2 = document.getElementById("boton2");
  
    boton2.addEventListener('mouseover', handleMouseOverOne);
  
    function handleMouseOverOne(event) {
        const result = generator1.next(); // Obtener el resultado de la llamada al generador
      
        if (!result.done) {
          result.value
            .then(data => {
              const { name, height, mass } = data; // Obtener el nombre, estatura y peso del objeto JSON
      
              // Formatear el contenido a mostrar
              const content = `Nombre: ${name}<br>
                               Estatura: ${height}<br>
                               Peso: ${mass}`;
      
              // Actualizar el contenido del elemento con la información obtenida
              carta2Element.innerHTML = content;
            })
            .catch(error => console.log('Error:', error));
        }}
      })
  



  //TERCER GENERADOR
  function* urlGenerator3() {
    const urlsss = [
      'https://swapi.dev/api/people/11/',
      'https://swapi.dev/api/people/12/',
      'https://swapi.dev/api/people/13/',
      'https://swapi.dev/api/people/14/',
      'https://swapi.dev/api/people/15/'
    ];
  
    for (const url of urlsss) {
      yield fetch(url)
        .then(response => response.json())
        .then(data => data)
        .catch(error => console.log(`Error fetching ${url}:`, error));
    }
  }
  
  const generator3 = urlGenerator3();
  
  document.addEventListener("DOMContentLoaded", async () => {
    const carta3Element = document.getElementById("carta3");
    const boton3 = document.getElementById("boton3");
  
    boton3.addEventListener('mouseover', handleMouseOverTwo);
  
    function handleMouseOverTwo(event) {
        const result = generator3.next(); // Obtener el resultado de la llamada al generador
      
        if (!result.done) {
          result.value
            .then(data => {
              const { name, height, mass } = data; // Obtener el nombre, estatura y peso del objeto JSON
      
              // Formatear el contenido a mostrar
              const content = `Nombre: ${name}<br>
                               Estatura: ${height}<br>
                               Peso: ${mass}`;
      
              // Actualizar el contenido del elemento con la información obtenida
              carta3Element.innerHTML = content;
            })
            .catch(error => console.log('Error:', error));
        }}
      })
  



