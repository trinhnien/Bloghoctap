const Course = require('../models/Course');
const { mutipleMongooseToObject } = require('../../util/mongoose');
class SiteController {
    // [GET] /news
    index(req, res, next) {
         Course.find({})
         .then(courses => res.render('home',{
             courses: mutipleMongooseToObject(courses)
             }))
            .catch(next);
    }
    search (req, res) {
        res.render('news');
    }

}
module.exports = new SiteController();