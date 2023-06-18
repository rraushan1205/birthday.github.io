document.addEventListener('DOMContentLoaded', function() {
    var card1 = document.getElementsByClassName('card1')[0];
    var card2 = document.getElementsByClassName('card2')[0];
    var card3 = document.getElementsByClassName('card3')[0];
    var card4 = document.getElementsByClassName('card4')[0];
    var card5 = document.getElementsByClassName('card5')[0];
    var card6 = document.getElementsByClassName('card6')[0];
  
    card1.addEventListener('click', function() {
      card1.style.transition = 'transform 0.5s ease-out';
      card1.style.transform = 'translateX(250%)';
      setTimeout(function() {
        card1.style.display = 'none';
      }, 500);
    });
  
    card2.addEventListener('click', function() {
      card2.style.transition = 'transform 0.5s ease-out';
      card2.style.transform = 'translateX(250%)';
      setTimeout(function() {
        card2.style.display = 'none';
      }, 500);
    });
  
    card3.addEventListener('click', function() {
      card3.style.transition = 'transform 0.5s ease-out';
      card3.style.transform = 'translateX(250%)';
      setTimeout(function() {
        card3.style.display = 'none';
      }, 500);
    });
  
    card4.addEventListener('click', function() {
      card4.style.transition = 'transform 0.5s ease-out';
      card4.style.transform = 'translateX(250%)';
      setTimeout(function() {
        card4.style.display = 'none';
      }, 500);
    });
  
    card5.addEventListener('click', function() {
      card5.style.transition = 'transform 0.5s ease-out';
      card5.style.transform = 'translateX(250%)';
      setTimeout(function() {
        card5.style.display = 'none';
        playAudio();
      }, 500);
    });
  
    // card6.addEventListener('click', function() {
    //   card6.style.transition = 'transform 0.5s ease-out';
    //   card6.style.transform = 'translateX(250%)';
    //   setTimeout(function() {
    //     card6.style.display = 'none';
    //   }, 500);
    // });  
    function playAudio() {
      var audio = new Audio('img/birthday.mp3');
      audio.play();
    }
  });

  
  