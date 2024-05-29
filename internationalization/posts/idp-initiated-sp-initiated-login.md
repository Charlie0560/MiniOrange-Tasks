---
id: '6eca1b8f-18f4-4343-8dc2-b9b7bab3e4cc'
title: 'SP-Initiated vs IdP-Initiated SSO'
description: 'Learn more about SP and IdP initiated SSO, what it is , and specific differences between SP vs IdP initiated Single Sign-On SSO login.'
metaDescription: 'Learn more about SP and IdP initiated SSO, what it is , and specific differences between SP vs IdP initiated Single Sign-On SSO login.'
keywords: ''
mainButtonLink: ''
mainButtonText: ''
excerpt: 'Learn more about SP and IdP initiated SSO, what it is , and specific differences between SP vs IdP initiated Single Sign-On SSO login.'
thumbnail: '/blog/assets/2024/service-provider.webp'
createdOn: '2022-07-09'
updatedOn: '2022-07-09'
ogTitle: ''
ogDescription: 'Learn more about SP and IdP initiated SSO, what it is , and specific differences between SP vs IdP initiated Single Sign-On SSO login.'
ogImage:
    url: ''
category: ['featured','Concepts', 'IAM']
tags:
    [
       'IDP Initiated SSO', 'Login',' SP Initiated SSO', 'SSO '
    ]
---

With an increasing number of cloud applications being adopted by customers, the need for providing a seamless user experience to employees and other end users is high. In this blog, our objective is to delve into the basics of SAML and discuss [SSO through SAML,](https://www.miniorange.com/iam/solutions/saml-single-sign-on-sso 
) which can be initiated in two ways: IDP-initiated SSO and SP-initiated SSO.

### SAML {#saml}

In simplest terms, [SAML (Security Assertion Markup Language)](https://www.miniorange.com/what-is-saml) is an open standard for transferring identity data between two elements, Identity Provider (IdP) and Service Provider (SP). In this blog, we will examine what is the difference between SP-initiated and IdP-initiated SSO flows.

### What is an Identity Provider (IdP)? {#what-is-an-identity-provider-idp}

The user credentials and other identifying information are stored and managed by an Identity Provider (IdP) centralized system. IdP is a trusted system that provides access to other websites and applications. Additionally, it also authenticates a user XYZ as a user XYZ after credentials are entered.

An IdP offers [authentication services](https://www.miniorange.com/products/authentication) to relying applications, through this, it is possible to use [Single Sign-On (SSO)](https://www.miniorange.com/products/single-sign-on-sso) and access other websites. [miniOrange Identity Server(IdP)](https://www.miniorange.com/iam/) provides centralized, simple management and synchronization of identities for users, devices, and things. As a result, it can be tailored to almost any use case and workflow.

### How does IdP-initiated authentication work? {#how-does-idp-initiated-authentication-work}

In IdP-initiated authentication, users first log in to their dashboard, which presents an application catalog. This catalog will contain visual icons of all the internal and external applications that the admin has configured SSO for their end user and that the end user has the privileged to access those applications. Only configured external and internal applications are visible in the end-user dashboard when you try IdP-initiated SSO

IdP-initiated authentication involves users logging in through the login screen of their Identity source, where their user credentials are stored. After successful login, users are presented with an application catalog on their dashboard, displaying visual icons of all the internal and external applications that the admin has configured for SSO access by the end user. It is important to note that only the external and internal applications that have been configured for SSO access will be visible on the end-user dashboard during IdP-initiated SSO.

![Xecurify EndUser Dashboard](/blog/assets/2023/xecurify-enduser-dashboard.webp)

When the user clicks on any of the application icons visible, the SAML flow is as follows:

- The user’s identity and some other details are sent by the Identity Provider (IdP) to the Service Provider (SP).
- The IdP creates a document called SAML Assertion, which contains the information sent by the IdP to the SP.
- The IdP uses a private key to sign the SAML Assertion document. This key was shared between the IdP and SP when they established SSO trust.
- The IdP sends the SAML Assertion to the SP using the user’s browser, or it sends a reference that the SP can use to securely retrieve the SAML Assertion.

### Service Provider (SP) {#service-provider-ap}

In the context of SSO, a service provider is responsible for providing services to the end user. However, service providers do not authenticate users themselves. Instead, they rely on an identity provider (IdP) to verify the user’s identity and manage specific attributes related to the user. Put simply, service providers request authentication decisions from the IdP, which holds the account information and unique attributes related to the user for the given service.

### How does SP-initiated SSO work? {#how-does-sp-initiated-sso-work}

- SP-initiated SSO happens when a user tries to access an application at the SP end but hasn’t been authenticated by the IdP yet.
- If the user has no active browser session, the SP will redirect them to the IdP to request authentication.
- Further, the IdP will authenticate the user and create a SAML assertion, which is then used to redirect the user back to the SP.
- How does SP know which IdP to redirect the user to?  if it supports a single sign-on from more than one IdP.

![Xecurify Login screen](/blog/assets/2023/xecurify-login.webp)

These are the ways how the SP can determine which IdP to redirect the users to:

- The SP may ask for the user identity such as the user’s email address and use the domain of the same, such as jon@miniorange.com, to determine which Identity Provider (IdP) to use from multiple configured IdPs.
- The SP will show the user a list of IdPs it supports and asks the user to select the one IdP from which they want to authenticate themselves.
- The resource URL may be specific to one IdP.
- The SP may have restored a cookie containing IdP information in the user’s browser session the first time the user successfully logged in from the IdP and will use this user’s information on further subsequent accesses.

Once the SP has received the SAML assertion, it validates the signature using the public key to ensure the SAML assertion came from the trusted IdP and no attributes have been modified in the SAML assertion. The SP can then extract the user’s identity from the SAML assertion and other needed details. At this point, the user is on the service provider’s landing page, just as though they had logged into the site manually.

### Difference between SP-Initiated vs IdP-Initiated SSO {#difference-between-sp-initiated-vs-idp-initiated-sso}

In the process of **SP-initiated login**, the user initiates a login request through the application. They are redirected to the IdP’s miniOrange login page for authentication. The IdP checks if a Windows session exists and retrieves the credentials of the currently logged-in user. It then generates a SAML response, which is used by the miniOrange SSO service to log in the user into the application.

In the case of **IDP-initiated login**, the user logs in directly to the IdP instead of the application dashboard. The IdP generates a SAML response, which is used to log in the user to the applications.

### Benefits of SP-initiated SSO (Single Sign-On) {#benefits-of-sp-initiated-sso-single-sign-on}
SP-initiated SSO (Single Sign-On) allows users to access multiple applications with a single set of login credentials, initiated from the service provider’s (SP) application. 

**1. Improved user experience**:  Seamless, user-friendly experience and ability to access multiple applications with a single login.

**2. Reduced password fatigue**: Using a single login credential eliminates password fatigue and improves security.

**3. Increased security**:  Enables centralized authentication and access control, which reduces the risk of unauthorized access to applications.

**4. Simplified administration**: It simplifies the administration of multiple applications, as user access and permissions can be centrally managed from the SP application.

### Benefits of IDP-initiated SSO

**1. Greater control and visibility**: IDP provides greater control and visibility over user authentication and access to applications.

**2. Enhanced security**: IDP’s strong authentication and access control policies can enhance security and detect suspicious behavior.

**3. Simplified administration**: Centralized management of user access and permissions simplifies administration.

**4. Lower dependence**: IDP-initiated SSO reduces dependence on the SP application and improves reliability.

### Conclusion {#conclusion}

In conclusion, SP-initiated SSO allows users to access multiple applications using a single set of login credentials, initiated from the service provider’s application. This method offers several benefits such as improved user experience, reduced password fatigue, increased security, and simplified administration. However, it also has some drawbacks, including dependency on the SP application, potential security risks, increased complexity during implementation, and compatibility issues.

On the other hand, IDP-initiated SSO provides greater control and visibility over user authentication and access to applications, enhanced security, and simplified administration. It also reduces dependence on the SP application and improves reliability. However, implementing IDP-initiated SSO may also face challenges, such as increased one time complexity during implementation due to coordination between the IdP and individual applications, potential compatibility issues, and the risk of unauthorized access if the IdP is compromised.

### miniOrange offerings {#miniorange-offerings}

miniOrange provides a comprehensive SSO solution that simplifies the implementation of both SP-initiated and IDP-initiated SSO. Their solution offers a variety of authentication protocols, including SAML, OAuth, JWT, and OpenID Connect, and allows for seamless integration with various applications. Additionally, miniOrange’s SSO solution provides enhanced security features, such as multi-factor authentication and adaptive risk-based authentication, to ensure secure access to applications. Overall, miniOrange’s solution can help organizations implement SSO in a hassle-free manner while ensuring the highest level of security.

### Further Reading {#further-reading}

- [What is SAML?](https://www.miniorange.com/what-is-saml)
- [What is Single Sign-On SSO?](https://blog.miniorange.com/what-is-single-sign-on-sso/)
- [SAML Single Sign-On Integration](https://www.miniorange.com/iam/integrations/?id=saml)