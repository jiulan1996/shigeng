/**
 * Created by s on 2016/9/3.
 */
var lunbo1=function(){
    var bg=document.getElementById("big_img");
    var lunbo=document.getElementById('lunbo');
    var left=document.getElementById('left');
    var right=document.getElementById('right');
    var clickFlag=true;
    var marleft=0;
    var index=0;
    var start= 0,end=0;
    var timer;
    lunbo1.prototype.init=function(){
        right.onclick=function(){
            if(clickFlag){
                index++;
                if(index>4){
                    index=0;
                }
                marleft=-document.body.clientWidth*index;
                animate(marleft);
            }
            clickFlag=false;
        }
        left.onclick=function(){
            if(clickFlag){
                index--;
                if(index<0){
                    index=3;
                    lunbo.style.left=-document.body.clientWidth*(index+1)+'px';
                }
                marleft=-document.body.clientWidth*index;
                animate(marleft);
            }
            clickFlag=false;
        }

        function animate(fangxiang){
            start=parseInt(lunbo.style.left);
            end=fangxiang;
            var change=end-start;
            var time=30;
            var jishi=0;
            var t;
            t=setInterval(function(){
                jishi++;
                if(jishi>=time){
                    clearInterval(t);
                    clickFlag=true;
                }
                lunbo.style.left=start+change/time*jishi+'px';
                if(index==4&jishi>=time){
                    lunbo.style.left=0+'px';
                    index=0;
                }
            },17)

        }

        timer=setInterval(right.onclick,3000);
        bg.onmouseover=function(){
            clearInterval(timer);
        }
        bg.onmouseout=function(){
            timer=setInterval(right.onclick,3000);
        }
}

}
