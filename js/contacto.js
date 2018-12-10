$(document).ready(function(){
    
    var mw = $('#map').height();
    $('#map').css({'width':mw+'px'});

    window.onresize = function() {
        var mw = $('#map').height();
        $('#map').css({'width':mw+'px'});
    }
        
});