var container = document.querySelector('.container');

var containerUp = document.querySelector('.container .up');

var containerDown = document.querySelector('.container .down');

var containerUpDiv = document.querySelectorAll('.container .up div');

var containerDownDiv = document.querySelectorAll('.container .down div');

var upTopVal = 0;
var downTopVal = 100;
var flag = 'down';
var minRadius = 0;
var maxRadius = 20;
var upDivRadius = 0;
var downDivRadius = 20;
var counter = 0;
var counterLimit = 5;

setInterval(function(){
        
      if(flag === 'down'){
        upTopVal++;
        containerUp.style.top = upTopVal + 'px'; 

        counter = (counter + 1) % counterLimit;

       if(upDivRadius < maxRadius && counter == 0){
        upDivRadius++;
       }

       if(downDivRadius > minRadius && counter == 0){
        downDivRadius --; }

        for(var i =0; i < 10; i++){
        containerUpDiv[i].style.width = upDivRadius + 'px';
        containerUpDiv[i].style.height = upDivRadius + 'px';
        
        containerDownDiv[i].style.width = downDivRadius + 'px';
        containerDownDiv[i].style.height = downDivRadius + 'px';

           }

        downTopVal--;
        containerDown.style.top = downTopVal + 'px'; 

        if(upTopVal === 130){
            
            flag ='up';
            counter = 0;

        }


    }

    if(flag === 'up'){
        upTopVal--;
        containerUp.style.top = upTopVal + 'px';

        counter = (counter + 1) % counterLimit;

        if(upDivRadius > minRadius && counter == 0){
        upDivRadius --; }

        if(downDivRadius < maxRadius && counter == 0){
            downDivRadius++;
           }    

        for(var i =0; i < 10; i++){
            containerUpDiv[i].style.width = upDivRadius + 'px';
            containerUpDiv[i].style.height = upDivRadius + 'px';  
             
            containerDownDiv[i].style.width = downDivRadius + 'px';
            containerDownDiv[i].style.height = downDivRadius + 'px';
    
        }
            
        downTopVal++;
        containerDown.style.top = downTopVal + 'px'; 
        
        if(upTopVal === 0){
          
            flag ='down';

        }


    }
    
    
    // if(downTopVal >= 0 && downTopVal <= 130){
    //     downTopVal++;
    //     containerDown.style.top = upTopVal + 'px';
    // }else{
    //     downTopVal--;
    //     containerDown.style.top = upTopVal + 'px';
    // }




},1000/60);