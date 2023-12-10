



 let characters



fetch('http://localhost:3000/characters')
    .then(data=>{
        return data.json()
    })
    .then(data=>{
         
          characters = data
          
        
          
        
       
    })

    
    const form = document.querySelector('#search_form')
  

  
    form.addEventListener('submit',(event)=>{
     
        event.preventDefault()
      
        // console.log(characters)
        //Step 1
        //Capture user input-this will be a characters name.
        const userInput = document.querySelector('#mySearch').value                
        
        console.log(userInput)
        //Step 2
    //     //Access the characters array and iterate through it using the find method.
    const narutoCharacters = characters.find(character=>character.name=== userInput)
    console.log(narutoCharacters)
   
    
    
    
   



       

        

      
        
        //Step 3



        //to check each objects name attribute and see if it matches the array of the user input.  
        //Step 4

        // Display character details
       
  
    })

  
//     fetch('http://naruto.json')
//     .then(response => response.json())
//     .then(data => console.log(data))
//     .catch((error) => console.error('Error:', error));



// let narutoData = JSON.parse(naruto)

// let myArray = narutoData
// myArray.map(item => {
//     console.log(item);
//    });

    
// fetch('http://localhost:3000/characters')
//  .then(response => response.json())
//  .then(data => console.log(data[0].personal))
//  .catch(error => console.log('Error:', error));
    
//  fetch('http://localhost:3000/characters')
//  .then(response => response.json())
//  .then(data => {
//   const characterName = 'Ten-Tails';
//   const character = data.find(item => item.name === characterName);
//   console.log(character);
//  })
//  .catch(error => console.error('Error:', error));


// yes
// Submit



//   const url = 'http://localhost:3000/characters'


// async function getData(){
//     const response = await fetch (url)
//     const data = response.json()
//     console.log(data);
// }


// getData()



// document.getElementById('mySearch').addEventListener('input', function(event) {

//     let character = event.target.value
//     console.log(character);
    
//   });















   

































