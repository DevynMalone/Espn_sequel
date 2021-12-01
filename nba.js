const {Nba, Nfl, Mlb} = require('./models')
// Nba.create({
//     team: 'Washington Wizards',
//     standing:'5th Eastern',
//     record:'13-8',
//     lastScore:'99-116 Lost'
// })
// .then(function(newNba){
//     console.log(newNba.toJSON());
// })
// .catch(function(error){
//     console.log('Error creating nba', error);
// });

// Nba.create({
//     team: 'New York Knicks',
//     standing:'7th Eastern',
//     record:'11-10',
//     lastScore:'110-112 Lost'
// })
// .then(function(newNba){
//     console.log(newNba.toJSON());
// })
// .catch(function(error){
//     console.log('Error creating nba', error);
// });

// Nba.create({
//     team: 'Miami Heat',
//     standing:'3rd Eastern',
//     record:'13-8',
//     lastScore:'111-120 Lost'
// })
// .then(function(newNba){
//     console.log(newNba.toJSON());
// })
// .catch(function(error){
//     console.log('Error creating nba', error);
// });

// Nba.create({
//     team: 'Charlotte Hornets',
//     standing:'6th Eastern',
//     record:'13-10',
//     lastScore:'119-133 Lost'
// })
// .then(function(newNba){
//     console.log(newNba.toJSON());
// })
// .catch(function(error){
//     console.log('Error creating nba', error);
// });

// Nba.create({
//     team: 'Atlanta Hawks',
//     standing:'10th Eastern',
//     record:'11-10',
//     lastScore:'90-99 Lost'
// })
// .then(function(newNba){
//     console.log(newNba.toJSON());
// })
// .catch(function(error){
//     console.log('Error creating nba', error);
// });

// Nba.create({
//     team: 'Utah Jazz',
//     standing:'3rd Western',
//     record:'14-7',
//     lastScore:'129-107 Win'
// })
// .then(function(newNba){
//     console.log(newNba.toJSON());
// })
// .catch(function(error){
//     console.log('Error creating nba', error);
// });

// Nba.create({
//     team: 'Memphis Grizzlies',
//     standing:'5th Western',
//     record:'11-10',
//     lastScore:'99-91 Win'
// })
// .then(function(newNba){
//     console.log(newNba.toJSON());
// })
// .catch(function(error){
//     console.log('Error creating nba', error);
// });

// Nba.create({
//     team: 'Los Angeles Lakers',
//     standing:'8th Western',
//     record:'12-11',
//     lastScore:'117-92 Win'
// })
// .then(function(newNba){
//     console.log(newNba.toJSON());
// })
// .catch(function(error){
//     console.log('Error creating nba', error);
// });

// Nba.create({
//     team: 'Portland Trail Blazers',
//     standing:'9th Western',
//     record:'11-11',
//     lastScore:'110-92 Win'
// })
// .then(function(newNba){
//     console.log(newNba.toJSON());
// })
// .catch(function(error){
//     console.log('Error creating nba', error);
// });

// Nba.create({
//     team: 'Phoenix Suns',
//     standing:'1st Western',
//     record:'18-3',
//     lastScore:'104-96 Win'
// })
// .then(function(newNba){
//     console.log(newNba.toJSON());
// })
// .catch(function(error){
//     console.log('Error creating nba', error);
// });

//================READ=================\\

// Nba.findAll({ where:{
//     record:'14-7',
//     team: 'Utah Jazz'
// }
    
// })
// .then(function(nbaFind){
//     // console.log(nbaFind);  // returns an array 
//     // nbaFind.map(team => team.toJSON());// make new array toJSON (displays in new array)
//     console.log('Mapped array',nbaFind.map(team => team.toJSON()))

// })
// .catch(function(err){
//         console.log('there was an error', err)
//     })

// Nba.findOne({where:{record:'18-3'} })
// .then(function(nba){
//     console.log(nba.toJSON());
// })
// .catch(function(err){
//     console.log('there was an error', err)
// });

// Nba.findOne({where:{standing:'9th Western'} })
// .then(function(nba){
//     console.log(nba.toJSON());
// })
// .catch(function(err){
//     console.log('there was an error', err)
// });

// Nba.findOne({where:{lastScore:'129-107 Win'} })
// .then(function(nba){
//     console.log(nba.toJSON());
// })
// .catch(function(err){
//     console.log('there was an error', err)
// });


// Nba.findByPk(3)
// .then(function(nba){
//     console.log(nba.toJSON());
// })
//     .catch(function(err){
//         console.log('there was an error', err)
//     });


// Nba.update({
//     team: 'Hornets',
//     lastScore:'119-133 Lost to older brother Lonzo'
// },{
//     where:{ standing:'6th Eastern' }     // location you are updating
// })
// .then(function(numberOfRows){
//     console.log('NUMBER OF ROWS UPDATED');
//     console.log(numberOfRows); // datatype: array
// })
// .catch(function(err){
//     console.log('there was an error', err)
// })

//=========DESTORY============\\

// Nba.destroy({where: { lastScore:'117-92 Win'} })
// .then(function(response){
//     console.log('RESPONSE FROM DATABASE AFTER DELETING DATA...');
//     console.log(response)
// })
// .catch(function(err){
//     console.log('there was an error',err)
// })
