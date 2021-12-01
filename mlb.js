const { Mlb } = require('./models')
// Mlb.create({
//     team: 'Tampa Bay Rays',
//     record: '100-62',
//     pct: '.617',
//     league: 'AL',
// })
//     .then(function (newMlb) {
//         console.log(newMlb.toJSON());
//     })
//     .catch(function (error) {
//         console.log('Error creating nba', error);
//     });

// Mlb.create({
//     team: 'New York Yankees',
//     record: '92-70',
//     pct: '.568',
//     league: 'AL',
// })
//     .then(function (newMlb) {
//         console.log(newMlb.toJSON());
//     })
//     .catch(function (error) {
//         console.log('Error creating nba', error);
//     });

// Mlb.create({
//     team: 'Chicago White Sox',
//     record: '93-69',
//     pct: '.574',
//     league: 'AL',
// })
//     .then(function (newMlb) {
//         console.log(newMlb.toJSON());
//     })
//     .catch(function (error) {
//         console.log('Error creating nba', error);
//     });

// Mlb.create({
//     team: 'Detroit Tigers',
//     record: '77-85',
//     pct: '.475',
//     league: 'AL',
// })
//     .then(function (newMlb) {
//         console.log(newMlb.toJSON());
//     })
//     .catch(function (error) {
//         console.log('Error creating nba', error);
//     });

// Mlb.create({
//     team: 'Houston Astros',
//     record: '96-67',
//     pct: '.586',
//     league: 'AL',
// })
//     .then(function (newMlb) {
//         console.log(newMlb.toJSON());
//     })
//     .catch(function (error) {
//         console.log('Error creating nba', error);
//     });

// Mlb.create({
//     team: 'Atlanta Braves',
//     record: '96-67',
//     pct: '.547',
//     league: 'NL',
// })
//     .then(function (newMlb) {
//         console.log(newMlb.toJSON());
//     })
//     .catch(function (error) {
//         console.log('Error creating nba', error);
//     });

// Mlb.create({
//     team: 'Miami Marlins',
//     record: '67-95',
//     pct: '.414',
//     league: 'NL',
// })
//     .then(function (newMlb) {
//         console.log(newMlb.toJSON());
//     })
//     .catch(function (error) {
//         console.log('Error creating nba', error);
//     });

// Mlb.create({
//     team: 'St. Louis Cardinals',
//     record: '90-72',
//     pct: '.556',
//     league: 'NL',
// })
//     .then(function (newMlb) {
//         console.log(newMlb.toJSON());
//     })
//     .catch(function (error) {
//         console.log('Error creating nba', error);
//     });

// Mlb.create({
//     team: 'Chicago Cubs',
//     record: '71-91',
//     pct: '.438',
//     league: 'NL',
// })
//     .then(function (newMlb) {
//         console.log(newMlb.toJSON());
//     })
//     .catch(function (error) {
//         console.log('Error creating nba', error);
//     });

// Mlb.create({
//     team: 'San Francisco Giants',
//     record: '107-55',
//     pct: '.660',
//     league: 'NL',
// })
//     .then(function (newMlb) {
//         console.log(newMlb.toJSON());
//     })
//     .catch(function (error) {
//         console.log('Error creating nba', error);
//     });

//================READ=================\\

// Mlb.findAll({ where:{
//     league: 'NL'
//     }
    
// })
// .then(function(mlbFind){
//     // console.log(nflFind);  // returns an array 
//     // mblFind.map(team => team.toJSON());// make new array toJSON (displays in new array)
//     console.log('Mapped array',mlbFind.map(team => team.toJSON()))

// })
// .catch(function(err){
//         console.log('there was an error', err)
//     })

// Mlb.findOne({where:{team:'Chicago Cubs'} })
// .then(function(mlb){
//     console.log(mlb.toJSON());
// })
// .catch(function(err){
//     console.log('there was an error', err)
// });

// Mlb.findOne({where:{pct:'.414'} })
// .then(function(mlb){
//     console.log(mlb.toJSON());
// })
// .catch(function(err){
//     console.log('there was an error', err)
// });

// Mlb.findOne({where:{record:'96-67'} })
// .then(function(mlb){
//     console.log(mlb.toJSON());
// })
// .catch(function(err){
//     console.log('there was an error', err)
// });


// Mlb.findByPk(6)
// .then(function(mlb){
//     console.log(mlb.toJSON());
// })
//     .catch(function(err){
//         console.log('there was an error', err)
//     });

//================UPDATE================\\

// Mlb.update({
//     team: 'SF Giants',
//     record: '107-55 winning season'
// },{
//     where:{ record: '107-55' }     // location you are updating
// })
// .then(function(numberOfRows){
//     console.log('NUMBER OF ROWS UPDATED');
//     console.log(numberOfRows); // datatype: array
// })
// .catch(function(err){
//     console.log('there was an error', err)
// })

//=========DESTORY============\\

// Mlb.destroy({where: { team: 'Detroit Tigers'} })
// .then(function(response){
//     console.log('RESPONSE FROM DATABASE AFTER DELETING DATA...');
//     console.log(response)
// })
// .catch(function(err){
//     console.log('there was an error',err)
// })