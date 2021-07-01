function getTime(){
    let today = new Date();
    let hourNow = today.getHours(); 
    let greeting;
    if (hourNow > 18) {
      greeting = 'Good evening';
    } else if (hourNow > 11) {
      greeting = 'Good afternoon';
    } else if (hourNow >= 0) {
      greeting = 'Good morning';
    } else {
      greeting = 'Welcome';
    }
    
    document.write('<h3>' + greeting.toLowerCase() + '</h3>');
}

getTime();
