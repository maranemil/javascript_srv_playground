// noinspection JSUnusedGlobalSymbols,JSUnresolvedVariable,JSUnresolvedFunction

const app = Vue.createApp({
    // template: '<h1>lol {{firstName}}</h1>',
    data() {
        return {
            firstName: 'HJon',
            lastName: 'Ddoe',
            email: 'some@email.com',
            gender: 'male',
            picture: 'https://randomuser.me/api/portraits/men/10.jpg',
        }
    },
    methods: {
        /*getUser(){
            console.log(this.firstName)
            this.firstName= 'Sam'
            this.lastName= 'Vam'
            this.email= 'some@email.com'
            this.gender= 'women'
            this.picture= 'https://randomuser.me/api/portraits/women/10.jpg'
        }*/
        async getUser() {
            const res = await fetch('https://randomuser.me/api')
            //const data = await res.json()
            const {results} = await res.json()
            this.firstName = results[0].name.first
            this.lastName = results[0].name.last
            this.email = results[0].email
            this.gender = results[0].gender
            this.picture = results[0].picture.large
        }
    }
});
app.mount('#app');