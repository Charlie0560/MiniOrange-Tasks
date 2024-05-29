---
id: '67e7e50a-842e-4d53-98a1-a5e88273a37d'
title: 'What is Deprovisioning & why is it important?'
description: 'Deprovisioning ensures that the former employees do not have access to the organization’s resources right at the moment that they leave.'
metaTitle: 'What is Deprovisioning & why is it important?'
metaDescription: 'Deprovisioning ensures that the former employees do not have access to the organization’s resources right at the moment that they leave.'
keywords: ''
mainButtonLink: ''
mainButtonText: ''
excerpt: 'Deprovisioning ensures that the former employees do not have access to the organization’s resources right at the moment that they leave.'
thumbnail: '/blog/assets/2023/provisioning.webp'
createdOn: '2022-08-19'
updatedOn: '2022-08-19'
ogTitle: 'What is Deprovisioning & why is it important?'
ogDescription: 'Deprovisioning ensures that the former employees do not have access to the organization’s resources right at the moment that they leave.'
ogImage:
    url: ''
category: ['latest', 'concepts', 'iam']
tags: ['Automated Provisioning', 'Deprovisioning', 'IAM', 'Provisioning']
---

Deprovisioning is the process of automatically removing a user’s access from numerous SAAS app accounts and network infrastructure at the same time. Deprovisioning safeguards the security and confidentiality of the company by prohibiting departing employees from using corporate resources. The Deprovisioning action is triggered when an employee quits their job or changes roles within the company.


It is an [Identity and Access Management (IAM)](https://blog.miniorange.com/what-is-iam-identity-and-access-management-system/) solution that monitors and maintains a user’s identity and attributes in relation to their access to resources across one or more systems.

Consequently, whenever a person is “deprovisioned,” their identity, assets, and all associated accounts within the organization’s network of apps and services are all automatically erased. As a result, all the granted permissions and authorizations are securely revoked.

### Why is Deprovisioning important? {#why-is-deprovisioning-important}

Employees, independent contractors, suppliers, and partners constantly enter and exit businesses, acquiring access to countless tools and programs in the process. However, they must be appropriately offboarded and deprovisioned each time they are transferred to a different area of the organization or depart the business. Deprovisioning has several advantages, some of which are listed below:

**1. Protects data from misuse** 
Suppose an employee has access to some confidential information. Until their access is revoked, they can still access this information even after leaving the company. Therefore, It’s crucial to deprovision access as soon as a former employee leaves the organization since they pose great security threats if it’s not done correctly.

**2. Removes orphaned accounts**
If an employee account is not deprovisioned properly after offboarding, it leads to orphaned accounts. These accounts contain all the information about the former employee which isn’t currently assigned to anyone. Deprovisioning removes such accounts which may become hotspots for cyber attacks if not handled correctly.

**3. Easily update or offboard employees**
Maintain, update and delete employees’ user attributes, such as usernames, roles, and profiles, and automatically assign access permissions and user accounts based on changes in their designation (promotion, change in teams/role, etc.) or simply remove the employee after they leave the company throughout the system.

**4. Eliminate human error**
Because automated provisioning eliminates manual processes, it also greatly reduces the margin of error. When removing a user from the system and revoking access, there’s less of a possibility of making a mistake with the help of deprovisioning.

### How does it work? {#how-does-it-work}

Deprovisioning deletes the accounts connected to the user and eliminates their access permissions when they are offboarded or change roles. Moreover, this procedure may now simply be automated, as opposed to the traditional one that included HR staff relaying information to the IT department and then system administrators to restrict access. Through the use of Identity and Access Management (IAM) technology, automated deprovisioning is possible.

![SCIM User provisioning](/blog/assets/2023/scim-user-provisioning.webp)

The user will be deleted (if terminated) and all accounts linked with them will be immediately modified or revoked when employees move to another department or leave the business with the help of IAM and integrated directories.

### Automated Provisioning and deprovisioning {#automated-provisioning-and-deprovisioning}

Manual Deprovisioning carries significant security risks. There may be times when the person in charge of deprovisioning delays the task or, on rare occasions, forgets to do so. Old accounts with plenty of rights continue to build up in the directory as a result, and many former employees still have active accounts in your company’s domain. Data leaks by former employees shouldn’t be unexpected in this circumstance.

[Automated deprovisioning](https://blog.miniorange.com/automated-user-provisioning/) can assist in avoiding these risky mishaps and removing human error, which can be expensive for your company. A user account is automatically deprovisioned, removing it from Active Directory and revoking all user rights. The process of adding, updating, and controlling their access must also be automated as part of automated provisioning. In comparison to the time-consuming manual method, the activity just takes a few minutes, and it significantly improves network security.


### Provisioning and Deprovisioning with miniOrange {#provisioning-and-deprovisioning-with-miniOrange}

With miniOrange and our wide range of [User Provisioning & Deprovisioning solutions](https://www.miniorange.com/products/user-provisioning), you can create, manage, & delete your external and internal users’ access to on-premises, cloud, and hybrid apps.

We also have pre-integrated apps for Provisioning and Deprovisioning:

-  [Azure/Active Directory](https://www.miniorange.com/azure-ad-provisioning)
-  [G-Suite App](https://www.miniorange.com/google-workspace-provisioning)
-  [Microsoft 365](https://www.miniorange.com/office-365-provisioning)
-  [Salesforce](https://www.miniorange.com/salesforce-provisioning)

![Deprovisioning apps](/blog/assets/2023/automated-provisioning-apps.webp)

Linked is an overview of our Provisioning solutions as well as in-depth steps to implement the solution. miniOrange can set up complete automation for User Provisioning in your organization in no time! We have both cloud and on-premise solutions available based on the organization’s requirements.

Check out all of our pre-existing Provisioning & Deprovisioning integrated apps [here](https://www.miniorange.com/iam/integrations/?id=provisioning).

### Additional Resources {#additional-resources}
- [What is Provisioning?](https://blog.miniorange.com/what-is-provisioning/)
- [JIT Provisioning](https://blog.miniorange.com/what-is-just-in-time-jit-provisioning/)
- [Watch a Video to understand more about User Provisioning & Deprovisioning](https://www.youtube.com/watch?v=No8cg_qMrR4)