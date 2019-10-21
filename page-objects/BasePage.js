export default class BasePage {
    open(url){
        return browser.url(url);
    };

    wait(time){
        return browser.pause(time);
    };

    url(){
        return browser.getUrl();
    };

    title(){
        return browser.getTitle();
    };

};