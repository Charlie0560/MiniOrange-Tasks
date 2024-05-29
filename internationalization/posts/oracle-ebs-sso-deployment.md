---
id: '1694d092-e5d1-466e-82c4-c037c6be54f5'
title: 'Cloud Hybrid & On-Premise Deployment Options for miniOrange’s Oracle EBS SSO & MFA Solution'
description: 'Setup SSO into Oracle EBS using miniOrange’s Oracle EBS SSO solution using any Identity Provider of your choice.'
metaTitle: 'Setup SSO into Oracle EBS easily'
metaDescription: 'Setup SSO into Oracle EBS using miniOrange’s Oracle EBS SSO solution using any Identity Provider of your choice.'
keywords: 'oracle ebs sso deployment'
mainButtonLink: 'https://www.miniorange.com/contact'
mainButtonText: 'Contact us'
excerpt: 'Setup SSO into Oracle EBS using miniOrange’s Oracle EBS SSO solution using any Identity Provider of your choice.'
thumbnail: '/blog/assets/2023/oracle-ebs-sso-workflow.webp'
createdOn: '2022-07-05'
updatedOn: '2022-07-05'
ogTitle: 'Setup SSO into Oracle EBS easily'
ogDescription: 'Setup SSO into Oracle EBS using miniOrange’s Oracle EBS SSO solution using any Identity Provider of your choice.'
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
        'Security',
        'Provisioning',
        'Two-factor Authentication',
        'Multi-factor Authentication'
    ]
---

### Q1. What is the miniOrange Oracle EBS SSO & MFA Solution? {# Q1}

**A.** miniOrange has a comprehensive SSO & MFA Solution for the world’s favorite ERP Software – Oracle E-Business Suite. Using miniOrange’s Single Sign-On and Multi Factor-Authentication, you can implement a high quality Identity and Access Management strategy for all your legacy applications.  

miniOrange’s Oracle EBS SSO & MFA Solution connects to your Oracle E-Business Suite instance and establishes trust with your existing identity source such as Microsoft Active Directory, Azure AD, Microsoft ADFS, Oracle DB, Okta or miniOrange IDP. Having this seamless configuration in place, your users can easily access their Oracle E-Business Suite accounts without having to enter their credentials, as miniOrange picks the relevant attributes from their existing Identity Provider session, to authenticate against the FND_USER table in your Oracle EBS Database.


### Q2.What are the different deployment options for this solution? {# Q2}

**A.** miniOrange’s Oracle EBS SSO & MFA Solution is available in two different deployment methods:

1. Cloud-Hybrid Model
2. On-Premise Model
3. Both of these deployment options include the complete suite of miniOrange’s features. The following table summarizes a few key offerings :

|Sr. No	| Cloud-Hybrid Model | On-Premise Model |
|-------|--------------------|------------------|
|1      | Supports miniOrange’s effortless “Pay-as-you-go” licensing method. | Supports miniOrange’s Yearly as well as Perpetual licensing methods.|
|2      | Lightweight connector installation, cloud is entirely managed by miniOrange. | Compliance friendly On-premises installation, zero cloud components involved.|
|3      | miniOrange’s Cloud is Load Balanced by default. | High Availability Setup is Supported free of charge.|
|4      | Supports Seamless Sign-On using miniOrange’s Integrated Windows Authentication module. | Supports Seamless Sign-On using miniOrange’s Integrated Windows Authentication module.|
|5      | Can be extended to support any number of Oracle/other applications. | Can be extended to support any number of Oracle/other applications.|
 

All-in-all, both deployment models come with their own set of convincing advantages. Contact us at idpsupport@xecurify.com to help you choose the right deployment model for your organization.  

### Q3. What does the solution architecture look like for both these deployment options? {# Q3}

**A.** miniOrange’s Oracle EBS SSO & MFA Solution can either be directly installed on the Apps Tier of your Oracle EBS instance, or on its own separate server with miniOrange’s Identity Server. Here’s an architecture diagram for both our deployment options –

#### **1. miniOrange Oracle EBS SSO & MFA – Cloud Hybrid Architecture 1**

![miniOrange Oracle EBS SSO Cloud Hybrid Architecture 1](/blog/assets/2023/cloud-hybrid-architecture-1.webp)  

#### **2. miniOrange Oracle EBS SSO & MFA – Cloud Hybrid Architecture 2**

![miniOrange Oracle EBS SSO Cloud Hybrid Architecture 2](/blog/assets/2023/cloud-hybrid-architecture-2.webp)  

#### **3. miniOrange Oracle EBS SSO & MFA – On-Premise Architecture**

![miniOrange Oracle EBS SSO On-premise Architecture](/blog/assets/2023/on-premise-architecture.webp)  

**Setup steps for miniOrange’s Oracle EBS SSO & MFA Solution : [Link](https://www.miniorange.com/oracle-ebs-single-sign-on-(sso))**

### Q4. Why should I choose miniOrange’s solution for Oracle EBS? {# Q4}

**A.** miniOrange has been recognized as an Oracle Partner under Oracle’s Global Modernized Oracle Partner Network (OPN) program. You can view our partner status in real time [here](https://partner-finder.oracle.com/catalog/Partner/SCPP-KMJAKXYX#profile-solutions).

miniOrange has also been recognized as a Microsoft Partner under the Microsoft Marketplace Partner program. This professional relationship with Oracle and Microsoft makes miniOrange one of the most sought SSO & MFA products, especially for SSO and MFA into Oracle Applications having users stored in Microsoft Active Directory or Azure Active Directory. This seamless integration on both ends makes miniOrange the undisputed market leader.

Oracle has also shown recognition for miniOrange by accepting the miniOrange Oracle EBS SSO & MFA Solution on their Cloud Marketplace. You can view this solution by visiting Oracle’s Cloud Marketplace [here](https://cloudmarketplace.oracle.com/marketplace/en_US/listing/111839538). 

miniOrange is the only Oracle EBS SSO Solution that has ever been accepted on Oracle Cloud Marketplace.

 

### Q5. What will my end user authentication flow look like? {# Q5}

**A.** Here is the end user authentication flow for SSO into Oracle Applications –

- Users will navigate to their bookmarked Oracle application URL (or a custom URL for the authentication method, depending on the application).
- The Oracle application will check if the user is authenticated (or not).
- If the user is authenticated, they will be granted access to the application. If not, they will be redirected to the login screen for your enterprise Identity Management solution; this will be handled by the miniOrange Oracle EBS SSO & MFA Solution, which communicates with your IdP (Identity Provider) via SAML/OpenID Connect/other SSO protocols.
- Users will enter their credentials at the Identity Provider login screen; the credentials for authentication can be decided by you, depending on which authentication system you’re using (Microsoft Active Directory, Azure AD, ADFS, any other Identity Provider, a third-party application/database like Oracle DB).
- Once they’ve been authenticated, the user will be redirected to the resource that they were initially trying to access.
- Once a user has already authenticated with your Identity Provider for one Oracle application, they won’t need to enter their credentials again for accessing another Oracle application, or any other application which can pick up the existing session of the user in the chosen identity source.###

&nbsp;  

&nbsp;

#### **More Resources:**  

1. [miniOrange’s Complete Suite of Oracle Solutions](https://www.miniorange.com/integrations/oracle-single-sign-on-sso)
2. [Steps to setup SSO into Oracle EBS](https://www.miniorange.com/oracle-ebs-single-sign-on-(sso))
3. [Oracle EBS – miniOrange – Azure AD SSO Blog](https://blog.miniorange.com/oracle-ebs-sso-integration-with-azure-ad/)