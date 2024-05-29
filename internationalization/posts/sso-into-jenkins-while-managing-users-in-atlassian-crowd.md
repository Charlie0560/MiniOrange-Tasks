---
id: '05451dfd-a4ab-43aa-a0fb-f068cb5435a4'
title: 'SSO into Jenkins while managing users in Atlassian Crowd'
description: 'miniOrange Jenkins Crowd SSO Connector is capable of creating user sessions by reading the Crowd session.'
metaTitle: 'SSO for Atlassian Applications connected to Crowd'
metaDescription: 'miniOrange Jenkins Crowd SSO Connector is capable of creating user sessions by reading the Crowd session.'
keywords: ''
mainButtonLink: 'https://miniorange.atlassian.net/servicedesk/customer/portal/2/group/6/create/66'
mainButtonText: ''
excerpt: 'miniOrange provides a Jenkins Crowd SSO Connector capable of creating user sessions by reading the Crowd session.'
thumbnail: '/blog/assets/2023/jenkins-crowd-connector.webp'
createdOn: '2022-07-26'
updatedOn: '2022-07-26'
ogTitle: ''
ogDescription: ''
ogImage:
    url: ''
category: ['atlassian']
tags:
    [
        'SSO', 'Single Sign-On', 'MFA', '2FA', 'Security', 'Provisioning', 'Two-factor Authentication', 'Multi-factor Authentication'
    ]
---

## SSO into Jenkins while managing users in Atlassian Crowd

![Atlassian Crowd and Jenkins integration](/blog/assets/2023/atlassian-crowd-and-jenkins-integration.webp)

Jenkins manages and controls software delivery processes throughout the entire lifecycle, including build, document, test, package, stage, deployment, static code analysis, and much more. To make Jenkins application access easier and provide better security we have an [SSO module](https://plugins.miniorange.com/jenkins-saml-single-sign-on-sso) that can be integrated with Jenkins easily and deployed on Jenkins platforms with some of the most important features like **Just-In-Time User & Group Provisioning**, **Auto Redirect to IdP**, **Signing & Encryption**, **Custom User Attribute Mapping**, **Single Logout**, **Manual Group & Role Mapping** and many more. 

Atlassian Crowd is a powerful tool that enables users to create sessions for multiple Atlassian products like Jira, Confluence, Bitbucket. The Crowd is a centralised identity for access management application that manages the users from various directories like Active Directory, LDAP, Open LDAP, Microsoft Azure Active Directory for connected applications. These capabilities can now be applied to Jenkins as Crowd connector for Jenkins.

Now, enterprises are looking to delegate user authentication for the applications from Crowd to central IAM (Identity & Access Management) applications for better security. But Crowd is still required to manage users and permissions. This use-case is possible with the help of connectors we have developed for these Atlassian applications like [Jira](https://marketplace.atlassian.com/apps/1220053/mo-sso-connector-for-crowd-and-jira?hosting=datacenter&tab=overview), [Confluence](https://marketplace.atlassian.com/apps/1220055/mo-sso-connector-for-crowd-and-confluence?hosting=datacenter&tab=overview), and [Bitbucket](https://marketplace.atlassian.com/apps/1220057/mo-sso-connector-for-crowd-and-bitbucket?hosting=datacenter&tab=overview). Jenkins, however, is a non-Atlassian application, thus integrating this flow with Jenkins is difficult. 

![Atlassian apps and Jenkins integration](/blog/assets/2023/atlassian-apps-and-jenkins-integration.webp)

### How does the miniOrange plugin handle this use case? {#miniorage-plugin-solution}

miniOrange haS developed a [Jenkins Crowd SSO Connector](https://miniorange.atlassian.net/servicedesk/customer/portal/2) capable of creating user sessions by reading the Crowd session. Like any other Atlassian application like Jira, Confluence and Bitbucket, you can manage groups and permissions from the Crowd. You can authenticate to the Crowd via SAML SSO using the [Crowd SAML SSO](https://marketplace.atlassian.com/apps/1218304) plugin. With the help of Jenkins Crowd SSO connector, you can invoke SSO from Jenkins itself. You do not need to login into Crowd explicitly.

### How does it work? {#how-does-it-work}

Crowd SAML SSO Plugin acts as a SAML Service Provider and is used to enable trust between Jenkins and the central IAM applications. Crowd SAML SSO plugin takes care of the SAML Request, SAML response, and user session management at the Crowd end. Once the Crowd session is created, Jenkins reads this session and the user is logged in to Jenkins. Users can invoke SSO from Jenkins itself.

Here, IAM will perform the user authentication. The crowd will be used to manage users and their groups (permissions) for all the connected applications.

Also, with this flow, end-users will experience a seamless login and won’t notice that the SSO request and response passes through the Crowd Server.

**Let’s understand the Workflow!**

1. The user tries to access the Jenkins application.
2. For authentication, the users would get forwarded to the IAM application’s login page.
    1. The Jenkins Crowd SSO Connector will redirect users to the Crowd SAML plugin.
    2. The Crowd SAML plugin will forward the user to the IAM application for authentication.
3. Once the authentication is successful, the user will be redirected back to the Jenkins application and logged in.
    1. IAM sends a response back to the Crowd SAML plugin.
    2. Crowd SAML plugin validates the user creating the user session, and redirects the user to the respective application form where the SSO was invoked.
    3. Users will be granted access to Jenkins based on their groups and applications configured on Crowd.

![Atlassian apps and Jenkins integration](/blog/assets/2023/jenkins-crowd-connector-workflow.webp)

### What are the Key Benefits? {#what-are-key-benefits}

1. There is only one set of SAML configurations for all the Atlassian & Non-Atlassian applications.
2. User authentication moved to central IAM without losing any of the existing user permissions.
3. Users will be able to access all the connected applications using their IAM credentials.
4. This method makes it simple to add an extra security layer, such as MFA, on top of the SSO, which was not available while utilizing Crowd for SSO.

What do you think of this solution? Do you think this would be helpful in centralizing authentication for your users? Drop us a mail at [info@xecurify.com](mailto:info@xecurify.com) or [raise a ticket here](https://miniorange.atlassian.net/servicedesk/customer/portal/2) to talk to us.