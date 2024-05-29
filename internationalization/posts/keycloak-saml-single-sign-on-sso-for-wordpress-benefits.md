---
id: '99735ef5-fb66-4dd4-af70-7d1162b8dbd8'
title: 'WordPress SSO with Keycloak | Keycloak SAML Single Sign-On (SSO)'
description: 'Keycloak is an open-source Identity and Access Management system that supports Single Sign-On (SSO) capabilities for WordPress (WP) with their own set of clients. Keycloak supports all the standard identity provider protocols, such as SAML and OpenID Connect.'
keywords: 'SSO, Keycloak SAML SSO, Single Sign-On'
mainButtonLink: 'https://plugins.miniorange.com/wordpress-single-sign-on-sso'
mainButtonText: 'Learn More'
excerpt: 'Set up WordPress (WP) SAML Single Sign-On (SSO) using Keycloak IdP (Identity provider) | Login into WordPress (WP) Using Keycloak as SAML IdP.'
thumbnail: '/blog/assets/2023/wordpress-keycloak-saml-sso-banner-image.webp'
createdOn: '2023-10-07'
updatedOn: '2023-10-07'
ogTitle: 'WordPress SSO with Keycloak | Keycloak SAML Single Sign-On (SSO)'
ogDescription: 'Keycloak is an open-source Identity and Access Management system that supports Single Sign-On (SSO) capabilities for WordPress (WP) with their own set of clients. Keycloak supports all the standard identity provider protocols, such as SAML and OpenID Connect.'
ogImage:
    url: '/blog/assets/2023/wordpress-keycloak-saml-sso-banner-image.webp'
category: ['concepts']
tags:
    [
		WordPress SAML Authentication,
        SSO,
        SAML Authentication,
        Keycloak WP Login,
        Keycloak SAML SSO,
        Keycloak SAML IdP,
        MFA,
        2FA,
        Single Sign-On
    ]
---

### WHAT IS SAML SSO? {#what-is-saml-sso}
SAML [Single Sign-On (SSO)](https://blog.miniorange.com/what-is-single-sign-on-sso/) is an authentication process in which a user is provided access to multiple applications and/or websites by using only a single set of login credentials (such as username and password).   
SAML, is an authentication protocol, which is popular for browser-based enterprise applications. It is an XML standard that allows secure web domains to exchange user authentication and authorization data Using SAML 2.0. SAML authentication enables the user to have access to an entire suite of tools, including a corporate intranet, Microsoft Office, and a browser. It allows the user to tap into all of these resources under one digital signature.  

### Benefits of SAML SSO in WordPress using Keycloak as IdP : {#benefits-of-saml-sso-in-wp}
SAML 2.0 is popular for browser-based applications and is widely used for enterprise applications. It enables easy onboarding and the ability to delegate user management. It allows security systems and application software to be developed and evolve independently. This is due to the fact SAML offers a hard and fast interoperable standard interface. Standardizing the interfaces among the structures permits faster, cheaper, and more reliable integration between the service provider like WordPress (WP) and the identity provider (IdP) like Keycloak.  

- **WordPress SAML Single Sign-On (SSO) using Keycloak (IdP):**  
  SAML 2.0 provides the fastest & efficient access to multiple applications through assertion which helps to connect SAML support into WordPress Service Provider (SP) and Keycloak IdP (Identity Provider). SAML 2.0 provides a better user experience through assertion which communicates between WordPress and Keycloak (IdP).  

- **Increased Security between Keycloak and WordPress (WP):**  
  SAML authentication eliminates the passwords & provides authentication through digital signature. SAML 2.0 also uses the Public Key Infrastructure (PKI) to protect identities from attacks. SAML SSO provides a single point of authentication, which happens at Keycloak (IdP). Then, SAML transfers the identity information to WordPress (SP). This form of authentication ensures that credentials are only sent to Keycloak (IdP) directly.  

- **Reduce Password recovery time:**  
  SAML SSO will eliminate password issues such as reset and recovery, which will reduce the time to recover old passwords for SSO between Keycloak and WordPress (WP).  

- **Improved User experience:**  
  User is provided access to the WordPress (WP) website by using only a single set of login credentials This enables improved user experience to the users to login every time Without any authentication, by signing in just once with the Keycloak credentials into the WordPress (WP) Service Provider (SP).  

- **Risk transference :**  
  SAML can push responsibility for proper management of identities to the Keycloak identity provider (IdP), which is compatible with WordPress (WP) service providers.  

- **Standardization:**  
   SAML2.0 interoperates with any system independent of implementation because of its standardized format and provides seamless integration with WordPress and Keycloak for Authentication.  

- **Platform neutrality :**  
   SAML abstracts the security framework away from platform architectures and particular vendor implementations. Making security more independent of application logic is an important tenet of Service-Oriented Architecture.  

- **Loose coupling of directories:**  
   SAML does not require user information to be maintained and synchronized between directories.  

### SAML Workflow: KEYCLOAK – [WORDPRESS SSO](https://plugins.miniorange.com/wordpress-single-sign-on-sso) {#saml-workflow}
SAML SSO (Single Sign-On) works by transferring the user’s identity from the Keycloak identity provider (IdP) to the WordPress (WP) service provider (SP). This is done through an exchange of digitally signed XML documents between keycloak and WordPress (WP). If the user wants to log in to a remote application like WordPress, The following is the SSO flow taking place between keycloak and WordPress (SP) :  

- The user requests a resource from WordPress (Service Provider)
- To authenticate the user, WordPress Service Provider (SP) constructs a SAML Authentication Request, signs and optionally encrypts it, and sends it directly to the Keycloak IdP.
- Keycloak identity provider (IdP) then verifies the users received SAML Authentication Request and if it is valid, then it sends the encoded SAML response to WordPress.
- WordPress (WP) decodes and verifies the response and authenticates the user to access portal resources.

![WordPress Keycloak SAML Single Sign-On SSO](/blog/assets/2023/wordpress-keycloak-saml-sso.webp)  

**Still wondering how you can set up Single Sign-On (SSO) in WordPress using your Keycloak IdP!**

**We have a solution right here:**  
miniOrange provides you with the [SAML Single Sign-On (SSO) plugin](https://wordpress.org/plugins/miniorange-saml-20-single-sign-on/) which would enable you to configure Single Sign-On (SSO) in WordPress using your Keycloak login credentials.  
You can simply download our plugin in WordPress, after activation of our plugin you can follow Our [Step-By-Step Guide to Configure Single Sign-On (SSO) in WordPress using Keycloak as IdP](https://plugins.miniorange.com/saml-single-sign-on-sso-wordpress-using-jboss-keycloak) (Identity Provider). Our plugin will enable you to add a Single Sign-On (SSO) Login Links/widgets / Button , which redirects you to the Keycloak login page, where you can simply sign in with your Keycloak login credentials.  
Our SAML Single Sign-On (SSO) plugin provides secure SSO capabilities by enabling Auto-Redirection from WordPress Login ie. if any unauthenticated user tries to access the WordPress (WP) login page, he will get redirected to the Keycloak (IDP) login page for authentication. After successful authentication, they will be redirected back to the WordPress site.  

### Conclusion {#conclusion}
SAML protocol allows users to seamlessly Authenticate the users in [Keycloak IdP (Identity Provider) into WordPress Service provider (SP)](https://www.youtube.com/watch?v=Io6x1fTNWHI). WordPress SAML Single Sign-On (SSO) enables the users to access the WordPress (WP) website by using only a single set of login credentials enabling improved user experience.  

### Additional Resources {#additional-resources}
- [WordPress Single Sign-On login](https://plugins.miniorange.com/wordpress-single-sign-on-sso)  
- [Keycloak SAML SSO in Moodle](https://plugins.miniorange.com/moodle-saml-single-sign-on-sso-for-keycloak/)  
- [SSO using Keycloak as IDP](https://plugins.miniorange.com/keycloak-single-sign-on-wordpress-sso-saml)