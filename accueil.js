document.addEventListener( 'DOMContentLoaded', () => {

    let popup_1 = document.querySelector('.popup_1')
    let popup_one = document.querySelector('.one_popup')
    // let popup_1 = document.querySelector('.')

        

       
      setInterval(() => {
        
                  if (popup_1.style.display == "block"){ 
                      
                      popup_1.style.display = "none" 
                      popup_one.style.display = "block"
                  }else{
                      
                      popup_1.style.display = "block"
                      popup_one.style.display = "none"
                  }
              }, 500);
  
  
   

})