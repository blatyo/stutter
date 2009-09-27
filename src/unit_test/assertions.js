Stutter.UnitTest.Assertions = function Assertions(){
  var assertions = [];
  this.getAssertions = function(){
    return assertions;
  }
  function equal(expected, actual){
      return expected == actual;
  }
  
  function identical(expected, actual){
    return expected === actual;
  }
  
  function enumTest(expected, actual, operation){
    if(equal(expected.length, actual.length)){
      var same = true, length = expected.length;
      for(i = 0; i < length && equal; ++i){
        same = same && operation(expected[i], actual[i]);
      }
      return same;
    }
    return false;
  }
  
  this.test = function(assert){
    var results = {pass: false, fail: false, error: false};
    try{ assert() ? results.pass = true : results.fail = true; }
    catch(e){ results.error = true; results.errorMessage = e; }
    
  }
  
  this.assert = function(expression){
    function assert(){
      return expression;
    }
    assert.failureMessage = 'Expression resulted in a false value.';
    this.assertions.push(assert);
  }
  
  this.assertEqual = function(expected, actual){
    function assert(){
      return equal(expected, actual)
    }
    assert.failureMessage = actual + ' is not equal to ' + expected;
    this.assertions.push(assert);
  }
  
  this.assertNotEqual = function(expected, actual){
    function assert(){
      return !equal(expected, actual);
    }
    assert.failureMessage = actual + ' is equal to ' + expected;
    this.assertions.push(assert);
  }
  
  this.assertIdentical = function(expected, actual){
    function assert(){
      return identical(expected, actual);
    }
    assert.failureMessage = actual + " is not identical to " + expected;
    this.assertions.push(assert);
  }
  
  this.assertNotIdentical = function(expected, actual){
    function assert(){
      return !identical(expected, actual);
    }
    assert.failureMessage = actual + " is identical to " + expected;
    this.assertions.push(assert);
  }
  
  this.assertNull = function(actual){
    function assert(){
      return identical(null, actual);
    }
    assert.failureMessage = actual + " is not null";
    this.assertions.push(assert);
  }
  
  this.assertNotNull = function(actual){
    function assert(){
      return !identical(null, actual);
    }
    assert.failureMessage = actual + " is null";
    this.assertions.push(assert);
  }
  
  this.assertUndefined = function(actual){
    function assert(){
      return identical('undefined', typeof actual);
    }
    assert.failureMessage = actual + " is defined";
    this.assertions.push(assert);
  }
  
  this.assertDefined = function(actual){
    function assert(){
      return !identical('undefined', typeof actual);
    }
    assert.failureMessage = actual + " is undefined";
    this.assertions.push(assert);
  }
  
  this.assertType = function(expected, actual){
    function assert(){
      return equal(expected, actual.constructor);
    }
    assert.failureMessage = actual + " is not of type " + expected;
    this.assertions.push(assert);
  }
  
  this.assertNotOfType = function(expected, actual){
    function assert(){
      return !equal(expected, actual.constructor);
    }
    assert.failureMessage = actual + " is of type " + expected;
    this.assertions.push(assert);
  }
  
  this.assertEqualEnum = function(expected, actual){
    function assert(){
      return enumTest(expected, actual, equal);
    }
    assert.failureMessage = actual + " is not equal to " + expected;
    this.assertions.push(assert);
  }
  
  this.assertNotEqualEnum = function(expected, actual){
    function assert(){
      return !enumTest(expected, actual, equal);
    }
    assert.failureMessage = actual + " is equal to " + expected;
    this.assertions.push(assert);
  }
  
  this.assertIdenticalEnum = function(expected, actual){
    function assert(){
      return enumTest(expected, actual, identical);
    }
    assert.failureMessage = actual + " is not identical to " + expected;
    this.assertions.push(assert);
  }
  
  this.assertNotIdenticalEnum = function(expected, actual){
    function assert(){
      return !enumTest(expected, actual, identical);
    }
    assert.failureMessage = actual + " is identical to " + expected;
    this.assertions.push(assert);
  }
  
  this.assertRespondsTo = function(method, obj){
    function assert(){
      return obj[method] && typeof obj[method] == 'function';
    }
    assert.failureMessage = object + " does not respond to " + method;
    this.assertions.push(assert);
  }
}