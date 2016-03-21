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
    root.BoomtownApi.Issue = factory(root.BoomtownApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The Issue model module.
   * @module model/Issue
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>Issue</code>.
   * @alias module:model/Issue
   * @class
   * @param membersId
   * @param membersLocationsId
   * @param membersUsersId
   */
  var exports = function(membersId, membersLocationsId, membersUsersId) {



    this['members_id'] = membersId;


    this['members_locations_id'] = membersLocationsId;

    this['members_users_id'] = membersUsersId;














  };

  /**
   * Constructs a <code>Issue</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Issue} obj Optional instance to populate.
   * @return {module:model/Issue} The populated <code>Issue</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('reference_num')) {
        obj['reference_num'] = ApiClient.convertToType(data['reference_num'], 'String');
      }
      if (data.hasOwnProperty('members_id')) {
        obj['members_id'] = ApiClient.convertToType(data['members_id'], 'String');
      }
      if (data.hasOwnProperty('members_name')) {
        obj['members_name'] = ApiClient.convertToType(data['members_name'], 'String');
      }
      if (data.hasOwnProperty('members_email')) {
        obj['members_email'] = ApiClient.convertToType(data['members_email'], 'String');
      }
      if (data.hasOwnProperty('members_locations_id')) {
        obj['members_locations_id'] = ApiClient.convertToType(data['members_locations_id'], 'String');
      }
      if (data.hasOwnProperty('members_locations_name')) {
        obj['members_locations_name'] = ApiClient.convertToType(data['members_locations_name'], 'String');
      }
      if (data.hasOwnProperty('members_users_id')) {
        obj['members_users_id'] = ApiClient.convertToType(data['members_users_id'], 'String');
      }
      if (data.hasOwnProperty('members_users_name')) {
        obj['members_users_name'] = ApiClient.convertToType(data['members_users_name'], 'String');
      }
      if (data.hasOwnProperty('members_users_email')) {
        obj['members_users_email'] = ApiClient.convertToType(data['members_users_email'], 'String');
      }
      if (data.hasOwnProperty('type')) {
        obj['type'] = ApiClient.convertToType(data['type'], 'String');
      }
      if (data.hasOwnProperty('category')) {
        obj['category'] = ApiClient.convertToType(data['category'], 'String');
      }
      if (data.hasOwnProperty('details')) {
        obj['details'] = ApiClient.convertToType(data['details'], 'String');
      }
      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'String');
      }
      if (data.hasOwnProperty('job')) {
        obj['job'] = ApiClient.convertToType(data['job'], 'String');
      }
      if (data.hasOwnProperty('resolution')) {
        obj['resolution'] = ApiClient.convertToType(data['resolution'], 'String');
      }
      if (data.hasOwnProperty('created')) {
        obj['created'] = ApiClient.convertToType(data['created'], 'Date');
      }
      if (data.hasOwnProperty('updated')) {
        obj['updated'] = ApiClient.convertToType(data['updated'], 'Date');
      }
      if (data.hasOwnProperty('enroute_time')) {
        obj['enroute_time'] = ApiClient.convertToType(data['enroute_time'], 'Date');
      }
      if (data.hasOwnProperty('scheduled_time')) {
        obj['scheduled_time'] = ApiClient.convertToType(data['scheduled_time'], 'Date');
      }
      if (data.hasOwnProperty('arrival_time')) {
        obj['arrival_time'] = ApiClient.convertToType(data['arrival_time'], 'Date');
      }
      if (data.hasOwnProperty('departure_time')) {
        obj['departure_time'] = ApiClient.convertToType(data['departure_time'], 'Date');
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
   * Reference number.
   * @member {String} reference_num
   */
  exports.prototype['reference_num'] = undefined;

  /**
   * The primary key of the related *Merchant*.
   * @member {String} members_id
   */
  exports.prototype['members_id'] = undefined;

  /**
   * @member {String} members_name
   */
  exports.prototype['members_name'] = undefined;

  /**
   * @member {String} members_email
   */
  exports.prototype['members_email'] = undefined;

  /**
   * The primary key of the related *MerchantLocation*.
   * @member {String} members_locations_id
   */
  exports.prototype['members_locations_id'] = undefined;

  /**
   * @member {String} members_locations_name
   */
  exports.prototype['members_locations_name'] = undefined;

  /**
   * The primary key of the related *MerchantUser*.
   * @member {String} members_users_id
   */
  exports.prototype['members_users_id'] = undefined;

  /**
   * @member {String} members_users_name
   */
  exports.prototype['members_users_name'] = undefined;

  /**
   * @member {String} members_users_email
   */
  exports.prototype['members_users_email'] = undefined;

  /**
   * Type.
   * @member {String} type
   */
  exports.prototype['type'] = undefined;

  /**
   * Category.
   * @member {String} category
   */
  exports.prototype['category'] = undefined;

  /**
   * Details.
   * @member {String} details
   */
  exports.prototype['details'] = undefined;

  /**
   * Status.
   * @member {String} status
   */
  exports.prototype['status'] = undefined;

  /**
   * Job type.
   * @member {String} job
   */
  exports.prototype['job'] = undefined;

  /**
   * Resolution type.
   * @member {String} resolution
   */
  exports.prototype['resolution'] = undefined;

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

  /**
   * Actual technician travel time.
   * @member {Date} enroute_time
   */
  exports.prototype['enroute_time'] = undefined;

  /**
   * Date/time scheduled.
   * @member {Date} scheduled_time
   */
  exports.prototype['scheduled_time'] = undefined;

  /**
   * Technician arrival time.
   * @member {Date} arrival_time
   */
  exports.prototype['arrival_time'] = undefined;

  /**
   * Technician departure time.
   * @member {Date} departure_time
   */
  exports.prototype['departure_time'] = undefined;




  return exports;
}));
