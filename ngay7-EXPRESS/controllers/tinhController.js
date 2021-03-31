//cho biết class Tinh ở đâu ra
const Tinh = require('../models/Tinh')

module.exports = (req,res) => {
    const {tenPhepTinh, soA, soB} = req.params;
    const pt = new Tinh(tenPhepTinh, soA, soB);
    res.send(pt.getResultString());

}
/*
const tinhController = (req, res) => {
    //TODO HERE
    const { soA, soB, pt } = req.body;
    const phepTinh = new PhepTinh(soa, sob, pt);
    res.send(phepTinh.show());
};

module.exports = tinhController;
*/