const { expect } = require("chai");

function undoCheck(name)
{
    let elements = document.getElementsByName(name);
    for (let i = 0, l = elements.length; i < l; i++)
    {
        if (elements[i].checked)
        {
            elements[i].checked = false;
        }
    }
}

describe('Uncheck Button', () => {

    it('Check the start button', () => {
        
        cy.visit('/source/testing.html');
        cy.get('#radio1').click();
        cy.get('#radio3').click();
        cy.get('#radio1').invoke('undoCheck(\'tSelect\')');
        
    });

});
