const {Nba, Nfl, Mlb} = require('./models')
Nba.create({
    team: '',
    standing:'',
    record:'',
    lastScore:''
})
.then(function(newNba){
    console.log(newNba.toJSON());
})
.catch(function(error){
    console.log('Error creating nba', error);
});