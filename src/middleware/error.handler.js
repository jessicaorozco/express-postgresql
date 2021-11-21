function logErrors(err, req, res, next) {
  console.error(err);
  console.log('logErrors')
  next(err);
}
function errorHandler(err, req, res, next) {
  console.log('errorHandler')
  res.status(500).json({
    message: err.message,
    stack: err.stack
  });
}
function boomErrorHanddler(err, req, res, next){
  if(err.isBoom){
    const {output} = err;
    res.status(output.statusCode).json(output.payload)
  }
  next(err)
}

module.export = {logErrors, errorHandler, boomErrorHanddler}
