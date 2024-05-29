---
id: '45f35b8a-a9fa-464a-94f3-ec1f7f5f8840'
title: 'Authentication methods to Secure Jira/Confluence data center Rest APIs'
description: 'Since rest APIs are open to the internet, anyone can gain illegitimate access to it. Thus making it crucial to validate each API call made to the server. Secure Jira/Confluence data Center Rest APIs with our advanced authentication methods. Try our REST API Authentication app. The app supports various authentication methods like API Token, OAuth 2.0/OpenID token, etc. and it also provides configurable access control to block the REST API calls made using basic authentication or OAuth 1.0.' 
metaTitle: 'Authentication methods to Secure Jira/Confluence data center Rest APIs'
metaDescription: 'Secure Jira/Confluence data Center Rest APIs with our advanced authentication methods.'
keywords: ''
mainButtonLink: 'https://miniorange.atlassian.net/servicedesk/customer/portal/2/group/6/create/66'
mainButtonText: ''
excerpt: 'Our REST API Authentication app supports various authentication methods like API Token, OAuth 2.0/OpenID token, etc. and it also provides configurable access control to block the REST API calls made using basic authentication or OAuth 1.0.'
thumbnail: '/blog/assets/2023/rest-api-authentication-methods.webp'
createdOn: '2021-10-06'
updatedOn: '2021-10-06'
ogTitle: ''
ogDescription: ''
ogImage:
    url: ''
category: ['atlassian']
tags:
    [
        'API Key Authentication', 'API Token', 'Jira Rest API', 'OAuth/OIDC Authentication', 'Secure Rest API'
    ]
---

**Enable Jira 2FA for Customers and skip for Employees**

REST API is an application interface that allows an application to expose its resources securely to client applications. REST APIs let you securely integrate with Jira server or Jira data center by querying and modifying data in your Jira application. Since the rest APIs are open to the internet and anyone can use them to gain illegitimate access and modify sensitive resources, it is crucial to authenticate each API call made to the server.

**Authentication methods to Secure APIs are as follows:**
- Basic Authentication
- API Key Authentication
- OAuth 2.0 Authentication

We will learn about them briefly below.

### Basic Authentication: {#basic-authentication}

Basic authentication is a simple authentication scheme built into the HTTP protocol. In Basic Authentication, the client sends an encoded username and password for authentication. Since username and password sent can be easily deciphered, there is an inherent security vulnerability when using Basic authentication. With basic authentication, every API call is an opportunity for credential theft, which is not ideal. Hence not it is not recommended.

![Rest API Basic Authentication](/blog/assets/2023/rest-api-basic-authentication.webp)

**Authentication methods for SSO Enabled Jira Server:**

If the application is federated using SSO protocols such as SAML/OAuth/OIDC, the user generally does not know his/her application credentials. The user only knows the credentials of the Identity Provider. Hence basic authentication in such cases does not work. In this case, you can use the methods below.

### API Key Authentication {#api-key-authentication}

Use API Keys as an alternative to basic authentication for protection is to secure REST APIs from unauthenticated users. API Key authentication generates a random authentication key for you. Using this key, you can authenticate the REST API by sending it in the authentication request instead of a password. For more security, you can revoke & generate API keys.

From a usability point of view, there are some pros to using API Keys.  One of the clear advantages is its inherent simplicity as well as security. A single identifier is simple, and for some use cases, the best solution since they work better as unique app identifiers. We provide support for API key Authentication where you can additionally control which users can call the secure REST APIs.

![Rest API API Key Authentication](/blog/assets/2023/rest-api-api-key-authentication.webp)

### OAuth 2.0 Authentication {#oauth-2.0-authentication}

This method allows you to authenticate the secure REST APIs of your application using any OAuth/OIDC providers. A client calling a secure REST API can fetch an access token from the OAuth/OIDC provider and use this access token to authenticate an API call.

It is fundamentally a much more secure and more powerful method than the other approaches, mainly because it allows the establishment of scopes that can restrict or provide access to different parts of the API service. It is the best solution for those who have external OAuth2.0 providers. As an added advantage, the token gets revoked after some time, making it much harder to be re-used by attackers.

![Rest API OAuth 2.0 Authentication](/blog/assets/2023/rest-api-oauth-authentication.webp)

Try out our REST API Authentication app. The app supports various methods like API Token, OAuth 2.0/OpenID token, etc. and it also provides configurable access control to block the REST API calls made using basic authentication or OAuth 1.0.

For detailed information about our REST API Authentication app, please refer this [link](https://www.miniorange.com/atlassian).

In case you have any other use cases or have any queries, then please feel free to raise a ticket [here](https://miniorange.atlassian.net/servicedesk/customer/portal/2).