(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './BaseResponse', './MemberUser'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./BaseResponse'), require('./MemberUser'));
  } else {
    // Browser globals (root is window)
    if (!root.BoomtownApi) {
      root.BoomtownApi = {};
    }
    root.BoomtownApi.MemberUserResponse = factory(root.BoomtownApi.ApiClient, root.BoomtownApi.BaseResponse, root.BoomtownApi.MemberUser);
  }
}(this, function(ApiClient, BaseResponse, MemberUser) {
  'use strict';

  /**
   * The MemberUserResponse model module.
   * @module model/MemberUserResponse
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>MemberUserResponse</code>.
   * @alias module:model/MemberUserResponse
   * @class
   * @extends module:model/BaseResponse
   */
  var exports = function() {
    BaseResponse.call(this);

  };

  /**
   * Constructs a <code>MemberUserResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MemberUserResponse} obj Optional instance to populate.
   * @return {module:model/MemberUserResponse} The populated <code>MemberUserResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();
      BaseResponse.constructFromObject(data, obj);
      if (data.hasOwnProperty('results')) {
        obj['results'] = ApiClient.convertToType(data['results'], [MemberUser]);
      }
    }
    return obj;
  }

  exports.prototype = Object.create(BaseResponse.prototype);
  exports.prototype.constructor = exports;


  /**
   * @member {Array.<module:model/MemberUser>} results
   */
  exports.prototype['results'] = undefined;




  return exports;
}));
