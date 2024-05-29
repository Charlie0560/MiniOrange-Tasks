---
id: '2fb37e8a-7d84-4abf-bae8-206326e6d97e'
title: 'LDAP Authentication with Active Directory'
description: 'Active Directory (AD) is a database and set of services that provides centralized management of users, computers and other objects within the network.'
metaTitle: 'LDAP Authentication with Active Directory | LDAP AD Authentication'
metaDescription: 'Active Directory (AD) is a database and set of services that provides centralized management of users, computers and other objects within the network.'
keywords: ''
mainButtonLink: ''
mainButtonText: ''
excerpt: 'Active Directory (AD) is a database and set of services that provides centralized management of users, computers and other objects within the network.'
thumbnail: '/blog/assets/2023/ldap-authentication-with-active-directory.webp'
createdOn: '2022-08-30'
updatedOn: '2022-08-30'
ogTitle: 'LDAP Authentication with Active Directory'
ogDescription: 'Active Directory (AD) is a database and set of services that provides centralized management of users, computers and other objects within the network.'
ogImage:
    url: ''
category: ['latest', 'concepts', 'iam']
tags: ['Active Directory', 'Active Directory Authentication', 'AD', 'AD Login', 'LDAP Authentication', 'LDAP Integration', 'LDAP Login']
---

Different organizations have different internal structures, and Active Directory or LDAP Server provides the ability to cater to the needs and requirements of all sorts. Using [LDAP/Active Directory](https://plugins.miniorange.com/wordpress-ldap-login-intranet-sites), you can design a directory structure that meets the needs of your organization. Inside Active Directory, resources are organized in a logical structure, enabling users to find a resource by its name rather than its physical location, making the network’s physical structure much more transparent to users.

### What is Active Directory? {#what-is-active-directory}

Active Directory, often known as AD, is a Microsoft-developed proprietary directory service that operates on its own Windows Servers. Active Directory (AD) is a database and set of services that provides centralized management of users, computers, and other objects within the network. Active Directory connects different users with the network resources they need to get their work done. It also simplifies user management as it acts as a single repository for all user and computer-related information.

The data inside an Active Directory is stored hierarchically as objects, which can refer to users, computers, groups, etc. This hierarchical organization makes it faster and easier to search for user information within the directory. Active Directory provides a robust and efficient way of storing and retrieving user information from a database.

In particular, Active Directory ensures that each person is who they claim to be ([authentication](https://www.miniorange.com/products/authentication 
)) by checking the user ID and password they enter, and it allows them to access only the data they are authorized to use (authorization). Active Directory is mainly based on five elements, which are:

### Elements of Active Directory {#elements-of-active-directory}

Active Directory consists of five basic elements, which are as follows:

![Active Directory Structure](/blog/assets/2023/ad-structure-elements.webp)

**1. Objects**: Objects are the most basic element of Active Directory and define a single entity in Active Directory (AD). An object is a distinct, named set of attributes that represents a network resource. Objects can represent individual users or other singular entities that are part of the network.

**2. Organizational Unit (OU)**: An Organizational Unit is a subdivision within an Active Directory that holds different objects, such as users, computers, and other network applications. It is a container that allows you to logically group objects of the same type.

**3. Domain**: A Domain in Active Directory consists of multiple OUs. A domain is a logical group of objects, including users, computers, OUs, etc. Each domain holds a database containing identity information for the objects.

**4. Tree**: A tree in Active Directory is a collection of one or more domains.

**5. Forest**: A forest is a group of Active Directory trees. Trees are the highest level of organization in Active Directory.

### What is LDAP Authentication? {#what-is-ldap-authentication}

[LDAP or Lightweight Directory Access Protocol](https://plugins.miniorange.com/guide-to-setup-kerberos-single-sign-sso) is an authentication protocol mainly used to access directory services. A user cannot access information stored within an LDAP database or directory without first authenticating (proving they are who they say they are). LDAP Authentication involves verifying the entered credentials, such as username and password, by making a connection with directory services. The directory services that support LDAP authentication include OpenLDAP, Microsoft Active Directory, Azure Active Directory, FreeIPA Directory, etc. LDAP Authentication from Active Directory (AD) to WordPress websites can be done using the [miniOrange LDAP Plugin](https://plugins.miniorange.com/wordpress-ldap-login-intranet-sites).

### How does LDAP Authentication with Active Directory work using miniOrange Plugin? {#how-does-ldap-authentication-with-active-directory-work-using-miniOrange-plugin}

When a user has a website built using a CMS like WordPress, Drupal, Joomla, or any other marketplace, the admin can enable login for users on the WordPress website using their credentials stored in Active Directory with the miniOrange LDAP/AD Login for Intranet Plugin.

![LDAP Authentication with Active Directory using miniOrange Plugin](/blog/assets/2023/ldap-authentication-with-ad-using-miniOrange-plugin.webp)

Once a WordPress admin enables users to log in with their Active Directory (AD) credentials, WordPress users can enter their credentials on the login page. A request containing credential information is sent to the miniOrange LDAP Intranet Plugin.

The miniOrange LDAP Intranet Plugin sends an LDAP Authentication and Authorization request with the entered credentials to Active Directory. It checks if the user is present in the Active Directory (in any OU under the given search base) and if the username and password match. Based on the result, a True/False value is returned to the [miniOrange LDAP/AD Login for Intranet Plugin](https://plugins.miniorange.com/wordpress-ldap-login-cloud).

If the returned value is True, the user is logged in, and if the returned value is False, an error message is displayed.

