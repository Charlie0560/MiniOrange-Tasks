---
id: '87948c44-8c4a-413c-8081-7468b562951f'
title: 'Log into Atlassian Cloud using External OAuth/OIDC Provider'
description: 'Atlassian Cloud offers competitive pricing, especially for small user-tiers. Here comes Atlassian Access an enterprise-grade subscription for your SSO needs.'
metaTitle: 'Log into Atlassian Cloud using External OAuth/OIDC Provider'
metaDescription: 'Atlassian Cloud offers competitive pricing, especially for small user-tiers. Here comes Atlassian Access an enterprise-grade subscription for your SSO needs.'
keywords: ''
mainButtonLink: 'https://miniorange.atlassian.net/servicedesk/customer/portal/2/group/6/create/66'
mainButtonText: ''
excerpt: 'Atlassian Cloud offers competitive pricing, especially for small user-tiers. Here comes Atlassian Access an enterprise-grade subscription for your SSO needs.'
thumbnail: '/blog/assets/2023/atlassian-access.webp'
createdOn: '2022-05-12'
updatedOn: '2022-05-12'
ogTitle: ''
ogDescription: ''
ogImage:
    url: ''
category: ['latest', 'atlassian']
tags:
    [
        'Atlassian cloud',
        'Atlassian Cloud OAuth SSO',
        'Atlassian Cloud OIDC SSO',
        'Cloud Confluence SSO',
        'Cloud Jira SSO',
    ]
---

## Log into Atlassian Cloud using External OAuth/OIDC Provider

Atlassian Cloud has become very popular in the last couple of years. It offers competitive pricing, especially for small user-tier applications. Since the announcement of Server discontinuation by Atlassian, more and more customers are moving to Cloud and Data Center. You can check out our article to see if Atlassian Cloud is a good option for you here – [Atlassian’s Server License Discontinuation: What are your options?](https://community.atlassian.com/t5/Atlassian-Cloud-Migration/Atlassian-s-Server-License-Discontinuation-What-are-your-options/ba-p/1635739#)

### What is Atlassian Access? {#what-is-atlassian-access}

Atlassian Access is an enterprise-grade subscription for enhanced security that provides centralized administration and governance. Atlassian Access SSO has security controls like [SAML Single Sign On (SSO)](https://www.atlassian.com/software/access/guide/elements/single-sign-on#how-it-works), User Lifecycle Management, Active Directory Sync, and many more. All these features span across all Cloud apps inclusive of Jira Software, Jira Service Management, Confluence, Bitbucket, Trello, and Statuspage spanning over organizations giving you the ability to use Jira SSO and Confluence SSO.

![Atlassian Access](/blog/assets/2023/atlassian-access.webp)

Single Sign-On into Atlassian Access allows users to authenticate to Atlassian Cloud products through your existing SAML 2.0 Identity Provider giving you the ability to enable and use Atlassian Cloud Jira SSO and Atlassian Cloud Confluence SSO. Cloud SAML Single Sign On (SSO) provides employees with a simple and easy process for accessing the tools that they use and allows admins to enforce identity-related security controls at scale, making the task of securing large groups of users far simpler.

What if users are present in OAuth or OpenID Provider? Will SSO still work? How can we connect Atlassian Cloud (SAML SSO modules) to OAuth/OIDC Providers? Is it even possible?

**YES! It’s possible with miniOrange’s Identity Brokering Service.**

### What is miniOrange Identity Brokering Service ? {#what-is-miniorange-identity-brokering-service}

Identity brokering is a way to establish trust between any two applications that do not speak the same language. Identity Brokering is a service that connects multiple service providers with different Identity Providers. Atlassian Access only allows SAML requests & responses. If your organization uses OAuth/OIDC protocol and would like to use Atlassian Access for Single Sign-On, you’re in somewhat of a fix! This is where miniOrange Identity Brokering comes into play.

![miniOrange Identity Broker Service](/blog/assets/2023/identity-broker-service.webp)

It establishes trust between any two applications like Atlassian Access SSO (SAML) and any OAuth/OIDC Provider that does not speak the same protocol and helps them understand requests and responses. This will be equivalent to a language translator where translators understand one language and translate it into another language. While using a translator, one needs to know at least one of the languages, whereas while using our product – you do not need to worry about any of the protocols. Users will still see the same flow which they see with other apps. **On accessing Atlassian, they will see the OAuth Provider’s login page, they will not see any miniOrange page or login screen in between, so users will not notice the integration with miniOrange**.

You can use both Cloud Jira SSO and Cloud Confluence SSO through one centralized miniOrange offering. Applications that do not communicate with each other using the same protocol are known as cross-protocol applications.

Over the years we have developed many standards for doing this like SAML, OpenID, OAuth, OpenID Connect, but the problem is that very few people can get these protocols talking to each other safely and quickly. miniOrange’s Identity Brokering, built-in to our proprietary Identity Provider product has one feature all good products have – you don’t need to worry about the underlying technology, protocols, tokens.

![miniOrange Identity Brokering](/blog/assets/2023/atlassian-miniorange-identity-brokering.webp)

Our Identity broker service hides all the complexity of these protocols and provides a simple HTTPS endpoint for parties to use. Without implementing SAML, OpenID, OAuth, or OpenID Connect, you can suddenly start speaking these languages and have access to identity and access tokens from hundreds of providers. The only thing you will need to know is how to call an HTTPS endpoint which is much simpler than understanding different standards. This is similar to users’ experience for Atlassian Access SSO when connecting to a SAML Identity Provider.

On the miniOrange side, you must configure

1. **Atlassian Access SAML SSO Application** as a **Service Provider** and **miniOrange** as an **Identity Provider**.
2. **OAuth or OIDC Provider** as an **Identity Source** in **miniOrange** where **miniOrange** is the **OAuth Client** to enable OAuth SSO or OIDC SSO for easy login.

Once the connection is successful, you are good to go. You can refer to this [document](https://idp.miniorange.com/what-is-identity-brokering/) for end-to-end setup.

Using miniOrange Identity Broker Service, you can also connect multiple Providers or add user directories. You can enhance Atlassian Cloud security by enabling Secure login with Two Factor Authentication (2FA) or [Multi-Factor Authentication (MFA)](https://idp.miniorange.com/what-is-identity-brokering/) in miniOrange.

What do you think about this solution? Do you think this would be helpful for Cloud users trying to authenticate from an external OAuth Provider?

Please drop us a mail at info@xecurify.com or raise a ticket [here](https://miniorange.atlassian.net/servicedesk/customer/portal/2) to talk to us.

You can learn more about our Identity Brokering features here – https://www.miniorange.com/identity-broker-service

You can take a tech deep dive into the solution here – https://idp.miniorange.com/what-is-identity-brokering/
