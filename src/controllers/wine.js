const Wine = require("../models/wine")

exports.getWine = (req, res) => {
    Wine.findOne({ _id: req.params.id })
        .then((wine) => { res.status(200).json(wine); })
        .catch((error) => { res.status(404).json({ error: error });
    });
}

exports.getAllWines = (req, res) => {
    Wine.find()
        .then(wines => res.status(200).json(wines))
        .catch(error => res.status(404).json({ error }));
}

exports.createWine = (req, res) => {
    delete req.body._id;
    const wine = new Wine({
      ...req.body
    });
    wine.save()
        .then(() => res.status(201).json({ message: 'Wine saved successfully!' }))
        .catch(error => res.status(400).json({ error: error }));
}

exports.updateWine = (req, res) => {
    Wine.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
        .then(() => res.status(200).json({ message: 'Wine updated successfully!'}))
        .catch(error => res.status(400).json({ error }));
}

exports.deleteWine = (req, res) => {
    Wine.deleteOne({ _id: req.params.id })
        .then(() => res.status(200).json({ message: 'Wine deleted successfully!'}))
        .catch(error => res.status(400).json({ error }));
}