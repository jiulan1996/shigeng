/**
 * Created by s on 2016/9/3.
 */
window.onload=function(){
    var go1=new lunbo1();
    go1.init();
    var go2=new lunbo_2();
    go2.init();
    var absolute_div=document.getElementById('absolute_div');


}
function scroll(){

    if(document.body.scrollTop<=(screen.availHeight-500)){
       // alert(document.body.scrollTop)
        absolute_div.style.display='none';
     }
     else{
        absolute_div.style.display='block';
     }
    //alert(document.body.scrollTop);
}