let characters = []; 

document.addEventListener('DOMContentLoaded', () => {
 fetch('http://localhost:3000/characters')
   .then(data => {
     return data.json();
   })
   .then(data => {
     characters = data;
   });
});








    
    const form = document.querySelector('#search_form')
    form.addEventListener('submit',(event)=>{
     
        event.preventDefault()
      
        console.log(characters)
        
        const userInput = document.querySelector('#mySearch').value                
         console.log(userInput)  
      
     
    const narutoCharacters = characters.find(character=>character.name=== userInput)
     console.log(narutoCharacters)
 })

    
    //    // Step 3



    
 
    form.addEventListener('submit',(event)=>{
        event.preventDefault()
        const userInput = document.querySelector('#mySearch').value              
        const narutoCharacters = characters.filter(character=>character.name.includes(userInput))
        const resultsDiv = document.querySelector('#results');
        resultsDiv.innerHTML = ''; // Clear previous results
        narutoCharacters.forEach(character => {
            const characterDiv = document.createElement('div');
            characterDiv.innerHTML = `
                <h2>${character.name}</h2>
                <p> Jutsu: ${character.jutsu}</p>
                <p> Nature Type: ${character.natureType}</p>
                <p> Unique Triats: ${character.uniqueTraits}</p>
                <img src="${character.images}" alt="${character.name}">

            `;
            resultsDiv.appendChild(characterDiv);
        });
      });
      
     
    
