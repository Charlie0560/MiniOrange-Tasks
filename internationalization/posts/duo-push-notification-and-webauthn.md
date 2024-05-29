---
id: '1c0f6daa-1110-457a-8cf8-4579976e207e'
title: 'Duo push notification and webauthn as 2FA for atlassian apps'
description: 'Duo Push Notification your users don’t need to wait for a code or OTP and type it. Instead they will just tap the tick mark and the authentication is done.'
metaTitle: 'Duo push notification and webauthn as 2FA for atlassian apps'
metaDescription: 'Duo Push Notification your users don’t need to wait for a code or OTP and type it. Instead they will just tap the tick mark and the authentication is done.'
keywords: ''
mainButtonLink: ''
mainButtonText: ''
excerpt: 'Duo Push Notification your users don’t need to wait for a code or OTP and type it. Instead they will just tap the tick mark and the authentication is done.'
thumbnail: '/blog/assets/2023/duo-push-notification-and-webauthn.webp'
createdOn: '2022-11-30'
updatedOn: '2022-11-30'
ogTitle: ''
ogDescription: ''
ogImage:
    url: ''
category: ['latest', 'atlassian']
tags:
    [
        'Duo push notification',
        'Two factor Authentication',
        'Atlassian Cloud OIDC SSO',
        '2FA',
        'MFA',
    ]
---

## Duo push notification and webauthn as 2FA for atlassian apps {#duo-push-notification-and-webauthn}

Your accounts are password protected but they might still not be secure. Hackers out there are lurking to hack into your accounts by taking advantage of weak passwords, vulnerabilities, or leaks in data.

We have got you covered!

All you have to do is install [Two Factor Authentication](https://marketplace.atlassian.com/search?query=two%20factor%20authentication%20miniorange) app and leave the rest to us.

[Two Factor Authentication](https://marketplace.atlassian.com/search?query=two%20factor%20authentication%20miniorange) also known as two-step verification adds an additional layer of security to your already existing authentication credentials namely username and password. Any unauthorized access to your account is restricted to a large extent by making it more difficult to hack into an account. 2FA is not provided by Atlassian in Server and Data Center versions and hence you can use miniOrange’s two factor authentication app to strengthen your Jira and Confluence access and avoid losses due to passwords.

Our miniOrange app provides various 2FA authentication methods like OTP over email, OTP over SMS, Google authenticator, Security questions, Yubikey hardware token, WebAuthn (Windows Hello/Apple ID), etc.

We have recently introduced the support for Duo Push Notifications. It is one of the popular 2FA methods.

### What makes Duo Push Notification so special and different from other 2FA methods? {#what-makes-duo-push-notification-so-special-and-different-from-other-2fa-methods}

OTPs, security questions, authenticators, hardware tokens, etc, all require the user to enter a one-time code or some form of text to authenticate the user and let him or her log into their Jira or Confluence. Since this is an extra effort on the user’s end, it increases the resistance and reduces adoption of Two factor authentication by users.

With Duo Push Notification your users don’t need to wait for a code or OTP and type it. Instead they will just tap the tick mark and the authentication is done.

Duo Push Notification is a feature of the 2FA mobile app, Duo. When any user initiates a request to access an account by entering their username and password, Duo app sends a push notification to the user’s device where they simply need to Accept or Reject the request. This way you are using another device and increasing the security multifold. And the way in which authentication is being done is convenient and hassle-free for the users.


### Now that’s easy hassle free and effective isn’t it? {#now-that’s-easy-hassle-free-and-effective-isn’t-it?}

It is the fastest and the easiest way to log in securely into your accounts. As there are no codes or OTPs in Duo Push Notification that the hackers can steal and hence Duo Push is very effective against man-in-the-middle attacks.

Now, I am not saying that the other two factor authentication methods aren’t good but let’s say you are a bit lazy and you don’t feel like entering the OTP sent over SMS, Email or Google authenticator then Duo Push Notification is just for you.

We also provide another Two Factor Authentication method known as **Webauthn** which is just as convenient and secure as Duo Push Notification.

### What is Webauthn? {#what-is-webauthn}

WebAuthn enables users to authenticate via third-party authentication providers. An authentication provider is a system like Windows Hello, Apple ID, Android biometrics, or even an external device, like a hardware token which can be used to allow users access to the system.

Our 2FA app lets users use authentication providers like Windows Hello as a second method of authentication. It is also a very convenient way as users already use it. No adoption is required &  users don’t need to switch devices, which they do while using other methods like OTP.

![Webauthn](/blog/assets/2023/duo-push-notification-and-webauthn.webp)

Let’s understand the above diagram –

**Passwords** – Passwords might not always be secure but it also comes with the inconvenience of remembering many passwords and typing them every time you login. They can be compromised easily as people tend to reuse the passwords at many places.

**OTP** – One time password or OTP is one of the secure methods of authentication but it seems a bit inconvenient as one has to wait for the OTP to arrive or open the app and then type it down.

**Push Notifications** – Duo Push Notification is one of the most secure and convenient of all the two factor authentication methods as you just have to Allow or deny the request.

**WebAuthn** –  xWebauthn is another secure and most convenient authentication method as it helps you authenticate via the same workstation.

To know more about two factor authentication and how to protect your Atlassian applications check out our previous blogs :-

1. [Secure your Jira with 2FA (OTP over SMS/ Email)](https://blog.miniorange.com/secure-your-jira-with-2fa-otp-over-sms-email)
2. [Double-Up your Atlassian Security with MFA!](https://blog.miniorange.com/double-up-your-atlassian-security-with-mfa/)
3. [How to secure Atlassian cloud applications](https://community.atlassian.com/t5/Atlassian-Access-articles/How-to-secure-Atlassian-Cloud-Applications/ba-p/1728600) 
4. [Enable 2FA on Jira for your Customers and skip 2FA for Employees!](https://community.atlassian.com/t5/Jira-articles/Enable-2FA-on-Jira-for-your-Customers-and-skip-2FA-for-Employees/ba-p/1719062)a