import nextFrame from "./index.js";
import assert from "assert";

describe("nextFrame", function(){
  it("should be async", function(done){
    var i = 0;
    nextFrame(function() {
      i++;
      assert.equal(i, 1);
      done();
    });
    assert.equal(-1, [1,2,3].indexOf(0));
  })
})

