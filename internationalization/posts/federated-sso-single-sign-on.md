---
id: 'c01b2a0c-d172-4a36-a1e9-e132cc1cc7e1'
title: 'What is Federated Single Sign-On (SSO) | Federated Identity Management (FIM)'
description: 'Federated Single Sign-On (SSO) or Federated Identity management means integration with an application across an organization.'
metaDescription: 'Federated Single Sign-On (SSO) or Federated Identity management means integration with an application across an organization.'
keywords: ''
mainButtonLink: ''
mainButtonText: ''
excerpt: 'Federated Single Sign-On (SSO) or Federated Identity management means integration with an application across an organization.'
thumbnail: '/blog/assets/2023/federated-sso.webp'
createdOn: '2022-08-25'
updatedOn: '2023-11-01'
ogTitle: ''
ogDescription: 'Federated Single Sign-On (SSO) or Federated Identity management means integration with an application across an organization.'
ogImage:
    url: ''
category: ['Solutions', 'IAM']
tags:
    [
        'Federated SSO', 'Single Sign-On', 'SSO' 
    ]
---

### What is Federated SSO? {#what-is-federated-sso}

**Federated Single Sign-on or Federated SSO** (also known as **Federated Identity Management**) is a combination of two terms, Federated, which means across an organization and, SSO, which means Single Sign-On. As it implies, Federated SSO is a service that allows users to login into different Applications/Websites situated across different domains using a single set of login credentials. 

This means that suppose a user in the organization who has to use different services like Zoom, Office 365, Google Workspaces, HR Portal, etc. can access all the services using a single set of login credentials rather than remembering and using a separate login credential for each as is the case in the traditional scenario. i.e., with one Federated Identity, a user can access all configured services across multiple domains.


### SSO vs FEDERATED SSO {#sso-vs-federated-sso}

A common misconception about Federated SSO is that SSO and federated SSO are one and the same thing. SSO is a Service that allows users to login into multiple applications (on the same domain) using a single set of login credentials, while Federated SSO is Service that allows users to SSO in applications across multiple-Domain. 

In other words, using SSO users can **login into multiple applications on the same domain** using a single set of login credentials (like logging in into YouTube, Drive, Sheets using Google/Gmail Credentials), while using federated SSO users can **login into multiple applications on the different domain** (like logging in into Zoom using Google/Gmail Credentials)

Let us understand this with the help of an example – 

John is an employee at company XYZ and wants to access all the applications he needs to complete his work in the company with a single login credential. As these applications are from different vendors, each is on a different domain and hence traditional SSO implementation cannot fulfill his requirements. Federated SSO overcomes this limitation of SSO, allowing users to SSO into Applications across Different domains using a single set of login credentials.

### How does the Federated SSO work? {#how-does-the-federated-sso-work}

Like SSO, Federated SSO supports all the authentication protocols like SAML, OAuth, OIDC to authenticate users into applications. Here, trust is established between the identity provider (a system that stores and verifies user identity) and the Service provider (the system the user wants to utilize) using Metadata and Certificate Configurations. Once trust is established users can login into Service providers using their Identity provider credentials. 

A user can Single Sign-On into applications either by:

1. **IDP initiated SSO**: Sign into IDP application and then login onto company applications
2. **SP initiated SSO**: Login to Company application and then signed into IDP application after auto-redirect.

In either case once users use their login credentials and are authenticated by the IDP application, IDP sends an authentication assertion to SP. Based on the authentication assertion from the IDP, SP logs in the user and allows access to resources.

![Federated SSO Workflow](/blog/assets/2023/federated-sso-workflow.webp)

###  Benefits of Federated SSO {#benefits-of-federated-sso}

- **Increase Efficiency** – saves a lot of time and increases efficiency. 
- **Customer Experience** – For the third-party integrated apps, it makes it easy to login and hence improves customer experience. 
- **Secured** – Federated SSO or Federated Identity Management makes sure that you don’t have multiple credentials for different applications making you vulnerable to threats.
- **Reduced Expenses** – Single Sign-On solution reduces cost along with an increase in productivity.


### miniOrange Solution for Federated SSO {#miniorange-solution-for-federated-sso}

miniOrange provides a ready-to-use solution for Federated SSO with [integrations across 5000+ apps](https://www.miniorange.com/iam/integrations/).  We provide you with lots of additional features such as: 

- 15+ MultiFactor Authentication methods to add an additional layer of security for your application 
- Easy installations and setup guide and 24*7 Customer support 
- Identity Brokering service which makes sure that you can establish a cross-protocol connection with any protocol like SAML, OAuth/OIDC, JWT, etc.
- Adaptive Authentication methods which include IP Restriction, Location-based Access as an advanced layer of security 
- Custom Designed Single Sign-on for you according to your requirements.

