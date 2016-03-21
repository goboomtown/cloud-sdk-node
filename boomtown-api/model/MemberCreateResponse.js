(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './BaseResponse', './MemberTuple'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./BaseResponse'), require('./MemberTuple'));
  } else {
    // Browser globals (root is window)
    if (!root.BoomtownApi) {
      root.BoomtownApi = {};
    }
    root.BoomtownApi.MemberCreateResponse = factory(root.BoomtownApi.ApiClient, root.BoomtownApi.BaseResponse, root.BoomtownApi.MemberTuple);
  }
}(this, function(ApiClient, BaseResponse, MemberTuple) {
  'use strict';

  /**
   * The MemberCreateResponse model module.
   * @module model/MemberCreateResponse
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>MemberCreateResponse</code>.
   * @alias module:model/MemberCreateResponse
   * @class
   * @extends module:model/BaseResponse
   */
  var exports = function() {
    BaseResponse.call(this);

  };

  /**
   * Constructs a <code>MemberCreateResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MemberCreateResponse} obj Optional instance to populate.
   * @return {module:model/MemberCreateResponse} The populated <code>MemberCreateResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();
      BaseResponse.constructFromObject(data, obj);
      if (data.hasOwnProperty('results')) {
        obj['results'] = MemberTuple.constructFromObject(data['results']);
      }
    }
    return obj;
  }

  exports.prototype = Object.create(BaseResponse.prototype);
  exports.prototype.constructor = exports;


  /**
   * @member {module:model/MemberTuple} results
   */
  exports.prototype['results'] = undefined;




  return exports;
}));
