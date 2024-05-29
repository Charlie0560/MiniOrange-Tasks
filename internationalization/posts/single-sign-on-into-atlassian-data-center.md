---
id: '0794a426-7d82-4eb4-99e1-fe2aeaa6a379'
title: 'Best way to Secure Your Atlassian Data Center (DC)'
description: 'Two-factor authentication (2FA) adds an extra layer of security to your Jira account by requiring a one-time code (OTP) in addition to your password. To enable 2FA on Jira using OTP over SMS or email, miniOrange provides add-on for Atlassian Jira. 2FA benefits include increased security, reduced risk of data breaches, and compliance with regulations.'
metaTitle: 'Secure Atlassian Data Center with Single Sign-On (SSO) & 2FA/MFA'
metaDescription: "Secure Atlassian DC using 2FA and Apps like Jira DC, Confluence DC using miniOrange Single Sign-On(SSO) with additional security of Two-Factor Authentication for Data Center."
keywords: ''
mainButtonLink: 'https://miniorange.atlassian.net/servicedesk/customer/portal/2/group/6/create/66'
mainButtonText: ''
excerpt: 'Protect your Jira and Confluence Data Center Security with two-factor authentication (2FA). Add an extra layer of security to your Atlassian applications and generate single-use codes for each login.'
thumbnail: '/blog/assets/2023/miniorange-single-sign-on-thumbnail.webp'
createdOn: '2021-11-29'
updatedOn: '2021-11-29'
ogTitle: ''
ogDescription: ''
ogImage:
    url: ''
category: ['atlassian']
tags: ['2FA', 'Atlassian 2FA', 'Atlassian Cloud SSO', 'Atlassian Data Center', 'SSO']
---

**What is Atlassian Data Center?**

Let’s lay out the foundation on what exactly is Data Center first. In comparison, Server and Data Center differ in that, Data Center allows multiple application servers to run simultaneously, while Server only allows one application server. For this reason, Atlassian Data Center provides high availability and performance for critical Atlassian applications including Jira Software, Confluence, Bitbucket, Jira Service Management, Crowd, and Bamboo on an Enterprise level. Thus Data Center Security is of great concern and basic SSO alone doesn’t suffice. Bearing a full scale Organisation in mind, how do you go ahead and Secure Atlassian DC using 2FA? Let’s figure this out.

**Why should you secure your Atlassian Data center applications?**

We use a variety of applications in our daily lives, and we all understand how important it is in the present era to have security and prevent our data from being exposed to hackers. 

Let’s consider an example where you want to make an online transaction. You use credentials to protect your account from unauthorized access. While making a payment, you have to verify the credentials. This acts as the first line of defence. But there is still room for a hacker to gain access to your banking details compromising your security. So, another layer of authentication is added in the form of an ATM pin or OTP over SMS or email. This serves as the second security measure. Only after both steps does your payment go through. 

Similarly, here your Atlassian applications like JIRA, Confluence, and Bitbucket contain confidential information associated with your account and your organization which must not get in the wrong hands. Making it perennial to Secure Jira Data Center and Secure Confluence Data Center. This content can be protected using our plugins. Not only will our plugin add an extra layer of security, but it will also ensure that the usability and login experience of the users is not compromised.

In this article, we will go over the fundamentals of how to Secure Atlassian DC apps with the help of SSO and 2FA and how they should be used with Atlassian applications. Let’s start understanding it step by step.

Let’s understand what Single Sign-On (SSO), Two-Factor Authentication (2FA) or Multi-Factor Authentication (MFA) are and how they can be used to Secure Atlassian DC using 2FA.

### Single Sign-On (SSO) {#single-sign-on}  

SSO is an authentication process that allows a user to login into a variety of applications using a single set of credentials i.e username and password. miniOrange with its SAML SSO applications also supports login into widely used Atlassian applications and Secure Jira Data Center and Secure Confluence Data Center, Bitbucket, Bamboo, and Fisheye. A single set of credentials can be used to access all and Secure Atlassian DC applications without having to enter the credentials again and again.

![With SSO vs Without SSO comparison](/blog/assets/2023/dc-sso-login-comparison.webp)

### Two-Factor Authentication (2FA) {#two-factor-authentication}

Two-Factor Authentication or 2FA is a security process in which two sets of information are required for authentication i.e something you know along with something you have. For example, you know your login credentials for Atlassian’s Jira such as username and password along with an OTP or a Security token that you have. Two Factor Authentication for Data Center ensures that you can be the only one to access your account. 

### Multi-Factor Authentication (MFA) {#multi-factor-authentication}

Multi-Factor Authentication (MFA) is an authentication process in which a user has to provide multiple factors of authentications in order to gain access to Atlassian Data center. Rather than just asking for a username and password, Multi-Factor authentication adds additional verification factors such as OTP, push notifications and biometrics that help in adding an extra layer of security to your Atlassian application. Multi-Factor Authentication for DC adds more security over Two Factor Authentication for Data Center.

**How does Two-Factor Authentication (2FA) solve username and password problems?**

Atlassian products such as Jira, Confluence are used by all of us, each for a different purpose. To protecting Data Center Security for Jira and Confluence applications with just a username and password is not enough. Therefore adding an extra layer of authentication such as 2FA makes our application more secure and generates single-use code that is either shown in their security token or sent as a text message to a mobile phone. **Two-Factor Authentication for Data Center** protects your devices, accounts, and data from security breaches, phishing, and password brute-force attacks. With the 2FA security enabled from your side, knowing the password alone is not enough for cyber attackers to pass the security check, rest assured having secure Atlassian DC access in your hands.

![miniOrange 2fa working process](/blog/assets/2023/atlassian-2fa-working-process.webp)

**How do SSO and Two-Factor Authentication for Data Center work together?**

Authentication methods such as SSO makes login easier for us. But many times it is seen that people use only a single set of credentials for multiple applications and also save those credentials online. Errors like these can lead to severe data loss. To overcome such flaws, Two-Factor Authentication for Data Center Security can be implemented along with SSO which will add an extra layer of security for data protection.

![miniOrange 2fa with SSO working process](/blog/assets/2023/atlassian-2fa-and-sso-working-process.webp)

There are few ways through which Data Center SSO + 2FA can be implemented together:

- When your Identity Provider(IdP) or Identity Access Management(IAM) supports 2FA, your users will be prompted for 2FA along with Single Sign On.
- When your Identity Provider (IdP) does not support 2FA, you can use an add-on present in the Atlassian marketplace
- Setting up 2FA using add-on in Atlassian for customers who do not use SSO, like clients or customers, while employees can use 2FA in their Identity Provider (IdP) through SSO.

**Identity Providers (IdPs) that support 2FA –**

If you are currently using a commercial Identity Service, you will be offered several choices to implement and Secure Atlassian DC using 2FA. There are a lot of ways through which one can go passwordless these days.

These are names of a few IdP that provide 2FA along with SSO: 

- miniOrange  
- Okta
- One Login
- Azure AD
- AuthO
- Google Cloud Identity

**Dedicated 2FA apps for Atlassian Products:**

There are several add-ons available on the Atlassian marketplace which provide dedicated 2FA plugins for Atlassian Products such as Jira, Confluence, etc. One among them which is highly rated and recommended by customers is [Two Factor Authentication(2FA) by miniOrange](https://marketplace.atlassian.com/search?query=miniOrange%202FA) to Secure Atlassian DC using 2FA.

### Why miniOrange 2FA? {#why-miniorange-2fa}

miniOrange Two-Factor Authentication (2FA) for DC application ensures the right set of eyes have access to your sensitive information sitting on-premise. Among all the plugins present in Atlassian Marketplace which provide Data Center SSO + 2FA/MFA, [Two Factor Authentication for Data Center Security by miniOrange](https://marketplace.atlassian.com/search?query=2FA%20miniorange) provides a wide range of authentication as well as customizable features, one of which is **customizable 2FA on top of SSO**.

Benefits and a few of our top features are mentioned below – 

- **Multi-Language Support through Customizable Templates –** Users can customize a variety of templates depending upon their needs and requirements.
- **Easy Registration –** Notify users to secure their Atlassian account by prompting 2FA configuration setup during user enrollment.
- **Customizable 2FA on top of SSO –** Users can now decide if they want 2FA authentication on top of SSO or if they want to skip it with our customizable feature.
- **Protection against Brute Force Attack –** Lock user accounts after a number of login attempts to prevent brute force attack for Data Center Security.
- **Compatibility –** miniOrange 2FA add-on is compatible with Jira, Confluence, Bitbucket and Bamboo Server, and Data Center versions. 2FA for Crowd will be released soon.
- **User-Friendly –** miniOrange 2FA plugins are easily deployable and can be configured easily. We also provide end-to-end configuration support for a new user. 
- **24/7 high-quality support –** We provide 24/7 high-quality support through calls as well as through emails.

For a detailed information of Data Center SSO + 2FA/MFA implementation with Atlassian Application refer to this document about Two Factor Authentication for Data Center & Cloud.

&nbsp;&nbsp;  

Reach out to us at **support-atlassian@miniorange.atlassian.net** or raise a support ticket by [clicking here.](https://miniorange.atlassian.net/servicedesk/customer/portal/2)