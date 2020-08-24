"use strict"
function offset(el) {
   const rect = el.getBoundingClientRect(),
      scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
      scrollTop = window.pageYOffset || document.documentElement.scrollTop;
   return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
}
if ((document.documentElement.clientWidth > 460 && document.documentElement.clientHeight > 460)) {
   let timerId = setInterval(function () {
      let rand1 = Math.random() * 1000,
         rand2 = Math.random() * 800,
         box = document.querySelector('.splash-screen'),
         dot1 = document.querySelector('.heptagon-1');
      if (document.documentElement.clientHeight < 420) {
         rand2 = Math.random() * 100;
      }
      if (document.documentElement.clientWidth < 1024 && document.documentElement.clientHeight < 420) {
         rand1 = Math.random() * 500;
      }
      if (document.documentElement.clientHeight < 330 && document.documentElement.clientWidth < 600) {
         rand2 = Math.random() * 100;
         rand1 = Math.random() * 400;
      }
      if (document.documentElement.clientHeight < 600 && document.documentElement.clientWidth < 330) {
         rand2 = Math.random() * 200;
         rand1 = Math.random() * 200;
      }
      if (rand1 >= box.clientWidth) {
         rand1 = box.clientWidth - 300
      }
      dot1.style.left = rand1 + 'px';
      if (rand2 >= box.clientHeight) {
         rand2 = box.clientHeight - 300
      }
      dot1.style.top = rand2 + 'px';
      if ((document.documentElement.clientWidth > 1700) && (document.documentElement.clientWidth < 1920)) {         
         dot1.addEventListener('mouseout', () => {
            dot1.style.left = offset(dot1).left - 48 + 'px';
            dot1.style.top = offset(dot1).top - 17 + 'px';
         })
         dot1.addEventListener('mouseover', () => {
            dot1.style.left = offset(dot1).left  - 65 + 'px';
            dot1.style.top = offset(dot1).top - 30 + 'px';
            clearInterval(timerId);
         })
      } else if(document.documentElement.clientWidth > 1920){
         dot1.addEventListener('mouseover', () => {
            dot1.style.left = offset(dot1).left - 250 + 'px';
            dot1.style.top = offset(dot1).top - 25 + 'px';
            clearInterval(timerId);         
         })
      } else {
         dot1.addEventListener('mouseout', () => {
            dot1.style.left = offset(dot1).left + 48 + 'px';
            dot1.style.top = offset(dot1).top - 17 + 'px';
         })
         dot1.addEventListener('mouseover', () => {
            dot1.style.left = offset(dot1).left + 35 + 'px';
            dot1.style.top = offset(dot1).top - 30 + 'px';
            clearInterval(timerId);
         })
      }
   }, 4000)
   let timerId2 = setInterval(function () {
      let rand1 = Math.random() * 1000,
         rand2 = Math.random() * 800,
         box = document.querySelector('.splash-screen'),
         dot2 = document.querySelector('.heptagon-2');
      if (document.documentElement.clientHeight < 420) {
         rand2 = Math.random() * 300;
      }
      if (document.documentElement.clientHeight < 330 && document.documentElement.clientWidth < 600) {
         rand2 = Math.random() * 100;
         rand1 = Math.random() * 400;
      }
      if (document.documentElement.clientHeight < 600 && document.documentElement.clientWidth < 330) {
         rand2 = Math.random() * 400;
         rand1 = Math.random() * 200;
      }
      if (rand1 >= box.clientWidth) {
         rand1 = box.clientWidth - 300
      }
      dot2.style.left = rand1 + 'px';
      if (rand2 >= box.clientHeight) {
         rand2 = box.clientHeight - 300
      }
      dot2.style.top = rand2 + 'px';
      if ((document.documentElement.clientWidth > 1700) && (document.documentElement.clientWidth < 1920)) {         
         dot2.addEventListener('mouseout', () => {
            dot2.style.left = offset(dot2).left - 48 + 'px';
            dot2.style.top = offset(dot2).top - 17 + 'px';
         })
         dot2.addEventListener('mouseover', () => {
            dot2.style.left = offset(dot2).left  - 65 + 'px';
            dot2.style.top = offset(dot2).top - 30 + 'px';
            clearInterval(timerId2);
         })
      } else if(document.documentElement.clientWidth > 1920){
         dot2.addEventListener('mouseover', () => {
            dot2.style.left = offset(dot2).left - 250 + 'px';
            dot2.style.top = offset(dot2).top - 25 + 'px';
            clearInterval(timerId2);         
         })
      } else {
         dot2.addEventListener('mouseout', () => {
            dot2.style.left = offset(dot2).left + 48 + 'px';
            dot2.style.top = offset(dot2).top - 17 + 'px';
         })
         dot2.addEventListener('mouseover', () => {
            dot2.style.left = offset(dot2).left + 35 + 'px';
            dot2.style.top = offset(dot2).top - 30 + 'px';
            clearInterval(timerId2);
         })
      }
   }, 4000)
   let timerId3 = setInterval(function () {
      let rand1 = Math.random() * 1000,
         rand2 = Math.random() * 800,
         box = document.querySelector('.splash-screen'),
         dot3 = document.querySelector('.heptagon-3');
      if (document.documentElement.clientHeight < 420) {
         rand2 = Math.random() * 100;
      }
      if (document.documentElement.clientWidth < 1024 && document.documentElement.clientHeight < 420) {
         rand1 = Math.random() * 500;
      }
      if (document.documentElement.clientHeight < 330 && document.documentElement.clientWidth < 600) {
         rand2 = Math.random() * 100;
         rand1 = Math.random() * 400;
      }
      if (document.documentElement.clientHeight < 600 && document.documentElement.clientWidth < 330) {
         rand2 = Math.random() * 200;
         rand1 = Math.random() * 200;
      }
      if (rand1 >= box.clientWidth) {
         rand1 = box.clientWidth - 300
      }
      dot3.style.left = rand1 + 'px';
      if (rand2 >= box.clientHeight) {
         rand2 = box.clientHeight - 300
      }
      dot3.style.top = rand2 + 'px';
      if ((document.documentElement.clientWidth > 1700) && (document.documentElement.clientWidth < 1920)) {         
         dot3.addEventListener('mouseout', () => {
            dot3.style.left = offset(dot3).left - 48 + 'px';
            dot3.style.top = offset(dot3).top - 17 + 'px';
         })
         dot3.addEventListener('mouseover', () => {
            dot3.style.left = offset(dot3).left  - 65 + 'px';
            dot3.style.top = offset(dot3).top - 30 + 'px';
            clearInterval(timerId3);
         })
      } else if(document.documentElement.clientWidth > 1920){
         dot3.addEventListener('mouseover', () => {
            dot3.style.left = offset(dot3).left - 250 + 'px';
            dot3.style.top = offset(dot3).top - 25 + 'px';
            clearInterval(timerId3);         
         })
      } else {
         dot3.addEventListener('mouseout', () => {
            dot3.style.left = offset(dot3).left + 48 + 'px';
            dot3.style.top = offset(dot3).top - 17 + 'px';
         })
         dot3.addEventListener('mouseover', () => {
            dot3.style.left = offset(dot3).left + 35 + 'px';
            dot3.style.top = offset(dot3).top - 30 + 'px';
            clearInterval(timerId3);
         })
      }
   }, 4000)
   let timerId4 = setInterval(function () {
      let rand1 = Math.random() * 2000,
         rand2 = Math.random() * 800,
         box = document.querySelector('.splash-screen'),
         dot4 = document.querySelector('.heptagon-4');
      if (document.documentElement.clientHeight < 420) {
         rand2 = Math.random() * 100;
      }
      if (document.documentElement.clientHeight < 330 && document.documentElement.clientWidth < 600) {
         rand2 = Math.random() * 100;
         rand1 = Math.random() * 400;
      }
      if (document.documentElement.clientHeight < 600 && document.documentElement.clientWidth < 330) {
         rand2 = Math.random() * 400;
         rand1 = Math.random() * 200;
      }
      if (rand1 >= box.clientWidth) {
         rand1 = box.clientWidth - 300
      }
      dot4.style.left = rand1 + 'px';
      if (rand2 >= box.clientHeight) {
         rand2 = box.clientHeight - 300
      }
      dot4.style.top = rand2 + 'px';
      if ((document.documentElement.clientWidth > 1700) && (document.documentElement.clientWidth < 1920)) {         
         dot4.addEventListener('mouseout', () => {
            dot4.style.left = offset(dot4).left - 48 + 'px';
            dot4.style.top = offset(dot4).top - 17 + 'px';
         })
         dot4.addEventListener('mouseover', () => {
            dot4.style.left = offset(dot4).left  - 65 + 'px';
            dot4.style.top = offset(dot4).top - 30 + 'px';
            clearInterval(timerId4);
         })
      } else if(document.documentElement.clientWidth > 1920){
         dot4.addEventListener('mouseover', () => {
            dot4.style.left = offset(dot4).left - 250 + 'px';
            dot4.style.top = offset(dot4).top - 25 + 'px';
            clearInterval(timerId4);         
         })
      } else {
         dot4.addEventListener('mouseout', () => {
            dot4.style.left = offset(dot4).left + 48 + 'px';
            dot4.style.top = offset(dot4).top - 17 + 'px';
         })
         dot4.addEventListener('mouseover', () => {
            dot4.style.left = offset(dot4).left + 35 + 'px';
            dot4.style.top = offset(dot4).top - 30 + 'px';
            clearInterval(timerId4);
         })
      }
   }, 4000)
   let timerId5 = setInterval(function () {
      let rand1 = Math.random() * 2000,
         rand2 = Math.random() * 800,
         box = document.querySelector('.splash-screen'),
         dot5 = document.querySelector('.heptagon-5');
      if (document.documentElement.clientHeight < 420) {
         rand2 = Math.random() * 300;
      }
      if (document.documentElement.clientWidth < 1024 && document.documentElement.clientHeight < 420) {
         rand1 = Math.random() * 500;
      }
      if (document.documentElement.clientHeight < 330 && document.documentElement.clientWidth < 600) {
         rand2 = Math.random() * 100;
         rand1 = Math.random() * 400;
      }
      if (document.documentElement.clientHeight < 600 && document.documentElement.clientWidth < 330) {
         rand2 = Math.random() * 400;
         rand1 = Math.random() * 200;
      }
      if (rand1 >= box.clientWidth) {
         rand1 = box.clientWidth - 300
      }
      dot5.style.left = rand1 + 'px';
      if (rand2 >= box.clientHeight) {
         rand2 = box.clientHeight - 300
      }
      dot5.style.top = rand2 + 'px';
      if ((document.documentElement.clientWidth > 1700) && (document.documentElement.clientWidth < 1920)) {         
         dot5.addEventListener('mouseout', () => {
            dot5.style.left = offset(dot5).left - 48 + 'px';
            dot5.style.top = offset(dot5).top - 17 + 'px';
         })
         dot5.addEventListener('mouseover', () => {
            dot5.style.left = offset(dot5).left  - 65 + 'px';
            dot5.style.top = offset(dot5).top - 30 + 'px';
            clearInterval(timerId5);
         })
      } else if(document.documentElement.clientWidth > 1920){
         dot5.addEventListener('mouseover', () => {
            dot5.style.left = offset(dot5).left - 250 + 'px';
            dot5.style.top = offset(dot5).top - 25 + 'px';
            clearInterval(timerId5);         
         })
      } else {
         dot5.addEventListener('mouseout', () => {
            dot5.style.left = offset(dot5).left + 48 + 'px';
            dot5.style.top = offset(dot5).top - 17 + 'px';
         })
         dot5.addEventListener('mouseover', () => {
            dot5.style.left = offset(dot5).left + 35 + 'px';
            dot5.style.top = offset(dot5).top - 30 + 'px';
            clearInterval(timerId5);
         })
      }
   }, 4000)
   let timerId6 = setInterval(function () {
      let rand1 = Math.random() * 2000,
         rand2 = Math.random() * 800,
         box = document.querySelector('.splash-screen'),
         dot6 = document.querySelector('.heptagon-6');
      if (document.documentElement.clientHeight < 420) {
         rand2 = Math.random() * 300;
      }
      if (document.documentElement.clientHeight < 330 && document.documentElement.clientWidth < 600) {
         rand2 = Math.random() * 100;
         rand1 = Math.random() * 400;
      }
      if (document.documentElement.clientHeight < 600 && document.documentElement.clientWidth < 330) {
         rand2 = Math.random() * 200;
         rand1 = Math.random() * 200;
      }
      if (rand1 >= box.clientWidth) {
         rand1 = box.clientWidth - 300
      }
      dot6.style.left = rand1 + 'px';
      if (rand2 >= box.clientHeight) {
         rand2 = box.clientHeight - 300
      }
      dot6.style.top = rand2 + 'px';
      if ((document.documentElement.clientWidth > 1700) && (document.documentElement.clientWidth < 1920)) {         
         dot6.addEventListener('mouseout', () => {
            dot6.style.left = offset(dot6).left - 48 + 'px';
            dot6.style.top = offset(dot6).top - 17 + 'px';
         })
         dot6.addEventListener('mouseover', () => {
            dot6.style.left = offset(dot6).left  - 65 + 'px';
            dot6.style.top = offset(dot6).top - 30 + 'px';
            clearInterval(timerId6);
         })
      } else if(document.documentElement.clientWidth > 1920){
         dot6.addEventListener('mouseover', () => {
            dot6.style.left = offset(dot6).left - 250 + 'px';
            dot6.style.top = offset(dot6).top - 25 + 'px';
            clearInterval(timerId6);         
         })
      } else {
         dot6.addEventListener('mouseout', () => {
            dot6.style.left = offset(dot6).left + 48 + 'px';
            dot6.style.top = offset(dot6).top - 17 + 'px';
         })
         dot6.addEventListener('mouseover', () => {
            dot6.style.left = offset(dot6).left + 35 + 'px';
            dot6.style.top = offset(dot6).top - 30 + 'px';
            clearInterval(timerId6);
         })
      }
   }, 4000)
   let timerId7 = setInterval(function () {
      let rand1 = Math.random() * 2000,
         rand2 = Math.random() * 800,
         box = document.querySelector('.splash-screen'),
         dot7 = document.querySelector('.heptagon-7');
      if (document.documentElement.clientHeight < 420) {
         rand2 = Math.random() * 100;
      }
      if (document.documentElement.clientWidth < 1024 && document.documentElement.clientHeight < 420) {
         rand1 = Math.random() * 500;
      }
      if (document.documentElement.clientHeight < 330 && document.documentElement.clientWidth < 600) {
         rand2 = Math.random() * 100;
         rand1 = Math.random() * 400;
      }
      if (document.documentElement.clientHeight < 600 && document.documentElement.clientWidth < 330) {
         rand2 = Math.random() * 400;
         rand1 = Math.random() * 200;
      }
      if (rand1 >= box.clientWidth) {
         rand1 = box.clientWidth - 300
      }
      dot7.style.left = rand1 + 'px';
      if (rand2 >= box.clientHeight) {
         rand2 = box.clientHeight - 300
      }
      dot7.style.top = rand2 + 'px';
      if ((document.documentElement.clientWidth > 1700) && (document.documentElement.clientWidth < 1920)) {         
         dot7.addEventListener('mouseout', () => {
            dot7.style.left = offset(dot7).left - 48 + 'px';
            dot7.style.top = offset(dot7).top - 17 + 'px';
         })
         dot7.addEventListener('mouseover', () => {
            dot7.style.left = offset(dot7).left  - 65 + 'px';
            dot7.style.top = offset(dot7).top - 30 + 'px';
            clearInterval(timerId7);
         })
      } else if(document.documentElement.clientWidth > 1920){
         dot7.addEventListener('mouseover', () => {
            dot7.style.left = offset(dot7).left - 250 + 'px';
            dot7.style.top = offset(dot7).top - 25 + 'px';
            clearInterval(timerId7);         
         })
      } else {
         dot7.addEventListener('mouseout', () => {
            dot7.style.left = offset(dot7).left + 48 + 'px';
            dot7.style.top = offset(dot7).top - 17 + 'px';
         })
         dot7.addEventListener('mouseover', () => {
            dot7.style.left = offset(dot7).left + 35 + 'px';
            dot7.style.top = offset(dot7).top - 30 + 'px';
            clearInterval(timerId7);
         })
      }
   }, 4000)
}
particlesJS('particles-js', {
   "particles": {
      "number": {
         "value": 80,
         "density": {
            "enable": true,
            "value_area": 800
         }
      },
      "color": {
         "value": "#000"
      },
      //#ffe600
      "shape": {
         "type": "circle",
         "stroke": {
            "width": 0,
            "color": "#000"
         },
         "polygon": {
            "nb_sides": 5
         },
         "image": {
            "src": "img/github.svg",
            "width": 620,
            "height": 690
         }
      },
      "opacity": {
         "value": 1,
         "random": false,
         "anim": {
            "enable": false,
            "speed": 1,
            "opacity_min": 0.1,
            "sync": false
         }
      },
      "size": {
         "value": 4,
         "random": true,
         "anim": {
            "enable": false,
            "speed": 80,
            "size_min": 0.1,
            "sync": false
         }
         //
      },
      "line_linked": {
         "enable": true,
         "distance": 300,
         "color": "#2a2a34",
         "opacity": 0.4,
         "width": 1.15
      },
      //#bba801
      "move": {
         "enable": true,
         "speed": 2.7,
         "direction": "none",
         "random": false,
         "straight": false,
         "out_mode": "out",
         "bounce": false,
         "attract": {
            "enable": false,
            "rotateX": 7400,
            "rotateY": 1200
         }
      }
   },
   "interactivity": {
      "detect_on": "canvas",
      "events": {
         "onhover": {
            "enable": false,
            "mode": "repulse"
         },
         "onclick": {
            "enable": false,
            "mode": "push"
         },
         "resize": true
      },
      "modes": {
         "grab": {
            "distance": 400,
            "line_linked": {
               "opacity": 1
            }
         },
         "bubble": {
            "distance": 800,
            "size": 80,
            "duration": 2,
            "opacity": 0.8,
            "speed": 3
         },
         "repulse": {
            "distance": 400,
            "duration": 0.4
         },
         "push": {
            "particles_nb": 4
         },
         "remove": {
            "particles_nb": 2
         }
      }
   },
   "retina_detect": true
})
if (document.documentElement.clientWidth < 460 || document.documentElement.clientHeight < 460) {

   const hep1 = document.querySelector('.heptagon-1'),
      hep2 = document.querySelector('.heptagon-2'),
      hep3 = document.querySelector('.heptagon-3'),
      hep4 = document.querySelector('.heptagon-4'),
      hep5 = document.querySelector('.heptagon-5'),
      hep6 = document.querySelector('.heptagon-6'),
      hep7 = document.querySelector('.heptagon-7');

   (function () {
      let heps = document.querySelectorAll('.heptagon');
      if (heps.length > 0) {
         for (let i = 0; i < heps.length; i++) {
            const hep = heps[i];
            hep.classList.add('animItem' + [i + 1]);
         }
      }
   }());

   setTimeout(delClass, 4300)
   setTimeout(delClass3, 4300)
   setTimeout(delClass1, 5300)
   setTimeout(delClass2, 5300)
   setTimeout(delClass4, 5900)
   setTimeout(delClass5, 5900)
   setTimeout(delClass6, 5900)
   setTimeout(delClass11, 7500)
   setTimeout(delClass33, 7500)
   setTimeout(delClass55, 8000)
   setTimeout(delClass77, 8500)

   function delClass() {
      if (hep1.classList.contains('animItem1')) {
         hep1.classList.remove('animItem1');
         hep1.classList.add('firstReversBlock');
      }
   }
   function delClass1() {
      if (hep2.classList.contains('animItem2')) {
         hep2.classList.remove('animItem2');
         hep2.classList.add('thirdReversBlock');
      }
   }
   function delClass2() {
      if (hep3.classList.contains('animItem3')) {
         hep3.classList.remove('animItem3');
         hep3.classList.add('fourthReversBlock');
      }
   }
   function delClass3() {
      if (hep4.classList.contains('animItem4')) {
         hep4.classList.remove('animItem4');
         hep4.classList.add('secondReversBlock');
      }
   }
   function delClass4() {
      if (hep5.classList.contains('animItem5')) {
         hep5.classList.remove('animItem5');
         hep5.classList.add('fifthReversBlock');
      }
   }
   function delClass5() {
      if (hep6.classList.contains('animItem6')) {
         hep6.classList.remove('animItem6');
         hep6.classList.add('sixthReversBlock');
      }
   }
   function delClass6() {
      if (hep7.classList.contains('animItem7')) {
         hep7.classList.remove('animItem7');
         hep7.classList.add('seventhReversBlock');
      }
   }
   function delClass11() {
      if (hep2.classList.contains('thirdReversBlock')) {
         hep2.classList.remove('thirdReversBlock');
         hep2.classList.add('rotate-2');
      }
   }
   function delClass33() {
      if (hep4.classList.contains('secondReversBlock')) {
         hep4.classList.remove('secondReversBlock');
         hep4.classList.add('rotate-1');
      }
   }
   function delClass55() {
      if (hep6.classList.contains('sixthReversBlock')) {
         hep6.classList.remove('sixthReversBlock');
         hep6.classList.add('rotate-3');
      }
   }
   function delClass77() {
      if (hep5.classList.contains('fifthReversBlock')) {
         hep5.classList.remove('fifthReversBlock');
         hep5.classList.add('rotate-4');
      }
   }
}

