# BoomtownApi.MerchantsApi

All URIs are relative to *https://api.goboomtown.com/api/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createMember**](MerchantsApi.md#createMember) | **POST** /members/create | Creates a new Merchant
[**getMember**](MerchantsApi.md#getMember) | **GET** /members/get/{member_id} | Returns a Merchant
[**getMemberLocationUsers**](MerchantsApi.md#getMemberLocationUsers) | **GET** /members/location/users/{member_id} | Returns a collection of MerchantUsers
[**getMemberLocations**](MerchantsApi.md#getMemberLocations) | **GET** /members/location/get/{member_id} | Returns a collection of MerchantLocations
[**getMemberMetaIndustries**](MerchantsApi.md#getMemberMetaIndustries) | **GET** /members/meta/industries | Returns collection of industries
[**getMemberMetaStatuses**](MerchantsApi.md#getMemberMetaStatuses) | **GET** /members/meta/statuses | Returns collection of statuses
[**getMemberUsers**](MerchantsApi.md#getMemberUsers) | **GET** /members/user/get/{member_id} | Returnsa a collection of MerchantUsers


<a name="createMember"></a>
# **createMember**
> MemberCreateResponse createMember(body)

Creates a new Merchant

Creates a *Merchant* and optionally *MerchantLocation* and *MerchantUser*

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

var api = new BoomtownApi.MerchantsApi()

var body = new BoomtownApi.MemberCreateRequest(); // {MemberCreateRequest} The *Merchant* to create


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.createMember(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**MemberCreateRequest**](MemberCreateRequest.md)| The *Merchant* to create | 

### Return type

[**MemberCreateResponse**](MemberCreateResponse.md)

### Authorization

[X-Boomtown-Date](../README.md#X-Boomtown-Date), [X-Boomtown-Signature](../README.md#X-Boomtown-Signature), [X-Boomtown-Token](../README.md#X-Boomtown-Token)

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getMember"></a>
# **getMember**
> MemberResponse getMember(memberId)

Returns a Merchant

Returns a *Merchant* ≈

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

var api = new BoomtownApi.MerchantsApi()

var memberId = "memberId_example"; // {String} The primary key of the *Merchant*


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.getMember(memberId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **memberId** | **String**| The primary key of the *Merchant* | 

### Return type

[**MemberResponse**](MemberResponse.md)

### Authorization

[X-Boomtown-Date](../README.md#X-Boomtown-Date), [X-Boomtown-Signature](../README.md#X-Boomtown-Signature), [X-Boomtown-Token](../README.md#X-Boomtown-Token)

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getMemberLocationUsers"></a>
# **getMemberLocationUsers**
> MemberUserResponse getMemberLocationUsers(memberId)

Returns a collection of MerchantUsers

Returns a collection of *MerchantUsers* belonging to a *MerchantLocation*

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

var api = new BoomtownApi.MerchantsApi()

var memberId = "memberId_example"; // {String} The primary key of the *Merchant*


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.getMemberLocationUsers(memberId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **memberId** | **String**| The primary key of the *Merchant* | 

### Return type

[**MemberUserResponse**](MemberUserResponse.md)

### Authorization

[X-Boomtown-Date](../README.md#X-Boomtown-Date), [X-Boomtown-Signature](../README.md#X-Boomtown-Signature), [X-Boomtown-Token](../README.md#X-Boomtown-Token)

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getMemberLocations"></a>
# **getMemberLocations**
> MemberLocationResponse getMemberLocations(memberId, opts)

Returns a collection of MerchantLocations

Returns a collection of *MerchantLocation* records belonging to a *Merchant*

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

var api = new BoomtownApi.MerchantsApi()

var memberId = "memberId_example"; // {String} The primary key of the *Merchant*

var opts = { 
  'membersLocationsId': "membersLocationsId_example" // {String} An optional members_locations_id to filter the results with
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.getMemberLocations(memberId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **memberId** | **String**| The primary key of the *Merchant* | 
 **membersLocationsId** | **String**| An optional members_locations_id to filter the results with | [optional] 

### Return type

[**MemberLocationResponse**](MemberLocationResponse.md)

### Authorization

[X-Boomtown-Date](../README.md#X-Boomtown-Date), [X-Boomtown-Signature](../README.md#X-Boomtown-Signature), [X-Boomtown-Token](../README.md#X-Boomtown-Token)

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getMemberMetaIndustries"></a>
# **getMemberMetaIndustries**
> EnumerationItemResponse getMemberMetaIndustries

Returns collection of industries

Returns the industries available for a *Merchant*

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

var api = new BoomtownApi.MerchantsApi()

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.getMemberMetaIndustries(callback);
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

<a name="getMemberMetaStatuses"></a>
# **getMemberMetaStatuses**
> EnumerationItemResponse getMemberMetaStatuses

Returns collection of statuses

Returns the statuses available for a *Merchant* or *MerchantUsers*

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

var api = new BoomtownApi.MerchantsApi()

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.getMemberMetaStatuses(callback);
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

<a name="getMemberUsers"></a>
# **getMemberUsers**
> MemberUserResponse getMemberUsers(memberId, opts)

Returnsa a collection of MerchantUsers

Returns a collection of *MerchantUser* records belonging to a *Merchant*

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

var api = new BoomtownApi.MerchantsApi()

var memberId = "memberId_example"; // {String} The id of the *Merchant*

var opts = { 
  'userId': "userId_example" // {String} Optional user_id to filter the results with
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.getMemberUsers(memberId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **memberId** | **String**| The id of the *Merchant* | 
 **userId** | **String**| Optional user_id to filter the results with | [optional] 

### Return type

[**MemberUserResponse**](MemberUserResponse.md)

### Authorization

[X-Boomtown-Date](../README.md#X-Boomtown-Date), [X-Boomtown-Signature](../README.md#X-Boomtown-Signature), [X-Boomtown-Token](../README.md#X-Boomtown-Token)

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

