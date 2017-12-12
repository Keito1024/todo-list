$(document).ready(function() {
  $('#task-form').validate({
    errorClass: 'valid-err',
    rules: {
      'item': {
        required: true,
        maxlength: 20
      },
      'limitDate': {
        required: true,
      }
    },
    messages: {
      item: {
        required: 'タスクを入力してください',
      },
      limitDate: {
        required: '期限を入力してください'
      }
    }
  });

  $('form').on('submit', function(e) {
    e.preventDefault()
    if (!$('#task-form').valid()) {
      return;
    }

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
      data: item,
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
  //今日の日時を表示
  var date = new Date()
  var year = date.getFullYear()
  var month = date.getMonth() + 1
  var day = date.getDate()

  var toTwoDigits = function(num, digit) {
    num += ''
    if (num.length < digit) {
      num = '0' + num
    }
    return num
  }
}
