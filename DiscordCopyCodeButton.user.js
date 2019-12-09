// ==UserScript==
// @name         DiscordCopyCodeButton
// @namespace    https://raw.githubusercontent.com/danamw/discordweb/master/DiscordCopyCodeButton.user.js
// @updateURL    https://raw.githubusercontent.com/danamw/discordweb/master/DiscordCopyCodeButton.user.js
// @description  On click adds a Copy button to code blocks pasted in the channel.
// @version      0.0.21
// @author       Dana Meli
// @icon         https://danamw.github.io/img/eyeball128.png
// @include      /https?://discordapp\.com/channels/*/
// @require      https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js
// @require      https://raw.githubusercontent.com/uzairfarooq/arrive/master/minified/arrive.min.js
// @grant        GM_addStyle
// ==/UserScript==
/* jshint esversion: 6 */
/* require-jsdoc  */

$(document).on('click', '.copybutton', (function(event) {
    var $temp = $('<textarea>');
    $('body').append($temp);
    $temp.val($(this).parent('code').text()).select();
    document.execCommand('copy');
    $temp.remove();
}));

$(document).arrive('code.hljs', function() {
    var $newElem = $(this);
    var noBtn = $newElem.find('.copybutton').length == 0;
    $newElem.attr('style', 'position: relative; padding: .2em 24px .2em .4em; box-sizing: border-box; line-height: 2em;');
    if (noBtn) {
        $('<div>', {
            id: 'copybutton',
            class: 'copybutton',
            style: 'position: absolute; height: 25px; width: 45px; bottom: 1; right: 1; color: #FFF; border: 1px solid #282b30; background-image: url("data:image/png;base64,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")',
        }).appendTo($newElem);
    }
    $('<style>')
        .prop('type', 'text/css')
        .html('.copybutton:hover { background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC0AAAAZEAYAAAD1YXtiAAAgAElEQVRoBQFBI77cAP//AL0AUf////8ArADs/////wBnAHj/////APwAAP////8A3wCH/////wCaAC//////AFYAu/////8AJQDD/////wD0ADj/////AEkAKv////8AWACk/////wDWACf/////AM4AoP////8AKgDr/////wAwAPj/////AIoAb/////8A6wDi/////wAfAMv/////AC4AWf////8ASgBZ/////wAjAED/////AOMAxP////8A4QAF/////wBLACf/////AFgAKf////8AtQDL/////wAOAD3/////AAQAVv////8A2AAm/////wBVAJb/////AHwAyv////8AFQA//////wApACf/////AFoApP////8AlQDj/////wCYAI3/////ANcAwv////8AHAC1/////wAkAHn/////AOAA6P////8A0ACS/////wBPANj/////ANMAwf////8AzQD+/////wCFAOD//wD8RAL8Anz///vwA/MFHv///M0FuAaO///8SAYzBrf///xXBfoHfP//+68GFAcU///7hAXpBzz///vYBg8GtP///A0FVQXN///7sAV5BlD///wLBbgF6f///JUEtQXw///8dAU/BTz///uuBcUFvv//+7wFggWw///8aAWWBiz///v7BGQFCP///BwFRAWF///8ggUmBTf///wSBPcFWP//+78EqATN///8ZgQ2BQb///vPBLEFJP///DIEyQTr///8MwRPBPb///vOBI0FLP///AIFGgW2///8RQS0BdX///x7BOAFJ///+5oEyQVK///7/gVZBlH///wnBS4Fe////GwFSQYQ///8TAVZBf7///vpBSYGMv///BEFEgXZ///7vgXbBtL///uBBfwHG///+9oGFAZ6///8DAXqBtv///vABgEHc////D0F/gcY///8TAY8BxX///uaBMsFGf//+9UEJQRq//8B9ywEOwRu////vQiJCfMAAAJiDBYMPAAA/3gCOQFJAAABk/8qAD4AAACz/0P/EwAAAC3/b/+OAAAA4P/t/50AAP+KAIQAswAAAD3/6v8FAAABVQDL/58AAADa/y8AaQAAABP/J/+QAAD/gwD4AFkAAACh/4f/3wAAAIL///+8AAAA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") !important; }').appendTo('head');
});