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
    root.BoomtownApi.MemberTuple = factory(root.BoomtownApi.ApiClient, root.BoomtownApi.Member, root.BoomtownApi.MemberLocation, root.BoomtownApi.MemberUser);
  }
}(this, function(ApiClient, Member, MemberLocation, MemberUser) {
  'use strict';

  /**
   * The MemberTuple model module.
   * @module model/MemberTuple
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>MemberTuple</code>.
   * @alias module:model/MemberTuple
   * @class
   * @param member
   * @param memberUser
   * @param memberLocation
   */
  var exports = function(member, memberUser, memberLocation) {

    this['member'] = member;
    this['member_user'] = memberUser;
    this['member_location'] = memberLocation;
  };

  /**
   * Constructs a <code>MemberTuple</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MemberTuple} obj Optional instance to populate.
   * @return {module:model/MemberTuple} The populated <code>MemberTuple</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('member')) {
        obj['member'] = Member.constructFromObject(data['member']);
      }
      if (data.hasOwnProperty('member_user')) {
        obj['member_user'] = MemberUser.constructFromObject(data['member_user']);
      }
      if (data.hasOwnProperty('member_location')) {
        obj['member_location'] = MemberLocation.constructFromObject(data['member_location']);
      }
    }
    return obj;
  }


  /**
   * @member {module:model/Member} member
   */
  exports.prototype['member'] = undefined;

  /**
   * @member {module:model/MemberUser} member_user
   */
  exports.prototype['member_user'] = undefined;

  /**
   * @member {module:model/MemberLocation} member_location
   */
  exports.prototype['member_location'] = undefined;




  return exports;
}));
