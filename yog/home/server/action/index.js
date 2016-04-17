/**
 * @des: 首页渲染
 */
var index = require('../model/index.js');

module.exports = function (req, res, next) {
    console.log(req.url, 'start render', +new Date());
    res.render('home/page/index.tpl', index.getData());
    console.log(req.url, 'end render', +new Date());
};
