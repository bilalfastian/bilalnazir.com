---
title: Safely Integrating Force.com Site using Iframe
cover: "clickjacking-attacks.png"
date: 2017-12-23 00:00:00 Z
covercredit : ''
analytics: true
categories:
    - Salesforce
tags:
    - Salesforce
    - Force.com Site
    - Iframe
    - Security
    - Clickjack
---

Salesforce has become popular platform, the applications developed in Force.com platform can be integrated externally by embedding as iframe. When we expose our site publicly it becomes important to protect it from external attacks, includes XSS attack, SQL injection, and ***clickjack*** attacks.
Salesforce Force.com sites implements following protection:

1. Content Sniffing Protection 
2. Cross-Site Scripting Protection	
3. **Referrer URL Protection**
4. **Clickjack Protection**

All the different levels of protections are important, but we'll be concerned of only 'Referrer' and 'clickjack protection' here as we'll be manipulating these in our configurations below. You must be wondering I know URL referrer but what is 'clcikjack' protection really is. Well, Basically clickjacking is a way of tricking user to click on hidden iframes to make them do something which user is not aware of/intend to that let them steal your information. If you want to know more about the [clickjacking][clickjacking], you can find detailed article by Troy Hunt.

Salesforce implements security over embedding your Force.com site. Salesforce provides following list of options to protect from clickjacking, with same origin option applied by default.

* Allow framing by any page (no protection)
* **Allow framing by the same origin only (recommended)**
* Don’t allow framing by any page (most protection)

## Problem
We can embed out our iframes outside only by choosing first option **Allow framing by any page (no protection)** but we'll loose the protection and we don't want to do it. Fortunately, we can keep the clickjack protection by allowing only the target sites with combination of **[Referrer URL Protection](https://blog.mozilla.org/security/2015/01/21/meta-referrer/)** and a bit of custom code.

**Force.com site configuration**

![](/clickjack_protection1.png)

[https://help.salesforce.com/articleView?id=siteforce_clickjacking_enable.htm&type=0][salesforce_clickjacking]

## Solution
Basically, we'll allow only the known domains to alow iframe our Force.com site with help of 'Referrer' header parameter, rest of them we'll kick them out for clickjack protection.

First, we make list of domains to allow iframe our Force.com Site:

![](/allowed_frame_sites.png)

Next, we write a bit of magic code to read these settings and allow the only sites to iframe, rest of them add 'X-FRAME-OPTIONS'.
The possible values for this header can be following

	X-Frame-Options: DENY
	X-Frame-Options: SAMEORIGIN
	X-Frame-Options: ALLOW-FROM https://example.com/

In our code, first we check to if same domain is iframing


	if(domainReferer == null || domainReferer == '' || domainReferer.indexOf(URL.getSalesforceBaseUrl().toExternalForm()) >= 0)
	                IsForceComReferer = true;

and then we read through all of our custom settings, for allowed sites

	List<Allowed_Frame_Sites__c> allowedSitesList = [SELECT  Site_URL__c FROM Allowed_Frame_Sites__c];

And if referrer is one of the allowed sites we set the flag true to allow.

## Complete Code

### Visualforce Page
Apply this controller to your specific Visualforce page, or apply to your whole site template across all the pages.

![](/vf_template.png)

### Apex Controller
<script src="https://gist.github.com/bilalfastian/fc3489992176b5887719dc16c5108ca0.js"></script>



## Demo

<script async src="https://jsfiddle.net/bilalfastian/4cog049f/embed/html,result/"></script>

[salesforce_clickjacking]: [https://help.salesforce.com/articleView?id=siteforce_clickjacking_enable.htm&type=0]
[clickjacking]: https://www.troyhunt.com/clickjack-attack-hidden-threat-right-in/