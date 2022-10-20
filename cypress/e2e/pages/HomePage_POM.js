

class HomePage_POM {
    //name input field
    getInputNameBox (name) {
        cy.get(':nth-child(1) > .form-control').type(name);
    }

    getEmail (email) {
        cy.get(':nth-child(2) > .form-control').type(email);
    }
    getPassword (password) {
        cy.get('#exampleInputPassword1').type(password);
    }

    getSelectGender (gender) {
        cy.get("select").select(gender);
    }

    getTwoDataBinding () {
        cy.get(':nth-child(4) > .ng-untouched');
    }

    getCheckEmployee () {
        cy.get('#inlineRadio2').click();
    }

    // getAge (age) {
    //     cy.get(':nth-child(8) > .form-control').type(age);
    // }

    getSubmitBtn () {
        cy.get(':nth-child(8) > .form-control').click();
    }

}

export default HomePage_POM;