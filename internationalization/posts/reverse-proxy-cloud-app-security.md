---
id: 'c46d26c7-f590-4f5d-bdad-5d61077d847d'
title: 'Cloud Application Security using Access Control with Reverse Proxy'
description: 'Cloud Application Security is a measure taken to protect cloud and application’s data from unauthorized users. It can be useful in decreasing the security risks or vulnerabilities which could impact the cloud infrastructure. Cloud Application Security can be mitigated by using Reverse Proxy using Access Control.'
metaTitle: 'Cloud Application Security using Access Control with Reverse Proxy'
metaDescription: 'Achieve Cloud Application Security with Reverse Proxy to secure cloud applications from unmanaged devices with cloud based access control.'
keywords: ''
mainButtonLink: 'https://proxy.miniorange.com/login?source=https://www.miniorange.com/blog/reverse-proxy-cloud-app-security/'
mainButtonText: 'Contact us'
excerpt: 'Achieve Cloud Application Security with Reverse Proxy to secure cloud applications from unmanaged devices with cloud based access control.'
thumbnail: '/blog/assets/2023/what-is-reverse-proxy-server.webp'
createdOn: '2023-08-22'
updatedOn: '2023-08-22'
ogTitle: 'Cloud Application Security using Access Control with Reverse Proxy'
ogDescription: 'Achieve Cloud Application Security with Reverse Proxy to secure cloud applications from unmanaged devices with cloud based access control.'
ogImage:
    url: ''
category: ['Solutions']
tags:
    [
	'User Roles & Permissions',
    'unauthorized access',
    'Security Reverse Proxy',
    'access control Reverse Proxy',
    ]
---


## What is Cloud Based Access Control?

Access control is a process of improving security by restricting access for some user or any unauthorized user. Cloud based access control plays an important part in terms of security as it minimizes unauthorized access to the application. Cloud Based Access Control is useful because it can determine which user should be granted access and which should be restricted. It can secure cloud applications by allowing access to authorized users only. Cloud based Access Control can be easily implemented using Reverse Proxy.

### Why does your organization need Reverse Proxy to improve Cloud Application Security using Access Control? {#why-reverse-proxy}

This blog mainly covers how you can set up Reverse Proxy to Secure Cloud Applications on Unmanaged devices. In this scenario, unmanaged devices are the personal laptops of the users. The users with the company’s laptop and the users who happen to be the partners of the company will be able to access the cloud applications and not the ones with their personal laptop. This feature is important to Secure Cloud Applications as the outsider may be able to access the data which can be confidential or important for the company.

### How to Secure Cloud Applications using access control? {#secure-cloud}

Let’s say the company has 2 applications, namely JIRA and Confluence. There are 3 users: User Alice, User Bob and User Sam in the company. You want to set up Cloud based Access Control. Alice has the company’s laptop i.e. a Windows Domain Joint Machine as shown in the figure above, Bob is the partner of the company and doesn’t have the company’s laptop and Sam has a personal laptop. All the three users try to access the applications but one of them is unsuccessful. Alice who has the company’s laptop is able to access the applications easily, Bob who is the partner of the company and does not have the company’s laptop is also able to access the applications, only if he is working on a static IP but Sam who has a personal laptop is not granted access at any cost. Reverse proxy server is used to improve Cloud Application Security using Access Control to block the access for a group of users who are working on their personal laptops. 

![reverse proxy for cloud apps Workflow](/blog/assets/2023/reverse-proxy-for-cloud-apps.webp)

### Implementing miniOrange Reverse Proxy for cloud based access control in the enterprise {#implementing}

- The Windows Domain Joint machine is configured with the AD server. Whenever any user tries to log into the application, a token is provided by the AD server, which Windows machine will send in each request for the application. This AD token helps to identify whether the user is trying to access the application from an office laptop or not. 
- Reverse Proxy authenticates the token which comes from the Windows domain joint machine after every request using AD Server. It checks whether the token is valid or not.
 - If the token is not present in the Active Directory, then the access is not granted. 
 - If the token is present and the user is trying to access the application from the company’s laptop then the access is granted, else if trying to access from a personal laptop then the access is denied. 
- User B doesn’t have the company’s laptop therefore the use case can be achieved only when the user is working on a static IP address or connected to a VPN. If the user is working on a static IP, then access will be granted to that IP explicitly.

### In Summary {#conclusion}

Reverse proxy becomes one of the mandates for organizational infrastructure, given the need and efficacy necessary for security within organizations. Aside from securing the cloud applications using access control and managing the users, it is extremely scalable, adaptable, and efficient, which also delivers significant value to your organization’s security by protecting you against cyber attack vulnerabilities. It also provides other features like load balancing, rate limiting, URL rewriting and many more. So, if you’re looking to establish a Reverse proxy for your company, miniOrange fits the bill with world-class service and reasonable pricing.

So what are you waiting for? Drop us a query at [info@xecurify.com](mailto:info@xecurify.com) and we will get right back to you to address all your needs.

### Reference links  {#reference-links}

1. [1. Gmail Group Based Access Control With Google Workspace CASB.](https://www.miniorange.com/blog/gmail-group-based-access-control-with-google-workspace-casb/)
2. [2. MS-365 CASB for Microsoft Teams Security.](https://www.miniorange.com/blog/ms-365-casb-for-microsoft-teams-security/)



