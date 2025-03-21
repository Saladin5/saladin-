$(document).ready(function(){
    $('#navicon').click(function(event){
        event.preventDefault();
        const nav = $('li--ul--2');
        if(nav.css('display')=='none'){
            nav.css('display','block');
        }else{
            nav.css('display','none')
        }
    })
})