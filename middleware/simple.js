const simple = (req, res, next) => {
    console.log('im simple')
    next();
}
module.exports =  simple