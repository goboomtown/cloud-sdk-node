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
    root.BoomtownApi.ProviderTeam = factory(root.BoomtownApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The ProviderTeam model module.
   * @module model/ProviderTeam
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>ProviderTeam</code>.
   * @alias module:model/ProviderTeam
   * @class
   */
  var exports = function() {

























  };

  /**
   * Constructs a <code>ProviderTeam</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ProviderTeam} obj Optional instance to populate.
   * @return {module:model/ProviderTeam} The populated <code>ProviderTeam</code> instance.
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
      if (data.hasOwnProperty('nickname')) {
        obj['nickname'] = ApiClient.convertToType(data['nickname'], 'String');
      }
      if (data.hasOwnProperty('description')) {
        obj['description'] = ApiClient.convertToType(data['description'], 'String');
      }
      if (data.hasOwnProperty('email')) {
        obj['email'] = ApiClient.convertToType(data['email'], 'String');
      }
      if (data.hasOwnProperty('phone')) {
        obj['phone'] = ApiClient.convertToType(data['phone'], 'String');
      }
      if (data.hasOwnProperty('avatar')) {
        obj['avatar'] = ApiClient.convertToType(data['avatar'], 'String');
      }
      if (data.hasOwnProperty('auto_assign_route')) {
        obj['auto_assign_route'] = ApiClient.convertToType(data['auto_assign_route'], 'Boolean');
      }
      if (data.hasOwnProperty('auto_assign_sponsor')) {
        obj['auto_assign_sponsor'] = ApiClient.convertToType(data['auto_assign_sponsor'], 'Boolean');
      }
      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'String');
      }
      if (data.hasOwnProperty('type')) {
        obj['type'] = ApiClient.convertToType(data['type'], 'String');
      }
      if (data.hasOwnProperty('exclusive')) {
        obj['exclusive'] = ApiClient.convertToType(data['exclusive'], 'Boolean');
      }
      if (data.hasOwnProperty('published')) {
        obj['published'] = ApiClient.convertToType(data['published'], 'Boolean');
      }
      if (data.hasOwnProperty('published_name')) {
        obj['published_name'] = ApiClient.convertToType(data['published_name'], 'String');
      }
      if (data.hasOwnProperty('private_label')) {
        obj['private_label'] = ApiClient.convertToType(data['private_label'], 'Boolean');
      }
      if (data.hasOwnProperty('brand_color1')) {
        obj['brand_color1'] = ApiClient.convertToType(data['brand_color1'], 'String');
      }
      if (data.hasOwnProperty('brand_logo_1x')) {
        obj['brand_logo_1x'] = ApiClient.convertToType(data['brand_logo_1x'], 'String');
      }
      if (data.hasOwnProperty('brand_logo_2x')) {
        obj['brand_logo_2x'] = ApiClient.convertToType(data['brand_logo_2x'], 'String');
      }
      if (data.hasOwnProperty('brand_logo_3x')) {
        obj['brand_logo_3x'] = ApiClient.convertToType(data['brand_logo_3x'], 'String');
      }
      if (data.hasOwnProperty('support_email')) {
        obj['support_email'] = ApiClient.convertToType(data['support_email'], 'String');
      }
      if (data.hasOwnProperty('support_phone')) {
        obj['support_phone'] = ApiClient.convertToType(data['support_phone'], 'String');
      }
      if (data.hasOwnProperty('support_url')) {
        obj['support_url'] = ApiClient.convertToType(data['support_url'], 'String');
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
   * Name.
   * @member {String} name
   */
  exports.prototype['name'] = undefined;

  /**
   * Hashtag nickname for group mentions in chat.
   * @member {String} nickname
   */
  exports.prototype['nickname'] = undefined;

  /**
   * Description.
   * @member {String} description
   */
  exports.prototype['description'] = undefined;

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
   * URL to an avatar.
   * @member {String} avatar
   */
  exports.prototype['avatar'] = undefined;

  /**
   * Automatically routes related merchant issues to this ProviderTeam.
   * @member {Boolean} auto_assign_route
   */
  exports.prototype['auto_assign_route'] = undefined;

  /**
   * Automatically assigns this ProviderTeam as the sponsor for related merchants.
   * @member {Boolean} auto_assign_sponsor
   */
  exports.prototype['auto_assign_sponsor'] = undefined;

  /**
   * Status.
   * @member {String} status
   */
  exports.prototype['status'] = undefined;

  /**
   * Type / Category.
   * @member {String} type
   */
  exports.prototype['type'] = undefined;

  /**
   * Exclusive within it's type / category.
   * @member {Boolean} exclusive
   */
  exports.prototype['exclusive'] = undefined;

  /**
   * Published to the Connect App.
   * @member {Boolean} published
   */
  exports.prototype['published'] = undefined;

  /**
   * Name, as publushed in the Connect App.
   * @member {String} published_name
   */
  exports.prototype['published_name'] = undefined;

  /**
   * Enable private label branding.
   * @member {Boolean} private_label
   */
  exports.prototype['private_label'] = undefined;

  /**
   * Private label brand color, used if private_label is true.
   * @member {String} brand_color1
   */
  exports.prototype['brand_color1'] = undefined;

  /**
   * Private label logo, used if private_label is true.
   * @member {String} brand_logo_1x
   */
  exports.prototype['brand_logo_1x'] = undefined;

  /**
   * Private label logo (x2), used if private_label is true.
   * @member {String} brand_logo_2x
   */
  exports.prototype['brand_logo_2x'] = undefined;

  /**
   * Private label logo (x3), used if private_label is true.
   * @member {String} brand_logo_3x
   */
  exports.prototype['brand_logo_3x'] = undefined;

  /**
   * Primary support email address.
   * @member {String} support_email
   */
  exports.prototype['support_email'] = undefined;

  /**
   * Primary support phone number.
   * @member {String} support_phone
   */
  exports.prototype['support_phone'] = undefined;

  /**
   * Primary support website.
   * @member {String} support_url
   */
  exports.prototype['support_url'] = undefined;

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
