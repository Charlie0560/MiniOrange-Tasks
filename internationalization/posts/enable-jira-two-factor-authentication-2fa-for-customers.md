---
id: 'c0c857f6-19ac-413b-b869-cfe47ad76132'
title: 'Enable Jira 2FA for Customers and skip for Employees'
description: 'Enable Jira Two Factor Authentication (2FA) for customers & skip for Employees. Secure internal & external users by configuring 2FA for Jira. Our add-on is highly flexible and can be configured to fit your requirements perfectly. It provides custom configuration options to manage 2FA for all sets of users like 2FA for customers, Two Factor Authentication for employees, admins, remote users, service desk agents, and more.' 
metaTitle: 'Enable Jira 2FA for Customers and skip for Employees'
metaDescription: 'Enable Jira Two Factor Authentication (2FA) for customers & skip for Employees. Secure internal & external users by configuring 2FA for Jira'
keywords: ''
mainButtonLink: 'https://miniorange.atlassian.net/servicedesk/customer/portal/2/group/6/create/66'
mainButtonText: ''
excerpt: 'Enable Jira Two Factor Authentication (2FA) for customers & skip for Employees. Secure internal & external users by configuring 2FA for Jira. Our add-on is highly flexible and can be configured to fit your requirements perfectly. It provides custom configuration options to manage 2FA for all sets of users like 2FA for customers, Two Factor Authentication for employees, admins, remote users, service desk agents, and more.'
thumbnail: '/blog/assets/2023/jira-2fa-for-customers.webp'
createdOn: '2021-11-12'
updatedOn: '2021-11-12'
ogTitle: ''
ogDescription: ''
ogImage:
    url: ''
category: ['atlassian']
tags:
    [
        '2FA', 'Enable Jira 2FA', 'Jira 2FA', 'Two-factor Authentication'
    ]
---

## Enable Jira 2FA for Customers and skip for Employees

Every day, you read about data breaches and password leaks in the news. You might believe that this only happens to people who have outdated systems or poor security. What about you though? Cybercriminals can easily gain access to your organization’s confidential data using unprotected passwords used by your employees or customers.

But the battle isn’t lost.

[Single sign-on (SSO)](https://www.miniorange.com/single-sign-on-sso) and [Multi-Factor Authentication (MFA)](https://blog.miniorange.com/what-is-multi-factor-authentication-mfa/) are industry-standard solutions for addressing these issues, and they can help to mitigate security threats. Hence, you must ensure that all of your users use strong passwords and two-step verification.

This article will walk you through how to secure the accounts of both your employees (Internal Users) and Jira Service Management customers (External users). We will configure SSO and 2FA for the employees and then enable Jira 2FA for customers. Let’s start step by step!

![Jira 2fa for customers](/blog/assets/2023/jira-2fa-for-employees.webp)

### How to Secure Your Customers? (2FA) {#how-to-secure-your-customers}

Your employees’ accounts are now safe because you enabled SSO and 2FA on IDP for them.

The challenge now is determining how to keep your customers (external users) secure.

This is where miniOrange two-factor authentication comes in handy. Using the [miniOrange Two Factor Authentication(2FA)](https://marketplace.atlassian.com/search?query=MINIORANGE%202FA) plugin, you can enable Jira 2FA for customers as well.

Concerned that enabling 2FA for Jira will require your employees to verify the 2FA twice(once on the IDP and then on the Jira again)? Don’t worry. The miniOrange plugin allows you to enable 2FA for a subset of users. As a result, you can enable Two Factor Authentication/2FA only for your customers on Jira, while all of your employees will continue to use Single Sign-On (SSO) and 2FA on your IDP.

![Jira 2fa for customers](/blog/assets/2023/jira-2fa-for-customers.webp)

### miniOrange 2FA Use Cases {#miniorange-2fa-use-cases}

The miniOrange Two Factor Authentication(2FA) add-on is highly flexible and can be configured to fit your requirements perfectly. It provides custom configuration options to manage 2FA for all sets of users like 2FA for customers, Two Factor Authentication for employees, admins, remote users, service desk agents, and more. Some of these combinations are listed below –

- 2FA for all the users (internal users and external users)
- 2FA for Jira only for a set of users or groups
- 2FA for all the users except some set of users.
- 2FA only for the service desk agents (Service Management) 
- 2FA for customers and SSO for employees (which is covered in this Article)
- 2FA for users accessing from outside company office (based on IP)
    - For example, skip 2FA if a user accesses Jira from within the Office campus and ask for 2FA/MFA verification if the same user accesses Jira from home.

Give it a try and start your evaluation today for Two Factor Authentication Add-on! This app is available for [Jira](https://marketplace.atlassian.com/apps/1221260/mo-two-factor-authentication-2fa-for-jira?hosting=datacenter&tab=overview), [Confluence](https://marketplace.atlassian.com/apps/1221328/mo-two-factor-authentication-2fa-for-confluence?hosting=datacenter&tab=overview), [Bitbucket](https://marketplace.atlassian.com/apps/1221920/mo-two-factor-authentication-2fa-for-bitbucket?hosting=datacenter&tab=overview), [Bamboo](https://marketplace.atlassian.com/apps/1222869/mo-two-factor-authentication-2fa-for-bamboo?hosting=server&tab=overview) and [Crowd](https://marketplace.atlassian.com/apps/1224960/mo-two-factor-authentication-2fa-for-crowd?hosting=server&tab=overview).

You can follow the step-by-step setup guide to configure Two Factor Authentication Add-on for [Jira](https://miniorange.com/atlassian/jira-two-factor-authentication-2fa), [Confluence](https://miniorange.com/atlassian/confluence-two-factor-authentication-2fa), [Bitbucket](https://miniorange.com/atlassian/bitbucket-two-factor-authentication-2fa), [Bamboo](https://miniorange.com/atlassian/bamboo-two-factor-authentication-2fa) and [Crowd](https://miniorange.com/atlassian/crowd-two-factor-authentication-2fa-mfa) applications.

In case you have any other use cases or have any queries, then please feel free to raise a ticket [here](https://miniorange.atlassian.net/servicedesk/customer/portal/2).