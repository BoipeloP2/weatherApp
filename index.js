$(document).ready(function(){

$('.short').hide();

if(navigator.geolocation){
  var currentPosition = '';
  navigator.geolocation.getCurrentPosition(function(Position){
   currentPosition = Position;

   var Longi = currentPosition.coords.longitude;
   var lati = currentPosition.coords.latitude;

   //console.log(lati ,Longi);

   var url = 'http://api.weatherstack.com/current?access_key=2186eb9d9ab8dd01185a3b657525e455&query='
   $.getJSON(url + lati + ',' + Longi, function(data){

     var data = JSON.stringify(data);

    var json = JSON.parse(data);

    var country = json.location.country;
    var city = json.location.name;
    var state = json.location.region;
    

    
    
    var description = json.current.weather_descriptions;
    var temp_c = json.current.temperature;
    var temp_f = (temp_c * 9/5) + 32;
    //var last_update = json.current.last_updated.replace('-',' ');

    // if (description = ''){
    //   $('.grey-jumbo').css({
    //     backgroundImage:'url(https://cdn.pixabay.com/photo/2017/02/13/11/45/ice-2062433__340.jpg)'
    //   });
    //   $('#temp').html("<h1>It's pretty cold<hr></h1>...");
    // }else if(temp_c >18 && temp_c <28){
    //   $('.grey-jumbo').css({
    //     backgroundImage:'url(https://cdn.pixabay.com/photo/2017/10/10/07/48/hills-2836301__340.jpg)'
    //   });
    //   $('#temp').html("It's pretty sunny ");

    // }else {
    //   $('.grey-jumbo').css({
    //     backgroundImage:'url(https://cdn.pixabay.com/photo/2017/08/16/01/23/desert-2646209__340.jpg)'
    //   });
    //   $('#temp').html("It's pretty sunny ");

    // }

    
    var wind = json.current.wind_speed;
    var humidity = json.current.humidity;
    var time = json.location.localtime.split(' ')[1];
    var weatherDescriptions = json.current.weather_descriptions;
    var cloud = json.current.cloudcover;
    var timeLocal  = json.location.localtime; 
    var icon = json.current.weather_icons;
   
   $('#info1').attr('src',icon);
    $('#weather').html( city + ', ' + state + ', ' + country);
    $('#info2').html(weatherDescriptions);
    $('#info5').html('Wind ' + wind + ' kph');
    $('#info3').html(temp_c + '&#8451');
    $('.short').show();
    $('.dateOfToday').html(timeLocal);

    // $('.img-p').css({
    //   backgroundImage:'url('+ icon +')'
    // });
  

//toggle the temperature degree
    var yes = true;

    $('#switch').on('click', function(){
      if (yes){
        $('#info3').html(temp_f + '&#8457');
        $('#switch').html('Show in CELSIUS')
        yes = false;

      }
      else  {
          $('#info3').html(temp_c + '&#8451');
          $('#switch').html('Show in FAHRENHEIT');

          yes = true;
        
      }
     // $('#info3').addClass('animated BounceIn');
    });

    //sky section
    // if (cloud <30){
    //   $('#info5').html('Clear Sky');
    // }else{
    //   $('#info5').html('Cloudy Sky');
    // }
    
    $('#info6').html('Humidity ' +humidity + '%')
    

     console.log(data);

   });

  // http://api.weatherstack.com/current?access_key=2186eb9d9ab8dd01185a3b657525e455&query=New%20York
  });
}
});