var first = first();

var second = first.then(function (value) {
  return second(value);

});

second.then(console.log);