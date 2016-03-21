(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './BaseResponse', './IssueStatus'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./BaseResponse'), require('./IssueStatus'));
  } else {
    // Browser globals (root is window)
    if (!root.BoomtownApi) {
      root.BoomtownApi = {};
    }
    root.BoomtownApi.IssueStatusesResponse = factory(root.BoomtownApi.ApiClient, root.BoomtownApi.BaseResponse, root.BoomtownApi.IssueStatus);
  }
}(this, function(ApiClient, BaseResponse, IssueStatus) {
  'use strict';

  /**
   * The IssueStatusesResponse model module.
   * @module model/IssueStatusesResponse
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>IssueStatusesResponse</code>.
   * @alias module:model/IssueStatusesResponse
   * @class
   * @extends module:model/BaseResponse
   */
  var exports = function() {
    BaseResponse.call(this);

  };

  /**
   * Constructs a <code>IssueStatusesResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/IssueStatusesResponse} obj Optional instance to populate.
   * @return {module:model/IssueStatusesResponse} The populated <code>IssueStatusesResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();
      BaseResponse.constructFromObject(data, obj);
      if (data.hasOwnProperty('results')) {
        obj['results'] = ApiClient.convertToType(data['results'], [IssueStatus]);
      }
    }
    return obj;
  }

  exports.prototype = Object.create(BaseResponse.prototype);
  exports.prototype.constructor = exports;


  /**
   * @member {Array.<module:model/IssueStatus>} results
   */
  exports.prototype['results'] = undefined;




  return exports;
}));
