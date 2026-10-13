$(function(){
  // mobile menu
  $('#menuBtn').on('click',function(){$('nav').toggleClass('open')});
  // active nav link
  var page=location.pathname.split('/').pop()||'index.html';
  $('nav a').each(function(){if($(this).attr('href')===page)$(this).addClass('active')});
  // fade-in on scroll
  function reveal(){$('.fade').each(function(){if($(this).offset().top<$(window).scrollTop()+$(window).height()-40)$(this).addClass('show')});
    $('.bar i').each(function(){if($(this).closest('.card').hasClass('show'))$(this).css('width',$(this).data('w')+'%')})}
  $(window).on('scroll',reveal);reveal();
  // contact form validation
  $('#contactForm').on('submit',function(e){
    e.preventDefault();var ok=true;$('.err').hide();
    var n=$('#name').val().trim(),m=$('#email').val().trim(),g=$('#message').val().trim();
    if(!n){$('#name').next().text('Enter your name').show();ok=false}
    if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(m)){$('#email').next().text('Enter a valid email').show();ok=false}
    if(g.length<5){$('#message').next().text('Message too short').show();ok=false}
    if(ok){$('#formMsg').text('Thanks '+n+'! Message validated (demo form).');this.reset()}
  });
});
