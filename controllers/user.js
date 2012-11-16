/**
 * file:            user.js
 * type:            controller
 * 
 * description:     provides methods that do stuff with user objects.
 *
 * CHANGE LOG:
 * 11/16/12 - created file (enrico)
 * 
 */

var uid = 0;
exports.generateUid = function() {
    uid++;
    return uid;
}