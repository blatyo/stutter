Stutter.UnitTest.Loggers.PageLogger = function Logger(){
  var appendable = document.body;
  this.enterContext = function(context){
    var div = document.createElement('div');
    appendable.appendChild(div);
    appendable = div;
  }
  
  this.exitContext = function(){
    appendable = appendable.parentNode();
  }
}