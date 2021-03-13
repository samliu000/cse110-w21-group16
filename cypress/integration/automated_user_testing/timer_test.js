describe('Automated Button Testing', () => {
  it('Check the start button', () => {
    cy.visit('/source/index.html');
    cy.get('div[id="timerDisplay"]').then((timer) => {
      const  startTime = timer.text();
      cy.get('button[id="start-btn"]').click();

      cy.wait(3000).then(() => {
        const endTime = timer.text();
        var arrayStart = startTime.split(":");
        var arrayEnd = endTime.split(":");
        expect(parseInt(arrayStart[0],10)).equals(parseInt(arrayEnd[0],10));
      });
    });
  });
});

