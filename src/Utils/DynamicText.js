var btn = document.getElementById('send');

/**this is the inplementation*/
btn.addEventListener('click',function(){
  var text = document.getElementById('myText').value;
  var textBox = document.getElementById('showText');
  var content = document.createElement('p');
  textBox.append(linkify(content,text));
  return false;
})

/**this is the matter function */
function linkify(el,text) {
    el.innerHTML = text;

    var urlRegex = /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig;

    var res = text.replace(urlRegex, function (url) {
      var arr = new Array();
      arr.push(url.split(url)[0]);/**texto 1*/
      arr.push(url);/**href*/
      arr.push(url.split('/')[2]);/**dominio*/
      arr.push(url.split(url)[1]);/**texto 2*/

      return arr;
    })

    var href = res.split(',')[1];
    var txt1 = res.split(',')[0];
    var txt2 = res.split(',')[3];
    if(href !== undefined){
      el.innerHTML = '';
      el.append(txt1);

      if (text.includes("/watch?v=") || text.includes("youtu.be/") || text.includes("/video/") || text.includes("dai.ly/")) {
          var cad = document.createElement('div');
          if(href !== undefined){
          var find, repl;
                 if (text.includes("/watch?v=")) { find = /watch[?]v[=]/ig; repl = 'embed/';
          } else if (text.includes("youtu.be/")) { find = '.be'; repl = 'be.com/embed';
          } else if (text.includes("/video/"))   { find = '/video'; repl = '/embed/video';
          } else { find = '.ly'; repl = 'lymotion.com/embed/video'; }

          href = href.replace(find, repl);
          cad.setAttribute('class','embed-container');

          var iframe = document.createElement('iframe');
              iframe.setAttribute('src',href);
              iframe.setAttribute('height','315');
              iframe.setAttribute('frameborder','0');

            cad.append(iframe);
            el.append(cad);
          }
      } else {
          if(href !== undefined){
            console.log('url: ',res);

            var link = document.createElement('a');
                link.setAttribute('class','link');
                link.href = href;
                link.innerHTML = href;

            el.append(link);
          }
      }
      el.append(txt2);
    }

    return el;
}