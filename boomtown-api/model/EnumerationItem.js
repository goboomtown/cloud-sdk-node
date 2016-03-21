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
    root.BoomtownApi.EnumerationItem = factory(root.BoomtownApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The EnumerationItem model module.
   * @module model/EnumerationItem
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>EnumerationItem</code>.
   * @alias module:model/EnumerationItem
   * @class
   */
  var exports = function() {


  };

  /**
   * Constructs a <code>EnumerationItem</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/EnumerationItem} obj Optional instance to populate.
   * @return {module:model/EnumerationItem} The populated <code>EnumerationItem</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('value')) {
        obj['value'] = ApiClient.convertToType(data['value'], 'String');
      }
    }
    return obj;
  }


  /**
   * @member {String} value
   */
  exports.prototype['value'] = undefined;




  return exports;
}));
