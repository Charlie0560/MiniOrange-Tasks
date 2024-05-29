---
id: '7968740c-38d1-43d0-a2c0-1319c9eee1d6'
title: 'What is Amazon Cognito and how can you Single Sign-On into WordPress using AWS Cognito?'
description: 'Amazon Cognito also provides secure access to other AWS services from their app by defining roles and mapping users to different roles and federating identities from different identity providers.'
metaTitle: "Amazon Cognito Single Sign-On (SSO) | WordPress SSO With Cognito"
metaDescription: "Use Amazon Cognito credentials for WordPress Single Sign-On. With the miniOrange OAuth plugin, easily implement Single Sign-On (SSO) and login into WordPress using Amazon Cognito."
keywords: ''
mainButtonLink: 'https://www.miniorange.com/contact'
mainButtonText: 'Contact us'
excerpt: ''

thumbnail: '/blog/assets/2023/wordpress-cognito-sso.webp'
createdOn: '2023-09-04'
updatedOn: '2023-09-04'
ogTitle: "Amazon Cognito Single Sign-On (SSO) | WordPress SSO With Cognito"
ogDescription: "Use Amazon Cognito credentials for WordPress Single Sign-On. With the miniOrange OAuth plugin, easily implement Single Sign-On (SSO) and login into WordPress using Amazon Cognito."
ogImage:
    url: ''
category: ['Solutions']
tags:
 [
	'SSO solution for Data Protection',
  'securing Ecommerce site',
  'Ecommerce data security',
  'Ecommerce Data Privacy ',
 ]
---

### What is Amazon / AWS Cognito? {#what-is-aws}

Amazon Cognito is a service that comes under Amazon Web Services. Amazon Cognito can handle user authentication and access for mobile apps that are linked to the internet. The service stores and synchronizes end-user data, by which developers can focus on creating code rather than building and handling back-end infrastructure. This can aid in the creation of mobile applications.

Amazon Cognito also provides secure access to other AWS services from their app by defining roles and mapping users to different roles and federating identities from different identity providers. Explore our [WordPress plugin](https://wordpress.org/plugins/miniorange-login-with-eve-online-google-facebook/), which integrates [Single Sign-On (SSO)](https://plugins.miniorange.com/wordpress-sso) functionality with AWS Cognito using the OAuth 2.0 protocol. Try [WordPress Cognito integration](https://plugins.miniorange.com/aws-cognito-wordpress-single-sign-on-integration) on our WordPress environment.

### What is WordPress Amazon Cognito SSO (Single Sign-On)?  {#what-is-wp-aws-sso}

Consider you have a WordPress website and users are stored in the AWS Cognito. Now you want a solution where the users can login into your WordPress website using the Amazon Cognito credentials and that’s where Single Sign-On comes into play. Using SSO you are delegating authentication i.e you hand off the responsibility of verifying a user’s credentials (such as username and password) to AWS so you can get users logged in to your website without worrying about the authentication process.

Using AWS Cognito as an OAuth and OpenID Connect provider your users can securely login into WordPress. With AWS Cognito Single Sign-On (SSO), your users may log in and access your WordPress site by authenticating with their AWS Cognito identity provider. With regards to SSO, Single sign-on is an authentication scheme that allows a user to log in with a single ID and password to any of several related, yet independent, software systems, in this case, the Single Sign-On (SSO) with WordPress allows your users to login to your WordPress and access the site by authenticating with their Amazon Cognito identity provider.

### Top 3 Amazon Cognito SSO Scenarios for your WordPress Website {#aws-scenarios}

![AWS usecases](/blog/assets/2023/wordpress-cognito-sso-usecases.webp)

- **Register User in Amazon Cognito pools from the WordPress website:**

The Registration form on the WP site is generally designed using one of the forms’ plugins like gravity forms, elementor, WP forms, Formidable Pro-Forms. The registration form contains all the input fields as per the use case. Users then register in that form like any other registrations out there, and they get created in your Amazon Cognito user pool seamlessly, all the tedious work is done at the backend by the WordPress Cognito integrator. 

- **Login users into WordPress without redirecting them to Cognito:**

This is useful when you are looking to customize the login form design using the CSS of your own choice. But, Amazon Cognito doesn’t provide this option. It would have been possible to create a login form of your choice in WordPress and login users using Password grant which is provided by the Premium version of our OAuth & OpenId Connect Client Single Sign-On (SSO) plugin, but Cognito doesn’t support Password grant either. So, the only option left is to use the WordPress Cognito integrator which solves this problem like a charm. 

This is also useful if you don’t want to redirect users to Amazon Cognito at all for Single Sign-On (SSO) and instead create a login form in WordPress that would authenticate users from Cognito. The WordPress Cognito integrator will handle the login from the WordPress login form.

- **Have multiple WordPress sites, choose Cognito to maintain users:**

Consider you have multiple WordPress sites and you don’t want to maintain separate login and registration for all the applications and are instead looking for a seamless Registration from one site and log in with the same credentials to all the sites, WordPress Cognito integrator will be a one-stop solution for this. This will need customization based on your registration form and how many sites you are using Cognito login for.


### What Are Some Key Features of WP Cognito Integrator? {#key-features}

WordPress Cognito integrator works in conjunction with the WordPress OAuth & OpenId Connect Client Single Sign-On (SSO) Plugin. WordPress Cognito integrator provides functionality to manage all the user operations from your WordPress site. 

- Cognito login from default WP login form.

- Cognito user creation from the registration form in WP (As the registration form is unique for each site, this needs customization according to the form created and its corresponding fields).

- Cognito user profile update from update form in WP (This feature also needs customization for the same reason).

- Cognito password reset using default WP password reset functionality.


### Additional Resources {#additional-resources}

- [AWS Cognito OAuth SSO in WordPress](https://plugins.miniorange.com/aws-cognito-single-sign-on-wordpress-sso-oauth-openid-connect).
- [WordPress Cognito Integration](https://plugins.miniorange.com/aws-cognito-wordpress-single-sign-on-integration)
- [WordPress Amazon SSO](https://plugins.miniorange.com/amazon-oauth-and-openid-connect-single-sign-on-sso-login)