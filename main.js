// DetectNewBuffer//fail__5__.js
new Buffer(5);
Buffer(5);
new Buffer(res.body.amount);
new Buffer(res.body.values);

function stringToBase64(req, res) {
  // The request body should have the format of `{ string: 'foobar' }`.
  const rawBytes = new Buffer(req.body.string);
  const encoded = rawBytes.toString('base64');
  res.end({ encoded });
}



// DetectNewBuffer//pass.js
new Buffer([1, 2, 3]);
Buffer([1, 2, 3]);
Buffer.alloc(5);
Buffer.allocUnsafe(5);
Buffer.from([1, 2, 3]);

Buffer.alloc(res.body.amount);
Buffer.from(res.body.values);

function stringToBase64(req, res) {
  // The request body should have the format of `{ string: 'foobar' }`.
  const rawBytes = new Buffer.alloc(5);
  const encoded = rawBytes.toString('base64');
  res.end({ encoded });
}
