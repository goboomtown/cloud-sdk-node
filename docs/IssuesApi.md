# BoomtownApi.IssuesApi

All URIs are relative to *https://api.goboomtown.com/api/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**cancelIssue**](IssuesApi.md#cancelIssue) | **POST** /issues/cancel/{issue_id} | Set a Issue to a cancelled status
[**createIssue**](IssuesApi.md#createIssue) | **POST** /issues/create | Creates a new Issue
[**createIssueLog**](IssuesApi.md#createIssueLog) | **POST** /issues/log/create/{issue_id} | Add a log to a Issue
[**getIssue**](IssuesApi.md#getIssue) | **GET** /issues/get/{issue_id} | Returns a Issue
[**getIssueLogs**](IssuesApi.md#getIssueLogs) | **GET** /issues/log/history/{issue_id} | Returns a collection of IssueLogs
[**getIssueMetaCategories**](IssuesApi.md#getIssueMetaCategories) | **GET** /issues/meta/categories | Returns collection of categories
[**getIssueMetaResolutions**](IssuesApi.md#getIssueMetaResolutions) | **GET** /issues/meta/resolutions | Returns collection of resolutions
[**getIssueMetaStatuses**](IssuesApi.md#getIssueMetaStatuses) | **GET** /issues/meta/statuses | Returns collection of statuses
[**getIssueMetaTypes**](IssuesApi.md#getIssueMetaTypes) | **GET** /issues/meta/types | Returns collection of types
[**getIssueStatusHistory**](IssuesApi.md#getIssueStatusHistory) | **GET** /issues/status/history/{issue_id} | Returns a collection of IssueStatuses
[**getIssues**](IssuesApi.md#getIssues) | **GET** /issues/get | Returns a collection of Issues
[**resolveIssue**](IssuesApi.md#resolveIssue) | **POST** /issues/resolve/{issue_id} | Set a Issue to a resolved status


<a name="cancelIssue"></a>
# **cancelIssue**
> cancelIssue(issueId)

Set a Issue to a cancelled status

Closes a *Issue* with a cancelled status

### Example
```javascript
var BoomtownApi = require('boomtown-api');
/**
 * Initialize the ApiClient
 * You will need to use your Cloud API credentials
 * @type {BoomtownApi.ApiClient}
 */
BoomtownApi.ApiClient.instance.setApiToken("YOUR_BOOMTOWN_TOKEN");
BoomtownApi.ApiClient.instance.setApiSecret("YOUR_BOOMTOWN_SECRET");

var api = new BoomtownApi.IssuesApi()

var issueId = "issueId_example"; // {String} The primary key of the *Issue* to cancel.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
api.cancelIssue(issueId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **issueId** | **String**| The primary key of the *Issue* to cancel. | 

### Return type

null (empty response body)

### Authorization

[X-Boomtown-Date](../README.md#X-Boomtown-Date), [X-Boomtown-Signature](../README.md#X-Boomtown-Signature), [X-Boomtown-Token](../README.md#X-Boomtown-Token)

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createIssue"></a>
# **createIssue**
> IssueResponse createIssue(opts)

Creates a new Issue

Creates a new *Issue*

### Example
```javascript
var BoomtownApi = require('boomtown-api');
/**
 * Initialize the ApiClient
 * You will need to use your Cloud API credentials
 * @type {BoomtownApi.ApiClient}
 */
BoomtownApi.ApiClient.instance.setApiToken("YOUR_BOOMTOWN_TOKEN");
BoomtownApi.ApiClient.instance.setApiSecret("YOUR_BOOMTOWN_SECRET");

var api = new BoomtownApi.IssuesApi()

var opts = { 
  'issues': new BoomtownApi.Issue() // {Issue} Issue to create
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.createIssue(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **issues** | [**Issue**](Issue.md)| Issue to create | [optional] 

### Return type

[**IssueResponse**](IssueResponse.md)

### Authorization

[X-Boomtown-Date](../README.md#X-Boomtown-Date), [X-Boomtown-Signature](../README.md#X-Boomtown-Signature), [X-Boomtown-Token](../README.md#X-Boomtown-Token)

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createIssueLog"></a>
# **createIssueLog**
> IssueLogsResponse createIssueLog(issueId, notes)

Add a log to a Issue

Logs notes to an *Issue*

### Example
```javascript
var BoomtownApi = require('boomtown-api');
/**
 * Initialize the ApiClient
 * You will need to use your Cloud API credentials
 * @type {BoomtownApi.ApiClient}
 */
BoomtownApi.ApiClient.instance.setApiToken("YOUR_BOOMTOWN_TOKEN");
BoomtownApi.ApiClient.instance.setApiSecret("YOUR_BOOMTOWN_SECRET");

var api = new BoomtownApi.IssuesApi()

var issueId = "issueId_example"; // {String} The primary key of the related *Issue*

var notes = "notes_example"; // {String} Notes to log against the *Issue*


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.createIssueLog(issueId, notes, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **issueId** | **String**| The primary key of the related *Issue* | 
 **notes** | **String**| Notes to log against the *Issue* | 

### Return type

[**IssueLogsResponse**](IssueLogsResponse.md)

### Authorization

[X-Boomtown-Date](../README.md#X-Boomtown-Date), [X-Boomtown-Signature](../README.md#X-Boomtown-Signature), [X-Boomtown-Token](../README.md#X-Boomtown-Token)

### HTTP reuqest headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json

<a name="getIssue"></a>
# **getIssue**
> IssueResponse getIssue(issueId)

Returns a Issue

Returns a *Issue* record

### Example
```javascript
var BoomtownApi = require('boomtown-api');
/**
 * Initialize the ApiClient
 * You will need to use your Cloud API credentials
 * @type {BoomtownApi.ApiClient}
 */
BoomtownApi.ApiClient.instance.setApiToken("YOUR_BOOMTOWN_TOKEN");
BoomtownApi.ApiClient.instance.setApiSecret("YOUR_BOOMTOWN_SECRET");

var api = new BoomtownApi.IssuesApi()

var issueId = "issueId_example"; // {String} The primary key of the *Issue*


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.getIssue(issueId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **issueId** | **String**| The primary key of the *Issue* | 

### Return type

[**IssueResponse**](IssueResponse.md)

### Authorization

[X-Boomtown-Date](../README.md#X-Boomtown-Date), [X-Boomtown-Signature](../README.md#X-Boomtown-Signature), [X-Boomtown-Token](../README.md#X-Boomtown-Token)

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getIssueLogs"></a>
# **getIssueLogs**
> IssueLogsResponse getIssueLogs(issueId)

Returns a collection of IssueLogs

Returns a collection of *IssueLog* records

### Example
```javascript
var BoomtownApi = require('boomtown-api');
/**
 * Initialize the ApiClient
 * You will need to use your Cloud API credentials
 * @type {BoomtownApi.ApiClient}
 */
BoomtownApi.ApiClient.instance.setApiToken("YOUR_BOOMTOWN_TOKEN");
BoomtownApi.ApiClient.instance.setApiSecret("YOUR_BOOMTOWN_SECRET");

var api = new BoomtownApi.IssuesApi()

var issueId = "issueId_example"; // {String} The primary key of the *Issue*


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.getIssueLogs(issueId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **issueId** | **String**| The primary key of the *Issue* | 

### Return type

[**IssueLogsResponse**](IssueLogsResponse.md)

### Authorization

[X-Boomtown-Date](../README.md#X-Boomtown-Date), [X-Boomtown-Signature](../README.md#X-Boomtown-Signature), [X-Boomtown-Token](../README.md#X-Boomtown-Token)

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getIssueMetaCategories"></a>
# **getIssueMetaCategories**
> EnumerationItemResponse getIssueMetaCategories

Returns collection of categories

Returns the categories available for an *Issue*

### Example
```javascript
var BoomtownApi = require('boomtown-api');
/**
 * Initialize the ApiClient
 * You will need to use your Cloud API credentials
 * @type {BoomtownApi.ApiClient}
 */
BoomtownApi.ApiClient.instance.setApiToken("YOUR_BOOMTOWN_TOKEN");
BoomtownApi.ApiClient.instance.setApiSecret("YOUR_BOOMTOWN_SECRET");

var api = new BoomtownApi.IssuesApi()

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.getIssueMetaCategories(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**EnumerationItemResponse**](EnumerationItemResponse.md)

### Authorization

[X-Boomtown-Date](../README.md#X-Boomtown-Date), [X-Boomtown-Signature](../README.md#X-Boomtown-Signature), [X-Boomtown-Token](../README.md#X-Boomtown-Token)

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getIssueMetaResolutions"></a>
# **getIssueMetaResolutions**
> EnumerationItemResponse getIssueMetaResolutions

Returns collection of resolutions

Returns the resolutions available for an *Issue*

### Example
```javascript
var BoomtownApi = require('boomtown-api');
/**
 * Initialize the ApiClient
 * You will need to use your Cloud API credentials
 * @type {BoomtownApi.ApiClient}
 */
BoomtownApi.ApiClient.instance.setApiToken("YOUR_BOOMTOWN_TOKEN");
BoomtownApi.ApiClient.instance.setApiSecret("YOUR_BOOMTOWN_SECRET");

var api = new BoomtownApi.IssuesApi()

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.getIssueMetaResolutions(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**EnumerationItemResponse**](EnumerationItemResponse.md)

### Authorization

[X-Boomtown-Date](../README.md#X-Boomtown-Date), [X-Boomtown-Signature](../README.md#X-Boomtown-Signature), [X-Boomtown-Token](../README.md#X-Boomtown-Token)

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getIssueMetaStatuses"></a>
# **getIssueMetaStatuses**
> EnumerationItemResponse getIssueMetaStatuses

Returns collection of statuses

Returns the statuses available for an *Issue*

### Example
```javascript
var BoomtownApi = require('boomtown-api');
/**
 * Initialize the ApiClient
 * You will need to use your Cloud API credentials
 * @type {BoomtownApi.ApiClient}
 */
BoomtownApi.ApiClient.instance.setApiToken("YOUR_BOOMTOWN_TOKEN");
BoomtownApi.ApiClient.instance.setApiSecret("YOUR_BOOMTOWN_SECRET");

var api = new BoomtownApi.IssuesApi()

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.getIssueMetaStatuses(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**EnumerationItemResponse**](EnumerationItemResponse.md)

### Authorization

[X-Boomtown-Date](../README.md#X-Boomtown-Date), [X-Boomtown-Signature](../README.md#X-Boomtown-Signature), [X-Boomtown-Token](../README.md#X-Boomtown-Token)

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getIssueMetaTypes"></a>
# **getIssueMetaTypes**
> EnumerationItemResponse getIssueMetaTypes

Returns collection of types

Returns the types available for an *Issue*

### Example
```javascript
var BoomtownApi = require('boomtown-api');
/**
 * Initialize the ApiClient
 * You will need to use your Cloud API credentials
 * @type {BoomtownApi.ApiClient}
 */
BoomtownApi.ApiClient.instance.setApiToken("YOUR_BOOMTOWN_TOKEN");
BoomtownApi.ApiClient.instance.setApiSecret("YOUR_BOOMTOWN_SECRET");

var api = new BoomtownApi.IssuesApi()

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.getIssueMetaTypes(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**EnumerationItemResponse**](EnumerationItemResponse.md)

### Authorization

[X-Boomtown-Date](../README.md#X-Boomtown-Date), [X-Boomtown-Signature](../README.md#X-Boomtown-Signature), [X-Boomtown-Token](../README.md#X-Boomtown-Token)

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getIssueStatusHistory"></a>
# **getIssueStatusHistory**
> IssueStatusesResponse getIssueStatusHistory(issueId)

Returns a collection of IssueStatuses

Returns a collection of *IssueStatuse* records

### Example
```javascript
var BoomtownApi = require('boomtown-api');
/**
 * Initialize the ApiClient
 * You will need to use your Cloud API credentials
 * @type {BoomtownApi.ApiClient}
 */
BoomtownApi.ApiClient.instance.setApiToken("YOUR_BOOMTOWN_TOKEN");
BoomtownApi.ApiClient.instance.setApiSecret("YOUR_BOOMTOWN_SECRET");

var api = new BoomtownApi.IssuesApi()

var issueId = "issueId_example"; // {String} The primary key of the *Issue*


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.getIssueStatusHistory(issueId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **issueId** | **String**| The primary key of the *Issue* | 

### Return type

[**IssueStatusesResponse**](IssueStatusesResponse.md)

### Authorization

[X-Boomtown-Date](../README.md#X-Boomtown-Date), [X-Boomtown-Signature](../README.md#X-Boomtown-Signature), [X-Boomtown-Token](../README.md#X-Boomtown-Token)

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getIssues"></a>
# **getIssues**
> IssueResponse getIssues(opts)

Returns a collection of Issues

Returns a collection of *Issue* records

### Example
```javascript
var BoomtownApi = require('boomtown-api');
/**
 * Initialize the ApiClient
 * You will need to use your Cloud API credentials
 * @type {BoomtownApi.ApiClient}
 */
BoomtownApi.ApiClient.instance.setApiToken("YOUR_BOOMTOWN_TOKEN");
BoomtownApi.ApiClient.instance.setApiSecret("YOUR_BOOMTOWN_SECRET");

var api = new BoomtownApi.IssuesApi()

var opts = { 
  'limit': 56, // {Integer} Pagination result limit (defaults to 10)
  'start': 56, // {Integer} Pagination starting result number (defaults to 0)
  'membersId': "membersId_example", // {String} Optionally limit result to this {members_id}
  'membersUsersId': "membersUsersId_example", // {String} Optionally limit result to this {members_users_id}
  'membersLocationsId': "membersLocationsId_example" // {String} Optionally limit result to this {members_locations_id}
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.getIssues(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | [**Integer**](.md)| Pagination result limit (defaults to 10) | [optional] 
 **start** | [**Integer**](.md)| Pagination starting result number (defaults to 0) | [optional] 
 **membersId** | **String**| Optionally limit result to this {members_id} | [optional] 
 **membersUsersId** | **String**| Optionally limit result to this {members_users_id} | [optional] 
 **membersLocationsId** | **String**| Optionally limit result to this {members_locations_id} | [optional] 

### Return type

[**IssueResponse**](IssueResponse.md)

### Authorization

[X-Boomtown-Date](../README.md#X-Boomtown-Date), [X-Boomtown-Signature](../README.md#X-Boomtown-Signature), [X-Boomtown-Token](../README.md#X-Boomtown-Token)

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="resolveIssue"></a>
# **resolveIssue**
> resolveIssue(issueId)

Set a Issue to a resolved status

Closes a *Issue* with a resolved status

### Example
```javascript
var BoomtownApi = require('boomtown-api');
/**
 * Initialize the ApiClient
 * You will need to use your Cloud API credentials
 * @type {BoomtownApi.ApiClient}
 */
BoomtownApi.ApiClient.instance.setApiToken("YOUR_BOOMTOWN_TOKEN");
BoomtownApi.ApiClient.instance.setApiSecret("YOUR_BOOMTOWN_SECRET");

var api = new BoomtownApi.IssuesApi()

var issueId = "issueId_example"; // {String} The primary key of the *Issue* to resolve.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
api.resolveIssue(issueId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **issueId** | **String**| The primary key of the *Issue* to resolve. | 

### Return type

null (empty response body)

### Authorization

[X-Boomtown-Date](../README.md#X-Boomtown-Date), [X-Boomtown-Signature](../README.md#X-Boomtown-Signature), [X-Boomtown-Token](../README.md#X-Boomtown-Token)

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

