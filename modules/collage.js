/**
 * file:            collage.js
 * type:            module
 * 
 * description:     a collage on the website, includes layers, permissions etc.
 *
 * CHANGE LOG:
 * 11/15/12 - created file (enrico)
 * 
 */

var helper = require('../controllers/collage');

exports.collage = function(nameParam, urlParam) 
{
    var cid     = helper.generateCid();
    var name    = nameParam;
    var url     = urlParam;
    var shared  = false;
    
    var layers          = [];
    var messages        = [];
    var collaborators   = [];
    
    // @returns integer
    this.getCid = function() {
        return cid;
    };
    
    // @param nameParam - String
    this.setName = function(nameParam) {
        name = nameParam;
    };
    
    // @returns string    
    this.getName = function () {
        return name;
    };
    
    // @param urlParam - string
    this.setUrl = function (urlParam) {
        url = urlParam;
    };
    
    // @returns string        
    this.getUrl = function () {
        return url;
    };
    
    // @param sharedParam - boolean
    this.setShared = function (sharedParam) {
        shared = sharedParam;
    };
    
    this.getShared = function () {
        return shared;
    };
    
    // @param layer - layer object
    this.addLayer = function(layer) {
        layers.push(layer);
    };
    
    // @param layer - layer object
    this.removeLayer = function(layer) {
        // TODO
    };
    
    // @param message - message object
    this.addMessage = function(message) {
        messages.push(message);
    }
    
    // @param uid - integer
    // @param permission - string: ('-', 'r', 'rw')
    this.setCollaborator = function(uid, permission) {
        collaborators.push([uid, permission]);
    };
    
    // @param uid - integer
    this.removeCollaborator = function(uid) {
        // TODO
    }
};