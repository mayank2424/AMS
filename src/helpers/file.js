const cloudinary = require('cloudinary').v2;

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});

exports.uploadFileToCloud = async(file) => {
    try {
        const rs = await cloudinary.uploader.upload(file) || {};
        return {
            url: rs?.secure_url
        }
    } catch(error) {    
        return null;
    }
}