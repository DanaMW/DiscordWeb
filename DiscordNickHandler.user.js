// ==UserScript==
// @name         DiscordNickHandler
// @namespace    https://raw.githubusercontent.com/danamw/discordweb/master/DiscordNickHandler.user.js
// @downloadURL  https://github.com/DanaMW/DiscordWeb/raw/master/DiscordNickHandler.user.js
// @updateURL    https://raw.githubusercontent.com/danamw/discordweb/master/DiscordNickHandler.user.js
// @version      0.0.22
// @description  Nick Change And Color
// @author       Dana l. Meli-Wischman
// @icon         https://danamw.github.io/img/eyeball128.png
// @grant        none
// @include      /https?://discord\.com/channels/*/
// @require      https://code.jquery.com/jquery-3.6.0.min.js
// @require      https://raw.githubusercontent.com/uzairfarooq/arrive/master/minified/arrive.min.js
// ==/UserScript==
/* jshint esversion: 6 */
/* eslint-disable require-jsdoc */
// json.stringify store json.parse retrieve
var nickNew = {};
var nickNew = {
    'narcolepticinsomniac': 'Narco',
    'stonecrusher': 'NutMuncher',
    'kinghat': 'crown',
    'joker': 'EvilFace'
};
var nickFriend = [];
var nickFriend = ['taylia', 'narcolepticinsomniac', 'Narco', 'Mottie'];
var nickMine = [];
var nickMine = ['Dana', 'DanaMW', 'Cog', 'Cognizant'];
var nickCol = {};
var nickCol = {
    'Sicuro': 'red',
    'DragonSlayer': 'red',
    '𝕲𝖗𝖎𝖒': 'purple',
    'Saggio': 'purple',
    'kinghat': 'yellow',
    'Fifi': 'green'
};

$(document).arrive('span[class^="username"]', function() {
    var $newElem = $(this);
    var notNick = $(this).text();

    if (nickNew[notNick] != null) {
        var isNick = nickNew[notNick];
        $newElem.text(isNick);
    }
    if ($.inArray(notNick, nickFriend) != -1) {
        $newElem.attr('style', 'color: blue !important;');
    }
    if ($.inArray(notNick, nickMine) != -1) {
        $newElem.attr('style', 'color: red !important;');
    }
    if (nickCol[notNick] != null) {
        var isCol = nickCol[notNick];
        $newElem.attr('style', 'color: ' + isCol + ' !important;');
    }
});
$(document).arrive('span[class^="roleColor"]', function() {
    var $newElem = $(this);
    var notNick = $(this).text();

    if (nickNew[notNick] != null) {
        var isNick = nickNew[notNick];
        $newElem.text(isNick);
    }
    if ($.inArray(notNick, nickFriend) != -1) {
        $newElem.attr('style', 'color: blue !important;');
    }
    if ($.inArray(notNick, nickMine) != -1) {
        $newElem.attr('style', 'color: red !important;');
    }
    if (nickCol[notNick] != null) {
        var isCol = nickCol[notNick];
        $newElem.attr('style', 'color: ' + isCol + ' !important;');
    }
});