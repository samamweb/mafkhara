$('a[href^="#"]').on('click', function(event) {

    var target = $(this.getAttribute('href'));

    if( target.length ) {
        event.preventDefault();
        $('html, body').stop().animate({
            scrollTop: target.offset().top
        }, 1000);
    }

});


CountDownTimer('06/06/2020 1:05 PM', 'countdown');

function CountDownTimer(dt, id)
{
    var end = new Date(dt);
    
    var _second = 1000;
    var _minute = _second * 60;
    var _hour = _minute * 60;
    var _day = _hour * 24;
    var timer;
    
    function showRemaining() {
        var now = new Date();
        var distance = end - now;
        if (distance < 0) {
            
            clearInterval(timer);
            document.getElementById(id).innerHTML = 'EXPIRED!';
            
            return;
        }
        var days = Math.floor(distance / _day);
        var hours = Math.floor((distance % _day) / _hour);
        var minutes = Math.floor((distance % _hour) / _minute);
        var seconds = Math.floor((distance % _minute) / _second);
        
        
        if (String(hours).length < 2){
            hours = 0 + String(hours);
        }
        if (String(minutes).length < 2){
            minutes = 0 + String(minutes);
        }
        if (String(seconds).length < 2){
            seconds = 0 + String(seconds);
        }
        
        
        var datestr = hours + ' : ' + 
                      minutes + ' : ' + 
                      seconds + '';
        
        document.getElementById(id).innerHTML = datestr;
    }
    
    timer = setInterval(showRemaining, 1000);
}

