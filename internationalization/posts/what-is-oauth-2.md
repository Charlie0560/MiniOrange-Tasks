---
id: '12e0cd14-0709-422b-9bc3-9c3d2a9d48d9'
title: 'What is OAuth (Open Authorization) ?'
description: 'OAuth (Open Authentication) pronounced “oh-auth” is a technological standard that allows you to share information between services without exposing your password. It’s a widely-adopted standard that’s used by developers of websites and apps, and you probably use services every day that utilize OAuth.'
metaTitle: "What is OAuth and how does it work?"
metaDescription: "OAuth 2.0 is an authorization protocol and NOT an authentication protocol. As such, it is designed primarily as a means of granting access to a set of resources, for example, remote APIs or user data."
keywords: ''
mainButtonLink: 'https://www.miniorange.com/contact'
mainButtonText: 'Contact us'
excerpt: ''

thumbnail: '/blog/assets/2023/what-is-open-authorization.webp'
createdOn: '2023-09-04'
updatedOn: '2023-09-04'
ogTitle: "What is OAuth and how does it work?"
ogDescription: "OAuth 2.0 is an authorization protocol and NOT an authentication protocol. As such, it is designed primarily as a means of granting access to a set of resources, for example, remote APIs or user data."
ogImage:
    url: ''
category: ['Solutions']
tags:
 [
	'SSO',
  'Single Sign-On',
  'OAuth 2.0',
  'OAuth 2.0 Authentication',
 ]
---


### What is OAuth Single Sign-On? {#what-is-oauth-sso}

  OAuth Single Sign-On (SSO) protocol provides the application the capability for secure designated access. It allows users in an organization/application to log in using OAuth/OpenID connect providers like Microsoft Azure AD, AWS Cognito, Google apps, Facebook, etc. & share their information with enterprise applications. It makes use of a token-based authorization mechanism to grant access to users across enterprise applications. In short, users can log in into multiple applications and services using a single set of credentials, minimizing the headache to remember multiple passwords. Set up [Single Sign-On (SSO)](https://www.miniorange.com/products/single-sign-on-sso) on your WordPress website via [WordPress SSO plugin](https://wordpress.org/plugins/miniorange-login-with-eve-online-google-facebook/). Implementing [WordPress SSO](https://plugins.miniorange.com/wordpress-sso) allows users to log into your websites with a single set of credentials using the WordPress supported OAuth providers.


### How does OAuth work?  {#how-does-oauth-work}

#### Entities of Open Authorization protocol

**End-User/Resource Owner:** Resource Owner is the end-user who wants to access the protected resource.

**Resource Server:** The resource which is requested by the end-user is present on the resource server. The resource server handles requests to access/update the resource and also forwards authentication requests to the Authorization Server.

**Authorization Server:** It is the authentication server that handles login requests and validates the user identity.

### Example of OAuth Authentication Workflow {#oauth-authentication-example}

![Open Authorization Real Life Example](/blog/assets/2023/real-life-example.webp)

A car owner hands the car key to the valet. To prevent theft, some cars come with a valet key which has limited access. The valet needs to access only a subset of services that are provided by the user to the valet through a valet key. Therefore, we have provided, “limited yet secure access”.

An OAuth token is like a valet key. As a user, you get to tell the consumers what they can use and what they can’t from each service provider.

### OAuth Single Sign-On (SSO) Workflow {#oauth-authentication-workflow}

 1.) Access to resources is attempted by an unknown user.

 2.) An authorization request is sent to the OAuth Provider by the web application.

 3.) The user is prompted to log in and the application is authorized by an OAuth Server.

 4.) The user is taken to the login page, where he or she can log in.

 5.) The user is authenticated by an OAuth Provider, who then transmits the permission code to the web application.

 6.) With the permission code received from OAuth Server, the web application transmits its own client ID and client secret.

 7.) After that, the server verifies the request and gives an access token to the web application.

 8.) The access token is used by your web application to access resources on the server.

 9.) miniOrange allows users to access protected features by using access tokens, ID tokens, and user information.

 10.) Now, the user is authenticated and logged in. Thus, the application gives access to resources.

![OAuth Single Sign-On Workflow](/blog/assets/2023/oauth-protocol.webp)

### Why should you use OAuth? {#why-use-oauth}

 Before OAuth, the basic authentication standard was HTTP, which required the user to enter a username and password to access each application. OAuth 2.0 allows your app to access our APIs, ensuring that you have the necessary permissions to access this data.
 
 Applications that allow users to log in with third-party services via Single Sign-on typically urge them to authenticate themselves by providing options such as “Login with Facebook” or “Login with Google”.

 ![A world without Single sign onh](/blog/assets/2023/world-without-oauth.webp)

 If we imagine a world without Open Authorization (OAuth) then each user’s security will be at risk. With the help of Oauth Single Sign-On (SSO), we don’t have to worry about passwords while giving a particular level of access to any 3rd party applications for a definite period of time.

 OAuth allows apps to authenticate users by establishing their identity through third-party services, It eliminates the need for the application to maintain its own authentication system.

 OAuth Single Sign-On (SSO) uses a single set of credentials for [authentication](https://www.miniorange.com/products/authentication) and gives access to many apps/websites, which makes data sharing easy.

 The OAuth 2.0 specification does not specify scopes, and there is no central registration of scopes.


### Applications of OAuth  {#applications-of-oauth}

With its emphasis on the B2B market, various organizations need a core SSO platform that could easily be adapted to customers’ preferred corporate identity technologies. With OAuth SSO, corporate users don’t need a registration process, nor do they need to set up separate user names or passwords. An SSO solution can also cut costs for both organizations and their customers by reducing or eliminating expensive support calls for password resets and user account management — a win-win situation.

OAuth is a developer-friendly identity and access management (IAM) platform that makes modernization and transformation projects easier for government agencies and departments while also providing a seamless experience for citizens. Citizen Services: Provide citizens with a seamless experience across applications and login credentials, as well as the assurance that their data is always secure and many more.

&nbsp; 1)**SSO for single-page web application**

OAuth 2.0 is a protocol that lets you authorize one website (the consumer or application) to access your data from another website (the resource server or provider). For example, you want to authorize a website to access some files from your Dropbox account. The website will redirect you to Dropbox which will ask you whether it should provide access to your files. If you agree the website will be authorized to access your files from Dropbox. At the core, OAuth 2.0 is about resource access and sharing.

&nbsp; 2)**SSO into mobile application**

OAuth Single Sign-On is a method of authentication that lets a user log into numerous applications using a single set of credentials, resulting in a single federated identity for all 3rd party applications. It removes the need for users to remember and manage many sets of credentials for various applications. OAuth has developed as a significant, standard protocol for enabling this pattern of authentication and authorization in native applications. The native application receives an access token as a result of the authentication and authorization. The native application saves this token, which is then used to authenticate any subsequent API calls. The tokens for numerous native applications are controlled by a single application that functions as a token agent when using native applications’ SSO.

&nbsp; 3)**SSO into Customer Relationship Management (CRM)**

Consider a scenario where an institute or an organization uses CRM to manage accounts and WordPress to offer online programs. SSO can be used with CRM to manage the accounts and WordPress to offer online programs. We can use OAuth Single Sign-On Protocol to connect WordPress accounts to CRM accounts to validate program access & allow users to log in into their site using their CRM credentials.

&nbsp; 4)**SSO into LMS**

Different identity and access management (IAM) technologies, such as Okta, Salesforce Identity, OIM, and others, are used to build up an organization’s login portal. The portal would allow users to access the LMS and other related LMSs with a single click. SSO allows employees to log into a variety of business programs, such as an LMS, with a single set of login credentials (ID and password). To access the LMS or any other related program within the enterprise, there is no need to memorize dozens of credentials. Employees will have a more convenient and smooth process because password recollection is no longer required. As a result, employees can move between systems, including the LMS, without having to change their credentials.


### Additional Resources {#additional-resources}

- [What is Single Sign-On (SSO)?](https://www.miniorange.com/products/single-sign-on-sso).
- [WordPress Single Sign-On (SSO) – OAuth & OpenID Connect](https://plugins.miniorange.com/wordpress-sso)
- [Why is OAuth Important?](https://www.cisecurity.org/insights/blog/why-oauth-is-so-important-an-interview-with-justin-richer)