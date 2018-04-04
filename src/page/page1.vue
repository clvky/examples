<style lang="scss">
@import "./../assets/scss/mixins/mixins.scss";
html,body{width:100vw;height:100vh;}
ul,li{list-style:none;}
.page1{
    .main{
        width:750px;
        font-size:32px;
    }
    .list{background-color:#fff;}
    .info{width:640px;margin:0 auto;margin-bottom:30px;}
    .info.pxcls{font-size:16px;}

    $border-img:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEcAAABHCAYAAABVsFofAAAABHNCSVQICAgIfAhkiAAAAAFzUkdCAK7OHOkAAAAEZ0FNQQAAsY8L/GEFAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAFnRFWHRDcmVhdGlvbiBUaW1lADAyLzIyLzEz2ZkNWQAAAB90RVh0U29mdHdhcmUATWFjcm9tZWRpYSBGaXJld29ya3MgOLVo0ngAAAe0SURBVHhe7VxHjxVHEB4WocXmRlriwnICybJsgVfkjMACA4If4J9gfLDIOckC2xfu+MDNEhmLnINEsJEtyxYS7C45WCSJsKRyfzs9y7x+1T3d0z3wnswnfXqa6Z6aeTUdqqqrJyIXbNhAtGSJPAiLq1eJ5s0jOnZMngiNAweI5syRB3awV86iRaK2qA6uWCFPhsGVK0Tjx8eie/cmOn5cFoTC7t1EnTvHN2hslCezYaec1avfKgbs2JFozRpZ6AcoZtKkUvF9+gRU0PbtRF27lt5gyhSiJ09kBT1ETQNevCBaurRUcMLaWqJ164hevZKV3dHURDRxIi8eCvLuYlu3xk2Ru8H06UT37smKPEQtDZ49K+1KHNFUoaDXr+VF9rh+nWjMGF5swp49PVoQFNOvHy844cyZ8YNoIGowePqUaMGCcmEc0YLWrpUX2uH2baJRo3hxKnONQdu2xU2PE6hy9ux4NmAgShWgxcyfT1RTUy5Ix06diFaulALMuHEju8WorK8nOnRICsjCzp1E3bvzgnSEgvBgCkRJCi9fZnclEzE+GYAWPHo0f2kWBw6MZ2Mj9u4l6tKFF5DFWbPKxiBxNgXd4OvCVauksFLgxeRVTMKGBkMLOnWKv8iFGKRTs5g4I4E/xV2Qh8oYdPeue1fSEV3s5EkpOMG5c3zlPMQ0LyGOBHy6ko7Skm5qJho+nK+Sl5jFjh5tEy/62n6+kg+loRjRpk3lhYF485v1NEVY7EyRN+sGEF34SWjoY2GQchV8KbpYTTRoUBTV1kbB0VAfffT54OiTIfI4MD77NIq6Dq6LoqFfyDOB0dgIFQnA9+jWjddgHg4Qr/XgwTbRz58TLVzoZhlkETPvzZtt4vPZBibCNZK+oziS2LFDb2q7sG/f1IAQAzYlFNShA3+JC1mb7datMAqCQZvyGcWZFGBZZpncJmKkLJtKYsC2hIK4y2wJU+TaNSlQBcxuH1shcYXevJECxWn5+xbwSfD2OQEmotVleIqtrflNqRkz4v9vRLOYGnWerIloMevXlznRooQB3HwXExzKtHSA8GJcTaqpU4keP5YCsgBXf/JkXhBHuD7oSqkWk0CUarBrl50pnjM6tWwZL04lHFRnIEg0YQIvUKXBJxSlBuzbVy4szR49vIIuWWPQ0KGyYh6gBWW5/hm+oKiRgdOny4WC6ErwZzyBF8eJR9jUG5jFxo7lb4DoZgZELQucP18qGHaMMl37QFXQtGlxEDIIoCB1FrOMP4maljgkjLpaYSAN6m8RO3ADAomJewfH+P59WRAKbSGBEfENHFZP7JUjcG3zfrr8/S/yKCwwG23ZQnT5sjwRGI8vXKKLX/8oj+xgrZyWFqJxorlPnpky3asEcGG+Wyzs28FERxxGAyvl3LlDNEK2StAQdq04qOFwgxFfhkzloLtyAz4UZAjcVwSgGC4cjoDZ4cOykgGiqh5ZMV/4OmhVlQi4KiZn1yYmLarxsI35wud59EheVCGAJ4BJiXveNKEgGVlhIaqUwzUCALukkqAzLDnCZNN5P6K4FOhKI0eWC8liLh+oAOTx+nv1IjpxQgpIQRS9BdwRn5iRly8UAD7xorq6cjdRnI4B4ytPKEQlfCKsDb5rILLJPY8L1ewOcYpPA/EhxqAHD9rkFw7Ep5Yv558jD9MKitBiksShkMQshm5aJB4+tM93cCFCVDAUowKXrdoij0UCYwQWC7h7+xIOcJROOQvJd9VyfIP2HNtbDm7iGnbN4rsec1zsmiyWjDnxT7hB+X3NViEUxM5WCbCy4WPnDBsmBb0nLF7MP5cNjXZOgrwJRpViIduuaqRpZSEngKddzb6Vy7qYk2+V4INXLurIXxZZCqr0eA6C9oXEcxJUcyQQyQuwoAuJBCZATl86jFFtMeS0oRg0hpygRShj/JfVvfrQf0gBqw8Jrm/eV+XrVj/IIzvYK+egGL0KWvGEC1Doimeb8VbUiqea5xt4rVyNx1TPWrkuMzxQloUughckywKDo84W8c6ywF4CTnDC/21+zofMLo1ykFVaYE6gazDcKScQ051L7MUpJxDZpLYbudK0zCa18Xk4WmeT2raYNK2ySW22/ploMD9VSzUPjXnImJWyxhgTjXnISK/F2+cudCG62JEjUmiMJNuh0Az2PEEolWwGO/Y+qNuLfZja+6Bz/nwIBbW7MHmjczqW7H3YsyfWGFfRhw319ODnbfStR+jSxKlfidn617+EYgJv5kooZrGaqLk5ilpb5T6agGi6Gj37/Z/oz7/lcWBc/COK7l/6N4p+OyfPBMbZs1CRgE9kWkfpwzS35MvaMBHjfrv3gu7LVfJh+069BBiIuIp5qPguiBaOG8dXdSW7x1PNk/Zh2R7PBCFW5DW7g01uji2Nu4PPnOEvcqF2dzBQ7fvKsVejsH3lQLJrrMAvEui2I+jo9EUC+IRwiDlBOsI2wIMpECUMEuOEE6QSZkClfcsCBq2tC2QIiItSDaCgrC5W8FdQsESbw+GPUdhXUBJgDNLFFtBiPL+fAz9R50DjxXuEimKYvoaCwTf393PSUKf5wF9eUtNf1GwHLxT25aU00oai9D1CAUG7JIEqZ+zMDLhIhX2zK8HGjU7RexdgTCz8a29z58oDGxD9B3cZ9GfyN3CVAAAAAElFTkSuQmCC";

    $border-imgred:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEcAAABHCAIAAADa0s1IAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OThGQ0NGQjkzNzFCMTFFOEFBREJDQzM5RjFENTZGOTgiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OThGQ0NGQkEzNzFCMTFFOEFBREJDQzM5RjFENTZGOTgiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo5OEZDQ0ZCNzM3MUIxMUU4QUFEQkNDMzlGMUQ1NkY5OCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo5OEZDQ0ZCODM3MUIxMUU4QUFEQkNDMzlGMUQ1NkY5OCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PjLqlVsAAABfSURBVHja7M8xDQAwCAAwWIIa/LtA1ETwkdZBc6rjnBcXWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZbXwBBgAg9gGKMju0UQAAAABJRU5ErkJggg==";

    .box.pxcls{
        width:90px;height:90px;margin:auto;
        background-color:#ccc;
        border:15px solid transparent;
        // border-image:url($border-imgred) 0 0 30 0 stretch;
        border-image-source:url(http://imagesrc.oss-cn-shenzhen.aliyuncs.com/notes/border.png);
    }

    .bor-a.pxcls {
        width:90px;height:90px;margin:auto;
    	border: 1px solid;
    	border-image: linear-gradient(#000, #000) 1;
    }

}
</style>

<style>
@svg 1px-border {
    height: 2px;
    @rect { fill: var(--color, black); width: 100%; height: 50%; }
}
.example1 {
    border: 1px solid transparent;
    border-image: svg(1px-border param(--color #000)) 2 2 stretch;
}

@svg square {
    @rect {
        fill: var(--color, black); width: 100%; height: 100%;
    }
}
.example2 { background: white svg(square param(--color #000)); }
.box1.pxcls{
    border: 10px solid;margin:20px auto;
    width:90px;height:90px;
    border-image: url(http://imagesrc.oss-cn-shenzhen.aliyuncs.com/notes/border.png);
}
</style>

<template>
    <div class="page1">
        <header>header</header>
        <main class="main">
            <ul class="list">
                <li v-for="(item,index) in data" :key="index">
                    {{item.name}}
                </li>
            </ul>
            <p class="pxcls info example1">小敏</p>

            <div class="box pxcls">

            </div>

            <div class="bor-a pxcls">

            </div>
            <div class="box1 pxcls">

            </div>
        </main>
    </div>
</template>

<script>
export default {
    name: 'page1',
    data () {
        return {
            msg: 'Welcome to Your Vue.js App',
            data:[
                {name:'page1',text:'page11'}
            ]
        }
    }
}
</script>
