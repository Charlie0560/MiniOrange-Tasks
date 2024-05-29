---
id: '26417716-7c34-4fda-9669-8935bc004eb7'
title: 'What is Azure Active Directory? | Microsoft Azure AD'
description: 'Microsoft Azure Active Directory (Azure AD) is cloud service that provides IAM & helps administrators handle multiple user logins.'
metaTitle: 'What is Azure Active Directory? | Microsoft Azure AD'
metaDescription: 'Microsoft Azure Active Directory (Azure AD) is cloud service that provides IAM & helps administrators handle multiple user logins.'
keywords: ''
mainButtonLink: ''
mainButtonText: ''
excerpt: 'Microsoft Azure Active Directory (Azure AD) is cloud service that provides IAM & helps administrators handle multiple user logins.'
thumbnail: '/blog/assets/2023/microsoft-azure-ad.webp'
createdOn: '2022-02-17'
updatedOn: '2022-02-17'
ogTitle: 'What is Azure Active Directory? | Microsoft Azure AD'
ogDescription: 'Microsoft Azure Active Directory (Azure AD) is cloud service that provides IAM & helps administrators handle multiple user logins.'
ogImage:
    url: ''
category: ['latest', 'concepts', 'iam', 'solutions']
tags: [AZURE AD, AZURE AD Authentication, AZURE AD LOGIN, AZURE AD SSO]
---

### What is Azure Active Directory? {#what-is-azure-active-directory}

Azure Active Directory (Azure AD) is Microsoft’s cloud service that provides identity and access management (IAM). It is part of the Office 365 system, it is compatible with an on-premise active directory, and is useful to provide authentication to multiple cloud-based services via various cloud protocols such as SAML, OAuth2, and WS Security. It provides the ability to manage user identities and access rights. Azure AD combines core directory services, access management, and identity protection into a single solution.

Azure AD allows your users to sign in and access the resources which are in external resources such as Office 365 and thousands of other Software as a service (SaaS) applications. It also allows your users to gain access to internal resources such as applications on your company network and intranet. Azure AD uses Representational State Transfer (REST) APIs to connect with other web-based applications. In this directory, the admin has the capability to create groups and add accounts to those groups. Group access to resources can then be assigned to them. Mobile devices and Windows desktops can connect to Azure AD using Microsoft Intune.

### How does Azure Active Directory work? {#how-does-azure-active-directory-work}

The Azure Active Directory Authentication takes place in the following steps:

- The user navigates to the application and requests access.
- An authentication request is sent to the miniOrange Broker Service.
miniOrange Broker identifies the Azure AD and sends authentication requests to Azure AD.
- Azure Active Directory authenticates the user and generates the SAML token, LDAP authentication Response is sent to the broker.
- miniOrange broker posts the SAML response to the Service provider (Application) via the user’s browser.
- The service provider (Application) verifies the SAML response and access is granted to the user.

![Azure Active Directory Authentication Flow](/blog/assets/2023/azure-active-directory-authentication-flow.webp)

### Windows Active Directory vs Azure Active Directory {#windows-active-directory-vs-azure-active-directory}

Windows Active Directory, launched by Microsoft in 2000, is the predecessor to the Azure Active Directory, which has become the standard for enterprise identity management since its launch. Unlike Azure Active Directory, the Windows Active Directory uses Lightweight Directory Access Protocol (LDAP) to connect with other web-based applications. It also does not manage mobile devices. Group Policies (GPOs) are usually used to govern desktops and servers connected to Windows Active Directory. Finally, Kerberos and NTLM protocols are used to validate user credentials.

Because of the limitations of Windows Active Directory in cloud contexts, Microsoft created Azure Active Directory. Users may use Azure AD to manage all of their cloud apps and servers, including Office 365, SharePoint Online, and Exchange Online.

The key distinction between the two platforms is that Azure AD uses Representational State Transfer (REST) API interfaces to provide web-based applications. As previously indicated, it accomplishes this through the use of unique protocols and code bases. You will instantly become an Azure AD Tenant after you register with one of Microsoft’s cloud apps. This means you can manage all users, permissions, passwords, and more from a single location.

### Benefits of azure active directory {#benefits-of-azure-active-directory}

**Simple Integration:**
Because Azure AD supports a wide range of identity providers, users may log in using their Microsoft, Google, Facebook, or GitHub accounts. Azure AD may also be integrated with a variety of apps, including Salesforce, Office 365, and others.

**Strong Azure AD Security:**
Microsoft, as you might assume, takes security very seriously. Multi-factor authentication, conditional access, and Privileged Identity Management (PIM) are just a few of the security features available in Azure AD.

**High Availability:**
Microsoft promises a 99.9% availability guarantee. Azure AD is highly available thanks to a distributed architecture that spans 28 data centers throughout the globe. All data is written to the Active Primary partition first, then duplicated to the Passive Primary, and finally read from the Secondary Replica partitions.

**Collaboration:**
By granting access to the internal project site or material, Azure AD aids collaboration outside the business, such as with partners. Azure AD B2B (business-to-business) and Azure AD B2C (business-to-consumer) are the two major external collaboration functions. You may invite business colleagues to your application or service using the B2B functionality, and they can sign in using their current Azure identity. The B2C functionality is similar, except your clients may sign in to your app or service using their preferred identity provider (Facebook, Google, GitHub, etc.). MFA and Conditional Access rules can be used to control access to resources in both circumstances.

**Single sign-on:**
This allows onboarding new workers, terminating access for outgoing employees, and implementing access to new cloud services easier and faster, allowing users to get up and running faster. Single sign-on also promotes commitment to security and identification rules.

**Multi-Factor Authentication:**
This adds an extra degree of protection to accounts by requiring another form of verification. Microsoft Authenticator app, OATH Hardware token, OATH Software token, SMS, Voice call, and other MFA verification methods are available in Azure AD.

### Limitations of Azure Active Directory Authentication {#limitations-of-azure-active-directory-authentication}

- **Limited MFA methods**: Azure Active Directory Authentication supports limited Multi-Factor Authentication (MFA) methods.
- **No Group policy**:  It has few policy tools like conditional access, but it is more focused on granting access.
- **No support for NTLM or Kerberos**: Azure AD Authentication supports only modern authentication protocols like OAuth, SAML & OpenID Connect.
- **Limited OAuth support**: It does not have support for all OAuth grants.
- No support to extend or customize existing protocols with custom apps.
- Limited support for Device, location, and time-based access policies.

###  Azure Active Directory Authentication Components {#azure-active-directory-authentication-components}

- **Service Provider** - Service providers are responsible for communications between the user, an identity provider that maintains a user directory. In this case, Azure Active Directory is an identity provider and the application could be a Service provider.
- **Identity Provider** - Here Azure AD is an identity provider. So  As an Identity Provider, it authenticates the user and provides an authentication token (that is, information that verifies the authenticity of the user) to the service provider.

Click [here](https://www.microsoft.com/en-in/security/business/identity-access/microsoft-entra-id) to learn more about Azure Active Directory.

### Azure Active Directory VS miniOrange IdP {#azure-active-directory-vs-miniorange-idp}

| Features                  | Azure Active Directory                                    | miniOrange IdP                                      |
|---------------------------|---------------------------------------------------------|-----------------------------------------------------|
| Multi-Protocol support    | Supports only a few modern authentication protocols (OAuth, SAML & OpenID Connect) | Fully supports all protocols for Authentication.  |
| Multi-Factor Authentication | Supports limited Multi-Factor Authentication methods.  | Supports 15+ Multi-Factor Authentication methods.  |
| Pricing Plans             | A fixed annual subscription. (No quote-based pricing plan). | A flexible monthly & quote-based pricing plan for all size organizations. |
| Security                  | Doesn’t support.                                       | It supports fraud prevention, social login, and cloud security. |
| Adaptive Authentication   | Doesn’t support.                                       | It supports Adaptive Multi-Factor Authentication.    |


### Further Reading {#further-reading}

- [Directory Services](https://www.miniorange.com/products/directory-services)
- [Single Sign-On SSO](https://blog.miniorange.com/what-is-single-sign-on-sso/)
- [Login Using Azure AD](https://www.miniorange.com/iam/login-with-external-idp/configure-azure-ad-sso)
