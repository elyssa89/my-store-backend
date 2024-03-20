const Thing = require('../models/thing')

exports.createThing = (req, res, next) =>{
    delete req.body._id;
    const thing = new Thing({...req.body});
    thing.save()
          .then(()=>{res.status(201).json({message : 'object created with success'})})
          .catch(error=> { res.status(400).json(error)})
}

exports.findThings = (req, res, next) => {
  
    Thing.find()
         .then(things=> { console.log(req.body) ;res.status(200).json(things)})
         .catch( error => res.status(400).json(error))
  }

  exports.findById = (req, res, next) => {
    Thing.findOne({ _id: req.params.id })
      .then(thing => res.status(200).json(thing))
      .catch(error => res.status(404).json({ error }));
  }
  exports.modifyThing = (req, res, next) => {
    
    Thing.updateOne({ _id: req.params.id } , {...req.body , _id : req.params.id})
          .then(()=> res.status(200).json({message : 'object midifié'}))
          .catch( error => res.status(400).json(error))

  }

  exports.deleteThings = (req, res, next) => {
    Thing.deleteOne({ _id: req.params.id })
        .then(() => res.status(200).json({ message: 'Objet supprimé !'}))
        .catch(error => res.status(400).json({ error }));
    }