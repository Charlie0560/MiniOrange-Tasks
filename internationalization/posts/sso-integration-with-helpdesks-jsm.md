---
id: '0c5f4eb8-43c8-4081-b208-b9945cddf490'
title: 'SAML/OAuth SSO for JSM Customers'
description: 'Could you imagine what it would be like if I told you that external customers can now log in via SSO to your Jira Service Management portals? We’ve got your back with our exclusive solution, SAML/OAuth SSO for JSM Customers.'
metaTitle: 'SAML/OAuth SSO for JSM Customers'
metaDescription: 'Could you imagine what it would be like if I told you that external customers can now log in via SSO to your Jira Service Management portals? We’ve got your back with our exclusive solution, SAML/OAuth SSO for JSM Customers.'
keywords: ''
mainButtonLink: ''
mainButtonText: ''
excerpt: 'Could you imagine what it would be like if I told you that external customers can now log in via SSO to your Jira Service Management portals? We’ve got your back with our exclusive solution, SAML/OAuth SSO for JSM Customers.'
thumbnail: '/blog/assets/2023/jsm.webp'
createdOn: '2022-10-01'
updatedOn: '2022-10-01'
ogTitle: ''
ogDescription: ''
ogImage:
    url: ''
category: ['latest', 'atlassian']
tags:
    [
        'Atlassian Cloud SSO',
        'Jira',
        'Jira SSO',
        'Single Sign-On',
        'SSO',
        'Helpdesk'
    ]
---

## SAML/OAuth SSO for JSM Customers {#saml-oauth-sso-for-jsm-customers}

Introducing our most awaited add-on: [SAML/OAuth SSO for JSM Customers.](https://marketplace.atlassian.com/apps/1229212/sso-integration-with-helpdesks-for-customers?hosting=cloud&tab=overview)

&nbsp;&nbsp;

Could you imagine what it would be like if I told you that external customers can now log in via SSO to your Jira Service Management portals? We’ve got your back with our exclusive solution, SAML/OAuth SSO for JSM Customers.

### What does JSM SSO solve? {#what-does-jsm-sso-solve}

&nbsp;

If you keep your customer portal public, i.e. any anonymous user can raise a ticket on it, then there might be cases where your customer portal can be spammed by fake tickets. Managing these tickets could be very troublesome. In this scenario, Jira admins choose only the verified customers who have an account in their IDP should be allowed to raise and access tickets on the portal. Atlassian alone doesn’t allow you to do so. This is where miniOrange comes in with the JSM SSO solution.

&nbsp;

Another approach might be to add your external customer as a user in your JSM. To do so, you will have to verify his domain, and add him as a user in Jira and Atlassian access. Seems a bit tedious and expensive, yet unable to fulfill your complete requirements? miniOrange saves you from all of these hassles while fulfilling your use case.

No prerequisites required:

1. Domain Verification not required
2. Atlassian Access not required

&nbsp;

So in a nutshell, miniOrange solution, SAML/OAuth SSO for JSM Customers, is the best of both worlds. It helps in the prevention of spam ticket creation by allowing SSO for external customers and eliminating the need to add your customers as users in Jira and then grant them Atlassian access.
 
### Let’s see how? {#lets-see-how?}


With the help of our plugin your customers who are stored in any IDP (miniOrange, Okta, Azure AD, etc) will be able to login into your JSM or JSD via a link provided by our solution to the admin.
As soon as the customer clicks on the link they will be redirected to their IDP for authentication. Once authenticated the customers can raise and view the issues with ease.

A step by step user flow is explained below.

&nbsp;&nbsp;

![JSM](/blog/assets/2023/jsm.webp)

&nbsp;

The whole flow of our plugin is explained below in layman terms :

&nbsp;

1. Customer tries to access the JSM through the portal link provided by the admin. 
2. The customer will be redirected to the IDP for authentication.
3. User session is created on the portal.
4. Customers are now allowed to access and interact with the portal.
 
&nbsp;&nbsp;


It will be available across all Single Sign On protocols. We’ve already released the product with  SAML support and soon will be supporting OAuth,Open ID, and other protocols as well.

&nbsp;&nbsp;

**Upcoming Features:**

- Multiple IDP support.
- Two Factor Authentication on top of SSO.
- Domain restricted sign-up for external customers. 
- Domain based allow list for External Customer Accounts.
- Automatically adding customers to organizations based on email domain.

[Check out this link for further details.](https://miniorange.com/atlassian/sso-for-jsm-customers)


