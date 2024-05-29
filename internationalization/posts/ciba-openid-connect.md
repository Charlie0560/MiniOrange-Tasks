---
id: '43c98abe-62b0-47df-8d57-59fd9b2c7fbb'
title: 'CIBA – An Introduction To OpenID CIBA'
description: 'In CIBA, the client application and authentication server are 2 separate devices - Decoupled. They communicate via the backchannel.'
metaDescription: 'In CIBA, the client application and authentication server are 2 separate devices - Decoupled. They communicate via the backchannel.'
keywords: ''
mainButtonLink: ''
mainButtonText: ''
excerpt: 'In CIBA, the client application and authentication server are 2 separate devices - Decoupled. They communicate via the backchannel.'
thumbnail: '/blog/assets/2023/openid-ciba.webp'
createdOn: '2022-07-20'
updatedOn: '2022-11-02'
ogTitle: 'CIBA – An Introduction To OpenID CIBA'
ogDescription: 'In CIBA, the client application and authentication server are 2 separate devices - Decoupled. They communicate via the backchannel.'
ogImage:
url: ''
category: ['IAM','concepts']
tags:
  [
    'CIBA',
    'Decoupled Flow',
    'FAPI',
    'OpenID CIBA'
  ]
---

**CIBA is a Decoupling Flow that decouples the client application also known as Relying party and authentication server.**

We come across front channel authentication flows all the time, like [OAuth 2.0](https://www.miniorange.com/iam/solutions/oauth-single-sign-on-sso), [SAML](https://www.miniorange.com/what-is-saml) flows. For instance, when you try to log into YouTube. On clicking the ‘Sign In’ button, the request is sent to ‘accounts.google.com’ by browser redirect through the front channel. There you can authenticate yourself and grant access to YouTube. This is an example of Redirect Flow.

Redirect Flows work well for the scenarios where the client application and authentication server are on the same device.

Now, the question is – Are there any scenarios where the device on which client application is running, and the device on which the user authentication happens must be two separate devices?

### WHAT IS CIBA? {#what-is-ciba}

**CIBA** (Client Initiated Backchannel Authentication) is an extension to the traditional OpenID Connect flow. In CIBA there is a direct Relying Party(Client Application) to OpenID Provider communication without redirects through the user’s browser.

Put simply, The client application and the authentication server are on two separate devices – Decoupled . CIBA is a Decoupling Flow that decouples the client application and authentication server. The authentication server and the client application communicate via the backchannel (Server to server communication).

In CIBA, user interaction at the consumption device is not a necessity, unlike other redirection flows. CIBA itself can initiate the authentication flow for the specified user. Therefore, to authenticate, we do not need multiple browser redirects as in the case of Authorization code flow and implicit flow. 

### WHY WE NEED CIBA? {#why-we-need-ciba}
Let us understand this using an example –

For instance, you book an Uber. The cab arrives and takes you to your destination. As usual, you click on the ‘Pay using UPI’ button. It detects the UPI application on your device and redirects you to that application, let’s say Google Pay. You authenticate yourself by providing the UPI Pin and click on ‘Pay’. However, your account balance is low. Therefore, you call your friend and ask them to pay. But here the problem is we’re using a **redirect flow** i.e., as soon as you click on the ‘Pay’ button the Uber app redirects you to your banking app. Now how do you make it redirect to your friend’s app? the client application (Uber app) and the authentication server app (your friend’s Google Pay) have to be on the same device.

Now let’s consider the same scenario, but with the **decoupled flow** –

At the time of the payment, let’s suppose you are asked to enter the UPI ID. Instead of redirecting to the payment app, the UPI ID holder is notified to either make or decline the payment to the client application, Uber. In other words, there is no redirection. In this flow, you can enter your friend’s UPI and they will receive a notification like the one shown in the below image. And therefore, can make the payment using their device. Hence, as soon as the payment is done, the client application, Uber is notified. Voila!

![Example of Decoupled Flow](/blog/assets/2023/example-of-decoupled-flow.webp)

Considering the scenario above, *there is indeed a need to have decoupled flow*.

### CIBA WORKFLOW {#ciba-workflow}

To understand the workflow of CIBA properly, let us first look at this simplified CIBA flow image.

![simplified CIBA flow](/blog/assets/2023/simplified-ciba-flow.webp)

**Components in the flow** –

- **Client Application** – A third-party application that provides a service, for instance, Uber.
- **Authentication server** – The server on which end-user authentication and consent confirmation are performed, for instance, mobile phone.
- **Authorization Server** –  The server that issues the OAuth Client tokens to the client application, for instance, Google Pay Authorization Server.
- **User** – The resource owner whose interaction is needed at the authentication server, for instance, Payer

### UNDERSTANDING THE FLOW {#understanding-the-flow}

**1. Flow Initiation** – The client application and Banking Authorization server communicate via the backchannel. Therefore, the client application sends an HTTP POST request to the Banking authorization server.

![Flow Initiation](/blog/assets/2023/flow-initiation.webp)

**2. End-User Authentication and consent confirmation** – Upon receiving the HTTP request, the authorization server delegates the task of end-user authentication and consent confirmation to the authentication device.

![End-User Authentication and consent confirmation](/blog/assets/2023/authentication-and-consent-confirmation.webp)

**3. Issuing Tokens** – In CIBA flow, we do not need HTTP browser redirects to issue tokens to the client application because the authorization server and client application can communicate directly via the backchannel.

![Issuing Tokens](/blog/assets/2023/issuing-tokens.webp)

In CIBA, there are three flows after consent confirmation. They are called **POLL mode**, **PING mode**, and **PUSH mode**. An ID token, an access token, and optionally a refresh token are issued in every flow.

- **POLL mode** – In POLL mode, after getting a response from the backchannel authentication endpoint, **the client repeats token requests** (polling) to the token endpoint. If the process on the authentication device has not finished yet, the token endpoint returns ‘400 Bad request’ with JSON including “error”:” authorization_pending”. Therefore, the client repeats token requests until it receives the tokens or gets a time-out error.
- **PING mode** – In PING mode, the authorization server sends a notification to the **client notification endpoint** after the process on the authentication server is complete. After that, the client application makes a token request to the authorization server.
- **PUSH mode** – In push mode, when the processing on the authentication server is completed, the **authorization server generates the id_token, access_token**, and refresh_token (optional) and delivers it directly to the client notification endpoint. Therefore, the client application doesn’t need to make a token request.

### CIBA USE CASES {#ciba-use-case}

- When the user can not trust the relying party (client application) and therefore, cannot create a session in their browser to give authorization. Eg. The sales terminal at the shopping center. To pay at the shopping mall, you wouldn’t want to create your banking session on their device, for instance. Rather, you’d prefer to receive some OTP and authorize that transaction from your own device because you don’t trust the client application.
- When the user doesn’t have access to the relying party. Eg. The cases similar to the example we gave above. Where your friend doesn’t have access to your Uber app and still wants to authorize the transaction. 
- When the relying party doesn’t have a browser, eg. IoT. If you want to switch ON the microwave (relying party) from your device.

### CONCLUSION {#conclusion}

In conclusion, for all the above usecases, the common thing is that we have **strongly authenticated session**s on our mobile devices. 

**The only limitation is – we can’t have those sessions in the relying party.**

What if we want to authorize another device, then we need to create an authentication session on that device. But what if we can just bypass all of that. Especially, in the case of banking applications. 

### RESOURCES AND FURTHER READING {#resources-and-further-reading}

- [OAuth APIs in miniOrange](https://developers.miniorange.com/docs/idp/api/oauth-api)
- [OpenID API guide](https://developers.miniorange.com/docs/idp/api/openid-api)
- [miniOrange Identity Provider- SSO, MFA, Adaptive Authentication, and much more.](https://www.miniorange.com/)