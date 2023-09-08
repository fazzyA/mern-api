
const uploadFile = async (req, res) => {
    console.log('first', req.file)
    const file = req.file;
    // code update file name in db
    // let data = await User.findByIdAndUpdate(userId, {
    //     image: file.originalname,
    //   });
  
    return res.send('ok');
}

module.exports = {
    uploadFile
}