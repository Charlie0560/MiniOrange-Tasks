---
id: '40124933-cf40-48c9-90e9-d7a58b7f9a78'
title: 'Automate User Provisioning in Atlassian apps with miniOrange User Sync ⚙️ 👤'
description: 'Licensing has become a dicey subject and the budget pressure on companies is on an entirely different level. As your company grows, manually managing the entire Access Management is a hassle.'
metaTitle: 'Automate User Provisioning in Atlassian apps with miniOrange User Sync'
metaDescription: 'Licensing has become a dicey subject and the budget pressure on companies is on an entirely different level. As your company grows, manually managing the entire Access Management is a hassle.'
keywords: ''
mainButtonLink: ''
mainButtonText: ''
excerpt: 'Licensing has become a dicey subject and the budget pressure on companies is on an entirely different level. As your company grows, manually managing the entire Access Management is a hassle.'
thumbnail: '/blog/assets/2023/user-sync.webp'
createdOn: '2022-01-23'
updatedOn: '2022-01-23'
ogTitle: ''
ogDescription: ''
ogImage:
    url: ''
category: ['latest', 'atlassian']
tags:
    [
        'User Provisioning',
        'User sync',
        'User Directories',
        
    ]
---

## Automate User Provisioning in Atlassian apps with miniOrange User Sync ⚙️ 👤 {#Automate User Provisioning in Atlassian apps }

Licensing has become a dicey subject and the budget pressure on companies is on an entirely different level. As your company grows, manually managing the entire Access Management is a hassle. For every user or employee of the company that uses Jira, Confluence or Service Management, they must have the necessary access rights in order for them to work efficiently. 

&nbsp;&nbsp;

Your Organization can suffer from a series of difficulties with manual process:

1. **Poor Onboarding Experience:** as new employees join, they wait for their Jira, Confluence account while the IT team take time off their schedule

&nbsp;&nbsp;

2. **Time Constraints:** With constant changes in organizations like promotions, revamped job descriptions, gaining the right access for employees is a time taking process. Without automated processes to align permissions and application access, the time taken to bring in these changes can sink your productivity.

&nbsp;&nbsp;

3. **Higher licensing Costs and Security Risks:** According to estimates, **30% of all Atlassian user licenses are unused**. This happens because users that leave the organization or change roles don’t have their accounts deactivated in a timely manner. This can have negative consequences, like exceeding license limits leading to an **increase in licensing costs**. Retaining access from former employees – poses a major security concerns. This is a major concern for confidential information of your company.

&nbsp;&nbsp;

You need to constantly make sure that the product access is limited to those who still have a valid business purpose and they have access to only what they have to need. **Manually provisioning users/groups makes it absolutely intolerable and inefficient. This not only increases the workload but also means duplicate work for the administrator.**

With the help of user provisioning the user accounts are automatically created, given proper permissions, and maintained across all Atlassian applications. 

1. Keep your Atlassian instances 100% accurate with user provisioning so that all your Atlassian users are up to date and have access to what they need. [User provisioning].

2. Disable, deactivate or delete inactive users (user deprovisioning) automatically after x days. 

3. Manage group membership on the Central Identity Provider to make sure every user has the right permissions and see the right projects. 

At this point you must be wondering how I can automate User provisioning in Atlassian applications. 


### How to Automate User Provisioning in Atlassian Cloud {#How to Automate User Provisioning}

[MiniOrange User Provisioning](https://marketplace.atlassian.com/apps/1222000/mo-scim-provisioning-user-sync-group-sync-for-jira?hosting=cloud&tab=overview) automatically synchronizes changes made in your identity provider into the Atlassian apps and keeps your Atlassian cloud access always up to date. With miniOrange user sync you will be able to do the following and manage your users more effectively:

1. No prerequisites are required – Atlassian Access is not required. 

2. Streamline the process of adding, updating as well as managing their access for Atlassian apps [User Provisioning].

3. Whenever a user is deactivated in the identity provider, user Sync automatically deprovision/disable them in your Atlassian apps in the next sync and ultimately save licensing costs. [ User Deprovisioning].

### How to Automate User Provisioning in Atlassian Data Center {#How to Automate User Provisioning in Atlassian Data Center}

With the help of [miniOrange User Provisioning](https://marketplace.atlassian.com/search?query=miniOrange%20user%20sync), changes in your identity provider will be synchronized in Atlassian apps with one click. 


1. **Synchronize User Directories:** with user directories being synchronized, new users will automatically be added in the respective Atlassian applications. You can also schedule synchronization which provides proactive provisioning and de-provisioning of users and groups at regular intervals (sync).

2. **Default Group Mapping:** assign default groups in your Jira instance for each synced user and make sure that they are given the application access and not removed during a sync.

3.**Manual Group Mapping:** Assign permissions to users even if groups don’t match between IDP and Atlassian instance. 

4. Compatible with using [miniOrange SAML SSO](https://marketplace.atlassian.com/search?query=saml%20miniOrange) for authentication.


Additional functionalities provided in miniOrange User Provisioning

- Scheduled User Synchronization via API 
- Attribute Mapping 
- Username and Group Transformation 
- Supports SCIM 1.1 and SCIM 2.0 protocols
- Filter users by groups & filter groups to be assigned & removed  

### Conclusion: {#Conclusion}

Automating User Provisioning is not an option, it’s a must for any modern enterprise that takes security and usability seriously. It’s really easy to manage users automatically via our developed user provisioning add-ons which can be connected with your IDPs ([Azure AD](https://miniorange.com/atlassian/jira-scim-user-and-group-provisioning-for-azure-ad), [Okta](https://miniorange.com/atlassian/jira-scim-user-and-group-provisioning-for-okta), [OneLogin](https://miniorange.com/atlassian/jira-scim-user-and-group-provisioning-for-onelogin)) or any other SCIM compliance applications so when you setup your Jira Azure AD SCIM or Jira Okta SCIM, user sync plugin will make it a cakewalk for you.  

The add-on also works with [Single Sign On](https://marketplace.atlassian.com/search?query=miniOrange%20Single%20Sign%20On%20) where SSO is used for authentication and User sync application is used for automatic provisioning. You can also check out our other user Management add-ons on the Marketplace which helps removing unused licenses and ultimately save licensing costs for all your Atlassian instances.