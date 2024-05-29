---
id: 'ad3ba5d5-f2d2-46ca-9f53-2883d4725811'
title: 'Double-Up your Atlassian Security with MFA!'
description: 'Multi-Factor Authentication (MFA) is an authentication method that requires the user to authenticate themselves for two or more factors, in order to gain access to company resources, applications, or a VPN.'
metaTitle: 'Double-Up your Atlassian Security with MFA!'
metaDescription: 'Multi-Factor Authentication (MFA) is an authentication method that requires the user to authenticate themselves for two or more factors, in order to gain access to company resources, applications, or a VPN.'
keywords: ''
mainButtonLink: 'https://miniorange.atlassian.net/servicedesk/customer/portal/2/group/6/create/66'
mainButtonText: ''
excerpt: 'Multi-Factor Authentication (MFA) is an authentication method that requires the user to authenticate themselves for two or more factors, in order to gain access to company resources, applications, or a VPN.'
thumbnail: '/blog/assets/2023/mfa.webp'
createdOn: '2022-11-08'
updatedOn: '2022-11-08'
ogTitle: ''
ogDescription: ''
ogImage:
    url: ''
category: ['latest', 'atlassian']
tags:
    [
        '2FA',
        'Atlassian Access',
        'atlassian Cloud',
        'Authentication',
        'MFA',
        'security',
        'SSO',
    ]
---

### Double-Up your Atlassian Security with MFA! {#double-up-your-atlassian-security-with-mfa}

miniOrange stands as a reputed partner and provider of security and SSO solutions for multiple platforms being WordPress, Joomla, Shopify, Drupal & many more, within the industry. Built on a strong foundation of security fundamentals, we provide secure and reliable Identity and Access Management (IAM) solutions that integrate seamlessly with the customer’s existing frameworks. We provide SSO solutions for all the Atlassian applications using protocols like SAML, OAuth 2.0, OIDC, etc. SSO enables users to securely authenticate with multiple applications by logging in only once – with just one set of login credentials. miniOrange has grown from its initial size of 4 to 150+ now. The company was built from the ground up by a group of experienced technology architects, with a background in security themselves.


Unwilling to continue in their day jobs, the team began miniOrange. Having a deep understanding of security, the miniOrange team applies their technical expertise to create unique and helpful solutions to the needs and challenges of the industry. The company aims to give organizations the ability to securely manage access to all of their web based applications in one place. We are growing day by day and will continue to do so!

&nbsp;&nbsp;

The miniOrange’s expertise in Identity And Access Management (IAM), Single Sign-On, Multi-factor Authentication, Network Security, API Security, Cyber Forensics. The central focus of our products and company revolve around these themes. Our solutions are specific, accurate and, most importantly, great at doing what they’re supposed to: Making you more secure!


### What is MFA/2FA ? {#what-is-mfa/2fa}

Multi-Factor Authentication (MFA) is an authentication method that requires the user to authenticate themselves for two or more factors, in order to gain access to company resources, applications, or a VPN. Enabling Multi-Factor Authentication (MFA) means that users need to provide additional verification factors apart from their username and passwords. These second-factor methods can range from OTP over SMS, OTP over Email, Push notification, Google/Microsoft authenticator, and many more. 

&nbsp;&nbsp;

Having this extra layer of security ensures that the information being accessed is well protected from activities such as phishing, malware, hacking, and many more. Having a strong MFA setup ensures a robust Identity and Access Management (IAM) for your organization and secures your resources.

![2fa](/blog/assets/2023/configure-two-factor-authentication.webp)


The goal of leveraging MFA is to boost security and make a layered defense so that even if one factor (username-password) is stolen, the cyber attacker still has at least one more barrier to breach before successfully breaking into the actual targeted device. The second barrier is also usually harder to breach as compared to simple username passwords.

### How does it work? {#how-does-it-work}

One of the first steps of access control is the identification and authentication of users. There are three common factors used for authentication:

- Something you know (such as a password)
- Something you have (such as a smart card)
- Something you are (such as a fingerprint or other biometric method)

Identification occurs when a user professes an identity (such as with a username), and authentication occurs when users prove their identity. For example, users are authenticated when they provide both their username and correct password. Permissions, rights, and privileges are then granted to users based on their proven identity.

![MFA](/blog/assets/2023/mfa.webp)

### Our Products {#our-products}

![products](/blog/assets/2023/our-mfa-products.webp)

&nbsp;&nbsp;


We offer MFA for Server, Data Center & Cloud. 

- For Server & Data Center, it’s available for **Jira, Confluence, Bitbucket, Bamboo & Crowd.**
- For Cloud, we have a solution available for **Jira, Confluence and Bitbucket.**

### Features Our MFA Addons Provide {#features-our-mfa-addons-provide}

#### Supported MFA Methods

We have highest number of supported methods for MFA:
Mobile Authenticator (TOTP)

1. OTP over Email
2. OTP Over SMS
3. Hardware Token (Yubikey)
4. WebAuthn
5. Duo Push Notification
6. Backup Methods
7. Security Questions
8. Backup Codes

Admin options for User management

1. Enable 2FA for Jira Software and/or Jira Service Desk
2. Choose 2FA methods for end users
3. Enable, Disable & Reset 2FA for users 
4. Enable 2FA based on groups
5. Skip 2FA for a specific group

### Security {#security}

#### 2FA for Jira Service Desk 

2FA for Service Desk is the most used feature of our addon. In organizations, there are two types of users – one is employees and the other is customers. 

The employees use multiple applications (Jira, Confluence, Bitbucket, Jenkins, Sonarqube, etc) and usually there is one central application used to manage all the users at one place, which is known as an IDP(Identity provider). So organizations connect all the applications to the IDP and users login using Single Sign on. And along with Single sign on, they also enable second factor authentication on the IDP itself. 

In Jira Service Desk, as the customers are unlicensed users, they are usually managed on the Jira itself. We allow 2FA for those customers as well. 


#### Brute Force Protection

Brute Force Attacks are hacking methods that use trial and error methods to guess user credentials and gain unauthorized access. 

In the case of 2FA,  there are Brute Force 2FA Attacks. Here hackers first get the credentials and then try all the combinations of the OTP code (which is generally 6 digit) to gain unauthorized access.

Using the Brute force protection feature, you can restrict the number of continuous invalid 2FA attempts, making it impossible for the hacker to guess the OTP.

### Usability {#usability}

#### IP Whitelisting 

Here you can whitelist a range of IPs and the plugin will skip 2FA if the user is trying to login there which improves the usability of users. 

During the pandemic many organizations introduced 2FA. As employees started working from home, they were no longer logging in from the secure company’s Network. So it becomes easier for intruders to get into systems. And to solve this issue, they introduced 2FA. 

Here the IP whitelisting feature helps improve the usability of the employees. The admin can whitelist all the IPs inside the company network. So now if an employee tries to login from within the company’s network then 2FA will be skipped for that user. And if the same user tries to login to Jira from home (via some other laptop or from mobile phone) then the 2FA will be enforced.

#### Remember My Device

This feature helps a user mark some devices as trusted devices. 

So from next time 2FA will be skipped on that device for that user. So users don’t have to enter the 2nd factor again and again.

### 2FA For Atlassian Cloud {#2fa-for-atlassian-cloud}

To enable MFA on Atlassian cloud, you need Atlassian Access. It is a separate module created by Atlassian to provide functionalities like Single Sign on, 2FA and user management for all the cloud applications.

It supports two 2FA methods.

- Mobile Authenticator
- Backup Codes.

If these 2FA methods are sufficient to your organization then you can directly use Atlassian Access. 

**There are two limitations in Atlassian Access:**

1. It supports only 2 basic 2FA methods.
2. It does not allow using SSO and 2FA at the same time for a user.
miniOrange cloud 2FA solution overcomes these limitations. There are a total 3 important use cases where miniOrange cloud 2FA solution will be used:

**Case 1:**

Suppose you are already using 2FA methods like OTP over Email in your organization and you want to enable the same for Atlassian Cloud apps. Then Atlassian Access won’t be sufficient. Here you can use the miniOrange solution where almost all the 2FA methods are supported.

![2fa-methods](/blog/assets/2023/methods-of-2fa.webp)

**Case 2:**

Second case is, your users are stored on an Identity Provider(IDPs), your users login using SSO into Atlassian Applications and you want to enforce 2FA for your users. As Atlassian Access does not allow SSO and 2FA at the same time, it adds a compulsion on Identity Providers to have inbuilt support for Two Factor Authentication. But even many popular Identity Providers like ADFS, Keycloak, Auth0 and Shibboleth don’t support 2FA. Here miniOrange Identity Broker Solution can be used.

![atlassian-cloud](/blog/assets/2023/atlassian-cloud.webp)

**Case 3:**

Third case is, your users are stored on an IDP and your IDP supports 2FA as well. But it does not support the 2FA method that you want, (which you are already using in your organization).

**Contact:  atlassiansupport@xecurify.com**
**Visit: [www.miniorange.com/atlassian](https://www.miniorange.com/atlassian)**