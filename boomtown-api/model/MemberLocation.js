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
    root.BoomtownApi.MemberLocation = factory(root.BoomtownApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The MemberLocation model module.
   * @module model/MemberLocation
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>MemberLocation</code>.
   * @alias module:model/MemberLocation
   * @class
   * @param street1
   * @param city
   * @param state
   * @param zipcode
   */
  var exports = function(street1, city, state, zipcode) {



    this['street_1'] = street1;

    this['city'] = city;
    this['state'] = state;
    this['zipcode'] = zipcode;




  };

  /**
   * Constructs a <code>MemberLocation</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MemberLocation} obj Optional instance to populate.
   * @return {module:model/MemberLocation} The populated <code>MemberLocation</code> instance.
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
      if (data.hasOwnProperty('latitude')) {
        obj['latitude'] = ApiClient.convertToType(data['latitude'], 'Number');
      }
      if (data.hasOwnProperty('longitude')) {
        obj['longitude'] = ApiClient.convertToType(data['longitude'], 'Number');
      }
      if (data.hasOwnProperty('phone')) {
        obj['phone'] = ApiClient.convertToType(data['phone'], 'String');
      }
      if (data.hasOwnProperty('site_name')) {
        obj['site_name'] = ApiClient.convertToType(data['site_name'], 'String');
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
   * Latitude.
   * @member {Number} latitude
   */
  exports.prototype['latitude'] = undefined;

  /**
   * Longitude.
   * @member {Number} longitude
   */
  exports.prototype['longitude'] = undefined;

  /**
   * Phone number.
   * @member {String} phone
   */
  exports.prototype['phone'] = undefined;

  /**
   * Informal reference, an alias.
   * @member {String} site_name
   */
  exports.prototype['site_name'] = undefined;




  return exports;
}));
