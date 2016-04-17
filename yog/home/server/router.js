module.exports = function(router){
    // you can add app common logic here
    // router.use(function(req, res, next){
    // });

    // also you can add custom action
    // require /spa/some/hefangshi
    // router.get('/some/:user', router.action('api'));
    
    // or write action directly
    // router.get('/some/:user', function(res, req){});

    // a restful api example
    // router.route('/book')
    //     .put(router.action('book').put)
    //     .get(router.action('book'));

    // router.route('/book/:id')
    //     .get(router.action('book').get)
    //     .delete(router.action('book').delete);

    router.route('/index')
        .get(router.action('mod-index').get);
};