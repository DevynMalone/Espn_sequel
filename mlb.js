const {Mlb} = require('./models')
Mlb.create({
    team: '',
    record:'',
    pct:'',
    league:'',
})
.then(function(newMlb){
    console.log(newMlb.toJSON());
})
.catch(function(error){
    console.log('Error creating nba', error);
});