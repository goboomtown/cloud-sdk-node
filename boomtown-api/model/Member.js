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
    root.BoomtownApi.Member = factory(root.BoomtownApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The Member model module.
   * @module model/Member
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>Member</code>.
   * @alias module:model/Member
   * @class
   * @param name
   * @param zipcode
   * @param email
   */
  var exports = function(name, zipcode, email) {


    this['name'] = name;





    this['zipcode'] = zipcode;
    this['email'] = email;




  };

  /**
   * Constructs a <code>Member</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Member} obj Optional instance to populate.
   * @return {module:model/Member} The populated <code>Member</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('name_legal')) {
        obj['name_legal'] = ApiClient.convertToType(data['name_legal'], 'String');
      }
      if (data.hasOwnProperty('street_1')) {
        obj['street_1'] = ApiClient.convertToType(data['street_1'], 'String');
      }
      if (data.hasOwnProperty('street_2')) {
        obj['street_2'] = ApiClient.convertToType(data['street_2'], 'String');
      }
      if (data.hasOwnProperty('city')) {
        obj['city'] = ApiClient.convertToType(data['city'], 'String');
      }
      if (data.hasOwnProperty('state')) {
        obj['state'] = ApiClient.convertToType(data['state'], 'String');
      }
      if (data.hasOwnProperty('zipcode')) {
        obj['zipcode'] = ApiClient.convertToType(data['zipcode'], 'String');
      }
      if (data.hasOwnProperty('email')) {
        obj['email'] = ApiClient.convertToType(data['email'], 'String');
      }
      if (data.hasOwnProperty('phone')) {
        obj['phone'] = ApiClient.convertToType(data['phone'], 'String');
      }
      if (data.hasOwnProperty('industry')) {
        obj['industry'] = ApiClient.convertToType(data['industry'], 'String');
      }
      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'String');
      }
      if (data.hasOwnProperty('created')) {
        obj['created'] = ApiClient.convertToType(data['created'], 'Date');
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
   * Business name.
   * @member {String} name
   */
  exports.prototype['name'] = undefined;

  /**
   * Business legal name.
   * @member {String} name_legal
   */
  exports.prototype['name_legal'] = undefined;

  /**
   * Street address.
   * @member {String} street_1
   */
  exports.prototype['street_1'] = undefined;

  /**
   * Street address continued.
   * @member {String} street_2
   */
  exports.prototype['street_2'] = undefined;

  /**
   * City.
   * @member {String} city
   */
  exports.prototype['city'] = undefined;

  /**
   * State Identifier (2 char code).
   * @member {String} state
   */
  exports.prototype['state'] = undefined;

  /**
   * Postal Code.
   * @member {String} zipcode
   */
  exports.prototype['zipcode'] = undefined;

  /**
   * Email address.
   * @member {String} email
   */
  exports.prototype['email'] = undefined;

  /**
   * Phone number.
   * @member {String} phone
   */
  exports.prototype['phone'] = undefined;

  /**
   * Industry.
   * @member {String} industry
   */
  exports.prototype['industry'] = undefined;

  /**
   * Status.
   * @member {String} status
   */
  exports.prototype['status'] = undefined;

  /**
   * Date created.
   * @member {Date} created
   */
  exports.prototype['created'] = undefined;




  return exports;
}));
