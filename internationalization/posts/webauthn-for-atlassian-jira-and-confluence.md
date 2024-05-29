---
id: '234d154a-703b-4f00-9218-d1604c02ff9f'
title: 'Secure Data in Jira and Confluence using WebAuthn'
description: 'Passwords are difficult to remember, driving individuals to pick feeble ones and reuse them again and again. Passwords are additionally simple to phish, with security attacks that happen from time to time.'
metaTitle: 'webauthn-for-atlassian-jira-and-confluence'
metaDescription: 'Passwords are difficult to remember, driving individuals to pick feeble ones and reuse them again and again. Passwords are additionally simple to phish, with security attacks that happen from time to time.'
keywords: ''
mainButtonLink: ''
mainButtonText: ''
excerpt: 'Passwords are difficult to remember, driving individuals to pick feeble ones and reuse them again and again. Passwords are additionally simple to phish, with security attacks that happen from time to time.'
thumbnail: '/blog/assets/2023/web-password.webp'
createdOn: '2023-01-18'
updatedOn: '2023-11-08'
ogTitle: ''
ogDescription: ''
ogImage:
    url: ''
category: ['solution', 'atlassian']
tags:
    [
        'Confluence WebAuthn', 
        'Jira WebAuthn', 
        'WebAuthn',
    ]
---

## Secure Data in Jira and Confluence using WebAuthn {#secure-data-in-jira-and-confluence-using-webauthn}

Passwords are difficult to remember, driving individuals to pick feeble ones and reuse them again and again. Passwords are additionally simple to phish, with security attacks that happen from time to time. Even if you have a complex password set for your account, there are multiple ways in which it can be hacked.

&nbsp;&nbsp;

Even assuming your password is uncovered and ends up with a hacker, if you utilize WebAuthn, they actually can’t break your record. That is the thing that makes WebAuthn such a strong security initiative.

### What is WebAuthn? {#what-is-webAuthn?}

WebAuthn or Web Authentication API permits web applications to integrate secure verification for both multi-factor and single-factor authentication. Utilizing WebAuthn, web applications can build security to prevent phishing attacks and ease user experience with passwordless verification. This means your Jira or Confluence can be easily configured to use your device’s FaceID recognition, Fingerprint, or any hardware token. In this way, your users don’t need to remember a password for each login, and the login experience will completely be passwordless. 

&nbsp;&nbsp;

The Web Authentication API (otherwise called WebAuthn) is composed of the W3C and FIDO. The API permits workers to enlist and confirm clients utilizing public key cryptography rather than a password. As of January 2019, WebAuthn is supported on Chrome, Firefox, and Edge, and Safari.

**Is this all you need? What if you could decide how your users log in to Jira and JSM?**

We provide additional features on top of your Atlassian native SSO, miniOrange’s [advanced option for the SSO plugin](https://marketplace.atlassian.com/apps/1229209/advance-options-for-atlassian-sso?hosting=datacenter&tab=overview).

Contact Us – Drop us a mail at **info@xecurify.com** or [raise a ticket here](https://miniorange.atlassian.net/servicedesk/customer/portal/2) to talk to us.

&nbsp;&nbsp;

Since the basic use case of SSO is satisfied by the Native SSO already, hence we decided to enhance the functionality of SSO by offering two distinct features :- 

1. SSO Redirection Policy
- Default rule (redirect to URL or IDP)
- Domain based redirection
- Group based redirection
 
&nbsp;&nbsp;

2. SSO Authentication Template
- Login Template
- Logout Template

1. SSO Redirection Policy:
This allows the users to have a set of rules that will decide how users will log in to Jira and JSM. Depending on the configuration, you can choose which users need to be re-directed to the configured IDP or the login page. Every end-user will be required to enter the username or email address, then they will be matched against some pre-configured rules by the admin.

- Default rule –

URL or IDP – enabling this rule will redirect your users directly to the intended URL or IDP without clicking on any buttons or links.
- Domain based redirection –

This redirects the users to the configured IDP or Jira login page on the basis of the domain of the user.
- Group based redirection –

It redirects the users to the IDP or Jira login page on the basis of the groups they belong to. 

You can set multiple rules and decide their order of priority.

&nbsp;&nbsp;

2. SSO Authentication Template :–
We understand the importance of visual aesthetic and ease of understanding! This is exactly what this feature does, it gives the flexibility to the user to design their login and logout template as per their requirement. They can make it visually appealing or customize it as they like to.

&nbsp;&nbsp;

**Design the UI of login template:**

- Custom login template : To enhance the look and feel of login page UI custom login template will allow you to customize and display an easy-to-use login page to the end-users.
- Custom logout template : Pretty similar to login template, it can be used to change the message after the user has logged out and show any custom message.

Wait! That’s not all. We have some exciting upcoming features too 

- Advance on-the-fly group provisioning
- Manual group mapping
- Group filter
- Group regex
- Additional user properties

### How do you achieve this? {#how-do-you-achieve-this}

**Our WebAuthn plugin is here to solve all of your security issues!**

The [miniOrange WebAuthn plugin](https://marketplace.atlassian.com/apps/1225055/mo-webauthn-passwordless-login-for-jira?hosting=datacenter&tab=overview) doesn’t request a secret key or any password. This is because it makes a one-time verification token each time you sign in, it fundamentally follows the suggested security practice of making a secure password for each site. 

&nbsp;&nbsp;

What’s more, does it use your device’s in-built fingerprint scanner or face scanner or your local credentials? Yes, it does and it does not require any additional hardware which you have to invest in or need to carry all the time, you can simply use your own device’s authenticator to log into your Atlassian applications (Jira, Confluence, Bitbucket etc) securely.

&nbsp;&nbsp;

WebAuthn upholds two fundamental classifications of validation: **biometrics and hardware security tokens.** 

&nbsp;&nbsp;

### What’s the secret behind WebAuthn how does it work? {#whats-the-secret-behind-webauth?}

An important aspect of understanding WebAuthn is public keys. Public keys can be shared with everyone in the system and anyone can use it. Once the sender has the public key, he uses it to encrypt his message.

&nbsp;&nbsp;

Each public key comes paired with a unique private key. Think of a private key as the key to the front door of a business where only you have a copy. The private key ensures only you can get through the front door.  

&nbsp;&nbsp;

Together, these keys help to ensure the security of the exchanged data. A message encrypted with the public key cannot be decrypted without using the corresponding private key.

### How does our plugin work? {#how-dows-our-plugin-work}

Our WebAuthn add-on for [JIRA](https://marketplace.atlassian.com/apps/1225055/mo-webauthn-passwordless-login-for-jira/version-history), [Confluence](https://marketplace.atlassian.com/apps/1225056/mo-webauthn-passwordless-login-for-confluence/version-history), and [Bitbucket]{https://marketplace.atlassian.com/apps/1225057/mo-web-authentication-api-webauthn-for-bitbucket?hosting=server&tab=overview} allows administrators to manage authentication for individuals or groups of users. You can enable WebAuthn for specific users or groups of users, depending on who you believe needs this feature the most.

If a user is experiencing issues with their authenticator, the admin can reset the configuration for that user from the plugin or allow that user to bypass the WebAuthn authentication, so they can access the Atlassian Applications.

![Webauthn](/blog/assets/2023/webauthn-architecture-diagram.webp)

User Authentication requests will be sent using local authenticators. Successful authentication will generate a key pair (public key, private key). Out of which, the public key will be stored in a remote database and the private key will be kept with the local machine.

&nbsp;&nbsp;

These two keys will work together to provide the system with an extra layer of security and improve user experience.

&nbsp;&nbsp;

While using the WebAuthn, users will be asked to set up the local authenticator to sign in to the Atlassian application, by providing valid credentials.
&nbsp;&nbsp;

![Webauthn](/blog/assets/2023/configure-web-auth.webp)

After successful registration of their authenticators, from next time users can use those for logging into their Atlassian application without any hassle.


### Conclusion {#Conclusion}

Welcome to the promised land in the form of passwordless login. This new method offers just that, a way to remove the need for a password and have automated login via a device/biometric – no second factor  – **WebAuthn is the only factor**. WebAuthn is based on public-key cryptography.

In a nutshell, signatures are sent between a relying party (usually website) which stores the public key, and an authenticator (device or browser) and a biometric to authenticate you to the device – it’s neat, it’s easy to implement, it has some excellent security features that can help with the safety of your data, prevent phishing using biometric – and a panacea to authentication.


Contact Us – Drop us a mail at **info@xecurify.com** or [raise a ticket here](https://miniorange.atlassian.net/servicedesk/customer/portal/2) to talk to us.



