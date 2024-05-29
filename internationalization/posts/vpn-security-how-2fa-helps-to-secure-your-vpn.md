---
id: '4088f23c-e640-4e48-ba68-000a59d2c03c'
title: 'VPN Security: How 2FA helps to secure your VPN?'
description: 'Secure your VPN by using different two-factor authentication methods for Fortinet FortiGate﻿ SSL VPN security, How you can use 2FA for VPN.'
metaTitle: 'VPN Security: How 2FA helps to secure your VPN?'
metaDescription: 'Secure your VPN by using different two-factor authentication methods for Fortinet FortiGate﻿ SSL VPN security, How you can use 2FA for VPN.'
keywords: 'Identity as a Service (IDaaS)'
mainButtonLink: 'https://www.miniorange.com/iam/free-trial'
mainButtonText: 'IAM Free Trial'
excerpt: 'Secure your VPN by using different two-factor authentication methods for Fortinet FortiGate﻿ SSL VPN security, How you can use 2FA for VPN.'
thumbnail: '/blog/assets/2023/two-factor-authentication-2fa-magento.webp'
createdOn: '2022-03-10'
updatedOn: '2022-11-06'
ogTitle: 'VPN Security: How 2FA helps to secure your VPN?'
ogDescription: 'Secure your VPN by using different two-factor authentication methods for Fortinet FortiGate﻿ SSL VPN security, How you can use 2FA for VPN.'
ogImage:
    url: ''
category: ['concepts']
tags:
    [
		'IAM',
        'VPN MFA',
        'Single Sign-On',
        'MFA',
        'Security',
        '2FA',
        'Fortinet MFA',
        'Authentication',
    ]
---

On September 2021, an attacker published credentials for 87,000 FortiGate SSL VPN devices online and created a huge threat to VPN Security by exploiting a known, old vulnerability. Investigators concluded that the credential was obtained by exploiting CVE-2018-13379, a vulnerability that allows unauthenticated attackers to download system files via specially crafted HTTP resource requests. Its vulnerability was given a CVSS score of 9.8.

During an attacker’s web scan for vulnerable devices, they got hold of the stolen info from “systems that remained unpatched” at the time, says Fortinet. Unless FortiOS SSL VPN passwords are changed since this scan, they can be compromised, according to Fortinet. “Fortinet has been actively advising and educating its customers about these vulnerabilities since first discovering them, urging them repeatedly to update their affected systems as soon as possible,” the company said in June.

Due to FortiOS SSL VPN’s popularity with enterprise users, this can also be used to compromise network security.

![Fortinet Attack](/blog/assets/2023/fortinet-attack.webp)

### Benefits of VPN {#benefits-of-vpn}
When you activate VPN on your device, it mainly provides the following benefits:

- **Privacy** — shields IP addresses, locations, search histories, and other details from being tracked by websites, browsers, cable companies, internet service providers, and others.
- **Security** — ensuring the safety of your personal information while it’s in transit or being received from and sent from your device.

![VPN MFA](/blog/assets/2023/vpn.webp) 

### Are VPNs really so secure? {#are-vpns-really-so-secure}

Although VPNs are good tools, they aren’t perfect. Malware and online attacks can infect them just like any computer program. VPN security is negated if infected. An attacker can use arbitrary data such as authentication files to retrieve data from many SSL VPN products. Additionally, **unauthorized attachment to a VPN** provides the attacker with a secondary exploit entry to a root shell.

In an eye-commencing article through Forbes, agencies all over the globe discovered simply how susceptible all of the “secure” VPNs with inside the marketplace are. Here is a series of Statistics on VPNs that would make you rethink your VPN security: Out of the ~ 5 Billion customers on the internet today, **~25% use VPNs**. That is an overwhelmingly big range to get access to factors to essential data and should be secured with no compromises. The studies observed that nearly 40% of VPNs comprise some form of malware in them. Even extra unexpected is the truth that this same study discovered over 70% of VPNs to embed a few shapes of unreliable and unethical third-party monitoring devices in the service. Free VPNs or even some paid VPNs have an inner data rate limiter setup, which nearly ensures slower speeds and therefore lesser efficiency. Advertisements on VPNs are a problem of notable difficulty as maximum Advertisements come connected with a risky user fingerprint that can best be made through tracking and sharing user records.

As we have seen in the above scenario, using specially crafted HTTP resource requests, an unauthenticated attacker may be able to download FortiOS system files through a path **traversal vulnerability** in the FortiOS SSL VPN web portal.

### How Two-Factor Authentication can be helpful? {#how-two-factor-authentication-can-be-helpful}

[Two-factor authentication (2FA)](https://www.miniorange.com/products/two-factor-authentication-(2fa)) prevents hackers from having access to your network using compromised credentials. 2FA calls for customers to validate their identification by supplying a 2nd safety component in addition to their password. When connecting to a company network, users have to first input their Active Directory credentials, followed by a time-factor based one-time password (OTP) or HMAC. This OTP is displayed on something that a user “owns”, including a specialized cell phone application known as an authenticator or a programmable hardware token. Ultimately, this provides an additional layer of security for your systems against unauthorized access.

![Mobile 2fa](/blog/assets/2023/2fa-mobile.webp)

### How VPN security is achieved with 2FA? {#how-vpn-security-is-achieved-with-2fa}

VPNs are a vital part of many businesses’ security infrastructures, providing employees with secure remote access to company resources. However, VPNs can also be vulnerable to attack if they are not properly secured.One way to help secure a VPN is to use Two-Factor Authentication (2FA) for all users. 2FA requires users to provide more than one form of authentication to access a system or resource. For example, a user might need to enter a password and also use a fingerprint reader or mobile device for two-factor authentication.2FA can be used to help secure both the client-side and server-side of a VPN connection. On the client side, 2FA can be used to authenticate the user before the VPN client software is even launched. This helps prevent attackers from launching the VPN client software with stolen credentials.On the server side, 2FA can be used to authenticate VPN users when they attempt to connect to the server. This helps ensure that only authorized users are able to access the server and helps prevent man-in-the-middle attacks. 2FA is not a perfect solution, but it can be an effective way for your **VPN security**.

### How can miniOrange help with VPN Security? {#how-can-miniOrange-help-with-vpn-security}

We can help you set up Two-factor authentication without problems and resolve the trouble of safety vulnerabilities in addition to privileged access control. If you’re using a Virtual Private Network, to permit your customers to connect over a public network, improving the security turns into a difficulty considering customers gain access to sensitive virtual assets. We can be of great help by providing [2FA on top of VPN Authentication](https://www.miniorange.com/iam/solutions/vpn-mfa-multi-factor-authentication). This secures access to protected resources instead of relying on only the VPN username/password.

Enabling Two-factor authentication for your Fortinet FortiGate managed active directory increases security and ensures customers only have access to the systems and resources they need access to.

### miniOrange 2FA for Fortinet FortiGate Login {#miniorange-2fa-for-fortinet-fortigate-login}

miniOrange accomplishes this by appearing as a **RADIUS server** that accepts the username/password of the consumer entered as a RADIUS request and validates the customer towards the user store as **Active Directory (AD)**. After the primary stage of verification, miniOrange activates the customer with 2FA and grants or denies access depending on the input through the customer.

![VPN Security](/blog/assets/2023/radius-server-flow.webp)

- Primary authentication starts off with the customer entering his Username and Password for Fortinet FortiGate.
- This request portrays as an authentication request to the RADIUS Server.
- miniOrange RADIUS server processes customer credentials to authenticate against the credentials saved in AD (Active Directory) / Database.
- Once the customer‘s first stage of authentication receives approval, AD sends the affirmation to RADIUS Server.
- After this miniOrange RADIUS Server asks for a 2FA task to the customer.
- Now, the customer enters the response/code which he gets on his hardware/phone.
- Customer feedback is scanned at miniOrange’s RADIUS Server side.
- After validating the successful 2nd-factor authentication, the RADIUS server gives access to the customer.

### What are different 2FA/MFA methods for Fortinet FortiGate supported by miniOrange? {#what-are-different-2fa/mfa-methods for-fortinet-fortigate-supported-by-miniOrange}
In addition to Push Notification, Soft Token, Microsoft/Google Authenticator, we support different methods of [2FA/MFA for Fortinet FortiGate](https://www.miniorange.com/iam/integrations/fortinet-multi-factor-authentication-mfa) secure access.

![MFA Methods](/blog/assets/2023/mfa-methods.webp)

Fortinet FortiGate can be secured using any of the 2FA methods listed above. You can integrate VPN 2FA with Fortinet FortiGate and miniOrange by configuring RADIUS authentication settings and policies.

