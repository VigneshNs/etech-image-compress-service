var contactSettingsDA = require('./contactSettingsDA');
var Settings = require('../../model/contactSettings.model');

exports.addGrade = function(req, res) {
    try {
        Settings.find({}, function (err, findSetting) {
               if (err) {
                   res.status(500).send({
                       "result": 'error occured while retreiving data'
                   });
               } else {
                if(findSetting.length === 0) {
                    contactSettingsDA.addGrade(req, res);
                } else {
                    contactSettingsDA.updateGrade(req, res, findSetting[0]._id);
                }
               }
           });
    } catch (error) {
        console.log(error)
    }
}

exports.addIndustryType = function(req, res) {
    try {
        Settings.find({}, function (err, findSetting) {
               if (err) {
                   res.status(500).send({
                       "result": 'error occured while retreiving data'
                   });
               } else {
                if(findSetting.length === 0) {
                    contactSettingsDA.addIndustryType(req, res);
                } else {
                    contactSettingsDA.updateIndustryType(req, res, findSetting[0]._id);
                }
               }
           });
    } catch (error) {
        console.log(error)
    }
}
exports.addOutCome = function(req, res) {
    try {
        Settings.find({}, function (err, findSetting) {
               if (err) {
                   res.status(500).send({
                       "result": 'error occured while retreiving data'
                   });
               } else {
                if(findSetting.length === 0) {
                    contactSettingsDA.addOutCome(req, res);
                } else {
                    contactSettingsDA.updateOutCome(req, res, findSetting[0]._id);
                }
               }
           });
    } catch (error) {
        console.log(error)
    }
}

exports.addTypeOfCustomer = function(req, res) {
    try {
        Settings.find({}, function (err, findSetting) {
               if (err) {
                   res.status(500).send({
                       "result": 'error occured while retreiving data'
                   });
               } else {
                if(findSetting.length === 0) {
                    contactSettingsDA.addTypeOfCustomer(req, res);
                } else {
                    contactSettingsDA.updateTypeOfCustomer(req, res, findSetting[0]._id);
                }
               }
           });
    } catch (error) {
        console.log(error)
    }
}
exports.addOutCome = function(req, res) {
    try {
        Settings.find({}, function (err, findSetting) {
               if (err) {
                   res.status(500).send({
                       "result": 'error occured while retreiving data'
                   });
               } else {
                if(findSetting.length === 0) {
                    contactSettingsDA.addOutCome(req, res);
                } else {
                    contactSettingsDA.updateOutCome(req, res, findSetting[0]._id);
                }
               }
           });
    } catch (error) {
        console.log(error)
    }
}


exports.removeGrade = function(req, res) {
    try {
        contactSettingsDA.removeGrade(req, res);
    } catch (error) {
        console.log(error)
    }
}
exports.removeIndustryType = function(req, res) {
    try {
        contactSettingsDA.removeIndustryType(req, res);
    } catch (error) {
        console.log(error)
    }
}

exports.removeOutCome = function(req, res) {
    try {
        contactSettingsDA.removeOutCome(req, res);
    } catch (error) {
        console.log(error)
    }
}

exports.removeTypeOfCustomer = function(req, res) {
    try {
        contactSettingsDA.removeTypeOfCustomer(req, res);
    } catch (error) {
        console.log(error)
    }
}

exports.findContactSettings = function(req, res) {
    try {
        contactSettingsDA.findContactSettings(req, res);
    } catch (error) {
        console.log(error)
    }
}