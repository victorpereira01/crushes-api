import model from './model';

class Controller {

    constructor() { }

    getCrushes() {
        return model.find({});
    }

    getCrushesById(id) {
        return model.find(id);
    }

    deleteCrushById(id) {
        return model.deleteOne(id);
    }

    updateCrush(id, data) {
        return model.findOneAndUpdate(id, data);
    }

    createCrush(data) {
        return model.create(data);
    }

    select(req, res) {
        this.getCrushes()
            .then(crushes => res.status(200).json({
                "result": crushes
            }))
            .catch(err => res.status(400).json({
                "result": err
            }));
    }

    selectOne(req, res) {
        const id = { _id: req.params.id };

        this.getCrushesById(id)
            .then(crushes => res.status(200).json({
                "result": crushes
            }))
            .catch(err => res.status(400).json({
                "result": err
            }));
    }

    delete(req, res) {
        const id = { _id: req.params.id };

        this.deleteCrushById(id)
            .then(crushes => res.status(200).json({
                "result": crushes
            }))
            .catch(err => res.status(400).json({
                "result": err
            }));
    }

    update(req, res) {
        const id = { _id: req.params.id };
        const crush = req.body;

        this.updateCrush(id, crush)
            .then(crushes => res.status(200).json({
                "result": crushes
            }))
            .catch(err => res.status(400).json({
                "result": err
            }));
    }

    insert(req, res) {
        const crush = req.body;

        this.createCrush(crush)
            .then(crushes => res.status(200).json({
                "result": crushes
            }))
            .catch(err => res.status(400).json({
                "result": err
            }));
    }
}

export default Controller;
