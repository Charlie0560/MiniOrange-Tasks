---
id: 'a9b81a97-d40e-49aa-a43e-d06966f6f2d7'
title: 'What is Just in Time (JIT) Provisioning | How does JIT work?'
description: 'Just in Time Provisioning (JIT) automates the creation of user accounts in web applications. It delivers user information from the identity provider to web apps via the SAML protocol.'
metaTitle: 'What is Just in Time (JIT) Provisioning | How does JIT work?'
metaDescription: 'Just in Time Provisioning (JIT) automates the creation of user accounts in web applications. It delivers user information from the identity provider to web apps via the SAML protocol.'
keywords: 'JIT Provisioning'
mainButtonLink: 'https://www.miniorange.com/contact'
mainButtonText: 'Contact us'
excerpt: 'Just in Time Provisioning (JIT) automates the creation of user accounts in web applications. It delivers user information from the identity provider to web apps via the SAML protocol.'
thumbnail: '/blog/assets/2024/what-is-jit.webp'
createdOn: '2023-10-26'
updatedOn: '2023-10-31'
ogTitle: 'What is Just in Time (JIT) Provisioning | How does JIT work?'
ogDescription: 'Just in Time Provisioning (JIT) automates the creation of user accounts in web applications. It delivers user information from the identity provider to web apps via the SAML protocol.'
ogImage:
    url: ''
category: ['concepts']
tags:
    [
		'User Lifecycle Management',
        'User Provisioning',
        'SSO',
        'Single Sign-On',
        'SAML SSO'

    ]
---
### What is Just in Time (JIT) Provisioning? {#what-is-just-in-time-jit-provisioning}
**JIT provisioning** automates the creation and updation of user accounts in web applications. It delivers information from an identity provider to web apps via the SAML (Security Assertion Markup Language) protocol.

IT administrators no longer have to manually create accounts for each user in every application thanks to JIT provisioning. Rather, user accounts are created when users attempt to log in to applications for the first time, as long as they have the authorization to do so. 

Just in Time (JIT) Provisioning is used to create users the first time they log in to an application via a third-party identity provider. JIT provisioning eliminates the need to provision users or create user accounts manually. This saves effort and time. JIT Provisioning is independent of the SSO protocol used by the application but it’s vital to note that for this approach to work, the web application must support Just in Time (JIT) Provisioning. 

### How does Just in Time (JIT) provisioning work? {#how-does-just-in-time-jit-provisioning-work}
To enable JIT provisioning, administrators must first set up [Single Sign-On (SSO)](https://www.miniorange.com/products/single-sign-on-sso) between the target service provider i.e., web application and the identity provider and confirm that the user attributes required by the application are included. As a result, when new users attempt to log in to the application for the very first time, they will instantly invoke the creation of their account, rather than requiring an admin to do it. SAML assertions provide the web application with the information it requires from the identity provider.

Admins can use a centralized cloud identity provider or an SSO service built on top of their traditional directory to achieve this workflow. They must ensure that the selected service provider supports JIT provisioning during setup. Slack and Atlassian suite are some popular examples of applications that offer JIT provisioning.

For example, if your organization hires many new employees, you’ll want to set up user accounts for them as quickly and smoothly as possible. For this, you can first set up SSO and JIT provisioning in all the applications. Once it is configured, when new employees use SSO to log in to an application, the JIT provisioning approach creates their accounts automatically.

Also, when user attributes are updated in the identity provider, these attributes are automatically updated in all the various applications that the user has used.

The most efficient way to deploy Just in Time Provisioning is to use an identity provider like miniOrange since admins can then configure application privileges by role or group and remove application access from a single location.

![JIT Provisioning](/blog/assets/2023/jit-workflow.webp) 

### How is SAML SSO related to Just in Time (JIT) Provisioning? {#how-is-saml-sso-related-to-just-in-time-jit-provisioning}
**SAML SSO** can be identity provider (IDP) initiated or service provider (SP) initiated. In the IDP initiated SSO, users first login to their SSO portal where they can access all the applications in which they have configured SSO. In SP initiated SSO, the user first visits the application and is redirected to their SSO portal where they are logged in automatically by their identity provider.

[SAML protocol](https://www.miniorange.com/iam/solutions/saml-single-sign-on-sso) is safe because instead of transmitting user credentials, it sends XML-based certificates which are distinct to each application. As a result, the service provider never obtains their credentials or keeps track of them.

There isn’t much difference between SAML SSO and JIT provisioning. Users that use SAML SSO only have to provide their credentials once per session to access all of the applications they need to get their work done. Using Just in Time (JIT) Provisioning on top of SSO helps to automate the whole process of user account creation. This makes IT operations like the onboarding process much more efficient and smooth.’

### What are the benefits of Just in Time (JIT) provisioning? {#what-are-the-benefits-of-just-in-time-jit-provisioning}
**SAML SSO** can be identity provider (IDP) initiated or service provider (SP) initiated. In the IDP initiated SSO, users  
- JIT provisioning automates the process of creating accounts for users on various applications. Thus, it saves time and reduces the workload of admins.
- It reduces the IT administrative costs as instead of doing routine tasks, the IT admins can dedicate their time for more important tasks. Also, JIT provisioning prevents the need to synchronize the Identity Provider (IDP) and Service Provider (SP) user stores manually.
- With the use of JIT provisioning, the whole account creation process becomes streamlined. The users won’t need to create additional accounts for every application they want to use, thus, it reduces unnecessary account creation.
- JIT provisioning also increases the security of an organization as the users use only one identity to access all the applications. It also applies password policies for all the accounts created automatically. This helps to prevent Identity Sprawl.

### Conclusion {#conclusion}
Just in Time (JIT) Provisioning is a SAML protocol based method that is used to create users the first time they log in to an application via an identity provider. This eliminates the need to provision users or create user accounts manually. Although JIT Provisioning is independent of the SSO protocol used by the application, it is necessary that the application supports JIT Provisioning. Just in Time (JIT) Provisioning automates the whole process of user account creation. It reduces the administrative costs, increases efficiency, productivity and security of an organization.

If you are looking to implement Just in Time (JIT) Provisioning, contact miniOrange to know more about the solution and its pricing.



