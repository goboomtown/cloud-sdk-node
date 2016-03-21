(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/MemberCreateResponse', '../model/Error', '../model/MemberCreateRequest', '../model/MemberResponse', '../model/MemberUserResponse', '../model/MemberLocationResponse', '../model/EnumerationItemResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/MemberCreateResponse'), require('../model/Error'), require('../model/MemberCreateRequest'), require('../model/MemberResponse'), require('../model/MemberUserResponse'), require('../model/MemberLocationResponse'), require('../model/EnumerationItemResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.BoomtownApi) {
      root.BoomtownApi = {};
    }
    root.BoomtownApi.MerchantsApi = factory(root.BoomtownApi.ApiClient, root.BoomtownApi.MemberCreateResponse, root.BoomtownApi.Error, root.BoomtownApi.MemberCreateRequest, root.BoomtownApi.MemberResponse, root.BoomtownApi.MemberUserResponse, root.BoomtownApi.MemberLocationResponse, root.BoomtownApi.EnumerationItemResponse);
  }
}(this, function(ApiClient, MemberCreateResponse, Error, MemberCreateRequest, MemberResponse, MemberUserResponse, MemberLocationResponse, EnumerationItemResponse) {
  'use strict';

  /**
   * Merchants service.
   * @module api/MerchantsApi
   * @version 1.0.0
   */

  /**
   * Constructs a new MerchantsApi. 
   * @alias module:api/MerchantsApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use, defaulting to {@link module:ApiClient#instance}
   * if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the createMember operation.
     * @callback module:api/MerchantsApi~createMemberCallback
     * @param {String} error Error message, if any.
     * @param {module:model/MemberCreateResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Creates a new Merchant
     * Creates a *Merchant* and optionally *MerchantLocation* and *MerchantUser*
     * @param {module:model/MemberCreateRequest} body The *Merchant* to create
     * @param {module:api/MerchantsApi~createMemberCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/MemberCreateResponse}
     */
    this.createMember = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw "Missing the required parameter 'body' when calling createMember";
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['X-Boomtown-Date', 'X-Boomtown-Signature', 'X-Boomtown-Token'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = MemberCreateResponse;

      return this.apiClient.callApi(
        '/members/create', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getMember operation.
     * @callback module:api/MerchantsApi~getMemberCallback
     * @param {String} error Error message, if any.
     * @param {module:model/MemberResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns a Merchant
     * Returns a *Merchant* ≈
     * @param {String} memberId The primary key of the *Merchant*
     * @param {module:api/MerchantsApi~getMemberCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/MemberResponse}
     */
    this.getMember = function(memberId, callback) {
      var postBody = null;

      // verify the required parameter 'memberId' is set
      if (memberId == undefined || memberId == null) {
        throw "Missing the required parameter 'memberId' when calling getMember";
      }


      var pathParams = {
        'member_id': memberId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['X-Boomtown-Date', 'X-Boomtown-Signature', 'X-Boomtown-Token'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = MemberResponse;

      return this.apiClient.callApi(
        '/members/get/{member_id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getMemberLocationUsers operation.
     * @callback module:api/MerchantsApi~getMemberLocationUsersCallback
     * @param {String} error Error message, if any.
     * @param {module:model/MemberUserResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns a collection of MerchantUsers
     * Returns a collection of *MerchantUsers* belonging to a *MerchantLocation*
     * @param {String} memberId The primary key of the *Merchant*
     * @param {module:api/MerchantsApi~getMemberLocationUsersCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/MemberUserResponse}
     */
    this.getMemberLocationUsers = function(memberId, callback) {
      var postBody = null;

      // verify the required parameter 'memberId' is set
      if (memberId == undefined || memberId == null) {
        throw "Missing the required parameter 'memberId' when calling getMemberLocationUsers";
      }


      var pathParams = {
        'member_id': memberId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['X-Boomtown-Date', 'X-Boomtown-Signature', 'X-Boomtown-Token'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = MemberUserResponse;

      return this.apiClient.callApi(
        '/members/location/users/{member_id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getMemberLocations operation.
     * @callback module:api/MerchantsApi~getMemberLocationsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/MemberLocationResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns a collection of MerchantLocations
     * Returns a collection of *MerchantLocation* records belonging to a *Merchant*
     * @param {String} memberId The primary key of the *Merchant*
     * @param {Object} opts Optional parameters
     * @param {String} opts.membersLocationsId An optional members_locations_id to filter the results with
     * @param {module:api/MerchantsApi~getMemberLocationsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/MemberLocationResponse}
     */
    this.getMemberLocations = function(memberId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'memberId' is set
      if (memberId == undefined || memberId == null) {
        throw "Missing the required parameter 'memberId' when calling getMemberLocations";
      }


      var pathParams = {
        'member_id': memberId
      };
      var queryParams = {
        'members_locations_id': opts['membersLocationsId']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['X-Boomtown-Date', 'X-Boomtown-Signature', 'X-Boomtown-Token'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = MemberLocationResponse;

      return this.apiClient.callApi(
        '/members/location/get/{member_id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getMemberMetaIndustries operation.
     * @callback module:api/MerchantsApi~getMemberMetaIndustriesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/EnumerationItemResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns collection of industries
     * Returns the industries available for a *Merchant*
     * @param {module:api/MerchantsApi~getMemberMetaIndustriesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/EnumerationItemResponse}
     */
    this.getMemberMetaIndustries = function(callback) {
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['X-Boomtown-Date', 'X-Boomtown-Signature', 'X-Boomtown-Token'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = EnumerationItemResponse;

      return this.apiClient.callApi(
        '/members/meta/industries', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getMemberMetaStatuses operation.
     * @callback module:api/MerchantsApi~getMemberMetaStatusesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/EnumerationItemResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns collection of statuses
     * Returns the statuses available for a *Merchant* or *MerchantUsers*
     * @param {module:api/MerchantsApi~getMemberMetaStatusesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/EnumerationItemResponse}
     */
    this.getMemberMetaStatuses = function(callback) {
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['X-Boomtown-Date', 'X-Boomtown-Signature', 'X-Boomtown-Token'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = EnumerationItemResponse;

      return this.apiClient.callApi(
        '/members/meta/statuses', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getMemberUsers operation.
     * @callback module:api/MerchantsApi~getMemberUsersCallback
     * @param {String} error Error message, if any.
     * @param {module:model/MemberUserResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returnsa a collection of MerchantUsers
     * Returns a collection of *MerchantUser* records belonging to a *Merchant*
     * @param {String} memberId The id of the *Merchant*
     * @param {Object} opts Optional parameters
     * @param {String} opts.userId Optional user_id to filter the results with
     * @param {module:api/MerchantsApi~getMemberUsersCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/MemberUserResponse}
     */
    this.getMemberUsers = function(memberId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'memberId' is set
      if (memberId == undefined || memberId == null) {
        throw "Missing the required parameter 'memberId' when calling getMemberUsers";
      }


      var pathParams = {
        'member_id': memberId
      };
      var queryParams = {
        'user_id': opts['userId']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['X-Boomtown-Date', 'X-Boomtown-Signature', 'X-Boomtown-Token'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = MemberUserResponse;

      return this.apiClient.callApi(
        '/members/user/get/{member_id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
