window.addEventListener('load', ()=> {
   const sounds = document.querySelectorAll('.sound');
   const pads = document.querySelectorAll('.pads div');
   const visual = document.querySelector('.visual');
   const colors = [
      '#52c70e',
      '#e2e60e',
      '#f58e08',
      '#4c00fc',
      '#06d7f3',
      '#e606c8',
   ];


   pads.forEach((pad,  index) => {
      pad.addEventListener('click', function(){
         sounds[index].currentTime = 0;
         sounds[index].play();

         createBubbles(index);
      });
   });

   const createBubbles = (index) => {
      const bubble = document.createElement('div');
      visual.appendChild(bubble); 
      bubble.style.backgroundColor = colors[index];
      bubble.style.animation = 'jump 1s ease';
      bubble.addEventListener('animationend', function(){
         visual.removeChild(this);
      });
   };
});