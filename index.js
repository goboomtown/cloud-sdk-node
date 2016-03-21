// Public Key: 9F202C37C7249940386F
// Private Key: 5b5577a123f1c1d7fa71edf4092430a4d79da959

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