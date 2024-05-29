---
id: '6f27a525-f5ca-4d19-9fba-511ff643bbac'
title: 'Authorization Code Flow with Proof Key for Code Exchange (PKCE)'
description: ' Learn how the Authorization Code flow with Proof Key for Code Exchange (PKCE) works and why you should use it for native and mobile apps.'
metaTitle: 'Implement Authorization Code flow with PKCE | PKCE Authorization'
metaDescription: 'Learn how the Authorization Code flow with Proof Key for Code Exchange (PKCE) works and why you should use it for native and mobile apps.'
keywords: 'sso for web applications, single sign-on for web applications'
mainButtonLink: 'https://www.miniorange.com/contact'
mainButtonText: 'Contact us'
excerpt: 'Learn how the Authorization Code flow with Proof Key for Code Exchange (PKCE) works and why you should use it for native and mobile apps.'
thumbnail: '/blog/assets/2023/pkce-authentication-flow.webp'
createdOn: '2022-12-26'
updatedOn: '2022-12-26'
ogTitle: 'Implement Authorization Code flow with PKCE | PKCE Authorization'
ogDescription: 'Learn how the Authorization Code flow with Proof Key for Code Exchange (PKCE) works and why you should use it for native and mobile apps.'
ogImage:
    url: ''
category: ['concepts']
tags:
    [
		'SSO',
        'Single Sign-On',
        'MFA',
        '2FA',
        'Security',
        'Provisioning',
        'Two-factor Authentication',
        'Multi-factor Authentication'
    ]
---

The **Authorization Code Flow + PKCE** is an OpenId Connect flow specifically designed to authenticate native or mobile application users.

Applications without the ability to store a client secret, such as native or single-page apps, employ this grant type  (SPA).

**Proof Key for Code Exchange, or PKCE** for short, is an abbreviation. Users are not required to submit a client secret in the PKCE route, which differs significantly from the conventional Authorization Code flow in this regard. Because embedded secrets are not required in source code, PKCE lowers security risks for native apps by limiting the potential for reverse engineering.  

### Why PKCE Authentication is Required? {#Why PKCE Authentication is Required?}   

Some additional security risks are raised when public clients (such as native and single-page programs) ask for access tokens that are not addressed by the Authorization Code Flow alone.  
This is because

#### **Native apps:**  
Cannot securely store a Client’s Secret. Decompiling the app will reveal the Client Secret, which is bound to the app and is the same for all users and devices.
May make use of a custom URL scheme to capture redirects (e.g., MyApp://) potentially allowing malicious applications to receive an Authorization Code from your Authorization Server.  

#### **Single-page apps:**  
Cannot securely store a Client Secret because their entire source is available to the browser.
OAuth 2.0 offers a variant of the Authorization Code Flow that uses a Proof Key for Code Exchange (PKCE) in light of these circumstances (defined in OAuth 2.0 RFC 7636).

The calling application creates a secret known as the Code Verifier that may be confirmed by the authorization server in the PKCE-enhanced Authorization Code Flow. In order to obtain an Authorization Code, the calling app also produces a transform value of the Code Verifier called the Code Challenge and delivers it over HTTPS. In this manner, a hostile attacker can only intercept the Authorization Code and cannot use the Code Verifier to swap it for a token.

### How does it work? {#How does it work?}
In place of the **client_secret**, the client app creates a unique string value, **code_verifier**, which it hashes and encodes as a **code_challenge**. When the client app initiates the first part of the Authorization Code flow, it sends a hashed **code_challenge**.  

Once the user authenticates and the authorization code is returned to the client app, it requests an **access_token** in exchange for the authorization code.  

In this step, the client app must include the original unique string value in the **code_verifier** parameter. If the codes match, the authentication is complete and an **access_token** is returned.


### PKCE Authentication Flow {#PKCE Authentication Flow}
The processes are quite similar to those of **Oauth** because the **PKCE-enhanced Authorization Code Flow** builds upon the conventional Authorization Code Flow.

![PKCE Authentication Flow](/blog/assets/2023/pkce-authentication-flow.webp)  

1. Within the application, the user selects **Login**.
2. The SDK for miniOrange constructs a cryptographically random code verifier and a code challenge from it.
3. The user is forwarded to the miniOrange Authorization Server (**/authorize endpoint**) via the miniOrange SDK along with the code challenge.
4. The user is forwarded to the login and authorization prompt by your **miniOrange Authorization Server**.
5. A consent page outlining the permissions miniOrange will provide to the application may be displayed after the user authenticates using one of the predefined login options.
6. As the user is redirected back to the application with an authorization code that is valid for one usage, your miniOrange Authorization Server records the code challenge.
7. This code is sent to the miniOrange Authorization Server (/oauth/token endpoint) via the miniOrange SDK together with the code verifier established in step 2.
8. The code challenge and code verifier are verified by your miniOrange Authorization Server.
9. A response from your miniOrange Authorization Server contains an access token and an ID token (and optionally, a refresh token).
10. The access token can be used by your application to contact an API and access user data.
11. The requested data is returned by the API.
 

### How to implement PKCE with miniOrange? {#How to implement PKCE with miniOrange?}
The easiest way to implement the Authorization Code Flow with PKCE is to follow our [Native Quickstarts](https://www.miniorange.com/integrations/). (These setup guides will help you with setup).  

&nbsp;  

Depending on your application type, you can also use our mobile or single-page app SDKs:  
[Download](https://miniorange.s3.amazonaws.com/public/plugins/idp/jwt-connector.zip%22) Mobile SDK’s.

&nbsp;  

&nbsp;  

#### **More Resources:**
- [What is OAuth? How does it work?](https://blog.miniorange.com/what-is-oauth-2/)
- [OAuth Server Service by miniOrange](https://www.miniorange.com/products/oauth2-server)
- [OAuth API Docs](https://developers.miniorange.com/docs/idp/api/oauth-api) 
