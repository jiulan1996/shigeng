/**
 * Created by s on 2016/9/3.
 */
var cebian=function(){
    var absolute_div=document.getElementById('absolute_div');
    var thebody=document.body;
    cebian.prototype.init=function(){

        var marTop=absolute_div.offsetTop;
        alert(marTop);
    }
}