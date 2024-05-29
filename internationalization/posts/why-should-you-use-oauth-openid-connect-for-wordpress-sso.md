---
id: '2d20cfc6-3f23-4db0-8500-3895d361ce26'
title: 'Why should you use OAuth/OpenID Connect for WordPress SSO?'
description: 'Among the dominant open web standards available to you today, OAuth and OpenID Connect (OIDC) are perhaps the most flexible, reliable, and easy to use. Let’s see why both these are so widely used, and why you may want to think about implementing Single Sign-On (SSO) onto your website.'
metaTitle: "Why should you use OAuth/OpenID Connect for WordPress SSO?"
metaDescription: "OAuth and OpenID Connect are authorization frameworks that allow you to implement WordPress Single Sign-On (WP SSO) in a flexible way and make login easier."
keywords: ''
mainButtonLink: 'https://www.miniorange.com/contact'
mainButtonText: 'Contact us'
excerpt: ''

thumbnail: '/blog/assets/2023/oauth-openid-banner.webp'
createdOn: '2023-09-04'
updatedOn: '2023-09-04'
ogTitle: "Why should you use OAuth/OpenID Connect for WordPress SSO?"
ogDescription: "OAuth and OpenID Connect are authorization frameworks that allow you to implement WordPress Single Sign-On (WP SSO) in a flexible way and make login easier."
ogImage:
    url: ''
category: ['Solutions']
tags:
 [
	'sso',
  'single sign on',
  'oidc',
  'oauth',
 ]
---

### OAuth {#oauth}

Open Authentication, or OAuth, is an authentication framework that is incredibly versatile and robust. That’s one of the many reasons why it’s the preferred choice for some of the Big Tech companies of the world, including Amazon, Facebook (Meta), Google, Microsoft, as well as Twitter. The complete list of reasons why OAuth is so popular, and why you should choose it, is inexhaustive. But, we can point to a few good reasons why it has become the go-to for so many developers who want to implement Single Sign-On onto their websites, making it easy for all users to log into multiple applications and access services with a single click.
Enable [Single Sign-On (SSO)](https://www.miniorange.com/products/single-sign-on-sso) functionality on your WordPress website using the [WordPress SSO plugin](https://wordpress.org/plugins/miniorange-login-with-eve-online-google-facebook/). By integrating [WordPress SSO](https://plugins.miniorange.com/wordpress-sso), users gain the ability to access your website with a single set of login credentials, leveraging providers supporting OAuth/OpenID protocols. This streamlined approach simplifies the login process for users, enhancing convenience and security.

### OIDC:  {#oidc}

OpenID Connect, or OIDC, is not comparable one-to-one with OAuth. As mentioned before, it is a profile that is designed to function on top of the authorization framework that is OAuth. What’s unique about OIDC is that it features an id_token that is specific to federated authentication.
OIDC uses JSON Web Token (JWT) and HTTP flows and avoids sharing sensitive user credentials with services. This is why OIDC is a great example of an authentication method that users can rely on. It has consent built into its design. OpenID Connect also has its own types of flows such as implicit flow, authorization code flow, and hybrid flow, among others. 
OIDC is gaining popularity because it is newer, simple to implement, and easily accessible via APIs. It also seems to be the case that OIDC will be supported long into the future, which is why developers find it preferable to work with, compared to some of its alternatives.

### Benefits of OAuth & OpenID Connect (OIDC): {#benefits}

While there are many benefits to using OAuth and OIDC, we’ve listed only some of the major ones below:

![benefits of OAuth and OpenID](/blog/assets/2023/oauth-openid-benefits.webp)

 1.) **Customizability:** Perhaps the biggest positive for OAuth and OIDC is how it is immensely customizable. It provides a standard in SSO for the level of customization that it can offer and what one can come to expect. You can choose how you want the authentication/authorization protocol works for your website or application. This is customizable at three different points of the system.

 2.) **OAuth uses SSL:** You can even add profiles on top of OAuth/OIDC to increase the level of security. Even if you don’t, you need not worry. OAuth uses Secure Sockets Layer, or SSL, which applies to OpenID Connect as well. This makes sure that the data between the web server and web browser remains private. It does this by using cryptography industry protocols and encrypting the data to keep it safe.

 3.) **Supports API Integration:** Furthermore, it supports easy API integration with a ton of different applications and providers. This is because of its flexibility and options to customize. And if you need to protect your APIs or create an API Gateway, OAuth and OIDC both have it covered. Using the access and ID tokens for OAuth and OpenID Connect, one can also request different data or services via APIs. You may automate the provisioning of identities from Active Directory to Azure AD, Workday to Azure AD, and Azure AD to cloud applications such as Dropbox, Salesforce, ServiceNow, etc. using Microsoft’s Graph API.

 4.) **Server to Server Calls during SSO data exchange:** Unlike some traditional SSO protocols, OAuth & OpenID Connect communicate with the client on the backchannel. That is, the exchange of authorization tokens and user data happens from server to server and not via a browser. This means that unintended third parties can neither catch these server-to-server calls nor intercept the user data on the browser. This maintains data integrity and data confidentiality.

 5.) **OAuth works with SSO:** OAuth provides you with all the necessary tools and features so that it works seamlessly with Single Sign-On. Owing to its customizability, you can set custom rules and parameters on how you want it to work.

### Grant types supported by OAuth: {#grant-types}

Grant types are basically the method by which an authorization server grants you access to the necessary services. Regardless of whether you understand the technical terms listed below, you can still implement them onto your website with ease.

Our technical team will guide you through the process and answer any questions you might have. We will also recommend the best option for your particular use case.

 1.) **Authorization Grant:** This is the most widely used grant supported by OAuth, and also the one we recommend the most. The authorization server grants an authorization code, which can be exchanged for an access token.

 2.) **PKCE Grant:** This is a grant type that is added on top of the authorization code grant. It provides improved security to the already reliable authorization grant and is useful for native or single-page applications. PKCE, or Proof Key with Code Exchange, implements a code verifier that verifies the authorization code sent by the server to prevent malicious misuse and access.

 3.) **Implicit Grant:** The implicit grant is similar to the authorization grant, except for two differences. It is primarily intended for use with user-agent-based clients that cannot keep the client anonymous since application code and storage are easily accessible. Additionally, the authorization server directly returns an access token.

 4.) **Password Grant:** As the name suggests, a user is required to enter a username and password to get an access token in return. This method can only be used by applications that have been created by the service itself.

 5.) **Client Credentials:** This is preferable for machine-to-machine (M2M) applications such as Command Line Interfaces (CLI), daemons, and services running in the back end. Applications use a Client ID and Client Secret to authenticate themselves and get a token to pass information between the two.

 6.) **Refresh Token:** This is used by clients to exchange a refresh token for an access token which eventually expires. The refresh token is generated based on preset parameters and allows clients to have a valid access token without constant interaction with the user.

### Conclusion {#conclusion}

You can probably see now why OAuth and OIDC are among the most preferable authentication mechanisms available today. Implementing SSO is a must for practically any online business with a website, and OAuth and OIDC make that easy for you. In the end, how you want to customize it is up to you. But rest assured, opting for a flexible and powerful protocol will help you tremendously in the long run.

### References {#references}

- [Why Your Organization Should be Using OAuth 2.0](https://www.clowder.com/post/why-your-organization-should-be-using-oauth-2.0).
- [Picking the right SSO technology](https://www.dqindia.com/picking-the-right-sso-technology/)
- [OAuth vs. SAML vs. OpenID Connect](https://gluu.org/oauth-vs-saml-vs-openid-connect/)