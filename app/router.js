'use strict';

const router = require('koa-router')();

async function home(ctx) {
    await ctx.render('home_page/index');
}

async function tour_details(ctx) {
    await ctx.render('second_page/index');
}

router.get('/home_page', home);
router.get('/home', home);
router.get('/details', tour_details);
router.get('/tourDetails', tour_details);
router.get('/', tour_details);


module.exports = router;
