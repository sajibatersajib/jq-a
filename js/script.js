// jquery/jq start here
// 00
$(document).ready(function () {
    alert("Hellow everyone");
});

// 01
$(document).ready(function () {
    // Alert
    $('.showA').click(function () {
        alert("Hellow World");
    });
});

// 02
$(document).ready(function () {
    // Alert
    $('#showA').dblclick(function () {
        alert("I'm sajib");
    });
});

// 03
$(document).ready(function () {
    // Alert
    $('#mOvr').on('mouseover', function () {
        alert("I'm sajib hossain");
    });
});

// 04
$(document).ready(function () {
    $('#show').on('click', function () {
        $('#tgl').show();
    });

    $('#hide').on('click', function () {
        $('#tgl').hide();
    });
});

// 05
$(document).ready(function () {
    $('#toggle').on('click', function () {
        $('#tgl1').toggle('1000');
    });
});

// 06
$( "#slideup p" ).on( "click", function() {
  $( this ).slideUp();
});

// 07
$(document).ready(function () {
    $('#fadein').on('click', function () {
        $('#fade1').show("slow");
    });

    $('#fadeout').on('click', function () {
        $('#fade1').hide("slow");
    });
});

// 08
$(document).ready(function () {    
    $('#toggle1').on('click', function () {
        $('#fade2').fadeToggle("20000");
    });
});
// 09
$(document).ready(function(){
    $("#disappear").click(function(){
      $("#disapp").hide();
    });
});
// 10
$(document).ready(function(){
    $("#disappear1").dblclick(function(){
      $("#disapp1").hide();
    });
});
// 11
$(document).ready(function(){
    $("#fboxes").click(function(){
      $("#div1").fadeIn(3000);
      $("#div2").fadeIn("slow");
    });
});
// 12
$(document).ready(function(){
    $("#fboxes1").click(function(){
      $(".div1").fadeOut();
      $(".div2").fadeOut("slow");
      $(".div3").fadeOut(3000);
    });
});
// 13
$(document).ready(function(){
    $("#flip").click(function(){
      $("#panel").slideToggle("slow");
    });
});
// 14
$(document).ready(function(){
    $("#animate").click(function(){
      $(".animation").animate({left: '46%'});
    });
});
// 15
$(document).ready(function(){
    $("#animate1").click(function(){
      $(".animation1").animate({
        left: '46%',
        opacity: '0.7',
        height: '120px',
        width: '150px',
      });
    });
});
// 16
$(document).ready(function(){
    $("#animate2").click(function(){
      $(".animation2").animate({
        height: 'toggle'
      }, "slow"
          
      );
    });
});
// 17
$(document).ready(function(){
    $("#animate3").click(function(){
      var div = $(".animation3");  
      div.animate({left: '45%'}, "slow");
      div.animate({fontSize: '30px'}, "slow");
    });
});
// 18
$(document).ready(function(){
    $("#animate4").click(function(){
      $("#animation4").slideDown(3000);
    });
    $("#stop4").click(function(){
      $("#animation4").stop();
    });
});
// 19
$(document).ready(function(){
    $("#appendbtn1").click(function(){
      $(".appendbtn1").append(" <b>Appended text sajib</b>.");
    });
  
    $("#appendbtn2").click(function(){
      $(".appendbtn2").append("<li>Appended item Goodboy</li>");
    });
});
// 20
$(document).ready(function(){
    $("#bgclrchang").click(function(){
      $(".bgclrp").css("background-color", "yellow");
    });
  });