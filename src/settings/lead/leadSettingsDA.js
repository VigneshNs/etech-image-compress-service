var LeadSetting = require('../../model/leadSettings.model');


exports.addLeadStatus = function (req, res) {
    var leadStatusArray = [];
    const leadStatus = {
        typeName: req.body.leadStatus
    };
    leadStatusArray.push(leadStatus);
    var settings = new LeadSetting();
    settings.leadStatus = leadStatusArray;
    settings.save(function (err, saveData) {
        if (err) {
            res.status(500).json(err);
        } else {
            res.status(200).json(saveData);
        }
    });
}
exports.updateLeadStatus = function (req, res, updateId) {
    const leadStatus = {
        typeName: req.body.leadStatus
    };
    LeadSetting.find({ "leadStatus.typeName": req.body.leadStatus }, function (err, updatedData) {
        if (err) {
            res.status(500).json(err);
        } else {
            if (updatedData.length === 0) {
                LeadSetting.findOneAndUpdate({ "_id": updateId }, { $push: { "leadStatus": leadStatus } },
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

exports.addLeadService = function (req, res) {
    var leadService = [];
    const leadServiceData = {
        typeName: req.body.leadService
    };
    leadService.push(leadServiceData);
    var settings = new LeadSetting();
    settings.leadService = leadService;
    settings.save(function (err, saveData) {
        if (err) {
            res.status(500).json(err);
        } else {
            res.status(200).json(saveData);
        }
    });
}
exports.updateLeadService = function (req, res, updateId) {
    const leadServiceData = {
        typeName: req.body.leadService
    };
    LeadSetting.find({ "leadService.typeName": req.body.leadService }, function (err, updatedData) {
        if (err) {
            res.status(500).json(err);
        } else {
            if (updatedData.length === 0) {
                LeadSetting.findOneAndUpdate({ "_id": updateId },  { $push: { "leadService": leadServiceData } },
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


exports.addLeadType = function (req, res) {
    var leadType = [];
    const leadTypeData = {
        typeName: req.body.leadType
    };
    leadType.push(leadTypeData);
    var settings = new LeadSetting();
    settings.leadType = leadType;
    settings.save(function (err, saveData) {
        if (err) {
            res.status(500).json(err);
        } else {
            res.status(200).json(saveData);
        }
    });
}
exports.updateLeadType = function (req, res, updateId) {
    const leadTypeData = {
        typeName: req.body.leadType
    };
    LeadSetting.find({ "leadType.typeName": req.body.leadType }, function (err, updatedData) {
        if (err) {
            res.status(500).json(err);
        } else {
            if (updatedData.length === 0) {
                LeadSetting.findOneAndUpdate({ "_id": updateId }, { $push: { "leadType": leadTypeData } },
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



exports.addLeadUnit = function (req, res) {
    var leadUnit = [];
    const leadUnitData = {
        typeName: req.body.leadUnit
    };
    leadUnit.push(leadUnitData);
    var settings = new LeadSetting();
    settings.leadUnit = leadUnit;
    settings.save(function (err, saveData) {
        if (err) {
            res.status(500).json(err);
        } else {
            res.status(200).json(saveData);
        }
    });
}
exports.updateLeadUnit = function (req, res, updateId) {
    const leadUnitData = {
        typeName: req.body.leadUnit
    };
    LeadSetting.find({ "leadUnit.typeName": req.body.leadUnit }, function (err, updatedData) {
        if (err) {
            res.status(500).json(err);
        } else {
            if (updatedData.length === 0) {
                LeadSetting.findOneAndUpdate({ "_id": updateId }, { $push: { "leadUnit": leadUnitData } },
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

exports.addLeadSource = function (req, res) {
    var leadSoruce = [];
    const leadSourceData = {
        typeName: req.body.leadSource
    };
    leadSoruce.push(leadSourceData);
    var settings = new LeadSetting();
    settings.leadSource = leadSource;
    settings.save(function (err, saveData) {
        if (err) {
            res.status(500).json(err);
        } else {
            res.status(200).json(saveData);
        }
    });
}
exports.updateLeadSource = function (req, res, updateId) {
    const leadSourceData = {
        typeName: req.body.leadSource
    };
    LeadSetting.find({ "leadSource.typeName": req.body.leadSource }, function (err, updatedData) {
        if (err) {
            res.status(500).json(err);
        } else {
            if (updatedData.length === 0) {
                LeadSetting.findOneAndUpdate({ "_id": updateId }, { $push: { "leadSource": leadSourceData } },
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

exports.removeLeadStatus = function (req, res) {
    LeadSetting.findOneAndUpdate({ "leadStatus._id": req.params.id }, {$pull: { "leadStatus":   {_id: req.params.id} }}, { new: true }, function (err, updatedData) {
        if (err) {
            res.status(500).json(err);
        } else {
            res.status(200).json(updatedData);
        }
    });
}


exports.removeLeadService = function (req, res) {
    LeadSetting.findOneAndUpdate({ "leadService._id": req.params.id }, {$pull: { "leadService":   {_id: req.params.id} }}, { new: true }, function (err, updatedData) {
        if (err) {
            res.status(500).json(err);
        } else {
            res.status(200).json(updatedData);
        }
    });
}



exports.removeLeadType = function (req, res) {
    LeadSetting.findOneAndUpdate({ "leadType._id": req.params.id }, {$pull: { "leadType":   {_id: req.params.id} }}, { new: true }, function (err, updatedData) {
        if (err) {
            res.status(500).json(err);
        } else {
            res.status(200).json(updatedData);
        }
    });
}


exports.removeLeadUnit = function (req, res) {
    LeadSetting.findOneAndUpdate({ "leadUnit._id": req.params.id }, {$pull: { "leadUnit":   {_id: req.params.id} }}, { new: true }, function (err, updatedData) {
        if (err) {
            res.status(500).json(err);
        } else {
            res.status(200).json(updatedData);
        }
    });
}

exports.removeLeadSource = function (req, res) {
    LeadSetting.findOneAndUpdate({ "leadSource._id": req.params.id }, {$pull: { "leadSource":   {_id: req.params.id} }}, { new: true }, function (err, updatedData) {
        if (err) {
            res.status(500).json(err);
        } else {
            res.status(200).json(updatedData);
        }
    });
}




exports.findLeadSettings = function (req, res) {
    LeadSetting.findOne({}).limit(1).exec(function (err, updatedData) {
        if (err) {
            res.status(500).json(err);
        } else {
            res.status(200).json(updatedData);
        }
    });
}