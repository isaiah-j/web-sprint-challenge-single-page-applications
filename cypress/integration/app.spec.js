describe('User can interact with and submit form', () => {
	it('Site can be visited', () => {
		cy.visit('http://localhost:3000/pizza');
	});
	it('User can type into name & special inputs', () => {
		cy.get('#name').type('Kali Bacon Ranch');
		cy.get('#lol').type('Leave next to door');
		cy.get('#select').click();
		cy.get('#large').click();
		cy.get('#salami').click();
		cy.get('#chicken').click();
		cy.get('#bacon').click();
		cy.get('#pepperoni').click();
	});
	it('User can submit', () => {
		cy.get('#submit').click();
	});
});
