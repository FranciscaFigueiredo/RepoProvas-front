/// <reference types="cypress" />

import faker from "@faker-js/faker";

const baseUrl = 'http://localhost:3000'

describe('Sign-up', () => {
    const body = {
        name: faker.name.findName(),
        email: faker.internet.email(),
        password: faker.internet.password(),
    }

    it('Should login successfully', () => {
        cy.visit(`${baseUrl}/sign-up`);
        
        cy.get('#name').type(body.name)
        cy.get('#email').type(body.email)
        cy.get('#password').type(body.password)

        cy.url().should('equal', `${baseUrl}/`)
    })
})