let icon = document.querySelector('.menu-icon');
let ul = document.querySelector("ul");

icon.addEventListener("click", ()=>{
    ul.classList.toggle("js-showMenu");
    if(ul.className == "js-showMenu"){
        document.querySelector('#bar').className = "fa-solid fa-xmark";
    }else{
        document.querySelector('#bar').className = "fa-solid fa-bars";

    }
    
});
loadGoogleTranslate();



 
let slideImages = document.querySelectorAll('.slide');
let next = document.querySelector('.next');
let prev = document.querySelector('.prev');
let dots = document.querySelectorAll('.dot');


let currentIndex = 0;

next.addEventListener('click', slideNext);

function slideNext(){
    slideImages[currentIndex].style.animation = 'next1 0.5s ease-in forwards';
    if(currentIndex >= slideImages.length-1){
        currentIndex = 0;
    }else{
        currentIndex++;
    }
    slideImages[currentIndex].style.animation = 'next2 0.5s ease-in forwards';
}
prev.addEventListener('click', slideprev);

function slideprev(){
    slideImages[currentIndex].style.animation = 'prev1 0.5s ease-in forwards';
    if(currentIndex == 0){
        currentIndex = slideImages.length-1;
    }else{
        currentIndex--;
    }
    slideImages[currentIndex].style.animation = 'prev2 0.5s ease-in forwards';
}

function autoSliding(){
    deletInterval = setInterval(timer, 3000);
    function timer(){
        slideNext();
    }
}
autoSliding();



google.charts.load('current', {'packages':['bar']});
google.charts.setOnLoadCallback(drawChart);
      

      function drawChart() {
        const data = google.visualization.arrayToDataTable([
          [ ' ','2022', '2023','2024'],
          ['留学生', 56, 70, 103],
          ['特定技能', 19, 33, 58],
          ['就労ビザ', 9, 17, 37],
          ['外国人技能実習生', 13, 28, 43],
         
        ]);

        const options = {
          chart: {
            title: 'ANORUJ株式会社',
            subtitle: '実績表',
          }
        };
        
       const chart = new google.charts.Bar(document.getElementById('columnchart_material'));

        chart.draw(data, google.charts.Bar.convertOptions(options));
      };

       
      function loadGoogleTranslate(){
        new google.translate.TranslateElement("google_element");
      };
      loadGoogleTranslate();
    
      
      
      