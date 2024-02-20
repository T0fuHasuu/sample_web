$(document).ready(function(){
    /**
     * Get Current date
     */
    const date = new Date();
    const hour = date.getHours();
    let message = '';
    if (hour <= 12){
        message = 'Good Morning';
    }
    if (hour > 12){
        message = 'Good AfterNoon';
    }
    if (hour >= 17){
        message = 'Good Evening';
    }
    $('#headingText').empty().append(message + ' From Us')
})