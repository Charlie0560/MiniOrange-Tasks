---
id: '6f2505b7-cb04-4861-aa5c-fee927acd438'
title: 'Header Based Authentication'
description: 'Extends Modern authentication for users into enterprise Legacy applications, allowing users to login using the same username and password across both, modern and legacy applications.'
metaTitle: What is Header Based Authentication?'
metaDescription: 'Extends Modern authentication for users into enterprise Legacy applications, allowing users to login using the same username and password across both, modern and legacy applications.'
keywords: 'header based authentication'
mainButtonLink: 'https://www.miniorange.com/contact'
mainButtonText: 'Contact us'
excerpt: 'Extends Modern authentication for users into enterprise Legacy applications, allowing users to login using the same username and password across both, modern and legacy applications.'
thumbnail: '/blog/assets/2023/header-based-authentication.webp'
createdOn: '2022-06-13'
updatedOn: '2022-06-13'
ogTitle: What is Header Based Authentication?'
ogDescription: 'Extends Modern authentication for users into enterprise Legacy applications, allowing users to login using the same username and password across both, modern and legacy applications.'
ogImage:
    url: ''
category: ['concepts']
tags:
    [
		'SSO',
        'IAM',
        'Single Sign-On',
        'MFA',
        '2FA',
        'Header Based Authentication',
        'Security',
        'Authentication',
    ]
---

### Managing Access to Legacy and Cloud Applications {# Managing Access to Legacy and Cloud Applications}
Enterprises/Organizations’ needs to preserve and grow virtual workforces while protecting digital transformation efforts have constantly fueled the IAM market. As a result, numerous standards and methodologies for ensuring access for businesses have been developed. 

With the advent of web applications in the industry in the early 1990s, companies turned to Web Access Management (WAM) systems to manage [authentication and authorization](https://www.miniorange.com/blog/authentication-authorization-difference/) to corporate resources. WAM is more commonly known as **Header Based Authentication**, as the user request is authenticated based on the header values of the request. 

The **Federated authentication standards** used today, gained prominence in the early 2000s, and SaaS, PaaS, and IaaS began to gain a foothold in the enterprise, with businesses centralizing their [Identity and Access Management (IAM)](https://blog.miniorange.com/what-is-iam-identity-and-access-management-system/) programs around [IDaaS (Identity-as-a-Service)](https://blog.miniorange.com/what-is-identity-as-a-service-idaas/).

Regardless of how new a company is, it will inevitably possess legacy resources that rely on earlier generation technologies. Because legacy apps are still used by enterprises, a comprehensive IAM architecture cannot ignore them as Enterprises need to SSO into these legacy applications for a seamless user experience. Thus the employed IAM solution must support both legacy and modern technology applications.

 

### Legacy Authentication methods (Web Access Management or WAM) {# Legacy Authentication methods (Web Access Management or WAM)}
Web Access Management is a legacy authentication mechanism for managing authentication and authorization to corporate resources. It was first utilized in the early 1990s. 

A WAM system requests authentication from the end user, then injects identity data via the HTTP headers of a user’s browser’s HTTP request, for consumption by the protected application. This is more commonly referred to as Header Based SSO. These Header values can be configured as required for the application and are sent to the application via an application proxy. 

The following are some of the advantages of employing Application Proxies’ native support for header-based authentication:

- **Provide remote access to your on-premises apps with ease**: App Proxy makes existing remote access architecture easier to manage by eliminating the need for VPN access and on-premises identity management. Users’ sign-in flows remain unchanged, and they can work from any location on any device.  
- **No need to install any extra software**: There is no need to install any extra software or make any changes to your apps because current Application Proxy connectors can be used.
- **A large number of attributes and transformations are available**: Because all header values are adjustable, there is a large number of attributes and transformations to choose from.

![Legacy authentication model](/blog/assets/2023/legacy-authentication-model.webp)

 

### Traditional WAM models are divided into two categories {# Traditional WAM models are divided into two categories}
#### **Agent/plugin-based models**  
In agent/plugin-based models, an agent/plugin is installed on each app or web server. These agents/plugins intercept HTTP requests before they’re sent to the target application (to read the HTTP header data), communicate with the centralized policy server, and enforce access rules. This solution eliminates the requirement for all traffic to be routed through a proxy, allowing for a distributed design, but it comes with the cost of needing to install, update, and administering agent software on each app server in your environment.

#### **Proxy-based models**  
In Proxy-based models, all web traffic is routed through a network traffic manager, where HTTP requests can be rejected or authorized based on policies. This paradigm presented a single point of failure, but it also provided protocol-level granular access control without the need for software installation. 

### Modern Authentication Methods (SAML/OAuth/OpenID) {# Modern Authentication Methods (SAML/OAuth/OpenID)}
Modern authentication techniques, unlike Legacy authentication methods, use a token-based approach. In this paradigm, an identity provider provides a token with information about the user to the application (service provider), such as a JSON Web Token (JWT) or SOAP payload. This token contains user claims that can be used by the application code to make access decisions.

The token paradigm exchanges information between the [identity provider (IdP)](https://blog.miniorange.com/what-is-an-identity-provider-idp/) and the service provider (SP), which is the app, using the end user’s encrypted browser context. Because this architecture does not require direct communication between the IdP and the SP, no networking changes are necessary, no agents are required, and traffic does not need to be routed through a proxy. These advantages have contributed to the creation and popularity of SAML and OIDC, and traditional WAM approaches are now out of favor.

![Modern authentication model](/blog/assets/2023/modern-authentication-model.webp)

 
### Unified IAM Solution for both Legacy and Modern Applications {#Unified IAM Solution for both Legacy and Modern Applications}
As previously stated, all organizations, no matter how young, inevitably have a mix of cloud and legacy resources in their environment, necessitating the use of an IAM solution that provides a seamless, single sign-on experience for end users whether they’re accessing on-premise legacy applications or SaaS solutions.

![miniOrange Unified IAM Model](/blog/assets/2023/miniorange-unified-iam-model.webp)

miniOrange’s [IAM solution](https://www.miniorange.com/) provides best-of-breed architecture by utilizing all available resources to provide a smooth [SSO experience](https://www.miniorange.com/products/single-sign-on-sso). Using miniOrange Legacy Application [SSO modules](https://www.miniorange.com/integrations/), the IAM solution integrates with the existing legacy application, providing users with a seamless, single sign-on experience, regardless of whether the application they are accessing is Legacy or Modern. 
 

### Benefit of unified approach {# Benefit of unified approach}
This solution offers secure and smooth access to any application or resource irrespective of the authentication method supported by them.

Adopt Standards— Embracing SSO standards such as SAML for application access helps maintain IT architecture flexible.
Remove Redundancy—By fully exploiting the features of IdaaS and network traffic managers, legacy WAM providers may sometimes be completely eliminated from the environment.
Scale and Performance—Traffic Managers and Reverse Proxies are designed to protect some of the world’s most complex applications.
Consumer-Grade End User Experience—Extend miniOrange’s best-in-class SSO user experience to apps that IdaaS solutions aren’t built for.
Support for all new use cases—Integration with miniOrange IdaaS positions your organization to enforce [Multi-Factor Authentication](https://www.miniorange.com/products/multi-factor-authentication-mfa) and safeguard the mobile experience for all of your company’s web apps.
 

### Conclusion {# Conclusion}
By embracing the cloud, organizations can accelerate and gain significant advantages over less agile competition. Needless to say, as the shift cannot happen overnight, organizations will need to maintain their legacy systems for the time being. IT transformation will be accelerated by a modern identity management platform and a smart access management approach that bridges the gap between trusted on-premises applications and the new technologies being adopted.

 

#### **Getting Started with Your Free Trial**
Visit https://www.miniorange.com/businessfreetrial to start your 30-day free trial of our IAM services and see how simple it is to overcome identity and access management difficulties in the cloud.

