---
id: '7cf97308-a266-4f51-8c52-de5b630ef822'
title: 'How miniOrange SCIM Simplifies Centralized IDP User Management in Atlassian Apps'
description: "SCIM an acronym for ‘System for Cross-domain Identity Management’ is a protocol that allows for automated provisioning and de-provisioning of user accounts between different systems. Our app allows seamless login into the Jira, Confluence, Bitbucket, Crowd and other Atlassian."
metaTitle: 'How miniOrange SCIM Simplifies Centralized IDP User Management in Atlassian Apps'
metaDescription: 'Automate User Account Management with SCIM Protocol - Seamlessly Access Jira, Confluence, Bitbucket, and More Atlassian Tools.'
keywords: ''
mainButtonLink: 'https://miniorange.atlassian.net/servicedesk/customer/portal/2/group/6/create/66'
mainButtonText: ''
excerpt: "SCIM an acronym for ‘System for Cross-domain Identity Management’ is a protocol that allows for automated provisioning and de-provisioning of user accounts between different systems. Our app allows seamless login into the Jira, Confluence, Bitbucket, Crowd and other Atlassian."
thumbnail: '/blog/assets/2023/miniorange-scim-for-atlassian-apps.webp'
createdOn: '2022-05-12'
updatedOn: '2022-05-12'
ogTitle: ''
ogDescription: ''
ogImage:
    url: ''
category: ['atlassian']
tags:
    [
        'Deactivation',
        'Group Mapping',
        'Manual Group Mapping',
        'Provisioning',
        'SCIM',
        'SSO',
        'User Managemet',
        'User Provisioning',
        'User Sync',
    ]
---

## How miniOrange SCIM Simplifies Centralized IDP User Management in Atlassian Apps

If your business relies on various Atlassian applications and services to conduct your day-to-day operations, you would certainly relate that managing user accounts and their access could be challenging and often time consuming. This is where **miniOrange’s User Sync/SCIM** App comes into play.

SCIM an acronym for ‘System for Cross-domain Identity Management’ is a protocol that allows for automated provisioning and de-provisioning of user accounts between different systems. Our app allows seamless login into the **Jira, Confluence. Bitbucket, Crowd** and other Atlassian applications with Identity Provider (IdPs) like [Azure Active Directory, Keycloak, Okta, OneLogin, Oracle and more.](https://developers.miniorange.com/docs/atlassian/scim/overview)

To get a better understanding of its use cases, let’s take Okta as the identity provider and an application, say Jira:

### New Employee Onboarding (User Creation) {#user-creation}

When we talk about user creation, we refer to the process of adding a new user account to various systems that they may require. This usually happens when a new employee joins an organization and would need access to, say for instance, a team collaboration tool (Confluence) or a project management tool (Jira), if a developer then probably a tool to effectively store, manage and monitor codes (Bitbucket).

Let’s say when a new employee joins your company, the IT administrator with user information like username, email, and other relevant details would create a new user account in Okta (IDP), and then miniOrange User Sync/ SCIM ensures that accounts created in Okta is automatically replicated in Jira, profiles and attributes are in sync between both the systems.

### Change in User Information (User Updation) {#user-updation}

User information like email address, phone number, or role may change over time, and it’s essential to keep this information updated and ensure that it is consistent in all applications. Any such changes can also be automatically updated using miniOrange User Sync/ SCIM. Admins can easily update user information in Okta and those changes would reflect in Jira.

For example, if a user changes their phone number, you can update that information in Okta and the changes would be synced in Jira so that it’s consistent with both systems.

### Revoking User Access (Deactivation) {#user-deactivation}

When an employee leaves the company their access to company resources should be removed to maintain security and compliance. It also could be the case that a user’s access to certain systems needs to be revoked based on role change. This process of deactivation is automated just like the above with the app and once a user is deactivated in Okta, SCIM App will automatically deactivate the corresponding user in Jira.

For example: if an employee leaves the company, the HR department would disable their account in Okta and the miniOrange User Sync/SCIM would then automatically disable or remove the user’s account in Jira so that their access to the application is revoked.

### Assigning Groups to Users (Group Mapping) {#assigning-groups-to-users}

![SCIM flow diagram](/blog/assets/2023/miniorange-scim-for-atlassian-apps.webp)

Another essential use case is that it enables admins to manage user access to different resources and applications based on their group, in other words, it refers to the process of associating users with specific groups. With miniOrange User Sync/SCIM, you can map users to groups in Okta and Jira. This ensures that users have the necessary access to resources based on their roles and responsibilities. Group mapping can be done manually or [on the fly](https://developers.miniorange.com/docs/atlassian/scim/user-groups).

**Manual Group Mapping** involves manually assigning users to groups in Okta and Jira. It is useful when your IdP group names and local application group names are different here you would have to map each IdP group to the application group manually.

It allows you to manually map Jira groups with the groups from Okta or filter groups, and make changes to existing users. Manual Group Mapping is useful when you want to manage groups from Okta but the group name differs in Okta and Jira.

For example, if the name of the group in Okta is Dev users but the name of a similar group in Jira is Software_dev. In such scenarios, you would have to manually map each Okta group to the Jira group.

**On-the-fly** group mapping refers to the process of dynamically mapping users to groups. For instance, when group names in Okta and Jira are an exact match, the app would detect the groups and add users to those groups automatically and if a group doesn’t exist in Jira then it would be created.

Let’s say for better clarity, you use Okta for identity and access management and Jira for project management. There are several teams working on different projects, each team has its own group with a unique name, here let us consider “Marketing” group in Okta and a “Marketing” group in Jira. When a new user joins the company, they are added to Okta, and their profile contains information about which team they belong to.

As there is an integration between Okta and Jira using the miniOrange app that supports on-the-fly group mapping. The app detects the team information from Okta and checks if a group with the same name exists in Jira. If a group with the same name exists, the user is automatically added to that group, in this case, “marketing” if not, then a new group ‘marketing’ is created in Jira and the users are added.

The above are just a few of the most common use cases but it’s not just limited to that. **Identity Migration**-moving from one IdP to another, **SSO (Single Sign-On)** can be integrated with our SCIM app, **attribute transfer** to a relying party’s website and more. That brings us to…

### How Do IT Administrators Working with Atlassian Applications Benefit? {#benefits-for-it-admins}

Our SCIM integration offers various benefits to Atlassian application users, be it **Confluence, Jira, Bitbucket, or Crowd.** It is a popular solution among IT admins for user provisioning and de-provisioning. One of the main advantages of SCIM is that it **saves licensing costs** as it automates the user provisioning and de-provisioning process. Organizations with a large number of users can reduce the number of licenses needed for applications thus saving a significant amount of money.

The addon ensures that resources are allocated more efficiently as new users are automatically provisioned with the appropriate access rights. miniOrange User Sync/SCIM allows for **granular control** so that users only have access to the resources they need thus **mitigating the risk of unauthorized access.** All leads to **enhanced security** by ensuring that user access is granted or revoked in a timely manner.

Companies can expect an **increase in productivity** as our app eliminates the need for manual user provisioning and de-provisioning so that your IT staff can focus on more critical tasks. The automated process **reduces the risk of manual errors** as well. With these benefits, your business can look to **improve the overall user experience** eventually leading to higher user satisfaction.

### Summary {#summary}

If you are here, that means you took the time to go through the use cases and the overview of our app. No more time-consuming manual onboarding and offboarding users, employees get easy and quick access to the apps they need to work. You get automated access management that not just saves you time but also money.

You could also go through our other apps that compliment ‘lifecycle management’ such as SSO that would work in tandem to keep you secure. So, set up your employees fast with what they need, and unburden your IT team to focus on the bigger picture. Looking for something specific? Please contact us at **support-atlassian@miniorange.atlassian.net** or raise a support ticket [here](https://miniorange.atlassian.net/servicedesk/customer/portal/2), and keep watching this space for more new and innovative solutions.
