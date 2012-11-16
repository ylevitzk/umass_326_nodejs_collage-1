/**
 * file:            server.js
 * type:            module
 * 
 * description:     keeps track of users and collages.
 *
 * CHANGE LOG:
 * 11/15/12 - created file (enrico)
 * 
 */

exports.server = function() 
{
    var collages = [];
    var users = [];
    
    // @param collage - collage object
    this.addCollage = function(collage) {
        collages.push(collage);
    };
    
    // @param cid - integer
    this.removeCollage = function(cid) {
        // TODO
    };
    
    // @param user - user object
    this.addUser = function(user) {
        users.push(user);
    };
    
    // @param uid - integer
    this.removeUser = function(uid) {
        // TODO
    };
};