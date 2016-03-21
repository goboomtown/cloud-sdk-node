# BoomtownApi.ProvidersApi

All URIs are relative to *https://api.goboomtown.com/api/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getProvider**](ProvidersApi.md#getProvider) | **GET** /providers/get | Returns your Provider
[**getProviderMembers**](ProvidersApi.md#getProviderMembers) | **GET** /providers/members | Returns Merchants
[**getProviderTeam**](ProvidersApi.md#getProviderTeam) | **GET** /providers/teams/{provider_team_id} | Returns a ProviderTeam
[**getProviderTeams**](ProvidersApi.md#getProviderTeams) | **GET** /providers/teams | Returns your ProviderTeams


<a name="getProvider"></a>
# **getProvider**
> ProviderResponse getProvider

Returns your Provider

Returns your *Provider* record

### Example
```javascript
var BoomtownApi = require('boomtown-api');
var defaultClient = BoomtownApi.ApiClient.default;

// Configure API key authorization: X-Boomtown-Date
var X-Boomtown-Date = defaultClient.authentications['X-Boomtown-Date'];
X-Boomtown-Date.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//X-Boomtown-Date.apiKeyPrefix['X-Boomtown-Date'] = "Token"

// Configure API key authorization: X-Boomtown-Signature
var X-Boomtown-Signature = defaultClient.authentications['X-Boomtown-Signature'];
X-Boomtown-Signature.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//X-Boomtown-Signature.apiKeyPrefix['X-Boomtown-Signature'] = "Token"

// Configure API key authorization: X-Boomtown-Token
var X-Boomtown-Token = defaultClient.authentications['X-Boomtown-Token'];
X-Boomtown-Token.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//X-Boomtown-Token.apiKeyPrefix['X-Boomtown-Token'] = "Token"

var api = new BoomtownApi.ProvidersApi()

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.getProvider(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**ProviderResponse**](ProviderResponse.md)

### Authorization

[X-Boomtown-Date](../README.md#X-Boomtown-Date), [X-Boomtown-Signature](../README.md#X-Boomtown-Signature), [X-Boomtown-Token](../README.md#X-Boomtown-Token)

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getProviderMembers"></a>
# **getProviderMembers**
> MemberResponse getProviderMembers

Returns Merchants

Returns collection of related *Merchant* records

### Example
```javascript
var BoomtownApi = require('boomtown-api');
var defaultClient = BoomtownApi.ApiClient.default;

// Configure API key authorization: X-Boomtown-Date
var X-Boomtown-Date = defaultClient.authentications['X-Boomtown-Date'];
X-Boomtown-Date.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//X-Boomtown-Date.apiKeyPrefix['X-Boomtown-Date'] = "Token"

// Configure API key authorization: X-Boomtown-Signature
var X-Boomtown-Signature = defaultClient.authentications['X-Boomtown-Signature'];
X-Boomtown-Signature.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//X-Boomtown-Signature.apiKeyPrefix['X-Boomtown-Signature'] = "Token"

// Configure API key authorization: X-Boomtown-Token
var X-Boomtown-Token = defaultClient.authentications['X-Boomtown-Token'];
X-Boomtown-Token.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//X-Boomtown-Token.apiKeyPrefix['X-Boomtown-Token'] = "Token"

var api = new BoomtownApi.ProvidersApi()

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.getProviderMembers(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**MemberResponse**](MemberResponse.md)

### Authorization

[X-Boomtown-Date](../README.md#X-Boomtown-Date), [X-Boomtown-Signature](../README.md#X-Boomtown-Signature), [X-Boomtown-Token](../README.md#X-Boomtown-Token)

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getProviderTeam"></a>
# **getProviderTeam**
> ProviderTeamResponse getProviderTeam(providerTeamId)

Returns a ProviderTeam

Returns a *ProviderTeam* record

### Example
```javascript
var BoomtownApi = require('boomtown-api');
var defaultClient = BoomtownApi.ApiClient.default;

// Configure API key authorization: X-Boomtown-Date
var X-Boomtown-Date = defaultClient.authentications['X-Boomtown-Date'];
X-Boomtown-Date.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//X-Boomtown-Date.apiKeyPrefix['X-Boomtown-Date'] = "Token"

// Configure API key authorization: X-Boomtown-Signature
var X-Boomtown-Signature = defaultClient.authentications['X-Boomtown-Signature'];
X-Boomtown-Signature.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//X-Boomtown-Signature.apiKeyPrefix['X-Boomtown-Signature'] = "Token"

// Configure API key authorization: X-Boomtown-Token
var X-Boomtown-Token = defaultClient.authentications['X-Boomtown-Token'];
X-Boomtown-Token.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//X-Boomtown-Token.apiKeyPrefix['X-Boomtown-Token'] = "Token"

var api = new BoomtownApi.ProvidersApi()

var providerTeamId = "providerTeamId_example"; // {String} The primary key of the ProviderTeam


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.getProviderTeam(providerTeamId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **providerTeamId** | **String**| The primary key of the ProviderTeam | 

### Return type

[**ProviderTeamResponse**](ProviderTeamResponse.md)

### Authorization

[X-Boomtown-Date](../README.md#X-Boomtown-Date), [X-Boomtown-Signature](../README.md#X-Boomtown-Signature), [X-Boomtown-Token](../README.md#X-Boomtown-Token)

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getProviderTeams"></a>
# **getProviderTeams**
> ProviderTeamResponse getProviderTeams

Returns your ProviderTeams

Returns a collection of *ProviderTeam* records

### Example
```javascript
var BoomtownApi = require('boomtown-api');
var defaultClient = BoomtownApi.ApiClient.default;

// Configure API key authorization: X-Boomtown-Date
var X-Boomtown-Date = defaultClient.authentications['X-Boomtown-Date'];
X-Boomtown-Date.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//X-Boomtown-Date.apiKeyPrefix['X-Boomtown-Date'] = "Token"

// Configure API key authorization: X-Boomtown-Signature
var X-Boomtown-Signature = defaultClient.authentications['X-Boomtown-Signature'];
X-Boomtown-Signature.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//X-Boomtown-Signature.apiKeyPrefix['X-Boomtown-Signature'] = "Token"

// Configure API key authorization: X-Boomtown-Token
var X-Boomtown-Token = defaultClient.authentications['X-Boomtown-Token'];
X-Boomtown-Token.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//X-Boomtown-Token.apiKeyPrefix['X-Boomtown-Token'] = "Token"

var api = new BoomtownApi.ProvidersApi()

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.getProviderTeams(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**ProviderTeamResponse**](ProviderTeamResponse.md)

### Authorization

[X-Boomtown-Date](../README.md#X-Boomtown-Date), [X-Boomtown-Signature](../README.md#X-Boomtown-Signature), [X-Boomtown-Token](../README.md#X-Boomtown-Token)

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

