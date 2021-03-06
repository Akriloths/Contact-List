var express = require('express');
var router = express.Router();


let listContact = [
    {id:0, firstname : 'Ned', lastname : 'Stark', 
    email: 'ned@winterfell.com', phone: '123-456-7890', 
    url: 'www.google.com', notes: 'Winter is coming.'},
    
    {id:1, firstname : 'Theon' , lastname : 'Greyjoy', 
    email: 'tgreyjoy@winterfell.com', phone: '123-456-7890',
    url: 'www.google.com', notes: 'Reluctant to pay iron price.'},
    
    {id: 2, firstname : 'Samwell', lastname : 'Tarly', 
    email: 'starly@castleblack.com', phone: '123-456-7890', 
    url: 'www.google.com', notes: 'Loyal brother of the watch.'},
    
    {id: 3, firstname : 'Jon', lastname : 'Snow', 
    email: 'jsnow@castleblack.com', phone: '123-456-7890', 
    url: 'www.google.com', notes: 'Knows nothing.'},
    
    {id: 4, firstname : 'Arya', lastname : 'Stark', 
    email: 'waterdancer@winterfell.com', phone: '123-456-7890', 
    url: 'www.google.com', notes: 'Has a list of names.'},
    
    {id: 5, firstname : 'Jora', lastname : 'Mormont', 
    email: 'khaleesifan100@gmail.com', phone: '123-456-7890', 
    url: 'www.google.com', notes: 'Lost in the friend-zone.'},
    
    {id: 6, firstname : 'Tyrion', lastname : 'Lannister', 
    email: 'tyrion@lannister.com', phone: '123-456-7890', 
    url: 'www.google.com', notes: 'Currently drunk.'},
    
    {id: 7, firstname : 'Stannis', lastname : 'Baratheon', 
    email: 'onetrueking@dragonstone.com', phone: '123-456-7890', 
    url: 'www.google.com', notes: 'Nobody expects the Stannish inquisition.'},
    
    {id: 8, firstname : 'Hodor', lastname : 'bridget', 
    email: 'hodor@hodor.com', phone: '123-456-7890', 
    url: 'www.google.com', notes: 'Hodor? Hodor... Hodor!'},
    
    {id: 9, firstname : 'Margaery', lastname : 'Tyrell', 
    email: 'mtyrell@highgarden.com', phone: '123-456-7890', 
    url: 'www.google.com', notes: 'Keeper of kings.'},
    
    {id: 10, firstname : 'Brienne', lastname : 'Tarth', 
    email: 'oathkeeper@gmail.com', phone: '123-456-7890', 
    url: 'www.google.com', notes: 'Do not cross her.'},
    
    {id: 11, firstname : 'Petyr', lastname : 'Baelish', 
    email: 'petyr@baelishindustries.com', phone: '123-456-7890', 
    url: 'www.google.com', notes: 'Do not trust anyone.'},
];

router.get('/', (req, res) => {
    
     var x = req.query.firstname;
      if(x != null)
      {
          for(var i=0; i<listContact.length; i++)
          {
              if(listContact[i].firstname == x)
              {
                  res.json(listContact[i]);
              }   
          }
      }
      else{
          res.json(listContact);
      }
     
  })
  
router.get('/:id', (req, res) => {
    res.json(listContact[req.params.id]);
})

router.post('/', (req, res) => {
    var temp = 0;
    if(listContact.length){
    temp = parseInt(listContact[listContact.length - 1].id) + 1;
    }
        let  tempList = {
            id : temp.toString(),
            firstname: req.body.firstname,
            lastname : req.body.lastname,
            email :    req.body.email,
            phone :    req.body.phone,
            url :      req.body.url,
            notes :    req.body.notes
        }
        listContact.push(tempList);
    });

    router.delete('/:id', function (req, res) {
        for(var i=0;i<listContact.length;i++)
        {
            if(listContact[i].id == req.params.id){
                listContact.splice(i, 1);
            break;
        }
        }
    });

    router.put('/:id',function (req, res){
        for(var i=0; i<listContact.length; i++)
        {
            if(listContact[i].id == req.params.id)
            {
                if(listContact[i].firstname!=null)
                {
                    listContact[i].firstname = req.body.firstname;
                }
                if(listContactlist[i].lastname!=null)
                {
                    listContact[i].lastname = req.body.lastname;
                }
                if(listContact[i].email!=null)
                {
                    listContact[i].email = req.body.email;
                }
                if(listContact[i].phone!=null)
                {
                    listContact[i].phone = req.body.phone;
                }
                if(listContact[i].url!=null)
                {
                    listContact[i].url = req.body.url;
                }
                if(listContact[i].notes!=null)
                {
                    listContact[i].notes = req.body.notes;
                }
                break;
            }   
        }
    });

module.exports = router;

