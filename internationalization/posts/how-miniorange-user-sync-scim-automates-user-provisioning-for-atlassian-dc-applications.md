---
id: 'a0631a4d-c784-441c-bc74-acb3dcd3a442'
title: 'How miniOrange User Sync/SCIM Automates User Provisioning for Atlassian DC applications'
description: 'Managing users in Atlassian manually, especially in situations with large numbers of users, is time-consuming and prone to human error. With employees joining various departments and projects on a regular basis, a lot of time is spent on managing users with the access they need which can lead to users being provisioned incorrectly.'
metaTitle: 'How miniOrange User Sync/SCIM Automates User Provisioning for Atlassian DC applications'
metaDescription: 'Managing users in Atlassian manually, especially in situations with large numbers of users, is time-consuming and prone to human error. With employees joining various departments and projects on a regular basis, a lot of time is spent on managing users with the access they need which can lead to users being provisioned incorrectly.'
keywords: ''
mainButtonLink: 'https://miniorange.atlassian.net/servicedesk/customer/portal/2/group/6/create/66'
mainButtonText: ''
excerpt: 'Managing users in Atlassian manually, especially in situations with large numbers of users, is time-consuming and prone to human error. With employees joining various departments and projects on a regular basis, a lot of time is spent on managing users with the access they need which can lead to users being provisioned incorrectly.'
thumbnail: '/blog/assets/2023/user-sync-scim-automate.webp'
createdOn: '2023-05-04'
updatedOn: '2023-05-04'
ogTitle: ''
ogDescription: ''
ogImage:
    url: ''
category: ['solution', 'atlassian']
tags:
    [
        'Provisioning', 
        'SCIM', 
        'User Sync', 
        'user-management',
	'crowd',
    ]
---

## How miniOrange User Sync/SCIM Automates User Provisioning for Atlassian DC applications {#how-miniorange-user-sync-automates-user-provisioning-for-atlassian-dc-applications}

Managing users in Atlassian manually, especially in situations with large numbers of users, is time-consuming and prone to human error. With employees joining various departments and projects on a regular basis, a lot of time is spent on managing users with the access they need which can lead to users being provisioned incorrectly.

[miniOrange User Provisioning](https://marketplace.atlassian.com/search?query=miniOrange%20User%20Sync) for Atlassian applications comes packed with a variety of powerful features. With the miniOrange User Provisioning app, employee/user accounts can be created, updated, deleted, and given proper access across multiple applications at the same time. The procedure of adding, updating, and deleting users, as well as managing their access, is automated. 

&nbsp;

![user-sync-scim](/blog/assets/2023/user-sync-scim-automate.webp)


When it comes to Atlassian products such as Jira, Confluence, and Bitbucket you can use Just-in-time provisioning provided with the Single Sign-On functionality of Atlassian Data Center. The native SSO functionality of Atlassian allows you to update the users and their groups at the time of SSO login. **However, for most enterprises, this does not fulfill the overall requirement.** 

Atlassian SSO updates users and groups only at the time of SSO (Just in Time Provisioning). 

&nbsp;
 

Most Atlassian customers implementing SAML use the attributes sent in the SAML response to provision users just-in-time. 

 &nbsp;

Using Just In Time (JIT) Provisioning, you receive all group and user information from your Identity Provider. JIT provisioning will remove any existing Jira or Confluence groups that are not in the SSO response. Managing a few groups within Jira or Confluence will never work in this scenario. **If you are manually managing some groups, that will not work with Atlassian SSO. This is one of the shortcomings of Atlassian’s provisioning model and may not be an ideal solution for Enterprises.**

&nbsp;

In this article, we will go over the top provisioning features that you won’t find in Atlassian’s inbuilt User Provisioning in Data Center – but you will find in miniOrange’s User Provisioning App. 

&nbsp;

Let’s see what the miniOrange User Provisioning app offers along with Just-in-time provisioning:
 
- **Real-time provisioning**– your user and group information will get automatically updated every time the user’s data is updated in the Identity Provider. 

- **Sync the User from a particular group or an application** – You can sync users from a particular group or application if you do not want all your users synchronized. Members from only that group will be synchronized. 

- **User Deactivation/Delete from Jira/Confluence** - According to some estimates, approximately 30% of all Atlassian user licenses are unused. This happens because users that leave the organization or change roles don’t have their accounts deactivated in a timely manner. Atlassian users whose accounts haven’t been deactivated can have negative consequences, like exceeding license limits leading to an increase in licensing costs and retaining access from former employees – posing major security concerns.

&nbsp;&nbsp;

**Just-in-Time provisioning cannot be used to deactivate the user since the SSO process involves active user accounts.** You can manually remove the user from the Jira group but it will still consume the licenses. 

With the help of our User Provisioning Add-on, you can **automatically deactivate and delete multiple users** from specific groups. Users can be automatically deleted based on their status in the directory. 

- **Synchronization of User Directories:** the miniOrange User Sync plugin can synchronize entire directories with the help of Real-time provisioning. When user directories are synchronized, new users will automatically be added in the respective Atlassian applications. With User Directory Synchronization you can also sync IDP-specific directories. You can also schedule synchronization which provides proactive provisioning and de-provisioning of users and groups at regular intervals (sync).

- **User name and Group transformation –** Native SSO provisioning requires you to provision the user with the same username as IDP. However, with username transformations, you can associate the provisioning of users with different values. Filtering groups will help you to manage access and permissions within Jira or Confluence easily.

Apart from this, the [miniOrange User Provisioning](https://marketplace.atlassian.com/search?query=miniOrange%20User%20Sync) App offers a wide range of features focusing on provisioning users from your IDP directory into Atlassian Applications. Below is the detailed comparison of the [miniOrange User Provisioning app](https://marketplace.atlassian.com/search?query=miniOrange%20User%20Sync) with native Atlassian. 

### miniOrange User provisioning Features {#miniorange-user-provisioning-features}

1. Supports SCIM 2.0 and SCIM 1.1 protocol	
2. On- the fly group mapping
3. Manual Group Mapping	
4. Default Group Mapping
5. Sync History
6. Provision to map groups from IdP to local groups

**Ready for the action? Install User Sync today!**

 &nbsp;&nbsp;

It’s really easy to manage users via our developed user provisioning add-ons which can be connected with your IDPs ([Azure AD](https://www.miniorange.com/atlassian/jira-scim-user-and-group-provisioning-for-azure-ad), [Okta](https://www.miniorange.com/atlassian/jira-scim-user-and-group-provisioning-for-okta), [OneLogin](https://www.miniorange.com/atlassian/jira-scim-user-and-group-provisioning-for-onelogin), [G suite](https://www.miniorange.com/atlassian/user-and-group-sync-user-provisioning-g-suite/), [Keycloak](https://www.miniorange.com/atlassian/user-and-group-sync-for-keycloak)) or any other SCIM compliance applications so when you setup your Jira Azure AD SCIM or Jira Okta SCIM, user sync plugin will make it a cakewalk for you. Follow the guide to quickly set it up for the Data Center version.

 &nbsp;&nbsp;
 
The add-on also works with [Single Sign On](https://marketplace.atlassian.com/search?query=miniOrange%20Single%20Sign%20On%20) where SSO is used for authentication and User sync application is used for automatic provisioning.


&nbsp;&nbsp;


Contact Us – Drop us a mail at **info@xecurify.com** or [raise a ticket here](https://miniorange.atlassian.net/servicedesk/customer/portal/2) to talk to us.



