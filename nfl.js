const { Nfl } = require('./models')
// Nfl.create({
//     team: 'New England Patriots',
//     standing:'1st AFC East',
//     record:'8-4',
//     lastScore:'36-13 Win',
//     sbAppearances:11
// })
// .then(function(newNfl){
//     console.log(newNfl.toJSON());
// })
// .catch(function(error){
//     console.log('Error creating nba', error);
// });

// Nfl.create({
//     team: 'Miami Dolphins',
//     standing:'3rd AFC East',
//     record:'5-7',
//     lastScore:'33-10 Win',
//     sbAppearances:2
// })
// .then(function(newNfl){
//     console.log(newNfl.toJSON());
// })
// .catch(function(error){
//     console.log('Error creating nba', error);
// });

// Nfl.create({
//     team: 'Baltimore Ravens',
//     standing:'1st AFC North',
//     record:'8-3',
//     lastScore:'16-10 Win',
//     sbAppearances:2
// })
// .then(function(newNfl){
//     console.log(newNfl.toJSON());
// })
// .catch(function(error){
//     console.log('Error creating nba', error);
// });

// Nfl.create({
//     team: 'Cincinnati Bengals',
//     standing:'2nd AFC North',
//     record:'7-4',
//     lastScore:'41-10 Win',
//     sbAppearances:2
// })
// .then(function(newNfl){
//     console.log(newNfl.toJSON());
// })
// .catch(function(error){
//     console.log('Error creating nba', error);
// });

// Nfl.create({
//     team: 'Los Angeles Chargers',
//     standing:'2nd AFC West',
//     record:'6-5',
//     lastScore:'13-28 Lost',
//     sbAppearances:1
// })
// .then(function(newNfl){
//     console.log(newNfl.toJSON());
// })
// .catch(function(error){
//     console.log('Error creating nba', error);
// });

// Nfl.create({
//     team: 'Dallas Cowboys',
//     standing:'1st NFC East',
//     record:'7-4',
//     lastScore:'33-36 Lost',
//     sbAppearances:10
// })
// .then(function(newNfl){
//     console.log(newNfl.toJSON());
// })
// .catch(function(error){
//     console.log('Error creating nba', error);
// });

// Nfl.create({
//     team: 'Philadelphia Eagles',
//     standing:'3rd NFC East',
//     record:'5-7',
//     lastScore:'7-13 Lost',
//     sbAppearances:2
// })
// .then(function(newNfl){
//     console.log(newNfl.toJSON());
// })
// .catch(function(error){
//     console.log('Error creating nba', error);
// });

// Nfl.create({
//     team: 'Minnesota Vikings',
//     standing:'2nd NFC North',
//     record:'5-6',
//     lastScore:'26-34 Lost',
//     sbAppearances:4
// })
// .then(function(newNfl){
//     console.log(newNfl.toJSON());
// })
// .catch(function(error){
//     console.log('Error creating nba', error);
// });

// Nfl.create({
//     team: 'Detroit Lions',
//     standing:'4th NFC North',
//     record:'0-10',
//     lastScore:'14-16 Lost',
//     sbAppearances:0
// })
// .then(function(newNfl){
//     console.log(newNfl.toJSON());
// })
// .catch(function(error){
//     console.log('Error creating nba', error);
// });

// Nfl.create({
//     team: 'Los Angeles Rams',
//     standing:'2nd NFC West',
//     record:'7-4',
//     lastScore:'28-36 Lost',
//     sbAppearances:4
// })
// .then(function(newNfl){
//     console.log(newNfl.toJSON());
// })
// .catch(function(error){
//     console.log('Error creating nba', error);
// });

Nfl.bulkCreate([{
    team: 'Cleveland Browns',
    standing: '3rd AFC North',
    record: '6-6',
    lastScore: '10-16 Lost',
    sbAppearances: 2
}, {
    team: 'Atlanta Falcons',
    standing: '2nd NFC South',
    record: '5-6',
    lastScore: '21-14 Win',
    sbAppearances: 1
}])
.then(function (nflFind) {
        // console.log(nflFind);  // returns an array 
        // nflFind.map(team => team.toJSON());// make new array toJSON (displays in new array)
        console.log('MAPPED ARRAY', nflFind.map(team => team.toJSON()))

    })
.catch(function (error) {
        console.log('Error creating nba', error);
    });

//================READ=================\\

// Nfl.findAll({ where:{
//     record:'0-10',
//     lastScore:'14-16 Lost'
//     }

// })
// .then(function(nflFind){
//     // console.log(nflFind);  // returns an array 
//     // nflFind.map(team => team.toJSON());// make new array toJSON (displays in new array)
//     console.log('Mapped array',nflFind.map(team => team.toJSON()))

// })
// .catch(function(err){
//         console.log('there was an error', err)
//     })

// Nfl.findOne({where:{standing:'4th NFC North'} })
// .then(function(nfl){
//     console.log(nfl.toJSON());
// })
// .catch(function(err){
//     console.log('there was an error', err)
// });

// Nfl.findOne({where:{standing:'3rd NFC East'} })
// .then(function(nfl){
//     console.log(nfl.toJSON());
// })
// .catch(function(err){
//     console.log('there was an error', err)
// });

// Nfl.findOne({where:{record:'0-10'} })
// .then(function(nfl){
//     console.log(nfl.toJSON());
// })
// .catch(function(err){
//     console.log('there was an error', err)
// });


// Nfl.findByPk(3)
// .then(function(nfl){
//     console.log(nfl.toJSON());
// })
//     .catch(function(err){
//         console.log('there was an error', err)
//     });


// Nfl.update({
//     team: 'LA Rams',
//     record:'7-4 Winning season so far'
// },{
//     where:{ team: 'Los Angeles Rams' }     // location you are updating
// })
// .then(function(numberOfRows){
//     console.log('NUMBER OF ROWS UPDATED');
//     console.log(numberOfRows); // datatype: array
// })
// .catch(function(err){
//     console.log('there was an error', err)
// })

//=========DESTORY============\\

// Nfl.destroy({where: { team: 'Philadelphia Eagles'} })
// .then(function(response){
//     console.log('RESPONSE FROM DATABASE AFTER DELETING DATA...');
//     console.log(response)
// })
// .catch(function(err){
//     console.log('there was an error',err)
// })
