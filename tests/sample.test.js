import {expect} from 'chai';
import HomePage from "../page-objects/HomePage";

describe("My Portfolio Site", () => {
    it('should navigate to the home page', () => {
        HomePage.open();
        expect(HomePage.title()).to.equal("Dan Schultz Dev");
    });

    it('should navigate to project section', () => {
        HomePage.projectsBtn.waitForExist();
        HomePage.projectsBtn.click();
        HomePage.wait(500);
        expect(HomePage.projectsTtl.isDisplayed()).to.be.true;
    });

    it('should navigate to about section', () => {
        HomePage.aboutBtn.waitForExist();
        HomePage.aboutBtn.click();
        HomePage.wait(500);
        expect(HomePage.aboutTtl.isDisplayed()).to.be.true;
    });

    it('should navigate to connect section', () => {
        HomePage.connectBtn.waitForExist();
        HomePage.connectBtn.click();
        HomePage.wait(500);
        expect(HomePage.connectTtl.isDisplayed()).to.be.true;
    });

    it('should navigate to home section', () => {
        HomePage.homeBtn.waitForExist();
        HomePage.homeBtn.click();
        HomePage.wait(500);
        expect(HomePage.homeTtl.isDisplayed()).to.be.true;
    });
});