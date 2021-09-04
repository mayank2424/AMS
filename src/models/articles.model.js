/**
 * User Model Helper
 */
 const mongoose = require('mongoose');
 const Article = mongoose.model('articles');
 
 
 /**
  * All model CRUD Methods
  */
 
 //Create
 exports.create = async (article) => {
     return await Article.create(article);
 };
 
 //Read
 exports.readByKey = async (query, sortBy = null, limit = null) => {
     const response = await Article.find(query, sortBy, limit).lean();
     return response;
 };
 
 //Read One By key
 exports.readOneByKey = async(query, select = [], populate = []) => {
     const response = await Article.findOne(query)
         .populate(populate)
         .select(select.join(' '))
         .lean();
     return response;
 };
 
 //Read Selected By Key
 exports.readSelectedByKey = async(query, select = [], populate = [], sort = {}) => {
     const response = await Article.find(query)
         .populate(populate)
         .sort(sort)
         .select(select.join(' '))
         .lean();
     return response;
 };
 
 //Update Single
 exports.update = async(query, condition, options = { new: true, runValidators: true }) => {
     return Article.findOneAndUpdate(query, condition, options)
     .lean()
 }
 //Delete Single
exports.delete = async(query) => {
    return Article.deleteOne(query)
}