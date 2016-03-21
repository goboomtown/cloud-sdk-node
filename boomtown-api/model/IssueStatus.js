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
    root.BoomtownApi.IssueStatus = factory(root.BoomtownApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The IssueStatus model module.
   * @module model/IssueStatus
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>IssueStatus</code>.
   * @alias module:model/IssueStatus
   * @class
   */
  var exports = function() {








  };

  /**
   * Constructs a <code>IssueStatus</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/IssueStatus} obj Optional instance to populate.
   * @return {module:model/IssueStatus} The populated <code>IssueStatus</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('created')) {
        obj['created'] = ApiClient.convertToType(data['created'], 'Date');
      }
      if (data.hasOwnProperty('type')) {
        obj['type'] = ApiClient.convertToType(data['type'], 'String');
      }
      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'String');
      }
      if (data.hasOwnProperty('resolution')) {
        obj['resolution'] = ApiClient.convertToType(data['resolution'], 'String');
      }
      if (data.hasOwnProperty('scheduled_time')) {
        obj['scheduled_time'] = ApiClient.convertToType(data['scheduled_time'], 'Date');
      }
      if (data.hasOwnProperty('ticketSummaryText')) {
        obj['ticketSummaryText'] = ApiClient.convertToType(data['ticketSummaryText'], 'String');
      }
      if (data.hasOwnProperty('historySummaryText')) {
        obj['historySummaryText'] = ApiClient.convertToType(data['historySummaryText'], 'String');
      }
    }
    return obj;
  }


  /**
   * Date created.
   * @member {Date} created
   */
  exports.prototype['created'] = undefined;

  /**
   * The type of Issue this log is associated to.
   * @member {String} type
   */
  exports.prototype['type'] = undefined;

  /**
   * The status of the issue.
   * @member {String} status
   */
  exports.prototype['status'] = undefined;

  /**
   * Resolution type.
   * @member {String} resolution
   */
  exports.prototype['resolution'] = undefined;

  /**
   * Scheduled date/time.
   * @member {Date} scheduled_time
   */
  exports.prototype['scheduled_time'] = undefined;

  /**
   * Text describing the issue status/log event.
   * @member {String} ticketSummaryText
   */
  exports.prototype['ticketSummaryText'] = undefined;

  /**
   * Text describing the issue status/log event.
   * @member {String} historySummaryText
   */
  exports.prototype['historySummaryText'] = undefined;




  return exports;
}));
