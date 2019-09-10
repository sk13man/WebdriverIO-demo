 class Login {
    // elements
    get loginInput() {return $('#txtUsername')};

    get passInput() {return $('#txtPassword')};

    get loginButton() {return $('#btnLogin')};

    get welcomeMessage() {return $('#welcome')}

    // actions
    loginPerform (login, pass) {
        this.loginInput.setValue(login);
        this.passInput.setValue(pass);
        this.loginButton.click();
    }
    getWelComeMessage() {
      return this.welcomeMessage.getText()
    }
}
exports.LoginObject = new Login();
