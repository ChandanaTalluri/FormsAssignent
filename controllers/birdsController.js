const axios = require('axios');

exports.get_birds =function (req, res) {
 res.render('birds/birds');

}
exports.get_success = function(req,res){
    res.render('birds/success');
}
exports.get_create_birds = function (req, res) {
    res.render('birds/create');
}

exports.post_create_birds = function (req, res) {
    let newbird = {
        species: req.body.species,
        nickName: req.body.nickName,
        status: req.body.status,
        
    }
    console.log("New Bird Created");
    console.log("Species :" + newbird.species);
    console.log("NIck Name :" + newbird.nickName);
    console.log("Status :" + newbird.status);
    
    
    
      res.redirect('./success');
    
}
