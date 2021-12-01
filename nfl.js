const {Nfl} = require('./models')
Nfl.create({
    team: '',
    standing:'',
    record:'',
    lastScore:'',
    sbAppearances:0
})
.then(function(newNfl){
    console.log(newNfl.toJSON());
})
.catch(function(error){
    console.log('Error creating nba', error);
});