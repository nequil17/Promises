function attachTitle(isName) {
  return 'DR. ' + isName;

}

Promise.resolve('MANHATTAN')
  .then(attachTitle)
  .then(console.log);