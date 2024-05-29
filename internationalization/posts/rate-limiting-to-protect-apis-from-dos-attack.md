---
id: '956fe1e6-f778-4b71-a178-465d7100cee6'
title: 'How does rate limiting work to protect APIs from DOS attacks?'
description: 'API rate limits safeguard APIs from excessive usage and ensure fair access for all users. These limits define the maximum requests allowed within a specified time frame, preventing server overload and ensuring optimal API performance.'
metaTitle: 'How does rate limiting work to protect APIs from DOS attacks?'
metaDescription: 'An API rate limit is a restriction that some APIs impose on number of requests that can be made within a certain time period. The rate limit specifies the maximum number of requests that can be made per unit of time, such as per second, minute, or hour. If user exceeds rate limit, API may stop responding to their requests or return an error code.'
keywords: ''
mainButtonLink: ''
mainButtonText: ''
excerpt: 'The design of Headless systems is in such a way that the content is free from any shackles to an output, i.e., it is decoupled from any output like web page rendering. Instead, the content is sent through as data over an API.'
thumbnail: '/blog/assets/2023/rate-limiting-reverse-proxy.webp'
createdOn: '2023-04-20'
updatedOn: '2023-04-20'
ogTitle: ''
ogDescription: ''
ogImage:
    url: ''
category: ['Solutions']
tags: ['API Analytics', 'API Authentication', 'API Authorization', 'API Gateway', 'API Management', 'API Monitoring', 'API Routing', 'API Security', 'Rate Limiting', 'Reverse Proxy']
---

**What is API Rate Limiting and How Does It Work?**

An API rate limit is a restriction that some APIs impose on the number of requests that can be made within a certain time period. It is put in place to prevent excessive usage of the API and to ensure that it is used fairly by all users.

The rate limit specifies the maximum number of requests that can be made per unit of time, such as per second, minute, or hour. If a user exceeds the rate limit, the API may stop responding to their requests or may return an error code.

Rate limiting is an important mechanism to prevent abuse of APIs, to manage server resources, and to ensure that all users have a fair and equal opportunity to use the API. It is common for APIs to provide information on the rate limits in their documentation to help developers understand how to use the API responsibly.

### What is the purpose of rate limiting? {#purpose-of-rate-limiting}

The purpose of rate limiting is to restrict the amount of traffic that is allowed to pass through a system, service, or API within a certain period of time. Rate limiting is a common technique used in computer networking, web applications, and other online services to prevent abuse, reduce the risk of system overload, and improve overall performance and security.

Rate limiting can help to prevent denial-of-service (DoS) attacks, brute-force attacks, and other types of abuse that can overwhelm a system or service by generating an excessive number of requests. By limiting the number of requests that can be processed within a given time period, rate limiting can help to protect against these types of attacks.

Rate limiting can also be used to optimize system performance by preventing unnecessary or redundant requests from being processed. This can help to reduce the load on servers, improve response times, and ensure that the system remains responsive even under heavy load.

Overall, rate limiting is an important tool for maintaining the reliability, availability, and security of online systems and services.

### Some common attacks prevented by Rate Limiting {#attacks-prevented-by-rate-limiting}

- DDoS : A DDoS (Distributed Denial of Service) attack is a type of cyber attack where a large number of devices or computers are used to flood a server, network, or API with a huge amount of traffic, making it unavailable to legitimat users. In the context of APIs, a DDoS attack can be launched against an API to overwhelm its servers with requests, which can result in the API becoming unavailable, unresponsive, or unusable. This can be a serious problem, especially for businesses and organizations that rely on their APIs to provide critical services to their customers.
DDoS attacks can take various forms, including UDP floods, SYN floods, HTTP floods, and more. These attacks are often carried out using botnets, which are networks of compromised devices that can be controlled by a single attacker to launch an attack on a target.
To mitigate the risk of DDoS attacks, API providers can implement various security measures, including rate limiting, traffic filtering, and using a content delivery network (CDN) to distribute traffic across multiple servers. Additionally, it’s important to stay up-to-date on the latest security threats and vulnerabilities, and to have a plan in place to respond to an attack if one occurs.
- Brute force Attack: A brute force attack is a type of cyber attack in which an attacker uses automated software to guess a username and password or other authentication credentials in order to gain access to an API.
In the context of APIs, a brute force attack can be launched by an attacker who wants to gain unauthorized access to an API’s endpoints or data. The attacker typically uses a list of possible usernames and passwords and systematically tries each one until the correct credentials are found, or until the attacker gives up.
APIs are particularly vulnerable to brute force attacks because they often provide access to sensitive data or critical functions, such as financial transactions, without requiring additional layers of authentication. If an attacker successfully guesses a set of credentials, they could potentially access or modify sensitive data, or even take control of the API.
To mitigate the risk of brute force attacks, API providers can implement various security measures, including rate limiting, using strong authentication protocols (such as two-factor authentication), and monitoring access logs for suspicious activity. It’s also important to encourage API users to choose strong, unique passwords and to regularly change their credentials to reduce the likelihood of a successful brute force attack.
- Web scraping: Web scraping can potentially be used as an attack against API services. Here are a few ways web scraping can be used as an attack against an API service:
- Rate Limit Bypass : Many APIs have rate limits in place to prevent excessive usage and to protect the API from overloading. Web scrapers can be used to bypass these rate limits by mimicking the behavior of a legitimate user, making it harder for the API to detect and block abusive usage.
- Data Scraping : Web scrapers can be used to scrape data from an API, allowing an attacker to collect sensitive information or gain insights into the workings of the API that could be used to exploit weaknesses.
- Denial of Service : Web scrapers can be used to launch a distributed denial-of-service (DDoS) attack against an API service by overwhelming it with requests.
- Credential Stuffing : Web scrapers can be used to harvest usernames and passwords from a website or service, and then use those credentials to access APIs. To prevent web scraping attacks against API services, API providers can implement measures such as rate limiting, CAPTCHAs, and other anti-bot protections. They can also use API management tools to monitor and analyze API traffic for signs of abuse or suspicious activity. Additionally, API providers can require authentication and authorization for API access, and use techniques such as encryption and tokenization to protect sensitive data transmitted through the API.

**How will Rate Limiting be enabled in miniOrange API Gateway ?**

Enabling rate limiting in an miniOrange API Gateway involves several steps. Here’s a general overview of the process:

- Create a Policy : First, you’ll need to create a Policy in the API Gateway dashboard. This can be done through the miniOrange Console.
- Set up a quota : A quota is a limit on the number of requests that can be made to an API over a specified time period. You’ll need to set up a quota for your API. This can be done through the miniOrange API Gateway dashboard.
- Set up a rate limit : A rate limit is a limit on the number of requests that can be made to an API within a specified time period. You’ll need to set up a rate limit for your API.
Save the policy to the API dashboard: Once you’ve submitted your policy , you’ll need to attach it to the API stage that you want to rate limit. This can be done through the miniOrange dashboard Console.
- Test the rate limiting : Once you’ve set up the rate limiting, you should test it to ensure that it’s working as expected. You can do this by making requests to your API and monitoring the responses to ensure that the rate limiting is being enforced.

Overall, enabling rate limiting in miniOrange API Gateway is a fairly straightforward process that can help you manage the usage of your APIs and prevent abuse or overload.

**For managing Rate Limit, we use the fixed Window method.**

**How does the Fixed Window Rate Limiting Algorithm work?**.

The Fixed Window Rate Limiting Algorithm is a simple algorithm that is commonly used for limiting the rate of requests to a server or API. The algorithm works by allowing a fixed number of requests within a given time window, and rejecting any requests that exceed that limit.

**Here is how the algorithm works**

- Define the maximum number of requests allowed within a given time window, which is typically expressed as requests per second, minute, or hour.
- Define a fixed time window over which to count the number of requests. For example, a window of 1 minute means that the rate limit applies to a maximum number of requests over the previous 60 seconds.
- Keep track of the number of requests made within the time window.
- When a new request is received, check if the number of requests made within the time window has exceeded the maximum allowed. If it has, reject the request. If it has not, allow the request and increment the request counter.
- When the time window expires, reset the request counter to zero and start counting again.

For example, suppose we set the maximum number of requests to 100 per minute. The algorithm will allow up to 100 requests in any 60-second time window. If a request arrives when there have already been 100 requests in the previous 60 seconds, the algorithm will reject the request. If there have been fewer than 100 requests in the previous 60 seconds, the algorithm will allow the request and increment the request counter.
The Fixed Window Rate Limiting Algorithm is a simple but effective way to prevent a system from being overloaded with too many requests. However, it can lead to bursty traffic if requests arrive in large groups during the time window, which can be mitigated by using other rate-limiting algorithms that smooth the traffic more effectively.

### Further Reading {#additional-resources}

- [API Gateway](https://apisecurity.miniorange.com/)