var $button=$('#button');
$('#toggle').click(function(){
    $(this).toggle(1000, function(){
            $(this).toggle(true);
    }
)});
var addClass=$('#addClass').click(function(){$(this).addClass('red')});
$('#removeClass').click(function(){$(addClass).removeClass('red')});

$('#appendSomeElement').click(function(){$($button).append('Добавили текст' + '</br>')});
$('#prependSomeElement').click(function(){$($button).prepend('Добавили текст' + '</br>')});
$('#wrap').click(function(){$(this).wrap('<div id="conteiner"></div>')});
var inputValue = $('#inputValue');
$('#addInput').blur(function(){
    inputValue.html($(this).value);
})