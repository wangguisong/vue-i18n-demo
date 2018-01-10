import Vue from 'vue'
import VueI18n from 'vue-i18n'
import {getCookie, setCookie} from './utils'

const LOCALE_KEY = 'locale'

Vue.use(VueI18n)

const cfg = {
    en: ['hello'],
    zh: ['hello']
}

var messages = {};
for(var lang in cfg){
    let bag = {}
    cfg[lang].forEach(function(fileName){
        let txt = require(`@/assets/locale/${lang}/${fileName}.json`);
        bag[fileName] = txt;
    })
    messages[lang] = bag;
}

function getBrowerLanguage(){
    var lang = (navigator.language || navigator.browserLanguage).toLowerCase();
    if(lang.indexOf('zh') > -1){
        return 'zh';
    }else if(lang.indexOf('en') > -1){
        return 'en';
    }else{
        return 'en';
    }
}

var locale = getCookie(LOCALE_KEY);
if(locale == null){
    locale = getBrowerLanguage();
    setCookie(LOCALE_KEY, locale);
}

//切换语言
export function changeLanguage(vm, lang){
    vm.$i18n.locale = lang;
    setCookie(LOCALE_KEY, lang);
}

//获取当前语言
export function getLanguage(vm){
    return vm.$i18n.locale;
}

const i18n = new VueI18n({
    locale: locale,
    messages
})

export default(i18n)