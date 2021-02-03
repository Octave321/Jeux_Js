document.addEventListener( 'DOMContentLoaded', () => { 

  let mikey = document.querySelector(".img_mikey")

  var timerElt = document.getElementById('timer');
  var counter = 30;


  let positionMikey = randomPosition( mikey)
    mikey.style.top = positionMikey[1]+"px"
    mikey.style.left = positionMikey[0]+"px"

    
    let popup3 = document.querySelector("#popup3")
  
  let easy = document.querySelector('.easy')
  let medium = document.querySelector('.medium')
  let hard = document.querySelector('.hard')

  easy.addEventListener('click', () =>{
    popup.style.display = "none"

    var timer = setInterval(() => {
        timerElt.innerText = counter;
        counter--; 
      if(counter === 0){
          setTimeout(() => {
              timerElt.innerText = "La partie est finie! Temps écoulé!";
              popup3.style.display = "block"
              clearInterval(timer);
          }, 1000);              
      }      
    }, 1000);

      setInterval(() => {
        let positionMikey = randomPosition( mikey)
          mikey.style.top = positionMikey[1]+"px"
          mikey.style.left = positionMikey[0]+"px"
      },5000)

  })


  medium.addEventListener('click', () => {
    popup.style.display = "none"

    var timer = setInterval(() => {
          timerElt.innerText = counter;
          counter--; 
        if(counter === 0){
            setTimeout(() => {
                timerElt.innerText = "La partie est finie! Temps écoulé!";
                popup3.style.display = "block"
                clearInterval(timer);
            }, 1000);          
        }
    }, 1000);

    setInterval(() => {
      let positionMikey = randomPosition( mikey)
        mikey.style.top = positionMikey[1]+"px"
        mikey.style.left = positionMikey[0]+"px"
    },3000)
  })


  hard.addEventListener('click', () => {
    popup.style.display = "none"

    var timer = setInterval(() => {
          timerElt.innerText = counter;
          counter--; 
        if(counter === 0){
            setTimeout(() => {
                timerElt.innerText = "La partie est finie! Temps écoulé!";
                popup3.style.display = "block"
                clearInterval(timer);
            }, 1000);          
        }
    }, 1000);

    setInterval(() => {
      let positionMikey = randomPosition( mikey)
        mikey.style.top = positionMikey[1]+"px"
        mikey.style.left = positionMikey[0]+"px"
    },1100)  
  })



  let popup = document.querySelector("#popup")

  setTimeout(() => {
    popup.style.display = 'block' 
  }, 1000);
    

  




  let grenade1 = document.querySelector(".img_grenade1")
  let grenade2 = document.querySelector(".img_grenade13")
  let explosion1 = document.querySelector(".img_explosion01")
  let explosion2 = document.querySelector(".img_explosion02")
  let explosion3 = document.querySelector(".img_explosion03")
  let explosion4 = document.querySelector(".img_explosion04")
  let avion1 = document.querySelector(".img_avion4")
  let avion2 = document.querySelector(".img_avion5")


  setTimeout(() =>{
    grenade1.style.dysplay = 'none'
    explosion2.style.display = 'block'
  }, 16000)

  setTimeout(() =>{
    grenade2.style.dysplay = 'none'
    explosion1.style.display = 'block'
  }, 15000)

  setTimeout(() =>{
    explosion4.style.display = "block"
  }, 13000)

  setTimeout(() =>{
    explosion3.style.display = "block"
  }, 15500)




  
  let popup2 = document.querySelector("#popup2")


  mikey.addEventListener('click', () => {
    Swal.fire(
      'Félicitation tu as trouvé Mikey!',
      ' Tu peux recommencer ou changer de map!',
      'success'
    )

    setTimeout(() => {
      popup2.style.display ="block"
    }, 2000);
      

  })

  function randomPosition( element) {
    var x = document.body.offsetWidth-element.clientWidth;
    var y = document.body.offsetHeight-element.clientHeight;
    var randomX = Math.floor(Math.random()*900);
    var randomY = Math.floor(Math.random()*550);
    return [randomX,randomY];
  }

})

