var contactSettingsMgr = require('./contacts/contactSettingsMgr');
var leadSettingsMgr = require('./lead/leadSettingsMgr');

module.exports = function(app) {
    app.route('/addgradesetting').post(contactSettingsMgr.addGrade);
    app.route('/addindustrytypesetting').post(contactSettingsMgr.addIndustryType);
    app.route('/addoutcomesetting').post(contactSettingsMgr.addOutCome);
    app.route('/addtypeofcustomersetting').post(contactSettingsMgr.addTypeOfCustomer);
    app.route('/removegradesetting/:id').put(contactSettingsMgr.removeGrade);
    app.route('/removeindustrytypesetting/:id').put(contactSettingsMgr.removeIndustryType);
    app.route('/removeoutcomesetting/:id').put(contactSettingsMgr.removeOutCome);
    app.route('/removetypeofcustomer/:id').put(contactSettingsMgr.removeTypeOfCustomer);
    app.route('/findcontactsetting').get(contactSettingsMgr.findContactSettings);

    // lead setting
    app.route('/addleadstatus').post(leadSettingsMgr.addLeadStatus);
    app.route('/addleadservice').post(leadSettingsMgr.addLeadService);
    app.route('/addleadtype').post(leadSettingsMgr.addLeadType);
    app.route('/addleadunit').post(leadSettingsMgr.addLeadUnit);
    app.route('/addleadsource').post(leadSettingsMgr.addLeadSource);
    app.route('/removeleadstatus/:id').put(leadSettingsMgr.removeLeadStatus);
    app.route('/removeleadservice/:id').put(leadSettingsMgr.removeLeadService);
    app.route('/removeleadtype/:id').put(leadSettingsMgr.removeLeadType);
    app.route('/removeleadunit/:id').put(leadSettingsMgr.removeLeadUnit);
    app.route('/removeleadsource/:id').put(leadSettingsMgr.removeLeadSource);
    app.route('/findleadsetting').get(leadSettingsMgr.findLeadSettings);
} 