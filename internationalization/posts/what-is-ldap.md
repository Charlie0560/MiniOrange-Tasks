---
id: 'ec18f8ca-fcc5-4928-8258-f54e3783a2c8'
title: 'What is LDAP (Lightweight Directory Access Protocol)?'
description: 'LDAP (Lightweight Directory Access Protocol) is a vendor-neutral application protocol that is used to get access & maintain distributed directory information in an organized manner over Intranet or Cloud. LDAP authentication work by validating the username and password against the directories such as Active Directory.'
metaTitle: 'What is LDAP (Lightweight Directory Access Protocol)?'
metaDescription: 'LDAP (Lightweight Directory Access Protocol) is a vendor-neutral application protocol that is used to get access & maintain distributed directory information in an organized manner over Intranet or Cloud. LDAP authentication work by validating the username and password against the directories such as Active Directory.'
keywords: ''
mainButtonLink: ''
mainButtonText: ''
excerpt: 'LDAP (Lightweight Directory Access Protocol) is a vendor-neutral application protocol that is used to get access & maintain distributed directory information in an organized manner over Intranet or Cloud. LDAP authentication work by validating the username and password against the directories such as Active Directory.'
thumbnail: '/blog/assets/2023/ldap-and-active-directory.webp'
createdOn: '2022-02-19'
updatedOn: '2023-11-01'
ogTitle: 'What is LDAP (Lightweight Directory Access Protocol)?'
ogDescription: 'LDAP (Lightweight Directory Access Protocol) is a vendor-neutral application protocol that is used to get access & maintain distributed directory information in an organized manner over Intranet or Cloud. LDAP authentication work by validating the username and password against the directories such as Active Directory.'
ogImage:
    url: ''
category: ['latest', 'concepts', 'iam', 'solutions']
tags: ['LDAP AD', 'LDAP Authentication', 'LDAP Login', 'LDAP SSO']
---

### What is LDAP ? {#what-is-ldap}

The Lightweight Directory Access Protocol (LDAP) is a vendor-neutral application protocol that is used to get access & maintain distributed directory information in a well mannered & organized over Intranet or Cloud.

LDAP stores this data by way of records that contain a set of attributes. Think of the attributes like fields in a database. The record itself has a unique identifier, a ‘Distinguished Name’ in LDAP parlance, most often seen as ‘DN.’ This is the unique bit of each entry, kind of like the path to a file on your file system.

### How does LDAP authentication, authorization & access control work? {#how-does-ldap-authentication-authorization-&-access-control-work}

LDAP authentication is a process that validates the username and password against the directories such as Active Directory, Open LDAP. Which groups are a user in? Only users in the detective group should have access to the clues application, so when someone attempts to log in, ensure they are in the proper group before granting access, etc.

But how does one gain access to all of those records? The process is pretty straight forward from a flow perspective:

- A session begins with a client binding to an LDAP server (DSA, Directory System Agent).
- The client then sends an operation request (often a search or compare request, for example) to the server, asking for a particular set of information.
- The server then processes this query and supplies a response.
- The client receives the response and unbinds, then processes the data.

### LDAP Authentication Flow {#ldap-authentication}

![LDAP (Lightweight Directory Access Protocol) workflow](/blog/assets/2023/ldap-workflow.webp)

Directories, or directory information services, are network databases that store information in data trees. Each entry in the tree includes (among other, less critical components) a distinguished name, a collection of attributes, and a collection of object classes.

For example, Active Directory is the proprietary directory services provider for Windows environments. LDAP is a request-response protocol that allows you to easily interact with directory servers like Active Directory by using specific entry components in order to find, view, or edit information.

### What is Active Directory (AD)? {#what-is-active-directory-ad}

Active Directory is a directory service developed by Microsoft for Windows domain networks. It is included in most Windows Server operating systems as a set of processes and services. Initially, Active Directory was only in charge of centralized domain management.

### Active Directory Authentication Flow {#active-directory-authentication-flow}

![active directory (ldap) workflow](/blog/assets/2023/active-directory-ldap-workflow.webp)

### Limitations of Active Directory (AD) {#limitations-of-active-directory-ad}

- Active Directory infrastructure requires extra effort, maintenance and products to integrate with cloud infrastructure.
- Lack of support for Mac and Linux, so it can be burdensome to integrate with these platforms.
- It is found that Active Directory is suitable for large enterprises and hence requires a large infrastructure setup.
- Active Directory has quite high maintenance costs, as you will need Windows Server licenses and you may need to upgrade the hardware on the server so it can run Windows Server.
 

### Benefits of miniOrange LDAP {#benefits-of-miniorange-ldap}

- **Intuitive Interface** : Our Interface is designed keeping in mind the ease of use and provides a consistent user experience for all.
Regular Updates: Updates are provided regularly for better user experience.
- **Easy Setup** : Adequate support and documentation for assisting with the setup.
- **Customizable** : High level of customization and add-ons to support specific requirements.
- **Active Support** : With authentication being an essential function, a fast and priority support ensures that any issues you face on a live production site can be resolved in a timely manner.
- **Custom Pricing**: Reasonably priced with various plans tailored to suit your needs.

### Further Readings {#further-readings}

- [miniOrange LDAP Gateway](https://www.miniorange.com/miniorange-ldap-gateway)
- [Directory Services](https://www.miniorange.com/products/directory-services)
- [Windows Single Sign On](https://www.miniorange.com/windows-single-sign-on)
