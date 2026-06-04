describe('Test Hotel API', ()=>{
    it('Should fetch hotel rooms list', ()=>{
        cy.request('GET', '/api/room/' ).then((response)=>{
            expect(response.status).to.eq(200)
            expect(response.body.rooms).to.be.an('array')
        })
    })

    it('Should login as admin and generate auth token', ()=>{
        cy.request('POST', '/api/auth/login', {
            "username": "admin",
            "password":"password"
        }).then((response)=>{
            expect(response.status).to.eq(200)
            expect(response.body).to.have.property('token')
        })
    })
})