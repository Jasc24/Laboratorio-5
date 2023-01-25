function removeLi() {
    $(this).parent().empty();
  }

function strikeThrough() {  
    if ($(this).parent().css('textDecoration') == 'line-through') {
        $(this).parent().css('textDecoration', 'none');
      } else {
        $(this).parent().css('textDecoration', 'line-through');
      }
    }

function TodoPost(e){
    e.preventDefault()
    let todo = $("#newText").val()
    $(".Lista").append(`<li>`+ todo + '<br>' +'<button class="check"><i class="fa-solid fa-check"></i></button>' + '<button class="delete"><i class="fa-solid fa-trash-can"></i></button>'+'<br>'+'</li>')
    $('#newText').val('').focus();
    $(document).on('click', '.delete', removeLi); 
    $(document).on('click', '.check', strikeThrough);   
}
    $('Button').click(TodoPost)
