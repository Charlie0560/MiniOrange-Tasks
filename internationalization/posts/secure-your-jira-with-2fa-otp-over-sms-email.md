---
id: 'ab0a6de2-933a-45b6-9a6e-23de708ee43a'
title: 'Secure your Jira with 2FA (OTP over SMS/ Email)'
description: 'Two-factor authentication (2FA) adds an extra layer of security to your Jira account by requiring a one-time code (OTP) in addition to your password. To enable 2FA on Jira using OTP over SMS or email, miniOrange provides add-on for Atlassian Jira. 2FA benefits include increased security, reduced risk of data breaches, and compliance with regulations.'
metaTitle: 'Secure your Atlassian Jira with 2FA methods (OTP Over SMS, Email)'
metaDescription: "miniOrange's feature of having 2FA with OTP over SMS/Email makes it impossible for hackers to get access to your applications."
keywords: ''
mainButtonLink: 'https://miniorange.atlassian.net/servicedesk/customer/portal/2/group/6/create/66'
mainButtonText: ''
excerpt: 'Two-factor authentication (2FA) adds an extra layer of security to your Jira account by requiring a one-time code (OTP) in addition to your password. To enable 2FA on Jira using OTP over SMS or email, miniOrange provides add-on for Atlassian Jira. 2FA benefits include increased security, reduced risk of data breaches, and compliance with regulations.'
thumbnail: '/blog/assets/2023/jira-2fa-otp-over-sms-and-email.webp'
createdOn: '2022-05-12'
updatedOn: '2022-05-12'
ogTitle: ''
ogDescription: ''
ogImage:
    url: ''
category: ['atlassian']
tags: ['2FA', 'Authentication', 'Confluence', 'Email', 'Jira', 'MFA', 'OTP', 'Security', 'SMS']
---

Your accounts are protected with a password but it might not always be secure. Let’s say you are out with your family and your kid wants to buy a toy and you hand in your credit card to pay for it but it keeps getting declined. You are sure that you have enough balance in it to pay for it, but when you check your bank statement it shows it’s in negative and all your negative thoughts end up coming true.

This means that you have been hacked.

Similar issues might happen with your Jira as well. Hackers out there are always ready to pounce on weak passwords, vulnerabilities or leaks in data. This will lead to the possible revealing of your confidential company data. 

What can you do about it?

Well, don’t worry! You can add an extra layer of security with two-factor authentication.

&nbsp;&nbsp;  

**Two-Factor Authentication (2FA)**, also called two-step verification, is a security process in which a user has to pass two different authentication checks to gain access to their account. It helps you prohibit unauthorized access to your application.

To know more about protecting your Atlassian cloud applications check out our previous blog:-
[How to secure Atlassian cloud applications](https://community.atlassian.com/t5/Atlassian-Access-articles/How-to-secure-Atlassian-Cloud-Applications/ba-p/1728600)

[Enable 2FA on Jira for your Customers and skip 2FA for Employees!](https://community.atlassian.com/t5/Jira-articles/Enable-2FA-on-Jira-for-your-Customers-and-skip-2FA-for-Employees/ba-p/1719062)

As 2FA functionality is not already provided in Atlassian Server and Data Center, you can use miniOrange 2FA plugins to enable the 2nd factor of authentication and strengthen access to your Jira accounts. 

Our miniOrange plugin provides you with various 2FA authentication methods like OTP over email, OTP over SMS, Google authenticator, Security questions, Yubikey hardware token, etc.

### OTP over SMS/ Email {#otp-over-email}

OTP (One Time Password) is the most famous & convenient validation technique used by a large number of organizations for two-factor authentication. The OTPs are short-lived and are shared with the user at the time of login. That makes it impossible for the hackers to get access to accounts even if they have user’s credentials.

In the SMS OTP validation technique, an OTP is sent to the user’s mobile phone via SMS. The user has to enter it during the 2FA verification step and the user gets application access only if the OTP is correct. 

We also provide the feature of OTP over Email. Here, the OTP is shipped off to the users on their registered email address. When a user attempts to log in to any device, the server sends an email to their registered company email address with the OTP. The user can then use this OTP to log in.

### Advantages of OTP over SMS and Email {#advantages-of-otp-over-sms-email}

- **Low cost & Ready rollout:**

Since mobile phones and email are readily available to everyone, the cost of implementing OTP over SMS and OTP over Email is very low as one doesn’t need anything extra. (If you use hardware tokens as a 2FA method then each user will need a dedicated hardware device)

- **Easy to use (No setup & no instructions):**

Execution of on-demand OTP delivery techniques is moderately easy for organizations. For instance, with SMS delivery, users don’t have to do any kind of setup and don’t need any extra applications, like authenticator apps, to be installed on their device. They just demand a code which they use at login. 

- **No Shared Secret to Crack:**

On-request OTPs are simply arbitrary numbers sent by the server at the time of login, so there’s no shared secret to be taken advantage of.

&nbsp;&nbsp;  

Reach out to us at **support-atlassian@miniorange.atlassian.net** or raise a support ticket by [clicking here.](https://miniorange.atlassian.net/servicedesk/customer/portal/2)