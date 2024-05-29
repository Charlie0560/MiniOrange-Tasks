---
id: '5497c347-f873-4262-97a2-edc3136da014'
title: 'What is JWT (JSON Web Token)? How does JWT Authentication work?'
description: 'What is JWT (JSON Web Token)? JWT, or JSON Web Token, is an open standard used to share information between two parties securely — a client and a server.'
metaTitle: 'What is JWT (JSON Web Token)? How does JWT Authentication work? - Blog - miniOrange'
metaDescription: 'What is JWT (JSON Web Token)? JWT, or JSON Web Token, is an open standard used to share information between two parties securely — a client and a server.'
keywords: 'what is jwt'
mainButtonLink: 'https://www.miniorange.com/contact'
mainButtonText: 'Contact us'
excerpt: 'What is JWT (JSON Web Token)? JWT, or JSON Web Token, is an open standard used to share information between two parties securely — a client and a server.'
thumbnail: '/blog/assets/2023/jwt-structure.webp'
createdOn: '2022-12-29'
updatedOn: '2023-10-31'
ogTitle: 'What is JWT (JSON Web Token)? How does JWT Authentication work? - Blog - miniOrange'
ogDescription: 'What is JWT (JSON Web Token)? JWT, or JSON Web Token, is an open standard used to share information between two parties securely — a client and a server.'
ogImage:
    url: ''
category: ['IAM', 'Concepts']
tags:
    [
        'what is jwt',
        'jwt',
        'jwt authentication',
        'json web token',
        'SSO',
        'OAuth/OIDC',
        'Authentication',
        'Authentication',
        'API Key',
        'Adaptive Authentication',
        'MFA',
        '2FA',
        'Single Sign-On',
        'Security'
    ]
---

### What is JWT (JSON Web Token)? {#what-is-jwt-json-web-token}
JWT, or JSON Web Token, is an open standard used to share information between two parties securely — a client and a server. In most cases, it’s an encoded JSON containing a set of claims and a signature. It’s usually used in the context of other authentication mechanisms like OAuth, OpenID to share user-related information. It’s also a popular way to authenticate/authorize users in a microservice architecture.  

JWT authentication is a token-based stateless authentication mechanism. It is popularly used as a client-side-based stateless session, this means the server doesn’t have to completely rely on a data store (or) database to save session information.  

JWTs can be encrypted, but they are typically encoded & signed.  We will be focusing on Signed JWTs. The purpose of Signed JWT is not to hide the data but to ensure the authenticity of the data. And that is why it’s highly recommended to use HTTPS with Signed JWTs.

### Structure of JWT {#structure-of-jwt}
JWT structure is divided into three parts: header, payload, signature & is separated from each other by dot (.), and will follow the below structure:

 

![JSON Web Token(JWT) Structure](/blog/assets/2023/jwt-structure.webp)

 

- Header  
The header consists of two parts:  
1. The signing algorithm being used
2. The type of token, which is in this case mostly “JWT”  
- Payload
The payload usually contains the claims (user attributes) and additional data like issuer, expiration time, and audience.  
- Signature  
This is typically a hash of the header and payload sections of the JWT. The algorithm which is used to create the signature is the same algorithm mentioned in the header section of the JWT. Signature is used to validate that the JWT token wasn’t modified or changed during transit. It can also be used to validate the sender.  

The header and Payload section of the JWT is always Base64 encoded.


### How does JWT Authentication work? When to use JWT Authentication? {#how-does-jwt-authentication-work-when-to-use-jwt-authentication}

When it comes to API authentication and server-to-server authorization, JSON web token (JWT) is particularly a useful technology. In terms of Single Sign-On (SSO), it means that a service provider can receive trustworthy information from the authentication server. 

By sharing a secret key with the Identity Provider, the Service Provider can hash a part of a token it receives and compare it to the signature of the token. Now, if that result matches the signature, the SP knows that the information provided has come from the other entity possessing the key.

The following workflow explains the authentication flow:

![JSON Web Token(JWT) Authentication Workflow](/blog/assets/2023/jwt-workflow.webp)


1. User sign-in using username and password.
2. The authentication server verifies the credentials and issues a JWT signed using a private key.
3. Moving forward, the client will use the JWT to access protected resources by passing the JWT in the HTTP Authorization header.
4. The resource server then verifies the authenticity of the token using the public key.  

The Identity Provider generates a JWT certifying user identity, and the resource server decodes and verifies the authenticity of the token using the public key.

Since the tokens are used for authorization and authentication in future requests and API calls great care must be taken to prevent security issues. These tokens shouldn’t be stored in publicly accessible areas like the browser’s local storage or cookies. In case there are no other choices, then the payload should be encrypted.

### How JWT Single Sign-On (SSO) works for multiple web apps {#how-jwt-single-sign-on-sso-works-for-multiple-web-apps}
Single Sign-On (SSO) allows you to authenticate users in your systems and subsequently informs applications that the user has been authenticated. On successful authentication, a JWT token is generated and returned, which can be consumed by the app to create a user session. The token is automatically verified with the IDP when they sign in. The user is then allowed to access the apps without being prompted to enter separate sign-in credentials.  

This security mechanism allows applications to trust the sign-in requests it gets from the systems. Furthermore, these apps will only grant access to the users who have been authenticated by you/admin & hence Single Sign-On (SSO) relies on JSON Web Token (JWT) for securing the exchange of user authentication data. Great care must be taken in terms of how this token is stored and managed.

### miniOrange JWT Authentication for Apps that don’t Support Standard SSO Protocols {#miniorange-jwt-authentication-for-apps-that-dont-support-standard-sso-protocols}

**Usecase: Create a custom SSO between 2 existing and independent websites with their own user database**

With [miniOrange](https://www.miniorange.com/?utm_source=miniorange+Blog&utm_medium=Blog&utm_campaign=JWT+blog&utm_id=JWT+Blog-sso), you will be able to authenticate from existing User Stores and Identity Providers using protocols like SAML, OAuth OpenID, and SSO into websites that only support JWT Tokens. Yes, you heard it right. miniOrange provides Single Sign-On (SSO) for [JSON Web Token (JWT) apps](https://www.miniorange.com/iam/integrations/). This solution allows you to set up [Single Sign-On (SSO)](https://www.miniorange.com/products/single-sign-on-sso?utm_source=miniorange+Blog&utm_medium=Blog&utm_campaign=JWT+blog&utm_id=JWT+Blog-sso) into your applications (say existing or independent), which does not support SSO Standard Protocols (like SAML 2.0, etc).  

This is done using JSON Web Token (JWT) tokens, and it can be easily integrated with your application built in any framework or language. This allows you to enable SSO for any mobile app, client-side apps, static sites which don’t support any SSO standard protocols and are built on platforms like React.js, Firebase, Cordova, Angular.js, etc. 

![miniOrange integration flow with jwt token](/blog/assets/2023/mo-integration-flow-with-jwt.webp)

&nbsp;  

#### **miniOrange makes it easy to enable SSO for your application with a simple 3-step process. All you need to do is:**

1. Embed a simple script on your site/app
2. Configure your Identity Provider/user store in miniOrange (optional)
3. Add a JWT App  

&nbsp;  

That’s it!! You can choose to either manage users in miniOrange or choose an external Identity Provider/user store. You can even enable MFA on top of SSO with just a configuration change, no other script changes or coding required. 

&nbsp;  

&nbsp;

#### **Checkout miniOrange’s JWT SSO solution for Most Trending Apps:**

- [Thinkific SSO](https://www.miniorange.com/thinkific-jwt-single-signon(sso)-solution?utm_source=miniorange+Blog&utm_medium=Blog&utm_campaign=JWT+blog&utm_id=JWT+Blog-sso)
- [Webflow SSO](https://www.miniorange.com/webflow-single-sign-on-sso?utm_source=miniorange+Blog&utm_medium=Blog&utm_campaign=JWT+blog&utm_id=JWT+Blog-sso)
- [Squarespace SSO](https://www.miniorange.com/squarespace-single-sign-on-sso?utm_source=miniorange+Blog&utm_medium=Blog&utm_campaign=JWT+blog&utm_id=JWT+Blog-sso)
- [BigCommerce SSO](https://www.miniorange.com/bigcommerce-single-sign-on-sso?utm_source=miniorange+Blog&utm_medium=Blog&utm_campaign=JWT+blog&utm_id=JWT+Blog-sso)  

&nbsp;  

&nbsp;  

#### **Additional Helpful Links:**

- [Setup SSO authentication using JWT (JSON Web Token) | SSO for JWT apps | JWT Authentication| JWT SSO](https://www.youtube.com/watch?v=8lSsEQm_J6E)
- [Setup SSO for any JWT Application](https://www.miniorange.com/iam/content-library/admin-docs/how-to-add-jwt-app)
- [Popular apps that use JWT for SSO](https://www.miniorange.com/iam/integrations/)