(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './BaseResponse', './Member'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./BaseResponse'), require('./Member'));
  } else {
    // Browser globals (root is window)
    if (!root.BoomtownApi) {
      root.BoomtownApi = {};
    }
    root.BoomtownApi.MemberResponse = factory(root.BoomtownApi.ApiClient, root.BoomtownApi.BaseResponse, root.BoomtownApi.Member);
  }
}(this, function(ApiClient, BaseResponse, Member) {
  'use strict';

  /**
   * The MemberResponse model module.
   * @module model/MemberResponse
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>MemberResponse</code>.
   * @alias module:model/MemberResponse
   * @class
   * @extends module:model/BaseResponse
   */
  var exports = function() {
    BaseResponse.call(this);

  };

  /**
   * Constructs a <code>MemberResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MemberResponse} obj Optional instance to populate.
   * @return {module:model/MemberResponse} The populated <code>MemberResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();
      BaseResponse.constructFromObject(data, obj);
      if (data.hasOwnProperty('results')) {
        obj['results'] = ApiClient.convertToType(data['results'], [Member]);
      }
    }
    return obj;
  }

  exports.prototype = Object.create(BaseResponse.prototype);
  exports.prototype.constructor = exports;


  /**
   * @member {Array.<module:model/Member>} results
   */
  exports.prototype['results'] = undefined;




  return exports;
}));
