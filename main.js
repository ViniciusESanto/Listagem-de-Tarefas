$(document).ready(function(){
    $('input').change(function(){
        var input = $(this).val();
        $('ul').append('<li>' +input+ '<i class="fa-solid fa-check"></i></li>');
        $(this).val('')
    });
});