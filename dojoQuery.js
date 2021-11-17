(function() {
    function $Dojo(selector){
        this.obj = document.getElementById(selector);
        this.click = function(callback){
            this.obj.addEventListener('click', callback)
            return this;
        }
        this.hover = function(onmouseover, onmouseout){
            this.obj.addEventListener('mouseover', onmouseover);
            this.obj.addEventListener('mouseout',onmouseout);
            return this;
        }
    }
    new $Dojo('myButton').click(function(){alert('The button was clicked')});
    new $Dojo('myButton').hover(function(){alert('The button was hovered')}, function(){alert('Not anymore')});
 }());

