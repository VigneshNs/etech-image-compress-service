var leadSettingsDA = require('./leadSettingsDA');
var LeadSettings = require('../../model/leadSettings.model');

exports.addLeadStatus = function(req, res) {
    try {
        LeadSettings.find({}, function (err, findSetting) {
               if (err) {
                   res.status(500).send({
                       "result": 'error occured while retreiving data'
                   });
               } else {
                if(findSetting.length === 0) {
                    leadSettingsDA.addLeadStatus(req, res);
                } else {
                    leadSettingsDA.updateLeadStatus(req, res, findSetting[0]._id);
                }
               }
           });
    } catch (error) {
        console.log(error)
    }
}

exports.addLeadService = function(req, res) {
    try {
        LeadSettings.find({}, function (err, findSetting) {
               if (err) {
                   res.status(500).send({
                       "result": 'error occured while retreiving data'
                   });
               } else {
                if(findSetting.length === 0) {
                    leadSettingsDA.addLeadService(req, res);
                } else {
                    leadSettingsDA.updateLeadService(req, res, findSetting[0]._id);
                }
               }
           });
    } catch (error) {
        console.log(error)
    }
}
exports.addLeadType = function(req, res) {
    try {
        LeadSettings.find({}, function (err, findSetting) {
               if (err) {
                   res.status(500).send({
                       "result": 'error occured while retreiving data'
                   });
               } else {
                if(findSetting.length === 0) {
                    leadSettingsDA.addLeadType(req, res);
                } else {
                    leadSettingsDA.updateLeadType(req, res, findSetting[0]._id);
                }
               }
           });
    } catch (error) {
        console.log(error)
    }
}

exports.addLeadUnit = function(req, res) {
    try {
        LeadSettings.find({}, function (err, findSetting) {
               if (err) {
                   res.status(500).send({
                       "result": 'error occured while retreiving data'
                   });
               } else {
                if(findSetting.length === 0) {
                    leadSettingsDA.addLeadUnit(req, res);
                } else {
                    leadSettingsDA.updateLeadUnit(req, res, findSetting[0]._id);
                }
               }
           });
    } catch (error) {
        console.log(error)
    }
}
exports.addLeadSource = function(req, res) {
    try {
        LeadSettings.find({}, function (err, findSetting) {
               if (err) {
                   res.status(500).send({
                       "result": 'error occured while retreiving data'
                   });
               } else {
                if(findSetting.length === 0) {
                    leadSettingsDA.addLeadSource(req, res);
                } else {
                    leadSettingsDA.updateLeadSource(req, res, findSetting[0]._id);
                }
               }
           });
    } catch (error) {
        console.log(error)
    }
}


exports.removeLeadStatus = function(req, res) {
    try {
        leadSettingsDA.removeLeadStatus(req, res);
    } catch (error) {
        console.log(error)
    }
}
exports.removeLeadService = function(req, res) {
    try {
        leadSettingsDA.removeLeadService(req, res);
    } catch (error) {
        console.log(error)
    }
}

exports.removeLeadType = function(req, res) {
    try {
        leadSettingsDA.removeLeadType(req, res);
    } catch (error) {
        console.log(error)
    }
}

exports.removeLeadUnit = function(req, res) {
    try {
        leadSettingsDA.removeLeadUnit(req, res);
    } catch (error) {
        console.log(error)
    }
}

exports.removeLeadSource = function(req, res) {
    try {
        leadSettingsDA.removeLeadSource(req, res);
    } catch (error) {
        console.log(error)
    }
}


exports.findLeadSettings = function(req, res) {
    try {
        leadSettingsDA.findLeadSettings(req, res);
    } catch (error) {
        console.log(error)
    }
}