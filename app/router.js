'use strict';

const router = require('koa-router')();

async function home(ctx) {
    await ctx.render('home/index');
}

async function tour_details(ctx) {
    await ctx.render('tour_details/index');
}

router.get('/details', tour_details);
router.get('/tourDetails', tour_details);
router.get('/home_page', home);
router.get('/home', home);
router.get('/', home);

module.exports = router;
