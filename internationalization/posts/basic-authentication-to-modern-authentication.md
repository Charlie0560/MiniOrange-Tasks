---
id: '6b453876-0f07-4255-ac2c-d1a65a574ad8'
title: 'Organizations are moving to modern authentication, and why should you too?'
description: 'Modern authentication is a authentication method of identity management that offers more secure user authentication and authorization than possible with basic Authentication. Learn about the benefits of using an identity and access management solution to enable modern authentication for your organization.'
metaTitle: 'Organizations are moving to modern authentication, and why should you too?'
metaDescription: 'Modern authentication is a authentication method of identity management that offers more secure user authentication and authorization than possible with basic Authentication. Learn about the benefits of using an identity and access management solution to enable modern authentication for your organization.'
keywords: 'modern authentication'
mainButtonLink: 'https://www.miniorange.com/contact'
mainButtonText: 'Contact us'
excerpt: 'Modern authentication is a authentication method of identity management that offers more secure user authentication and authorization than possible with basic Authentication. Learn about the benefits of using an identity and access management solution to enable modern authentication for your organization.'
thumbnail: '/blog/assets/2023/modern-authentication.webp'
createdOn: '2022-01-27'
updatedOn: '2023-10-30'
ogTitle: 'Organizations are moving to modern authentication, and why should you too?'
ogDescription: 'Modern authentication is a authentication method of identity management that offers more secure user authentication and authorization than possible with basic Authentication. Learn about the benefits of using an identity and access management solution to enable modern authentication for your organization.'
ogImage:
    url: ''
category: ['IAM', 'Concepts']
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
**Microsoft’s plan to replace Basic Authentication, with Modern Authentication, from Exchange Online** is being postponed until the second half of 2021 due to the current situation created by the COVID-19 pandemic. You might think: What is replacing basic authentication? Wait, what is Basic authentication in the first place that is being replaced? Continue reading this article to learn more about basic authentication and modern authentication, and why it is happening.

### What is Basic Authentication and its drawbacks? {#what-is-basic-authentication-and-its-drawbacks?}
Basic Authentication is an authentication commonly used for internet resources. Basic Authentication or Basic Auth has the advantage of being relatively simple, **Username and password** are stored in plain text with base64 encoding in a single header field.  

As a result, Basic Auth had to be used in conjunction with SSL in order to encrypt the headers and protect the user’s credentials. Even when HTTPS is utilized, there are still a number of Basic Auth vulnerabilities. A few major being:

- Authentication headers are included in each request, hence the possibility of capturing credentials is essentially limitless.
- Passwords can be cached (and maybe permanently kept) in the browser, providing still another point of vulnerability.
- The entire foundation of basic authentication is built on a very basic and antiquated username-password architecture adding another point of vulnerability to this authentication.
- Basic auth doesn’t support scoping or grading permissions, hence any applications with the user credentials gains potential access to all data a certain user has access to.  

In today’s world, the ideal security and privacy practice are to grant access to exactly the data and resources needed for an application to function, and nothing more. Hence there is a need for an authentication resource that can overcome all these shortcomings/vulnerabilities.

 

### What is Modern Authentication? {#what-is-modern-authentication?}
Modern Authentication is a term used to refer to authentication and authorization protocols that are better designed for today’s world, for Internet-scale and management. These Protocols allows administrators to define rules for 

- Authentication (the process by which anything or someone logs into a system),
- Authorization (mechanisms that ensure you don’t have full access to something by default), and
- Configure Conditional Access Policies (policies that establish the conditions).  

Modern authentication includes/enables authentication features like multi-factor authentication (MFA), smart cards, certificate-based authentication (CBA), and third-party SAML identity providers. Users will be prompted for these additional authentication features based on the conditional access policies configured by the system administrator.

Authentication is based on Token rather than caching or sending username and password over the network, as done in Basic Authentication. Modern authentication protocols like OAuth2.0 allow the users to use services like SSO, enabling a more secure and improved login experience. 

 

### How Modern Authentication works? {#how-modern-authentication-works?}
Username and password will no longer be the primary source of authentication, but will still be required to produce an access token (at least for now) by authenticating with an identity Source/provider. This token contains more specific information about the requestor’s rights and privileges (in the form of a claim) and is validated by application. These Tokens can also be revoked and set to expire on a specific date, giving additional control over who has access to what information.

 

![Modern Authentication and benefits of modern authentication](/blog/assets/2023/how-modern-authentication-works.webp)

 

### Benefits of Modern Authentication {#benefits-of-modern-authentication}
Modern authentication leverages protocols like OAuth2.0 to allow admins/users to fine-tune authentication policy to better control access to resources. Other than being more secure, One of the biggest advantages of Modern Authentication is that it allows admins to configure all policies at one central location which is at the identity provider. This relieves the Administrator from the responsibility of configuring policies for individual apps separately, hence mitigating the chances of missed configuration update for an application leaving a loophole in security. 

 

### Conclusion {#conclusion}
Modern Authentication is unarguably the next stage in the authentication cycle that will replace basic authentication methods. Although the switch is slow and the deadlines(some) for disabling Basic Authentication and less secure app access have been extended, upgrading to Modern Authentication as soon as possible is still recommended.   

Modern Authentication is not only safer than Basic Authentication, but it is also more user-friendly and simplifies the task of the administrator. Multiple of Microsoft’s services like Outlook for Office 365, Outlook 2016 / 2019, Mail for Windows 10 has implemented support for Modern Authentications and the number of applications doing so will keep increasing. You can signup for a demo account for miniOrange IAM solution from here.  

&nbsp;  

&nbsp;  


### External Links {# External Links}
- [General Microsoft Modern Authentication Information](http://www.microsoft.com/en-us/microsoft-365/blog/2015/11/19/updated-office-365-modern-authentication-public-preview/)
- [Enabling Modern Authentication for Skype Online](http://social.technet.microsoft.com/wiki/contents/articles/34339.skype-for-business-online-enable-your-tenant-for-modern-authentication.aspx)