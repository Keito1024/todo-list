$(document).ready(function() {

  $('form').on('submit', function() {

    var item = $('form input');
    var limitDate = $('form input');
    var todo = {
      item: item.val()
    };
    var date = {
      limitDate: limitDate.val()
    };

    $.ajax({
      type: 'POST',
      url: '/todo',
      data: limitDate,
      success: function(data) {
        //do something with the data via front-end framework
        location.reload();
      }
    });

    return false;

  });

  $('li').on('click', function() {
    var item = $(this).text().replace(/ /g, "-");
    $.ajax({
      type: 'DELETE',
      url: '/todo/' + item,
      success: function(data) {
        //do something with the data via front-end framework
        location.reload();
      }
    });
  });

});

window.onload = function() {
  var date = new Date()
  var toTwoDigits = function(num, digit) {
    num += ''
    if (num.length < digit) {
      num = '0' + num
    }
    return num
  }

  var yyyy = toTwoDigits(year, 4)
  var mm = toTwoDigits(month, 2)
  var dd = toTwoDigits(day, 2)
  var ymd = yyyy + "-" + mm + "-" + dd;

  document.getElementById("today").value = ymd;
}
