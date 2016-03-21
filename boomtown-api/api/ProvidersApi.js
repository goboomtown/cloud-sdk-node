(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/ProviderResponse', '../model/Error', '../model/MemberResponse', '../model/ProviderTeamResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ProviderResponse'), require('../model/Error'), require('../model/MemberResponse'), require('../model/ProviderTeamResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.BoomtownApi) {
      root.BoomtownApi = {};
    }
    root.BoomtownApi.ProvidersApi = factory(root.BoomtownApi.ApiClient, root.BoomtownApi.ProviderResponse, root.BoomtownApi.Error, root.BoomtownApi.MemberResponse, root.BoomtownApi.ProviderTeamResponse);
  }
}(this, function(ApiClient, ProviderResponse, Error, MemberResponse, ProviderTeamResponse) {
  'use strict';

  /**
   * Providers service.
   * @module api/ProvidersApi
   * @version 1.0.0
   */

  /**
   * Constructs a new ProvidersApi. 
   * @alias module:api/ProvidersApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use, defaulting to {@link module:ApiClient#instance}
   * if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the getProvider operation.
     * @callback module:api/ProvidersApi~getProviderCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ProviderResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns your Provider
     * Returns your *Provider* record
     * @param {module:api/ProvidersApi~getProviderCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/ProviderResponse}
     */
    this.getProvider = function(callback) {
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
      var returnType = ProviderResponse;

      return this.apiClient.callApi(
        '/providers/get', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getProviderMembers operation.
     * @callback module:api/ProvidersApi~getProviderMembersCallback
     * @param {String} error Error message, if any.
     * @param {module:model/MemberResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns Merchants
     * Returns collection of related *Merchant* records
     * @param {module:api/ProvidersApi~getProviderMembersCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/MemberResponse}
     */
    this.getProviderMembers = function(callback) {
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
      var returnType = MemberResponse;

      return this.apiClient.callApi(
        '/providers/members', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getProviderTeam operation.
     * @callback module:api/ProvidersApi~getProviderTeamCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ProviderTeamResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns a ProviderTeam
     * Returns a *ProviderTeam* record
     * @param {String} providerTeamId The primary key of the ProviderTeam
     * @param {module:api/ProvidersApi~getProviderTeamCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/ProviderTeamResponse}
     */
    this.getProviderTeam = function(providerTeamId, callback) {
      var postBody = null;

      // verify the required parameter 'providerTeamId' is set
      if (providerTeamId == undefined || providerTeamId == null) {
        throw "Missing the required parameter 'providerTeamId' when calling getProviderTeam";
      }


      var pathParams = {
        'provider_team_id': providerTeamId
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
      var returnType = ProviderTeamResponse;

      return this.apiClient.callApi(
        '/providers/teams/{provider_team_id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getProviderTeams operation.
     * @callback module:api/ProvidersApi~getProviderTeamsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ProviderTeamResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns your ProviderTeams
     * Returns a collection of *ProviderTeam* records
     * @param {module:api/ProvidersApi~getProviderTeamsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/ProviderTeamResponse}
     */
    this.getProviderTeams = function(callback) {
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
      var returnType = ProviderTeamResponse;

      return this.apiClient.callApi(
        '/providers/teams', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
