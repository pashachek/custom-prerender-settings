const prerender = require('prerender');

const removeScriptTags = require('./plugins/removeScriptTags');
const forceRefresh = require('./plugins/forceRefresh');
const levelCache = require('prerender-level-cache');

process.env['BROWSER_FORCE_RESTART_PERIOD'] = 1800000;
process.env['POST_IS_OFF'] = true;

const server = prerender({
    chromeFlags: ['--no-sandbox', '--headless', '--disable-gpu', '--remote-debugging-port=9222', '--hide-scrollbars'],
    forwardHeaders: true,
    chromeLocation: '/usr/bin/chromium-browser'
});

//2 weeks
server.options.ttl = 14*24*3600*1000;

var d = new Date();
var curr_hours = d.getHours() - 1;
var curr_mins = 60 - d.getMinutes();
var curr_secs = 60 - d.getSeconds();
var curr_date = d.getDate();
var curr_year = d.getFullYear();
var curr_day = new Intl.DateTimeFormat('en-US', { weekday: 'short'}).format(d);
var curr_month = new Intl.DateTimeFormat('en-US', { month: 'short'}).format(d);
var last_mod_date_str = curr_day + ', '  + curr_date + ' ' + curr_month + " " + curr_year + ' '+curr_hours+':'+curr_mins+':'+curr_secs+' GMT';

server.use({
    beforeSend: (req, res, next) => {
      res.setHeader('Last-modified', last_mod_date_str);
      next();
    }
});

server.use(prerender.sendPrerenderHeader());
server.use(prerender.browserForceRestart());
// server.use(prerender.blockResources());
server.use(prerender.blacklist());
server.use(prerender.httpHeaders());

server.use(removeScriptTags);
server.use(forceRefresh);
server.use(levelCache);

server.start();
