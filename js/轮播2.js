/**
 * Created by s on 2016/9/3.
 */
var lunbo_2=function(){
    var lunbo2=document.getElementById("lunbo2");
    var list=document.getElementById('list');
    var left=document.getElementById('left_2');
    var right=document.getElementById('right_2');
    var clickFlag=true;
    var marleft= 0,width=410;
    var index=0;
    var start= 0,end=0;
    var timer;

    lunbo_2.prototype.init=function(){
        right.onclick=function(){
            //debugger;
            if(clickFlag){
                index++;
                if(index>10){
                    index=0;
                }
                marleft=-width*index;
                animate(marleft);
            }
            clickFlag=false;
        }
        left.onclick=function(){
            //debugger;
            if(clickFlag){
                index--;
                if(index<0){
                    index=9;
                    list.style.left=-width*(index+1)+'px';
                }
                marleft=-width*index;
                animate(marleft);
            }
            clickFlag=false;
        }

        function animate(fangxiang){
            start=parseInt(list.style.left);
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
                list.style.left=start+change/time*jishi+'px';
                if(index==9&jishi>=time){
                    list.style.left=0+'px';
                    index=0;
                }
            },17)
        }

        timer=setInterval(right.onclick,3000);
        list.onmouseover=function(){
            clearInterval(timer);
        }
        list.onmouseout=function(){
            timer=setInterval(right.onclick,3000);
        }
    }

}