// accessibilty dropdown

		$('.accessibilty').click(function () {
			$('.accessibilty-dropdown').toggleClass('active');
		});
		
		$('body').on('click', function (e) {
			if (!$('.mydropdown').is(e.target)
				&& $('.mydropdown').has(e.target).length === 0
				&& $('.open').has(e.target).length === 0
			) {
				$('.accessibilty-dropdown').removeClass('active');
			}
		});

// darkmode

function toggleDarkLight() {
  var body = document.getElementById("body");
  var currentClass = body.className;
  body.className = currentClass == "dark-mode" ? "light-mode" : "dark-mode";
  $(this).toggleClass('active');
}

 // Preloader 
 $(window).on('load', function() { 
  $('#cube-loading').delay(1000).fadeOut('slow');  
})


// mobile menu js

$(document).ready(function() {
  // menu click event
  $('.menuBtn').click(function() {
    $(this).toggleClass('act');
    if ($(this).hasClass('act')) {
      $('.main-menu-sidebar').addClass('act');
    } else {
      $('.main-menu-sidebar').removeClass('act');
    }
  });
});


// banner slider js


$('.explore-qatar-slider .owl-carousel').owlCarousel({
  loop: true,
  margin: 5,
  nav: false,
  dots: true,
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 1
    },
    1000: {
      items: 1
    }
  }
})

// countdown js 

function makeTimer() {

  var endTime = new Date("29 November 2021 9:56:00 GMT+01:00");
  endTime = (Date.parse(endTime) / 1000);

  var now = new Date();
  now = (Date.parse(now) / 1000);

  var timeLeft = endTime - now;

  var days = Math.floor(timeLeft / 86400);
  var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
  var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600)) / 60);
  var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));

  if (hours < "10") {
    hours = "0" + hours;
  }
  if (minutes < "10") {
    minutes = "0" + minutes;
  }

  $("#days").html(days + "<span>Days</span> <div class=\" counter-dots\"></div>");
  $("#hours").html(hours + "<span>Hours</span> <div class=\" counter-dots\"></div>");
  $("#minutes").html(minutes + "<span>Minutes</span>");

}

setInterval(function() {
  makeTimer();
}, 1000);


// select js 
const select = document.querySelectorAll('.selectBtn');
const option = document.querySelectorAll('.option');
let index = 9999;

select.forEach(a => {
  a.addEventListener('click', b => {
    const next = b.target.nextElementSibling;
    next.classList.toggle('toggle');
    next.style.zIndex = index++;
  })
})
option.forEach(a => {
  a.addEventListener('click', b => {
    b.target.parentElement.classList.remove('toggle');

    const parent = b.target.closest('.select').children[0];
    parent.setAttribute('data-type', b.target.getAttribute('data-type'));
    parent.innerText = b.target.innerText;
  })
})


// responsive faq js

$(document).ready(function() {
  $(".set > a").on("click", function() {
    if ($(this).hasClass("active")) {
      $(this).removeClass("active");
      $(this)
        .siblings(".content")
        .slideUp(200);
      $(".set > a i")
        .removeClass("fa-angle-up")
        .addClass("fa-angle-down");
    } else {
      $(".set > a i")
        .removeClass("fa-angle-up")
        .addClass("fa-angle-down");
      $(this)
        .find("i")
        .removeClass("fa-angle-down")
        .addClass("fa-angle-up");
      $(".set > a").removeClass("active");
      $(this).addClass("active");
      $(".content").slideUp(200);
      $(this)
        .siblings(".content")
        .slideDown(200);
    }
  });
});


// chatbox js 

$(".main-chat-box .close").click(function() {
  $(".main-chat-box").removeClass("active");
});


$(function() {
  var INDEX = 0;
  $("#chat-submit").click(function(e) {
    e.preventDefault();
    var msg = $("#chat-input").val();
    if (msg.trim() == '') {
      return false;
    }
    generate_message(msg, 'self');
    var buttons = [{
        name: 'Existing User',
        value: 'existing'
      },
      {
        name: 'New User',
        value: 'new'
      }
    ];
    setTimeout(function() {
      generate_button_message(msg, 'user');
    }, 1000)

  })

  function generate_message(msg, type) {
    INDEX++;
    var str = "";
    str += "<div id='cm-msg-" + INDEX + "' class=\"chat-msg " + type + "\">";
    str += "          <span class=\"msg-avatar\">";
    str += "            <img src=\"images/user.png\" alt=\"user\" class=\"img-fluid\">";
    str += "          <\/span>";
    str += "          <div class=\"cm-msg-text-box\">";
    str += "            <span class=\"cm-msg-text\">";
    str += msg;
    str += "            <\/span>";
    str += "          <\/div>";
    str += "        <\/div>";
    $(".chat-logs").append(str);
    $("#cm-msg-" + INDEX).hide().fadeIn(300);
    if (type == 'self') {
      $("#chat-input").val('');
    }
    $(".chat-logs").stop().animate({
      scrollTop: $(".chat-logs")[0].scrollHeight
    }, 1000);
  }

  function generate_button_message(msg, buttons) {
    var buttons = [{
        name: 'I have some questions about Fan ID delivery',
        value: 'fanid'
      },
      {
        name: 'Know more about Covid protocol',
        value: 'covid-protocol'
      },
      {
        name: 'Just testing the bot',
        value: 'testing'
      },
      {
        name: 'I want to learn more about using Fan ID for entry permit to Qatar',
        value: 'entry-permit'
      }
    ];
    INDEX++;
    var btn_obj = buttons.map(function(button) {
      return "              <li class=\"button\"><a href=\"javascript:;\" class=\"chat-btn\" chat-value=\"" + button.value + "\">" + button.name + "<\/a><\/li>";
    }).join('');
    var str = "";
    str += "<div id='cm-msg-" + INDEX + "' class=\"chat-msg user\">";
    str += "          <span class=\"msg-avatar\">";
    str += "            <img src=\"images/bot.png\" alt=\"bot\" class=\"img-fluid\">";
    str += "          <\/span>";
    str += "          <div class=\"cm-msg-text-box\">";
    str += "            <span class=\"cm-msg-text\">";
    str += msg;
    str += "            <\/span>";
    str += "            <div class=\"cm-msg-button\">";
    str += "              <ul>";
    str += btn_obj;
    str += "              <\/ul>";
    str += "            <\/div>";
    str += "          <\/div>";
    str += "        <\/div>";
    $(".chat-logs").append(str);
    $("#cm-msg-" + INDEX).hide().fadeIn(300);
    $(".chat-logs").stop().animate({
      scrollTop: $(".chat-logs")[0].scrollHeight
    }, 1000);
  }

  $(document).delegate(".chat-btn", "click", function() {
    var value = $(this).attr("chat-value");
    var name = $(this).html();
    generate_message(name, 'self');
  })

  $("#chat-circle").click(function() {
    $("#chat-circle").toggle('scale');
    $(".chat-box").toggle('scale');
    $(".main-chat-box").toggle('scale');
  })

  $(".chat-box-toggle").click(function() {
    $("#chat-circle").toggle('scale');
    $(".main-chat-box").toggle('scale');
    $(".chat-box").toggle('scale');
  })

})
 
// password hide and show js 

$(".eye-btn").click(function() {
    $(this).toggleClass("fa-eye-slash");
    input = $(this).parent().find("input");
    if (input.attr("type") == "password") {
        input.attr("type", "text");
    } else {
        input.attr("type", "password");
    }
});


// show submit btn

 // $(document).on('change keyup', '.required', function(e){
 //   let Disabled = true;
 //    $(".required").each(function() {
 //      let value = this.value
 //      if ((value)&&(value.trim() !=''))
 //          {
 //            Disabled = false
 //          }else{
 //            Disabled = true
 //            return false
 //          }
 //    });
   
 //   if(Disabled){
 //        $('.toggle-disabled').prop("disabled", true);
 //        $('.toggle-disabled').removeClass('active');
 //      }else{
 //        $('.toggle-disabled').prop("disabled", false);
 //        $('.toggle-disabled').addClass('active');
 //      }
 // })

// multi toggle js

$(".close").click(function() {
    $("#sing-in").removeClass("show");
    $("#forgot-pass").removeClass("show");
    $("#create-pass").removeClass("show");
    $("#successfully-update").removeClass("show");
});
$("#toggle-singin , #toggle-singin2").click(function() {
    $("#sing-in").toggleClass("show");
});

$("#toggle-forgot").click(function() {
    $("#forgot-pass").toggleClass("show");
    $("#sing-in").removeClass("show");
});

$("#toggle-back").click(function() {
    $("#sing-in").addClass("show");
    $("#forgot-pass").removeClass("show");
});

$("#toggle-create").click(function() {
    $("#create-pass").toggleClass("show");
    $("#forgot-pass").removeClass("show");
});

$("#toggle-back2").click(function() {
    $("#forgot-pass").addClass("show");
    $("#create-pass").removeClass("show");
});

$("#toggle-update").click(function() {
    $("#successfully-update").toggleClass("show");
    $("#create-pass").removeClass("show");
});

$("#main-login").click(function() {
    $("#sing-in").toggleClass("show");
    $("#successfully-update").removeClass("show");
});



// flag js 

$(function() {
    var flag = $(".team-flag");
  
    $(window).scroll(function() {    
        var scroll = $(window).scrollTop();
        if (scroll >= flag) {
            $(this).addClass("scrolled");
        } else {
            $(this).removeClass("scrolled");
        }
    });
  
});


$(window).scroll(function() {
    var scrollDistance = $(window).scrollTop();

    // Show/hide menu on scroll
    //if (scrollDistance >= 850) {
    //    $('nav').fadeIn("fast");
    //} else {
    //    $('nav').fadeOut("fast");
    //}
  
    // Assign active class to nav links while scolling
    $('.team-flag').each(function(i) {
        if ($(this).position().top <= scrollDistance) {
            $(this).addClass('scrolled');
        }
        else{
          $(this).removeClass('scrolled');
        }
    });
}).scroll();


// faq slider js

$('.carousel-wrap .owl-carousel').owlCarousel({
  loop: false,
  margin: 30,
  nav: false,
  dots: true,
  responsive: {
    0: {
      items: 2,
      margin:10
    },
    350: {
      items: 3,
      margin:10
    },
    480: {
      items: 3,
      margin:15
    },
    767: {
      items: 4,
      margin:15
    },
    991: {
      items: 6
    }
  }
})

// carousel-wrap2 slider js

$('.carousel-wrap2 .owl-carousel').owlCarousel({
  loop: false,
  margin: 30,
  nav: false,
  dots: true,
  responsive: {
    0: {
      items: 3,
      margin:10
    },
    350: {
      items: 3,
      margin:10
    },
    480: {
      items: 3,
      margin:15
    },
    767: {
      items: 3,
      margin:15
    },
    991: {
      items: 3
    }
  }
})


// faq slider js

$('.protocol-wrap .owl-carousel').owlCarousel({
  loop: false,
  margin: 30,
  nav: false,
  dots: false,
  responsive: {
    0: {
      items: 2
    },
    350: {
      items: 2
    },
    480: {
      items: 2
    },
    767: {
      items: 3
    },
    991: {
      items: 4
    }
  }
})



// input phone no.

$('body').on('keyup', 'input[type="tel"]', function () {
  var $input = $(this),
      value = $input.val(),
      length = value.length,
      inputCharacter = parseInt(value.slice(-1));

  if (!((length > 0 && inputCharacter >= 0 && inputCharacter <= 10) || (length === 1 && inputCharacter >= 7 && inputCharacter <= 10))) {
      $input.val(value.substring(0, length - 1));
   }
});


// profile dropdown js

$(document).ready(function() {
  // menu click event
  $('.mydropdown a').click(function() {
    $('.mysubmenu2').toggleClass('active');
  });
});


// input value remove js

$('.required').change(function() {
  if($(this).val().length === 0) {
    $(this).siblings('.clear-text').addClass('hidden');
  }
  else {
    $(this).siblings('.clear-text').removeClass('hidden');
  }
});
$('.clear-text').click(function(e) { 
  $(this).siblings('input').val("");
  $(this).addClass('hidden');
});