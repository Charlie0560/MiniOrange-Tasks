---
id: 'a1a2d776-f2ab-4bdf-81df-1b088b5048cd'
title: 'What’s new in OAuth 2.1?'
description: 'OAuth 2.0 will be deprecated in OAuth 2.1, and additional security best practices will be mandated, capturing and consolidating updates and improvements made to OAuth 2.0 over the previous eight years. 
OAuth 2.1 is an update to OAuth 2.0 with minor changes basically towards improving its security'
metaTitle: "What's new about OAuth 2.1 Single Sign-On protocol?"
metaDescription: "OAuth 2.1 aims to unify the best practice in OAuth, and it is an update to OAuth 2.0 with improvements aimed often at enhancing security which mainly defines four grants."
keywords: ''
mainButtonLink: 'https://www.miniorange.com/contact'
mainButtonText: 'Contact us'
excerpt: ''

thumbnail: '/blog/assets/2023/oauth-flow-diagram.webp'
createdOn: '2023-09-04'
updatedOn: '2023-09-04'
ogTitle: "What's new about OAuth 2.1 Single Sign-On protocol?"
ogDescription: "OAuth 2.1 aims to unify the best practice in OAuth, and it is an update to OAuth 2.0 with improvements aimed often at enhancing security which mainly defines four grants."
ogImage:
    url: ''
category: ['Solutions']
tags:
 [
	'OAuth 2.1',
  'Authorization code grant',
  'OAuth 2.0',
  '',
 ]
---


### What is changing from OAuth 2.0 to OAuth 2.1? {#oauth2.0-oauth2.1}

 The OAuth (Open Authorization) standard facilitates secure communication between services without having to reveal passwords.

 OAuth Single Sign-On (SSO) protocol allows applications to securely access and share information with enterprise systems, and its functionality is currently being enhanced.

 OAuth 2.0 was introduced in October 2012, marking a significant milestone in its evolution. Now, OAuth 2.1 is being developed to streamline and simplify the most commonly used features of OAuth 2.0 while also addressing security concerns.

 In OAuth 2.1, certain elements of OAuth 2.0 will be deprecated, and security best practices will be enforced. This update consolidates the advancements and refinements made to OAuth 2.0 over the past eight years, primarily focusing on enhancing security measures. 

 In OAuth 2.1, minor adjustments are made to ensure a stronger security framework than OAuth 2.0.

 Feel free to explore our [WordPress plugin](https://wordpress.org/plugins/miniorange-login-with-eve-online-google-facebook/), which seamlessly implements [Single Sign-On](https://plugins.miniorange.com/wordpress-sso) functionality using the OAuth 2.0 protocol.


### Key Differences between OAuth 2.0 & OAuth 2.1 Protocol  {#key-difference}

1.)The RFC 6749 OAuth core spec defines four grant types: Open Authorization Code, Implicit, Password, and Client Credentials. The main differences between OAuth 2.0 and OAuth 2.1 are described below.

2.)A Proof Key for Code Exchange (PKCE) is required for all OAuth clients using the authorization code flow.

3.)Redirect URIs must be compared using exact string matching.

4.)The Implicit grant (response_type=token) is omitted from this specification

5.)The Resource Owner Password Credentials grant is omitted from this specification.

6.)Bearer token usage omits the use of bearer tokens in the query string of URIs.

7.)Refresh tokens for public clients must either be sender-constrained or one-time use.

### Its Time for OAuth 2.1 {#oauth2.1}

[OAuth protocol](https://plugins.miniorange.com/wordpress-single-sign-on-sso-with-oauth-openid-connect) has been patched and extended a lot in the last decade of experience deploying systems using it. To address this changing landscape, the OAuth community has patched and added to the OAuth spec over the years. The [OAuth core](https://fusionauth.io/blog/whats-new-in-oauth-2-1) spec (RFC 6749) defines four grant types: Authorization Code, Implicit, Password, and Client Credentials.

PKCE is short for **Proof Key for Code Exchange**. It is a mechanism that came into being to make the use of OAuth 2.0 Authorization Code grants more secure in certain cases.

The authorization code is a one-time code that the client will use to obtain an access token. The code is retrieved from the authorization server, where the user may see what information the client is asking for and accept or refuse it.

The **authorization code** flow has a few advantages over other grant kinds. When the user authorizes the application, they are sent back to the application via a URL containing a temporary code. The code is exchanged for the access token by the programme. When the application requests the access token, it can be authenticated with the client secret, lowering the danger of an attacker intercepting the **authorization code** and using it themselves.

### The authorization code grant: {#auth-code-grant}

It has been expanded with **PKCE (RFC7636)** capability so that the default manner of using the authorization code grant according to this specification necessitates the addition of the PKCE parameters. Depending on the API, the **redirect URI** may be unnecessary, but it is strongly suggested. This is the URL to which the user should be forwarded once the authorization is complete. This must correspond to the redirect URL that you already registered with the service.

The **implicit grant (response type “token”)** and other response types causing the authorization server to issue access tokens in the authorization response are vulnerable to access token leakage and access the token replay. The Oauth 2.1 Implicit grant is inherently insecure when used in a single-page application (SPA). If you use this grant, your access token is exposed.

In order to avoid these issues, clients SHOULD NOT use the implicit grant (response type “token”) … unless the unless access token injection in the authorization response is prevented and the aforementioned token leakage vectors are [mitigated].

### The Resource Owner Password Credentials grant is removed:{#password-creds-grant}

This grant was added to the OAuth 2.0 specification with an eye toward making migration to OAuth compliant servers easier. In this grant, the application server receives the username and password (or other credentials) and passes it on to the Open Authorization server. Here’s an article breaking down each step of the Resource Owner Password Credentials grant. This grant is often used for mobile applications. While this grant made it easier to migrate OAuth with minimal application changes, it breaks the core delegation pattern and makes the OAuth 2.1 flow less secure.

**Bearer authentication** (also known as token authentication) is an HTTP authentication system that uses bearer tokens as security tokens. “Bearer authentication” can be translated as “allow access to the bearer of this token.” The bearer token is a cryptic string that the server generates in response to a login request. When sending requests to protected resources, the client must include this token in the Authorization header. These days, most tokens are JWTs. Clients store them securely and then use them to make API calls to the application server. JWT, or JSON Web Token, is an open standard used to share security information between two parties — a client and a server. Each JWT contains encoded JSON objects, including a set of claims. 

![OAuth resource server](/blog/assets/2023/oauth-resource-server.webp)

### Restricting refresh tokens: {#restrict-refresh-token}

Refresh tokens enable a client to obtain new access tokens without having to re-authenticate with the resource owner. If you require access to a resource for a longer period of time than an access token allows, or if you require infrequent access, refresh tokens can be useful. When a user has been logged into their email for weeks or months, a refresh token may be used. When an access token expires, the client can present a refresh token to obtain a new one. The **OAuth 2.1** draft specifies two types of refresh tokens: one-time usage or cryptographically bound to the sender. When using refresh tokens for the first time, after a refresh token (let’s call it refresh token A) is used to retrieve a new access token, it becomes invalid. Along with the requested access token, the OAuth server may issue a new refresh token (designated as refresh token B).

OAuth 2.1 represents the next step for the OAuth framework by combining Security Best Common Practices (BCPs) with the removal of irrelevant and deprecated specifications. **[miniOrange](https://www.miniorange.com/)** provides the most affordable **Secure Identity Solutions** for all types of use cases and offers different packages based on the customer’s requirements. You can enable **[WordPress Single Sign-On (SSO)](https://plugins.miniorange.com/wordpress-sso)** on your site using our WordPress SSO plugin and connect it to any Identity Provider.

Contact us at **[oauthsupport@xecurify.com](mailto:oauthsupport@xecurify.com)** and we’ll help you set up SSO with any required providers in no time.


### Additional Resources {#additional-resources}

- [Free IDP Trial – Free Single Sign-On (SSO) Trial | 2FA Trial](https://www.miniorange.com/businessfreetrial).
- [WordPress Single Sign-On (SSO) – OAuth & OpenID Connect](https://plugins.miniorange.com/wordpress-sso)
- [OAuth Single Sign-On – SSO (OAuth Client) – WordPress plugin](https://wordpress.org/plugins/miniorange-login-with-eve-online-google-facebook/)
- [WordPress OAuth Setup guides](https://plugins.miniorange.com/wordpress-single-sign-on-sso-with-oauth-openid-connect)
- [What’s new in OAuth 2.1? – FusionAuth](https://fusionauth.io/blog/whats-new-in-oauth-2-1)