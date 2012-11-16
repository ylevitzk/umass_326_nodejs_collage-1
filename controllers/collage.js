/**
 * file:            collage.js
 * type:            controller
 * 
 * description:     provides methods that do stuff with collage objects.
 *
 * CHANGE LOG:
 * 11/16/12 - created file (enrico)
 * 
 */

var cid = 0;

 // @returns integer
exports.generateCid = function() {
    cid++;
    return cid;
};

