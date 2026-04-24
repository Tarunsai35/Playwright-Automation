class Homepage {
    constructor(page) {
        this.page = page;
        this.menubtn = page.locator("//img[@alt='menu']");
        this.signoutbtn = page.locator("//button[normalize-space()='Sign out']");

    }

    async signout() {
        await this.menubtn.click();
        await this.signoutbtn.click();
    }
        
}

module.exports = { Homepage };