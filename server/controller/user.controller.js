import {detailModel} from "../model/detail"

const root= (req, res) => {
    res.status(200).json({
        status: 'success'
    });
};

const getData=(req,res)=>{
    detailModel.find({}, function (err, result) {
        if (err) {
            res.send(err);
        } else {
            res.send(result);
        }
    });
}

export default{
    root,
    getData
};