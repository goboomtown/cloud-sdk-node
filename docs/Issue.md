# BoomtownApi.Issue

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | Primary key. | [optional] 
**referenceNum** | **String** | Reference number. | [optional] 
**membersId** | **String** | The primary key of the related *Merchant*. | 
**membersName** | **String** |  | [optional] 
**membersEmail** | **String** |  | [optional] 
**membersLocationsId** | **String** | The primary key of the related *MerchantLocation*. | 
**membersLocationsName** | **String** |  | [optional] 
**membersUsersId** | **String** | The primary key of the related *MerchantUser*. | 
**membersUsersName** | **String** |  | [optional] 
**membersUsersEmail** | **String** |  | [optional] 
**type** | **String** | Type. | [optional] 
**category** | **String** | Category. | [optional] 
**details** | **String** | Details. | [optional] 
**status** | **String** | Status. | [optional] 
**job** | **String** | Job type. | [optional] 
**resolution** | **String** | Resolution type. | [optional] 
**created** | **Date** | Date created. | [optional] 
**updated** | **Date** | Date last updated. | [optional] 
**enrouteTime** | **Date** | Actual technician travel time. | [optional] 
**scheduledTime** | **Date** | Date/time scheduled. | [optional] 
**arrivalTime** | **Date** | Technician arrival time. | [optional] 
**departureTime** | **Date** | Technician departure time. | [optional] 


