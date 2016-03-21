(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './Member', './MemberLocation', './MemberUser'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Member'), require('./MemberLocation'), require('./MemberUser'));
  } else {
    // Browser globals (root is window)
    if (!root.BoomtownApi) {
      root.BoomtownApi = {};
    }
    root.BoomtownApi.MemberCreateRequest = factory(root.BoomtownApi.ApiClient, root.BoomtownApi.Member, root.BoomtownApi.MemberLocation, root.BoomtownApi.MemberUser);
  }
}(this, function(ApiClient, Member, MemberLocation, MemberUser) {
  'use strict';

  /**
   * The MemberCreateRequest model module.
   * @module model/MemberCreateRequest
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>MemberCreateRequest</code>.
   * @alias module:model/MemberCreateRequest
   * @class
   * @param members
   * @param membersUsers
   * @param membersLocations
   */
  var exports = function(members, membersUsers, membersLocations) {

    this['members'] = members;
    this['members_users'] = membersUsers;
    this['members_locations'] = membersLocations;
  };

  /**
   * Constructs a <code>MemberCreateRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MemberCreateRequest} obj Optional instance to populate.
   * @return {module:model/MemberCreateRequest} The populated <code>MemberCreateRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('members')) {
        obj['members'] = Member.constructFromObject(data['members']);
      }
      if (data.hasOwnProperty('members_users')) {
        obj['members_users'] = MemberUser.constructFromObject(data['members_users']);
      }
      if (data.hasOwnProperty('members_locations')) {
        obj['members_locations'] = MemberLocation.constructFromObject(data['members_locations']);
      }
    }
    return obj;
  }


  /**
   * @member {module:model/Member} members
   */
  exports.prototype['members'] = undefined;

  /**
   * @member {module:model/MemberUser} members_users
   */
  exports.prototype['members_users'] = undefined;

  /**
   * @member {module:model/MemberLocation} members_locations
   */
  exports.prototype['members_locations'] = undefined;




  return exports;
}));
