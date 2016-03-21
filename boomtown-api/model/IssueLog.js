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
    root.BoomtownApi.IssueLog = factory(root.BoomtownApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The IssueLog model module.
   * @module model/IssueLog
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>IssueLog</code>.
   * @alias module:model/IssueLog
   * @class
   * @param issuesId
   */
  var exports = function(issuesId) {


    this['issues_id'] = issuesId;



  };

  /**
   * Constructs a <code>IssueLog</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/IssueLog} obj Optional instance to populate.
   * @return {module:model/IssueLog} The populated <code>IssueLog</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('issues_id')) {
        obj['issues_id'] = ApiClient.convertToType(data['issues_id'], 'String');
      }
      if (data.hasOwnProperty('diff_log')) {
        obj['diff_log'] = ApiClient.convertToType(data['diff_log'], 'String');
      }
      if (data.hasOwnProperty('notes')) {
        obj['notes'] = ApiClient.convertToType(data['notes'], 'String');
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
   * The primary key of the related *Issue*.
   * @member {String} issues_id
   */
  exports.prototype['issues_id'] = undefined;

  /**
   * Differences.
   * @member {String} diff_log
   */
  exports.prototype['diff_log'] = undefined;

  /**
   * Notes.
   * @member {String} notes
   */
  exports.prototype['notes'] = undefined;

  /**
   * Date created.
   * @member {Date} created
   */
  exports.prototype['created'] = undefined;




  return exports;
}));
