---
id: '2838fb36-6a0b-4a81-a9e1-a72b529e22cb'
title: 'SSO for Atlassian Applications connected to Crowd'
description: 'Jira Service Management (JSM) is a powerful service management solution designed to streamline your support processes. However, JSM portals often face the challenge of dealing with spam tickets generated by malicious actors or automated bots, especially if it’s a public-facing platform.'
metaTitle: 'SSO for Atlassian Applications connected to Crowd'
metaDescription: 'Crowd makes access to Atlassian applications without logging into each individually a lot simpler with a single set of IAM credentials.'
keywords: ''
mainButtonLink: 'https://miniorange.atlassian.net/servicedesk/customer/portal/2/group/6/create/66'
mainButtonText: ''
excerpt: 'Crowd makes access to Atlassian applications without logging into each individually a lot simpler with a single set of IAM credentials.'
thumbnail: '/blog/assets/2023/crowd-saml-sso-and-connectors.webp'
createdOn: '2021-11-03'
updatedOn: '2021-11-03'
ogTitle: ''
ogDescription: ''
ogImage:
    url: ''
category: ['atlassian']
tags:
    [
        'SSO Connectors for Crowd', 'Single Sign-On', 'Crowd SSO', 'Crowd Single Sign-on', 'Crowd SAML SSO', 'SSO', 'MFA', '2FA', 'Security'
    ]
---

## SSO for Atlassian Applications connected to Crowd

Crowd is a centralized identity and access management application that manages the users from multiple directories like Active Directory, LDAP, Open LDAP, Microsoft Azure Active Directory for connected applications such as Jira, Confluence, Jenkins etc. This makes access to applications without logging into each individually a lot simpler with a single set of credentials.

Now, organizations are looking to delegate user authentication for Atlassian applications from Crowd to central IAM (Identity & Access Management) applications for better security and allow their users to seamlessly access all the Atlassian applications connected to crowd including Jira, Confluence, Bitbucket, etc using the single IAM session.

There are multiple solutions available to achieve these requirements:
- In case you have an Atlassian Data Center application, you can integrate each application with IAM for SAML SSO using the application’s built-in SSO 2.0 functionality. 
- In case you have a Server version or looking for customization and other features not present in built-in SSO 2.0, take a look at the SSO plugins available on the Atlassian Marketplace.
- Use Crowd SSO for user and permission management and if you want to prevent applications from directly integrating with IAM.

Here we will be focusing on the third solution only, using this solution, all authentication requests and responses to and from Atlassian applications will go through the Crowd server and user authentication will be handled by the IAM while the Crowd will still be used to manage users and their permission for the Atlassian applications.

### How does the miniOrange plugin handle this use case? {#miniorage-plugin-solution}

We developed a SAML Single Sign-on app for Crowd Server that allows it to integrate with any SAML complaints IDP for SAML Single Single Sign-on.

Along with the Crowd SAML Plugin, we have developed its connector add-ons for the Atlassian application, which allows the [Crowd SAML SSO](https://marketplace.atlassian.com/apps/1218304) plugin to enable SSO and Atlassian applications connected to crowd such as [Jira](https://marketplace.atlassian.com/apps/1220053), [Confluence](https://marketplace.atlassian.com/apps/1220055), [Bitbucket](https://marketplace.atlassian.com/apps/1220057), [Bamboo](https://marketplace.atlassian.com/apps/1220056), and [Fisheye](https://marketplace.atlassian.com/apps/1222983). Here, users don’t need to login to Crowd for SSO to work, they can directly do so from their Jira or Confluence application.

**Crowd SSO Plugin and it’s Connectors:**
- [Crowd SAML SSO plugin](https://marketplace.atlassian.com/apps/1218304/mo-saml-single-sign-on-sso-for-crowd?hosting=server&tab=overview)
- [SSO Connectors for Crowd and JIRA](https://marketplace.atlassian.com/apps/1220053/mo-sso-connector-for-crowd-and-jira?hosting=datacenter&tab=overview)
- [SSO Connectors for Crowd and Confluence](https://marketplace.atlassian.com/apps/1220055/mo-sso-connector-for-crowd-and-confluence?hosting=datacenter&tab=overview)
- [SSO Connectors for Crowd and Bitbucket](https://marketplace.atlassian.com/apps/1220057/mo-sso-connector-for-crowd-and-bitbucket?hosting=datacenter&tab=overview)
- [SSO Connectors for Crowd and Bamboo](https://marketplace.atlassian.com/apps/1220056/mo-sso-connector-for-crowd-and-bamboo?hosting=server&tab=overview)
- [SSO Connectors for Crowd and Fisheye](https://marketplace.atlassian.com/apps/1222983)

### How does it work? {#how-does-it-work}

Crowd SAML SSO Plugin acts as a SAML Service Provider and is used to enable trust between Atlassian applications and central IAM applications. Crowd SAML SSO plugin takes care of the SAML Request, SAML response, and user’s session management across all the Atlassian applications, and using the SSO connector for Crowd, users will be able to invoke SSO directly from the Atlassian applications itself.

Here, user authentication will be done by the IAM and Crowd will still be used to manage users and their groups (permissions) for all the connected Atlassian applications connected to crowd.

Also, with this flow, end-users will experience a seamless login and won’t be able to notice that the SSO request and response passes through the Crowd Server.

**Let’s understand the Workflow!**

- User tries to access the application i.e., Jira tickets, Confluence pages, etc
- User will be redirected to the IAM application’s login page for authentication.
    - Users will be redirected to the Crowd SAML plugin.
    - Crowd SAML plugin will redirect the user to the IAM application for authentication.
- Once the authentication is done, the user will be redirected back to the Atlassian applications connected to crowd and logged in.
    - IAM sends a response back to Crowd SAML plugin
    - Crowd SAML plugin validates the SAML Response and takes care of the  user creating the user session, and redirects the user to the respective application from where the SSO was invoked.
    - Users will be granted access to the application based on their groups and applications configured on Crowd.

### What are the Key Benefits? {#what-are-key-benefits}

- There is only one set of SAML configurations for all the Atlassian applications.
- User authentication is moved to central IAM without losing any of the existing user permissions.
- Users will be able to access all applications (Atlassian and Non-Atlassian applications) using their IAM credentials.
- This solution made setup easy to enforce an additional security layer like MFA on top of the SSO which was not possible while using Crowd for Single Sign-On.

What do you think of this solution? Do you think this would be helpful in centralizing authentication for your users? Drop us a mail at [info@xecurify.com](mailto:info@xecurify.com) or raise a ticket [here](https://miniorange.atlassian.net/servicedesk/customer/portal/2) to talk to us.