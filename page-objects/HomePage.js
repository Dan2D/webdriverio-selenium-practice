import BasePage from "./BasePage";

class HomePage extends BasePage {

    get homeBtn() {
        return $('a[href="#home"]');
    };

    get projectsBtn() {
        return $('a[href="#projects"]');
    };

    get aboutBtn() {
        return $('a[href="#about"]');
    };

    get connectBtn() {
        return $('a[href="#contact"]');
    };

    get homeTtl() {
        return $('h1*=Hi I\'m Dan');
    };

    get projectsTtl() {
        return $('h1*=PROJECTS');
    };

    get aboutTtl() {
        return $('h1*=ABOUT');
    };

    get connectTtl() {
        return $('h1*=CONNECT');
    };

    open(){
        super.open("https://www.danschultz.dev/");
    };

};

export default new HomePage();