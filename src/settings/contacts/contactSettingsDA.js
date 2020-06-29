var ContactSetting = require('../../model/contactSettings.model');


exports.addGrade = function (req, res) {
    var gradeArray = [];
    const gradeData = {
        gradeName: req.body.grade
    };
    gradeArray.push(gradeData);
    var settings = new ContactSetting();
    settings.grade = gradeArray;
    settings.save(function (err, saveData) {
        if (err) {
            res.status(500).json(err);
        } else {
            res.status(200).json(saveData);
        }
    });
}
exports.updateGrade = function (req, res, updateId) {
    const gradeData = {
        gradeName: req.body.grade
    };
    ContactSetting.findOne({ "grade.gradeName": req.body.grade }, function (err, updatedData) {
        if (err) {
            res.status(500).json(err);
        } else {
            if (!updatedData) {
                ContactSetting.findOneAndUpdate({ "_id": updateId }, { $push: { "grade": gradeData } },
                    { new: true }, function (err, updatedData) {
                        if (err) {
                            res.status(500).json(err);
                        } else {
                            res.status(200).json(updatedData);
                        }
                    });
            } else {
                res.status(200).json({ result: 0 });
            }
        }
    });
}

exports.addIndustryType = function (req, res) {
    var industryType = [];
    const industryTypeData = {
        typeName: req.body.industryType
    };
    industryType.push(industryTypeData);
    var settings = new ContactSetting();
    settings.industryType = industryType;
    settings.save(function (err, saveData) {
        if (err) {
            res.status(500).json(err);
        } else {
            res.status(200).json(saveData);
        }
    });
}
exports.updateIndustryType = function (req, res, updateId) {
    const industryTypeData = {
        typeName: req.body.industryType
    };
    ContactSetting.findOne({ "industryType.typeName": req.body.industryType }, function (err, updatedData) {
        if (err) {
            res.status(500).json(err);
        } else {
            if (!updatedData) {
                ContactSetting.findOneAndUpdate({ "_id": updateId }, { $push: { "industryType": industryTypeData } },
                    { new: true }, function (err, updatedData) {
                        if (err) {
                            res.status(500).json(err);
                        } else {
                            res.status(200).json(updatedData);
                        }
                    });
            } else {
                res.status(200).json({ result: 0 });
            }
        }
    });
}


exports.addOutCome = function (req, res) {
    var outCome = [];
    const outComeTypeData = {
        typeName: req.body.outCome
    };
    outCome.push(outComeTypeData);
    var settings = new ContactSetting();
    settings.outCome = outCome;
    settings.save(function (err, saveData) {
        if (err) {
            res.status(500).json(err);
        } else {
            res.status(200).json(saveData);
        }
    });
}
exports.updateOutCome = function (req, res, updateId) {
    const outComeTypeData = {
        typeName: req.body.outCome
    };
    ContactSetting.findOne({ "outCome.typeName": req.body.outCome }, function (err, updatedData) {
        if (err) {
            res.status(500).json(err);
        } else {
            if (!updatedData) {
                ContactSetting.findOneAndUpdate({ "_id": updateId }, { $push: { "outCome": outComeTypeData } },
                    { new: true }, function (err, updatedData) {
                        if (err) {
                            res.status(500).json(err);
                        } else {
                            res.status(200).json(updatedData);
                        }
                    });
            } else {
                res.status(200).json({ result: 0 });
            }
        }
    });
}


exports.addTypeOfCustomer = function (req, res) {
    var typeOfData = [];
    const typeOfCustomerData = {
        typeName: req.body.typeOfCustomer
    };
    typeOfData.push(typeOfCustomerData);
    var settings = new ContactSetting();
    settings.typeOfCustomer = typeOfData;
    settings.save(function (err, saveData) {
        if (err) {
            res.status(500).json(err);
        } else {
            res.status(200).json(saveData);
        }
    });
}
exports.updateTypeOfCustomer = function (req, res, updateId) {
    const typeOfCustomerData = {
        typeName: req.body.typeOfCustomer
    };
    ContactSetting.findOne({ "typeOfCustomer.typeName": req.body.typeOfCustomer }, function (err, updatedData) {
        if (err) {
            res.status(500).json(err);
        } else {
            if (!updatedData) {
                ContactSetting.findOneAndUpdate({ "_id": updateId }, { $push: { "typeOfCustomer": typeOfCustomerData } },
                    { new: true }, function (err, updatedData) {
                        if (err) {
                            res.status(500).json(err);
                        } else {
                            res.status(200).json(updatedData);
                        }
                    });
            } else {
                res.status(200).json({ result: 0 });
            }
        }
    });
}

exports.removeGrade = function (req, res) {
    ContactSetting.findOneAndUpdate({ "grade._id": req.params.id }, {$pull: { "grade":   {_id: req.params.id} }}, { new: true }, function (err, updatedData) {
        if (err) {
            res.status(500).json(err);
        } else {
            res.status(200).json(updatedData);
        }
    });
}


exports.removeIndustryType = function (req, res) {
    ContactSetting.findOneAndUpdate({ "industryType._id": req.params.id }, {$pull: { "industryType":   {_id: req.params.id} }}, { new: true }, function (err, updatedData) {
        if (err) {
            res.status(500).json(err);
        } else {
            res.status(200).json(updatedData);
        }
    });
}


exports.removeOutCome = function (req, res) {
    ContactSetting.findOneAndUpdate({ "outCome._id": req.params.id }, {$pull: { "outCome":   {_id: req.params.id} }}, { new: true }, function (err, updatedData) {
        if (err) {
            res.status(500).json(err);
        } else {
            res.status(200).json(updatedData);
        }
    });
}


exports.removeTypeOfCustomer = function (req, res) {
    ContactSetting.findOneAndUpdate({ "typeOfCustomer._id": req.params.id }, {$pull: { "typeOfCustomer": {_id: req.params.id} }}, { new: true }, function (err, updatedData) {
        if (err) {
            res.status(500).json(err);
        } else {
            res.status(200).json(updatedData);
        }
    });
}

exports.findContactSettings = function (req, res) {
    ContactSetting.findOne({}).limit(1).exec(function (err, updatedData) {
        if (err) {
            res.status(500).json(err);
        } else {
            res.status(200).json(updatedData);
        }
    });
}