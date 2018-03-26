'use strict';

const router = require('koa-router')();

async function home_page(ctx) {
    await ctx.render('home_page/index');
}

async function home_page(ctx) {
    await ctx.render('second_page/secondPage');
}

router.get('/home_page', home_page);
router.get('/second_page', home_page);
router.get('/', home_page);

module.exports = router;
