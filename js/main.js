

(function() {
    'use strict';


    AFRAME.registerComponent('set-box1', {
      schema: {default:''},
      init() {
        const box = document.querySelector('a-box');

        const obj = document.getElementById('obj');
        this.el.addEventListener('click', () => {

          $.ajax({

            type: 'GET',
            url: 'https://pubads.g.doubleclick.net/gampad/adx?iu=/35096353/vrtesting&sz=2000x2000&c=12345&t=pos%3Dbottom',

            success: function(data) {
              var ad_url = $(data).find('.img_ad').attr('src');

              box.setAttribute('src', ad_url);
              obj.setAttribute('material', 'src: url(' + ad_url +   ')');
            }

          });    
        });
      }
    });


    AFRAME.registerComponent('set-box2', {
      schema: {default:''},
      init() {
        const box = document.querySelector('a-box');

        const obj = document.getElementById('obj');
        this.el.addEventListener('click', () => {

          $.ajax({

            type: 'GET',
            url: 'https://pubads.g.doubleclick.net/gampad/adx?iu=/35096353/vrtesting&sz=2000x2000&c=12345&t=pos%3Dtop',

            success: function(data) {
              var ad_url = $(data).find('.img_ad').attr('src');

              box.setAttribute('src', ad_url);
              obj.setAttribute('material', 'src: url(' + ad_url +   ')');
            }

          });    
        });
      }
    });

    window.onload = function(){
      /*
         const sky = document.querySelector('a-sky');
         sky.setAttribute('src', 'img/concerthall.jpg');
*/
/*
         $.ajax({

          type: 'GET',
          url: 'https://pubads.g.doubleclick.net/gampad/adx?iu=/35096353/vrtesting&sz=2000x2000&c=12345',

          success: function(data) {
            
            var ad_url = $(data).find('.img_ad').attr('src');
            
            /* //For Http
            var index_start = data.search('http://pagead2.googlesyndication.com/');
            var index_end = data.substring(index_start).search('"');

            var ad_url = data.substring(index_start, index_start+index_end)

            $('#ad').attr('src', ad_url);
          }

        });       
*/
        /*
        var img = new Image();
        img.crossOrigin = "anonymous";   // COMMENT OUT TO SEE IT FAIL
        img.src = "http://pubads.g.doubleclick.net/gampad/ad?iu=/35096353/amptesting/image/static&sz=300x250&c=12345";

        function uploadTex() {
            var assetsObj = document.querySelector('a-assets');
            assetsObj.appendChild(img);
            console.log('injected');
        }
        */

  }
})();