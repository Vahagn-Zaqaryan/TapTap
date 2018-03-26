'use strict';

const router = require('koa-router')();

async function home_page(ctx) {
    await ctx.render('home_page/index');
}

router.get('/home_page', home_page);
router.get('/', home_page);

module.exports = router;
