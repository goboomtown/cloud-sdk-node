(function(factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['./ApiClient', './model/BaseResponse', './model/EnumerationItem',
      './model/EnumerationItemResponse', './model/Error', './model/Issue', './model/IssueLog',
      './model/IssueLogsResponse', './model/IssueResponse', './model/IssueStatus',
      './model/IssueStatusesResponse', './model/Member', './model/MemberCreateRequest',
      './model/MemberCreateResponse', './model/MemberLocation', './model/MemberLocationResponse',
      './model/MemberResponse', './model/MemberTuple', './model/MemberUser', './model/MemberUserResponse',
      './model/Provider', './model/ProviderResponse', './model/ProviderTeam', './model/ProviderTeamResponse',
      './api/IssuesApi', './api/MerchantsApi', './api/ProvidersApi'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(
        require('./ApiClient'),
        require('./model/BaseResponse'),
        require('./model/EnumerationItem'),
        require('./model/EnumerationItemResponse'),
        require('./model/Error'),
        require('./model/Issue'),
        require('./model/IssueLog'),
        require('./model/IssueLogsResponse'),
        require('./model/IssueResponse'),
        require('./model/IssueStatus'),
        require('./model/IssueStatusesResponse'),
        require('./model/Member'),
        require('./model/MemberCreateRequest'),
        require('./model/MemberCreateResponse'),
        require('./model/MemberLocation'),
        require('./model/MemberLocationResponse'),
        require('./model/MemberResponse'),
        require('./model/MemberTuple'),
        require('./model/MemberUser'),
        require('./model/MemberUserResponse'),
        require('./model/Provider'),
        require('./model/ProviderResponse'),
        require('./model/ProviderTeam'),
        require('./model/ProviderTeamResponse'),
        require('./api/IssuesApi'),
        require('./api/MerchantsApi'),
        require('./api/ProvidersApi'));
  }
}(function(ApiClient, BaseResponse, EnumerationItem, EnumerationItemResponse,
           Error, Issue, IssueLog, IssueLogsResponse, IssueResponse, IssueStatus,
           IssueStatusesResponse, Member, MemberCreateRequest, MemberCreateResponse,
           MemberLocation, MemberLocationResponse, MemberResponse, MemberTuple, MemberUser,
           MemberUserResponse, Provider, ProviderResponse, ProviderTeam, ProviderTeamResponse,
           IssuesApi, MerchantsApi, ProvidersApi) {
  'use strict';

  /**
   * Boomtown API.<br>
   * The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
   * <p>
   * An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
   * <pre>
   * var BoomtownApi = require('./index'); // See note below*.
   * var xxxSvc = new BoomtownApi.XxxApi(); // Allocate the API class we're going to use.
   * var yyyModel = new BoomtownApi.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * <em>*NOTE: For a top-level AMD script, use require(['./index'], function(){...}) and put the application logic within the
   * callback function.</em>
   * </p>
   * <p>
   * A non-AMD browser application (discouraged) might do something like this:
   * <pre>
   * var xxxSvc = new BoomtownApi.XxxApi(); // Allocate the API class we're going to use.
   * var yyy = new BoomtownApi.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * </p>
   * @module index
   * @version 1.0.0
   */
  var exports = {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient: ApiClient,
    /**
     * The BaseResponse model constructor.
     * @property {module:model/BaseResponse}
     */
    BaseResponse: BaseResponse,
    /**
     * The EnumerationItem model constructor.
     * @property {module:model/EnumerationItem}
     */
    EnumerationItem: EnumerationItem,
    /**
     * The EnumerationItemResponse model constructor.
     * @property {module:model/EnumerationItemResponse}
     */
    EnumerationItemResponse: EnumerationItemResponse,
    /**
     * The Error model constructor.
     * @property {module:model/Error}
     */
    Error: Error,
    /**
     * The Issue model constructor.
     * @property {module:model/Issue}
     */
    Issue: Issue,
    /**
     * The IssueLog model constructor.
     * @property {module:model/IssueLog}
     */
    IssueLog: IssueLog,
    /**
     * The IssueLogsResponse model constructor.
     * @property {module:model/IssueLogsResponse}
     */
    IssueLogsResponse: IssueLogsResponse,
    /**
     * The IssueResponse model constructor.
     * @property {module:model/IssueResponse}
     */
    IssueResponse: IssueResponse,
    /**
     * The IssueStatus model constructor.
     * @property {module:model/IssueStatus}
     */
    IssueStatus: IssueStatus,
    /**
     * The IssueStatusesResponse model constructor.
     * @property {module:model/IssueStatusesResponse}
     */
    IssueStatusesResponse: IssueStatusesResponse,
    /**
     * The Member model constructor.
     * @property {module:model/Member}
     */
    Member: Member,
    /**
     * The MemberCreateRequest model constructor.
     * @property {module:model/MemberCreateRequest}
     */
    MemberCreateRequest: MemberCreateRequest,
    /**
     * The MemberCreateResponse model constructor.
     * @property {module:model/MemberCreateResponse}
     */
    MemberCreateResponse: MemberCreateResponse,
    /**
     * The MemberLocation model constructor.
     * @property {module:model/MemberLocation}
     */
    MemberLocation: MemberLocation,
    /**
     * The MemberLocationResponse model constructor.
     * @property {module:model/MemberLocationResponse}
     */
    MemberLocationResponse: MemberLocationResponse,
    /**
     * The MemberResponse model constructor.
     * @property {module:model/MemberResponse}
     */
    MemberResponse: MemberResponse,
    /**
     * The MemberTuple model constructor.
     * @property {module:model/MemberTuple}
     */
    MemberTuple: MemberTuple,
    /**
     * The MemberUser model constructor.
     * @property {module:model/MemberUser}
     */
    MemberUser: MemberUser,
    /**
     * The MemberUserResponse model constructor.
     * @property {module:model/MemberUserResponse}
     */
    MemberUserResponse: MemberUserResponse,
    /**
     * The Provider model constructor.
     * @property {module:model/Provider}
     */
    Provider: Provider,
    /**
     * The ProviderResponse model constructor.
     * @property {module:model/ProviderResponse}
     */
    ProviderResponse: ProviderResponse,
    /**
     * The ProviderTeam model constructor.
     * @property {module:model/ProviderTeam}
     */
    ProviderTeam: ProviderTeam,
    /**
     * The ProviderTeamResponse model constructor.
     * @property {module:model/ProviderTeamResponse}
     */
    ProviderTeamResponse: ProviderTeamResponse,
    /**
     * The IssuesApi service constructor.
     * @property {module:api/IssuesApi}
     */
    IssuesApi: IssuesApi,
    /**
     * The MerchantsApi service constructor.
     * @property {module:api/MerchantsApi}
     */
    MerchantsApi: MerchantsApi,
    /**
     * The ProvidersApi service constructor.
     * @property {module:api/ProvidersApi}
     */
    ProvidersApi: ProvidersApi
  };

  return exports;
}));
