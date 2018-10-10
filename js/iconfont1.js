(function(window){var svgSprite='<svg><symbol id="icon-andriod" viewBox="0 0 1024 1024"><path d="M835.911 350.045c-29.694 0-53.984 24.291-53.984 53.984l0 215.942c0 29.694 24.291 53.984 53.984 53.984s53.984-24.291 53.984-53.984l0-215.942c0-29.66-24.324-53.984-53.984-53.984zM188.089 350.045c-29.694 0-53.984 24.291-53.984 53.984l0 215.942c0 29.694 24.291 53.984 53.984 53.984s53.984-24.291 53.984-53.984l0-215.942c0-29.66-24.291-53.984-53.984-53.984zM269.083 700.932c0 44.739 36.255 80.961 80.961 80.961l26.976 0 0 107.97c0 29.694 24.291 53.984 53.984 53.984 29.694 0 53.984-24.291 53.984-53.984l0-107.97 53.984 0 0 107.97c0 29.694 24.291 53.984 53.984 53.984s53.984-24.291 53.984-53.984l0-107.97 26.976 0c44.739 0 80.961-36.255 80.961-80.961l0-296.902-485.802 0 0 296.902zM612.049 155.644l34.169-65.617c1.724-3.28 0.463-7.391-2.851-9.081-3.28-1.724-7.391-0.463-9.081 2.851l-34.698 66.611c-27.209-10.506-56.736-16.272-87.589-16.272s-60.382 5.766-87.556 16.305l-34.665-66.678c-1.724-3.28-5.801-4.574-9.081-2.851-3.28 1.724-4.574 5.801-2.851 9.081l34.169 65.651c-76.454 34.598-131.798 107.639-141.377 194.434l482.886 0c-9.71-86.828-65.055-159.835-141.475-194.434zM404.03 308.222c-21.607 0-39.139-17.531-39.139-39.139s17.531-39.139 39.139-39.139c21.607 0 39.139 17.531 39.139 39.139s-17.531 39.139-39.139 39.139zM619.97 308.222c-21.607 0-39.139-17.531-39.139-39.139s17.531-39.139 39.139-39.139c21.607 0 39.139 17.531 39.139 39.139s-17.531 39.139-39.139 39.139z"  ></path></symbol><symbol id="icon-IOS" viewBox="0 0 1024 1024"><path d="M737.007 537.364c-1.092-104.007 84.833-153.888 88.595-156.316-48.181-70.512-123.305-80.221-150.126-81.435-63.958-6.432-124.761 37.622-157.165 37.622-32.404 0-82.405-36.652-135.441-35.681-69.663 1.092-133.863 40.535-169.787 102.915-72.453 125.732-18.569 311.903 52.065 413.727 34.467 49.881 75.609 105.828 129.616 103.887 51.943-2.063 71.604-33.618 134.47-33.618s80.464 33.618 135.563 32.646c55.948-1.092 91.387-50.851 125.611-100.852 39.564-57.89 55.948-113.959 56.798-116.63-1.214-0.729-109.105-41.991-110.197-166.267zM633.605 232.258c28.641-34.71 47.938-83.012 42.72-131.072-41.264 1.699-91.265 27.428-120.878 62.138-26.457 30.826-49.881 79.978-43.569 127.067 45.997 3.641 93.085-23.423 121.727-58.132z" fill="" ></path></symbol></svg>';var script=function(){var scripts=document.getElementsByTagName("script");return scripts[scripts.length-1]}();var shouldInjectCss=script.getAttribute("data-injectcss");var ready=function(fn){if(document.addEventListener){if(~["complete","loaded","interactive"].indexOf(document.readyState)){setTimeout(fn,0)}else{var loadFn=function(){document.removeEventListener("DOMContentLoaded",loadFn,false);fn()};document.addEventListener("DOMContentLoaded",loadFn,false)}}else if(document.attachEvent){IEContentLoaded(window,fn)}function IEContentLoaded(w,fn){var d=w.document,done=false,init=function(){if(!done){done=true;fn()}};var polling=function(){try{d.documentElement.doScroll("left")}catch(e){setTimeout(polling,50);return}init()};polling();d.onreadystatechange=function(){if(d.readyState=="complete"){d.onreadystatechange=null;init()}}}};var before=function(el,target){target.parentNode.insertBefore(el,target)};var prepend=function(el,target){if(target.firstChild){before(el,target.firstChild)}else{target.appendChild(el)}};function appendSvg(){var div,svg;div=document.createElement("div");div.innerHTML=svgSprite;svgSprite=null;svg=div.getElementsByTagName("svg")[0];if(svg){svg.setAttribute("aria-hidden","true");svg.style.position="absolute";svg.style.width=0;svg.style.height=0;svg.style.overflow="hidden";prepend(svg,document.body)}}if(shouldInjectCss&&!window.__iconfont__svg__cssinject__){window.__iconfont__svg__cssinject__=true;try{document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")}catch(e){console&&console.log(e)}}ready(appendSvg)})(window)