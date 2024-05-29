---
id: "4bb3c218-4d0e-4d6c-ade5-f8e123f534f3"
title: "Shopify User Session Management"
description: "Shopify Case studies for User session management and adaptive authentication. Restrict Multiple Login by terminating existing session of users in Store."
metaTitle: "Shopify User Session Management"
metaDescription: "Shopify Case studies for User session management and adaptive authentication. Restrict Multiple Login by terminating existing session of users in Store."
keywords: "Shopify User Session Management, Adaptive Authentication in Shopify"
mainButtonLink: "https://apps.shopify.com/single-sign-onsso"
mainButtonText: "Add Application"
excerpt: "Shopify Case studies for User session management and adaptive authentication. Restrict Multiple Login by terminating existing session of users in Store."
thumbnail: "/blog/assets/2023/shopify-headless-sso.webp"
createdOn: "2023-10-26"
updatedOn: "2023-10-26"
ogTitle: "Shopify User Session Management"
ogDescription: "Shopify Case studies for User session management and adaptive authentication. Restrict Multiple Login by terminating existing session of users in Store."
ogImage:
  url: "/blog/assets/2023/shopify-headless-sso.webp"
category: ["concepts"]
tags:
  [
    Shopify Session Management,
    Shopify Adaptive Authentication,
    IP Restriction,
    SSO,
    Single Sign-On,
    MFA,
    2FA,
    Security,
    Multi-factor Authentication,
  ]
---

### What is a Session? {#What-is-a-Session}

Let’s first understand how a web application or website like [Shopify Store handles user access](https://plugins.miniorange.com/session-management-for-shopify). Generally, there are three layers of security mechanisms:

- Authentication
- Session management
- Access control

Using these mechanisms the Store makes the user communicate with the server so that the communication is secured and no attacker can trap the communication. When a user/customer signs in to a store, the server does not know who the person behind the system is. To solve this problem the server creates a session for that user and that session is used across several web pages. The server also creates sessions to keep track of anonymous users after their very first request.

### Session management in Shopify {#Session-management-in-Shopify}

In Shopify, once the session has been established a session id is generated and is sent to the user browser. To maintain the authenticated state and to keep track of the user’s progress, Shopify provides users with a unique session identifier during the creation of the session and is shared between the users and application until the session is terminated. An attacker or hacker can attempt to launch an attack on the active session and hijack them, so it is mandatory to set expiration timeouts for every session. **The shorter the session interval is, the lesser the time an attacker has to use the valid session ID.**

If the user logs out from the Store or doesn’t use the Store for some desired time then the session will be dead. A common scenario when the user state changes from authenticated to unauthenticated include password change, permission changes, etc. if that happens then the old session id must be terminated, and a new session id will be used for all further requests made to the Store application.

**If you are logged in to your Store admin on a device, sessions from that device aren’t counted as online store sessions.**

### Why do we need Adaptive Authentication? {#Why-do-we-need-Adaptive-Authentication}

When session management and user authentication are not configured correctly, attackers may be able to gain access to users’ accounts by compromising passwords and assuming their identities. Many development frameworks offer tools for secure implementation of session management, but there are weaknesses in any of these solutions. By implementing adaptive authentication we can remove this hassle. Adaptive authentication provides an additional layer of multi-factor authentication security based on risk and access provided by security administrators.

### What is Adaptive Authentication? {#What-is-Adaptive-Authentication}

Adaptive authentication is a type of multi-factor authentication that is a process of selecting the right authentication factors depending on a user’s risk profile defined and tends to adapt the type of authorization factors.

Adaptive MFA authentication prompts for Multi-Authentication counting on the behavior, device IP, Geo-Location of the user which directly improves security level to the very best.

### Adaptive Authentication in Shopify {#Adaptive-Authentication-in-Shopify}

When a user decides to sign in to a store, the security component is increased by activating an authentication step or by creating real-time Multi-Factor Authentication automatically when improper authentication is found or by detecting fraud. The authentication risk is checked without users being aware of it and multi-factor authentication (MFA) is applied only if the associated risk is high.

![adaptive-authentication](/blog/assets/2023/adaptive-authentication.webp)

Adaptive authentication adapts to the risk level and presents an appropriate level of authentication regardless of your corporate risk levels. Adaptive Authentication solutions can strengthen the authentication methods based on a wide variety of factors including:

- Source IP address
- Time of day
- Geo-location (physical location)
- Entity type (device type)
- Content-Based

Each time a user tries to Sign in to the Store, the request is evaluated and assigned a risk score. Depending on the risk score, the user may be required to provide additional authentication factors to prove the identity. For example, if a user tries to access Store via multiple devices, they may be asked to sign out from other devices. If the user tries to log in from a geographical location other than their office, they may have to verify their identity by answering a security question.

### Session Management and Adaptive Authentication Use Cases {#Session-Management-and-Adaptive-Authentication}

**Terminate user session and restrict Customer to one login at a time**

You are using Shopify to sell streaming videos that can only be accessed after purchasing the subscription. Suppose a shopper login to the store using his username and password and purchase products from the store. Consider a scenario where the user shares his account credentials with their friends so that they can access the store. Being a store owner you would like to discourage people from sharing their login credentials and prevent multiple people from using the same login credential at the same time to access the same account. You would like to restrict customer account to only being able to log in from one device at a time.

Assume the customer is already logged in from one device. When some other user tries to log in using the same credentials from another device then you would like to do one of the following:

- Either the App will prompt to log out from the first device and the app will not allow login from the second device until the user successfully logs out from the first device.

- The app will terminate the session on the first device without indicating anything to the user and will log the user in from the second device by creating a new session

You can use the miniOrange app on the Shopify store for restricting the number of users that are allowed to access the store using the same account credentials and at the same time.

In practice it will look like this: When ‘Device A’ login to the store, a session is established, and if ‘Device B’ calls the login function and log in using the same credentials as that of ‘Device A’ then this will revoke all sessions and invalidate ‘Device A’ and will log the user in from ‘Device B’ with a different session.

&nbsp;

**App that locks down the account to one location at a time**

You are an owner of a Shopify store where you sell car accessories.

Customers from all over the world are ordering the products from your store but you are able to ship the products only to some countries. You don’t want customers from other countries to access your Shopify store as you can’t deliver over there.

![location-restriction](/blog/assets/2023/location-restriction.webp)

You can use location-based adaptive restriction, then the admin will select the list of countries from where they don’t want the end-users to login. during the login process the user’s geolocation, IP address, latitude, longitude will be checked against the list of locations selected by the administrator, and based on that the access can be granted or denied.

&nbsp;

**App that restricts access to several devices for a single account**

Suppose you own a Shopify store where you provide a streaming service that offers a wide variety of TV shows, movies, anime, documentaries, etc. to the end-users on a subscription basis. A user logs in to the store and purchases a plan and shares his account credentials with some of his friends so that they can access the store without purchasing any plan. However, you have to take action against that customer asking them not to share their login info with friends, which is a challenging customer service task.

In this scenario, you would like to restrict the customer account to be able to log in from one device, or several devices depending upon the plan he has purchased. You want to discourage customers from sharing their accounts by preventing multiple people from accessing the content from the same account at the same time.

![device-restriction](/blog/assets/2023/device-restriction.webp)

The administrator can ask the end-user to add a fixed number of trusted devices from where they can access their account. If the end-user tries to log in to the store from the trusted/registered device then access will be provided to them but if they try to login using the unregistered device then access won’t be provided to them.

&nbsp;

**Limit Number of Sessions / Purchases for Single Customer or household**

Consider a scenario where you own a Shopify store to sell branded products such as T-shirts, pants, caps, etc. to any user residing in any country. You are offering to free delivery on the first purchase. But the customers are ordering the product in a single household from multiple accounts so that they don’t have to pay for the delivery cost.

Suppose a customer uses 3 different accounts and 3 different sessions to order the product so that he/she doesn’t have to pay delivery costs. If the customer is connected to the same network then the IP address will be the same for every device on that network. You can use our app that will allow you to limit the connections to the store by using IP- restriction. The admin can restrict the user from accessing the store by adding that IP address to the list of blocked IPs.

![ip-restriction](/blog/assets/2023/ip-restriction.webp)

Any attempt to connect to your store will be blocked without being allowed to even present a username and password unless the connection was initiated from the new IP address. You can purchase our additional feature “Block access from VPN” to restrict the customer if they are using a VPN to disguise their IP address and login into their account.
