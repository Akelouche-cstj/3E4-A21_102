export default (req, res, next) =>{
    console.log('Request Metod:',req.method);
    next();
}