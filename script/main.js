
// Scrypt Equipment
$(document).ready( () => {

  $('.discounts').on('click', () =>{
      $('#user').slideUp();
      $('.promo').slideToggle();
      });
  $('.account').on('click', () =>{
      $('.promo').slideUp();
      $('#user').slideToggle();
  });

  $('.language').mouseenter( (event) =>{
      $(event.currentTarget).find('.hide_languag').show();
      $('.dynamic').mouseleave( ()=>{ $('.hide_languag').hide() });
  });


  $('.harmonic_hide').hide();
  $('.harmonic').on('click', (event) => {
      $('.harmonic_hide').hide();
      $('.minus').removeClass('minus').addClass('plus');
      $(event.currentTarget).children().show();
      $(event.currentTarget).find('.plus').removeClass('plus').addClass('minus');
  });


// Слайдер
//   $(".owl-carousel").owlCarousel();

//  $(".img_slide").on("click", (event)=> {
//      let Linc = $(event.currentTarget).attr('src');
//     $('.img_slide_main').first().attr('src', Linc);
//      console.log("Ссылка: " + Linc);
//  });

// Плавная прокрутка страницы вверх
  $('#up').on('click', ()=>{
      $('body,html').animate({scrollTop:-3000}, 1000);
  })

  $('#button_chat').on('click', ()=> {
      $('#chat').toggle();
  });

// Сlearing history
  $('#clearing-history').on('click',()=>{
      $('.history_product').remove();
      $('.history_product_non').show();
  });

});

// Timer
let action_date = new Intl.DateTimeFormat().format(Date.now()+604800000); // Доставка через 7 дней
document.getElementById("action_date").innerHTML= action_date;

function timerActionTime (minutes = 60) {
  let Hour = "00";
  let Minutes = minutes;
  let Seconds = "00";
  let i = minutes*60;
  let interval = setInterval( (minutes) =>{
      if (i ===0) {clearInterval(interval)} else {
          --i;
          Minutes = Math.floor(i /60);
          Seconds = i%60; if (Seconds<10) {Seconds = "0"+Seconds };
          Hour = Math.floor(Minutes /60); if (Hour<10) {Hour = "0"+Hour };
          Minutes = Minutes%60; if (Minutes<10) {Minutes = "0"+Minutes };
          document.getElementById("action_time").innerHTML = `${Hour} час. ${Minutes} мин. ${Seconds} сек.`
          }
  }, 1000);
};

timerActionTime(90);




