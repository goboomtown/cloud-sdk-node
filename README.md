# Boomtown Cloud SDK for NODE (v1)

## Overview
This repository contains the open source NODE SDK that allows you to access the Cloud API from your NODE app.
Authentication uses a pre-shared key and secret, which is generated in our Admin Portal.

## Getting Started
To get started, clone this repository and add it to your NODE project
Run npm install

## API Key Generation
 - Log onto the Admin Portal (https://admin.goboomtown.com)
 - Click Providers in the left menu
 - Find your provider in the list
 - Double click your provider
 - Click API Settings, near the button of the configuration panel
 - Select Sandbox or Live, depending on the state of development
 - Click Re-Generate
 - Copy the access token and private-key, as provided in the pop-up dialog
 
## Documentation For Authorization
The Cloud API uses a keyed-HMAC (Hash Message Authentication Code) for authentication. To authenticate a request, your public (your token) & private (your secret) key are used to calculate the HMAC from a *"canonicalized resource"* based on specific elements of your request URL. Informally, we call this process "signing the request," and we call the output of the HMAC algorithm the signature.

#### **Note:**
- HMAC is based on SHA256 hashing.
- Each request will be valid for 10 seconds from when the request is signed.

#### The Canonicalized Resource Parts:
The "canonicalized resource" is comprised of the **PATH**, **QUERY** and a  **TIMESTAMP** in ISO-8601 form and will be constructed as follows in the order listed.

1. **PATH**: The URL without the hostname and **QUERY** - "/api/v2/issues"
2. **QUERY**: Anything after the **PATH**  - "?id=SOME_ID#FOO"
3. **TIMESTAMP** Date & Time in ISO8601 format - "2016-03-01T23:22:57+00:00"

###### Concatenating the **Canonicalized Resource** Parts:
- Resource Template = **PATH** + **QUERY** + : + **TIMESTAMP**
- Resource (With Query) = "/api/v2/issues?id=SOME_ID#FOO:2016-03-01T23:22:57+00:00"
- Resource (Without Query) = "/api/v2/issues:2016-03-01T23:22:57+00:00"

###### X-Boomtown-Date
- **Type**: API key 
- **API key parameter name**: X-Boomtown-Date
- **Location**: HTTP header
- **Description**: Will contain the current date+time in ISO8601 format

###### X-Boomtown-Token
- **Type**: API key 
- **API key parameter name**: X-Boomtown-Token
- **Location**: HTTP header
- **Description**:  Will contain your token/public key

###### X-Boomtown-Signature
- **Type**: API key 
- **API key parameter name**: X-Boomtown-Signature
- **Location**: HTTP header
- **Description**: Will contain the signature generated from the **Canonicalized Resource**

## Usage

```javascript
var BoomtownApi = require('./boomtown-api');

/**
 * Initialize the ApiClient
 * You will need to use your Cloud API credentials
 * @type {BoomtownApi.ApiClient}
 */
BoomtownApi.ApiClient.instance.setApiToken("YOUR_BOOMTOWN_TOKEN");
BoomtownApi.ApiClient.instance.setApiSecret("YOUR_BOOMTOWN_SECRET");


/**
 * Instantiate the ProvidersApi
 * Let's get started by requesting some basic data.
 * **NOTE** Successful response results will always be an array of 0 or more objects
 * @type {BoomtownApi.ProvidersApi}
 */
var providerApi = new BoomtownApi.ProvidersApi();

/**
 * GET your Provider profile
 */
providerApi.getProvider(function(err, data) {
    if (err) {
        console.error(err);
    } else {
        console.log(data.results[0]);
    }
});

/**
 * GET your default ProviderTeam
 */
providerApi.getProvider(function(err, data) {
    if (err) {
        console.error(err);
        return;
    }

    var provider = data.results[0];
    providerApi.getProviderTeam(provider.default_partners_teams_id, function(err, data){
        if (err) {
            console.error(err);
        } else {
            console.log(data.results[0]);
        }
    });
});

/**
 * GET a collection of your ProviderTeams
 */
providerApi.getProviderTeams(function(err, data){
    if (err) {
        console.error(err);
    } else {
        console.log(data.results);
    }
});

/**
 * GET a collection of your Merchants
 */
providerApi.getProviderMembers(function(err, data){
    if (err) {
        console.error(err);
    } else {
        console.log(data.results);
    }
});


/**
 * Working with Merchant Issues
 */
var issuesApi = new BoomtownApi.IssuesApi();

/**
 * GET a collection of all of the Issues you are managing
 * @param {Object}  opts Optional parameters
 * @param {Integer} opts.limit Pagination result limit (defaults to 10)
 * @param {Integer} opts.start Pagination starting result number (defaults to 0)
 * @param {String}  opts.membersId Optionally limit result to this {members_id}
 * @param {String}  opts.membersUsersId Optionally limit result to this {members_users_id}
 * @param {String}  opts.membersLocationsId Optionally limit result to this {members_locations_id}
 */
var options = {
    start: 0,                   /* Defaults to 0*/
    limit: 10,                  /* Defaults to 10*/
    membersId: null,            /* Optional parameter*/
    membersUsersId: null,       /* Optional parameter*/
    membersLocationsId: null    /* Optional parameter*/
};
issuesApi.getIssues(options, function(err, data){
    if (err) {
        console.error(err);
    } else {
        console.log(data.results);
    }
});


/**
 * Lets grab the an Issue and do a few things with it
 */
issuesApi.getIssues(options, function(err, data){
    if (err) {
        console.error(err);
    } else {
        var issue = data.results[0];
        /**
         * Lets log a note against this Issue
         * @param {String} issueId The primary key of the related *Issue*
         * @param {String} notes Notes to log against the *Issue*
         */
        issuesApi.createIssueLog(issue.id, "Hi, this is a note", function(err, data){
            if (err) {
                console.error(err);
            } else {
                console.log("Log created", data);
            }
        });

        /**
         * Lets advance the Issues status to "Resolved"
         * @Returns Empty response with 2XX status or an Exception
         */
        issuesApi.resolveIssue(issue.id, function(err){
            if (err) {
                console.error(err);
            } else {
                console.log("Issue Resolved");
            }
        });

        /**
         * Finally lets cancel the Issue
         * @Returns Empty response with 2XX status or an Exception
         */
        issuesApi.cancelIssue(issue.id, function(err){
            if (err) {
                console.error(err);
            } else {
                console.log("Issue Canceled");
            }
        });
    }
});


/**
 * Creating a new Merchant and creating a new Issue for them
 */
var merchantApi = new BoomtownApi.MerchantsApi();

/**
 * First Lets create a new Merchant,
 * we will simultaneously create a user and a location.
 * We will need the following models
 * MemberCreateRequest  - This is what we will ultimately POST
 * Merchant             - The top level model to which the user and location will be associated
 * MerchantUser         - The use who will belong to the new Merchant
 * MerchantLocation     - Where in the world is this user located
 */
var user     = new BoomtownApi.MemberUser();
var merchant = new BoomtownApi.Member();
var location = new BoomtownApi.MemberLocation();

merchant.name       = "A Mango Merchant";
merchant.name_legal = "A Mango Merchant Inc.";
merchant.email      = "info@aMerchant.com";
merchant.phone      = "1 (555) 555-5555";
merchant.street_1   = "123 Sky Lane";
merchant.street_2   = "";
merchant.city       = "San Francisco";
merchant.state      = "CA";
merchant.zipcode    = "94101";

user.first_name     = "Bob";
user.last_name      = "Mango";
user.email          = "bmango@aMerchant.com";
user.sms_number     = "1 (999) 999-9999";

location.site_name  = "A Mango Merchant";
location.city       = "San Francisco";
location.state      = "CA";
location.zipcode    = "94101";
location.street_1   = "The Mango Lofts";
location.street_2   = "#1337";

/**
 * Creates a new Merchant
 * Creates a *Merchant* and optionally *MerchantLocation* and *MerchantUser*
 * @param {module:model/MemberCreateRequest} body The *Merchant* to create
 */
var merchantCreate = new BoomtownApi.MemberCreateRequest(merchant, user, location);
merchantApi.createMember(merchantCreate, function(err, data){
    if (err) {
        console.error(err);
    } else {
        console.info(data);
        var user     = data.results.member_user;
        var merchant = data.results.member;
        var location = data.results.member_location;

        var issue = new BoomtownApi.Issue();
        issue.members_id            = merchant.id;
        issue.members_users_id      = user.id;
        issue.members_locations_id  = location.id;
        issue.details               = "We would like to get WiFi installed here.";
        issuesApi.createIssue(issue, function(err, data){
            if (err) {
                console.error(err);
            } else {
                console.info(data);
            }
        })
    }
});
```


## Documentation for API Endpoints

All URIs are relative to *https://api.goboomtown.com/api/v2*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*BoomtownApi.IssuesApi* | [**cancelIssue**](docs/IssuesApi.md#cancelIssue) | **POST** /issues/cancel/{issue_id} | Set a Issue to a cancelled status
*BoomtownApi.IssuesApi* | [**createIssue**](docs/IssuesApi.md#createIssue) | **POST** /issues/create | Creates a new Issue
*BoomtownApi.IssuesApi* | [**createIssueLog**](docs/IssuesApi.md#createIssueLog) | **POST** /issues/log/create/{issue_id} | Add a log to a Issue
*BoomtownApi.IssuesApi* | [**getIssue**](docs/IssuesApi.md#getIssue) | **GET** /issues/get/{issue_id} | Returns a Issue
*BoomtownApi.IssuesApi* | [**getIssueLogs**](docs/IssuesApi.md#getIssueLogs) | **GET** /issues/log/history/{issue_id} | Returns a collection of IssueLogs
*BoomtownApi.IssuesApi* | [**getIssueMetaCategories**](docs/IssuesApi.md#getIssueMetaCategories) | **GET** /issues/meta/categories | Returns collection of categories
*BoomtownApi.IssuesApi* | [**getIssueMetaResolutions**](docs/IssuesApi.md#getIssueMetaResolutions) | **GET** /issues/meta/resolutions | Returns collection of resolutions
*BoomtownApi.IssuesApi* | [**getIssueMetaStatuses**](docs/IssuesApi.md#getIssueMetaStatuses) | **GET** /issues/meta/statuses | Returns collection of statuses
*BoomtownApi.IssuesApi* | [**getIssueMetaTypes**](docs/IssuesApi.md#getIssueMetaTypes) | **GET** /issues/meta/types | Returns collection of types
*BoomtownApi.IssuesApi* | [**getIssueStatusHistory**](docs/IssuesApi.md#getIssueStatusHistory) | **GET** /issues/status/history/{issue_id} | Returns a collection of IssueStatuses
*BoomtownApi.IssuesApi* | [**getIssues**](docs/IssuesApi.md#getIssues) | **GET** /issues/get | Returns a collection of Issues
*BoomtownApi.IssuesApi* | [**resolveIssue**](docs/IssuesApi.md#resolveIssue) | **POST** /issues/resolve/{issue_id} | Set a Issue to a resolved status
*BoomtownApi.MerchantsApi* | [**createMember**](docs/MerchantsApi.md#createMember) | **POST** /members/create | Creates a new Merchant
*BoomtownApi.MerchantsApi* | [**getMember**](docs/MerchantsApi.md#getMember) | **GET** /members/get/{member_id} | Returns a Merchant
*BoomtownApi.MerchantsApi* | [**getMemberLocationUsers**](docs/MerchantsApi.md#getMemberLocationUsers) | **GET** /members/location/users/{member_id} | Returns a collection of MerchantUsers
*BoomtownApi.MerchantsApi* | [**getMemberLocations**](docs/MerchantsApi.md#getMemberLocations) | **GET** /members/location/get/{member_id} | Returns a collection of MerchantLocations
*BoomtownApi.MerchantsApi* | [**getMemberMetaIndustries**](docs/MerchantsApi.md#getMemberMetaIndustries) | **GET** /members/meta/industries | Returns collection of industries
*BoomtownApi.MerchantsApi* | [**getMemberMetaStatuses**](docs/MerchantsApi.md#getMemberMetaStatuses) | **GET** /members/meta/statuses | Returns collection of statuses
*BoomtownApi.MerchantsApi* | [**getMemberUsers**](docs/MerchantsApi.md#getMemberUsers) | **GET** /members/user/get/{member_id} | Returnsa a collection of MerchantUsers
*BoomtownApi.ProvidersApi* | [**getProvider**](docs/ProvidersApi.md#getProvider) | **GET** /providers/get | Returns your Provider
*BoomtownApi.ProvidersApi* | [**getProviderMembers**](docs/ProvidersApi.md#getProviderMembers) | **GET** /providers/members | Returns Merchants
*BoomtownApi.ProvidersApi* | [**getProviderTeam**](docs/ProvidersApi.md#getProviderTeam) | **GET** /providers/teams/{provider_team_id} | Returns a ProviderTeam
*BoomtownApi.ProvidersApi* | [**getProviderTeams**](docs/ProvidersApi.md#getProviderTeams) | **GET** /providers/teams | Returns your ProviderTeams


## Documentation for Models

 - [BoomtownApi.BaseResponse](docs/BaseResponse.md)
 - [BoomtownApi.EnumerationItem](docs/EnumerationItem.md)
 - [BoomtownApi.EnumerationItemResponse](docs/EnumerationItemResponse.md)
 - [BoomtownApi.Error](docs/Error.md)
 - [BoomtownApi.Issue](docs/Issue.md)
 - [BoomtownApi.IssueLog](docs/IssueLog.md)
 - [BoomtownApi.IssueLogsResponse](docs/IssueLogsResponse.md)
 - [BoomtownApi.IssueResponse](docs/IssueResponse.md)
 - [BoomtownApi.IssueStatus](docs/IssueStatus.md)
 - [BoomtownApi.IssueStatusesResponse](docs/IssueStatusesResponse.md)
 - [BoomtownApi.Member](docs/Member.md)
 - [BoomtownApi.MemberCreateRequest](docs/MemberCreateRequest.md)
 - [BoomtownApi.MemberCreateResponse](docs/MemberCreateResponse.md)
 - [BoomtownApi.MemberLocation](docs/MemberLocation.md)
 - [BoomtownApi.MemberLocationResponse](docs/MemberLocationResponse.md)
 - [BoomtownApi.MemberResponse](docs/MemberResponse.md)
 - [BoomtownApi.MemberTuple](docs/MemberTuple.md)
 - [BoomtownApi.MemberUser](docs/MemberUser.md)
 - [BoomtownApi.MemberUserResponse](docs/MemberUserResponse.md)
 - [BoomtownApi.Provider](docs/Provider.md)
 - [BoomtownApi.ProviderResponse](docs/ProviderResponse.md)
 - [BoomtownApi.ProviderTeam](docs/ProviderTeam.md)
 - [BoomtownApi.ProviderTeamResponse](docs/ProviderTeamResponse.md)


Cloud API documentation available at: [http://developers.goboomtown.com/](http://developers.goboomtown.com/)