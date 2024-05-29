---
id: 'de6c33cd-da77-4ba9-8e33-1bf5c2367f56'
title: 'What is Single Sign-On (SSO) and How does SSO Work?'
description: 'What is single sign-on (sso) and how it works? also learn types of sso,its benefits, and challenges for securing your apps with it.'
metaTitle: 'What is Single Sign-On (SSO) and How does SSO Work?'
metaDescription: 'What is single sign-on (sso) and how it works? also learn types of sso,its benefits, and challenges for securing your apps with it.'
keywords: ''
mainButtonLink: ''
mainButtonText: ''
excerpt: 'What is single sign-on (sso) and how it works? also learn types of sso,its benefits, and challenges for securing your apps with it.'
thumbnail: '/blog/assets/2023/enterprise-sso.webp'
createdOn: '2023-02-26'
updatedOn: '2023-11-06'
ogTitle: 'What is Single Sign-On (SSO) and How does SSO Work?'
ogDescription: 'What is single sign-on (sso) and how it works? also learn types of sso,its benefits, and challenges for securing your apps with it.'
ogImage:
    url: ''
category: ['latest', 'concepts', 'iam', 'solutions']
tags: [ 'Login', 'Security', 'Single Sign-On', 'SSO']
---

### What is SSO? {#what-is-sso}

**Single Sign-On (SSO)** is an authentication process in which a user is provided access to multiple applications and/or websites by using only a single set of login credentials (such as username and password). This prevents the need for the user to log separately into the different applications.

The user credentials and other identifying information are stored and managed by a centralized system called Identity Provider (IdP). The Identity Provider is a trusted system that provides access to other websites and applications.

Single Sign-On (SSO) based authentication systems are commonly used in enterprise environments where employees require access to multiple applications/websites of their organizations. In this scenario, the Single Sign-On service provider uses the organization’s directory, such as Microsoft Active Directory, [Azure Active Directory](https://www.miniorange.com/blog/what-is-azure-active-directory/), or a directory provided by the Single Sign-On solution itself for authenticating users and providing access to the various applications/websites.

### How does Single Sign-On (SSO) work? {#how-does-single-sign-on-sso-work}

![Single SIgn on Workflow](/blog/assets/2023/sso-workflow.webp)

The authentication process using miniOrange Single Sign-On (SSO) takes place as described in the following steps:

- The user requests a resource from their desired application/website.
- The application/website redirects the user to miniOrange (Identity Provider) for authentication.
- The user signs in with their miniOrange credentials if no external IdP is configured. If you have an existing Identity Provider (SAML, OAuth/OpenID Connect, etc), miniOrange redirects the user to the existing Identity Provider for authentication.
- The IdP sends a Single Sign-On response to miniOrange.
- miniOrange returns a Single Sign-On response back to the client application/website and
- The application/website grants access to the user.

Now, the user can access all other applications/websites which are configured for SSO. If the user wants to access a resource from another application/website, the application/website checks whether the user has an active session with miniOrange.

### Single Sign-On (SSO) Components {#single-sign-on-sso-components}

- **Identity provider** - User Identity information is stored and managed by a centralized system called Identity Provider (IdP). The Identity Provider authenticates the user and provides access to the service provider. The identity provider can directly authenticate the user by validating a username and password or by validating an assertion about the user’s identity as presented by a separate identity provider.
The identity provider handles the management of user identities in order to free the service provider from this responsibility.
- **Service Provider** - A service provider provides services to the end-user. They rely on identity providers to assert the identity of a user, and typically certain attributes about the user are managed by the identity provider. Service providers may also maintain a local account for the user along with attributes that are unique to their service.
- **Identity Broker** - An identity broker acts as an intermediary that connects multiple service providers with various different identity providers. Using Identity Broker, you can perform single sign-on over any applications without the hassle about the protocol it follows. No need to understand or implement complex SSO protocols like SAML, OpenID, OAuth, CAS or any other. Instead, you can just call the HTTP endpoints and access any identities. The important reason why we should use Identity Broker is that it supports Cross Protocol i.e. configuring Service Provider following a particular protocol with an Identity Provider following some different protocol.

### Key factors to know before implementing SSO {#key-factors-to-know-before-implementing-sso}

Single Sign-On solution is implemented according to the requirements of the client. The implementation will differ from user to user regarding their objectives & needs. That being the case, there are some key factors you should keep in mind before implementing SSO for your system.

- Types of users: If they are permanent/temporary, the number of users should be kept in mind.
- Access: Proper authorization should be given to users according to their designation and or requirements.
- Platform: According to your needs choose whether you want On premises solution or a Cloud Based solution.
- Features: What features are you looking for to ensure only trusted users are logging in? MFA, Adaptive Authentication, Device Trust, IP Address Whitelisting, etc. should be considered. 
- What systems do you need to integrate with?
- Keep educating your employees about password best practices. Let them know what SSO is and how you make the best use of it.

### Benefits of Single Sign-On (SSO) {#benefits-of-single-sign-On-sso}

**How SSO can benefit users?**

- Ease of use: Users only need to remember one set username & password. Eliminating the inconvenience of managing, remembering, and resetting multiple passwords, thus improving productivity with higher conversion rates.
- Transparency: Users know what’s being shared from one system to another. They have all the access to their sensitive information and whom to share it with.
- Ease of access: With Single Sign-On, users don’t have to go through lengthy sign-up and authorization processes.

**How SSO can benefit business?**

- Increased productivity: Employees need access to many apps throughout their workday. They have to spend some time logging in to all those apps with the added difficulty of remembering all the passwords. With Single Sign-On, users can enter just one password to access all of their apps, skip all that extra time spent logging in and use that time more productively.
- Reduced IT cost: Enabling SSO allows users to manage individual dashboards and self-reset passwords, which eliminates the necessity of IT support, saves admin time on password resets and supports tickets to focus on more important tasks. This indirectly helps in reducing IT costs.
- Security and compliance: Security and Compliance factors enforce organizations to prove that they have taken adequate security measures to protect sensitive data. Single Sign-On helps with regulatory compliance to meet data access and security risk protection requirements.
- More user sign-ups: SSO provides a lower barrier to entry, so new customers can sign up easily and securely, by relying on a known brand. Trust is increased, which increases conversions.
- Improves security capabilities: SSO authentication ensures that only authorized users get access to sensitive data. With Single Sign-On you can Implement password policies like Password length, complexity, restrictions on password reuse, session timeout and self-service password reset policy to strengthen security without holding up your users access.
- Efficient Collaboration: Large organizations and enterprises develop their own Single Sign-On solutions so that it is easy to share data, files, and other information across multiple applications. This makes the sharing and collaboration process faster and less expensive.

In short, implementing an SSO solution can make life easier for your users as well as benefits your business.

### What are the limitations of SSO? {#What are the limitations of SSO?}

**1. Single Password Vulnerability**: If your SSO password gets compromised, the security for all the supported apps/websites gets compromised. For example, if a user’s Google Apps password gets stolen by a hacker, the entire range of Google apps like Gmail, Google Docs, Google Drive, etc will be accessible to the hacker.

**2. Slow Process**: The authentication process using Single Sign-On is slower than traditional authentication where each app/website maintains its own database containing user data. This happens because, for every authentication attempt by the user, the application/website has to request the Single Sign-On provider for the user’s verification data.

### Is SSO Secure? {#is-sso-secure}

When single sign-on best practices are followed, a reliable SSO solution can hugely improve security. It ensures that:

- IT teams can leverage SSO to protect users with consistent security policies that adapt to their behavior while simplifying the management of usernames and passwords.
- Built-in security tools automatically identify and block malicious login attempts, improving the safety of business networks.
- Organizations can deploy security tools like [MFA](https://blog.miniorange.com/what-is-multi-factor-authentication-mfa/) in tandem with SSO, and can quickly oversee user access rights and privileges.

In addition, an SSO solution from a proven provider should give companies peace of mind through verified security protocols and service at scale.

### Why is Single Sign-On used by Organizations? {#why-is-single-sign-on-used-by-organizations}

Using **Single Sign-On services for authentication** allows organizations to delegate storage and management of user credentials to a centralized system. This prevents the hassle of managing user data and passwords.

Enterprise SSO products provide authentication to a large number of third-party applications without the need to modify the applications in any way. This turn-key feature makes it easy for organizations to migrate to SSO based authentication.

**Single Sign-On can be used in the below scenarios**

- **Authentication Using Federated Identity**: If an enterprise makes use of a third-party identity provider, federated identity (SAML) is preferred for user authentication in cloud-based as well as on-premise applications. In this case, a user attempting access to an application is redirected to an SSO based service provider which requests the identity provider for verification of the user’s identity.
- **Authentication for On-Premise Enterprise Applications**: Enterprises make use of multiple applications for various tasks. SSO can be used as a central point of authentication using a single set of login credentials for providing access to all the different enterprise applications.

**Enterprise Single Sign-On**

Enterprise Single Sign-On products basically store user credentials like username and password and automatically replay them each time a user attempts to access an enterprise application. This allows the SSO product to be used with a vast range of third party applications as the application itself does not need to be modified in any way to work with the SSO system.

**Social Single Sign-On**

Popular social networking applications like Twitter, Facebook, Google offer SSO services that allow users to log in to third-party applications with their respective social network credentials. This is very convenient for the users since they already have their information in their social media accounts and they are also logged in most of the time. But using social media SSO services also presents security risks since hackers around the world are always targeting user accounts on social networking websites.

 

### What is an SSO token? {#what-is-an-sso-token}

An **SSO** token is a collection of data or information that is passed from one system to another during the Single Sign On process. The data can simply be a user’s email address and information about which system is sending the token. Tokens must be digitally signed for the token receiver to verify that the token is coming from a trusted source. The certificate that is used for this digital signature is exchanged during the initial configuration process.

### Types of Single Sign-On (SSO) Protocols {#types-of-single-sign-On-sso-protocols}

**SAML**
Security Assertion Markup Language (SAML) is an open standard which contains user identity and attributes information in the form of an XML document. This XML document is digitally signed by the Identity provider and shared with the Service provider during the user authentication process.

**OAuth 2.0**
OAuth2 allows third party applications to authorize users by providing an access token. The access token prevents external applications from getting the user’s password and other data. The application can only access limited user information which is permitted by the user themselves.

**OpenID Connect**
OpenID Connect is an identity layer that operates on top of OAuth 2.0. It provides basic profile information about the end-user by specifying RESTful APIs that use JSON as a data format.

**LDAP**
LDAP (Lightweight Directory Access Protocol) is a protocol that enables anyone to locate organizations, individuals and other resources such as files and devices in a network. The network can be the Internet or a corporate intranet.

**RADIUS**
RADIUS stands for Remote Authentication Dial-In User Service. It is a client/server protocol that enables remote access servers to communicate with a central server to authenticate dial-in users and authorize their access to the requested system or service.

**WS-Federation**
WS-Federation (Web Services Federation) is an SSO protocol that is commonly used for authentication with Microsoft services like Active Directory Federation Services (ADFS) and Azure Active Directory. It defines mechanisms that are used to enable sharing of identity and account attributes, user authentication and authorization across applications.

**CAS**
The Central Authentication Service (CAS) is a single sign-on protocol for web applications. Its purpose is to allow a user to access multiple websites by using a single set of credentials only once.

### Related Articles {#related-articles}

- [Single Sign-On (SSO) Solution](https://www.miniorange.com/products/single-sign-on-sso)
- [Cloud Single Sign-On (SSO) Solution](https://www.miniorange.com/iam/cloud-sso)
- [WordPress Single Sign On (SSO)](https://plugins.miniorange.com/wordpress-single-sign-on-sso)
- [Single Sign-On Integration](https://www.miniorange.com/iam/integrations/)


