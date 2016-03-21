(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/Error', '../model/IssueResponse', '../model/Issue', '../model/IssueLogsResponse', '../model/EnumerationItemResponse', '../model/IssueStatusesResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Error'), require('../model/IssueResponse'), require('../model/Issue'), require('../model/IssueLogsResponse'), require('../model/EnumerationItemResponse'), require('../model/IssueStatusesResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.BoomtownApi) {
      root.BoomtownApi = {};
    }
    root.BoomtownApi.IssuesApi = factory(root.BoomtownApi.ApiClient, root.BoomtownApi.Error, root.BoomtownApi.IssueResponse, root.BoomtownApi.Issue, root.BoomtownApi.IssueLogsResponse, root.BoomtownApi.EnumerationItemResponse, root.BoomtownApi.IssueStatusesResponse);
  }
}(this, function(ApiClient, Error, IssueResponse, Issue, IssueLogsResponse, EnumerationItemResponse, IssueStatusesResponse) {
  'use strict';

  /**
   * Issues service.
   * @module api/IssuesApi
   * @version 1.0.0
   */

  /**
   * Constructs a new IssuesApi. 
   * @alias module:api/IssuesApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use, defaulting to {@link module:ApiClient#instance}
   * if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the cancelIssue operation.
     * @callback module:api/IssuesApi~cancelIssueCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Set a Issue to a cancelled status
     * Closes a *Issue* with a cancelled status
     * @param {String} issueId The primary key of the *Issue* to cancel.
     * @param {module:api/IssuesApi~cancelIssueCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.cancelIssue = function(issueId, callback) {
      var postBody = null;

      // verify the required parameter 'issueId' is set
      if (issueId == undefined || issueId == null) {
        throw "Missing the required parameter 'issueId' when calling cancelIssue";
      }


      var pathParams = {
        'issue_id': issueId
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
      var returnType = null;

      return this.apiClient.callApi(
        '/issues/cancel/{issue_id}', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the createIssue operation.
     * @callback module:api/IssuesApi~createIssueCallback
     * @param {String} error Error message, if any.
     * @param {module:model/IssueResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Creates a new Issue
     * Creates a new *Issue*
     * @param {Object} opts Optional parameters
     * @param {module:model/Issue} Issue to create
     * @param {module:api/IssuesApi~createIssueCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/IssueResponse}
     */
    this.createIssue = function(opts, callback) {
      opts = opts || {};
      var postBody = {issues: opts};


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
      var returnType = IssueResponse;

      return this.apiClient.callApi(
        '/issues/create', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the createIssueLog operation.
     * @callback module:api/IssuesApi~createIssueLogCallback
     * @param {String} error Error message, if any.
     * @param {module:model/IssueLogsResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add a log to a Issue
     * Logs notes to an *Issue*
     * @param {String} issueId The primary key of the related *Issue*
     * @param {String} notes Notes to log against the *Issue*
     * @param {module:api/IssuesApi~createIssueLogCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/IssueLogsResponse}
     */
    this.createIssueLog = function(issueId, notes, callback) {
      var postBody = null;

      // verify the required parameter 'issueId' is set
      if (issueId == undefined || issueId == null) {
        throw "Missing the required parameter 'issueId' when calling createIssueLog";
      }

      // verify the required parameter 'notes' is set
      if (notes == undefined || notes == null) {
        throw "Missing the required parameter 'notes' when calling createIssueLog";
      }


      var pathParams = {
        'issue_id': issueId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
        'notes': notes
      };

      var authNames = ['X-Boomtown-Date', 'X-Boomtown-Signature', 'X-Boomtown-Token'];
      var contentTypes = ['application/x-www-form-urlencoded'];
      var accepts = ['application/json'];
      var returnType = IssueLogsResponse;

      return this.apiClient.callApi(
        '/issues/log/create/{issue_id}', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getIssue operation.
     * @callback module:api/IssuesApi~getIssueCallback
     * @param {String} error Error message, if any.
     * @param {module:model/IssueResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns a Issue
     * Returns a *Issue* record
     * @param {String} issueId The primary key of the *Issue*
     * @param {module:api/IssuesApi~getIssueCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/IssueResponse}
     */
    this.getIssue = function(issueId, callback) {
      var postBody = null;

      // verify the required parameter 'issueId' is set
      if (issueId == undefined || issueId == null) {
        throw "Missing the required parameter 'issueId' when calling getIssue";
      }


      var pathParams = {
        'issue_id': issueId
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
      var returnType = IssueResponse;

      return this.apiClient.callApi(
        '/issues/get/{issue_id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getIssueLogs operation.
     * @callback module:api/IssuesApi~getIssueLogsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/IssueLogsResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns a collection of IssueLogs
     * Returns a collection of *IssueLog* records
     * @param {String} issueId The primary key of the *Issue*
     * @param {module:api/IssuesApi~getIssueLogsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/IssueLogsResponse}
     */
    this.getIssueLogs = function(issueId, callback) {
      var postBody = null;

      // verify the required parameter 'issueId' is set
      if (issueId == undefined || issueId == null) {
        throw "Missing the required parameter 'issueId' when calling getIssueLogs";
      }


      var pathParams = {
        'issue_id': issueId
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
      var returnType = IssueLogsResponse;

      return this.apiClient.callApi(
        '/issues/log/history/{issue_id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getIssueMetaCategories operation.
     * @callback module:api/IssuesApi~getIssueMetaCategoriesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/EnumerationItemResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns collection of categories
     * Returns the categories available for an *Issue*
     * @param {module:api/IssuesApi~getIssueMetaCategoriesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/EnumerationItemResponse}
     */
    this.getIssueMetaCategories = function(callback) {
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
        '/issues/meta/categories', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getIssueMetaResolutions operation.
     * @callback module:api/IssuesApi~getIssueMetaResolutionsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/EnumerationItemResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns collection of resolutions
     * Returns the resolutions available for an *Issue*
     * @param {module:api/IssuesApi~getIssueMetaResolutionsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/EnumerationItemResponse}
     */
    this.getIssueMetaResolutions = function(callback) {
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
        '/issues/meta/resolutions', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getIssueMetaStatuses operation.
     * @callback module:api/IssuesApi~getIssueMetaStatusesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/EnumerationItemResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns collection of statuses
     * Returns the statuses available for an *Issue*
     * @param {module:api/IssuesApi~getIssueMetaStatusesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/EnumerationItemResponse}
     */
    this.getIssueMetaStatuses = function(callback) {
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
        '/issues/meta/statuses', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getIssueMetaTypes operation.
     * @callback module:api/IssuesApi~getIssueMetaTypesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/EnumerationItemResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns collection of types
     * Returns the types available for an *Issue*
     * @param {module:api/IssuesApi~getIssueMetaTypesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/EnumerationItemResponse}
     */
    this.getIssueMetaTypes = function(callback) {
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
        '/issues/meta/types', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getIssueStatusHistory operation.
     * @callback module:api/IssuesApi~getIssueStatusHistoryCallback
     * @param {String} error Error message, if any.
     * @param {module:model/IssueStatusesResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns a collection of IssueStatuses
     * Returns a collection of *IssueStatuse* records
     * @param {String} issueId The primary key of the *Issue*
     * @param {module:api/IssuesApi~getIssueStatusHistoryCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/IssueStatusesResponse}
     */
    this.getIssueStatusHistory = function(issueId, callback) {
      var postBody = null;

      // verify the required parameter 'issueId' is set
      if (issueId == undefined || issueId == null) {
        throw "Missing the required parameter 'issueId' when calling getIssueStatusHistory";
      }


      var pathParams = {
        'issue_id': issueId
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
      var returnType = IssueStatusesResponse;

      return this.apiClient.callApi(
        '/issues/status/history/{issue_id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getIssues operation.
     * @callback module:api/IssuesApi~getIssuesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/IssueResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns a collection of Issues
     * Returns a collection of *Issue* records
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.limit Pagination result limit (defaults to 10)
     * @param {Integer} opts.start Pagination starting result number (defaults to 0)
     * @param {String} opts.membersId Optionally limit result to this {members_id}
     * @param {String} opts.membersUsersId Optionally limit result to this {members_users_id}
     * @param {String} opts.membersLocationsId Optionally limit result to this {members_locations_id}
     * @param {module:api/IssuesApi~getIssuesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/IssueResponse}
     */
    this.getIssues = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'limit': opts['limit'] || 10,
        'start': opts['start'] || 0,
        'members_id': opts['membersId'],
        'members_users_id': opts['membersUsersId'],
        'members_locations_id': opts['membersLocationsId']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['X-Boomtown-Date', 'X-Boomtown-Signature', 'X-Boomtown-Token'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = IssueResponse;

      return this.apiClient.callApi(
        '/issues/get', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the resolveIssue operation.
     * @callback module:api/IssuesApi~resolveIssueCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Set a Issue to a resolved status
     * Closes a *Issue* with a resolved status
     * @param {String} issueId The primary key of the *Issue* to resolve.
     * @param {module:api/IssuesApi~resolveIssueCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.resolveIssue = function(issueId, callback) {
      var postBody = null;

      // verify the required parameter 'issueId' is set
      if (issueId == undefined || issueId == null) {
        throw "Missing the required parameter 'issueId' when calling resolveIssue";
      }


      var pathParams = {
        'issue_id': issueId
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
      var returnType = null;

      return this.apiClient.callApi(
        '/issues/resolve/{issue_id}', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
