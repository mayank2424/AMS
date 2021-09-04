/**
 * getPublicArticles Schema
 */
 const mongoose = require('mongoose');


 const ArticlesSchema = new mongoose.Schema({
    author:  {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
    },
    title: {
         type: String,
         trim: true,
         required: true,
     },
     description: {
         type: String,
         required: true,
     },
     thumbnail: {
         type: String,
     },
     slug: {
         type: String,
         required: true,
     },
     likes: [
         {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'user',
         }
     ],
     tags: [
         {
             type: String,
         }
     ],
     is_private: {
         type: Boolean,
         default: false,
     },
    is_active: {
        type: Boolean,
        default: true,
    },
    is_draft: {
        type: Boolean,
        default: false,
    }
 }, { timestamps: true })
 

 module.exports = mongoose.model('articles', ArticlesSchema);