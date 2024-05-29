---
id: 'c3c1d82f-f8bf-44be-adf4-4c701b279d2e'
title: 'What is LearnDash? How does learnDash work in SSO?'
description: "What is LearnDash? LMS or Learning Management System is an e-learning technology that enables institutions or organizations to spread their courses virtually across the globe without the physical effort required in classrooms. It also allows the user to configure their content suited for their clients."
metaTitle: 'What is LearnDash? How does learnDash work in SSO?'
metaDescription: 'What is LearnDash? LMS or Learning Management System is an e-learning technology that enables institutions or organizations to spread their courses virtually across the globe without the physical effort required in classrooms. It also allows the user to configure their content suited for their clients.'
keywords: ' wp sso for learndash, learndash single sign on'
mainButtonLink: 'https://plugins.miniorange.com/wordpress-learndash-integrator'
mainButtonText: 'Learn More'
excerpt: "What is LearnDash? LMS or Learning Management System is an e-learning technology that enables institutions or organizations to spread their courses virtually across the globe without the physical effort required in classrooms. It also allows the user to configure their content suited for their clients."
thumbnail: '/blog/assets/2023/learndash-wordpress-sso-banner.webp'
createdOn: '2022-05-12'
updatedOn: '2022-05-12'
ogTitle: 'What is LearnDash? How does learnDash work in SSO?'
ogDescription: 'What is LearnDash? LMS or Learning Management System is an e-learning technology that enables institutions or organizations to spread their courses virtually across the globe without the physical effort required in classrooms. It also allows the user to configure their content suited for their clients.'
ogImage:
    url: '/blog/assets/2023/learndash-wordpress-sso-banner.webp'
category: ["concepts"]
tags: ['WordPress', 'SSO', 'Single Sign-On', 'LearnDash', 'LearnDash WP SSO', 'LMS']
---

## What is LearnDash? How does learnDash work in SSO?

### What is LearnDash? {#what-is-learndash}
LMS or Learning Management System is an e-learning technology that enables institutions or organizations to spread their courses virtually across the globe without the physical effort required in classrooms. It also allows the user to configure their content suited for their clients.

**LearnDash** is trusted to control the learning programs for significant colleges, little to average size organizations, new companies, business people, and bloggers around the world.

In comparison with other LMS such as LearnPress or LifterLMS, LearnDash provides a greater advantage in the following ways:

1. **One Price for everything:** Unlike other LMS, LearnDash does not have different plans which divide pricing in accordance with the features. All the features of LearnDash are included for a single price which becomes more feasible compared to other LMS in terms of long-run functionality.
2. **Professional nature:** LearnDash is set up to cater to big business and large global corporations, as their impressive list of current customers infers. It also provides a range of professional features, which include branding of the LearnDash eLearning platform, integration with a wide assortment of tools and services, and much more.
![LearnDash WordPress SSO Key features](/blog/assets/2023/learndash-sso-usecase.webp)

## Benefits of SSO in LearnDash 
Single Sign-On (SSO) is a Federated Identity Management (FIM) arrangement that allows users to access multiple applications using one set of credentials. It works on a trust relationship between a Service Provider (SP) (LearnDash in this case) and an Identity Provider (IDP). This trust relationship is often based upon a certificate that is exchanged between the Identity Provider and the Service Provider.

[WordPress Single Sign-On (SSO)](https://plugins.miniorange.com/wordpress-single-sign-on-sso) in any LMS adds a great number of benefits to the platform. It not only secures user data but also helps the site owner to track user performance/progress through it. The benefits of SSO can be summarized as follows:

- **Secure shared login:** Students can use a single set of credentials i.e. IDP credentials to login into the LearnDash site
- **Group Mapping:** When a student SSOs into LearnDash, he/she is automatically assigned a group on the basis of the course purchase.
- **Role-based access:** Students are given access to courses on the basis of roles and restricted access to the content they have not purchased.
- **Course Assignments:** Assignments can be given to students on the basis of the group they are a part of.

## Why Single Sign-On (SSO) in LearnDash?

### How does SSO work with LearnDash? {#how-does-sso-work-with-learndash}
Single Sign-On (SSO) in  LearnDash can be best understood by the Use Cases that we have solved for customers. Let’s see some of them below.

Selling courses online: A content provider has a LearnDash site for courses along with a WooCommerce site that sells the courses. The content provider has onboarded an organization whose employees can purchase and take the courses on his site. The organization’s users are stored in the organization’s Identity Provider, AzureAD. In such a case, when an organization employee tries to purchase a course on WooCommerce, SSO would allow the user to validate his identity by logging into Woocommerce using the organization’s AzureAD.Once the employee SSOs into the WordPress site using AzureAD, the employee attributes (like first name, last name, email, phone, address, city, etc.) from AzureAD would be mapped to his user attributes in WordPress. Hence, when the employee proceeds to checkout, details required for checkout are pre-filled in the checkout page fields by the attributes fetched from AzureAD, which allows him to complete the purchase and then access the course on LearnDash.

Live Teaching and Lesson Planning using Microsoft Teams: Using Microsoft credentials, users will be able to SSO into the LearnDash WordPress site which will allow them to attend live classes in Microsoft Teams through the LearnDash class link without logging in again. Users would be able to see the schedule on the WordPress LearnDash site. This class schedule can also be embedded in the Teams application in a tab for the students, which would be visible only to authenticated users.

Training Management Platform: A Training Management web app where clients log in to access its services. The platform is accessible to only clients who exist in the organization’s IDP. 

The Training Management Web App courses are developed on LearnDash. Employees will have access to the LearnDash site through a link on the web app  This would allow access to only authorized users and provide authentication into LearnDash without users having to re-enter their credentials.

LearnDash+Zoom: A LearnDash site with multiple courses can provide access to Zoom class links to only those students who have enrolled for that course. For this, a role is created for each course in LearnDash and each user is assigned a role in LearnDash when they enroll for a course. The students are allowed seamless access to Zoom classes by logging into Zoom using their LearnDash site credentials, and then they are provided access to the Zoom meeting if their role has the desired permissions.

[LearnDash Single Sign-On (SSO)| LearnDash WordPress SSO](https://plugins.miniorange.com/learndash-wordpress-single-sign-on-sso)

Let’s consider an example where we have a WordPress site in which LearnDash is installed to make/build courses and Woocommerce is installed to sell courses.
![LearnDash-WordPress-SSO-Integration](/blog/assets/2023/learndash-sso-key-features.webp)

We can see how SSO helps in limiting access to students and steering clear of outside intrusion, as well as introduces an easy and seamless way of accessing resources

**As displayed in the picture above:**

When a student tries to buy a course from a WooCommerce site, he/she is redirected to the Identity Provider login page for login.

When the student logs into the Identity Provider, [WordPress SSO](https://plugins.miniorange.com/wordpress-single-sign-on-sso) Plugin fetches his or her identity information and attributes from the IdP. After successful authentication, the student is redirected back to the checkout page with the checkout fields pre-filled by the information fetched from the Identity Provider. Once a student purchases a course, the student is assigned a role that allows the student to access the content of the course he purchased. 

### Why is miniOrange a great choice for LearnDash SSO? {#why-is-miniorange-a-great-choice-for-learndash-sso}
miniOrange solutions provide varied features along with Single Sign-On (SSO) which makes plenty of LearnDash use cases possible.

![LearnDash Single Sign-On (SSO)](/blog/assets/2023/learndash-sso-features-set.webp)

### Additional Resources  {#additional-resources}
1. [What is Single Sign-On (SSO)](https://www.miniorange.com/single-sign-on-sso)
2. [What is SAML?](https://www.miniorange.com/what-is-saml)
3. [What is LearnDash?](https://www.learndash.com/)
4. [Zoom LearnDash SSO Use Case](https://plugins.miniorange.com/learndash-zoom-sso-integration)
5. [Map LearnDash user groups](https://plugins.miniorange.com/wordpress-learndash-integrator)
6. [Frequently Asked Questions (FAQs)](https://faq.miniorange.com/kb/saml-single-sign-on/)