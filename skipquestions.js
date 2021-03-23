var jqry = document.createElement('script');
jqry.src = "https://code.jquery.com/jquery-3.3.1.min.js";
document.getElementsByTagName('head')[0].appendChild(jqry);

var skipping = false;

jQuery(".quiz__btn--next").on("click", function(e){
    //Check if we should skip
    if (skipping) return;
    var skips = jQuery(".answer__label--checked .answer__text div").attr("data-skip");
    if (skips){
        skipN(skips);
    }
})


function skipN(n){
    skipping = true;
    for (i = 0; i < n; i++){
        var isLastPage = jQuery(".quiz__btn--next").length === 0;
        if (!isLastPage){
            jQuery(".quiz__btn--next").first().click();      
            jQuery(".answer__label").first().click();
        } else{
            jQuery(".quiz__btn--finish").first().click();
        }   
    }
    skipping = false;
}

