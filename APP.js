$(function () {
    const $ul = $('<ul></ul>');
    $('body').append($ul);
  
    $('input[type="text"]').change(enableSubmit);
  
    $('#btnSubmit').click(function (e) {
      e.preventDefault();
      const $text = $('input[type="text"]').val();
      const $li = $('<li>' + $text + '</li>');
      $ul.append($li);
  
      $li.click(changeColor);
  
      $li.dblclick(removeListItem);
  
      // Reset input field - 2 options
      // $(this).closest('form').find('input[type=text]').val('');
      $('form').trigger('reset')
  
      // const $div = $('<div></div>');
      // const $h2 = $('<h2></h2>');
      // $h2.append(text);
      // $div.append(h2);
      // $('$h2').mouseover(updateStyles);
    });
  
    // Functions
    function enableSubmit() {
      $('#btnSubmit').attr('disabled', false);
    }
  //   function updateStyles() {
  //     $(this).css({ backgroundColor: 'pink', borderRadius: '5px' });
  //   }
    function changeColor() {
      const r = Math.round(Math.random() * 255);
      const g = Math.round(Math.random() * 255);
      const b = Math.round(Math.random() * 255);
  
      $(this).css({
        color: 'rgb(' + r + ', ' + g + ', ' + b + ')',
      });
    }
    function removeListItem() {
      $(this).remove();
      // $(this).fadeOut(3000);
      // $(this).fadeOut('slow');
    }
  });