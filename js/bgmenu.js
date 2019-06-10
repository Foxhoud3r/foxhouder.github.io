$(document).ready(function() {
  var items = $(".bgmenu__decor");
  var allParents = $(".bgmenu_obj");

  items.click(function(e) {
    e.preventDefault();

    var $this = $(this);
    var thisparent = $this.parent(".bgmenu_obj");
    var thischild = thisparent.children(".bgmenu__desc");

    if (thischild.hasClass("active_bg")) {
      thischild.removeClass("active_bg");
    } else {
      $(".bgmenu_obj")
        .children(".bgmenu__desc")
        .removeClass("active_bg");
      thischild.toggleClass("active_bg");
    }
  });
});

$(document).ready(function() {
  var items = $(".team__title");
  var $allParrents = $(".team__item");

  items.click(function(e) {
    e.preventDefault();
    var $this = $(this);
    var $parrent = $this.closest(".team__item");

    if ($parrent.hasClass("team__item_active")) {
      $parrent.removeClass("team__item_active");
    } else {
      $allParrents.removeClass("team__item_active");
      $parrent.addClass("team__item_active");
    }
  });
});

$(document).ready(function() {
  var ovrl = $(".overlay__menu-links");

  ovrl.click(function(e) {
    e.preventDefault();

    var ovlmenu = $(".overlay");
    var hdrlogo = $(".header__logo");

    hdrlogo.addClass("vsbl_not");
    ovlmenu.addClass("overlay__active");
  });
});

$(document).ready(function() {
  var ovrl = $(".close");

  ovrl.click(function(e) {
    e.preventDefault();

    var ovlmenu = $(".overlay");
    var hdrlogo = $(".header__logo");

    ovlmenu.removeClass("overlay__active");

    hdrlogo.removeClass("vsbl_not");
  });
});

$(document).ready(function() {
  var ovrl = $(".arrow__right");

  ovrl.click(function(e) {
    e.preventDefault();

    var sldrelem = $(".slider__content");
    var cntelem = $(".slider__content").length;
    var tranval = parseInt(
      $(".slider__content")
        .css("transform")
        .split(",")[4]
    );
    var elemwth = parseInt(sldrelem.css("width"));

    console.log(cntelem);
    console.log(tranval);
    console.log(elemwth);

    if (tranval == 0) {
      tranval = elemwth * -1;
      console.log(tranval);
      $(".slider__content").css({ transform: "translateX(" + tranval + "px)" });
    } else if (tranval * -1 < elemwth * (cntelem - 1)) {
      console.log(tranval * -1);
      console.log(elemwth * (cntelem - 1));
      tranval = tranval - elemwth;
      $(".slider__content").css({ transform: "translateX(" + tranval + "px)" });
    } else {
      tranval = 0;
      $(".slider__content").css({ transform: "translateX(" + tranval + "px)" });
    }

   
    $(sldrelem).find('#slider__menu').removeClass('slider__menu--act');
   
    $(sldrelem).find('.comp__list').removeClass('comp__visible');

    //var elmnbr=(parseInt(sldrelem.css('width'))/parseInt($('.slider__content').css('transform').split(',')[4]));
    //console.log(elmnbr); //так нашли позицию елемента
  });
});

$(document).ready(function() {
  var ovrl = $(".arrow__left");

  ovrl.click(function(e) {
    e.preventDefault();

    var sldrelem = $(".slider__content");
    var cntelem = $(".slider__content").length;
    var tranval = parseInt(
      $(".slider__content")
        .css("transform")
        .split(",")[4]
    );
    var elemwth = parseInt(sldrelem.css("width"));

    console.log(cntelem);
    console.log(tranval);
    console.log(elemwth);

    if (tranval == 0) {
      tranval = elemwth * (-1 * (cntelem - 1));
      console.log(tranval);
      $(".slider__content").css({ transform: "translateX(" + tranval + "px)" });
    } else if (tranval * -1 > 0) {
      tranval = tranval + elemwth;
      $(".slider__content").css({ transform: "translateX(" + tranval + "px)" });
    } else {
      tranval = elemwth * (-1 * (cntelem - 1));
      $(".slider__content").css({ transform: "translateX(" + tranval + "px)" });
    }

    $(sldrelem).find('#slider__menu').removeClass('slider__menu--act');
   
    $(sldrelem).find('.comp__list').removeClass('comp__visible');

  });
});

//обработка формы
$(document).ready(function() {
  var frm = $(".form");
  frm.submit(function(e) {
    e.preventDefault();
    console.log(frm);
    var form = document.forms.order__form;

    if (form.elements.name.value == "") {
      alert("Заполните имя.");
      return;
    }
    if (form.elements.comment.phone == "") {
      alert("Заполните номер телефона.");
      return;
    }
    if (form.elements.comment.value == "") {
      alert("Заполните комментарий.");
      return;
    }

    var ajaxForm = function(form) {
      let sndform = new FormData();
      console.log(form.elements.name.value);
      console.log(form.elements.phone.value);
      console.log(form.elements.comment.value);

      sndform.append("name", form.elements.name.value);
      sndform.append("phone", form.elements.phone.value);
      sndform.append("comment", form.elements.comment.value);
      sndform.append("to", "test@mail.ru");

      if (form.elements.comment.value === "error") {
        console.log("error true");
        var url = "https://webdev-api.loftschool.com/sendmail/fail";
      } else {
        console.log("we are good chief");
        var url = "https://webdev-api.loftschool.com/sendmail";
      }

      console.log(url);

      let xhr = new XMLHttpRequest();
      xhr.responseType = "json";
      xhr.open("POST", url);
      xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");
      xhr.send(sndform);

      return xhr;
    };

    var answ = ajaxForm(form);
    answ.addEventListener("load", () => {
      console.log(answ.response);

      if (answ.response.status === 0) {
        console.log(answ.response.status);
        document.getElementById("popup__message").textContent =
          "Что-то сломалось!";
        document.getElementById("popup").style.display = "flex";
        $("body").addClass("body__over");
      } else {
        console.log(answ.response.status);
        document.getElementById("popup__message").textContent =
          "Сообщение отправлено.";
        document.getElementById("popup").style.display = "flex";
        $("body").addClass("body__over");
      }
    });
  });
});

$(document).ready(function() {
  var popcls = $(".popup__btn");

  popcls.click(function(e) {
    e.preventDefault();
    $("body").removeClass("body__over");
    document.getElementById("popup").style.display = "none";
  });
});

$(document).ready(function() {
  var popcls = $(".popup");

  popcls.click(function(e) {
    e.preventDefault();
    $("body").removeClass("body__over");
    document.getElementById("popup").style.display = "none";
  });
});

$(document).ready(function() {
  const phone = $("#mobile");

  phone.on("input", function() {
    var valfld = this.value;
    console.log(valfld);
    var regex = /^[0-9]+$/;
    if (!valfld.match(regex)) {
      this.value = "";
      alert("Телефон должен содержать только числа");
    }
  });
});

$(document).ready(function() {
  const phone = $("#name");

  phone.on("input", function() {
    var valfld = this.value;
    console.log(valfld);
    var regex = /^[a-zA-zа-яA-Я]+$/;
    if (!valfld.match(regex)) {
      this.value = "";
      alert("Телефон должен содержать только буквы");
    }
  });
});

ymaps.ready(init);
function init() {
  // Создание карты.
  var myMap = new ymaps.Map("map", {
    // Координаты центра карты.
    // Порядок по умолчанию: «широта, долгота».
    // Чтобы не определять координаты центра карты вручную,
    // воспользуйтесь инструментом Определение координат.
    center: [59.920553, 30.325571],
    // Уровень масштабирования. Допустимые значения:
    // от 0 (весь мир) до 19.
    zoom: 12
  });
  myMap.behaviors.disable("scrollZoom");

  var markerCoordinates = [
    [59.891045, 30.315858],
    [59.966661, 30.311724],
    [59.914965, 30.49743],
    [59.946128, 30.383856]
  ];

  for (var x=0; x < markerCoordinates.length; x++) {
    console.log(markerCoordinates[x]);
    var myPlacemark = new ymaps.Placemark(
      markerCoordinates[x],
      {},
      {
        iconLayout: "default#image",
        iconImageHref: "../images/map/map_marker.png",
        iconImageSize: [36, 47],
        iconImageOffset: [-15, -47]
      }
    );

    myMap.geoObjects.add(myPlacemark);
  }
}


$(document).ready(function() {
  
  const bgcomp = $(".slider__menu");
 

  bgcomp.click(function(e) {
    e.preventDefault();
    if ($(this).hasClass('slider__menu')){
    
    
    if ($(this).hasClass('slider__menu--act')){
      $(this).removeClass('slider__menu--act');
      let dad = $(".sldcnt__left");
      $(dad).find('.comp__list').removeClass('comp__visible');
    }
    else{
      $(this).addClass('slider__menu--act');
      let dad = $(".sldcnt__left");
      $(dad).find('.comp__list').addClass('comp__visible');
    }
  }
  })
  
});



$(document).ready(function() {
  
  const clscomp = $(".close__comp");
 

  clscomp.click(function(e) {
    e.preventDefault();
    if ($(this).hasClass('close__comp')){
    
      let dad = $(".sldcnt__left");
      $(dad).find('.comp__list').removeClass('comp__visible');
      $(dad).find('.slider__menu').removeClass('slider__menu--act');
    
    
  }
  })
  
});





$(document).ready(function() {
  
  const revwbtn = $(".rewiev__btn");

  revwbtn.click(function(e) {
   // e.preventDefault();
    console.log('1');
    
  console.log($(this).className);
    
    if ($(this).hasClass('rewiev__btn')){
   
    
      let dad = $(".review__popup");
      $(dad).addClass('review__popup-act')
      $("body").addClass("body__over");
    }  
  })

  
});

$(document).ready(function() {
  
  const clsrvwbtn = $(".close__rvw");
 

  $(clsrvwbtn).click(function(e) {
    e.preventDefault();
    
    if ($(this).hasClass('close__rvw')){
   console.log('1');
    
      let dad = $(".review__popup");
      $(dad).removeClass('review__popup-act')
      $("body").removeClass("body__over");
    }
  })
  
  
});
