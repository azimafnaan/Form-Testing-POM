
import HomePage_POM from '../e2e/pages/HomePage_POM';

describe('POM Testing', function () {
    it('Create Simple Test', () => {

        const homePage = new HomePage_POM();

        cy.visit('https://rahulshettyacademy.com/angularpractice/')

        homePage.getInputNameBox('Azim Afnaan')
        homePage.getEmail('azim@test.com')
        homePage.getPassword('admin123456')
        homePage.getSelectGender('Male')
        // homePage.getAge('09/01/2002')

    })
})