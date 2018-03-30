'use strict';

const router = require('koa-router')();

async function home_page(ctx) {
    await ctx.render('home_page/index');
}

async function second_page(ctx) {
    await ctx.render('second_page/secondPage');
}

async function new_second_page(ctx) {
    await ctx.render('second_page/index');
}


router.get('/home_page', home_page);
router.get('/second_page', second_page);
router.get('/new_second_page', new_second_page);
router.get('/', home_page);

module.exports = router;
