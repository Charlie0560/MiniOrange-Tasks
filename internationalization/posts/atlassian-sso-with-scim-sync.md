---
id: '662d4d5e-66fa-40ce-b8d3-f822e285846e' 
title: "Atlassian SAML SSO with SCIM DC: A Powerful Duo for Synergizing Atlassian's Applications"
description: 'How can organizations efficiently manage user identities and access, across their Atlassian applications such as Jira, Confluence, and Crowd? This is a pivotal question posed to businesses in this era of ever-evolving workspaces, and digital teamwork as we rely heavily on collaboration and productivity tools to streamline our work processes.'
metaTitle: "Atlassian SSO & miniOrange SCIM for better Authentication and Provisioning"
metaDescription: 'Atlassian SAML SSO & miniOrange SCIM DC combined provides enhanced authentication and provisioning to protect and sync your Atlassian application users.'
keywords: ''
mainButtonLink: 'https://miniorange.atlassian.net/servicedesk/customer/portal/2/group/6/create/66'
mainButtonText: ''
excerpt: 'SAML SSO+SCIM DC is a powerful addition that simplifies your online access. SCIM and Native SAML SSO are two separate but related technologies that can be used to enhance identity and access management in an organization. While they serve different purposes, they can complement each other to create a more robust and seamless authentication and authorization system.'
thumbnail: '/blog/assets/2023/atlassian-saml-sso-with-miniorange-scim.webp'
createdOn: '2023-07-11'
updatedOn: '2022-07-11'
ogTitle: ''
ogDescription: ''
ogImage:
    url: ''
category: ['atlassian', 'latest']
tags: ['Single Sign On', 'Atlassian SAML SSO', 'SCIM', 'User Provisioning']
---

Atlassian's suite of applications such as Jira, Confluence, and Crowd, play critical roles in modern workplaces. Jira serves as a versatile project and issue-tracking tool, empowering teams to efficiently plan, monitor, and manage their work. Confluence, on the other hand, fosters collaboration by providing teams with a shared workspace for creating, sharing, and collaborating on content, thereby facilitating seamless knowledge sharing. Crowd acts as the linchpin of user authentication and authorization across multiple Atlassian products, offering a centralized solution for identity and access management.
While these tools have revolutionized productivity, their use has also highlighted the importance of robust Single Sign-On (SSO) solutions. As teams grow and projects become more complex, the need for robust SSO solutions has never been more pressing. SAML (Security Assertion Markup Language) SSO, a trusted approach, is often met with its own set of challenges, ranging from intricate configurations to user management complexities.
To conquer these obstacles, organizations are increasingly turning to SCIM DC – a transformative solution that promises to enhance SSO and identity management within the Atlassian ecosystem. In this bit, we will explore how SCIM DC can be the key to unlocking seamless, secure collaboration.

### The Foundation: Atlassian SAML SSO {#atlassian-saml-sso-foundation}

Atlassian's SAML SSO is a robust solution that allows users to access their applications seamlessly without the need to remember multiple passwords. With SAML, users authenticate once through their identity provider (IdP), and then gain secure access to their Atlassian tools, making the login process more efficient and secure. While SAML SSO solves the authentication challenge, managing user accounts, permissions, and access control remains a separate and complex task.

### The Challenge of User Provisioning and Management {#user-provisioning-channel}

As an organization grows, so does its user base and the complexity of user management. Adding and removing users, assigning appropriate roles and permissions, and keeping user data up to date are critical tasks. Without an efficient user management solution, organizations can face challenges related to compliance, security, and user experience. SCIM (System for Cross-domain Identity Management) DC is the missing piece that complements Atlassian's Native SAML SSO, providing a unified solution for both authentication and user provisioning. Let's explore…

### Unlocking the Magic of SAML SSO+SCIM {#saml-sso-and-scim}

SAML SSO+SCIM DC may sound like a mouthful, but it's actually a powerful addition that simplifies your online access. SCIM and Native SAML SSO are two separate but related technologies that can be used to enhance identity and access management in an organization. While they serve different purposes, they can complement each other to create a more robust and seamless authentication and authorization system. 

&nbsp;&nbsp; 

**Immediate User Provisioning**

One significant advantage of SCIM DC is the immediate user provisioning it offers. With SAML alone, there may be delays between a user being added to your identity provider and then gaining access to Atlassian applications. SCIM DC streamlines the onboarding process, enhancing user experience and productivity. **It eliminates the wait time for new users to access Atlassian applications, increasing efficiency and minimizing disruptions to your team's workflow.** Whether you're bringing in new team members or making updates to your existing user roster, SCIM DC's immediate user provisioning ensures that the right individuals have instant access to the tools they need.

### Advanced Group Management through Provisioning {#advance-group-management}

Let's talk about group mapping. In simple terms, this feature allows you to organize your access to different apps and services. You can create groups and decide who gets access to what. One of the common challenges faced by Jira administrators who set up SSO  is the difference in the groups at IDP with the groups in Jira. Here, SCIM DC automates group assignments. With SCIM, when users log in via SAML, they are automatically placed into the correct groups based on the information provided by your identity provider, such as Azure, miniOrange, or Okta. This eliminates the need for manual group mapping and ensures users have the right level of access.

### Seamless User Status Sync: {#user-status-sync}

Native SAML integration doesn't always keep user statuses synchronized. **For instance, when a user leaves your organization, you would typically have to deactivate their accounts manually within each Atlassian application. SCIM DC can sync user status changes across your Atlassian apps.** When a user is deactivated in your identity provider, SCIM DC will promptly deactivate their accounts in Jira, Confluence, and Crowd. This not only enhances security but also streamlines user management.

### Filter Groups with Custom Rules {#filter-groups-with-custom-rules}

With SAML alone, you might have limited control over which users get access to Atlassian applications based on their attributes, like department or role. SCIM DC allows for flexible group filtering. You can define rules in your identity provider to determine which users are provisioned into which groups within Atlassian applications. For example, you can set up a rule that automatically assigns all users with the "Sales" department in your identity provider to a "Sales Team" group in Atlassian or you can decide that only people whose names start with 'A' can access a particular app.

### Modify Group and Usernames {#modify-group-and-usernames}

Names are important identifiers, but sometimes they need a little tweaking. With SCIM DC, you can modify groups and usernames by applying special rules. It lets you modify group names that come from your IDP. So, if you're tired of seeing group names like "Sales123" and "Sales456," you can use regex to rename them to something clean and consistent, like "Sales." Or you can transform usernames using regex to match your organization's standards thus ensuring uniformity in user identities across all applications.

### Mapping and Customizing Attributes {#mapping-and-customizing-attributes}

Attributes are like the characteristics that make you unique. With Native SAML SSO+SCIM DC, you can map user attributes like username, email, and display name to attributes from your IDP. This ensures that everyone's profile stays up to date, no matter where they log in. In some cases, you might need to add custom attributes to user profiles, which can be challenging with native SAML integration. SCIM DC enables you to add custom attributes to user profiles. For instance, you can include an employee’s ID or a manager’s email of each user, to ensure that important information is readily available within Atlassian applications.

### In a nutshell… {#conclusion}

Atlassian SAML SSO+SCIM DC is your ticket to streamlining user management and boosting security. While SAML SSO ensures secure and streamlined authentication, the SCIM DC takes user provisioning and management to the next level. With automated user provisioning, role-based access control, real-time updates, and simplified onboarding, organizations can enhance their security, compliance, and user experience across Jira, Confluence, and Bitbucket.

&nbsp;&nbsp;  

So why wait? Embrace the power of Atlassian SAML SSO+SCIM DC as the integration offers a compelling solution, making it easier than ever to manage users in Atlassian's suite of collaborative tools. 

Reach us at +1 978 658 9387 for a demo or email your queries to [info@xecurify.com](mailto:info@xecurify.com), we would be glad to take it forward from there.
