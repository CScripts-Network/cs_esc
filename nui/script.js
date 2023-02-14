$('.pause-menu .link').hover( function() {
	$('.pause-menu .link').each( function() {
		$(this).removeClass('focus');
	});
	$(this).addClass('focus');
})

$("#wróć").click(function() {
  $("#escscreendomino").css({"display":"none"});
  $.post('https://cs_esc/d1_wroc');
});
$("#keybinds").click(function() {
  $("#escscreendomino").css({"display":"none"});
  $.post('https://cs_esc/d1_prz');
});

$("#mapa").click(function() {
  $("#escscreendomino").css({"display":"none"});
  $.post('https://cs_esc/d1_mapa');
});

$("#rozłącz").click(function() {
  $("#escscreendomino").css({"display":"none"});
  $.post('https://cs_esc/d1_disconnect');
});
$("#ustawienia").click(function() {
  $("#escscreendomino").css({"display":"none"});
  $.post('https://cs_esc/d1_ustaw');
});

$(document).on('keydown', function(e) {
  if (e.key == "Escape") {
	$("#escscreendomino").css({"display":"none"});
	$.post('https://cs_esc/d1_wroc');
  } else if (e.key == "m") {
    $("#escscreendomino").css({"display":"none"});
    $.post('https://cs_esc/d1_mapa');
  } else if (e.key == "s") {
    $("#escscreendomino").css({"display":"none"});
    $.post('https://cs_esc/d1_ustaw');
  }
});


window.addEventListener("message", function (event) {
    if(event.data.type == "enableui") {
	$("#escscreendomino").css({"display":"block"});
    }
})


var $input = $('#some_number'),
    current_index = $('.focus').index(),
    $number_list = $('#number_list'),
    $options = $number_list.find('.link'),
    items_total = $options.length;

$input.val(current_index);
$(document).on('keydown', function(e) {
  console.log(current_index)
    if (e.key == 'ArrowDown') {
        if (current_index + 1 < items_total) {
            current_index++;
            change_selection();
        }
    } else if (e.key == 'ArrowUp') {
        if (current_index > 0) {
            current_index--;
            change_selection();
        }
    } else if (e.key == "Enter") {
      $options.eq(current_index).click()
    }
});

function change_selection() {
    $options.removeClass('focus');
    $options.eq(current_index).addClass('focus');
    $input.val(current_index);
}