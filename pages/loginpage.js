class LoginPage {

    constructor(page) {
        this.page = page;
        this.username = page.getByPlaceholder('Enter Email');
        this.password = page.getByPlaceholder('Enter Password');
        this.loginButton = page.getByRole('button', { name: /sign in/i });
    }

    async login(username, password) {
        await this.username.fill(username);
        await this.password.fill(password);
        await this.loginButton.click();
    }

}

module.exports = { LoginPage };
