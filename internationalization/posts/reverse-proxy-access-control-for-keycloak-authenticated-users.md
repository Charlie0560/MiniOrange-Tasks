---
id: '2ec51947-3f8d-487e-b203-4ab45ff5f94b'
title: 'Keycloak authentication with Reverse Proxy | Auth Proxy'
description: 'Authenticate and authorize users with Keycloak when they try to access any apps and restrict access in real time with a Keycloak Auth Proxy security solution. If the reverse proxy server finds a valid Keycloak user session, the user is given access to the proxied cloud application, else the access is denied for non-federated users.'
metaTitle: 'Keycloak authentication with Reverse Proxy | Keycloak Auth Proxy'
metaDescription: 'Keycloak Auth Proxy authenticates and authorizes secure user login to the proxied cloud apps with a Reverse Proxy. Keycloak IAM provides secure user login.'
keywords: ''
mainButtonLink: 'https://proxy.miniorange.com/login?source=https://www.miniorange.com/blog/reverse-proxy-access-control-for-keycloak-authenticated-users/'
mainButtonText: 'Contact us'
excerpt: 'Keycloak Auth Proxy authenticates and authorizes secure user login to the proxied cloud apps with a Reverse Proxy. Keycloak IAM provides secure user login.'
thumbnail: '/blog/assets/2023/keycloak-reverse-proxy.webp'
createdOn: '2023-08-22'
updatedOn: '2023-08-22'
ogTitle: 'Keycloak authentication with Reverse Proxy | Keycloak Auth Proxy'
ogDescription: 'Keycloak Auth Proxy authenticates and authorizes secure user login to the proxied cloud apps with a Reverse Proxy. Keycloak IAM provides secure user login.'
ogImage:
    url: ''
category: ['Solutions']
tags:
    [
	'Keycloak with Reverse Proxy',
    'Keycloak IAM',
    'Keycloak Proxy',
    'Keycloak security',
    'Reverse Proxy authentication',
    ]
---


## What is Keycloak IAM?

Keycloak IAM is an open-source Identity and Access Management (IAM) system which is used for SSO, authentication and authorization, user management,and social login where users can easily secure their apps and services with bare minimum amount of code. Keycloak IAM User authentication handles your User Provisioning, Identity brokering, User role-based managing, and multiple Social Login features.

Keycloak IAM authentication of users allows access to multiple cloud applications. This means that you won’t have to manage users for each service offered because of Keycloak IAM. When a person signs up for Keycloak IAM, they don’t have to sign up for other services again.

### Why are Keycloak IAM and a Reverse Proxy Server (Keycloak Auth Proxy) necessary for your company? {#why-reverse-proxy}

Keycloak auth proxy secure user authentication to access the cloud applications with the Keycloak IAM to configure the user access control and user provisioning. These applications are placed behind the Reverse Proxy, and whenever a user tries to access these proxied applications, they are first redirected and forced to log in with Keycloak IAM. If the reverse proxy server finds a valid Keycloak user session, the user is given access to the proxied cloud application, or else the access is denied for non-federated users.

To manage data loss prevention, bot traffic prevention, and to provide an extra layer of security, a connection is established between the proxied cloud apps and Keycloak authentication and authorization of users with the Auth Proxy server. A Reverse Proxy server can be configured and used to safeguard SaaS applications (such as Salesforce, Google Workspace, Office365, Jenkins, Nexus, etc.) by routing all end-user traffic through the Reverse Proxy Server, allowing it to detect irregularities in the user traffic. When a SAML-based app uses an Identity Provider (such as Keycloak IAM, Okta, ADFS, Azure AD) for SSO authentication, users are sent back to the proxied cloud app after authentication, allowing access from the reverse proxy server.

### How to authenticate users with Keycloak IAM? {#secure-cloud}

**Without miniOrange Reverse Proxy Server?**

Let’s say we have a user Alice. Alice enters the URL and tries to access the protected area of a cloud application. Alice would be able to access the application server and traffic would reach the application server even when the user is not authorized to access or not authenticated with your company federated login which is keycloak authenticated users.

This will allow attackers to attempt DOS attacks on your system, or attempt a penetration attack to find vulnerabilities in your application and get into your system through backdoors.

**With miniOrange Reverse Proxy?**

Now let’s introduce a Reverse Proxy server and put your cloud applications behind the Reverse Proxy server and connect to Keycloak IAM with SAML 2.0 federated SSO connection.

When the user tries to access the application, the Reverse Proxy server validates if the user is logged in and sends users for Keycloak authentication before giving any access.

With this approach, Keycloak Auth Proxy, provides secure user authentication and authorization which can easily access the application features and services, and you can block an attacker’s traffic from reaching your applications, protect any kind of penetration or attacks on your system even if there are any open vulnerabilities, and ensure an extra layer of security, threat protection, and data loss prevention.

You can also add other security integrations such as bot traffic prevention, IP restriction, and Web Application Firewall (WAF) to a Reverse Proxy for better security and access management to your cloud applications.

### In Summary {#conclusion}

Keycloak authentication with Reverse Proxy (Keycloak Auth Proxy) becomes one of the mandates for organizational infrastructure, given the need and efficacy necessary for security within an organization. Aside from providing an extra layer of security, it is extremely scalable for applications, adaptable for future changes, and improves efficiency. So, if you’re looking to configure a Keycloak IAM with a Reverse Proxy (to provide Keycloak Auth Proxy) or any other IAM for your company, miniOrange fits the bill with world-class service and reasonable pricing.

So what are you waiting for? Drop us a query at [info@xecurify.com](mailto:info@xecurify.com) and we will get right back to you to address all your needs.

### Reference links  {#reference-links}

1. [1. Gmail Group Based Access Control With Google Workspace CASB.](https://www.miniorange.com/blog/gmail-group-based-access-control-with-google-workspace-casb/)
2. [2. MS-365 CASB for Microsoft Teams Security.](https://www.miniorange.com/blog/ms-365-casb-for-microsoft-teams-security/)



