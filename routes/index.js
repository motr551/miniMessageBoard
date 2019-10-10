var express = require('express');
var router = express.Router();

const nowTimeDate = new Date();

var timeDate = nowTimeDate.getHours()+':'+nowTimeDate.getMinutes()+':'+nowTimeDate.getMinutes() +' '+nowTimeDate.getDay()+'/'              +nowTimeDate.getMonth()+'/'+nowTimeDate.getFullYear();


const messages = [ 
  { text: 'Hi there!', user: 'Amando', added: timeDate }, 
  { text: 'Hello World!', user: 'Charles', added: timeDate } 
  ];
 
/* GET home page. */
router.get('/', (req, res, next) =>
{
  res.render('index.ejs', 
  { 
      exampleVar: messages , title: "Mini Message Board"
  });
});


/* post form data rx */
router.post('/new', (req, res, next) =>
{   
  let messageUser = req.body.messageUser; 
  let messageTxt = req.body.messageTxt;
  messages.push(
    {
      text: messageTxt,
      user: messageUser,
      added: timeDate
    }
  ) 
  res.redirect('/')  // send users index page
});

/* GET form page. */
router.get('/new', (req, res, next) =>
{
  res.render('form.ejs'); 
    
});


/* GET delete a message . */
router.get('/delete', (req, res, next) =>
{
  messages.pop();
  res.render('index.ejs', 
  { 
      exampleVar: messages , title: "Mini Message Board"
  });
});

module.exports = router;


