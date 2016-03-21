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
    root.BoomtownApi.Provider = factory(root.BoomtownApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The Provider model module.
   * @module model/Provider
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>Provider</code>.
   * @alias module:model/Provider
   * @class
   */
  var exports = function() {





















  };

  /**
   * Constructs a <code>Provider</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Provider} obj Optional instance to populate.
   * @return {module:model/Provider} The populated <code>Provider</code> instance.
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
      if (data.hasOwnProperty('nickname')) {
        obj['nickname'] = ApiClient.convertToType(data['nickname'], 'String');
      }
      if (data.hasOwnProperty('comm_id')) {
        obj['comm_id'] = ApiClient.convertToType(data['comm_id'], 'String');
      }
      if (data.hasOwnProperty('description')) {
        obj['description'] = ApiClient.convertToType(data['description'], 'String');
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
      if (data.hasOwnProperty('default_partners_teams_id')) {
        obj['default_partners_teams_id'] = ApiClient.convertToType(data['default_partners_teams_id'], 'String');
      }
      if (data.hasOwnProperty('email')) {
        obj['email'] = ApiClient.convertToType(data['email'], 'String');
      }
      if (data.hasOwnProperty('phone')) {
        obj['phone'] = ApiClient.convertToType(data['phone'], 'String');
      }
      if (data.hasOwnProperty('website')) {
        obj['website'] = ApiClient.convertToType(data['website'], 'String');
      }
      if (data.hasOwnProperty('avatar')) {
        obj['avatar'] = ApiClient.convertToType(data['avatar'], 'String');
      }
      if (data.hasOwnProperty('created')) {
        obj['created'] = ApiClient.convertToType(data['created'], 'Date');
      }
      if (data.hasOwnProperty('updated')) {
        obj['updated'] = ApiClient.convertToType(data['updated'], 'Date');
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
   * Hashtag nickname for group mentions in chat.
   * @member {String} nickname
   */
  exports.prototype['nickname'] = undefined;

  /**
   * The communication channel id.
   * @member {String} comm_id
   */
  exports.prototype['comm_id'] = undefined;

  /**
   * Description.
   * @member {String} description
   */
  exports.prototype['description'] = undefined;

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
   * Business location latitude.
   * @member {Number} latitude
   */
  exports.prototype['latitude'] = undefined;

  /**
   * Business location longitude.
   * @member {Number} longitude
   */
  exports.prototype['longitude'] = undefined;

  /**
   * Default ProviderTeam's id.
   * @member {String} default_partners_teams_id
   */
  exports.prototype['default_partners_teams_id'] = undefined;

  /**
   * Email address.
   * @member {String} email
   */
  exports.prototype['email'] = undefined;

  /**
   * Primary contact phone number.
   * @member {String} phone
   */
  exports.prototype['phone'] = undefined;

  /**
   * Business website/URL.
   * @member {String} website
   */
  exports.prototype['website'] = undefined;

  /**
   * URL to an avatar.
   * @member {String} avatar
   */
  exports.prototype['avatar'] = undefined;

  /**
   * Date created.
   * @member {Date} created
   */
  exports.prototype['created'] = undefined;

  /**
   * Date last updated.
   * @member {Date} updated
   */
  exports.prototype['updated'] = undefined;




  return exports;
}));
