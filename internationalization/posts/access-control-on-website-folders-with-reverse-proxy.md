---
id: '708081e4-18a9-402e-aa5f-82e5a6d05f5f'
title: 'How to set up WordPress role based access control to secure site folders?'
description: 'WordPress site file permissions basically define which users can perform what actions on them. Securing WordPress files and folders provide better protection against vulnerabilities in your site code, security against unstable plugins, and any threats against your WordPress site.'
metaTitle: 'WordPress user roles and permissions | WordPress file permissions'
metaDescription: 'WordPress user role based access control secures site files and folders with reverse proxy. Set user roles based on WordPress file permissions.'
keywords: ''
mainButtonLink: 'https://proxy.miniorange.com/login?source=https://www.miniorange.com/blog/access-control-on-website-folders-with-reverse-proxy/'
mainButtonText: 'Contact us'
excerpt: 'WordPress user role based access control secures site files and folders with reverse proxy. Set user roles based on WordPress file permissions.'
thumbnail: '/blog/assets/2023/website-folders-reverse-proxy.webp'
createdOn: '2023-08-22'
updatedOn: '2023-08-22'
ogTitle: 'WordPress user roles and permissions | WordPress file permissions'
ogDescription: 'WordPress user role based access control secures site files and folders with reverse proxy. Set user roles based on WordPress file permissions.'
ogImage:
    url: ''
category: ['Solutions']
tags:
    [
	'User Roles & Permissions',
    'secure site folders',
    'Reverse Proxy',
    'RBAC security',
    ]
---

The most efficient way to secure your WordPress site without a plugin is by configuring custom user permissions based on roles, with a reverse proxy. This way, you can easily set and configure the correct permissions based on user roles (RBAC) for your WordPress files and folders.

## What are WordPress file permissions?

WordPress file permissions are the rules that allow users control over a file or folder or directory based on the defined role based access control (RBAC). With the correct WordPress file permissions set, users won’t access any unauthorized folders and they will easily know what are the “do’s” and “don’ts”. For example, any user at a junior level in an organization will not be able to access the files and folders which are authorized only for employees at a senior level. This is possible through role based access control configured for the WordPress file permissions.

### What is role based access control ( RBAC ) ? {#rbac}

Role based access control (RBAC) means allowing access to users to a directory based on the set user roles and permissions. With a defined role based access control (or RBAC) users access levels throughout the organization and protect their data at the same time.

### Top 3 reasons why you need to set WordPress file permissions. {#three-reason}

**1. Role based access control (RBAC):** Control which user can access which folder and data items.

**2. Monitor user actions:** It helps in monitoring and analyzing every single access request sent from a user for potential threats.

**3. Update user roles and permissions**: You can easily make changes to a user’s role and access levels by making the changes in the server itself.


### How to secure your WordPress site files and folders? {#secure-folder}

WordPress files can be secured with the help of a reverse proxy server. At the time of login, based on the user roles and permission attributes defined in the IDP (or user pool). This way, user roles will be mapped along with access based WordPress file permissions. Hence, no unauthorized user will be able to access the WordPress files and folders of an organization and data breaches will be prevented.

### 6 Advantages of securing WordPress file permissions with reverse proxy. {#six-advantages}

**1. Set user permissions:** It correctly maps all the user roles defined at the time of SSO Login based WordPress file permissions.

**2. Set IP restriction:** We can set IP restriction to prevent access from devices not on the organization’s network. You can also add or block an entire range of IP addresses.

**3. Set Device Restriction:** We can set device restriction where the admin can set WordPress file permissions to block devices trying to access WordPress files and folders based on the authorized MAC address of the user device.

**4. Set Location restriction:** With Location restriction, you can block access to your WordPress files and folders based on geographical locations to prevent any unauthorized access attempts.

**5. Monitor Traffic:** The admin can monitor traffic coming towards their WordPress site. This way the admin can check who and when an unauthorized user tried to access the WordPress files and folders.

**6. Set Rate Limiting:** With rate limiting, the admin can set the amount of traffic reaching the WordPress site to prevent an increase in the number of access attempts of WordPress files and folders.

### How does access control secure WordPress websites based on user role? {#access-control-wordpress}

Suppose we have 2 users, Joe and Eddie. We have 2 separate sites on WordPress (Website#1 and Website#2) that we are redirected to from the origin website. The access to those sites will be granted based on the user roles and permissions defined.

In our use case, Joe has access to Website#1 and Eddie has access to Website#2. Now say Joe and Eddie both, try to access  Website#1. The users will send an OAuth request to the website via the reverse proxy. On the role based access control specified (or RBAC) for each user and credentials entered, the site will send an OAuth response back.  If the user role to access the site is valid, the request will be authenticated or else it will be declined. Hence in our use case, Joe will be granted access to Website #1 and Eddie’s request will be denied by the reverse proxy itself.

The main requirement for us here is WordPress role based access control (or RBAC), and because of that requests sent to sites by any user will be monitored and proper authentication will run. This way any user from a different role will not be able to access the WordPress website resources.

**If the user role is valid to access the website.**

Suppose a client wants to access a site, first an OAuth request will be sent to the website’s IDP via the miniOrange Reverse Proxy server. The site will send an OAuth response back to the reverse proxy server and if the OAuth response message is valid, the user will be granted access to the WordPress site data.

![bot traffic for without reverse proxy](/blog/assets/2023/user-role-access-subsites-granted.webp)

**If the user role is invalid to access the website.**

Suppose a client wants to access a site, first an OAuth request will be sent from to the website IDP, via the miniOrange Reverse Proxy server. The site will send an OAuth response back to the reverse proxy server and if the OAuth response message is not valid, the user will be denied access then and there by the miniOrange Reverse Proxy.

![bot traffic for with reverse proxy](/blog/assets/2023/user-role-access-subsites-denied.webp)

### Other features of miniOrange reverse proxy {#features}

**1.** User access control setup and management.

**2.** Bot traffic mitigation.

**3.** Load balancing.

**4.** IP restriction.

**5.** Content caching.

**6.** Traffic monitoring and analysis.

### In Summary {#conclusion}

WordPress file permissions can be configured to secure and prevent unauthorized access by setting role based access control (RBAC) for each user with the help of a reverse proxy server. Based on the roles users’ play in an organization, exclusive access to data and information is granted and secured by properly monitoring the requests sent.

So what are you waiting for? Drop us a query at [info@xecurify.com](mailto:info@xecurify.com) and we will get right back to you to address all your needs.

### Reference links  {#reference-links}

1. [1. Gmail Group Based Access Control With Google Workspace CASB.](https://www.miniorange.com/blog/gmail-group-based-access-control-with-google-workspace-casb/)
2. [2. MS-365 CASB for Microsoft Teams Security.](https://www.miniorange.com/blog/ms-365-casb-for-microsoft-teams-security/)



