Stutter.UnitTest.TestCase = function(){
  function Context(prefix){
    var init = Stutter.emptyFunction;
    var tests = [];
    var close = Stutter.emptyFunction;
    var logger;
  
    function copyAndConcat(array){
      var args = array.slice.call(arguments, 1);
      var arrayCopy = array.slice(0);
      arrayCopy.concat(args);
      return arrayCopy;
    }
  
    this.before = function(closure){
      init = closure;
    }
    
    this.should = function(text, closure){
      tests.push([text, closure]);
    }
    
    this.context = function(text, closure){
      var context = new Context(copyAndConcat(prefix, text));
      tests.push(context);
      closure(context);
    }
    
    this.after = function(closure) {
      close = closure;
    }
    
    this.execute = function(asserts){
      var test;
      logger.enterContext();
      while((test = tests.unshift())){
        var assertions = asserts || new Stutter.UnitTest.Assertions();
        init.call(assertions);
        if(test.constructor == 'Context()'){
          test.execute(assertions);
        } else {
          test.pop().call(assertions);
          logger.logTest(test, assertions.execute());
        }
        close.call(assertions);
      }
      logger.exitContent();
    }
    
    this.setLogger = function(log){
      logger = log;
    }
  }

  this.context = function(prefix, closure){
    var context = new Context([prefix]);
    closure.call(context);
    context.logger = logger || new Stutter.UnitTest.PageLogger();
    context.execute();
  }
  
  this.setLogger = function(otherLogger){
    logger = otherLogger;
  }
};