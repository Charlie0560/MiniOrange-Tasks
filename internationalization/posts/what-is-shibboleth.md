---
id: '68d4430a-3175-47bc-86af-af7311718b82'
title: 'What is Shibboleth?'
description: 'Shibboleth as Single Sign-On solution prioritizes the experience & confidentiality of your users & keeps your staff connected both within & across organizations.'
metaTitle: 'What is Shibboleth and its Single Sign-On Architecture?'
metaDescription: 'Shibboleth as Single Sign-On solution prioritizes the experience & confidentiality of your users & keeps your staff connected both within & across organizations.'
keywords: 'what is shibboleth'
mainButtonLink: 'https://www.miniorange.com/iam/free-trial'
mainButtonText: 'Free Trial'
excerpt: 'Shibboleth as Single Sign-On solution prioritizes the experience & confidentiality of your users & keeps your staff connected both within & across organizations.'
thumbnail: '/blog/assets/2023/shibboleth.webp'
createdOn: '2023-12-23'
updatedOn: '2023-11-17'
ogTitle: 'What is Shibboleth and its Single Sign-On Architecture?'
ogDescription: 'Shibboleth as Single Sign-On solution prioritizes the experience & confidentiality of your users & keeps your staff connected both within & across organizations.'
ogImage:
    url: ''
category: ['IAM', 'Solutions']
tags:
    [
        'IAM',
        'LMS', 
        'shibboleth',
        'SSO',
        'MFA',
        '2FA',
        'Single Sign-On',
    ]
---

Shibboleth is a web-based software tool that supports single sign-on (SSO) between two applications or between two organizations. It is an open-source tool and mainly used for [Single Sign-On (SSO) using SAML](https://www.miniorange.com/iam/login-with-external-idp/configure-shibboleth-sso) protocol. It can not implement SSO with protocols such as OAuth or OpenID connect.  

It helps sites make informed authorization decisions for accessing protected resources and provides federated identity-based authentication and authorization that allows cross-domain Single Sign-On (SSO) and removes the need for access credentials.  

Shibboleth web-based Single Sign-On (SSO) system contains three Components:  

- **Identity Provider (IDP)** – An identity provider (IDP) creates, maintains, and manages user identities and information. Identity Providers are responsible for user authentication and providing required user information to the Service Provider (SP).
- **Service Provider (SP)** – Service provider (SP) receives authentications assertions from the Identity provider and authenticates the user.
- **Discovery Service (DS)** – It helps the Service Provider to discover the user’s Identity Provider. It may be located anywhere on the web and most of the time does not require it.
 

### Shibboleth SSO Workflow {#shibboleth-sso-workflow}
The below diagram shows the common workflow of single sign-on (SSO) and interaction between User, Identity Provider (IDP) and Service Provider (SP)

![Shibboleth SSO Flow](/blog/assets/2023/shibboleth-sso-flow.webp)  

### Shibboleth SSO flow with miniOrange IDP {#shibboleth-sso-workflow-with-miniorange-idp}
 
![Shibboleth SSO with miniOrange IDP](/blog/assets/2023/shibboleth-miniorange-workflow.webp)  

The authentication process using Identity Provider (IDP), takes place in the following steps:  

1. The user reaches for a Service provider (website) for accessing the resources.
2. Service Provider figures out the [Identity provider (IDP)](https://plugins.miniorange.com/shibboleth-2-idp-wordpress) with the help of miniOrange discovery service and authenticates the user with the Identity Provider (IDP).
3. Identity Provider checks if any active session is going on if it is not then it asks the user to enter the credentials and the authentication request is sent to IDP.
4. Identity Provider (IDP) sends an authentication response to the Service Provider (SP).
5. After authenticating the user with Identity Provider (IDP) Service Provider (SP) grants access to the user.
 

### Authenticate IDPs without any external software {#authentication-idps-without-any-external-software}
With miniOrange SAML plugin,you can configure multiple IDPs registered with HAKA Federation. This allows the users to authenticate with these IDPs without any external software installation like Shibboleth SP, Gluu server. Get all your user details and choose to auto-provision users if necessary all from a single installation of a plugin.

#### Advantages of using miniOrange SSO with HAKA Federation
1. **Easy to integrate**. If your site has users from different universities and you want them to authenticate with their university account using HAKA then you can do that using this plugin. For example – if you have a site that has users from different universities, you can enable your users to sign in using their university account.
2. **Easy to install**. You only have to install and configure the Plugin once. This is useful if you are using hosting providers like WP-Engine which do not allow the installation of any external software to the server.
3. **Easy to manage**. If you install the Gluu server or Shibboleth a lot of customization will be needed just to make it work and then yearly maintenance of the servers add up as well. In contrast, the plugin is easy to set up and easily maintainable.
4. **Cost effective**. Installation of the Gluu server or Shibboleth server is a costly affair. Yearly maintenance of the servers also adds up to the cost. In contrast, the plugin costs just a fraction of that.
5. **Easy to use**. Users have the ability to choose their university during login and authenticate using their university credentials.  

### Limitations of Shibboleth {#limitations-of-shibboleth}
1. Support limited protocols such as SAML.
2. Support and customization are not available because it is open-source, unlike other vendors who provide full support.
3. It is more complex to set up and configure. The configuration is more involved.
4. It only supports Supports SAML 1 and SAML 2 and features up to Shibboleth 2.4 protocols.
5. The Shibboleth IdP V3 software has reached its End of Life and is no longer supported.
 

### Shibboleth Vs miniOrange IDP {#shibboleth-vs-miniorange}

| Feature | Shibboleth | miniOrange IDP |
| ------- | ---------- | -------------- |
| Multi-Protocol support | Supports only a few authentication protocols, like SAML1 & SAML 2 | Fully supports all protocols for Authentication. miniOrange supports SAML, SAML 2, JWT, OAuth, OpenID Connect, CAS and more. |
| Configuration & Setup | Require a more complex setup and configuration. | Easy to set up and configure |
| Support | As it is open-source limited support is provided. | miniOrange provides 24*7 active support. |
| Multiple SP and IDP support | It requires customization. | miniOrange can act as an Identity broker and support authentication for multiple apps & IDPs |


### Conclusion {#conclusion}
The web-based open-source tool supports single sign-on (SSO) between two applications or organizations using SAML protocol and cannot be implemented using other protocols such as OAuth or OpenID connect.  

The common workflow of Shibboleth single sign-on (SSO)  is the interaction between User, Identity Provider (IDP), and Service Provider (SP) where SP figure outs the IDP with the help of miniOrange discovery service.  

&nbsp;  

&nbsp;  

#### **Further Reading** 

- [Shibboleth Single Sign On (SSO) For Your Application]()
- [SAML Single Sign-On (SSO) Into Bamboo Using Shibboleth 2]()
- [Shibboleth-2 As Idp For WordPress]()
- [What is Single-Sign-On?]()
- [How to configure Shibboleth 2 SSO with Joomla?]()
- [How to configure Shibboleth 3 SSO with Joomla?]()