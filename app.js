const Express = require('express');
var app=new Express();
app.set('view engine','ejs');
app.get('/',(req,res)=>{
    res.render('addbooks');
});

app.get('/viw',(req,res)=>{
    res.render('view',books);
});



books=[{
    'title': 'THE JURASSIC ADVENTURE',
    'author': 'ARHAM BANTHIA',
    'publisher': 'Blue Rose',
    'dop': '25/02/2019',
    'distributer': 'Blue',
    'price': 249,
    'description': 'My Jurassic adventure'
},
{
    'title': 'Firewall',
    'author': 'ANUP KUMAR MANDAL',
    'publisher': 'Blue Rose',
    'dop': '25/02/2019',
    'distributer': 'Blue',
    'price': '249',
    'description': 'In India, every year, hundreds of people are killed and seriously...'
},
{
    'title': 'OUSHADHASARVASWAM',
    'author': 'THAHIMON. P.A',
    'publisher': 'Blue Rose',
    'dop': '25/08/2019',
    'distributer': 'Blue',
    'price': '1200',
    'description': 'Oushadhasarvaswam is first of its kind on modern medicine....'
},
{
    'title': 'The Poor Grandmaster',
    'author': 'Sumitendray Singh',
    'publisher': 'Blue Rose',
    'dop': '15/02/2019',
    'distributer': 'Blue',
    'price': '100',
    'description': 'This book takes you through the life of a poor.....'
},
{
    'title': 'PRODUCTIVITY & Global Management Practices',
    'author': 'RAMESH K SHAH',
    'publisher': 'Blue Rose',
    'dop': '05/12/2019',
    'distributer': 'Blue',
    'price': '249',
    'description': 'My Jurassic adventure'
},
{
    'title': 'THE JURASSIC ADVENTURE',
    'author': 'ARHAM BANTHIA',
    'publisher': 'Blue Rose',
    'dop': '25/02/2019',
    'distributer': 'Blue',
    'price': '200',
    'description': 'My The author cites examples from all sectors, but mainly focuses ...'
},
{
    'title': 'Mindful Eating',
    'author': 'Priti sandeep gaglani',
    'publisher': 'Blue Rose',
    'dop': '25/02/2019',
    'distributer': 'Blue',
    'price': '499',
    'description': 'The book focuses on Lifestyle Modification, rather than only low calorie eating.'
},
{
    'title': 'One Action — Towards women’s dreams and ambitions',
    'author': 'Sanya Khurana',
    'publisher': 'Blue Rose',
    'dop': '25/08/2019',
    'distributer': 'Blue',
    'price': '225',
    'description': 'As a teenager, Sanya Khurana had very low self-esteem and was disgusted ....'
},
{
    'title': 'Life in Pieces',
    'author': 'Sonal Vashisht',
    'publisher': 'Blue Rose',
    'dop': '25/03/2019',
    'distributer': 'Blue',
    'price': '175',
    'description': 'The story is truly a great example of a journey called ‘Life’'
},
{
    'title': 'Love-Tennis',
    'author': 'Jitender kumar',
    'publisher': 'Blue Rose',
    'dop': '25/09/2019',
    'distributer': 'Blue',
    'price': '175',
    'description': 'Will love win again as always'
}];


app.listen(3005,()=>{
    console.log("server running on port 3005");
});