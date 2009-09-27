function runTest(){
  var testCase = new Stutter.UnitTest.TestCase();
  testCase.context("Stutter.UnitTest.Assertions", function(){with (this) {
    before(function(){
      this.assertions = new Stutter.UnitTest.Assertions();
    });
    should("respond to assert", function(){with (this) {
      assertRespondsTo('assert', this.assertions);
    }});
    context("with assert", function(){with(this){
      should("return a function that returns true when the asserted expression is true", function(){with(this){
        assert(this.assertions.assert(true)());
      }});
    }});
  }});
}
