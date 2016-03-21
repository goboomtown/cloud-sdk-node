(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.BoomtownApi) {
      root.BoomtownApi = {};
    }
    root.BoomtownApi.MemberUser = factory(root.BoomtownApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The MemberUser model module.
   * @module model/MemberUser
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>MemberUser</code>.
   * @alias module:model/MemberUser
   * @class
   * @param firstName
   * @param lastName
   * @param email
   */
  var exports = function(firstName, lastName, email) {




    this['first_name'] = firstName;
    this['last_name'] = lastName;

    this['email'] = email;



  };

  /**
   * Constructs a <code>MemberUser</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MemberUser} obj Optional instance to populate.
   * @return {module:model/MemberUser} The populated <code>MemberUser</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('members_id')) {
        obj['members_id'] = ApiClient.convertToType(data['members_id'], 'String');
      }
      if (data.hasOwnProperty('members_locations_id')) {
        obj['members_locations_id'] = ApiClient.convertToType(data['members_locations_id'], 'String');
      }
      if (data.hasOwnProperty('first_name')) {
        obj['first_name'] = ApiClient.convertToType(data['first_name'], 'String');
      }
      if (data.hasOwnProperty('last_name')) {
        obj['last_name'] = ApiClient.convertToType(data['last_name'], 'String');
      }
      if (data.hasOwnProperty('full_name')) {
        obj['full_name'] = ApiClient.convertToType(data['full_name'], 'String');
      }
      if (data.hasOwnProperty('email')) {
        obj['email'] = ApiClient.convertToType(data['email'], 'String');
      }
      if (data.hasOwnProperty('sms_number')) {
        obj['sms_number'] = ApiClient.convertToType(data['sms_number'], 'String');
      }
      if (data.hasOwnProperty('lang')) {
        obj['lang'] = ApiClient.convertToType(data['lang'], 'String');
      }
      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'String');
      }
    }
    return obj;
  }


  /**
   * Primary key.
   * @member {String} id
   */
  exports.prototype['id'] = undefined;

  /**
   * The primary key of the related *Merchant*.
   * @member {String} members_id
   */
  exports.prototype['members_id'] = undefined;

  /**
   * The primary key of the related *MerchantLocation*.
   * @member {String} members_locations_id
   */
  exports.prototype['members_locations_id'] = undefined;

  /**
   * First name.
   * @member {String} first_name
   */
  exports.prototype['first_name'] = undefined;

  /**
   * Last name.
   * @member {String} last_name
   */
  exports.prototype['last_name'] = undefined;

  /**
   * Concatenation of first and last name.
   * @member {String} full_name
   */
  exports.prototype['full_name'] = undefined;

  /**
   * Email address.
   * @member {String} email
   */
  exports.prototype['email'] = undefined;

  /**
   * SMS capable phone number.
   * @member {String} sms_number
   */
  exports.prototype['sms_number'] = undefined;

  /**
   * Language.
   * @member {String} lang
   */
  exports.prototype['lang'] = undefined;

  /**
   * Status.
   * @member {String} status
   */
  exports.prototype['status'] = undefined;




  return exports;
}));
