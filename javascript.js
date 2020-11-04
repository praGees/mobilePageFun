$("#arrow").on("click", function(){
    $("body,html").animate({
        scrollTop:$("main").offset().top
    },1000)
})

function przycisk(){
    var text = 'Data premiery dalszej czesci 4 sezony Ricka i Mortiego to 16 czerwca!'
    // text.fontsize(10).fontcolor("#345EDF");
    document.getElementById("button").innerHTML=alert(text);
}