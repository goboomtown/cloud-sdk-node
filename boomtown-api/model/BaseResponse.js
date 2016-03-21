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
    root.BoomtownApi.BaseResponse = factory(root.BoomtownApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The BaseResponse model module.
   * @module model/BaseResponse
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>BaseResponse</code>.
   * @alias module:model/BaseResponse
   * @class
   */
  var exports = function() {







  };

  /**
   * Constructs a <code>BaseResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/BaseResponse} obj Optional instance to populate.
   * @return {module:model/BaseResponse} The populated <code>BaseResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('success')) {
        obj['success'] = ApiClient.convertToType(data['success'], 'Boolean');
      }
      if (data.hasOwnProperty('current_server_time')) {
        obj['current_server_time'] = ApiClient.convertToType(data['current_server_time'], 'Date');
      }
      if (data.hasOwnProperty('totalCount')) {
        obj['totalCount'] = ApiClient.convertToType(data['totalCount'], 'Integer');
      }
      if (data.hasOwnProperty('returned')) {
        obj['returned'] = ApiClient.convertToType(data['returned'], 'Integer');
      }
      if (data.hasOwnProperty('pages')) {
        obj['pages'] = ApiClient.convertToType(data['pages'], 'Integer');
      }
      if (data.hasOwnProperty('message')) {
        obj['message'] = ApiClient.convertToType(data['message'], 'String');
      }
    }
    return obj;
  }


  /**
   * Indicates success of the operation.
   * @member {Boolean} success
   */
  exports.prototype['success'] = undefined;

  /**
   * @member {Date} current_server_time
   */
  exports.prototype['current_server_time'] = undefined;

  /**
   * Total records available.
   * @member {Integer} totalCount
   */
  exports.prototype['totalCount'] = undefined;

  /**
   * Total records retrieved.
   * @member {Integer} returned
   */
  exports.prototype['returned'] = undefined;

  /**
   * Total pages available.
   * @member {Integer} pages
   */
  exports.prototype['pages'] = undefined;

  /**
   * @member {String} message
   */
  exports.prototype['message'] = undefined;




  return exports;
}));
