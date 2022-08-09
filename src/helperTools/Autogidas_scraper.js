import React from 'react'
import axios from 'axios'
import Constants from '../assets/constants'
import cheerio from 'cheerio'
import ScrapingAntClient from '@scrapingant/scrapingant-client'

const Autogidas_scraper = async (vehicle) => {


    let cars = []

    let headline = 'Automobilių nerasta'

    const client = new ScrapingAntClient({ apiKey: 'dbcd5a71a3004a54bed04d4bf9d2a3f6' })

    const html = `<!DOCTYPE html><html lang="lt"><head><script src="https://securepubads.g.doubleclick.net/pagead/js/rum.js"></script><script type="text/javascript" async="" src="https://c.aaxads.com/aax.js?pub=AAXEYBR49&amp;hst=autogidas.lt&amp;ver=1.2"></script>
    <meta charset="utf-8">
    <meta name="viewport" content="viewport-fit=cover, width=device-width, maximum-scale=1.0, user-scalable=yes">
    <link rel="shortcut icon" type="image/x-icon" href="https://static.autogidas.lt/static/images/favicon.ico?v=2353">
    <link rel="apple-touch-icon" href="https://static.autogidas.lt/static/images/apple-touch-icon.png?v=2">
    <link rel="apple-touch-icon" sizes="57x57" href="https://static.autogidas.lt/static/images/apple-touch-icon-57x57.png?v=2">
    <link rel="apple-touch-icon" sizes="72x72" href="https://static.autogidas.lt/static/images/apple-touch-icon-72x72.png?v=2">
    <link rel="apple-touch-icon" sizes="76x76" href="https://static.autogidas.lt/static/images/apple-touch-icon-76x76.png?v=2">
    <link rel="apple-touch-icon" sizes="114x114" href="https://static.autogidas.lt/static/images/apple-touch-icon-114x114.png?v=2">
    <link rel="apple-touch-icon" sizes="120x120" href="https://static.autogidas.lt/static/images/apple-touch-icon-120x120.png?v=2">
    <link rel="apple-touch-icon" sizes="144x144" href="https://static.autogidas.lt/static/images/apple-touch-icon-144x144.png?v=2">
    <link rel="apple-touch-icon" sizes="152x152" href="https://static.autogidas.lt/static/images/apple-touch-icon-152x152.png?v=2">
    <link rel="apple-touch-icon" sizes="180x180" href="https://static.autogidas.lt/static/images/apple-touch-icon-180x180.png?v=2">
    <link rel="icon" type="image/png" sizes="32x32" href="https://static.autogidas.lt/static/images/favicon-32x32.png?v=2">
    <link rel="icon" type="image/png" sizes="16x16" href="https://static.autogidas.lt/static/images/favicon-16x16.png?v=2">
    <meta name="msapplication-TileColor" content="#da532c">
    <meta name="msapplication-TileImage" content="https://static.autogidas.lt/static/images/apple-touch-icon-144x144.png?v=2">
    <link rel="mask-icon" href="https://static.autogidas.lt/static/images/safari-pinned-tab.svg" color="#5bbad5">
    <title>Naudoti automobiliai | Autogidas.lt</title>
    <meta name="description" content="Parduodami naudoti automobiliai. Parduodamų naudotų automobilių skelbimai lizingu, su garantija. Polizinginiai, elektromobiliai, visureigiai, mikroautobusai, bei kitos auto transporto priemonės. ">
    <meta property="og:description" content="Parduodami naudoti automobiliai. Parduodamų naudotų automobilių skelbimai lizingu, su garantija. Polizinginiai, elektromobiliai, visureigiai, mikroautobusai, bei kitos auto transporto priemonės. ">
    <link rel="canonical" href="https://autogidas.lt/skelbimai/automobiliai/">
    <meta property="og:url" content="https://autogidas.lt/skelbimai/automobiliai/">
    <link rel="next" href="https://autogidas.lt/skelbimai/automobiliai/?f_50=kaina_asc&amp;page=2">
    <link rel="alternate" media="only screen and (max-width: 800px)" href="https://m.autogidas.lt/skelbimai/automobiliai/">
    <link rel="alternate" href="https://autogidas.lt/skelbimai/automobiliai/" hreflang="lt"><link rel="alternate" href="https://autogidas.lt/en/skelbimai/automobiliai/" hreflang="en"><link rel="alternate" href="https://autogidas.lt/ru/skelbimai/automobiliai/" hreflang="ru">
        
                                                    <meta property="og:image" content="https://autogidas.lt/static/images/new_www/facebook_default.jpg">
                    <meta property="og:image:type" content="image/jpeg">
                    <meta property="og:image:width" content="1200">
                    <meta property="og:image:height" content="630">
                        
                        <meta property="og:title" content="Naudoti automobiliai">
            
        
    
    
    <meta property="og:site_name" content="Autogidas.lt">
    <meta property="og:type" content="website">
    <meta property="fb:app_id" content="1136862073471808">
    <meta name="verify-v1" content="RAwJIB9YiMI1pAnja2gh7gisEiyCGzf8d4JjT81Up7A=">
    <meta name="verify-paysera" content="44a658a310e2fcf5bfdea150fd77ccf8">
    
    
            <meta name="theme-color" content="#30302e">
        <meta name="format-detection" content="telephone=no">
        <link rel="manifest" href="/manifest.json">
                                            <link rel="stylesheet" type="text/css" href="https://static.autogidas.lt/static/css/www/global.processed.asset.css?v=2353">
                                <link rel="stylesheet" type="text/css" href="https://static.autogidas.lt/static/css/www/list.processed.asset.css?v=2353">
                                        <!-- OneTrust Cookies Consent Notice start for autogidas.lt -->
            <script async="" src="//c.amazon-adsystem.com/aax2/apstag.js"></script><script src="https://connect.facebook.net/signals/config/215817955426323?v=2.9.66&amp;r=stable" async=""></script><script async="" src="https://connect.facebook.net/en_US/fbevents.js"></script><script type="text/javascript" async="" src="https://www.google-analytics.com/analytics.js"></script><script type="text/javascript" async="" src="https://www.googleadservices.com/pagead/conversion_async.js"></script><script type="text/javascript" async="" src="https://www.gstatic.com/recaptcha/releases/5JGZgxkKwe0uOXDdUvSaNtk_/recaptcha__en.js" crossorigin="anonymous" integrity="sha384-iwP2R5t7n0rkDwPNzs/zcXrXzVBb2b29JqfU5BhM+E4+DkZfuORYh+OvxZqtrDOR"></script><script type="text/javascript" async="" src="https://r.autogidas.lt/autogidas?pos[]=9999&amp;lng=lt&amp;tid=rba&amp;ct=cars&amp;rnds=1658820514464"></script><script async="" src="https://www.googletagmanager.com/gtm.js?id=GTM-N77HX43"></script><script src="https://cdn.cookielaw.org/scripttemplates/otSDKStub.js" data-document-language="true" type="text/javascript" charset="UTF-8" data-domain-script="b280a35d-99c8-4509-aa14-1c061d4f9fe6"></script>
            <script type="text/javascript">
            function OptanonWrapper() { }
            </script>
            <!-- OneTrust Cookies Consent Notice end for autogidas.lt -->
                        <script defer="" src="//keytarget.adnet.lt/stable/keytarget-autogidaslt.min.js"></script><script>window.adnet = window.adnet || [];window.adnet.push(['_attachData', 'category', 'cars']);window.adnet.push(['_attachData', 'price_from', '1']);window.adnet.push(['_attachData', 'price_to', '23000']);window.adnet.push(['_attachData', 'language', 'lt']);window.adnet.push(['ATG_B_1000x250_SS']);window.adnet.push(['ATG_E_750x100_SS']);window.adnet.push(['ATG_F_750x200_SS']);window.adnet.push(['ATG_G_750x100_SS']);window.adnet.push(['ATG_C_300x600_SS']);window.adnet.push(['ATG_D_300x600_SS']);window.adnet.push(['ATG_O_300x600_SS']);window.adnet.push(['ATG_H_1000x250_SS']);window.adnet.push(['_initialize']);</script><script src="https://static.autogidas.lt/static/js/r_vmedija.js?v=12"></script>	    
    <!-- Global site tag (gtag.js) - Google Ads: 10856870694 -->
    <script async="" src="https://www.googletagmanager.com/gtag/js?id=AW-10856870694"></script>
    
    <script data-cookieconsent="ignore">
        var tracker_language = 'lt';
        var tracker_platform = 'www';
    
                var user_type_dimension = 'NOT_LOGGED_IN';
        
                var user_id_dimension = 0;
        
        window.dataLayer = window.dataLayer || [];
    
        function sendGAEvent(eventCategory, eventAction, eventLabel) {
            window.dataLayer.push(
                { 'event': 'gaEvent', 'eventcategory': eventCategory, 'eventaction': eventAction, 'eventlabel' : eventLabel }
            );
        }
    
        window.addEventListener("message", defaultReceiveMessage, false);
        function defaultReceiveMessage(event)
        {
            if (event.origin == 'https://r.autogidas.lt') {
    
                if (typeof event.data.target != 'undefined' && event.data.target == 'gtag') {
                    console.log('Post message');
                    sendGAEvent(event.data.category, event.data.action, event.data.label);
                }
            }
        }
    
        // Global site tag (gtag.js) - Google Ads: 10856870694
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'AW-10856870694');
    
    </script>
    
            <script>
            var ad_category = '01';
                    var ad_image = 'https://img.autogidas.lt/4_26_217766059/dodge-charger-top-sedanas-2019.jpg';
                </script>
    
    
    <!-- Google Tag Manager -->
    <script data-cookieconsent="ignore">(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','GTM-N77HX43');</script>
    <!-- End Google Tag Manager -->
    
    <!-- DNS Prefetch -->
    <link rel="dns-prefetch" href="https://img.autogidas.lt">
    <link rel="dns-prefetch" href="https://static.autogidas.lt">
    <link rel="dns-prefetch" href="https://r.autogidas.lt">
    <!-- End DNS Prefetch -->
    <script type="text/javascript" async="" src="https://static.autogidas.lt/static/js/lazysizes.min.processed.asset.js?v=2353"></script>
    
    <script src="https://cdn.cookielaw.org/scripttemplates/6.17.0/otBannerSdk.js" async="" type="text/javascript"></script><link rel="stylesheet" type="text/css" href="//chat.vmedija.lt/chat.autogidas.min.css?v=44"><meta http-equiv="origin-trial" content="A9wkrvp9y21k30U9lU7MJMjBj4USjLrGwV+Z8zO3J3ZBH139DOnCv3XLK2Ii40S94HG1SZ/Zeg2GSHOD3wlWngYAAAB7eyJvcmlnaW4iOiJodHRwczovL3d3dy5nb29nbGV0YWdtYW5hZ2VyLmNvbTo0NDMiLCJmZWF0dXJlIjoiUHJpdmFjeVNhbmRib3hBZHNBUElzIiwiZXhwaXJ5IjoxNjYxMjk5MTk5LCJpc1RoaXJkUGFydHkiOnRydWV9"><script type="text/javascript" async="" src="https://cdn.cookielaw.org/scripttemplates/6.17.0/otTCF.js"></script><style id="onetrust-style">#onetrust-banner-sdk{-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%}#onetrust-banner-sdk .onetrust-vendors-list-handler{cursor:pointer;color:#1f96db;font-size:inherit;font-weight:bold;text-decoration:none;margin-left:5px}#onetrust-banner-sdk .onetrust-vendors-list-handler:hover{color:#1f96db}#onetrust-banner-sdk:focus{outline:2px solid #000;outline-offset:-2px}#onetrust-banner-sdk a:focus{outline:2px solid #000}#onetrust-banner-sdk .ot-close-icon,#onetrust-pc-sdk .ot-close-icon,#ot-sync-ntfy .ot-close-icon{background-image:url("data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iMzQ4LjMzM3B4IiBoZWlnaHQ9IjM0OC4zMzNweCIgdmlld0JveD0iMCAwIDM0OC4zMzMgMzQ4LjMzNCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMzQ4LjMzMyAzNDguMzM0OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+PGc+PHBhdGggZmlsbD0iIzU2NTY1NiIgZD0iTTMzNi41NTksNjguNjExTDIzMS4wMTYsMTc0LjE2NWwxMDUuNTQzLDEwNS41NDljMTUuNjk5LDE1LjcwNSwxNS42OTksNDEuMTQ1LDAsNTYuODVjLTcuODQ0LDcuODQ0LTE4LjEyOCwxMS43NjktMjguNDA3LDExLjc2OWMtMTAuMjk2LDAtMjAuNTgxLTMuOTE5LTI4LjQxOS0xMS43NjlMMTc0LjE2NywyMzEuMDAzTDY4LjYwOSwzMzYuNTYzYy03Ljg0Myw3Ljg0NC0xOC4xMjgsMTEuNzY5LTI4LjQxNiwxMS43NjljLTEwLjI4NSwwLTIwLjU2My0zLjkxOS0yOC40MTMtMTEuNzY5Yy0xNS42OTktMTUuNjk4LTE1LjY5OS00MS4xMzksMC01Ni44NWwxMDUuNTQtMTA1LjU0OUwxMS43NzQsNjguNjExYy0xNS42OTktMTUuNjk5LTE1LjY5OS00MS4xNDUsMC01Ni44NDRjMTUuNjk2LTE1LjY4Nyw0MS4xMjctMTUuNjg3LDU2LjgyOSwwbDEwNS41NjMsMTA1LjU1NEwyNzkuNzIxLDExLjc2N2MxNS43MDUtMTUuNjg3LDQxLjEzOS0xNS42ODcsNTYuODMyLDBDMzUyLjI1OCwyNy40NjYsMzUyLjI1OCw1Mi45MTIsMzM2LjU1OSw2OC42MTF6Ii8+PC9nPjwvc3ZnPg==");background-size:contain;background-repeat:no-repeat;background-position:center;height:12px;width:12px}#onetrust-banner-sdk .powered-by-logo,#onetrust-banner-sdk .ot-pc-footer-logo a,#onetrust-pc-sdk .powered-by-logo,#onetrust-pc-sdk .ot-pc-footer-logo a,#ot-sync-ntfy .powered-by-logo,#ot-sync-ntfy .ot-pc-footer-logo a{background-size:contain;background-repeat:no-repeat;background-position:center;height:25px;width:152px;display:block}#onetrust-banner-sdk h3 *,#onetrust-banner-sdk h4 *,#onetrust-banner-sdk h6 *,#onetrust-banner-sdk button *,#onetrust-banner-sdk a[data-parent-id] *,#onetrust-pc-sdk h3 *,#onetrust-pc-sdk h4 *,#onetrust-pc-sdk h6 *,#onetrust-pc-sdk button *,#onetrust-pc-sdk a[data-parent-id] *,#ot-sync-ntfy h3 *,#ot-sync-ntfy h4 *,#ot-sync-ntfy h6 *,#ot-sync-ntfy button *,#ot-sync-ntfy a[data-parent-id] *{font-size:inherit;font-weight:inherit;color:inherit}#onetrust-banner-sdk .ot-hide,#onetrust-pc-sdk .ot-hide,#ot-sync-ntfy .ot-hide{display:none !important}#onetrust-pc-sdk .ot-sdk-row .ot-sdk-column{padding:0}#onetrust-pc-sdk .ot-sdk-container{padding-right:0}#onetrust-pc-sdk .ot-sdk-row{flex-direction:initial;width:100%}#onetrust-pc-sdk [type="checkbox"]:checked,#onetrust-pc-sdk [type="checkbox"]:not(:checked){pointer-events:initial}#onetrust-pc-sdk [type="checkbox"]:disabled+label::before,#onetrust-pc-sdk [type="checkbox"]:disabled+label:after,#onetrust-pc-sdk [type="checkbox"]:disabled+label{pointer-events:none;opacity:0.7}#onetrust-pc-sdk #vendor-list-content{transform:translate3d(0, 0, 0)}#onetrust-pc-sdk li input[type="checkbox"]{z-index:1}#onetrust-pc-sdk li .ot-checkbox label{z-index:2}#onetrust-pc-sdk li .ot-checkbox input[type="checkbox"]{height:auto;width:auto}#onetrust-pc-sdk li .host-title a,#onetrust-pc-sdk li .ot-host-name a,#onetrust-pc-sdk li .accordion-text,#onetrust-pc-sdk li .ot-acc-txt{z-index:2;position:relative}#onetrust-pc-sdk input{margin:3px 0.1ex}#onetrust-pc-sdk .toggle-always-active{opacity:0.6;cursor:default}#onetrust-pc-sdk .pc-logo,#onetrust-pc-sdk .ot-pc-logo{height:60px;width:180px;background-position:center;background-size:contain;background-repeat:no-repeat}#onetrust-pc-sdk .ot-tooltip .ot-tooltiptext{visibility:hidden;width:120px;background-color:#555;color:#fff;text-align:center;padding:5px 0;border-radius:6px;position:absolute;z-index:1;bottom:125%;left:50%;margin-left:-60px;opacity:0;transition:opacity 0.3s}#onetrust-pc-sdk .ot-tooltip .ot-tooltiptext::after{content:"";position:absolute;top:100%;left:50%;margin-left:-5px;border-width:5px;border-style:solid;border-color:#555 transparent transparent transparent}#onetrust-pc-sdk .ot-tooltip:hover .ot-tooltiptext{visibility:visible;opacity:1}#onetrust-pc-sdk .ot-tooltip{position:relative;display:inline-block;z-index:3}#onetrust-pc-sdk .ot-tooltip svg{color:grey;height:20px;width:20px}#onetrust-pc-sdk .screen-reader-only,#onetrust-pc-sdk .ot-scrn-rdr,.ot-sdk-cookie-policy .screen-reader-only,.ot-sdk-cookie-policy .ot-scrn-rdr{border:0;clip:rect(0 0 0 0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px}#onetrust-pc-sdk.ot-fade-in,.onetrust-pc-dark-filter.ot-fade-in,#onetrust-banner-sdk.ot-fade-in{animation-name:onetrust-fade-in;animation-duration:400ms;animation-timing-function:ease-in-out}#onetrust-pc-sdk.ot-hide{display:none !important}.onetrust-pc-dark-filter.ot-hide{display:none !important}#ot-sdk-btn.ot-sdk-show-settings,#ot-sdk-btn.optanon-show-settings{color:#68b631;border:1px solid #68b631;height:auto;white-space:normal;word-wrap:break-word;padding:0.8em 2em;font-size:0.8em;line-height:1.2;cursor:pointer;-moz-transition:0.1s ease;-o-transition:0.1s ease;-webkit-transition:1s ease;transition:0.1s ease}#ot-sdk-btn.ot-sdk-show-settings:hover,#ot-sdk-btn.optanon-show-settings:hover{color:#fff;background-color:#68b631}.onetrust-pc-dark-filter{background:rgba(0,0,0,0.5);z-index:2147483646;width:100%;height:100%;overflow:hidden;position:fixed;top:0;bottom:0;left:0}@keyframes onetrust-fade-in{0%{opacity:0}100%{opacity:1}}@media only screen and (min-width: 426px) and (max-width: 896px) and (orientation: landscape){#onetrust-pc-sdk p{font-size:0.75em}}#onetrust-banner-sdk .banner-option-input:focus+label{outline:1px solid #000;outline-style:auto}
    #onetrust-banner-sdk,#onetrust-pc-sdk,#ot-sdk-cookie-policy,#ot-sync-ntfy{font-size:16px}#onetrust-banner-sdk *,#onetrust-banner-sdk ::after,#onetrust-banner-sdk ::before,#onetrust-pc-sdk *,#onetrust-pc-sdk ::after,#onetrust-pc-sdk ::before,#ot-sdk-cookie-policy *,#ot-sdk-cookie-policy ::after,#ot-sdk-cookie-policy ::before,#ot-sync-ntfy *,#ot-sync-ntfy ::after,#ot-sync-ntfy ::before{-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box}#onetrust-banner-sdk div,#onetrust-banner-sdk span,#onetrust-banner-sdk h1,#onetrust-banner-sdk h2,#onetrust-banner-sdk h3,#onetrust-banner-sdk h4,#onetrust-banner-sdk h5,#onetrust-banner-sdk h6,#onetrust-banner-sdk p,#onetrust-banner-sdk img,#onetrust-banner-sdk svg,#onetrust-banner-sdk button,#onetrust-banner-sdk section,#onetrust-banner-sdk a,#onetrust-banner-sdk label,#onetrust-banner-sdk input,#onetrust-banner-sdk ul,#onetrust-banner-sdk li,#onetrust-banner-sdk nav,#onetrust-banner-sdk table,#onetrust-banner-sdk thead,#onetrust-banner-sdk tr,#onetrust-banner-sdk td,#onetrust-banner-sdk tbody,#onetrust-banner-sdk .ot-main-content,#onetrust-banner-sdk .ot-toggle,#onetrust-banner-sdk #ot-content,#onetrust-banner-sdk #ot-pc-content,#onetrust-banner-sdk .checkbox,#onetrust-pc-sdk div,#onetrust-pc-sdk span,#onetrust-pc-sdk h1,#onetrust-pc-sdk h2,#onetrust-pc-sdk h3,#onetrust-pc-sdk h4,#onetrust-pc-sdk h5,#onetrust-pc-sdk h6,#onetrust-pc-sdk p,#onetrust-pc-sdk img,#onetrust-pc-sdk svg,#onetrust-pc-sdk button,#onetrust-pc-sdk section,#onetrust-pc-sdk a,#onetrust-pc-sdk label,#onetrust-pc-sdk input,#onetrust-pc-sdk ul,#onetrust-pc-sdk li,#onetrust-pc-sdk nav,#onetrust-pc-sdk table,#onetrust-pc-sdk thead,#onetrust-pc-sdk tr,#onetrust-pc-sdk td,#onetrust-pc-sdk tbody,#onetrust-pc-sdk .ot-main-content,#onetrust-pc-sdk .ot-toggle,#onetrust-pc-sdk #ot-content,#onetrust-pc-sdk #ot-pc-content,#onetrust-pc-sdk .checkbox,#ot-sdk-cookie-policy div,#ot-sdk-cookie-policy span,#ot-sdk-cookie-policy h1,#ot-sdk-cookie-policy h2,#ot-sdk-cookie-policy h3,#ot-sdk-cookie-policy h4,#ot-sdk-cookie-policy h5,#ot-sdk-cookie-policy h6,#ot-sdk-cookie-policy p,#ot-sdk-cookie-policy img,#ot-sdk-cookie-policy svg,#ot-sdk-cookie-policy button,#ot-sdk-cookie-policy section,#ot-sdk-cookie-policy a,#ot-sdk-cookie-policy label,#ot-sdk-cookie-policy input,#ot-sdk-cookie-policy ul,#ot-sdk-cookie-policy li,#ot-sdk-cookie-policy nav,#ot-sdk-cookie-policy table,#ot-sdk-cookie-policy thead,#ot-sdk-cookie-policy tr,#ot-sdk-cookie-policy td,#ot-sdk-cookie-policy tbody,#ot-sdk-cookie-policy .ot-main-content,#ot-sdk-cookie-policy .ot-toggle,#ot-sdk-cookie-policy #ot-content,#ot-sdk-cookie-policy #ot-pc-content,#ot-sdk-cookie-policy .checkbox,#ot-sync-ntfy div,#ot-sync-ntfy span,#ot-sync-ntfy h1,#ot-sync-ntfy h2,#ot-sync-ntfy h3,#ot-sync-ntfy h4,#ot-sync-ntfy h5,#ot-sync-ntfy h6,#ot-sync-ntfy p,#ot-sync-ntfy img,#ot-sync-ntfy svg,#ot-sync-ntfy button,#ot-sync-ntfy section,#ot-sync-ntfy a,#ot-sync-ntfy label,#ot-sync-ntfy input,#ot-sync-ntfy ul,#ot-sync-ntfy li,#ot-sync-ntfy nav,#ot-sync-ntfy table,#ot-sync-ntfy thead,#ot-sync-ntfy tr,#ot-sync-ntfy td,#ot-sync-ntfy tbody,#ot-sync-ntfy .ot-main-content,#ot-sync-ntfy .ot-toggle,#ot-sync-ntfy #ot-content,#ot-sync-ntfy #ot-pc-content,#ot-sync-ntfy .checkbox{font-family:inherit;font-weight:normal;-webkit-font-smoothing:auto;letter-spacing:normal;line-height:normal;padding:0;margin:0;height:auto;min-height:0;max-height:none;width:auto;min-width:0;max-width:none;border-radius:0;border:none;clear:none;float:none;position:static;bottom:auto;left:auto;right:auto;top:auto;text-align:left;text-decoration:none;text-indent:0;text-shadow:none;text-transform:none;white-space:normal;background:none;overflow:visible;vertical-align:baseline;visibility:visible;z-index:auto;box-shadow:none}#onetrust-banner-sdk label:before,#onetrust-banner-sdk label:after,#onetrust-banner-sdk .checkbox:after,#onetrust-banner-sdk .checkbox:before,#onetrust-pc-sdk label:before,#onetrust-pc-sdk label:after,#onetrust-pc-sdk .checkbox:after,#onetrust-pc-sdk .checkbox:before,#ot-sdk-cookie-policy label:before,#ot-sdk-cookie-policy label:after,#ot-sdk-cookie-policy .checkbox:after,#ot-sdk-cookie-policy .checkbox:before,#ot-sync-ntfy label:before,#ot-sync-ntfy label:after,#ot-sync-ntfy .checkbox:after,#ot-sync-ntfy .checkbox:before{content:"";content:none}
    #onetrust-banner-sdk .ot-sdk-container,#onetrust-pc-sdk .ot-sdk-container,#ot-sdk-cookie-policy .ot-sdk-container{position:relative;width:100%;max-width:100%;margin:0 auto;padding:0 20px;box-sizing:border-box}#onetrust-banner-sdk .ot-sdk-column,#onetrust-banner-sdk .ot-sdk-columns,#onetrust-pc-sdk .ot-sdk-column,#onetrust-pc-sdk .ot-sdk-columns,#ot-sdk-cookie-policy .ot-sdk-column,#ot-sdk-cookie-policy .ot-sdk-columns{width:100%;float:left;box-sizing:border-box;padding:0;display:initial}@media (min-width: 400px){#onetrust-banner-sdk .ot-sdk-container,#onetrust-pc-sdk .ot-sdk-container,#ot-sdk-cookie-policy .ot-sdk-container{width:90%;padding:0}}@media (min-width: 550px){#onetrust-banner-sdk .ot-sdk-container,#onetrust-pc-sdk .ot-sdk-container,#ot-sdk-cookie-policy .ot-sdk-container{width:100%}#onetrust-banner-sdk .ot-sdk-column,#onetrust-banner-sdk .ot-sdk-columns,#onetrust-pc-sdk .ot-sdk-column,#onetrust-pc-sdk .ot-sdk-columns,#ot-sdk-cookie-policy .ot-sdk-column,#ot-sdk-cookie-policy .ot-sdk-columns{margin-left:4%}#onetrust-banner-sdk .ot-sdk-column:first-child,#onetrust-banner-sdk .ot-sdk-columns:first-child,#onetrust-pc-sdk .ot-sdk-column:first-child,#onetrust-pc-sdk .ot-sdk-columns:first-child,#ot-sdk-cookie-policy .ot-sdk-column:first-child,#ot-sdk-cookie-policy .ot-sdk-columns:first-child{margin-left:0}#onetrust-banner-sdk .ot-sdk-one.ot-sdk-column,#onetrust-banner-sdk .ot-sdk-one.ot-sdk-columns,#onetrust-pc-sdk .ot-sdk-one.ot-sdk-column,#onetrust-pc-sdk .ot-sdk-one.ot-sdk-columns,#ot-sdk-cookie-policy .ot-sdk-one.ot-sdk-column,#ot-sdk-cookie-policy .ot-sdk-one.ot-sdk-columns{width:4.66666666667%}#onetrust-banner-sdk .ot-sdk-two.ot-sdk-columns,#onetrust-pc-sdk .ot-sdk-two.ot-sdk-columns,#ot-sdk-cookie-policy .ot-sdk-two.ot-sdk-columns{width:13.3333333333%}#onetrust-banner-sdk .ot-sdk-three.ot-sdk-columns,#onetrust-pc-sdk .ot-sdk-three.ot-sdk-columns,#ot-sdk-cookie-policy .ot-sdk-three.ot-sdk-columns{width:22%}#onetrust-banner-sdk .ot-sdk-four.ot-sdk-columns,#onetrust-pc-sdk .ot-sdk-four.ot-sdk-columns,#ot-sdk-cookie-policy .ot-sdk-four.ot-sdk-columns{width:30.6666666667%}#onetrust-banner-sdk .ot-sdk-five.ot-sdk-columns,#onetrust-pc-sdk .ot-sdk-five.ot-sdk-columns,#ot-sdk-cookie-policy .ot-sdk-five.ot-sdk-columns{width:39.3333333333%}#onetrust-banner-sdk .ot-sdk-six.ot-sdk-columns,#onetrust-pc-sdk .ot-sdk-six.ot-sdk-columns,#ot-sdk-cookie-policy .ot-sdk-six.ot-sdk-columns{width:48%}#onetrust-banner-sdk .ot-sdk-seven.ot-sdk-columns,#onetrust-pc-sdk .ot-sdk-seven.ot-sdk-columns,#ot-sdk-cookie-policy .ot-sdk-seven.ot-sdk-columns{width:56.6666666667%}#onetrust-banner-sdk .ot-sdk-eight.ot-sdk-columns,#onetrust-pc-sdk .ot-sdk-eight.ot-sdk-columns,#ot-sdk-cookie-policy .ot-sdk-eight.ot-sdk-columns{width:65.3333333333%}#onetrust-banner-sdk .ot-sdk-nine.ot-sdk-columns,#onetrust-pc-sdk .ot-sdk-nine.ot-sdk-columns,#ot-sdk-cookie-policy .ot-sdk-nine.ot-sdk-columns{width:74%}#onetrust-banner-sdk .ot-sdk-ten.ot-sdk-columns,#onetrust-pc-sdk .ot-sdk-ten.ot-sdk-columns,#ot-sdk-cookie-policy .ot-sdk-ten.ot-sdk-columns{width:82.6666666667%}#onetrust-banner-sdk .ot-sdk-eleven.ot-sdk-columns,#onetrust-pc-sdk .ot-sdk-eleven.ot-sdk-columns,#ot-sdk-cookie-policy .ot-sdk-eleven.ot-sdk-columns{width:91.3333333333%}#onetrust-banner-sdk .ot-sdk-twelve.ot-sdk-columns,#onetrust-pc-sdk .ot-sdk-twelve.ot-sdk-columns,#ot-sdk-cookie-policy .ot-sdk-twelve.ot-sdk-columns{width:100%;margin-left:0}#onetrust-banner-sdk .ot-sdk-one-third.ot-sdk-column,#onetrust-pc-sdk .ot-sdk-one-third.ot-sdk-column,#ot-sdk-cookie-policy .ot-sdk-one-third.ot-sdk-column{width:30.6666666667%}#onetrust-banner-sdk .ot-sdk-two-thirds.ot-sdk-column,#onetrust-pc-sdk .ot-sdk-two-thirds.ot-sdk-column,#ot-sdk-cookie-policy .ot-sdk-two-thirds.ot-sdk-column{width:65.3333333333%}#onetrust-banner-sdk .ot-sdk-one-half.ot-sdk-column,#onetrust-pc-sdk .ot-sdk-one-half.ot-sdk-column,#ot-sdk-cookie-policy .ot-sdk-one-half.ot-sdk-column{width:48%}#onetrust-banner-sdk .ot-sdk-offset-by-one.ot-sdk-column,#onetrust-banner-sdk .ot-sdk-offset-by-one.ot-sdk-columns,#onetrust-pc-sdk .ot-sdk-offset-by-one.ot-sdk-column,#onetrust-pc-sdk .ot-sdk-offset-by-one.ot-sdk-columns,#ot-sdk-cookie-policy .ot-sdk-offset-by-one.ot-sdk-column,#ot-sdk-cookie-policy .ot-sdk-offset-by-one.ot-sdk-columns{margin-left:8.66666666667%}#onetrust-banner-sdk .ot-sdk-offset-by-two.ot-sdk-column,#onetrust-banner-sdk .ot-sdk-offset-by-two.ot-sdk-columns,#onetrust-pc-sdk .ot-sdk-offset-by-two.ot-sdk-column,#onetrust-pc-sdk .ot-sdk-offset-by-two.ot-sdk-columns,#ot-sdk-cookie-policy .ot-sdk-offset-by-two.ot-sdk-column,#ot-sdk-cookie-policy .ot-sdk-offset-by-two.ot-sdk-columns{margin-left:17.3333333333%}#onetrust-banner-sdk .ot-sdk-offset-by-three.ot-sdk-column,#onetrust-banner-sdk .ot-sdk-offset-by-three.ot-sdk-columns,#onetrust-pc-sdk .ot-sdk-offset-by-three.ot-sdk-column,#onetrust-pc-sdk .ot-sdk-offset-by-three.ot-sdk-columns,#ot-sdk-cookie-policy .ot-sdk-offset-by-three.ot-sdk-column,#ot-sdk-cookie-policy .ot-sdk-offset-by-three.ot-sdk-columns{margin-left:26%}#onetrust-banner-sdk .ot-sdk-offset-by-four.ot-sdk-column,#onetrust-banner-sdk .ot-sdk-offset-by-four.ot-sdk-columns,#onetrust-pc-sdk .ot-sdk-offset-by-four.ot-sdk-column,#onetrust-pc-sdk .ot-sdk-offset-by-four.ot-sdk-columns,#ot-sdk-cookie-policy .ot-sdk-offset-by-four.ot-sdk-column,#ot-sdk-cookie-policy .ot-sdk-offset-by-four.ot-sdk-columns{margin-left:34.6666666667%}#onetrust-banner-sdk .ot-sdk-offset-by-five.ot-sdk-column,#onetrust-banner-sdk .ot-sdk-offset-by-five.ot-sdk-columns,#onetrust-pc-sdk .ot-sdk-offset-by-five.ot-sdk-column,#onetrust-pc-sdk .ot-sdk-offset-by-five.ot-sdk-columns,#ot-sdk-cookie-policy .ot-sdk-offset-by-five.ot-sdk-column,#ot-sdk-cookie-policy .ot-sdk-offset-by-five.ot-sdk-columns{margin-left:43.3333333333%}#onetrust-banner-sdk .ot-sdk-offset-by-six.ot-sdk-column,#onetrust-banner-sdk .ot-sdk-offset-by-six.ot-sdk-columns,#onetrust-pc-sdk .ot-sdk-offset-by-six.ot-sdk-column,#onetrust-pc-sdk .ot-sdk-offset-by-six.ot-sdk-columns,#ot-sdk-cookie-policy .ot-sdk-offset-by-six.ot-sdk-column,#ot-sdk-cookie-policy .ot-sdk-offset-by-six.ot-sdk-columns{margin-left:52%}#onetrust-banner-sdk .ot-sdk-offset-by-seven.ot-sdk-column,#onetrust-banner-sdk .ot-sdk-offset-by-seven.ot-sdk-columns,#onetrust-pc-sdk .ot-sdk-offset-by-seven.ot-sdk-column,#onetrust-pc-sdk .ot-sdk-offset-by-seven.ot-sdk-columns,#ot-sdk-cookie-policy .ot-sdk-offset-by-seven.ot-sdk-column,#ot-sdk-cookie-policy .ot-sdk-offset-by-seven.ot-sdk-columns{margin-left:60.6666666667%}#onetrust-banner-sdk .ot-sdk-offset-by-eight.ot-sdk-column,#onetrust-banner-sdk .ot-sdk-offset-by-eight.ot-sdk-columns,#onetrust-pc-sdk .ot-sdk-offset-by-eight.ot-sdk-column,#onetrust-pc-sdk .ot-sdk-offset-by-eight.ot-sdk-columns,#ot-sdk-cookie-policy .ot-sdk-offset-by-eight.ot-sdk-column,#ot-sdk-cookie-policy .ot-sdk-offset-by-eight.ot-sdk-columns{margin-left:69.3333333333%}#onetrust-banner-sdk .ot-sdk-offset-by-nine.ot-sdk-column,#onetrust-banner-sdk .ot-sdk-offset-by-nine.ot-sdk-columns,#onetrust-pc-sdk .ot-sdk-offset-by-nine.ot-sdk-column,#onetrust-pc-sdk .ot-sdk-offset-by-nine.ot-sdk-columns,#ot-sdk-cookie-policy .ot-sdk-offset-by-nine.ot-sdk-column,#ot-sdk-cookie-policy .ot-sdk-offset-by-nine.ot-sdk-columns{margin-left:78%}#onetrust-banner-sdk .ot-sdk-offset-by-ten.ot-sdk-column,#onetrust-banner-sdk .ot-sdk-offset-by-ten.ot-sdk-columns,#onetrust-pc-sdk .ot-sdk-offset-by-ten.ot-sdk-column,#onetrust-pc-sdk .ot-sdk-offset-by-ten.ot-sdk-columns,#ot-sdk-cookie-policy .ot-sdk-offset-by-ten.ot-sdk-column,#ot-sdk-cookie-policy .ot-sdk-offset-by-ten.ot-sdk-columns{margin-left:86.6666666667%}#onetrust-banner-sdk .ot-sdk-offset-by-eleven.ot-sdk-column,#onetrust-banner-sdk .ot-sdk-offset-by-eleven.ot-sdk-columns,#onetrust-pc-sdk .ot-sdk-offset-by-eleven.ot-sdk-column,#onetrust-pc-sdk .ot-sdk-offset-by-eleven.ot-sdk-columns,#ot-sdk-cookie-policy .ot-sdk-offset-by-eleven.ot-sdk-column,#ot-sdk-cookie-policy .ot-sdk-offset-by-eleven.ot-sdk-columns{margin-left:95.3333333333%}#onetrust-banner-sdk .ot-sdk-offset-by-one-third.ot-sdk-column,#onetrust-banner-sdk .ot-sdk-offset-by-one-third.ot-sdk-columns,#onetrust-pc-sdk .ot-sdk-offset-by-one-third.ot-sdk-column,#onetrust-pc-sdk .ot-sdk-offset-by-one-third.ot-sdk-columns,#ot-sdk-cookie-policy .ot-sdk-offset-by-one-third.ot-sdk-column,#ot-sdk-cookie-policy .ot-sdk-offset-by-one-third.ot-sdk-columns{margin-left:34.6666666667%}#onetrust-banner-sdk .ot-sdk-offset-by-two-thirds.ot-sdk-column,#onetrust-banner-sdk .ot-sdk-offset-by-two-thirds.ot-sdk-columns,#onetrust-pc-sdk .ot-sdk-offset-by-two-thirds.ot-sdk-column,#onetrust-pc-sdk .ot-sdk-offset-by-two-thirds.ot-sdk-columns,#ot-sdk-cookie-policy .ot-sdk-offset-by-two-thirds.ot-sdk-column,#ot-sdk-cookie-policy .ot-sdk-offset-by-two-thirds.ot-sdk-columns{margin-left:69.3333333333%}#onetrust-banner-sdk .ot-sdk-offset-by-one-half.ot-sdk-column,#onetrust-banner-sdk .ot-sdk-offset-by-one-half.ot-sdk-columns,#onetrust-pc-sdk .ot-sdk-offset-by-one-half.ot-sdk-column,#onetrust-pc-sdk .ot-sdk-offset-by-one-half.ot-sdk-columns,#ot-sdk-cookie-policy .ot-sdk-offset-by-one-half.ot-sdk-column,#ot-sdk-cookie-policy .ot-sdk-offset-by-one-half.ot-sdk-columns{margin-left:52%}}#onetrust-banner-sdk h1,#onetrust-banner-sdk h2,#onetrust-banner-sdk h3,#onetrust-banner-sdk h4,#onetrust-banner-sdk h5,#onetrust-banner-sdk h6,#onetrust-pc-sdk h1,#onetrust-pc-sdk h2,#onetrust-pc-sdk h3,#onetrust-pc-sdk h4,#onetrust-pc-sdk h5,#onetrust-pc-sdk h6,#ot-sdk-cookie-policy h1,#ot-sdk-cookie-policy h2,#ot-sdk-cookie-policy h3,#ot-sdk-cookie-policy h4,#ot-sdk-cookie-policy h5,#ot-sdk-cookie-policy h6{margin-top:0;font-weight:600;font-family:inherit}#onetrust-banner-sdk h1,#onetrust-pc-sdk h1,#ot-sdk-cookie-policy h1{font-size:1.5rem;line-height:1.2}#onetrust-banner-sdk h2,#onetrust-pc-sdk h2,#ot-sdk-cookie-policy h2{font-size:1.5rem;line-height:1.25}#onetrust-banner-sdk h3,#onetrust-pc-sdk h3,#ot-sdk-cookie-policy h3{font-size:1.5rem;line-height:1.3}#onetrust-banner-sdk h4,#onetrust-pc-sdk h4,#ot-sdk-cookie-policy h4{font-size:1.5rem;line-height:1.35}#onetrust-banner-sdk h5,#onetrust-pc-sdk h5,#ot-sdk-cookie-policy h5{font-size:1.5rem;line-height:1.5}#onetrust-banner-sdk h6,#onetrust-pc-sdk h6,#ot-sdk-cookie-policy h6{font-size:1.5rem;line-height:1.6}@media (min-width: 550px){#onetrust-banner-sdk h1,#onetrust-pc-sdk h1,#ot-sdk-cookie-policy h1{font-size:1.5rem}#onetrust-banner-sdk h2,#onetrust-pc-sdk h2,#ot-sdk-cookie-policy h2{font-size:1.5rem}#onetrust-banner-sdk h3,#onetrust-pc-sdk h3,#ot-sdk-cookie-policy h3{font-size:1.5rem}#onetrust-banner-sdk h4,#onetrust-pc-sdk h4,#ot-sdk-cookie-policy h4{font-size:1.5rem}#onetrust-banner-sdk h5,#onetrust-pc-sdk h5,#ot-sdk-cookie-policy h5{font-size:1.5rem}#onetrust-banner-sdk h6,#onetrust-pc-sdk h6,#ot-sdk-cookie-policy h6{font-size:1.5rem}}#onetrust-banner-sdk p,#onetrust-pc-sdk p,#ot-sdk-cookie-policy p{margin:0 0 1em 0;font-family:inherit;line-height:normal}#onetrust-banner-sdk a,#onetrust-pc-sdk a,#ot-sdk-cookie-policy a{color:#565656;text-decoration:underline}#onetrust-banner-sdk a:hover,#onetrust-pc-sdk a:hover,#ot-sdk-cookie-policy a:hover{color:#565656;text-decoration:none}#onetrust-banner-sdk .ot-sdk-button,#onetrust-banner-sdk button,#onetrust-pc-sdk .ot-sdk-button,#onetrust-pc-sdk button,#ot-sdk-cookie-policy .ot-sdk-button,#ot-sdk-cookie-policy button{margin-bottom:1rem;font-family:inherit}#onetrust-banner-sdk .ot-sdk-button,#onetrust-banner-sdk button,#onetrust-banner-sdk input[type="submit"],#onetrust-banner-sdk input[type="reset"],#onetrust-banner-sdk input[type="button"],#onetrust-pc-sdk .ot-sdk-button,#onetrust-pc-sdk button,#onetrust-pc-sdk input[type="submit"],#onetrust-pc-sdk input[type="reset"],#onetrust-pc-sdk input[type="button"],#ot-sdk-cookie-policy .ot-sdk-button,#ot-sdk-cookie-policy button,#ot-sdk-cookie-policy input[type="submit"],#ot-sdk-cookie-policy input[type="reset"],#ot-sdk-cookie-policy input[type="button"]{display:inline-block;height:38px;padding:0 30px;color:#555;text-align:center;font-size:0.9em;font-weight:400;line-height:38px;letter-spacing:0.01em;text-decoration:none;white-space:nowrap;background-color:transparent;border-radius:2px;border:1px solid #bbb;cursor:pointer;box-sizing:border-box}#onetrust-banner-sdk .ot-sdk-button:hover,#onetrust-banner-sdk :not(.ot-leg-btn-container)>button:hover,#onetrust-banner-sdk input[type="submit"]:hover,#onetrust-banner-sdk input[type="reset"]:hover,#onetrust-banner-sdk input[type="button"]:hover,#onetrust-banner-sdk .ot-sdk-button:focus,#onetrust-banner-sdk :not(.ot-leg-btn-container)>button:focus,#onetrust-banner-sdk input[type="submit"]:focus,#onetrust-banner-sdk input[type="reset"]:focus,#onetrust-banner-sdk input[type="button"]:focus,#onetrust-pc-sdk .ot-sdk-button:hover,#onetrust-pc-sdk :not(.ot-leg-btn-container)>button:hover,#onetrust-pc-sdk input[type="submit"]:hover,#onetrust-pc-sdk input[type="reset"]:hover,#onetrust-pc-sdk input[type="button"]:hover,#onetrust-pc-sdk .ot-sdk-button:focus,#onetrust-pc-sdk :not(.ot-leg-btn-container)>button:focus,#onetrust-pc-sdk input[type="submit"]:focus,#onetrust-pc-sdk input[type="reset"]:focus,#onetrust-pc-sdk input[type="button"]:focus,#ot-sdk-cookie-policy .ot-sdk-button:hover,#ot-sdk-cookie-policy :not(.ot-leg-btn-container)>button:hover,#ot-sdk-cookie-policy input[type="submit"]:hover,#ot-sdk-cookie-policy input[type="reset"]:hover,#ot-sdk-cookie-policy input[type="button"]:hover,#ot-sdk-cookie-policy .ot-sdk-button:focus,#ot-sdk-cookie-policy :not(.ot-leg-btn-container)>button:focus,#ot-sdk-cookie-policy input[type="submit"]:focus,#ot-sdk-cookie-policy input[type="reset"]:focus,#ot-sdk-cookie-policy input[type="button"]:focus{color:#333;border-color:#888;opacity:0.7}#onetrust-banner-sdk .ot-sdk-button:focus,#onetrust-banner-sdk :not(.ot-leg-btn-container)>button:focus,#onetrust-banner-sdk input[type="submit"]:focus,#onetrust-banner-sdk input[type="reset"]:focus,#onetrust-banner-sdk input[type="button"]:focus,#onetrust-pc-sdk .ot-sdk-button:focus,#onetrust-pc-sdk :not(.ot-leg-btn-container)>button:focus,#onetrust-pc-sdk input[type="submit"]:focus,#onetrust-pc-sdk input[type="reset"]:focus,#onetrust-pc-sdk input[type="button"]:focus,#ot-sdk-cookie-policy .ot-sdk-button:focus,#ot-sdk-cookie-policy :not(.ot-leg-btn-container)>button:focus,#ot-sdk-cookie-policy input[type="submit"]:focus,#ot-sdk-cookie-policy input[type="reset"]:focus,#ot-sdk-cookie-policy input[type="button"]:focus{outline:2px solid #000}#onetrust-banner-sdk .ot-sdk-button.ot-sdk-button-primary,#onetrust-banner-sdk button.ot-sdk-button-primary,#onetrust-banner-sdk input[type="submit"].ot-sdk-button-primary,#onetrust-banner-sdk input[type="reset"].ot-sdk-button-primary,#onetrust-banner-sdk input[type="button"].ot-sdk-button-primary,#onetrust-pc-sdk .ot-sdk-button.ot-sdk-button-primary,#onetrust-pc-sdk button.ot-sdk-button-primary,#onetrust-pc-sdk input[type="submit"].ot-sdk-button-primary,#onetrust-pc-sdk input[type="reset"].ot-sdk-button-primary,#onetrust-pc-sdk input[type="button"].ot-sdk-button-primary,#ot-sdk-cookie-policy .ot-sdk-button.ot-sdk-button-primary,#ot-sdk-cookie-policy button.ot-sdk-button-primary,#ot-sdk-cookie-policy input[type="submit"].ot-sdk-button-primary,#ot-sdk-cookie-policy input[type="reset"].ot-sdk-button-primary,#ot-sdk-cookie-policy input[type="button"].ot-sdk-button-primary{color:#fff;background-color:#33c3f0;border-color:#33c3f0}#onetrust-banner-sdk .ot-sdk-button.ot-sdk-button-primary:hover,#onetrust-banner-sdk button.ot-sdk-button-primary:hover,#onetrust-banner-sdk input[type="submit"].ot-sdk-button-primary:hover,#onetrust-banner-sdk input[type="reset"].ot-sdk-button-primary:hover,#onetrust-banner-sdk input[type="button"].ot-sdk-button-primary:hover,#onetrust-banner-sdk .ot-sdk-button.ot-sdk-button-primary:focus,#onetrust-banner-sdk button.ot-sdk-button-primary:focus,#onetrust-banner-sdk input[type="submit"].ot-sdk-button-primary:focus,#onetrust-banner-sdk input[type="reset"].ot-sdk-button-primary:focus,#onetrust-banner-sdk input[type="button"].ot-sdk-button-primary:focus,#onetrust-pc-sdk .ot-sdk-button.ot-sdk-button-primary:hover,#onetrust-pc-sdk button.ot-sdk-button-primary:hover,#onetrust-pc-sdk input[type="submit"].ot-sdk-button-primary:hover,#onetrust-pc-sdk input[type="reset"].ot-sdk-button-primary:hover,#onetrust-pc-sdk input[type="button"].ot-sdk-button-primary:hover,#onetrust-pc-sdk .ot-sdk-button.ot-sdk-button-primary:focus,#onetrust-pc-sdk button.ot-sdk-button-primary:focus,#onetrust-pc-sdk input[type="submit"].ot-sdk-button-primary:focus,#onetrust-pc-sdk input[type="reset"].ot-sdk-button-primary:focus,#onetrust-pc-sdk input[type="button"].ot-sdk-button-primary:focus,#ot-sdk-cookie-policy .ot-sdk-button.ot-sdk-button-primary:hover,#ot-sdk-cookie-policy button.ot-sdk-button-primary:hover,#ot-sdk-cookie-policy input[type="submit"].ot-sdk-button-primary:hover,#ot-sdk-cookie-policy input[type="reset"].ot-sdk-button-primary:hover,#ot-sdk-cookie-policy input[type="button"].ot-sdk-button-primary:hover,#ot-sdk-cookie-policy .ot-sdk-button.ot-sdk-button-primary:focus,#ot-sdk-cookie-policy button.ot-sdk-button-primary:focus,#ot-sdk-cookie-policy input[type="submit"].ot-sdk-button-primary:focus,#ot-sdk-cookie-policy input[type="reset"].ot-sdk-button-primary:focus,#ot-sdk-cookie-policy input[type="button"].ot-sdk-button-primary:focus{color:#fff;background-color:#1eaedb;border-color:#1eaedb}#onetrust-banner-sdk input[type="email"],#onetrust-banner-sdk input[type="number"],#onetrust-banner-sdk input[type="search"],#onetrust-banner-sdk input[type="text"],#onetrust-banner-sdk input[type="tel"],#onetrust-banner-sdk input[type="url"],#onetrust-banner-sdk input[type="password"],#onetrust-banner-sdk textarea,#onetrust-banner-sdk select,#onetrust-pc-sdk input[type="email"],#onetrust-pc-sdk input[type="number"],#onetrust-pc-sdk input[type="search"],#onetrust-pc-sdk input[type="text"],#onetrust-pc-sdk input[type="tel"],#onetrust-pc-sdk input[type="url"],#onetrust-pc-sdk input[type="password"],#onetrust-pc-sdk textarea,#onetrust-pc-sdk select,#ot-sdk-cookie-policy input[type="email"],#ot-sdk-cookie-policy input[type="number"],#ot-sdk-cookie-policy input[type="search"],#ot-sdk-cookie-policy input[type="text"],#ot-sdk-cookie-policy input[type="tel"],#ot-sdk-cookie-policy input[type="url"],#ot-sdk-cookie-policy input[type="password"],#ot-sdk-cookie-policy textarea,#ot-sdk-cookie-policy select{height:38px;padding:6px 10px;background-color:#fff;border:1px solid #d1d1d1;border-radius:4px;box-shadow:none;box-sizing:border-box}#onetrust-banner-sdk input[type="email"],#onetrust-banner-sdk input[type="number"],#onetrust-banner-sdk input[type="search"],#onetrust-banner-sdk input[type="text"],#onetrust-banner-sdk input[type="tel"],#onetrust-banner-sdk input[type="url"],#onetrust-banner-sdk input[type="password"],#onetrust-banner-sdk textarea,#onetrust-pc-sdk input[type="email"],#onetrust-pc-sdk input[type="number"],#onetrust-pc-sdk input[type="search"],#onetrust-pc-sdk input[type="text"],#onetrust-pc-sdk input[type="tel"],#onetrust-pc-sdk input[type="url"],#onetrust-pc-sdk input[type="password"],#onetrust-pc-sdk textarea,#ot-sdk-cookie-policy input[type="email"],#ot-sdk-cookie-policy input[type="number"],#ot-sdk-cookie-policy input[type="search"],#ot-sdk-cookie-policy input[type="text"],#ot-sdk-cookie-policy input[type="tel"],#ot-sdk-cookie-policy input[type="url"],#ot-sdk-cookie-policy input[type="password"],#ot-sdk-cookie-policy textarea{-webkit-appearance:none;-moz-appearance:none;appearance:none}#onetrust-banner-sdk textarea,#onetrust-pc-sdk textarea,#ot-sdk-cookie-policy textarea{min-height:65px;padding-top:6px;padding-bottom:6px}#onetrust-banner-sdk input[type="email"]:focus,#onetrust-banner-sdk input[type="number"]:focus,#onetrust-banner-sdk input[type="search"]:focus,#onetrust-banner-sdk input[type="text"]:focus,#onetrust-banner-sdk input[type="tel"]:focus,#onetrust-banner-sdk input[type="url"]:focus,#onetrust-banner-sdk input[type="password"]:focus,#onetrust-banner-sdk textarea:focus,#onetrust-banner-sdk select:focus,#onetrust-pc-sdk input[type="email"]:focus,#onetrust-pc-sdk input[type="number"]:focus,#onetrust-pc-sdk input[type="search"]:focus,#onetrust-pc-sdk input[type="text"]:focus,#onetrust-pc-sdk input[type="tel"]:focus,#onetrust-pc-sdk input[type="url"]:focus,#onetrust-pc-sdk input[type="password"]:focus,#onetrust-pc-sdk textarea:focus,#onetrust-pc-sdk select:focus,#ot-sdk-cookie-policy input[type="email"]:focus,#ot-sdk-cookie-policy input[type="number"]:focus,#ot-sdk-cookie-policy input[type="search"]:focus,#ot-sdk-cookie-policy input[type="text"]:focus,#ot-sdk-cookie-policy input[type="tel"]:focus,#ot-sdk-cookie-policy input[type="url"]:focus,#ot-sdk-cookie-policy input[type="password"]:focus,#ot-sdk-cookie-policy textarea:focus,#ot-sdk-cookie-policy select:focus{border:1px solid #000;outline:0}#onetrust-banner-sdk label,#onetrust-banner-sdk legend,#onetrust-pc-sdk label,#onetrust-pc-sdk legend,#ot-sdk-cookie-policy label,#ot-sdk-cookie-policy legend{display:block;margin-bottom:0.5rem;font-weight:600}#onetrust-banner-sdk fieldset,#onetrust-pc-sdk fieldset,#ot-sdk-cookie-policy fieldset{padding:0;border-width:0}#onetrust-banner-sdk input[type="checkbox"],#onetrust-banner-sdk input[type="radio"],#onetrust-pc-sdk input[type="checkbox"],#onetrust-pc-sdk input[type="radio"],#ot-sdk-cookie-policy input[type="checkbox"],#ot-sdk-cookie-policy input[type="radio"]{display:inline}#onetrust-banner-sdk label>.label-body,#onetrust-pc-sdk label>.label-body,#ot-sdk-cookie-policy label>.label-body{display:inline-block;margin-left:0.5rem;font-weight:normal}#onetrust-banner-sdk ul,#onetrust-pc-sdk ul,#ot-sdk-cookie-policy ul{list-style:circle inside}#onetrust-banner-sdk ol,#onetrust-pc-sdk ol,#ot-sdk-cookie-policy ol{list-style:decimal inside}#onetrust-banner-sdk ol,#onetrust-banner-sdk ul,#onetrust-pc-sdk ol,#onetrust-pc-sdk ul,#ot-sdk-cookie-policy ol,#ot-sdk-cookie-policy ul{padding-left:0;margin-top:0}#onetrust-banner-sdk ul ul,#onetrust-banner-sdk ul ol,#onetrust-banner-sdk ol ol,#onetrust-banner-sdk ol ul,#onetrust-pc-sdk ul ul,#onetrust-pc-sdk ul ol,#onetrust-pc-sdk ol ol,#onetrust-pc-sdk ol ul,#ot-sdk-cookie-policy ul ul,#ot-sdk-cookie-policy ul ol,#ot-sdk-cookie-policy ol ol,#ot-sdk-cookie-policy ol ul{margin:1.5rem 0 1.5rem 3rem;font-size:90%}#onetrust-banner-sdk li,#onetrust-pc-sdk li,#ot-sdk-cookie-policy li{margin-bottom:1rem}#onetrust-banner-sdk code,#onetrust-pc-sdk code,#ot-sdk-cookie-policy code{padding:0.2rem 0.5rem;margin:0 0.2rem;font-size:90%;white-space:nowrap;background:#f1f1f1;border:1px solid #e1e1e1;border-radius:4px}#onetrust-banner-sdk pre>code,#onetrust-pc-sdk pre>code,#ot-sdk-cookie-policy pre>code{display:block;padding:1rem 1.5rem;white-space:pre}#onetrust-banner-sdk th,#onetrust-banner-sdk td,#onetrust-pc-sdk th,#onetrust-pc-sdk td,#ot-sdk-cookie-policy th,#ot-sdk-cookie-policy td{padding:12px 15px;text-align:left;border-bottom:1px solid #e1e1e1}#onetrust-banner-sdk .ot-sdk-u-full-width,#onetrust-pc-sdk .ot-sdk-u-full-width,#ot-sdk-cookie-policy .ot-sdk-u-full-width{width:100%;box-sizing:border-box}#onetrust-banner-sdk .ot-sdk-u-max-full-width,#onetrust-pc-sdk .ot-sdk-u-max-full-width,#ot-sdk-cookie-policy .ot-sdk-u-max-full-width{max-width:100%;box-sizing:border-box}#onetrust-banner-sdk .ot-sdk-u-pull-right,#onetrust-pc-sdk .ot-sdk-u-pull-right,#ot-sdk-cookie-policy .ot-sdk-u-pull-right{float:right}#onetrust-banner-sdk .ot-sdk-u-pull-left,#onetrust-pc-sdk .ot-sdk-u-pull-left,#ot-sdk-cookie-policy .ot-sdk-u-pull-left{float:left}#onetrust-banner-sdk hr,#onetrust-pc-sdk hr,#ot-sdk-cookie-policy hr{margin-top:3rem;margin-bottom:3.5rem;border-width:0;border-top:1px solid #e1e1e1}#onetrust-banner-sdk .ot-sdk-container:after,#onetrust-banner-sdk .ot-sdk-row:after,#onetrust-banner-sdk .ot-sdk-u-cf,#onetrust-pc-sdk .ot-sdk-container:after,#onetrust-pc-sdk .ot-sdk-row:after,#onetrust-pc-sdk .ot-sdk-u-cf,#ot-sdk-cookie-policy .ot-sdk-container:after,#ot-sdk-cookie-policy .ot-sdk-row:after,#ot-sdk-cookie-policy .ot-sdk-u-cf{content:"";display:table;clear:both}#onetrust-banner-sdk .ot-sdk-row,#onetrust-pc-sdk .ot-sdk-row,#ot-sdk-cookie-policy .ot-sdk-row{margin:0;max-width:none;display:block}
    #onetrust-banner-sdk{box-shadow:0 0 18px rgba(0,0,0,.2)}#onetrust-banner-sdk.otFlat{position:fixed;z-index:2147483645;bottom:0;right:0;left:0;background-color:#fff;max-height:90%;overflow-x:hidden;overflow-y:auto}#onetrust-banner-sdk.otRelFont{font-size:1rem}#onetrust-banner-sdk>.ot-sdk-container{overflow:hidden}#onetrust-banner-sdk::-webkit-scrollbar{width:11px}#onetrust-banner-sdk::-webkit-scrollbar-thumb{border-radius:10px;background:#c1c1c1}#onetrust-banner-sdk{scrollbar-arrow-color:#c1c1c1;scrollbar-darkshadow-color:#c1c1c1;scrollbar-face-color:#c1c1c1;scrollbar-shadow-color:#c1c1c1}#onetrust-banner-sdk #onetrust-policy{margin:1.25em 0 .625em 2em;overflow:hidden}#onetrust-banner-sdk #onetrust-policy .ot-gv-list-handler{float:left;font-size:.82em;padding:0;margin-bottom:0;border:0;line-height:normal;height:auto;width:auto}#onetrust-banner-sdk #onetrust-policy-title{font-size:1.2em;line-height:1.3;margin-bottom:10px}#onetrust-banner-sdk #onetrust-policy-text{clear:both;text-align:left;font-size:.88em;line-height:1.4}#onetrust-banner-sdk #onetrust-policy-text *{font-size:inherit;line-height:inherit}#onetrust-banner-sdk #onetrust-policy-text a{font-weight:bold;margin-left:5px}#onetrust-banner-sdk #onetrust-policy-title,#onetrust-banner-sdk #onetrust-policy-text{color:dimgray;float:left}#onetrust-banner-sdk #onetrust-button-group-parent{min-height:1px;text-align:center}#onetrust-banner-sdk #onetrust-button-group{display:inline-block}#onetrust-banner-sdk #onetrust-accept-btn-handler,#onetrust-banner-sdk #onetrust-reject-all-handler,#onetrust-banner-sdk #onetrust-pc-btn-handler{background-color:#68b631;color:#fff;border-color:#68b631;margin-right:1em;min-width:125px;height:auto;white-space:normal;word-break:break-word;word-wrap:break-word;padding:12px 10px;line-height:1.2;font-size:.813em;font-weight:600}#onetrust-banner-sdk #onetrust-pc-btn-handler.cookie-setting-link{background-color:#fff;border:none;color:#68b631;text-decoration:underline;padding-left:0;padding-right:0}#onetrust-banner-sdk .onetrust-close-btn-ui{width:44px;height:44px;background-size:12px;border:none;position:relative;margin:auto;padding:0}#onetrust-banner-sdk .banner_logo{display:none}#onetrust-banner-sdk .ot-b-addl-desc{clear:both;float:left;display:block}#onetrust-banner-sdk #banner-options{float:left;display:table;margin-right:0;margin-left:1em;width:calc(100% - 1em)}#onetrust-banner-sdk .banner-option-input{cursor:pointer;width:auto;height:auto;border:none;padding:0;padding-right:3px;margin:0 0 10px;font-size:.82em;line-height:1.4}#onetrust-banner-sdk .banner-option-input *{pointer-events:none;font-size:inherit;line-height:inherit}#onetrust-banner-sdk .banner-option-input[aria-expanded=true]~.banner-option-details{display:block;height:auto}#onetrust-banner-sdk .banner-option-input[aria-expanded=true] .ot-arrow-container{transform:rotate(90deg)}#onetrust-banner-sdk .banner-option{margin-bottom:12px;margin-left:0;border:none;float:left;padding:0}#onetrust-banner-sdk .banner-option:first-child{padding-left:2px}#onetrust-banner-sdk .banner-option:not(:first-child){padding:0;border:none}#onetrust-banner-sdk .banner-option-header{cursor:pointer;display:inline-block}#onetrust-banner-sdk .banner-option-header :first-child{color:dimgray;font-weight:bold;float:left}#onetrust-banner-sdk .banner-option-header .ot-arrow-container{display:inline-block;border-top:6px solid transparent;border-bottom:6px solid transparent;border-left:6px solid dimgray;margin-left:10px;vertical-align:middle}#onetrust-banner-sdk .banner-option-details{display:none;font-size:.83em;line-height:1.5;padding:10px 0px 5px 10px;margin-right:10px;height:0px}#onetrust-banner-sdk .banner-option-details *{font-size:inherit;line-height:inherit;color:dimgray}#onetrust-banner-sdk .ot-arrow-container,#onetrust-banner-sdk .banner-option-details{transition:all 300ms ease-in 0s;-webkit-transition:all 300ms ease-in 0s;-moz-transition:all 300ms ease-in 0s;-o-transition:all 300ms ease-in 0s}#onetrust-banner-sdk .ot-dpd-container{float:left}#onetrust-banner-sdk .ot-dpd-title{margin-bottom:10px}#onetrust-banner-sdk .ot-dpd-title,#onetrust-banner-sdk .ot-dpd-desc{font-size:.88em;line-height:1.4;color:dimgray}#onetrust-banner-sdk .ot-dpd-title *,#onetrust-banner-sdk .ot-dpd-desc *{font-size:inherit;line-height:inherit}#onetrust-banner-sdk.ot-iab-2 #onetrust-policy-text *{margin-bottom:0}#onetrust-banner-sdk.ot-iab-2 .onetrust-vendors-list-handler{display:block;margin-left:0;margin-top:5px;clear:both;margin-bottom:0;padding:0;border:0;height:auto;width:auto}#onetrust-banner-sdk.ot-iab-2 #onetrust-button-group button{display:block}#onetrust-banner-sdk.ot-close-btn-link{padding-top:25px}#onetrust-banner-sdk.ot-close-btn-link #onetrust-close-btn-container{top:15px;transform:none;right:15px}#onetrust-banner-sdk.ot-close-btn-link #onetrust-close-btn-container button{padding:0;white-space:pre-wrap;border:none;height:auto;line-height:1.5;text-decoration:underline;font-size:.69em}#onetrust-banner-sdk #onetrust-policy-text,#onetrust-banner-sdk .ot-dpd-desc,#onetrust-banner-sdk .ot-b-addl-desc{font-size:.813em;line-height:1.5}#onetrust-banner-sdk .ot-dpd-desc{margin-bottom:10px}#onetrust-banner-sdk .ot-dpd-desc>.ot-b-addl-desc{margin-top:10px;margin-bottom:10px;font-size:1em}@media only screen and (max-width: 425px){#onetrust-banner-sdk #onetrust-close-btn-container{position:absolute;top:10px;right:10px}#onetrust-banner-sdk #onetrust-policy{margin-left:0}#onetrust-banner-sdk #onetrust-button-group{display:block}#onetrust-banner-sdk #onetrust-accept-btn-handler,#onetrust-banner-sdk #onetrust-reject-all-handler,#onetrust-banner-sdk #onetrust-pc-btn-handler{width:100%}#onetrust-banner-sdk .onetrust-close-btn-ui{top:auto;transform:none}#onetrust-banner-sdk #onetrust-policy-title{display:inline;float:none}#onetrust-banner-sdk #banner-options{margin:0;padding:0;width:100%}}@media only screen and (min-width: 426px)and (max-width: 896px){#onetrust-banner-sdk #onetrust-close-btn-container{position:absolute;top:0;right:0}#onetrust-banner-sdk #onetrust-policy{margin-left:1em;margin-right:1em}#onetrust-banner-sdk .onetrust-close-btn-ui{top:10px;right:10px}#onetrust-banner-sdk:not(.ot-iab-2) #onetrust-group-container{width:95%}#onetrust-banner-sdk.ot-iab-2 #onetrust-group-container{width:100%}#onetrust-banner-sdk #onetrust-button-group-parent{width:100%;position:relative;margin-left:0}#onetrust-banner-sdk #onetrust-button-group button{display:inline-block}#onetrust-banner-sdk #onetrust-button-group{margin-right:0;text-align:center}#onetrust-banner-sdk .has-reject-all-button #onetrust-pc-btn-handler{float:left}#onetrust-banner-sdk .has-reject-all-button #onetrust-reject-all-handler,#onetrust-banner-sdk .has-reject-all-button #onetrust-accept-btn-handler{float:right}#onetrust-banner-sdk .has-reject-all-button #onetrust-button-group{width:calc(100% - 2em);margin-right:0}#onetrust-banner-sdk .has-reject-all-button #onetrust-pc-btn-handler.cookie-setting-link{padding-left:0px;text-align:left}#onetrust-banner-sdk.ot-buttons-fw .ot-sdk-three button{width:100%;text-align:center}#onetrust-banner-sdk.ot-buttons-fw #onetrust-button-group-parent button{float:none}#onetrust-banner-sdk.ot-buttons-fw #onetrust-pc-btn-handler.cookie-setting-link{text-align:center}}@media only screen and (min-width: 550px){#onetrust-banner-sdk .banner-option:not(:first-child){border-left:1px solid #d8d8d8;padding-left:25px}}@media only screen and (min-width: 425px)and (max-width: 550px){#onetrust-banner-sdk.ot-iab-2 #onetrust-button-group,#onetrust-banner-sdk.ot-iab-2 #onetrust-policy,#onetrust-banner-sdk.ot-iab-2 .banner-option{width:100%}}@media only screen and (min-width: 769px){#onetrust-banner-sdk #onetrust-button-group{margin-right:30%}#onetrust-banner-sdk #banner-options{margin-left:2em;margin-right:5em;margin-bottom:1.25em;width:calc(100% - 7em)}}@media only screen and (min-width: 897px)and (max-width: 1023px){#onetrust-banner-sdk.vertical-align-content #onetrust-button-group-parent{position:absolute;top:50%;left:75%;transform:translateY(-50%)}#onetrust-banner-sdk #onetrust-close-btn-container{top:50%;margin:auto;transform:translate(-50%, -50%);position:absolute;padding:0;right:0}#onetrust-banner-sdk #onetrust-close-btn-container button{position:relative;margin:0;right:-22px;top:2px}}@media only screen and (min-width: 1024px){#onetrust-banner-sdk #onetrust-close-btn-container{top:50%;margin:auto;transform:translate(-50%, -50%);position:absolute;right:0}#onetrust-banner-sdk #onetrust-close-btn-container button{right:-12px}#onetrust-banner-sdk #onetrust-policy{margin-left:2em}#onetrust-banner-sdk.vertical-align-content #onetrust-button-group-parent{position:absolute;top:50%;left:60%;transform:translateY(-50%)}#onetrust-banner-sdk.ot-iab-2 #onetrust-policy-title{width:50%}#onetrust-banner-sdk.ot-iab-2 #onetrust-policy-text,#onetrust-banner-sdk.ot-iab-2 :not(.ot-dpd-desc)>.ot-b-addl-desc{margin-bottom:1em;width:50%;border-right:1px solid #d8d8d8;padding-right:1rem}#onetrust-banner-sdk.ot-iab-2 #onetrust-policy-text{margin-bottom:0;padding-bottom:1em}#onetrust-banner-sdk.ot-iab-2 :not(.ot-dpd-desc)>.ot-b-addl-desc{margin-bottom:0;padding-bottom:1em}#onetrust-banner-sdk.ot-iab-2 .ot-dpd-container{width:45%;padding-left:1rem;display:inline-block;float:none}#onetrust-banner-sdk.ot-iab-2 .ot-dpd-title{line-height:1.7}#onetrust-banner-sdk.ot-iab-2 #onetrust-button-group-parent{left:auto;right:4%;margin-left:0}#onetrust-banner-sdk.ot-iab-2 #onetrust-button-group button{display:block}#onetrust-banner-sdk:not(.ot-iab-2) #onetrust-button-group-parent{margin:auto;width:30%}#onetrust-banner-sdk:not(.ot-iab-2) #onetrust-group-container{width:60%}#onetrust-banner-sdk #onetrust-button-group{margin-right:auto}#onetrust-banner-sdk #onetrust-accept-btn-handler,#onetrust-banner-sdk #onetrust-reject-all-handler,#onetrust-banner-sdk #onetrust-pc-btn-handler{margin-top:1em}}@media only screen and (min-width: 890px){#onetrust-banner-sdk.ot-buttons-fw:not(.ot-iab-2) #onetrust-button-group-parent{padding-left:3%;padding-right:4%;margin-left:0}#onetrust-banner-sdk.ot-buttons-fw:not(.ot-iab-2) #onetrust-button-group{margin-right:0;margin-top:1.25em;width:100%}#onetrust-banner-sdk.ot-buttons-fw:not(.ot-iab-2) #onetrust-button-group button{width:100%;margin-bottom:5px;margin-top:5px}#onetrust-banner-sdk.ot-buttons-fw:not(.ot-iab-2) #onetrust-button-group button:last-of-type{margin-bottom:20px}}@media only screen and (min-width: 1280px){#onetrust-banner-sdk:not(.ot-iab-2) #onetrust-group-container{width:55%}#onetrust-banner-sdk:not(.ot-iab-2) #onetrust-button-group-parent{width:44%;padding-left:2%;padding-right:2%}#onetrust-banner-sdk:not(.ot-iab-2).vertical-align-content #onetrust-button-group-parent{position:absolute;left:55%}}
            #onetrust-consent-sdk #onetrust-banner-sdk {background-color: #FFFFFF;}
                #onetrust-consent-sdk #onetrust-policy-title,
                        #onetrust-consent-sdk #onetrust-policy-text,
                        #onetrust-consent-sdk .ot-b-addl-desc,
                        #onetrust-consent-sdk .ot-dpd-desc,
                        #onetrust-consent-sdk .ot-dpd-title,
                        #onetrust-consent-sdk #onetrust-policy-text *:not(.onetrust-vendors-list-handler),
                        #onetrust-consent-sdk .ot-dpd-desc *:not(.onetrust-vendors-list-handler),
                        #onetrust-consent-sdk #onetrust-banner-sdk #banner-options *,
                        #onetrust-banner-sdk .ot-cat-header {
                            color: #696969;
                        }
                #onetrust-consent-sdk #onetrust-banner-sdk .banner-option-details {
                        background-color: #E9E9E9;}
                 #onetrust-consent-sdk #onetrust-banner-sdk a[href],
                        #onetrust-consent-sdk #onetrust-banner-sdk a[href] font,
                        #onetrust-consent-sdk #onetrust-banner-sdk .ot-link-btn
                            {
                                color: #696969;
                            }#onetrust-consent-sdk #onetrust-accept-btn-handler,
                             #onetrust-banner-sdk #onetrust-reject-all-handler {
                                background-color: #4f7a28;border-color: #4f7a28;
                                color: #FFFFFF;
                            }
                #onetrust-consent-sdk #onetrust-pc-btn-handler,
                #onetrust-consent-sdk #onetrust-pc-btn-handler.cookie-setting-link {
                    color: #696969; border-color: #696969;
                    background-color: 
                    #FFFFFF;
                }#onetrust-pc-sdk.otPcCenter{overflow:hidden;position:fixed;margin:0 auto;top:5%;right:0;left:0;width:40%;max-width:575px;min-width:575px;border-radius:2.5px;z-index:2147483647;background-color:#fff;-webkit-box-shadow:0px 2px 10px -3px #999;-moz-box-shadow:0px 2px 10px -3px #999;box-shadow:0px 2px 10px -3px #999}#onetrust-pc-sdk.otPcCenter[dir=rtl]{right:0;left:0}#onetrust-pc-sdk.otRelFont{font-size:1rem}#onetrust-pc-sdk #ot-addtl-venlst .ot-arw-cntr,#onetrust-pc-sdk #ot-addtl-venlst .ot-plus-minus,#onetrust-pc-sdk .ot-hide-tgl{visibility:hidden}#onetrust-pc-sdk #ot-addtl-venlst .ot-arw-cntr *,#onetrust-pc-sdk #ot-addtl-venlst .ot-plus-minus *,#onetrust-pc-sdk .ot-hide-tgl *{visibility:hidden}#onetrust-pc-sdk #ot-gn-venlst .ot-ven-item .ot-acc-hdr{min-height:40px}#onetrust-pc-sdk .ot-pc-header{height:39px;padding:10px 0 10px 30px;border-bottom:1px solid #e9e9e9}#onetrust-pc-sdk #ot-pc-title,#onetrust-pc-sdk #ot-category-title,#onetrust-pc-sdk .ot-cat-header,#onetrust-pc-sdk #ot-lst-title,#onetrust-pc-sdk .ot-ven-hdr .ot-ven-name,#onetrust-pc-sdk .ot-always-active{font-weight:bold;color:dimgray}#onetrust-pc-sdk .ot-cat-header{float:left;font-weight:600;font-size:.875em;line-height:1.5;max-width:90%;vertical-align:middle}#onetrust-pc-sdk .ot-always-active-group .ot-cat-header{width:55%;font-weight:700}#onetrust-pc-sdk .ot-cat-item p{clear:both;float:left;margin-top:10px;margin-bottom:5px;line-height:1.5;font-size:.812em;color:dimgray}#onetrust-pc-sdk .ot-close-icon{height:44px;width:44px;background-size:10px}#onetrust-pc-sdk #ot-pc-title{float:left;font-size:1em;line-height:1.5;margin-bottom:10px;margin-top:10px;width:100%}#onetrust-pc-sdk #accept-recommended-btn-handler{margin-right:10px;margin-bottom:25px;outline-offset:-1px}#onetrust-pc-sdk #ot-pc-desc{clear:both;width:100%;font-size:.812em;line-height:1.5;margin-bottom:25px}#onetrust-pc-sdk #ot-pc-desc a{margin-left:5px}#onetrust-pc-sdk #ot-pc-desc *{font-size:inherit;line-height:inherit}#onetrust-pc-sdk #ot-pc-desc ul li{padding:10px 0px}#onetrust-pc-sdk a{color:#656565;cursor:pointer}#onetrust-pc-sdk a:hover{color:#3860be}#onetrust-pc-sdk label{margin-bottom:0}#onetrust-pc-sdk #vdr-lst-dsc{font-size:.812em;line-height:1.5;padding:10px 15px 5px 15px}#onetrust-pc-sdk button{max-width:394px;padding:12px 30px;line-height:1;word-break:break-word;word-wrap:break-word;white-space:normal;font-weight:bold;height:auto}#onetrust-pc-sdk .ot-link-btn{padding:0;margin-bottom:0;border:0;font-weight:normal;line-height:normal;width:auto;height:auto}#onetrust-pc-sdk #ot-pc-content{position:absolute;overflow-y:scroll;padding-left:0px;padding-right:30px;top:60px;bottom:110px;margin:1px 3px 0 30px;width:calc(100% - 63px)}#onetrust-pc-sdk .ot-cat-grp .ot-always-active{float:right;clear:none;color:#3860be;margin:0;font-size:.813em;line-height:1.3}#onetrust-pc-sdk .ot-pc-scrollbar::-webkit-scrollbar-track{margin-right:20px}#onetrust-pc-sdk .ot-pc-scrollbar::-webkit-scrollbar{width:11px}#onetrust-pc-sdk .ot-pc-scrollbar::-webkit-scrollbar-thumb{border-radius:10px;background:#d8d8d8}#onetrust-pc-sdk input[type=checkbox]:focus+.ot-acc-hdr{outline:#000 1px solid}#onetrust-pc-sdk .ot-pc-scrollbar{scrollbar-arrow-color:#d8d8d8;scrollbar-darkshadow-color:#d8d8d8;scrollbar-face-color:#d8d8d8;scrollbar-shadow-color:#d8d8d8}#onetrust-pc-sdk .save-preference-btn-handler{margin-right:20px}#onetrust-pc-sdk .ot-pc-refuse-all-handler{margin-right:10px}#onetrust-pc-sdk #ot-pc-desc .privacy-notice-link{margin-left:0}#onetrust-pc-sdk .ot-subgrp-cntr{display:inline-block;clear:both;width:100%;padding-top:15px}#onetrust-pc-sdk .ot-switch+.ot-subgrp-cntr{padding-top:10px}#onetrust-pc-sdk ul.ot-subgrps{margin:0;font-size:initial}#onetrust-pc-sdk ul.ot-subgrps li p,#onetrust-pc-sdk ul.ot-subgrps li h5{font-size:.813em;line-height:1.4;color:dimgray}#onetrust-pc-sdk ul.ot-subgrps .ot-switch{min-height:auto}#onetrust-pc-sdk ul.ot-subgrps .ot-switch-nob{top:0}#onetrust-pc-sdk ul.ot-subgrps .ot-acc-hdr{display:inline-block;width:100%}#onetrust-pc-sdk ul.ot-subgrps .ot-acc-txt{margin:0}#onetrust-pc-sdk ul.ot-subgrps li{padding:0;border:none}#onetrust-pc-sdk ul.ot-subgrps li h5{position:relative;top:5px;font-weight:bold;margin-bottom:0;float:left}#onetrust-pc-sdk li.ot-subgrp{margin-left:20px;overflow:auto}#onetrust-pc-sdk li.ot-subgrp>h5{width:calc(100% - 100px)}#onetrust-pc-sdk .ot-cat-item p>ul,#onetrust-pc-sdk li.ot-subgrp p>ul{margin:0px;list-style:disc;margin-left:15px;font-size:inherit}#onetrust-pc-sdk .ot-cat-item p>ul li,#onetrust-pc-sdk li.ot-subgrp p>ul li{font-size:inherit;padding-top:10px;padding-left:0px;padding-right:0px;border:none}#onetrust-pc-sdk .ot-cat-item p>ul li:last-child,#onetrust-pc-sdk li.ot-subgrp p>ul li:last-child{padding-bottom:10px}#onetrust-pc-sdk .ot-pc-logo{height:40px;width:120px;display:inline-block}#onetrust-pc-sdk .ot-pc-footer{position:absolute;bottom:0px;width:100%;max-height:160px;border-top:1px solid #d8d8d8}#onetrust-pc-sdk.ot-ftr-stacked .ot-pc-refuse-all-handler{margin-bottom:0px}#onetrust-pc-sdk.ot-ftr-stacked #ot-pc-content{bottom:160px}#onetrust-pc-sdk.ot-ftr-stacked .ot-pc-footer button{width:100%;max-width:none}#onetrust-pc-sdk.ot-ftr-stacked .ot-btn-container{margin:0 30px;width:calc(100% - 60px);padding-right:0}#onetrust-pc-sdk .ot-pc-footer-logo{height:30px;width:100%;text-align:right;background:#f4f4f4}#onetrust-pc-sdk .ot-pc-footer-logo a{display:inline-block;margin-top:5px;margin-right:10px}#onetrust-pc-sdk[dir=rtl] .ot-pc-footer-logo{direction:rtl}#onetrust-pc-sdk[dir=rtl] .ot-pc-footer-logo a{margin-right:25px}#onetrust-pc-sdk .ot-tgl{float:right;position:relative;z-index:1}#onetrust-pc-sdk .ot-tgl input:checked+.ot-switch .ot-switch-nob{background-color:#cddcf2;border:1px solid #3860be}#onetrust-pc-sdk .ot-tgl input:checked+.ot-switch .ot-switch-nob:before{-webkit-transform:translateX(20px);-ms-transform:translateX(20px);transform:translateX(20px);background-color:#3860be;border-color:#3860be}#onetrust-pc-sdk .ot-tgl input:focus+.ot-switch{outline:#000 solid 1px}#onetrust-pc-sdk .ot-switch{position:relative;display:inline-block;width:45px;height:25px}#onetrust-pc-sdk .ot-switch-nob{position:absolute;cursor:pointer;top:0;left:0;right:0;bottom:0;background-color:#f2f1f1;border:1px solid #ddd;transition:all .2s ease-in 0s;-moz-transition:all .2s ease-in 0s;-o-transition:all .2s ease-in 0s;-webkit-transition:all .2s ease-in 0s;border-radius:20px}#onetrust-pc-sdk .ot-switch-nob:before{position:absolute;content:"";height:21px;width:21px;bottom:1px;background-color:#7d7d7d;-webkit-transition:.4s;transition:.4s;border-radius:20px}#onetrust-pc-sdk .ot-chkbox input:checked~label::before{background-color:#3860be}#onetrust-pc-sdk .ot-chkbox input+label::after{content:none;color:#fff}#onetrust-pc-sdk .ot-chkbox input:checked+label::after{content:""}#onetrust-pc-sdk .ot-chkbox input:focus+label::before{outline-style:solid;outline-width:2px;outline-style:auto}#onetrust-pc-sdk .ot-chkbox label{position:relative;display:inline-block;padding-left:30px;cursor:pointer;font-weight:500}#onetrust-pc-sdk .ot-chkbox label::before,#onetrust-pc-sdk .ot-chkbox label::after{position:absolute;content:"";display:inline-block;border-radius:3px}#onetrust-pc-sdk .ot-chkbox label::before{height:18px;width:18px;border:1px solid #3860be;left:0px;top:auto}#onetrust-pc-sdk .ot-chkbox label::after{height:5px;width:9px;border-left:3px solid;border-bottom:3px solid;transform:rotate(-45deg);-o-transform:rotate(-45deg);-ms-transform:rotate(-45deg);-webkit-transform:rotate(-45deg);left:4px;top:5px}#onetrust-pc-sdk .ot-label-txt{display:none}#onetrust-pc-sdk .ot-chkbox input,#onetrust-pc-sdk .ot-tgl input{position:absolute;opacity:0;width:0;height:0}#onetrust-pc-sdk .ot-arw-cntr{float:right;position:relative}#onetrust-pc-sdk .ot-arw-cntr .ot-arw{width:16px;height:16px;margin-left:5px;color:dimgray;display:inline-block;vertical-align:middle;-webkit-transition:all 300ms ease-in 0s;-moz-transition:all 300ms ease-in 0s;-o-transition:all 300ms ease-in 0s;transition:all 300ms ease-in 0s}#onetrust-pc-sdk input:checked~.ot-acc-hdr .ot-arw{transform:rotate(90deg);-o-transform:rotate(90deg);-ms-transform:rotate(90deg);-webkit-transform:rotate(90deg)}#onetrust-pc-sdk input[type=checkbox]:focus+.ot-acc-hdr{outline:#000 1px solid}#onetrust-pc-sdk .ot-tgl-cntr,#onetrust-pc-sdk .ot-arw-cntr{display:inline-block}#onetrust-pc-sdk .ot-tgl-cntr{width:45px;float:right;margin-top:2px}#onetrust-pc-sdk #ot-lst-cnt .ot-tgl-cntr{margin-top:10px}#onetrust-pc-sdk .ot-always-active-subgroup{width:auto;padding-left:0px !important;top:3px;position:relative}#onetrust-pc-sdk .ot-label-status{padding-left:5px;font-size:.75em;display:none}#onetrust-pc-sdk .ot-arw-cntr{margin-top:-1px}#onetrust-pc-sdk .ot-arw-cntr svg{-webkit-transition:all 300ms ease-in 0s;-moz-transition:all 300ms ease-in 0s;-o-transition:all 300ms ease-in 0s;transition:all 300ms ease-in 0s;height:10px;width:10px}#onetrust-pc-sdk input:checked~.ot-acc-hdr .ot-arw{transform:rotate(90deg);-o-transform:rotate(90deg);-ms-transform:rotate(90deg);-webkit-transform:rotate(90deg)}#onetrust-pc-sdk .ot-arw{width:10px;margin-left:15px;transition:all 300ms ease-in 0s;-webkit-transition:all 300ms ease-in 0s;-moz-transition:all 300ms ease-in 0s;-o-transition:all 300ms ease-in 0s}#onetrust-pc-sdk .ot-vlst-cntr{margin-bottom:0}#onetrust-pc-sdk .ot-hlst-cntr{margin-top:5px;display:inline-block;width:100%}#onetrust-pc-sdk .category-vendors-list-handler,#onetrust-pc-sdk .category-vendors-list-handler+a,#onetrust-pc-sdk .category-host-list-handler{clear:both;color:#3860be;margin-left:0;font-size:.813em;text-decoration:none;float:left;overflow:hidden}#onetrust-pc-sdk .category-vendors-list-handler:hover,#onetrust-pc-sdk .category-vendors-list-handler+a:hover,#onetrust-pc-sdk .category-host-list-handler:hover{color:#1883fd}#onetrust-pc-sdk .category-vendors-list-handler+a{clear:none}#onetrust-pc-sdk .category-vendors-list-handler+a::after{content:"";height:15px;width:15px;background-repeat:no-repeat;margin-left:5px;float:right;background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 511.626 511.627'%3E%3Cg fill='%231276CE'%3E%3Cpath d='M392.857 292.354h-18.274c-2.669 0-4.859.855-6.563 2.573-1.718 1.708-2.573 3.897-2.573 6.563v91.361c0 12.563-4.47 23.315-13.415 32.262-8.945 8.945-19.701 13.414-32.264 13.414H82.224c-12.562 0-23.317-4.469-32.264-13.414-8.945-8.946-13.417-19.698-13.417-32.262V155.31c0-12.562 4.471-23.313 13.417-32.259 8.947-8.947 19.702-13.418 32.264-13.418h200.994c2.669 0 4.859-.859 6.57-2.57 1.711-1.713 2.566-3.9 2.566-6.567V82.221c0-2.662-.855-4.853-2.566-6.563-1.711-1.713-3.901-2.568-6.57-2.568H82.224c-22.648 0-42.016 8.042-58.102 24.125C8.042 113.297 0 132.665 0 155.313v237.542c0 22.647 8.042 42.018 24.123 58.095 16.086 16.084 35.454 24.13 58.102 24.13h237.543c22.647 0 42.017-8.046 58.101-24.13 16.085-16.077 24.127-35.447 24.127-58.095v-91.358c0-2.669-.856-4.859-2.574-6.57-1.713-1.718-3.903-2.573-6.565-2.573z'/%3E%3Cpath d='M506.199 41.971c-3.617-3.617-7.905-5.424-12.85-5.424H347.171c-4.948 0-9.233 1.807-12.847 5.424-3.617 3.615-5.428 7.898-5.428 12.847s1.811 9.233 5.428 12.85l50.247 50.248-186.147 186.151c-1.906 1.903-2.856 4.093-2.856 6.563 0 2.479.953 4.668 2.856 6.571l32.548 32.544c1.903 1.903 4.093 2.852 6.567 2.852s4.665-.948 6.567-2.852l186.148-186.148 50.251 50.248c3.614 3.617 7.898 5.426 12.847 5.426s9.233-1.809 12.851-5.426c3.617-3.616 5.424-7.898 5.424-12.847V54.818c-.001-4.952-1.814-9.232-5.428-12.847z'/%3E%3C/g%3E%3C/svg%3E")}#onetrust-pc-sdk .back-btn-handler{font-size:1em;text-decoration:none}#onetrust-pc-sdk .back-btn-handler:hover{opacity:.6}#onetrust-pc-sdk #ot-lst-title span{display:inline-block;word-break:break-word;word-wrap:break-word;margin-bottom:0;color:#656565;font-size:1em;font-weight:bold;margin-left:15px}#onetrust-pc-sdk #ot-lst-title{margin:10px 0 10px 0px;font-size:1em;text-align:left}#onetrust-pc-sdk #ot-pc-hdr{margin:0 0 0 30px;height:auto;width:auto}#onetrust-pc-sdk #ot-pc-hdr input::placeholder{color:#d4d4d4;font-style:italic}#onetrust-pc-sdk #vendor-search-handler{height:31px;width:100%;border-radius:50px;font-size:.8em;padding-right:35px;padding-left:15px;float:left;margin-left:15px}#onetrust-pc-sdk .ot-ven-name{display:block;width:auto;padding-right:5px}#onetrust-pc-sdk #ot-lst-cnt{overflow-y:auto;margin-left:20px;margin-right:7px;width:calc(100% - 27px);max-height:calc(100% - 80px);height:100%;transform:translate3d(0, 0, 0)}#onetrust-pc-sdk #ot-pc-lst{width:100%;bottom:100px;position:absolute;top:60px}#onetrust-pc-sdk #ot-pc-lst:not(.ot-enbl-chr) .ot-tgl-cntr .ot-arw-cntr,#onetrust-pc-sdk #ot-pc-lst:not(.ot-enbl-chr) .ot-tgl-cntr .ot-arw-cntr *{visibility:hidden}#onetrust-pc-sdk #ot-pc-lst .ot-tgl-cntr{right:12px;position:absolute}#onetrust-pc-sdk #ot-pc-lst .ot-arw-cntr{float:right;position:relative}#onetrust-pc-sdk #ot-pc-lst .ot-arw{margin-left:10px}#onetrust-pc-sdk #ot-pc-lst .ot-acc-hdr{overflow:hidden;cursor:pointer}#onetrust-pc-sdk .ot-vlst-cntr{overflow:hidden}#onetrust-pc-sdk #ot-sel-blk{overflow:hidden;width:100%;position:sticky;position:-webkit-sticky;top:0;z-index:3}#onetrust-pc-sdk #ot-back-arw{height:12px;width:12px}#onetrust-pc-sdk .ot-lst-subhdr{width:100%;display:inline-block}#onetrust-pc-sdk .ot-search-cntr{float:left;width:78%;position:relative}#onetrust-pc-sdk .ot-search-cntr>svg{width:30px;height:30px;position:absolute;float:left;right:-15px}#onetrust-pc-sdk .ot-fltr-cntr{float:right;right:50px;position:relative}#onetrust-pc-sdk #filter-btn-handler{background-color:#3860be;border-radius:17px;display:inline-block;position:relative;width:32px;height:32px;-moz-transition:.1s ease;-o-transition:.1s ease;-webkit-transition:1s ease;transition:.1s ease;padding:0;margin:0}#onetrust-pc-sdk #filter-btn-handler:hover{background-color:#3860be}#onetrust-pc-sdk #filter-btn-handler svg{width:12px;height:12px;margin:3px 10px 0 10px;display:block;position:static;right:auto;top:auto}#onetrust-pc-sdk .ot-ven-link{color:#3860be;text-decoration:none;font-weight:100;display:inline-block;padding-top:10px;transform:translate(0, 1%);-o-transform:translate(0, 1%);-ms-transform:translate(0, 1%);-webkit-transform:translate(0, 1%);position:relative;z-index:2}#onetrust-pc-sdk .ot-ven-link *{font-size:inherit}#onetrust-pc-sdk .ot-ven-link:hover{text-decoration:underline}#onetrust-pc-sdk .ot-ven-hdr{width:calc(100% - 160px);height:auto;float:left;word-break:break-word;word-wrap:break-word;vertical-align:middle;padding-bottom:3px}#onetrust-pc-sdk .ot-ven-link{letter-spacing:.03em;font-size:.75em;font-weight:400}#onetrust-pc-sdk .ot-ven-dets{border-radius:2px;background-color:#f8f8f8}#onetrust-pc-sdk .ot-ven-dets div:first-child p:first-child{border-top:none}#onetrust-pc-sdk .ot-ven-dets .ot-ven-disc:not(:first-child){border-top:1px solid #e9e9e9}#onetrust-pc-sdk .ot-ven-dets .ot-ven-disc:nth-child(n+3) p{display:inline-block}#onetrust-pc-sdk .ot-ven-dets .ot-ven-disc:nth-child(n+3) p:nth-of-type(odd){width:30%}#onetrust-pc-sdk .ot-ven-dets .ot-ven-disc:nth-child(n+3) p:nth-of-type(even){width:50%;word-break:break-word;word-wrap:break-word}#onetrust-pc-sdk .ot-ven-dets .ot-ven-disc p{padding-top:5px;padding-bottom:5px;display:block}#onetrust-pc-sdk .ot-ven-dets p{font-size:.69em;text-align:left;vertical-align:middle;word-break:break-word;word-wrap:break-word;margin:0;padding-bottom:10px;padding-left:15px;color:#2e3644}#onetrust-pc-sdk .ot-ven-dets p:first-child{padding-top:5px}#onetrust-pc-sdk .ot-ven-dets .ot-ven-pur p:first-child{border-top:1px solid #e9e9e9;border-bottom:1px solid #e9e9e9;padding-bottom:5px;margin-bottom:5px;font-weight:bold}#onetrust-pc-sdk #ot-host-lst .ot-sel-all{float:right;position:relative;margin-right:42px;top:10px}#onetrust-pc-sdk #ot-host-lst .ot-sel-all input[type=checkbox]{width:auto;height:auto}#onetrust-pc-sdk #ot-host-lst .ot-sel-all label{height:20px;width:20px;padding-left:0px}#onetrust-pc-sdk #ot-host-lst .ot-acc-txt{overflow:hidden;width:95%}#onetrust-pc-sdk .ot-host-hdr{width:calc(100% - 125px);float:left}#onetrust-pc-sdk .ot-host-name,#onetrust-pc-sdk .ot-host-desc{display:inline-block;width:90%}#onetrust-pc-sdk .ot-host-hdr>a{text-decoration:underline;font-size:.82em;position:relative;z-index:2;float:left;margin-bottom:5px}#onetrust-pc-sdk .ot-host-name+a{margin-top:5px}#onetrust-pc-sdk .ot-host-name,#onetrust-pc-sdk .ot-host-name a,#onetrust-pc-sdk .ot-host-desc,#onetrust-pc-sdk .ot-host-info{color:dimgray;word-break:break-word;word-wrap:break-word}#onetrust-pc-sdk .ot-host-name,#onetrust-pc-sdk .ot-host-name a{font-weight:bold;font-size:.82em;line-height:1.3}#onetrust-pc-sdk .ot-host-name a{font-size:1em}#onetrust-pc-sdk .ot-host-expand{margin-top:3px;margin-bottom:3px;clear:both;display:block;color:#3860be;font-size:.72em;font-weight:normal}#onetrust-pc-sdk .ot-host-expand *{font-size:inherit}#onetrust-pc-sdk .ot-host-desc,#onetrust-pc-sdk .ot-host-info{font-size:.688em;line-height:1.4;font-weight:normal}#onetrust-pc-sdk .ot-host-desc{margin-top:10px}#onetrust-pc-sdk .ot-host-opt{margin:0;font-size:inherit;display:inline-block;width:100%}#onetrust-pc-sdk .ot-host-opt li>div div{font-size:.8em;padding:5px 0}#onetrust-pc-sdk .ot-host-opt li>div div:nth-child(1){width:30%;float:left}#onetrust-pc-sdk .ot-host-opt li>div div:nth-child(2){width:70%;float:left;word-break:break-word;word-wrap:break-word}#onetrust-pc-sdk .ot-host-info{border:none;display:inline-block;width:calc(100% - 10px);padding:10px;margin-bottom:10px;background-color:#f8f8f8}#onetrust-pc-sdk .ot-host-info>div{overflow:auto}#onetrust-pc-sdk #no-results{text-align:center;margin-top:30px}#onetrust-pc-sdk #no-results p{font-size:1em;color:#2e3644;word-break:break-word;word-wrap:break-word}#onetrust-pc-sdk #no-results p span{font-weight:bold}#onetrust-pc-sdk #ot-fltr-modal{width:100%;height:auto;display:none;-moz-transition:.2s ease;-o-transition:.2s ease;-webkit-transition:2s ease;transition:.2s ease;overflow:hidden;opacity:1;right:0}#onetrust-pc-sdk #ot-fltr-modal .ot-label-txt{display:inline-block;font-size:.85em;color:dimgray}#onetrust-pc-sdk #ot-fltr-cnt{z-index:2147483646;background-color:#fff;position:absolute;height:90%;max-height:300px;width:325px;left:210px;margin-top:10px;margin-bottom:20px;padding-right:10px;border-radius:3px;-webkit-box-shadow:0px 0px 12px 2px #c7c5c7;-moz-box-shadow:0px 0px 12px 2px #c7c5c7;box-shadow:0px 0px 12px 2px #c7c5c7}#onetrust-pc-sdk .ot-fltr-scrlcnt{overflow-y:auto;overflow-x:hidden;clear:both;max-height:calc(100% - 60px)}#onetrust-pc-sdk #ot-anchor{border:12px solid transparent;display:none;position:absolute;z-index:2147483647;right:55px;top:75px;transform:rotate(45deg);-o-transform:rotate(45deg);-ms-transform:rotate(45deg);-webkit-transform:rotate(45deg);background-color:#fff;-webkit-box-shadow:-3px -3px 5px -2px #c7c5c7;-moz-box-shadow:-3px -3px 5px -2px #c7c5c7;box-shadow:-3px -3px 5px -2px #c7c5c7}#onetrust-pc-sdk .ot-fltr-btns{margin-left:15px}#onetrust-pc-sdk #filter-apply-handler{margin-right:15px}#onetrust-pc-sdk .ot-fltr-opt{margin-bottom:25px;margin-left:15px;width:75%;position:relative}#onetrust-pc-sdk .ot-fltr-opt p{display:inline-block;margin:0;font-size:.9em;color:#2e3644}#onetrust-pc-sdk .ot-chkbox label span{font-size:.85em;color:dimgray}#onetrust-pc-sdk .ot-chkbox input[type=checkbox]+label::after{content:none;color:#fff}#onetrust-pc-sdk .ot-chkbox input[type=checkbox]:checked+label::after{content:""}#onetrust-pc-sdk .ot-chkbox input[type=checkbox]:focus+label::before{outline-style:solid;outline-width:2px;outline-style:auto}#onetrust-pc-sdk #ot-selall-vencntr,#onetrust-pc-sdk #ot-selall-adtlvencntr,#onetrust-pc-sdk #ot-selall-hostcntr,#onetrust-pc-sdk #ot-selall-licntr,#onetrust-pc-sdk #ot-selall-gnvencntr{right:15px;position:relative;width:20px;height:20px;float:right}#onetrust-pc-sdk #ot-selall-vencntr label,#onetrust-pc-sdk #ot-selall-adtlvencntr label,#onetrust-pc-sdk #ot-selall-hostcntr label,#onetrust-pc-sdk #ot-selall-licntr label,#onetrust-pc-sdk #ot-selall-gnvencntr label{float:left;padding-left:0}#onetrust-pc-sdk #ot-ven-lst:first-child{border-top:1px solid #e2e2e2}#onetrust-pc-sdk ul{list-style:none;padding:0}#onetrust-pc-sdk ul li{position:relative;margin:0;padding:15px 15px 15px 10px;border-bottom:1px solid #e2e2e2}#onetrust-pc-sdk ul li h3{font-size:.75em;color:#656565;margin:0;display:inline-block;width:70%;height:auto;word-break:break-word;word-wrap:break-word}#onetrust-pc-sdk ul li p{margin:0;font-size:.7em}#onetrust-pc-sdk ul li input[type=checkbox]{position:absolute;cursor:pointer;width:100%;height:100%;opacity:0;margin:0;top:0;left:0}#onetrust-pc-sdk .ot-cat-item>button:focus,#onetrust-pc-sdk .ot-acc-cntr>button:focus,#onetrust-pc-sdk li>button:focus{outline:#000 solid 2px}#onetrust-pc-sdk .ot-cat-item>button,#onetrust-pc-sdk .ot-acc-cntr>button,#onetrust-pc-sdk li>button{position:absolute;cursor:pointer;width:100%;height:100%;margin:0;top:0;left:0;z-index:1;max-width:none;border:none}#onetrust-pc-sdk .ot-cat-item>button[aria-expanded=false]~.ot-acc-txt,#onetrust-pc-sdk .ot-acc-cntr>button[aria-expanded=false]~.ot-acc-txt,#onetrust-pc-sdk li>button[aria-expanded=false]~.ot-acc-txt{margin-top:0;max-height:0;opacity:0;overflow:hidden;width:100%;transition:.25s ease-out;display:none}#onetrust-pc-sdk .ot-cat-item>button[aria-expanded=true]~.ot-acc-txt,#onetrust-pc-sdk .ot-acc-cntr>button[aria-expanded=true]~.ot-acc-txt,#onetrust-pc-sdk li>button[aria-expanded=true]~.ot-acc-txt{transition:.1s ease-in;margin-top:10px;width:100%;overflow:auto;display:block}#onetrust-pc-sdk .ot-cat-item>button[aria-expanded=true]~.ot-acc-grpcntr,#onetrust-pc-sdk .ot-acc-cntr>button[aria-expanded=true]~.ot-acc-grpcntr,#onetrust-pc-sdk li>button[aria-expanded=true]~.ot-acc-grpcntr{width:auto;margin-top:0px;padding-bottom:10px}#onetrust-pc-sdk .ot-host-item>button:focus,#onetrust-pc-sdk .ot-ven-item>button:focus{outline:0;border:2px solid #000}#onetrust-pc-sdk .ot-hide-acc>button{pointer-events:none}#onetrust-pc-sdk .ot-hide-acc .ot-plus-minus>*,#onetrust-pc-sdk .ot-hide-acc .ot-arw-cntr>*{visibility:hidden}#onetrust-pc-sdk .ot-hide-acc .ot-acc-hdr{min-height:30px}#onetrust-pc-sdk.ot-addtl-vendors #ot-lst-cnt:not(.ot-host-cnt){padding-right:10px;width:calc(100% - 37px);margin-top:10px;max-height:calc(100% - 90px)}#onetrust-pc-sdk.ot-addtl-vendors #ot-lst-cnt:not(.ot-host-cnt) #ot-sel-blk{background-color:#f9f9fc;border:1px solid #e2e2e2;width:calc(100% - 2px);padding-bottom:5px;padding-top:5px}#onetrust-pc-sdk.ot-addtl-vendors #ot-lst-cnt:not(.ot-host-cnt) .ot-sel-all{padding-right:34px}#onetrust-pc-sdk.ot-addtl-vendors #ot-lst-cnt:not(.ot-host-cnt) .ot-sel-all-chkbox{width:auto}#onetrust-pc-sdk.ot-addtl-vendors #ot-lst-cnt:not(.ot-host-cnt) ul li{border:1px solid #e2e2e2;margin-bottom:10px}#onetrust-pc-sdk.ot-addtl-vendors #ot-lst-cnt:not(.ot-host-cnt) .ot-acc-cntr>.ot-acc-hdr{padding:10px 0 10px 15px}#onetrust-pc-sdk.ot-addtl-vendors .ot-sel-all-chkbox{float:right}#onetrust-pc-sdk.ot-addtl-vendors .ot-plus-minus~.ot-sel-all-chkbox{right:34px}#onetrust-pc-sdk.ot-addtl-vendors #ot-ven-lst:first-child{border-top:none}#onetrust-pc-sdk .ot-acc-cntr{position:relative;border-left:1px solid #e2e2e2;border-right:1px solid #e2e2e2;border-bottom:1px solid #e2e2e2}#onetrust-pc-sdk .ot-acc-cntr input{z-index:1}#onetrust-pc-sdk .ot-acc-cntr>.ot-acc-hdr{background-color:#f9f9fc;padding:5px 0 5px 15px;width:auto}#onetrust-pc-sdk .ot-acc-cntr>.ot-acc-hdr .ot-plus-minus{vertical-align:middle;top:auto}#onetrust-pc-sdk .ot-acc-cntr>.ot-acc-hdr .ot-arw-cntr{right:10px}#onetrust-pc-sdk .ot-acc-cntr>.ot-acc-hdr input{z-index:2}#onetrust-pc-sdk .ot-acc-cntr>input[type=checkbox]:checked~.ot-acc-hdr{border-bottom:1px solid #e2e2e2}#onetrust-pc-sdk .ot-acc-cntr>.ot-acc-txt{padding-left:10px;padding-right:10px}#onetrust-pc-sdk .ot-acc-cntr button[aria-expanded=true]~.ot-acc-txt{width:auto}#onetrust-pc-sdk .ot-acc-cntr .ot-addtl-venbox{display:none}#onetrust-pc-sdk .ot-vlst-cntr{margin-bottom:0;width:100%}#onetrust-pc-sdk .ot-vensec-title{font-size:.813em;vertical-align:middle;display:inline-block}#onetrust-pc-sdk .category-vendors-list-handler,#onetrust-pc-sdk .category-vendors-list-handler+a{margin-left:0;margin-top:10px}#onetrust-pc-sdk #ot-selall-vencntr.line-through label::after,#onetrust-pc-sdk #ot-selall-adtlvencntr.line-through label::after,#onetrust-pc-sdk #ot-selall-licntr.line-through label::after,#onetrust-pc-sdk #ot-selall-hostcntr.line-through label::after,#onetrust-pc-sdk #ot-selall-gnvencntr.line-through label::after{height:auto;border-left:0;transform:none;-o-transform:none;-ms-transform:none;-webkit-transform:none;left:5px;top:9px}#onetrust-pc-sdk #ot-category-title{float:left;padding-bottom:10px;font-size:1em;width:100%}#onetrust-pc-sdk .ot-cat-grp{margin-top:10px}#onetrust-pc-sdk .ot-cat-item{line-height:1.1;margin-top:10px;display:inline-block;width:100%}#onetrust-pc-sdk .ot-btn-container{text-align:right}#onetrust-pc-sdk .ot-btn-container button{display:inline-block;font-size:.75em;letter-spacing:.08em;margin-top:19px}#onetrust-pc-sdk #close-pc-btn-handler.ot-close-icon{position:absolute;top:10px;right:0;z-index:1;padding:0;background-color:transparent;border:none}#onetrust-pc-sdk #close-pc-btn-handler.ot-close-icon:hover{opacity:.7}#onetrust-pc-sdk #close-pc-btn-handler.ot-close-icon svg{display:block;height:10px;width:10px}#onetrust-pc-sdk #clear-filters-handler{margin-top:20px;margin-bottom:10px;float:right;max-width:200px;text-decoration:none;color:#3860be;font-size:.9em;font-weight:bold;background-color:transparent;border-color:transparent;padding:1px}#onetrust-pc-sdk #clear-filters-handler:hover{color:#2285f7}#onetrust-pc-sdk #clear-filters-handler:focus{outline:#000 solid 1px}#onetrust-pc-sdk .ot-accordion-layout.ot-cat-item{position:relative;border-radius:2px;margin:0;padding:0;border:1px solid #d8d8d8;border-top:none;width:calc(100% - 2px);float:left}#onetrust-pc-sdk .ot-accordion-layout.ot-cat-item:first-of-type{margin-top:10px;border-top:1px solid #d8d8d8}#onetrust-pc-sdk .ot-accordion-layout .ot-acc-grpdesc{padding-left:20px;padding-right:20px;width:calc(100% - 40px);font-size:.812em;margin-bottom:10px;margin-top:15px}#onetrust-pc-sdk .ot-accordion-layout .ot-acc-grpdesc>ul{padding-top:10px}#onetrust-pc-sdk .ot-accordion-layout .ot-acc-grpdesc>ul li{padding-top:0;line-height:1.5;padding-bottom:10px}#onetrust-pc-sdk .ot-accordion-layout div+.ot-acc-grpdesc{margin-top:5px}#onetrust-pc-sdk .ot-accordion-layout .ot-vlst-cntr:first-child{margin-top:10px}#onetrust-pc-sdk .ot-accordion-layout .ot-vlst-cntr:last-child,#onetrust-pc-sdk .ot-accordion-layout .ot-hlst-cntr:last-child{margin-bottom:5px}#onetrust-pc-sdk .ot-accordion-layout .ot-acc-hdr{padding-top:11.5px;padding-bottom:11.5px;padding-left:20px;padding-right:20px;width:calc(100% - 40px);display:inline-block}#onetrust-pc-sdk .ot-accordion-layout .ot-acc-txt{width:100%;padding:0px}#onetrust-pc-sdk .ot-accordion-layout .ot-subgrp-cntr{padding-left:20px;padding-right:15px;padding-bottom:0;width:calc(100% - 35px)}#onetrust-pc-sdk .ot-accordion-layout .ot-subgrp{padding-right:5px}#onetrust-pc-sdk .ot-accordion-layout .ot-acc-grpcntr{z-index:1;position:relative}#onetrust-pc-sdk .ot-accordion-layout .ot-cat-header+.ot-arw-cntr{position:absolute;top:50%;transform:translateY(-50%);right:20px;margin-top:-2px}#onetrust-pc-sdk .ot-accordion-layout .ot-cat-header+.ot-arw-cntr .ot-arw{width:15px;height:20px;margin-left:5px;color:dimgray}#onetrust-pc-sdk .ot-accordion-layout .ot-cat-header{float:none;color:#2e3644;margin:0;display:inline-block;height:auto;word-wrap:break-word;min-height:inherit}#onetrust-pc-sdk .ot-accordion-layout .ot-vlst-cntr,#onetrust-pc-sdk .ot-accordion-layout .ot-hlst-cntr{padding-left:20px;width:calc(100% - 20px);display:inline-block;margin-top:0px;padding-bottom:2px}#onetrust-pc-sdk .ot-accordion-layout .ot-acc-hdr{position:relative;min-height:25px}#onetrust-pc-sdk .ot-accordion-layout h4~.ot-tgl,#onetrust-pc-sdk .ot-accordion-layout h4~.ot-always-active{position:absolute;top:50%;transform:translateY(-50%);right:20px}#onetrust-pc-sdk .ot-accordion-layout h4~.ot-tgl+.ot-tgl{right:95px}#onetrust-pc-sdk .ot-accordion-layout .category-vendors-list-handler,#onetrust-pc-sdk .ot-accordion-layout .category-vendors-list-handler+a{margin-top:5px}#onetrust-pc-sdk .ot-enbl-chr h4~.ot-tgl,#onetrust-pc-sdk .ot-enbl-chr h4~.ot-always-active{right:45px}#onetrust-pc-sdk .ot-enbl-chr h4~.ot-tgl+.ot-tgl{right:120px}#onetrust-pc-sdk .ot-enbl-chr .ot-pli-hdr.ot-leg-border-color span:first-child{width:90px}#onetrust-pc-sdk .ot-enbl-chr li.ot-subgrp>h5+.ot-tgl-cntr{padding-right:25px}#onetrust-pc-sdk .ot-plus-minus{width:20px;height:20px;font-size:1.5em;position:relative;display:inline-block;margin-right:5px;top:3px}#onetrust-pc-sdk .ot-plus-minus span{position:absolute;background:#27455c;border-radius:1px}#onetrust-pc-sdk .ot-plus-minus span:first-of-type{top:25%;bottom:25%;width:10%;left:45%}#onetrust-pc-sdk .ot-plus-minus span:last-of-type{left:25%;right:25%;height:10%;top:45%}#onetrust-pc-sdk button[aria-expanded=true]~.ot-acc-hdr .ot-plus-minus span:first-of-type,#onetrust-pc-sdk button[aria-expanded=true]~.ot-acc-hdr .ot-plus-minus span:last-of-type{transform:rotate(90deg)}#onetrust-pc-sdk button[aria-expanded=true]~.ot-acc-hdr .ot-plus-minus span:last-of-type{left:50%;right:50%}#onetrust-pc-sdk #ot-selall-vencntr label,#onetrust-pc-sdk #ot-selall-adtlvencntr label,#onetrust-pc-sdk #ot-selall-hostcntr label,#onetrust-pc-sdk #ot-selall-licntr label{position:relative;display:inline-block;width:20px;height:20px}#onetrust-pc-sdk .ot-host-item .ot-plus-minus,#onetrust-pc-sdk .ot-ven-item .ot-plus-minus{float:left;margin-right:8px;top:10px}#onetrust-pc-sdk .ot-pli-hdr{color:#77808e;overflow:hidden;padding-top:7.5px;padding-bottom:7.5px;width:calc(100% - 2px);border-top-left-radius:3px;border-top-right-radius:3px}#onetrust-pc-sdk .ot-pli-hdr span:first-child{top:50%;transform:translateY(50%);max-width:90px}#onetrust-pc-sdk .ot-pli-hdr span:last-child{padding-right:10px;max-width:95px;text-align:center}#onetrust-pc-sdk .ot-li-title{float:right;font-size:.813em}#onetrust-pc-sdk .ot-pli-hdr.ot-leg-border-color{background-color:#f4f4f4;border:1px solid #d8d8d8}#onetrust-pc-sdk .ot-pli-hdr.ot-leg-border-color span:first-child{text-align:left;width:70px}#onetrust-pc-sdk li.ot-subgrp>h5,#onetrust-pc-sdk .ot-cat-header{width:calc(100% - 130px)}#onetrust-pc-sdk li.ot-subgrp>h5+.ot-tgl-cntr{padding-left:13px}#onetrust-pc-sdk .ot-acc-grpcntr .ot-acc-grpdesc{margin-bottom:5px}#onetrust-pc-sdk .ot-acc-grpcntr .ot-subgrp-cntr{border-top:1px solid #d8d8d8}#onetrust-pc-sdk .ot-acc-grpcntr .ot-vlst-cntr+.ot-subgrp-cntr{border-top:none}#onetrust-pc-sdk .ot-acc-hdr .ot-arw-cntr+.ot-tgl-cntr,#onetrust-pc-sdk .ot-acc-txt h4+.ot-tgl-cntr{padding-left:13px}#onetrust-pc-sdk .ot-pli-hdr~.ot-cat-item .ot-subgrp>h5,#onetrust-pc-sdk .ot-pli-hdr~.ot-cat-item .ot-cat-header{width:calc(100% - 145px)}#onetrust-pc-sdk .ot-pli-hdr~.ot-cat-item h5+.ot-tgl-cntr,#onetrust-pc-sdk .ot-pli-hdr~.ot-cat-item .ot-cat-header+.ot-tgl{padding-left:28px}#onetrust-pc-sdk .ot-sel-all-hdr,#onetrust-pc-sdk .ot-sel-all-chkbox{display:inline-block;width:100%;position:relative}#onetrust-pc-sdk .ot-sel-all-chkbox{z-index:1}#onetrust-pc-sdk .ot-sel-all{margin:0;position:relative;padding-right:23px;float:right}#onetrust-pc-sdk .ot-consent-hdr,#onetrust-pc-sdk .ot-li-hdr{float:right;font-size:.812em;line-height:normal;text-align:center;word-break:break-word;word-wrap:break-word}#onetrust-pc-sdk .ot-li-hdr{max-width:100px;padding-right:10px}#onetrust-pc-sdk .ot-consent-hdr{max-width:55px}#onetrust-pc-sdk #ot-selall-licntr{display:block;width:21px;height:auto;float:right;position:relative;right:80px}#onetrust-pc-sdk #ot-selall-licntr label{position:absolute}#onetrust-pc-sdk .ot-ven-ctgl{margin-left:66px}#onetrust-pc-sdk .ot-ven-litgl+.ot-arw-cntr{margin-left:81px}#onetrust-pc-sdk .ot-enbl-chr .ot-host-cnt .ot-tgl-cntr{width:auto}#onetrust-pc-sdk #ot-lst-cnt:not(.ot-host-cnt) .ot-tgl-cntr{width:auto;top:auto;height:20px}#onetrust-pc-sdk #ot-lst-cnt .ot-chkbox{position:relative;display:inline-block;width:20px;height:20px}#onetrust-pc-sdk #ot-lst-cnt .ot-chkbox label{position:absolute;padding:0;width:20px;height:20px}#onetrust-pc-sdk .ot-acc-grpdesc+.ot-leg-btn-container{padding-left:20px;padding-right:20px;width:calc(100% - 40px);margin-bottom:5px}#onetrust-pc-sdk .ot-subgrp .ot-leg-btn-container{margin-bottom:5px}#onetrust-pc-sdk #ot-ven-lst .ot-leg-btn-container{margin-top:10px}#onetrust-pc-sdk .ot-leg-btn-container{display:inline-block;width:100%;margin-bottom:10px}#onetrust-pc-sdk .ot-leg-btn-container button{height:auto;padding:6.5px 8px;margin-bottom:0;letter-spacing:0;font-size:.75em;line-height:normal}#onetrust-pc-sdk .ot-leg-btn-container svg{display:none;height:14px;width:14px;padding-right:5px;vertical-align:sub}#onetrust-pc-sdk .ot-active-leg-btn{cursor:default;pointer-events:none}#onetrust-pc-sdk .ot-active-leg-btn svg{display:inline-block}#onetrust-pc-sdk .ot-remove-objection-handler{text-decoration:underline;padding:0;font-size:.75em;font-weight:600;line-height:1;padding-left:10px}#onetrust-pc-sdk .ot-obj-leg-btn-handler span{font-weight:bold;text-align:center;font-size:inherit;line-height:1.5}#onetrust-pc-sdk.ot-close-btn-link #close-pc-btn-handler{border:none;height:auto;line-height:1.5;text-decoration:underline;font-size:.69em;background:none;right:15px;top:15px;width:auto;font-weight:normal}#onetrust-pc-sdk[dir=rtl] #ot-back-arw,#onetrust-pc-sdk[dir=rtl] input~.ot-acc-hdr .ot-arw{transform:rotate(180deg);-o-transform:rotate(180deg);-ms-transform:rotate(180deg);-webkit-transform:rotate(180deg)}#onetrust-pc-sdk[dir=rtl] input:checked~.ot-acc-hdr .ot-arw{transform:rotate(270deg);-o-transform:rotate(270deg);-ms-transform:rotate(270deg);-webkit-transform:rotate(270deg)}#onetrust-pc-sdk[dir=rtl] .ot-chkbox label::after{transform:rotate(45deg);-webkit-transform:rotate(45deg);-o-transform:rotate(45deg);-ms-transform:rotate(45deg);border-left:0;border-right:3px solid}#onetrust-pc-sdk[dir=rtl] .ot-search-cntr>svg{right:0}@media only screen and (max-width: 600px){#onetrust-pc-sdk.otPcCenter{left:0;min-width:100%;height:100%;top:0;border-radius:0}#onetrust-pc-sdk #ot-pc-content,#onetrust-pc-sdk.ot-ftr-stacked .ot-btn-container{margin:1px 3px 0 10px;padding-right:10px;width:calc(100% - 23px)}#onetrust-pc-sdk .ot-btn-container button{max-width:none;letter-spacing:.01em}#onetrust-pc-sdk #close-pc-btn-handler{top:10px;right:17px}#onetrust-pc-sdk p{font-size:.7em}#onetrust-pc-sdk #ot-pc-hdr{margin:10px 10px 0 5px;width:calc(100% - 15px)}#onetrust-pc-sdk .vendor-search-handler{font-size:1em}#onetrust-pc-sdk #ot-back-arw{margin-left:12px}#onetrust-pc-sdk #ot-lst-cnt{margin:0;padding:0 5px 0 10px;min-width:95%}#onetrust-pc-sdk .switch+p{max-width:80%}#onetrust-pc-sdk .ot-ftr-stacked button{width:100%}#onetrust-pc-sdk #ot-fltr-cnt{max-width:320px;width:90%;border-top-right-radius:0;border-bottom-right-radius:0;margin:0;margin-left:15px;left:auto;right:40px;top:85px}#onetrust-pc-sdk .ot-fltr-opt{margin-left:25px;margin-bottom:10px}#onetrust-pc-sdk .ot-pc-refuse-all-handler{margin-bottom:0}#onetrust-pc-sdk #ot-fltr-cnt{right:40px}}@media only screen and (max-width: 476px){#onetrust-pc-sdk .ot-fltr-cntr,#onetrust-pc-sdk #ot-fltr-cnt{right:10px}#onetrust-pc-sdk #ot-anchor{right:25px}#onetrust-pc-sdk button{width:100%}#onetrust-pc-sdk:not(.ot-addtl-vendors) #ot-pc-lst:not(.ot-enbl-chr) .ot-sel-all{padding-right:9px}#onetrust-pc-sdk:not(.ot-addtl-vendors) #ot-pc-lst:not(.ot-enbl-chr) .ot-tgl-cntr{right:0}}@media only screen and (max-width: 896px)and (max-height: 425px)and (orientation: landscape){#onetrust-pc-sdk.otPcCenter{left:0;top:0;min-width:100%;height:100%;border-radius:0}#onetrust-pc-sdk #ot-anchor{left:initial;right:50px}#onetrust-pc-sdk #ot-lst-title{margin-top:12px}#onetrust-pc-sdk #ot-lst-title *{font-size:inherit}#onetrust-pc-sdk #ot-pc-hdr input{margin-right:0;padding-right:45px}#onetrust-pc-sdk .switch+p{max-width:85%}#onetrust-pc-sdk #ot-sel-blk{position:static}#onetrust-pc-sdk #ot-pc-lst{overflow:auto}#onetrust-pc-sdk .ot-pc-footer-logo{display:none}#onetrust-pc-sdk #ot-lst-cnt{max-height:none;overflow:initial}#onetrust-pc-sdk #ot-lst-cnt.no-results{height:auto}#onetrust-pc-sdk input{font-size:1em !important}#onetrust-pc-sdk p{font-size:.6em}#onetrust-pc-sdk #ot-fltr-modal{width:100%;top:0}#onetrust-pc-sdk ul li p,#onetrust-pc-sdk .category-vendors-list-handler,#onetrust-pc-sdk .category-vendors-list-handler+a,#onetrust-pc-sdk .category-host-list-handler{font-size:.6em}#onetrust-pc-sdk.ot-shw-fltr #ot-anchor{display:none !important}#onetrust-pc-sdk.ot-shw-fltr #ot-pc-lst{height:100% !important;overflow:hidden;top:0px}#onetrust-pc-sdk.ot-shw-fltr #ot-fltr-cnt{margin:0;height:100%;max-height:none;padding:10px;top:0;width:calc(100% - 20px);position:absolute;right:0;left:0;max-width:none}#onetrust-pc-sdk.ot-shw-fltr .ot-fltr-scrlcnt{max-height:calc(100% - 65px)}}
                #onetrust-consent-sdk #onetrust-pc-sdk,
                    #onetrust-consent-sdk #ot-search-cntr,
                    #onetrust-consent-sdk #onetrust-pc-sdk .ot-switch.ot-toggle,
                    #onetrust-consent-sdk #onetrust-pc-sdk ot-grp-hdr1 .checkbox,
                    #onetrust-consent-sdk #onetrust-pc-sdk #ot-pc-title:after
                    ,#onetrust-consent-sdk #onetrust-pc-sdk #ot-sel-blk,
                            #onetrust-consent-sdk #onetrust-pc-sdk #ot-fltr-cnt,
                            #onetrust-consent-sdk #onetrust-pc-sdk #ot-anchor {
                        background-color: #FFFFFF;
                    }
                   
                #onetrust-consent-sdk #onetrust-pc-sdk h3,
                    #onetrust-consent-sdk #onetrust-pc-sdk h4,
                    #onetrust-consent-sdk #onetrust-pc-sdk h5,
                    #onetrust-consent-sdk #onetrust-pc-sdk h6,
                    #onetrust-consent-sdk #onetrust-pc-sdk p,
                    #onetrust-consent-sdk #onetrust-pc-sdk #ot-ven-lst .ot-ven-opts p,
                    #onetrust-consent-sdk #onetrust-pc-sdk #ot-pc-desc,
                    #onetrust-consent-sdk #onetrust-pc-sdk #ot-pc-title,
                    #onetrust-consent-sdk #onetrust-pc-sdk .ot-li-title,
                    #onetrust-consent-sdk #onetrust-pc-sdk .ot-sel-all-hdr span,
                    #onetrust-consent-sdk #onetrust-pc-sdk #ot-host-lst .ot-host-info,
                    #onetrust-consent-sdk #onetrust-pc-sdk #ot-fltr-modal #modal-header,
                    #onetrust-consent-sdk #onetrust-pc-sdk .ot-checkbox label span,
                    #onetrust-consent-sdk #onetrust-pc-sdk #ot-pc-lst #ot-sel-blk p,
                    #onetrust-consent-sdk #onetrust-pc-sdk #ot-pc-lst #ot-lst-title span,
                    #onetrust-consent-sdk #onetrust-pc-sdk #ot-pc-lst .back-btn-handler p,
                    #onetrust-consent-sdk #onetrust-pc-sdk #ot-pc-lst .ot-ven-name,
                    #onetrust-consent-sdk #onetrust-pc-sdk #ot-pc-lst #ot-ven-lst .consent-category,
                    #onetrust-consent-sdk #onetrust-pc-sdk .ot-leg-btn-container .ot-inactive-leg-btn,
                    #onetrust-consent-sdk #onetrust-pc-sdk .ot-label-status,
                    #onetrust-consent-sdk #onetrust-pc-sdk .ot-chkbox label span,
                    #onetrust-consent-sdk #onetrust-pc-sdk #clear-filters-handler 
                    {
                        color: #696969;
                    }
                 #onetrust-consent-sdk #onetrust-pc-sdk .privacy-notice-link,
                        #onetrust-consent-sdk #onetrust-pc-sdk .category-vendors-list-handler,
                        #onetrust-consent-sdk #onetrust-pc-sdk .category-vendors-list-handler + a,
                        #onetrust-consent-sdk #onetrust-pc-sdk .category-host-list-handler,
                        #onetrust-consent-sdk #onetrust-pc-sdk .ot-ven-link,
                        #onetrust-consent-sdk #onetrust-pc-sdk #ot-host-lst .ot-host-name a,
                        #onetrust-consent-sdk #onetrust-pc-sdk #ot-host-lst .ot-acc-hdr .ot-host-expand,
                        #onetrust-consent-sdk #onetrust-pc-sdk #ot-host-lst .ot-host-info a
                        {
                            color: #696969;
                        }
                #onetrust-consent-sdk #onetrust-pc-sdk .category-vendors-list-handler:hover { opacity: .7;}
                #onetrust-consent-sdk #onetrust-pc-sdk .ot-acc-grpcntr.ot-acc-txt,
                #onetrust-consent-sdk #onetrust-pc-sdk .ot-acc-txt .ot-subgrp-tgl .ot-switch.ot-toggle
                 {
                    background-color: #E9E9E9;
                }
                 #onetrust-consent-sdk #onetrust-pc-sdk #ot-host-lst .ot-host-info,
                        #onetrust-consent-sdk #onetrust-pc-sdk .ot-acc-txt .ot-ven-dets
                                {
                                    background-color: #E9E9E9;
                                }
            #onetrust-consent-sdk #onetrust-pc-sdk 
                button:not(#clear-filters-handler):not(.ot-close-icon):not(#filter-btn-handler):not(.ot-remove-objection-handler):not(.ot-obj-leg-btn-handler):not([aria-expanded]):not(.ot-link-btn),
                #onetrust-consent-sdk #onetrust-pc-sdk .ot-leg-btn-container .ot-active-leg-btn {
                    background-color: #77bb41;border-color: #77bb41;
                    color: #FFFFFF;
                }
                #onetrust-consent-sdk #onetrust-pc-sdk .ot-active-menu {
                    border-color: #77bb41;
                }
                
                #onetrust-consent-sdk #onetrust-pc-sdk .ot-leg-btn-container .ot-remove-objection-handler{
                    background-color: transparent;
                    border:1px solid transparent;
                }
                #onetrust-consent-sdk #onetrust-pc-sdk .ot-leg-btn-container .ot-inactive-leg-btn {
                    background-color: #FFFFFF;
                    color: #78808E; border-color: #78808E;
                }
                .ot-sdk-cookie-policy{font-family:inherit;font-size:16px}.ot-sdk-cookie-policy.otRelFont{font-size:1rem}.ot-sdk-cookie-policy h3,.ot-sdk-cookie-policy h4,.ot-sdk-cookie-policy h6,.ot-sdk-cookie-policy p,.ot-sdk-cookie-policy li,.ot-sdk-cookie-policy a,.ot-sdk-cookie-policy th,.ot-sdk-cookie-policy #cookie-policy-description,.ot-sdk-cookie-policy .ot-sdk-cookie-policy-group,.ot-sdk-cookie-policy #cookie-policy-title{color:dimgray}.ot-sdk-cookie-policy #cookie-policy-description{margin-bottom:1em}.ot-sdk-cookie-policy h4{font-size:1.2em}.ot-sdk-cookie-policy h6{font-size:1em;margin-top:2em}.ot-sdk-cookie-policy th{min-width:75px}.ot-sdk-cookie-policy a,.ot-sdk-cookie-policy a:hover{background:#fff}.ot-sdk-cookie-policy thead{background-color:#f6f6f4;font-weight:bold}.ot-sdk-cookie-policy .ot-mobile-border{display:none}.ot-sdk-cookie-policy section{margin-bottom:2em}.ot-sdk-cookie-policy table{border-collapse:inherit}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy{font-family:inherit;font-size:1rem}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy h3,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy h4,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy h6,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy p,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy li,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy a,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy th,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy #cookie-policy-description,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy .ot-sdk-cookie-policy-group,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy #cookie-policy-title{color:dimgray}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy #cookie-policy-description{margin-bottom:1em}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy .ot-sdk-subgroup{margin-left:1.5em}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy #cookie-policy-description,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy .ot-sdk-cookie-policy-group-desc,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy .ot-table-header,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy a,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy span,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy td{font-size:.9em}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy td span,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy td a{font-size:inherit}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy .ot-sdk-cookie-policy-group{font-size:1em;margin-bottom:.6em}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy .ot-sdk-cookie-policy-title{margin-bottom:1.2em}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy>section{margin-bottom:1em}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy th{min-width:75px}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy a,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy a:hover{background:#fff}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy thead{background-color:#f6f6f4;font-weight:bold}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy .ot-mobile-border{display:none}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy section{margin-bottom:2em}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy .ot-sdk-subgroup ul li{list-style:disc;margin-left:1.5em}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy .ot-sdk-subgroup ul li h4{display:inline-block}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table{border-collapse:inherit;margin:auto;border:1px solid #d7d7d7;border-radius:5px;border-spacing:initial;width:100%;overflow:hidden}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table th,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table td{border-bottom:1px solid #d7d7d7;border-right:1px solid #d7d7d7}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table tr:last-child td{border-bottom:0px}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table tr th:last-child,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table tr td:last-child{border-right:0px}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table .ot-host,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table .ot-cookies-type{width:25%}.ot-sdk-cookie-policy[dir=rtl]{text-align:left}#ot-sdk-cookie-policy h3{font-size:1.5em}@media only screen and (max-width: 530px){.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) table,.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) thead,.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) tbody,.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) th,.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) td,.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) tr{display:block}.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) thead tr{position:absolute;top:-9999px;left:-9999px}.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) tr{margin:0 0 1em 0}.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) tr:nth-child(odd),.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) tr:nth-child(odd) a{background:#f6f6f4}.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) td{border:none;border-bottom:1px solid #eee;position:relative;padding-left:50%}.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) td:before{position:absolute;height:100%;left:6px;width:40%;padding-right:10px}.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) .ot-mobile-border{display:inline-block;background-color:#e4e4e4;position:absolute;height:100%;top:0;left:45%;width:2px}.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) td:before{content:attr(data-label);font-weight:bold}.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) li{word-break:break-word;word-wrap:break-word}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table{overflow:hidden}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table td{border:none;border-bottom:1px solid #d7d7d7}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy thead,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy tbody,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy th,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy td,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy tr{display:block}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table .ot-host,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table .ot-cookies-type{width:auto}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy tr{margin:0 0 1em 0}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy td:before{height:100%;width:40%;padding-right:10px}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy td:before{content:attr(data-label);font-weight:bold}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy li{word-break:break-word;word-wrap:break-word}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy thead tr{position:absolute;top:-9999px;left:-9999px;z-index:-9999}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table tr:last-child td{border-bottom:1px solid #d7d7d7;border-right:0px}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table tr:last-child td:last-child{border-bottom:0px}}
                    
                        #ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy h5,
                        #ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy h6,
                        #ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy li,
                        #ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy p,
                        #ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy a,
                        #ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy span,
                        #ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy td,
                        #ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy #cookie-policy-description {
                            color: #696969;
                        }
                        #ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy th {
                            color: #696969;
                        }
                        #ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy .ot-sdk-cookie-policy-group {
                            color: #696969;
                        }
                        
                        #ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy #cookie-policy-title {
                                color: #696969;
                            }
                        
                
                        #ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table th {
                                background-color: #F8F8F8;
                            }
                        
                
                          @keyframes slide-down-custom {
                              0% {
                                  bottom: 1007px !important;
                              }
                              100% {
                                  bottom: 0px;
                              }
                          }
                          @-webkit-keyframes slide-down-custom {
                              0% {
                                  bottom: 1007px !important;
                              }
                              100% {
                                  bottom: 0px;
                              }
                          }
                          @-moz-keyframes slide-down-custom {
                              0% {
                                  bottom: 1007px !important;
                              }
                              100% {
                                  bottom: 0px;
                              }
                          }
                          #ot-sdk-btn-floating.ot-floating-button{position:fixed;bottom:10px;opacity:0;width:50px;height:50px;line-height:15px;cursor:pointer;background-color:transparent;transform-style:preserve-3d;transition:all 300ms ease;perspective:1000px;z-index:2147483646;animation:otFloatingBtnIntro 800ms ease 0ms 1 forwards}#ot-sdk-btn-floating.ot-floating-button.ot-hide{display:none}#ot-sdk-btn-floating.ot-floating-button::before,#ot-sdk-btn-floating.ot-floating-button::after{text-transform:none;line-height:1;user-select:none;pointer-events:none;position:absolute;transform:scale(0);opacity:0;transition:all 300ms ease;display:block;height:auto}#ot-sdk-btn-floating.ot-floating-button::before{content:"";border:5px solid transparent;z-index:1001;top:50%;border-left-width:0;border-right-color:#333;right:calc(0em - 5px);transform:translate(10px, -50%)}#ot-sdk-btn-floating.ot-floating-button::after{content:attr(title);position:absolute;text-align:center;top:50%;left:calc(100% + 5px);transform:translate(10px, -50%);font-size:.75rem;min-width:3em;max-width:21em;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;padding:5px;border-radius:.3ch;box-shadow:0 1em 2em -0.5em rgba(0,0,0,.35);background:#333;color:#fff;z-index:2147483645}#ot-sdk-btn-floating.ot-floating-button:hover::before,#ot-sdk-btn-floating.ot-floating-button:hover::after{opacity:1}#ot-sdk-btn-floating.ot-floating-button:hover::before{transform:translate(0.5em, -50%) scale(1)}#ot-sdk-btn-floating.ot-floating-button:hover::after{transform:translate(0.5em, -50%) scale(1)}#ot-sdk-btn-floating.ot-floating-button.ot-pc-open .ot-floating-button__front{transform:rotateY(-180deg)}#ot-sdk-btn-floating.ot-floating-button.ot-pc-open .ot-floating-button__back{transform:rotateY(0)}#ot-sdk-btn-floating .ot-floating-button__front,#ot-sdk-btn-floating .ot-floating-button__back{position:absolute;width:100%;height:100%;-webkit-backface-visibility:hidden;backface-visibility:hidden;background-color:#6aaae4;border-radius:10px;box-shadow:0 4px 8px 0 rgba(0,0,0,.2);transition:transform .6s;transform-style:preserve-3d}#ot-sdk-btn-floating .ot-floating-button__front{background-color:#6aaae4;transform:rotateY(0)}#ot-sdk-btn-floating .ot-floating-button__front svg{width:30px;height:37px}#ot-sdk-btn-floating .ot-floating-button__back{background-color:#69c;transform:rotateY(-180deg)}#ot-sdk-btn-floating .ot-floating-button__back svg{width:24px;height:24px}#ot-sdk-btn-floating.ot-floating-button button{background-color:transparent;border:0;width:100%;height:100%;cursor:pointer}@keyframes otFloatingBtnIntro{0%{opacity:0;left:-75px}100%{opacity:1;left:1%}}@keyframes otFloatingBtnImageIntro{0%{opacity:0;transform:scale(0) rotate(-270deg)}100%{opacity:100%;transform:scale(0.95) rotate(0deg)}}</style><script type="text/javascript" async="" src="https://googleads.g.doubleclick.net/pagead/viewthroughconversion/10856870694/?random=1658820516366&amp;cv=9&amp;fst=1658820516366&amp;num=1&amp;bg=ffffff&amp;guid=ON&amp;resp=GooglemKTybQhCsO&amp;u_h=1080&amp;u_w=3840&amp;u_ah=1080&amp;u_aw=3840&amp;u_cd=16&amp;u_his=2&amp;u_tz=0&amp;u_java=false&amp;u_nplug=5&amp;u_nmime=2&amp;gtm=2oa7k0&amp;sendb=1&amp;ig=1&amp;data=event%3Dgtag.config&amp;frm=0&amp;url=https%3A%2F%2Fautogidas.lt%2Fskelbimai%2Fautomobiliai%2F&amp;tiba=Naudoti%20automobiliai%20%7C%20Autogidas.lt&amp;hn=www.googleadservices.com&amp;async=1&amp;rfmt=3&amp;fmt=4"></script><script src="//securepubads.g.doubleclick.net/tag/js/gpt.js" async="" type="text/javascript"></script><script src="//scdn.cxense.com/cx.js" async="" type="text/javascript"></script><script src="https://cdn.cxense.com/track_banners_init.js" async="" type="text/javascript"></script><meta http-equiv="origin-trial" content="AzoawhTRDevLR66Y6MROu167EDncFPBvcKOaQispTo9ouEt5LvcBjnRFqiAByRT+2cDHG1Yj4dXwpLeIhc98/gIAAACFeyJvcmlnaW4iOiJodHRwczovL2RvdWJsZWNsaWNrLm5ldDo0NDMiLCJmZWF0dXJlIjoiUHJpdmFjeVNhbmRib3hBZHNBUElzIiwiZXhwaXJ5IjoxNjYxMjk5MTk5LCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlfQ=="><meta http-equiv="origin-trial" content="A6+nc62kbJgC46ypOwRsNW6RkDn2x7tgRh0wp7jb3DtFF7oEhu1hhm4rdZHZ6zXvnKZLlYcBlQUImC4d3kKihAcAAACLeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXN5bmRpY2F0aW9uLmNvbTo0NDMiLCJmZWF0dXJlIjoiUHJpdmFjeVNhbmRib3hBZHNBUElzIiwiZXhwaXJ5IjoxNjYxMjk5MTk5LCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlfQ=="><meta http-equiv="origin-trial" content="A/9La288e7MDEU2ifusFnMg1C2Ij6uoa/Z/ylwJIXSsWfK37oESIPbxbt4IU86OGqDEPnNVruUiMjfKo65H/CQwAAACLeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXRhZ3NlcnZpY2VzLmNvbTo0NDMiLCJmZWF0dXJlIjoiUHJpdmFjeVNhbmRib3hBZHNBUElzIiwiZXhwaXJ5IjoxNjYxMjk5MTk5LCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlfQ=="><script src="https://securepubads.g.doubleclick.net/gpt/pubads_impl_2022071901.js" async=""></script><script src="//secure.cdn.fastclick.net/js/pubcid/latest/pubcid.min.js"></script><script src="//cdn.id5-sync.com/api/1.0/id5-api.js"></script><meta http-equiv="origin-trial" content="Ah2fKWMf5aeg0Qzrv9P5B3KtYB6iGZ719IuCJzqsn2svXBfAKUTxXIZizz7HC3DFI5BWvV7W0PfxbZiAZ7ZNEwgAAABueyJvcmlnaW4iOiJodHRwczovL2F1dG9naWRhcy5sdDo0NDMiLCJmZWF0dXJlIjoiUHJpdmFjeVNhbmRib3hBZHNBUElzIiwiZXhwaXJ5IjoxNjYxMjk5MTk5LCJpc1N1YmRvbWFpbiI6dHJ1ZX0="></head>
    <body class="chat-enabled chat-enabled-login"><iframe marginwidth="0" marginheight="0" scrolling="no" frameborder="0" height="0" width="0" id="mnet" src="https://c.aaxads.com/aacxs.php?flg=AAXEYBR49&amp;fv=1&amp;fy=37&amp;ke=1&amp;suylg=292%2C195%2C355%2C54%2C356%2C23%2C263%2C264%2C310%2C79%2C330%2C213%2C306%2C89%2C29%2C218&amp;yvVbqf=1&amp;uhiXuo=&amp;gdpr=1&amp;gdprconsent=0&amp;gdprstring=CPcu-xnPcu-xnAcABBENCZCgAAAAAH_AAChQAAAR2AJMNW4gC7EscCbaMIoUQIwrCQ6gUAFFAMLRBYQOrgp2VwE-sIWACAVARgRAgxBRgwCAAQCAJCIgJAjwQCIAiAQAAgAVAIQAEbAILACwMAgAFANCxAigCECQgyICI5TAgIkSCgnsrEEoO9DTCEOssAKBR_xUICJQAhWBkJCwchwRICXiyQLMUb5ACMEKAUSoAAAA.YAAAD_gAAAAA&amp;usp_status=0&amp;usp_consent=1&amp;coppa=0" style="display: none !important;"></iframe><div class="vm-chat" style="display:none"><div class="chat-main"><div class="chat-main-header"><div class="chat-main-header-body"></div></div><div class="chat-main-body"><div class="chat-default-info">Norėdami pradėti, tęsti pokalbį, skelbime spauskite mygtuką Pradėti pokalbį (chat)</div></div></div><div class="chat-rooms"><div class="chat-rooms-header">Visi pokalbiai<button type="button" class="btn-chat-close"></button></div><div class="chat-rooms-body"><div class="chat-default-info">Norėdami pradėti bendrauti prisijunkite prie savo paskyros</div><div class="chat-login"><a class="btn-login" href="/mano-gidas/?return=/skelbimai/automobiliai/">Prisijungti</a></div></div></div><div class="chat-total-new"></div></div>
            
        
        <div class="main-wrapper">
    
                    <div class="sticky-header-container no-print">
        <div class="sticky-header">
            <div class="container">
                <a class="logo-autogidas" href="/" style="top:3px;left:-4px">
                    <img src="https://static.autogidas.lt/static/img/ag-logo.svg" alt="Autogidas.lt">
                </a>
                                <div class="register">
                        <a rel="nofollow" href="/mano-gidas/"><div class="button edit-button">Redaguoti / Prisijungti</div></a>
                        <div class="cl"></div>
                    </div>
                
                
                <div class="buttons">
                    
                    
                    <a href="/issaugotos-paieskos" rel="nofollow" onclick="sendGAEvent('UserActions', 'www_nav', 'my_searches');">
                        <div class="button icon saved-searches">
    
                            
                            Mano paieškos
                            <span class="count active-count">
                                (<span class="saved-searches-count">1</span>)
                            </span>
    
                        </div>
                    </a>
    
                    <a rel="nofollow" href="/isiminti-skelbimai">
                        <div class="button bookmark icon full-heart">
                            Įsiminti skelbimai                        <span class="count">(<span id="bookmarks-count-header" class="bookmark-count">0</span>)</span>
                        </div>
                    </a>
    
    
                    
                    
                    
                    <div class="cl"></div>
                </div>
    
                <div class="cl"></div>
            </div>
        </div>
    </div>
            
    
                        <div class="container header-ann no-print">
                    <div id="ATG_B_1000x250_SS"></div><img src="https://ads.vmedija.lt/trackers?id=109" alt="" style="display:none">			</div>
            
            <header class="container">
                
    <div class="menu-container">
        <div class="logo logo-ua">
            <a href="/">
                <img src="https://static.autogidas.lt/static/img/ag-logo-ua.svg" alt="Autogidas.lt">
            </a>
        </div>
        <nav class="buttons no-print">
                    <div class="button main languages">
                <a href="https://autogidas.lt/skelbimai/automobiliai/" onclick="sendGAEvent('meniu', 'header', 'language_lt');">
                    <div class="lang lang-active">
                                                <img width="18" height="14" src="https://static.autogidas.lt/static/img/ico/svg/flag-lt.svg" alt="lt lang">
                                        </div>
                </a>
                <div class="drop-down">
                    <a href="https://autogidas.lt/en/skelbimai/automobiliai/" onclick="sendGAEvent('meniu', 'header', 'language_en');">
                        <div class="lang">
                            en                    </div>
                    </a>
                    <a href="https://autogidas.lt/ru/skelbimai/automobiliai/" onclick="sendGAEvent('meniu', 'header', 'language_ru');">
                        <div class="lang">
                            ru                    </div>
                    </a>
                </div>
            </div>
            <a href="/auto-forumas/" onclick="sendGAEvent('meniu', 'header', 'forum');"><div class="button main">Forumas</div></a>
    <a href="/auto-katalogas/" onclick="sendGAEvent('meniu', 'header', 'auto_catalog');"><div class="button main">Autokatalogas</div></a>
    <a href="/ket/" onclick="sendGAEvent('meniu', 'header', 'road_rules');"><div class="button main">KET bilietai</div></a>
    <a href="/skelbimu-paieska/" onclick="sendGAEvent('meniu', 'header', 'search');"><div class="button main active">Paieška</div></a>		<a class="ann-btn" href="/naujas-skelbimas/" onclick="sendGAEvent('meniu', 'header', 'new_ad');"><span>+</span>Įdėk skelbimą</a>
            <div class="cl"></div>
        </nav>
        <div class="cl"></div>
    </div>
            </header>
    
                        <nav class="nav-breadcrumb no-print" itemscope="" itemtype="https://schema.org/BreadcrumbList">
            <div class="container">
    
            <div class="breadcrumb-list-item">
                <a class="breadcrumb-item icon icon-home" href="/">&nbsp;</a>
            </div>
    
                    <div class="breadcrumb-list-item" itemscope="" itemprop="itemListElement" itemtype="https://schema.org/ListItem">
                            <a class="breadcrumb-item" href="/skelbimai/" itemprop="item" itemtype="https://schema.org/Thing" itemid="https://autogidas.lt/skelbimai/">
                    <span class="breadcrumb-name" itemprop="name">Skelbimai</span>
                </a>
                            <meta itemprop="position" content="1">
    
            </div>
                    <div class="breadcrumb-list-item" itemscope="" itemprop="itemListElement" itemtype="https://schema.org/ListItem">
                            <a class="breadcrumb-item" href="/skelbimai/automobiliai/" itemprop="item" itemtype="https://schema.org/Thing" itemid="https://autogidas.lt/skelbimai/automobiliai/">
                    <span class="breadcrumb-name" itemprop="name">Automobiliai</span>
                </a>
                            <meta itemprop="position" content="2">
    
            </div>
            
        </div>
    </nav>
            
            <section id="content" class="container">
                 <div class="container">
        <div class="items-container container-section">
            <main class="all-items-block content-section">
                <article>
                    
                    <div class="search-title-container clearfix">
                                            <a class="btn-extend-search" href="/paieska/automobiliai/?" rel="nofollow" onclick="sendGAEvent('listing', 'navigation', 'edit_search');">
    
                            <div class="extend-search clearfix">
                                <div class="icon icon-search"></div>
                                <div class="text">
                                    <span class="count">Rasta: <span>10226</span></span>
                                    <span class="desc">Redaguoti</span>
                                </div>
                            </div>
                        </a>
                        <div class="separator"></div>
                        
                        <div class="title-container">
                            <div class="search-title">
    
                                                                <h1 class="title">Naudoti automobiliai</h1>
                                
                                                                <input class="input-field" type="text" name="saved-search-title" maxlength="255" value="Automobiliai" data-id="1391857639" data-hash="">
                                    <button class="btn-toggle-edit-title" title="Redaguoti pavadinimą"></button>
                                                        </div>
                            <div class="description">
                                <div class="search-links"><a onclick="sendGAEvent('UserActions', 'www_filter_top_01', 'make');" href="/skelbimai/automobiliai/volkswagen/?s=1391857639" title="Volkswagen automobiliai">Volkswagen</a> <a onclick="sendGAEvent('UserActions', 'www_filter_top_01', 'make');" href="/skelbimai/automobiliai/bmw/?s=1391857639" title="BMW automobiliai">BMW</a> <a onclick="sendGAEvent('UserActions', 'www_filter_top_01', 'make');" href="/skelbimai/automobiliai/audi/?s=1391857639" title="Audi automobiliai">Audi</a> <a onclick="sendGAEvent('UserActions', 'www_filter_top_01', 'make');" href="/skelbimai/automobiliai/mercedes-benz/?s=1391857639" title="Mercedes-Benz automobiliai">Mercedes-Benz</a> <a onclick="sendGAEvent('UserActions', 'www_filter_top_01', 'make');" href="/skelbimai/automobiliai/opel/?s=1391857639" title="Opel automobiliai">Opel</a> <a onclick="sendGAEvent('UserActions', 'www_filter_top_01', 'make');" href="/skelbimai/automobiliai/toyota/?s=1391857639" title="Toyota automobiliai">Toyota</a> <a onclick="sendGAEvent('UserActions', 'www_filter_top_01', 'make');" href="/skelbimai/automobiliai/ford/?s=1391857639" title="Ford automobiliai">Ford</a> <a onclick="sendGAEvent('UserActions', 'www_filter_top_01', 'make');" href="/skelbimai/automobiliai/volvo/?s=1391857639" title="Volvo automobiliai">Volvo</a> <a onclick="sendGAEvent('UserActions', 'www_filter_top_01', 'make');" href="/skelbimai/automobiliai/peugeot/?s=1391857639" title="Peugeot automobiliai">Peugeot</a> <a onclick="sendGAEvent('UserActions', 'www_filter_top_01', 'make');" href="/skelbimai/automobiliai/renault/?s=1391857639" title="Renault automobiliai">Renault</a> </div>
                                <div class="search-description"></div>
                            </div>
                        </div>
                    </div>
                    <div class="bg-line"></div>
                  
                    
                                        <div class="items-header-container" id="nodeContainer">
    
                            <div class="notifications-label">Nepraleiskite naujų skelbimų</div>
                            <div class="search-notifications">
    
                                <div class="tooltip-container">
                                    <button role="button" id="toggle-push-notifications-1391857639" class="toggle-screen toggle-push-notifications " data-id="1391857639" data-hash="" data-notifications-enabled="0" style="display: inline-block;">
    
                                        <span class="text-disabled">Gauti ekrane</span>
                                        <span class="text-enabled">Gauti ekrane</span>
                                    </button>
                                    <span class="tooltip tooltip-push tl" style="display: inline-block;">i
                                         <span class="tooltiptext">Reikalingas jūsų sutikimas siųsti autogidas.lt pranešimus jūsų naršyklėje</span>
                                     </span>
                                </div>
                                <div class="tooltip-container">
                                    <button role="button" class="icon email-notifications btn-subscribe-email-notifications " data-id="1391857639" data-hash="" data-code="">
                                            <span class="text-disabled">Gauti el.paštu</span>
                                            <span class="text-enabled">Atsisakyti pranešimų</span>
                                    </button>
    
                                    <input id="subscribeId" type="hidden" data-id="1391857639" data-hash="">
    
                                    <script type="text/template" id="subscribeTemplate">
                                        <div class="form-horizontal" id="subscribeForm">
                                            <div class="form-group">
                                                <label for="emailInput" class="col-sm-4 control-label">El.pašto adresas:
                                                    <span class="tooltip tl">i<span class="tooltiptext">El.pašto adresas reikalingas tam, kad galėtume atsiųsti jūsų prenumeruotus skelbimus</span></span>
                                                </label>
                                                <div class="col-sm-8">
                                                <input id="emailInput" class="form-control input-text" type="email" name="email"
                                                       value=""
                                                       placeholder="El. paštas" />
    
                                                    <div class="invalid-feedback">
                                                        Neteisingai įvestas el. pašto adresas                                                </div>
                                                </div>
                                            </div>
                                        </div>
                                    </script>
                                </div>
                            </div><!--//.search-notifications -->
                        </div>
                                                <div class="top-menu-container clearfix">
                        <div class="sort-order">
                            <select id="order-by-select-input" onclick="sendGAEvent('UserActions', 'www_search_top_01', 'sorting');">
                                                                <option value="/skelbimai/automobiliai/?f_50=atnaujinimo_laika_asc&amp;page=1">Nauji ir atnaujinti viršuje</option>
                                                                <option value="/skelbimai/automobiliai/?f_50=kaina_asc&amp;page=1" selected="selected">Pigiausi viršuje</option>
                                                                <option value="/skelbimai/automobiliai/?f_50=kaina_desc&amp;page=1">Brangiausi viršuje</option>
                                                        </select>
                        </div>
                    </div>
                                                                        <div class="hr"><hr></div>
                                                                    <article class="list-item">
                <a href="/skelbimas/dodge-charger-top-benzinas--2019-m-0135317246.html" onclick="showWatchedBadge(this);" class="item-link " target="_blank">
                    <div class="right-content no-print">
                                                <div onclick="return bookmarkToggle('35317246', '01', 'Pamiršti', 'Įsiminti')" class="button-action remember-ad btn-remember-01-35317246" data-content="Įsiminti">
                                    <span class="icon icon-empty-heart"></span>
                                                        </div>
                                                                <div class="seller-logo " onclick="sendGAEvent('listing', 'navigation', 'link_partner');window.open('https://autogidas.lt/smilteles12b', '_blank');return false">
                                <img src="https://img.autogidas.lt/15_10_31597/1588099157.jpg" alt="">
                        <span class="seller-page">Visi pardavėjo skelbimai</span>
                    </div>
                                </div>
    
                    <div class="right">
                                            <div class="image">
                            <div class="badge" data-badge="Atnaujintas"><!----></div><div class="hide badge viewed-badge" data-badge="Žiūrėjote"><!----></div>                        <img src="https://img.autogidas.lt/4_16_217766059/dodge-charger-top-sedanas-2019.jpg" class=" lazyloaded" data-src="https://img.autogidas.lt/4_16_217766059/dodge-charger-top-sedanas-2019.jpg" alt="Dodge Charger">
                                                        <span class="ag-plan ag-gold"><em>Autogidas.lt partneris</em></span>
                                                </div>
                        <div class="description">
    
                                                        <div class="up" title="Skelbimo iškėlimo paslauga">15</div>
                            
    
                            <h2 class="item-title">Dodge Charger</h2>
    
                            <div class="item-description">
                                                            <div class="primary">3.6 l., Benzinas, 2019 m, Automatinė, 215 kW</div>
                                                                <div class="secondary">56 000 km., Sedanas, Klaipėda</div>
                                
    
                            </div>
                                                                                    <div class="item-price">
                                                                        22 700 €                                                                                                </div>
    
                                <i class="lenders-price">392  Eur/mėn.</i>
                                                    
                                                </div>
                    </div>
                    <div class="cl"></div>
                </a>
                                            <div class="comments" id="bookmark-comments-block-0135317246">
                        <input id="bookmark-comments-0135317246" onclick="return false" onfocusout="return commentFocusOut(this, '35317246', '01')" onkeydown="commentKeyDown(this, event)" class="comments-input" placeholder="Parašyti komentarą sau" value="" data-original="" type="text">
                    </div>
                        </article>
                                        <article class="list-item is-highlighted">
                <a href="/skelbimas/audi-a4-dyzelinas--2005-m-universalas-0135432707.html" onclick="showWatchedBadge(this);" class="item-link " target="_blank">
                    <div class="right-content no-print">
                                                <div onclick="return bookmarkToggle('35432707', '01', 'Pamiršti', 'Įsiminti')" class="button-action remember-ad btn-remember-01-35432707" data-content="Įsiminti">
                                    <span class="icon icon-empty-heart"></span>
                                                        </div>
                                                            </div>
    
                    <div class="right">
                                            <div class="image">
                            <div class="badge" data-badge="Prieš 9 val."><!----></div><div class="hide badge viewed-badge" data-badge="Žiūrėjote"><!----></div>                        <img src="https://img.autogidas.lt/4_16_219824815/audi-a4-universalas-2005.jpg" class=" lazyloaded" data-src="https://img.autogidas.lt/4_16_219824815/audi-a4-universalas-2005.jpg" alt="Audi A4">
                                                </div>
                        <div class="description">
    
                                                        <div class="up" title="Skelbimo iškėlimo paslauga">10</div>
                            
    
                            <h2 class="item-title">Audi A4</h2>
    
                            <div class="item-description">
                                                            <div class="primary">2.0 l., Dyzelinas, 2005 m, Automatinė, 103 kW</div>
                                                                <div class="secondary">Universalas, Utena</div>
                                
    
                            </div>
                                                                                    <div class="item-price">
                                                                        1 650 €                                                                                                </div>
    
                                <i class="lenders-price">29  Eur/mėn.</i>
                                                    
                                                </div>
                    </div>
                    <div class="cl"></div>
                </a>
                                            <div class="comments" id="bookmark-comments-block-0135432707">
                        <input id="bookmark-comments-0135432707" onclick="return false" onfocusout="return commentFocusOut(this, '35432707', '01')" onkeydown="commentKeyDown(this, event)" class="comments-input" placeholder="Parašyti komentarą sau" value="" data-original="" type="text">
                    </div>
                        </article>
                                        <article class="list-item">
                <a href="/skelbimas/audi-a4-tdi-multitronic-dyzelinas--2002-m-0135431915.html" onclick="showWatchedBadge(this);" class="item-link " target="_blank">
                    <div class="right-content no-print">
                                                <div onclick="return bookmarkToggle('35431915', '01', 'Pamiršti', 'Įsiminti')" class="button-action remember-ad btn-remember-01-35431915" data-content="Įsiminti">
                                    <span class="icon icon-empty-heart"></span>
                                                        </div>
                                                            </div>
    
                    <div class="right">
                                            <div class="image">
                            <div class="badge" data-badge="Prieš 12 val."><!----></div><div class="hide badge viewed-badge" data-badge="Žiūrėjote"><!----></div>                        <img src="https://img.autogidas.lt/4_16_219821242/audi-a4-tdi-multitronic-universalas-2002.jpg" class=" lazyloaded" data-src="https://img.autogidas.lt/4_16_219821242/audi-a4-tdi-multitronic-universalas-2002.jpg" alt="Audi A4">
                                                </div>
                        <div class="description">
    
                                                        <div class="up" title="Skelbimo iškėlimo paslauga">10</div>
                            
    
                            <h2 class="item-title">Audi A4</h2>
    
                            <div class="item-description">
                                                            <div class="primary">2.5 l., Dyzelinas, 2002 m, Automatinė, 114 kW</div>
                                                                <div class="secondary">Universalas, Vilnius</div>
                                
    
                            </div>
                                                                                    <div class="item-price">
                                                                        1 699 €                                                                                                </div>
    
                                <i class="lenders-price">29  Eur/mėn.</i>
                                                    
                                                </div>
                    </div>
                    <div class="cl"></div>
                </a>
                                            <div class="comments" id="bookmark-comments-block-0135431915">
                        <input id="bookmark-comments-0135431915" onclick="return false" onfocusout="return commentFocusOut(this, '35431915', '01')" onkeydown="commentKeyDown(this, event)" class="comments-input" placeholder="Parašyti komentarą sau" value="" data-original="" type="text">
                    </div>
                        </article>
                                        <article class="list-item">
                <a href="/skelbimas/opel-insignia-dyzelinas--2009-m-universalas-0135432077.html" onclick="showWatchedBadge(this);" class="item-link " target="_blank">
                    <div class="right-content no-print">
                                                <div onclick="return bookmarkToggle('35432077', '01', 'Pamiršti', 'Įsiminti')" class="button-action remember-ad btn-remember-01-35432077" data-content="Įsiminti">
                                    <span class="icon icon-empty-heart"></span>
                                                        </div>
                                                            </div>
    
                    <div class="right">
                                                <div class="sold-item">
                                <img src="https://static.autogidas.lt/static/images/new_mobile/parduota_lt.gif">
                            </div>
                                            <div class="image">
                                                    <img src="https://img.autogidas.lt/4_16_219813688/opel-insignia-universalas-2009.jpg" class="imgsold lazyloaded" data-src="https://img.autogidas.lt/4_16_219813688/opel-insignia-universalas-2009.jpg" alt="Opel Insignia">
                                                </div>
                        <div class="description">
    
                                                        <div class="up" title="Skelbimo iškėlimo paslauga">9</div>
                            
    
                            <h2 class="item-title">Opel Insignia</h2>
    
                            <div class="item-description">
                                                            <div class="primary">2.0 l., Dyzelinas, 2009 m, Mechaninė, 118 kW</div>
                                                                <div class="secondary">277 000 km., Universalas, Šiauliai</div>
                                
    
                            </div>
                                                                                    <div class="item-price">
                                                                        3 650 €                                                                                                </div>
    
                                <i class="lenders-price">63  Eur/mėn.</i>
                                                    
                                                </div>
                    </div>
                    <div class="cl"></div>
                </a>
                                            <div class="comments" id="bookmark-comments-block-0135432077">
                        <input id="bookmark-comments-0135432077" onclick="return false" onfocusout="return commentFocusOut(this, '35432077', '01')" onkeydown="commentKeyDown(this, event)" class="comments-input" placeholder="Parašyti komentarą sau" value="" data-original="" type="text">
                    </div>
                        </article>
                                        <article class="list-item is-highlighted">
                <a href="/skelbimas/audi-a6-c6-dyzelinas--2006-m-0135429737.html" onclick="showWatchedBadge(this);" class="item-link " target="_blank">
                    <div class="right-content no-print">
                                                <div onclick="return bookmarkToggle('35429737', '01', 'Pamiršti', 'Įsiminti')" class="button-action remember-ad btn-remember-01-35429737" data-content="Įsiminti">
                                    <span class="icon icon-empty-heart"></span>
                                                        </div>
                                                            </div>
    
                    <div class="right">
                                            <div class="image">
                            <div class="badge" data-badge="Prieš 1 d."><!----></div><div class="hide badge viewed-badge" data-badge="Žiūrėjote"><!----></div>                        <img src="https://img.autogidas.lt/4_16_219770278/audi-a6-c6-universalas-2006.jpg" class=" lazyloaded" data-src="https://img.autogidas.lt/4_16_219770278/audi-a6-c6-universalas-2006.jpg" alt="Audi A6 C6">
                                                </div>
                        <div class="description">
    
                                                        <div class="up" title="Skelbimo iškėlimo paslauga">8</div>
                            
    
                            <h2 class="item-title">Audi A6 C6</h2>
    
                            <div class="item-description">
                                                            <div class="primary">3.0 l., Dyzelinas, 2006 m, Automatinė, 171 kW</div>
                                                                <div class="secondary">280 000 km., Universalas, Šiauliai</div>
                                
    
                            </div>
                                                                                    <div class="item-price">
                                                                        4 500 €                                                                                                </div>
    
                                <i class="lenders-price">78  Eur/mėn.</i>
                                                    
                                                </div>
                    </div>
                    <div class="cl"></div>
                </a>
                                            <div class="comments" id="bookmark-comments-block-0135429737">
                        <input id="bookmark-comments-0135429737" onclick="return false" onfocusout="return commentFocusOut(this, '35429737', '01')" onkeydown="commentKeyDown(this, event)" class="comments-input" placeholder="Parašyti komentarą sau" value="" data-original="" type="text">
                    </div>
                        </article>
                                        <article class="list-item">
                <a href="/skelbimas/hyundai-accent-middle-benzinas--2003-m-0135432383.html" onclick="showWatchedBadge(this);" class="item-link " target="_blank">
                    <div class="right-content no-print">
                                                <div onclick="return bookmarkToggle('35432383', '01', 'Pamiršti', 'Įsiminti')" class="button-action remember-ad btn-remember-01-35432383" data-content="Įsiminti">
                                    <span class="icon icon-empty-heart"></span>
                                                        </div>
                                                            </div>
    
                    <div class="right">
                                            <div class="image">
                            <div class="badge" data-badge="Prieš 13 val."><!----></div><div class="hide badge viewed-badge" data-badge="Žiūrėjote"><!----></div>                        <img src="https://static.autogidas.lt/static/images/blank.gif" class="lazyload" data-src="https://img.autogidas.lt/4_16_219820585/hyundai-accent-middle-hecbekas-2003.jpg" alt="Hyundai Accent">
                                                </div>
                        <div class="description">
    
                                                        <div class="up" title="Skelbimo iškėlimo paslauga">7</div>
                            
    
                            <h2 class="item-title">Hyundai Accent</h2>
    
                            <div class="item-description">
                                                            <div class="primary">1.6 l., Benzinas, 2003 m, Mechaninė, 77 kW</div>
                                                                <div class="secondary">90 686 km., Hečbekas, Anykščiai</div>
                                
    
                            </div>
                                                                                    <div class="item-price">
                                                                        1 700 €                                                                                                </div>
    
                                <i class="lenders-price">29  Eur/mėn.</i>
                                                    
                                                </div>
                    </div>
                    <div class="cl"></div>
                </a>
                                            <div class="comments" id="bookmark-comments-block-0135432383">
                        <input id="bookmark-comments-0135432383" onclick="return false" onfocusout="return commentFocusOut(this, '35432383', '01')" onkeydown="commentKeyDown(this, event)" class="comments-input" placeholder="Parašyti komentarą sau" value="" data-original="" type="text">
                    </div>
                        </article>
                                        <article class="list-item">
                <a href="/skelbimas/skoda-octavia-ii-vrs-dyzelinas--2008-m-0135432401.html" onclick="showWatchedBadge(this);" class="item-link " target="_blank">
                    <div class="right-content no-print">
                                                <div onclick="return bookmarkToggle('35432401', '01', 'Pamiršti', 'Įsiminti')" class="button-action remember-ad btn-remember-01-35432401" data-content="Įsiminti">
                                    <span class="icon icon-empty-heart"></span>
                                                        </div>
                                                            </div>
    
                    <div class="right">
                                            <div class="image">
                            <div class="badge" data-badge="Prieš 13 val."><!----></div><div class="hide badge viewed-badge" data-badge="Žiūrėjote"><!----></div>                        <img src="https://static.autogidas.lt/static/images/blank.gif" class="lazyload" data-src="https://img.autogidas.lt/4_16_219820603/skoda-octavia-ii-vrs-universalas-2008.jpg" alt="Skoda Octavia II">
                                                </div>
                        <div class="description">
    
                                                        <div class="up" title="Skelbimo iškėlimo paslauga">7</div>
                            
    
                            <h2 class="item-title">Skoda Octavia II</h2>
    
                            <div class="item-description">
                                                            <div class="primary">2.0 l., Dyzelinas, 2008 m, Mechaninė, 125 kW</div>
                                                                <div class="secondary">356 000 km., Universalas, Vilnius</div>
                                
    
                            </div>
                                                                                    <div class="item-price">
                                                                        2 900 €                                                                                                </div>
    
                                <i class="lenders-price">50  Eur/mėn.</i>
                                                    
                                                </div>
                    </div>
                    <div class="cl"></div>
                </a>
                                            <div class="comments" id="bookmark-comments-block-0135432401">
                        <input id="bookmark-comments-0135432401" onclick="return false" onfocusout="return commentFocusOut(this, '35432401', '01')" onkeydown="commentKeyDown(this, event)" class="comments-input" placeholder="Parašyti komentarą sau" value="" data-original="" type="text">
                    </div>
                        </article>
                        <div class="list-media"><div id="ATG_E_750x100_SS" class="listing-line"></div><img src="https://ads.vmedija.lt/trackers?id=118" alt="" style="display:none"></div>
                                        <article class="list-item">
                <a href="/skelbimas/mercedes-benz-ml-430-benzinasdujos--1999-m-visureigis-0134578214.html" onclick="showWatchedBadge(this);" class="item-link " target="_blank">
                    <div class="right-content no-print">
                                                <div onclick="return bookmarkToggle('34578214', '01', 'Pamiršti', 'Įsiminti')" class="button-action remember-ad btn-remember-01-34578214" data-content="Įsiminti">
                                    <span class="icon icon-empty-heart"></span>
                                                        </div>
                                                            </div>
    
                    <div class="right">
                                            <div class="image">
                            <div class="badge" data-badge="Atnaujintas"><!----></div><div class="hide badge viewed-badge" data-badge="Žiūrėjote"><!----></div>                        <img src="https://static.autogidas.lt/static/images/blank.gif" class="lazyload" data-src="https://img.autogidas.lt/4_16_202504177/mercedes-benz-ml-430-visureigis-1999.jpg" alt="Mercedes-Benz ML 430">
                                                </div>
                        <div class="description">
    
                                                        <div class="up" title="Skelbimo iškėlimo paslauga">6</div>
                            
    
                            <h2 class="item-title">Mercedes-Benz ML 430</h2>
    
                            <div class="item-description">
                                                            <div class="primary">4.3 l., Benzinas/Dujos, 1999 m, Automatinė</div>
                                                                <div class="secondary">Vairas dešinėje, Visureigis, Kaunas</div>
                                
    
                            </div>
                                                                                    <div class="item-price">
                                                                        600 €                                                                                                </div>
    
                                <i class="lenders-price">10  Eur/mėn.</i>
                                                    
                                                </div>
                    </div>
                    <div class="cl"></div>
                </a>
                                            <div class="comments" id="bookmark-comments-block-0134578214">
                        <input id="bookmark-comments-0134578214" onclick="return false" onfocusout="return commentFocusOut(this, '34578214', '01')" onkeydown="commentKeyDown(this, event)" class="comments-input" placeholder="Parašyti komentarą sau" value="" data-original="" type="text">
                    </div>
                        </article>
                                        <article class="list-item">
                <a href="/skelbimas/kia-ceed-benzinas--2007-m-hecbekas-0135431387.html" onclick="showWatchedBadge(this);" class="item-link " target="_blank">
                    <div class="right-content no-print">
                                                <div onclick="return bookmarkToggle('35431387', '01', 'Pamiršti', 'Įsiminti')" class="button-action remember-ad btn-remember-01-35431387" data-content="Įsiminti">
                                    <span class="icon icon-empty-heart"></span>
                                                        </div>
                                                            </div>
    
                    <div class="right">
                                            <div class="image">
                            <div class="badge" data-badge="Prieš 22 val."><!----></div><div class="hide badge viewed-badge" data-badge="Žiūrėjote"><!----></div>                        <img src="https://static.autogidas.lt/static/images/blank.gif" class="lazyload" data-src="https://img.autogidas.lt/4_16_219805549/kia-ceed-hecbekas-2007.jpg" alt="Kia Cee'd">
                                                </div>
                        <div class="description">
    
                                                        <div class="up" title="Skelbimo iškėlimo paslauga">6</div>
                            
    
                            <h2 class="item-title">Kia Cee'd</h2>
    
                            <div class="item-description">
                                                            <div class="primary">1.6 l., Benzinas, 2007 m, Automatinė</div>
                                                                <div class="secondary">Hečbekas, Vilnius</div>
                                
    
                            </div>
                                                                                    <div class="item-price">
                                                                        3 650 €                                                                                                </div>
    
                                <i class="lenders-price">63  Eur/mėn.</i>
                                                    
                                                </div>
                    </div>
                    <div class="cl"></div>
                </a>
                                            <div class="comments" id="bookmark-comments-block-0135431387">
                        <input id="bookmark-comments-0135431387" onclick="return false" onfocusout="return commentFocusOut(this, '35431387', '01')" onkeydown="commentKeyDown(this, event)" class="comments-input" placeholder="Parašyti komentarą sau" value="" data-original="" type="text">
                    </div>
                        </article>
                                        <article class="list-item">
                <a href="/skelbimas/bmw-325-e90-dyzelinas--2007-m-0135429968.html" onclick="showWatchedBadge(this);" class="item-link " target="_blank">
                    <div class="right-content no-print">
                                                <div onclick="return bookmarkToggle('35429968', '01', 'Pamiršti', 'Įsiminti')" class="button-action remember-ad btn-remember-01-35429968" data-content="Įsiminti">
                                    <span class="icon icon-empty-heart"></span>
                                                        </div>
                                                            </div>
    
                    <div class="right">
                                            <div class="image">
                            <div class="badge" data-badge="Prieš 1 d."><!----></div><div class="hide badge viewed-badge" data-badge="Žiūrėjote"><!----></div>                        <img src="https://static.autogidas.lt/static/images/blank.gif" class="lazyload" data-src="https://img.autogidas.lt/4_16_219772399/bmw-325-e90-universalas-2007.jpg" alt="BMW 325 E90">
                                                </div>
                        <div class="description">
    
                                                        <div class="up" title="Skelbimo iškėlimo paslauga">6</div>
                            
    
                            <h2 class="item-title">BMW 325 E90</h2>
    
                            <div class="item-description">
                                                            <div class="primary">3.0 l., Dyzelinas, 2007 m, Mechaninė, 145 kW</div>
                                                                <div class="secondary">Universalas, Trakai</div>
                                
    
                            </div>
                                                                                    <div class="item-price">
                                                                        4 350 €                                                                                                </div>
    
                                <i class="lenders-price">75  Eur/mėn.</i>
                                                    
                                                </div>
                    </div>
                    <div class="cl"></div>
                </a>
                                            <div class="comments" id="bookmark-comments-block-0135429968">
                        <input id="bookmark-comments-0135429968" onclick="return false" onfocusout="return commentFocusOut(this, '35429968', '01')" onkeydown="commentKeyDown(this, event)" class="comments-input" placeholder="Parašyti komentarą sau" value="" data-original="" type="text">
                    </div>
                        </article>
                                        <article class="list-item">
                <a href="/skelbimas/volvo-850-dyzelinas--1996-m-universalas-0135432842.html" onclick="showWatchedBadge(this);" class="item-link " target="_blank">
                    <div class="right-content no-print">
                                                <div onclick="return bookmarkToggle('35432842', '01', 'Pamiršti', 'Įsiminti')" class="button-action remember-ad btn-remember-01-35432842" data-content="Įsiminti">
                                    <span class="icon icon-empty-heart"></span>
                                                        </div>
                                                            </div>
    
                    <div class="right">
                                            <div class="image">
                            <div class="badge" data-badge="Prieš 3 val."><!----></div><div class="hide badge viewed-badge" data-badge="Žiūrėjote"><!----></div>                        <img src="https://static.autogidas.lt/static/images/blank.gif" class="lazyload" data-src="https://img.autogidas.lt/4_16_219846064/volvo-850-universalas-1996.jpg" alt="Volvo 850">
                                                </div>
                        <div class="description">
    
                                                        <div class="up" title="Skelbimo iškėlimo paslauga">5</div>
                            
    
                            <h2 class="item-title">Volvo 850</h2>
    
                            <div class="item-description">
                                                            <div class="primary">2.5 l., Dyzelinas, 1996 m, Automatinė, 103 kW</div>
                                                                <div class="secondary">Universalas, Jonava</div>
                                
    
                            </div>
                                                                                    <div class="item-price">
                                                                        500 €                                                                                                </div>
    
                                <i class="lenders-price">9  Eur/mėn.</i>
                                                    
                                                </div>
                    </div>
                    <div class="cl"></div>
                </a>
                                            <div class="comments" id="bookmark-comments-block-0135432842">
                        <input id="bookmark-comments-0135432842" onclick="return false" onfocusout="return commentFocusOut(this, '35432842', '01')" onkeydown="commentKeyDown(this, event)" class="comments-input" placeholder="Parašyti komentarą sau" value="" data-original="" type="text">
                    </div>
                        </article>
                                        <article class="list-item">
                <a href="/skelbimas/opel-vectra-v6-cdti-sport-dyzelinas--2006-m-0135432833.html" onclick="showWatchedBadge(this);" class="item-link " target="_blank">
                    <div class="right-content no-print">
                                                <div onclick="return bookmarkToggle('35432833', '01', 'Pamiršti', 'Įsiminti')" class="button-action remember-ad btn-remember-01-35432833" data-content="Įsiminti">
                                    <span class="icon icon-empty-heart"></span>
                                                        </div>
                                                            </div>
    
                    <div class="right">
                                            <div class="image">
                            <div class="badge" data-badge="Prieš 3 val."><!----></div><div class="hide badge viewed-badge" data-badge="Žiūrėjote"><!----></div>                        <img src="https://static.autogidas.lt/static/images/blank.gif" class="lazyload" data-src="https://img.autogidas.lt/4_16_219846034/opel-vectra-v6-cdti-sport-universalas-2006.jpg" alt="Opel Vectra">
                                                </div>
                        <div class="description">
    
                                                        <div class="up" title="Skelbimo iškėlimo paslauga">5</div>
                            
    
                            <h2 class="item-title">Opel Vectra</h2>
    
                            <div class="item-description">
                                                            <div class="primary">3.0 l., Dyzelinas, 2006 m, Mechaninė, 135 kW</div>
                                                                <div class="secondary">Universalas, Jonava</div>
                                
    
                            </div>
                                                                                    <div class="item-price">
                                                                        1 000 €                                                                                                </div>
    
                                <i class="lenders-price">17  Eur/mėn.</i>
                                                    
                                                </div>
                    </div>
                    <div class="cl"></div>
                </a>
                                            <div class="comments" id="bookmark-comments-block-0135432833">
                        <input id="bookmark-comments-0135432833" onclick="return false" onfocusout="return commentFocusOut(this, '35432833', '01')" onkeydown="commentKeyDown(this, event)" class="comments-input" placeholder="Parašyti komentarą sau" value="" data-original="" type="text">
                    </div>
                        </article>
                                        <article class="list-item">
                <a href="/skelbimas/honda-jazz-benzinas--2002-m-vienaturis-0135431792.html" onclick="showWatchedBadge(this);" class="item-link " target="_blank">
                    <div class="right-content no-print">
                                                <div onclick="return bookmarkToggle('35431792', '01', 'Pamiršti', 'Įsiminti')" class="button-action remember-ad btn-remember-01-35431792" data-content="Įsiminti">
                                    <span class="icon icon-empty-heart"></span>
                                                        </div>
                                                            </div>
    
                    <div class="right">
                                            <div class="image">
                            <div class="badge" data-badge="Prieš 18 val."><!----></div><div class="hide badge viewed-badge" data-badge="Žiūrėjote"><!----></div>                        <img src="https://static.autogidas.lt/static/images/blank.gif" class="lazyload" data-src="https://img.autogidas.lt/4_16_219810757/honda-jazz-vienaturis-2002.jpg" alt="Honda Jazz">
                                                </div>
                        <div class="description">
    
                                                        <div class="up" title="Skelbimo iškėlimo paslauga">5</div>
                            
    
                            <h2 class="item-title">Honda Jazz</h2>
    
                            <div class="item-description">
                                                            <div class="primary">1.4 l., Benzinas, 2002 m, Mechaninė</div>
                                                                <div class="secondary">Vienatūris, Šiauliai</div>
                                
    
                            </div>
                                                                                    <div class="item-price">
                                                                        1 050 €                                                                                                </div>
    
                                <i class="lenders-price">18  Eur/mėn.</i>
                                                    
                                                </div>
                    </div>
                    <div class="cl"></div>
                </a>
                                            <div class="comments" id="bookmark-comments-block-0135431792">
                        <input id="bookmark-comments-0135431792" onclick="return false" onfocusout="return commentFocusOut(this, '35431792', '01')" onkeydown="commentKeyDown(this, event)" class="comments-input" placeholder="Parašyti komentarą sau" value="" data-original="" type="text">
                    </div>
                        </article>
                                        <article class="list-item">
                <a href="/skelbimas/opel-vectra-benzinasdujos--2002-m-hecbekas-0135431777.html" onclick="showWatchedBadge(this);" class="item-link " target="_blank">
                    <div class="right-content no-print">
                                                <div onclick="return bookmarkToggle('35431777', '01', 'Pamiršti', 'Įsiminti')" class="button-action remember-ad btn-remember-01-35431777" data-content="Įsiminti">
                                    <span class="icon icon-empty-heart"></span>
                                                        </div>
                                                            </div>
    
                    <div class="right">
                                            <div class="image">
                            <div class="badge" data-badge="Prieš 18 val."><!----></div><div class="hide badge viewed-badge" data-badge="Žiūrėjote"><!----></div>                        <img src="https://static.autogidas.lt/static/images/blank.gif" class="lazyload" data-src="https://img.autogidas.lt/4_16_219822532/opel-vectra-hecbekas-2002.jpg" alt="Opel Vectra">
                                                </div>
                        <div class="description">
    
                                                        <div class="up" title="Skelbimo iškėlimo paslauga">5</div>
                            
    
                            <h2 class="item-title">Opel Vectra</h2>
    
                            <div class="item-description">
                                                            <div class="primary">2.2 l., Benzinas/Dujos, 2002 m, Mechaninė, 108 kW</div>
                                                                <div class="secondary">Hečbekas, Šiauliai</div>
                                
    
                            </div>
                                                                                    <div class="item-price">
                                                                        1 050 €                                                                                                </div>
    
                                <i class="lenders-price">18  Eur/mėn.</i>
                                                    
                                                </div>
                    </div>
                    <div class="cl"></div>
                </a>
                                            <div class="comments" id="bookmark-comments-block-0135431777">
                        <input id="bookmark-comments-0135431777" onclick="return false" onfocusout="return commentFocusOut(this, '35431777', '01')" onkeydown="commentKeyDown(this, event)" class="comments-input" placeholder="Parašyti komentarą sau" value="" data-original="" type="text">
                    </div>
                        </article>
                                        <article class="list-item">
                <a href="/skelbimas/volkswagen-golf-benzin--1999-m-hetchbek-0135433139.html" onclick="showWatchedBadge(this);" class="item-link " target="_blank">
                    <div class="right-content no-print">
                                                <div onclick="return bookmarkToggle('35433139', '01', 'Pamiršti', 'Įsiminti')" class="button-action remember-ad btn-remember-01-35433139" data-content="Įsiminti">
                                    <span class="icon icon-empty-heart"></span>
                                                        </div>
                                                                <div class="seller-logo " onclick="sendGAEvent('listing', 'navigation', 'link_partner');window.open('https://autogidas.lt/balticar', '_blank');return false">
                                <img src="https://img.autogidas.lt/15_10_37072/1619548536.jpg" alt="Balticar">
                        <span class="seller-page">Visi pardavėjo skelbimai</span>
                    </div>
                                </div>
    
                    <div class="right">
                                            <div class="image">
                            <div class="badge new-badge" data-badge="Prieš 28 min."><!----></div><div class="hide badge viewed-badge" data-badge="Žiūrėjote"><!----></div><div class="badge vin-badge" data-badge="" title="Nurodytas automobilio VIN numeris"><!----></div>                        <img src="https://static.autogidas.lt/static/images/blank.gif" class="lazyload" data-src="https://img.autogidas.lt/4_16_219848824/volkswagen-golf-hecbekas-1999.jpg" alt="Volkswagen Golf">
                                                        <span class="ag-plan ag-gold"><em>Autogidas.lt partneris</em></span>
                                                </div>
                        <div class="description">
    
                                                        <div class="up" title="Skelbimo iškėlimo paslauga">5</div>
                            
    
                            <h2 class="item-title">Volkswagen Golf</h2>
    
                            <div class="item-description">
                                                            <div class="primary">1.4 l., Benzinas, 1999 m, Mechaninė, 55 kW</div>
                                                                <div class="secondary">293 000 km., Hečbekas, Estija, Talinas</div>
                                
    
                            </div>
                                                                                    <div class="item-price">
                                                                        1 099 €                                                                                                </div>
    
                                <i class="lenders-price">19  Eur/mėn.</i>
                                                    
                                                </div>
                    </div>
                    <div class="cl"></div>
                </a>
                                            <div class="comments" id="bookmark-comments-block-0135433139">
                        <input id="bookmark-comments-0135433139" onclick="return false" onfocusout="return commentFocusOut(this, '35433139', '01')" onkeydown="commentKeyDown(this, event)" class="comments-input" placeholder="Parašyti komentarą sau" value="" data-original="" type="text">
                    </div>
                        </article>
                        <div class="list-media"><div id="ATG_F_750x200_SS" class="listing-line"></div><img src="https://ads.vmedija.lt/trackers?id=121" alt="" style="display:none"></div>
                                        <article class="list-item">
                <a href="/skelbimas/renault-thalia-benzin--2004-m-sedan-0135433133.html" onclick="showWatchedBadge(this);" class="item-link " target="_blank">
                    <div class="right-content no-print">
                                                <div onclick="return bookmarkToggle('35433133', '01', 'Pamiršti', 'Įsiminti')" class="button-action remember-ad btn-remember-01-35433133" data-content="Įsiminti">
                                    <span class="icon icon-empty-heart"></span>
                                                        </div>
                                                                <div class="seller-logo " onclick="sendGAEvent('listing', 'navigation', 'link_partner');window.open('https://autogidas.lt/balticar', '_blank');return false">
                                <img src="https://img.autogidas.lt/15_10_37072/1619548536.jpg" alt="Balticar">
                        <span class="seller-page">Visi pardavėjo skelbimai</span>
                    </div>
                                </div>
    
                    <div class="right">
                                            <div class="image">
                            <div class="badge new-badge" data-badge="Prieš 29 min."><!----></div><div class="hide badge viewed-badge" data-badge="Žiūrėjote"><!----></div><div class="badge vin-badge" data-badge="" title="Nurodytas automobilio VIN numeris"><!----></div>                        <img src="https://static.autogidas.lt/static/images/blank.gif" class="lazyload" data-src="https://img.autogidas.lt/4_16_219848782/renault-thalia-sedanas-2004.jpg" alt="Renault Thalia">
                                                        <span class="ag-plan ag-gold"><em>Autogidas.lt partneris</em></span>
                                                </div>
                        <div class="description">
    
                                                        <div class="up" title="Skelbimo iškėlimo paslauga">5</div>
                            
    
                            <h2 class="item-title">Renault Thalia</h2>
    
                            <div class="item-description">
                                                            <div class="primary">1.4 l., Benzinas, 2004 m, Mechaninė, 55 kW</div>
                                                                <div class="secondary">97 000 km., Sedanas, Estija, Talinas</div>
                                
    
                            </div>
                                                                                    <div class="item-price">
                                                                        1 099 €                                                                                                </div>
    
                                <i class="lenders-price">19  Eur/mėn.</i>
                                                    
                                                </div>
                    </div>
                    <div class="cl"></div>
                </a>
                                            <div class="comments" id="bookmark-comments-block-0135433133">
                        <input id="bookmark-comments-0135433133" onclick="return false" onfocusout="return commentFocusOut(this, '35433133', '01')" onkeydown="commentKeyDown(this, event)" class="comments-input" placeholder="Parašyti komentarą sau" value="" data-original="" type="text">
                    </div>
                        </article>
                                        <article class="list-item">
                <a href="/skelbimas/citroen-c4-benzin--2007-m-miniven-0135433097.html" onclick="showWatchedBadge(this);" class="item-link " target="_blank">
                    <div class="right-content no-print">
                                                <div onclick="return bookmarkToggle('35433097', '01', 'Pamiršti', 'Įsiminti')" class="button-action remember-ad btn-remember-01-35433097" data-content="Įsiminti">
                                    <span class="icon icon-empty-heart"></span>
                                                        </div>
                                                                <div class="seller-logo " onclick="sendGAEvent('listing', 'navigation', 'link_partner');window.open('https://autogidas.lt/balticar', '_blank');return false">
                                <img src="https://img.autogidas.lt/15_10_37072/1619548536.jpg" alt="Balticar">
                        <span class="seller-page">Visi pardavėjo skelbimai</span>
                    </div>
                                </div>
    
                    <div class="right">
                                            <div class="image">
                            <div class="badge new-badge" data-badge="Prieš 35 min."><!----></div><div class="hide badge viewed-badge" data-badge="Žiūrėjote"><!----></div><div class="badge vin-badge" data-badge="" title="Nurodytas automobilio VIN numeris"><!----></div>                        <img src="https://static.autogidas.lt/static/images/blank.gif" class="lazyload" data-src="https://img.autogidas.lt/4_16_219848479/citroen-c4-vienaturis-2007.jpg" alt="Citroen C4">
                                                        <span class="ag-plan ag-gold"><em>Autogidas.lt partneris</em></span>
                                                </div>
                        <div class="description">
    
                                                        <div class="up" title="Skelbimo iškėlimo paslauga">5</div>
                            
    
                            <h2 class="item-title">Citroen C4</h2>
    
                            <div class="item-description">
                                                            <div class="primary">2.0 l., Benzinas, 2007 m, Automatinė, 103 kW</div>
                                                                <div class="secondary">257 000 km., Vienatūris, Estija, Talinas</div>
                                
    
                            </div>
                                                                                    <div class="item-price">
                                                                        1 199 €                                                                                                </div>
    
                                <i class="lenders-price">21  Eur/mėn.</i>
                                                    
                                                </div>
                    </div>
                    <div class="cl"></div>
                </a>
                                            <div class="comments" id="bookmark-comments-block-0135433097">
                        <input id="bookmark-comments-0135433097" onclick="return false" onfocusout="return commentFocusOut(this, '35433097', '01')" onkeydown="commentKeyDown(this, event)" class="comments-input" placeholder="Parašyti komentarą sau" value="" data-original="" type="text">
                    </div>
                        </article>
                                        <article class="list-item">
                <a href="/skelbimas/ford-fiesta-benzinas--2003-m-hecbekas-0135432827.html" onclick="showWatchedBadge(this);" class="item-link " target="_blank">
                    <div class="right-content no-print">
                                                <div onclick="return bookmarkToggle('35432827', '01', 'Pamiršti', 'Įsiminti')" class="button-action remember-ad btn-remember-01-35432827" data-content="Įsiminti">
                                    <span class="icon icon-empty-heart"></span>
                                                        </div>
                                                            </div>
    
                    <div class="right">
                                            <div class="image">
                            <div class="badge" data-badge="Prieš 3 val."><!----></div><div class="hide badge viewed-badge" data-badge="Žiūrėjote"><!----></div>                        <img src="https://static.autogidas.lt/static/images/blank.gif" class="lazyload" data-src="https://img.autogidas.lt/4_16_219845827/ford-fiesta-hecbekas-2003.jpg" alt="Ford Fiesta">
                                                </div>
                        <div class="description">
    
                                                        <div class="up" title="Skelbimo iškėlimo paslauga">5</div>
                            
    
                            <h2 class="item-title">Ford Fiesta</h2>
    
                            <div class="item-description">
                                                            <div class="primary">1.3 l., Benzinas, 2003 m, Mechaninė, 51 kW</div>
                                                                <div class="secondary">190 000 km., Hečbekas, Jonava</div>
                                
    
                            </div>
                                                                                    <div class="item-price">
                                                                        1 250 €                                                                                                </div>
    
                                <i class="lenders-price">22  Eur/mėn.</i>
                                                    
                                                </div>
                    </div>
                    <div class="cl"></div>
                </a>
                                            <div class="comments" id="bookmark-comments-block-0135432827">
                        <input id="bookmark-comments-0135432827" onclick="return false" onfocusout="return commentFocusOut(this, '35432827', '01')" onkeydown="commentKeyDown(this, event)" class="comments-input" placeholder="Parašyti komentarą sau" value="" data-original="" type="text">
                    </div>
                        </article>
                                        <article class="list-item">
                <a href="/skelbimas/audi-a4-dyzelinas--2001-m-sedanas-0135432971.html" onclick="showWatchedBadge(this);" class="item-link " target="_blank">
                    <div class="right-content no-print">
                                                <div onclick="return bookmarkToggle('35432971', '01', 'Pamiršti', 'Įsiminti')" class="button-action remember-ad btn-remember-01-35432971" data-content="Įsiminti">
                                    <span class="icon icon-empty-heart"></span>
                                                        </div>
                                                            </div>
    
                    <div class="right">
                                            <div class="image">
                            <div class="badge" data-badge="Prieš 1 val."><!----></div><div class="hide badge viewed-badge" data-badge="Žiūrėjote"><!----></div>                        <img src="https://static.autogidas.lt/static/images/blank.gif" class="lazyload" data-src="https://img.autogidas.lt/4_16_219847342/audi-a4-sedanas-2001.jpg" alt="Audi A4">
                                                </div>
                        <div class="description">
    
                                                        <div class="up" title="Skelbimo iškėlimo paslauga">5</div>
                            
    
                            <h2 class="item-title">Audi A4</h2>
    
                            <div class="item-description">
                                                            <div class="primary">1.9 l., Dyzelinas, 2001 m, Mechaninė, 81 kW</div>
                                                                <div class="secondary">Sedanas, Vilnius</div>
                                
    
                            </div>
                                                                                    <div class="item-price">
                                                                        1 350 €                                                                                                </div>
    
                                <i class="lenders-price">23  Eur/mėn.</i>
                                                    
                                                </div>
                    </div>
                    <div class="cl"></div>
                </a>
                                            <div class="comments" id="bookmark-comments-block-0135432971">
                        <input id="bookmark-comments-0135432971" onclick="return false" onfocusout="return commentFocusOut(this, '35432971', '01')" onkeydown="commentKeyDown(this, event)" class="comments-input" placeholder="Parašyti komentarą sau" value="" data-original="" type="text">
                    </div>
                        </article>
                                        <article class="list-item is-highlighted">
                <a href="/skelbimas/chrysler-voyager-iii-l-lx-crd-dyzelinas--2002-m-0135428447.html" onclick="showWatchedBadge(this);" class="item-link " target="_blank">
                    <div class="right-content no-print">
                                                <div onclick="return bookmarkToggle('35428447', '01', 'Pamiršti', 'Įsiminti')" class="button-action remember-ad btn-remember-01-35428447" data-content="Įsiminti">
                                    <span class="icon icon-empty-heart"></span>
                                                        </div>
                                                            </div>
    
                    <div class="right">
                                            <div class="image">
                            <div class="hide badge viewed-badge" data-badge="Žiūrėjote"><!----></div>                        <img src="https://static.autogidas.lt/static/images/blank.gif" class="lazyload" data-src="https://img.autogidas.lt/4_16_219738940/chrysler-voyager-iii-l-lx-crd-vienaturis-2002.jpg" alt="Chrysler Voyager III">
                                                        <span class="ag-plan ag-gold"><em>Autogidas.lt partneris</em></span>
                                                </div>
                        <div class="description">
    
                                                        <div class="up" title="Skelbimo iškėlimo paslauga">5</div>
                            
    
                            <h2 class="item-title">Chrysler Voyager III</h2>
    
                            <div class="item-description">
                                                            <div class="primary">2.5 l., Dyzelinas, 2002 m, Mechaninė, 105 kW</div>
                                                                <div class="secondary">Vienatūris, Vilkaviškis</div>
                                
    
                            </div>
                                                                                    <div class="item-price">
                                                                        1 450 €                                                                                                </div>
    
                                <i class="lenders-price">25  Eur/mėn.</i>
                                                    
                                                </div>
                    </div>
                    <div class="cl"></div>
                </a>
                                            <div class="comments" id="bookmark-comments-block-0135428447">
                        <input id="bookmark-comments-0135428447" onclick="return false" onfocusout="return commentFocusOut(this, '35428447', '01')" onkeydown="commentKeyDown(this, event)" class="comments-input" placeholder="Parašyti komentarą sau" value="" data-original="" type="text">
                    </div>
                        </article>
                                        <article class="list-item">
                <a href="/skelbimas/bmw-525-dyzelinas--2002-m-universalas-0135431456.html" onclick="showWatchedBadge(this);" class="item-link " target="_blank">
                    <div class="right-content no-print">
                                                <div onclick="return bookmarkToggle('35431456', '01', 'Pamiršti', 'Įsiminti')" class="button-action remember-ad btn-remember-01-35431456" data-content="Įsiminti">
                                    <span class="icon icon-empty-heart"></span>
                                                        </div>
                                                            </div>
    
                    <div class="right">
                                            <div class="image">
                            <div class="badge" data-badge="Prieš 21 val."><!----></div><div class="hide badge viewed-badge" data-badge="Žiūrėjote"><!----></div>                        <img src="https://static.autogidas.lt/static/images/blank.gif" class="lazyload" data-src="https://img.autogidas.lt/4_16_219806284/bmw-525-universalas-2002.jpg" alt="BMW 525">
                                                </div>
                        <div class="description">
    
                                                        <div class="up" title="Skelbimo iškėlimo paslauga">5</div>
                            
    
                            <h2 class="item-title">BMW 525</h2>
    
                            <div class="item-description">
                                                            <div class="primary">2.5 l., Dyzelinas, 2002 m, Automatinė, 120 kW</div>
                                                                <div class="secondary">207 000 km., Universalas, Vilnius</div>
                                
    
                            </div>
                                                                                    <div class="item-price">
                                                                        1 490 €                                                                                                </div>
    
                                <i class="lenders-price">26  Eur/mėn.</i>
                                                    
                                                </div>
                    </div>
                    <div class="cl"></div>
                </a>
                                            <div class="comments" id="bookmark-comments-block-0135431456">
                        <input id="bookmark-comments-0135431456" onclick="return false" onfocusout="return commentFocusOut(this, '35431456', '01')" onkeydown="commentKeyDown(this, event)" class="comments-input" placeholder="Parašyti komentarą sau" value="" data-original="" type="text">
                    </div>
                        </article>
                                        <article class="list-item">
                <a href="/skelbimas/toyota-yaris-benzin--2006-m-hetchbek-0135433127.html" onclick="showWatchedBadge(this);" class="item-link " target="_blank">
                    <div class="right-content no-print">
                                                <div onclick="return bookmarkToggle('35433127', '01', 'Pamiršti', 'Įsiminti')" class="button-action remember-ad btn-remember-01-35433127" data-content="Įsiminti">
                                    <span class="icon icon-empty-heart"></span>
                                                        </div>
                                                                <div class="seller-logo " onclick="sendGAEvent('listing', 'navigation', 'link_partner');window.open('https://autogidas.lt/balticar', '_blank');return false">
                                <img src="https://img.autogidas.lt/15_10_37072/1619548536.jpg" alt="Balticar">
                        <span class="seller-page">Visi pardavėjo skelbimai</span>
                    </div>
                                </div>
    
                    <div class="right">
                                            <div class="image">
                            <div class="badge new-badge" data-badge="Prieš 31 min."><!----></div><div class="hide badge viewed-badge" data-badge="Žiūrėjote"><!----></div><div class="badge vin-badge" data-badge="" title="Nurodytas automobilio VIN numeris"><!----></div>                        <img src="https://static.autogidas.lt/static/images/blank.gif" class="lazyload" data-src="https://img.autogidas.lt/4_16_219848719/toyota-yaris-hecbekas-2006.jpg" alt="Toyota Yaris">
                                                        <span class="ag-plan ag-gold"><em>Autogidas.lt partneris</em></span>
                                                </div>
                        <div class="description">
    
                                                        <div class="up" title="Skelbimo iškėlimo paslauga">5</div>
                            
    
                            <h2 class="item-title">Toyota Yaris</h2>
    
                            <div class="item-description">
                                                            <div class="primary">1.0 l., Benzinas, 2006 m, Mechaninė, 51 kW</div>
                                                                <div class="secondary">161 000 km., Hečbekas, Estija, Talinas</div>
                                
    
                            </div>
                                                                                    <div class="item-price">
                                                                        1 499 €                                                                                                </div>
    
                                <i class="lenders-price">26  Eur/mėn.</i>
                                                    
                                                </div>
                    </div>
                    <div class="cl"></div>
                </a>
                                            <div class="comments" id="bookmark-comments-block-0135433127">
                        <input id="bookmark-comments-0135433127" onclick="return false" onfocusout="return commentFocusOut(this, '35433127', '01')" onkeydown="commentKeyDown(this, event)" class="comments-input" placeholder="Parašyti komentarą sau" value="" data-original="" type="text">
                    </div>
                        </article>
                                        <article class="list-item">
                <a href="/skelbimas/toyota-corolla-verso-ta24-07m-dyzelinas--2005-m-0135419975.html" onclick="showWatchedBadge(this);" class="item-link " target="_blank">
                    <div class="right-content no-print">
                                                <div onclick="return bookmarkToggle('35419975', '01', 'Pamiršti', 'Įsiminti')" class="button-action remember-ad btn-remember-01-35419975" data-content="Įsiminti">
                                    <span class="icon icon-empty-heart"></span>
                                                        </div>
                                                            </div>
    
                    <div class="right">
                                            <div class="image">
                            <div class="badge" data-badge="Atnaujintas"><!----></div><div class="hide badge viewed-badge" data-badge="Žiūrėjote"><!----></div>                        <img src="https://static.autogidas.lt/static/images/blank.gif" class="lazyload" data-src="https://img.autogidas.lt/4_16_219568594/toyota-corolla-verso-ta24-07m-vienaturis-2005.jpg" alt="Toyota Corolla Verso">
                                                </div>
                        <div class="description">
    
                                                        <div class="up" title="Skelbimo iškėlimo paslauga">5</div>
                            
    
                            <h2 class="item-title">Toyota Corolla Verso</h2>
    
                            <div class="item-description">
                                                            <div class="primary">2.0 l., Dyzelinas, 2005 m, Mechaninė, 85 kW</div>
                                                                <div class="secondary">401 800 km., Vienatūris, Šiauliai</div>
                                
    
                            </div>
                                                                                    <div class="item-price">
                                                                        1 519 €                                                                                                </div>
    
                                <i class="lenders-price">26  Eur/mėn.</i>
                                                    
                                                </div>
                    </div>
                    <div class="cl"></div>
                </a>
                                            <div class="comments" id="bookmark-comments-block-0135419975">
                        <input id="bookmark-comments-0135419975" onclick="return false" onfocusout="return commentFocusOut(this, '35419975', '01')" onkeydown="commentKeyDown(this, event)" class="comments-input" placeholder="Parašyti komentarą sau" value="" data-original="" type="text">
                    </div>
                        </article>
                        <div class="list-media"><div id="ATG_G_750x100_SS" class="listing-line"></div><img src="https://ads.vmedija.lt/trackers?id=124" alt="" style="display:none"></div>
                                        <article class="list-item">
                <a href="/skelbimas/volkswagen-passat-------tdi------dyzelinas--2004-m-0135427289.html" onclick="showWatchedBadge(this);" class="item-link " target="_blank">
                    <div class="right-content no-print">
                                                <div onclick="return bookmarkToggle('35427289', '01', 'Pamiršti', 'Įsiminti')" class="button-action remember-ad btn-remember-01-35427289" data-content="Įsiminti">
                                    <span class="icon icon-empty-heart"></span>
                                                        </div>
                                                            </div>
    
                    <div class="right">
                                            <div class="image">
                            <div class="badge" data-badge="Atnaujintas"><!----></div><div class="hide badge viewed-badge" data-badge="Žiūrėjote"><!----></div>                        <img src="https://static.autogidas.lt/static/images/blank.gif" class="lazyload" data-src="https://img.autogidas.lt/4_16_219727402/volkswagen-passat-------tdi------universalas-2004.jpg" alt="Volkswagen Passat">
                                                </div>
                        <div class="description">
    
                                                        <div class="up" title="Skelbimo iškėlimo paslauga">5</div>
                            
    
                            <h2 class="item-title">Volkswagen Passat</h2>
    
                            <div class="item-description">
                                                            <div class="primary">1.9 l., Dyzelinas, 2004 m, Mechaninė, 96 kW</div>
                                                                <div class="secondary">289 321 km., Universalas, Elektrėnai</div>
                                
    
                            </div>
                                                                                    <div class="item-price">
                                                                        1 690 €                                                                                                </div>
    
                                <i class="lenders-price">29  Eur/mėn.</i>
                                                    
                                                </div>
                    </div>
                    <div class="cl"></div>
                </a>
                                            <div class="comments" id="bookmark-comments-block-0135427289">
                        <input id="bookmark-comments-0135427289" onclick="return false" onfocusout="return commentFocusOut(this, '35427289', '01')" onkeydown="commentKeyDown(this, event)" class="comments-input" placeholder="Parašyti komentarą sau" value="" data-original="" type="text">
                    </div>
                        </article>
                                        <article class="list-item is-highlighted">
                <a href="/skelbimas/chrysler-voyager-crd-dyzelinas--2002-m-0135405875.html" onclick="showWatchedBadge(this);" class="item-link " target="_blank">
                    <div class="right-content no-print">
                                                <div onclick="return bookmarkToggle('35405875', '01', 'Pamiršti', 'Įsiminti')" class="button-action remember-ad btn-remember-01-35405875" data-content="Įsiminti">
                                    <span class="icon icon-empty-heart"></span>
                                                        </div>
                                                            </div>
    
                    <div class="right">
                                            <div class="image">
                            <div class="badge" data-badge="Atnaujintas"><!----></div><div class="hide badge viewed-badge" data-badge="Žiūrėjote"><!----></div>                        <img src="https://static.autogidas.lt/static/images/blank.gif" class="lazyload" data-src="https://img.autogidas.lt/4_16_219287695/chrysler-voyager-crd-vienaturis-2002.jpg" alt="Chrysler Voyager">
                                                </div>
                        <div class="description">
    
                                                        <div class="up" title="Skelbimo iškėlimo paslauga">5</div>
                            
    
                            <h2 class="item-title">Chrysler Voyager</h2>
    
                            <div class="item-description">
                                                            <div class="primary">2.5 l., Dyzelinas, 2002 m, Mechaninė, 105 kW</div>
                                                                <div class="secondary">267 km., Vienatūris, Vilnius</div>
                                
    
                            </div>
                                                                                    <div class="item-price">
                                                                        1 699 €                                                                                                </div>
    
                                <i class="lenders-price">29  Eur/mėn.</i>
                                                    
                                                </div>
                    </div>
                    <div class="cl"></div>
                </a>
                                            <div class="comments" id="bookmark-comments-block-0135405875">
                        <input id="bookmark-comments-0135405875" onclick="return false" onfocusout="return commentFocusOut(this, '35405875', '01')" onkeydown="commentKeyDown(this, event)" class="comments-input" placeholder="Parašyti komentarą sau" value="" data-original="" type="text">
                    </div>
                        </article>
                                        <article class="list-item">
                <a href="/skelbimas/fiat-doblo-jtd-dizel--2007-m-0135433121.html" onclick="showWatchedBadge(this);" class="item-link " target="_blank">
                    <div class="right-content no-print">
                                                <div onclick="return bookmarkToggle('35433121', '01', 'Pamiršti', 'Įsiminti')" class="button-action remember-ad btn-remember-01-35433121" data-content="Įsiminti">
                                    <span class="icon icon-empty-heart"></span>
                                                        </div>
                                                                <div class="seller-logo " onclick="sendGAEvent('listing', 'navigation', 'link_partner');window.open('https://autogidas.lt/balticar', '_blank');return false">
                                <img src="https://img.autogidas.lt/15_10_37072/1619548536.jpg" alt="Balticar">
                        <span class="seller-page">Visi pardavėjo skelbimai</span>
                    </div>
                                </div>
    
                    <div class="right">
                                            <div class="image">
                            <div class="badge new-badge" data-badge="Prieš 32 min."><!----></div><div class="hide badge viewed-badge" data-badge="Žiūrėjote"><!----></div><div class="badge vin-badge" data-badge="" title="Nurodytas automobilio VIN numeris"><!----></div>                        <img src="https://static.autogidas.lt/static/images/blank.gif" class="lazyload" data-src="https://img.autogidas.lt/4_16_219848677/fiat-doblo-jtd-vienaturis-2007.jpg" alt="Fiat Doblo">
                                                        <span class="ag-plan ag-gold"><em>Autogidas.lt partneris</em></span>
                                                </div>
                        <div class="description">
    
                                                        <div class="up" title="Skelbimo iškėlimo paslauga">5</div>
                            
    
                            <h2 class="item-title">Fiat Doblo</h2>
    
                            <div class="item-description">
                                                            <div class="primary">1.2 l., Dyzelinas, 2007 m, Mechaninė, 62 kW</div>
                                                                <div class="secondary">249 000 km., Vienatūris, Estija, Talinas</div>
                                
    
                            </div>
                                                                                    <div class="item-price">
                                                                        1 699 €                                                                                                </div>
    
                                <i class="lenders-price">29  Eur/mėn.</i>
                                                    
                                                </div>
                    </div>
                    <div class="cl"></div>
                </a>
                                            <div class="comments" id="bookmark-comments-block-0135433121">
                        <input id="bookmark-comments-0135433121" onclick="return false" onfocusout="return commentFocusOut(this, '35433121', '01')" onkeydown="commentKeyDown(this, event)" class="comments-input" placeholder="Parašyti komentarą sau" value="" data-original="" type="text">
                    </div>
                        </article>
                                        <article class="list-item">
                <a href="/skelbimas/audi-a4-tdi-dyzelinas--2000-m-0135309455.html" onclick="showWatchedBadge(this);" class="item-link " target="_blank">
                    <div class="right-content no-print">
                                                <div onclick="return bookmarkToggle('35309455', '01', 'Pamiršti', 'Įsiminti')" class="button-action remember-ad btn-remember-01-35309455" data-content="Įsiminti">
                                    <span class="icon icon-empty-heart"></span>
                                                        </div>
                                                            </div>
    
                    <div class="right">
                                            <div class="image">
                            <div class="badge" data-badge="Atnaujintas"><!----></div><div class="hide badge viewed-badge" data-badge="Žiūrėjote"><!----></div>                        <img src="https://static.autogidas.lt/static/images/blank.gif" class="lazyload" data-src="https://img.autogidas.lt/4_16_217764121/audi-a4-tdi-universalas-2000.jpg" alt="Audi A4">
                                                </div>
                        <div class="description">
    
                                                        <div class="up" title="Skelbimo iškėlimo paslauga">5</div>
                            
    
                            <h2 class="item-title">Audi A4</h2>
    
                            <div class="item-description">
                                                            <div class="primary">1.9 l., Dyzelinas, 2000 m, Mechaninė, 81 kW</div>
                                                                <div class="secondary">Universalas, Vilnius</div>
                                
    
                            </div>
                                                                                    <div class="item-price">
                                                                        1 799 €                                                                                                </div>
    
                                <i class="lenders-price">31  Eur/mėn.</i>
                                                    
                                                </div>
                    </div>
                    <div class="cl"></div>
                </a>
                                            <div class="comments" id="bookmark-comments-block-0135309455">
                        <input id="bookmark-comments-0135309455" onclick="return false" onfocusout="return commentFocusOut(this, '35309455', '01')" onkeydown="commentKeyDown(this, event)" class="comments-input" placeholder="Parašyti komentarą sau" value="" data-original="" type="text">
                    </div>
                        </article>
                                        <article class="list-item">
                <a href="/skelbimas/toyota-corolla-verso-dyzelinas--2004-m-vienaturis-0135430871.html" onclick="showWatchedBadge(this);" class="item-link " target="_blank">
                    <div class="right-content no-print">
                                                <div onclick="return bookmarkToggle('35430871', '01', 'Pamiršti', 'Įsiminti')" class="button-action remember-ad btn-remember-01-35430871" data-content="Įsiminti">
                                    <span class="icon icon-empty-heart"></span>
                                                        </div>
                                                            </div>
    
                    <div class="right">
                                            <div class="image">
                            <div class="badge" data-badge="Prieš 1 d."><!----></div><div class="hide badge viewed-badge" data-badge="Žiūrėjote"><!----></div>                        <img src="https://static.autogidas.lt/static/images/blank.gif" class="lazyload" data-src="https://img.autogidas.lt/4_16_219798061/toyota-corolla-verso-vienaturis-2004.jpg" alt="Toyota Corolla Verso">
                                                </div>
                        <div class="description">
    
                                                        <div class="up" title="Skelbimo iškėlimo paslauga">5</div>
                            
    
                            <h2 class="item-title">Toyota Corolla Verso</h2>
    
                            <div class="item-description">
                                                            <div class="primary">2.0 l., Dyzelinas, 2004 m, Mechaninė, 85 kW</div>
                                                                <div class="secondary">Vienatūris, Ukmergė</div>
                                
    
                            </div>
                                                                                    <div class="item-price">
                                                                        1 950 €                                                                                                </div>
    
                                <i class="lenders-price">34  Eur/mėn.</i>
                                                    
                                                </div>
                    </div>
                    <div class="cl"></div>
                </a>
                                            <div class="comments" id="bookmark-comments-block-0135430871">
                        <input id="bookmark-comments-0135430871" onclick="return false" onfocusout="return commentFocusOut(this, '35430871', '01')" onkeydown="commentKeyDown(this, event)" class="comments-input" placeholder="Parašyti komentarą sau" value="" data-original="" type="text">
                    </div>
                        </article>
                                        <article class="list-item">
                <a href="/skelbimas/opel-zafira-dyzelinas--2006-m-vienaturis-0135431603.html" onclick="showWatchedBadge(this);" class="item-link " target="_blank">
                    <div class="right-content no-print">
                                                <div onclick="return bookmarkToggle('35431603', '01', 'Pamiršti', 'Įsiminti')" class="button-action remember-ad btn-remember-01-35431603" data-content="Įsiminti">
                                    <span class="icon icon-empty-heart"></span>
                                                        </div>
                                                            </div>
    
                    <div class="right">
                                            <div class="image">
                            <div class="badge" data-badge="Prieš 20 val."><!----></div><div class="hide badge viewed-badge" data-badge="Žiūrėjote"><!----></div>                        <img src="https://static.autogidas.lt/static/images/blank.gif" class="lazyload" data-src="https://img.autogidas.lt/4_16_219812488/opel-zafira-vienaturis-2006.jpg" alt="Opel Zafira">
                                                </div>
                        <div class="description">
    
                                                        <div class="up" title="Skelbimo iškėlimo paslauga">5</div>
                            
    
                            <h2 class="item-title">Opel Zafira</h2>
    
                            <div class="item-description">
                                                            <div class="primary">1.9 l., Dyzelinas, 2006 m, Mechaninė</div>
                                                                <div class="secondary">270 000 km., Vienatūris, Šiauliai</div>
                                
    
                            </div>
                                                                                    <div class="item-price">
                                                                        2 250 €                                                                                                </div>
    
                                <i class="lenders-price">39  Eur/mėn.</i>
                                                    
                                                </div>
                    </div>
                    <div class="cl"></div>
                </a>
                                            <div class="comments" id="bookmark-comments-block-0135431603">
                        <input id="bookmark-comments-0135431603" onclick="return false" onfocusout="return commentFocusOut(this, '35431603', '01')" onkeydown="commentKeyDown(this, event)" class="comments-input" placeholder="Parašyti komentarą sau" value="" data-original="" type="text">
                    </div>
                        </article>
                                        <article class="list-item">
                <a href="/skelbimas/honda-accord-benzin--2006-m-sedan-0135433109.html" onclick="showWatchedBadge(this);" class="item-link " target="_blank">
                    <div class="right-content no-print">
                                                <div onclick="return bookmarkToggle('35433109', '01', 'Pamiršti', 'Įsiminti')" class="button-action remember-ad btn-remember-01-35433109" data-content="Įsiminti">
                                    <span class="icon icon-empty-heart"></span>
                                                        </div>
                                                                <div class="seller-logo " onclick="sendGAEvent('listing', 'navigation', 'link_partner');window.open('https://autogidas.lt/balticar', '_blank');return false">
                                <img src="https://img.autogidas.lt/15_10_37072/1619548536.jpg" alt="Balticar">
                        <span class="seller-page">Visi pardavėjo skelbimai</span>
                    </div>
                                </div>
    
                    <div class="right">
                                            <div class="image">
                            <div class="badge new-badge" data-badge="Prieš 34 min."><!----></div><div class="hide badge viewed-badge" data-badge="Žiūrėjote"><!----></div><div class="badge vin-badge" data-badge="" title="Nurodytas automobilio VIN numeris"><!----></div>                        <img src="https://static.autogidas.lt/static/images/blank.gif" class="lazyload" data-src="https://img.autogidas.lt/4_16_219848521/honda-accord-sedanas-2006.jpg" alt="Honda Accord">
                                                        <span class="ag-plan ag-gold"><em>Autogidas.lt partneris</em></span>
                                                </div>
                        <div class="description">
    
                                                        <div class="up" title="Skelbimo iškėlimo paslauga">5</div>
                            
    
                            <h2 class="item-title">Honda Accord</h2>
    
                            <div class="item-description">
                                                            <div class="primary">2.0 l., Benzinas, 2006 m, Mechaninė, 114 kW</div>
                                                                <div class="secondary">303 000 km., Sedanas, Estija, Talinas</div>
                                
    
                            </div>
                                                                                    <div class="item-price">
                                                                        2 299 €                                                                                                </div>
    
                                <i class="lenders-price">40  Eur/mėn.</i>
                                                    
                                                </div>
                    </div>
                    <div class="cl"></div>
                </a>
                                            <div class="comments" id="bookmark-comments-block-0135433109">
                        <input id="bookmark-comments-0135433109" onclick="return false" onfocusout="return commentFocusOut(this, '35433109', '01')" onkeydown="commentKeyDown(this, event)" class="comments-input" placeholder="Parašyti komentarą sau" value="" data-original="" type="text">
                    </div>
                        </article>
                        
                                                                        <img src="https://ads.vmedija.lt/trackers?id=148" alt="" style="display:none">
    
                                        <div class="next-page-block no-print">
                            <a rel="next" href="/skelbimai/automobiliai/?f_50=kaina_asc&amp;page=2">
                                <div class="next-page-inner">
                                    Kitas puslapis                                <span class="icon icon-arrow-r"></span>
                                </div>
                            </a>
                        </div>
                    
                                        <div class="paginator-wrapper no-print">
                            <div class="paginator">
                                
                                
                                                                <a href="/skelbimai/automobiliai/?f_50=kaina_asc&amp;page=1"><div class="page selected">1</div></a>
                                                                <a href="/skelbimai/automobiliai/?f_50=kaina_asc&amp;page=2"><div class="page ">2</div></a>
                                                                <a href="/skelbimai/automobiliai/?f_50=kaina_asc&amp;page=3"><div class="page ">3</div></a>
                                                                <a href="/skelbimai/automobiliai/?f_50=kaina_asc&amp;page=4"><div class="page ">4</div></a>
                                                                <a href="/skelbimai/automobiliai/?f_50=kaina_asc&amp;page=5"><div class="page ">5</div></a>
                                
                                                                <div class="page without-border">...</div>
                                    <a href="/skelbimai/automobiliai/?f_50=kaina_asc&amp;page=255"><div class="page">255</div></a>
                                
                                                                <a rel="next" href="/skelbimai/automobiliai/?f_50=kaina_asc&amp;page=2"><div class="page last"><span class="icon icon-arrow-r"></span></div></a>
                                
                                <div class="cl"></div>
                            </div>
                            <div class="cl"></div>
                        </div>
                    
    
                                                            
    <div class="promo-subscription" id="promo-subscription" data-search-id="1391857639" data-search-hash="">
        <div class="icon-container"></div>
        <div class="moto-container">
            <div class="promo-title">Nepraleisk naujų skelbimų</div>
            <p>Pranešimai el. paštu</p>
        </div>
        <div class="form-container clearfix">
            <div class="input-container">
                <input class="input-text" type="text" value="" placeholder="El. paštas">
                <span class="tooltip tl">
                    i<span class="tooltiptext">El.pašto adresas reikalingas tam, kad galėtume atsiųsti jūsų prenumeruotus skelbimus</span>
                </span>
            </div>
            <div class="button-container">
                <button class="subscribe-button" onclick="sendGAEvent('listing', 'bottom_block', 'email_on');SavedSearchItem.subscribeEmailPromo('promo-subscription')"><span class="icon icon-letter"></span>Prenumeruoti</button>
            </div>
        </div>
    </div>
                                        
                            </article>
            </main>
                     <aside class="sidebar-section"><div class="sticky-sidebar has-3-items"><div id="ATG_C_300x600_SS" class="reklama-300x250"></div><img src="https://ads.vmedija.lt/trackers?id=112" alt="" style="display:none"></div><div class="sticky-sidebar has-3-items"><div id="ATG_D_300x600_SS" class="reklama-300x250"></div><img src="https://ads.vmedija.lt/trackers?id=115" alt="" style="display:none"></div><div class="sticky-sidebar has-3-items"><div id="ATG_O_300x600_SS" class="reklama-300x250"></div><img src="https://ads.vmedija.lt/trackers?id=130" alt="" style="display:none"></div>         </aside>
             <div class="cl"></div>
         </div>
    </div>
    
    <div class="container">
        <div class="bottom-media">
        <div id="ATG_H_1000x250_SS" class="above-footer-ad"></div><img src="https://ads.vmedija.lt/trackers?id=127" alt="" style="display:none">    </div>
        <div class="no-print" id="rba_9999"></div></div>
    
    
            </section>
    
                        
    <div class="footer-padding no-print"></div>
    <footer class="footer-wrapper no-print">
        <div class="footer">
            <div class="footer-content clearfix">
                <div class="col-left">
                    <div class="contact-us-info">
                                                                                                            Autogidas.lt klientų aptarnavimo skyrius:                                 <span class="contact-us" onclick="sendGAEvent('meniu', 'footer', 'contact_us');">
                                    Jei iškilo klausimų, rašykite čia</span>
                                                                                            </div>
    
                                        <div class="contact-us-time">Darbo laikas: I-V 09:00-11:30, 12:30-17:00</div>
                                    <div class="app-footer-links">
                        <a href="https://itunes.apple.com/lt/app/autogidas.lt/id463838263?mt=8" target="_blank" rel="noopener" onclick="sendGAEvent('meniu', 'footer', 'download_ios');"><img alt="Apple store" src="https://static.autogidas.lt/static/img/ico/svg/app-download-iose.svg"></a>
                        <a href="https://play.google.com/store/apps/details?id=com.diginet.autogidas.lt&amp;hl=lt" target="_blank" rel="noopener" onclick="sendGAEvent('meniu', 'footer', 'download_android');"><img alt="Google play" src="https://static.autogidas.lt/static/img/ico/svg/app-download-android.svg"></a>
                    </div>
                    <nav class="nav-footer">
                        <a class="nav-footer-link" href="/kontaktai">Kontaktai</a>
                        <a class="nav-footer-link" href="/pasiulymai-verslui">Pasiūlymai verslui</a>
                        <a class="nav-footer-link" href="/reklama">Reklama</a>
                        <a class="nav-footer-link" href="/naudojimo-taisykles">Naudojimo taisyklės</a>
                        <a class="nav-footer-link" href="/privatumo-politika">Privatumo politika</a>
                        <a class="nav-footer-link" href="/pagalba">D.U.K.</a>
                    </nav>
                </div>
                <div class="col-right">
                    <div class="langs">
                                                <a onclick="sendGAEvent('meniu', 'footer', 'language_lt');" title="lt" class="selected" href="https://autogidas.lt/skelbimai/automobiliai/">
                                lt                        </a>
                                                <a onclick="sendGAEvent('meniu', 'footer', 'language_en');" title="en" href="https://autogidas.lt/en/skelbimai/automobiliai/">
                                en                        </a>
                                                <a onclick="sendGAEvent('meniu', 'footer', 'language_ru');" title="ru" href="https://autogidas.lt/ru/skelbimai/automobiliai/">
                                ru                        </a>
                                        </div>
                    <div class="footer-copyright">
                        <div class="company-name">UAB „Vertikali Medija“</div>
                        <nav class="nav-projects">
                            <a class="nav-projects-link" href="https://domoplius.lt" target="_blank" title="Nekilnojamo turto skelbimai">Domoplius.lt</a>
                            <a class="nav-projects-link" href="https://www.sutarta.lt" target="_blank" title="Nemokami skelbimai">Sutarta.lt</a>
                        </nav>
                    </div>
                </div>
    
    
            </div>
        </div>
    </footer>
    <div id="scroll-to-top" onclick="sendGAEvent('meniu', 'footer', 'back_to_top')" style="right: 237.5px;"></div>
    <div class="contact-us-form-overlay hide"></div>
    <div class="contact-us-form-container hide" id="contact-us-container">
        <div class="header">
            <div class="close-container-button"><span class="icon icon-circle-x"></span></div>
            <div class="title seller-ico write-to-seller">
                Klausimai ir komentarai        </div>
    
            <div class="cl"></div>
        </div>
    
        <form class="contact-us-form" method="post" action="/">
            <div class="message-warning">Gerb. klientai, neradę atsakymų į Jus dominančius klausimus <a href="/pagalba" target="_blank">Pagalba</a> skiltyje, prašome kreiptis į mus, į Jūsų klausimus mielai atsakysime darbo metu I-V 09:00 - 17:00. Palikite savo išsamų komentarą bei savo kontaktus žemiau esančioje formoje.</div>
            <div class="message"></div>
            <div class="form">
                <div class="input tooltip-input-group">
                    <label for="form-sender-email">Jūsų el. paštas:</label>
                    <span class="tooltip tl">i<span class="tooltiptext">Šie duomenys reikalingi tam, kad mes galėtumėm su jumis susisiekti</span></span>
                    <div class="input-container">
                        <input type="text" id="form-sender-email" name="sender-email" class="sender-email-input">
                    </div>
                </div>
                <div class="input tooltip-input-group">
                    <label for="form-sender-phone">Telefonas:</label>
                    <span class="tooltip tl">i<span class="tooltiptext">Šie duomenys reikalingi tam, kad mes galėtumėm su jumis susisiekti</span></span>
                    <div class="input-container">
                        <input type="tel" id="form-sender-phone" name="phone" class="phone-input">
                    </div>
                </div>
                <div class="input">
                    <label for="form-sender-comment">Komentaras:</label>
    
                    <div class="input-container">
                        <textarea name="comment" id="form-sender-comment" class="comment-input border-orange"></textarea>
                    </div>
                </div>
                <div class="button-container">
                    <button type="submit" class="submit-button">Siųsti</button>
                </div>
            </div>
        </form>
    </div>
    
    
    
                </div>
    
                <script src="https://static.autogidas.lt/static/1b25f90a19bc760aab7f.processed.assets.js?v=2353"></script>
        
                
            <script>(function(){r_autogidas.url = 'https://r.autogidas.lt/autogidas';r_autogidas.params('lng=lt&tid=rba&ct=cars');r_autogidas.call();r_autogidas.next();})(window);</script>        
        
        <!-- Google Tag Manager (noscript) -->
    <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-N77HX43"
    height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
    <!-- End Google Tag Manager (noscript) -->
    
        
        
            <script src="https://ads.vmedija.lt?tad=1"></script>
        <script>
            // <![CDATA[
            (function() {if (typeof param_to_display == "undefined") sendGAEvent('User', 'pageview', 'emptyDesktop');})();
            // ]]>
        </script>
    
            
    <div id="firebase-handler-log"></div>
    <script src="https://www.gstatic.com/firebasejs/4.0.0/firebase-app.js"></script>
    <script src="https://www.gstatic.com/firebasejs/4.0.0/firebase-messaging.js"></script>
    <script>
    
    var firebaseHandler = {
        config: {
            apiKey: "AIzaSyCoqZ5qJ7bWl23Vnp25HKH-Bq7u6Rkmfcc",
            authDomain: "autogidas-db16e.firebaseapp.com",
            databaseURL: "https://autogidas-db16e.firebaseio.com",
            projectId: "autogidas-db16e",
            storageBucket: "autogidas-db16e.appspot.com",
            messagingSenderId: "641287967806"
        },
        messaging: false,
        debug: false,
        is_app: false,
        is_mobile: false,
        is_ios: false,
        is_android: false,
        init: function() {
            var self = this;
    
            // Browser notifications
            if (!self.browserSupportsMessaging()) {
    
                self.log('This browser doesn\'t support the API\'s required to use the firebase SDK.');
    
                var nodeContainer = document.querySelector('.saved-searches-container');
    
                if (nodeContainer) {
                    nodeContainer.classList.add('justify-content-disabled');
                }
                return;
            }
    
            // check firebase object is loaded
            if (typeof firebase !== 'undefined') {
    
                // Initialize Firebase
                firebase.initializeApp(self.config);
    
                // Register firebase service worker
                navigator.serviceWorker.register('/static/js/firebase-messaging-sw.js?v=4').then( function(serviceWorkerRegistration) {
    
                    // Retrieve Firebase Messaging object
                    self.messaging = firebase.messaging();
                    self.messaging.useServiceWorker(serviceWorkerRegistration);
    
                    // Callback fired if Instance ID token is updated
                    self.messaging.onTokenRefresh( function() {
                        self.messaging.getToken().then( function(refreshedToken) {
    
                            self.log('Token refreshed: ' + refreshedToken);
                            self.refreshDeviceToken(refreshedToken);
    
                        }).catch( function(err) {
    
                            self.log('Unable to retrieve refreshed token.');
                            self.log(err);
    
                        });
                    });
    
                    // Handle incoming messages. Called when a message is received while the app has focus
                    self.messaging.onMessage( function(event) {
    
                        self.log('Recieved new notification.');
    
                        if (event.data && event.data.message) {
                            serviceWorkerRegistration.active.postMessage(JSON.parse(event.data.message));
                        }
    
                    });
    
                });
    
                var nodeToggleContainer = document.querySelectorAll('.toggle-push-screen');
                var nodeToggleBtnList = document.querySelectorAll('.toggle-push-notifications');
                var nodeToggleBtnLabelList = document.querySelectorAll('.toggle-push-notifications-label');
    
                // bind events for saving/removing user device/browser tokens
                if (nodeToggleContainer.length > 0) {
                    for (var i = 0; i < nodeToggleContainer.length; i++) {
                        nodeToggleContainer[i].style.display = 'inline-block';
                    }
                }
    
                // show labels for saving/removing user device/browser tokens buttons
                if (nodeToggleBtnLabelList.length > 0) {
                    for (var i = 0; i < nodeToggleBtnLabelList.length; i++) {
                        nodeToggleBtnLabelList[i].style.display = 'block';
                    }
                }
    
                var nodeToolTipPush = document.querySelectorAll('.tooltip-push');
                if (nodeToolTipPush.length > 0) {
                    for (var i = 0; i < nodeToolTipPush.length; i++) {
                        nodeToolTipPush[i].style.display = 'inline-block';
                    }
                }
    
    
                // bind events for saving/removing user device/browser tokens
                if (nodeToggleBtnList.length > 0) {
                    for (var i = 0; i < nodeToggleBtnList.length; i++) {
                        nodeToggleBtnList[i].style.display = 'inline-block';
                        nodeToggleBtnList[i].addEventListener('click', function() {
    
                            var dataId = this.getAttribute('data-id') ? this.getAttribute('data-id') : false;
                            var dataHash = this.getAttribute('data-hash') ? this.getAttribute('data-hash') : '';
                            var dataType = this.getAttribute('data-type') ? this.getAttribute('data-type') : '';
    
                            if ((dataType == 'ads-bookmarked') || (dataType == 'forum')) {
                                self.saveDeviceTokenType(dataId);
                            } else {
                                if (dataId) {
                                    self.saveDeviceToken(dataId, dataHash);
                                }
                            }
    
                        });
                    }
                }
            }
        },
        browserSupportsMessaging: function() {
    
            return ("serviceWorker" in navigator) &&
                   ("PushManager" in window) &&
                   ("Notification" in window) &&
                   ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification") &&
                   PushSubscription.prototype.hasOwnProperty("getKey");
    
        },
        getDevice: function() {
    
            var self = this;
    
            if (self.is_mobile) {
                return 'browser-mobile';
            }
    
            return 'browser-desktop';
        },
        refreshDeviceToken: function(refreshedToken) {
    
            var self = this;
    
            var xhr = new XMLHttpRequest();
            var xhrData = new FormData();
    
            xhrData.append('device', self.getDevice());
            xhrData.append('device_token', refreshedToken);
    
            
            xhr.open('POST', '/ajax/saved-searches/notification-token-refresh', true);
            xhr.onreadystatechange = function() {
                if ((xhr.readyState === 4) && (xhr.status === 200)) {
                    var responseData = JSON.parse(xhr.responseText);
                    if (responseData.success) {
                        // ...
                    }
                }
            };
    
            xhr.send( xhrData );
    
        },
        saveDeviceTokenType: function(dataId) {
    
            var self = this;
    
            var nodeToggleBtnList = document.querySelectorAll('.toggle-push-notifications-' + dataId);
            var xhr = new XMLHttpRequest();
            var xhrData = new FormData();
            var xhrDataPermission = '';
    
            if (dataId == 'ads-bookmarked') {
                xhrDataPermission = 'messages_price_reduced_push';
            }
    
            if (dataId == 'forum') {
                xhrDataPermission = 'messages_forum_push';
            }
    
            xhrData.append('permission', xhrDataPermission);
            xhrData.append('device', self.getDevice());
    
            // Get Instance ID token. Initially this makes a network call, once retrieved subsequent calls to getToken will return from cache.
            self.messaging.getToken().then( function(currentToken) {
                if (currentToken) {
    
                    self.log('Device messaging token is: ' + currentToken);
    
                    xhrData.append('device_token', currentToken);
                    xhr.open('POST', '/ajax/user-notifications', true);
    
                    xhr.onreadystatechange = function() {
                        if ((xhr.readyState === 4) && (xhr.status === 200)) {
                            var responseData = JSON.parse(xhr.responseText);
                            if (responseData.success && responseData.message) {
    
                                if (nodeToggleBtnList.length > 0) {
                                    for (var i = 0; i < nodeToggleBtnList.length; i++) {
                                        if (responseData.enabled) {
                                            if (!nodeToggleBtnList[i].classList.contains('is-enabled')) {
                                                nodeToggleBtnList[i].classList.add('is-enabled');
                                            }
                                        } else {
                                            if (nodeToggleBtnList[i].classList.contains('is-enabled')) {
                                                nodeToggleBtnList[i].classList.remove('is-enabled');
                                            }
                                        }
                                    }
                                }
    
                                AutogidasPopup.close();
                                FlashMessage.setFlashMessage(responseData.message, 'success');
    
                            }
                        }
                    };
    
                    // Send the Instance ID token your application server, so that it can:
                    // - send messages back to this app
                    // - subscribe/unsubscribe the token from topics
                    xhr.send( xhrData );
    
                } else {
    
                    self.log('Request permission to access device messaging token');
                    self.requestNotificationsPermission({
                        type: dataId,
                        id: dataId
                    });
    
                }
            }).catch( function(err) {
    
                self.log('An error occurred while retrieving token.');
                self.log(err);
    
                if (err.code == 'messaging/notifications-blocked') {
                    if (nodeToggleBtnList.length > 0) {
    
                        xhrData.append('notifications_blocked', 1);
                        xhr.open('POST', '/ajax/user-notifications', true);
    
                        xhr.onreadystatechange = function () {
                            if ((xhr.readyState === 4) && (xhr.status === 200)) {
                                var responseData = JSON.parse(xhr.responseText);
                                if (responseData.success) {
    
                                    for (var i = 0; i < nodeToggleBtnList.length; i++) {
                                        nodeToggleBtnList[i].classList.remove('is-enabled');
                                    }
    
                                    FlashMessage.setFlashMessage(responseData.message, 'error');
    
                                }
                            }
                        };
    
                        xhr.send(xhrData);
    
                    } else {
                        FlashMessage.setFlashMessage('Nepavyko įjungti pranešimų gavimo. Patikrinkite naršyklės nustatymuose ar nėra išjungta pranešimų gavimo funkcija.', 'error');
                    }
                }
    
            });
        },
        saveDeviceToken: function(saveSearchId, saveSearchHash) {
    
            var self = this;
    
            var xhr = new XMLHttpRequest();
            var xhrData = new FormData();
    
            xhrData.append('saved_search_id', saveSearchId);
            xhrData.append('saved_search_hash', saveSearchHash);
            xhrData.append('device', self.getDevice());
    
            var nodeToggleBtn = document.getElementById('toggle-push-notifications-' + saveSearchId);
    
            // Get Instance ID token. Initially this makes a network call, once retrieved subsequent calls to getToken will return from cache.
            self.messaging.getToken().then( function(currentToken) {
                if (currentToken) {
    
                    self.log('Device messaging token is: ' + currentToken);
    
                    xhrData.append('device_token', currentToken);
                    xhr.open('POST', '/ajax/saved-searches/notification', true);
                    xhr.onreadystatechange = function() {
                        if ((xhr.readyState === 4) && (xhr.status === 200)) {
                            var responseData = JSON.parse(xhr.responseText);
                            if (responseData.success && responseData.message) {
                                if (nodeToggleBtn) {
                                    if ((nodeToggleBtn.getAttribute('data-notifications-enabled') == '1') && (responseData.message == 'notification-disabled')) {
                                        nodeToggleBtn.setAttribute('data-notifications-enabled', '0');
                                        nodeToggleBtn.classList.remove('is-enabled');
                                    }
                                    if ((nodeToggleBtn.getAttribute('data-notifications-enabled') == '0') && (responseData.message == 'notification-enabled')) {
                                        nodeToggleBtn.setAttribute('data-notifications-enabled', '1');
                                        nodeToggleBtn.classList.add('is-enabled');
                                    }
                                }
                            }
                        }
                    };
    
                    // Send the Instance ID token your application server, so that it can:
                    // - send messages back to this app
                    // - subscribe/unsubscribe the token from topics
                    xhr.send( xhrData );
    
                } else {
    
                    self.log('Request permission to access device messaging token');
                    self.requestNotificationsPermission({
                        type: 'ads-search',
                        id: saveSearchId,
                        hash: saveSearchHash
                    });
    
                }
            }).catch( function(err) {
    
                self.log('An error occurred while retrieving token.');
                self.log(err);
    
                if (err.code == 'messaging/notifications-blocked') {
    
                    if (nodeToggleBtn && nodeToggleBtn.getAttribute('data-notifications-enabled') == '1') {
    
                        xhr.open('POST', '/ajax/saved-searches/notification', true);
                        xhr.onreadystatechange = function() {
                            if ((xhr.readyState === 4) && (xhr.status === 200)) {
                                var responseData = JSON.parse(xhr.responseText);
                                if (responseData.success && responseData.message) {
                                    if (responseData.message == 'notification-disabled') {
                                        nodeToggleBtn.setAttribute('data-notifications-enabled', '0');
                                        nodeToggleBtn.classList.remove('is-enabled');
                                    }
                                }
                            }
                        };
                        xhr.send( xhrData );
    
                    } else {
                        FlashMessage.setFlashMessage('Nepavyko įjungti pranešimų gavimo. Patikrinkite naršyklės nustatymuose ar nėra išjungta pranešimų gavimo funkcija.', 'error');
                    }
    
                }
            });
    
        },
        requestNotificationsPermission: function(params) {
    
            var self = this;
    
            self.messaging.requestPermission().then( function() {
    
                self.log('Notification permission granted.');
    
                if ((params.type == 'ads-bookmarked') || (params.type == 'forum')) {
                    self.saveDeviceTokenType(params.id);
                } else {
                    self.saveDeviceToken(params.id, params.hash);
                }
    
            }).catch( function(err) {
    
                self.log('Unable to get permission to notify.');
                self.log(err);
    
            });
        },
        deleteToken: function() {
    
            var self = this;
    
            self.messaging.getToken().then( function(currentToken) {
                self.messaging.deleteToken(currentToken).then( function() {
    
                    self.log('Token deleted.');
    
                }).catch( function(err) {
    
                    self.log('Unable to delete token.');
                    self.log(err);
    
                });
            }).catch( function(err) {
    
                self.log('Error retrieving Instance ID token.');
                self.log(err);
    
            });
        },
        log: function(message, error) {
    
            var self = this;
            var nodeHolder = document.getElementById('firebase-handler-log');
    
            if (self.debug) {
    
                console.log(message);
    
                //if (nodeHolder) {
                //    nodeHolder.insertAdjacentHTML('beforeend', '<div>' + message + '</div>');
                //}
            }
        },
        appInit: function() {
            var nodeContainer = document.querySelector('.saved-searches-container');
    
            if (nodeContainer) {
                nodeContainer.classList.remove('justify-content-disabled');
            }
    
            var nodeToggleContainer = document.querySelectorAll('.toggle-push-screen');
            if (nodeToggleContainer.length > 0) {
                for (var i = 0; i < nodeToggleContainer.length; i++) {
                    nodeToggleContainer[i].style.display = 'inline-block';
                }
            }
    
            var nodeToggleBtnLabelList = document.querySelectorAll('.toggle-push-notifications-label');
            var nodeToolTipPush = document.querySelectorAll('.tooltip-push');
            if (nodeToggleBtnLabelList.length > 0) {
               for (var i = 0; i < nodeToggleBtnLabelList.length; i++) {
                   nodeToggleBtnLabelList[i].style.display = 'block';
               }
            }
    
            if (nodeToolTipPush.length > 0) {
                for (var i = 0; i < nodeToolTipPush.length; i++) {
                    nodeToolTipPush[i].style.display = 'inline-block';
                }
            }
    
            var nodeToggleBtnAppList = document.querySelectorAll('.toggle-push-notifications-app');
            if (nodeToggleBtnAppList.length > 0) {
               for (var i = 0; i < nodeToggleBtnAppList.length; i++) {
                   nodeToggleBtnAppList[i].style.display = 'inline-block';
               }
            }
        }
    };
    
    firebaseHandler.init();
    
    </script>
                <script src="https://static.autogidas.lt/static/28405f8b7b07478f28df.processed.assets.js?v=2353"></script>
        
        <script type="text/javascript">
            var translationsBookmark = {
                title: 'Pranešimai apie sumažintą kainą',
                title_input: 'Gauti ekrane',
    
                failed_title: 'Įsiminti skelbimai',
                limitDay: 'Viršijote dienos leistinų išsaugotų skelbimų skaičių, išsitrinkite neaktyvius skelbimus.',
                limitMax: 'Viršijote leistinų išsaugotų skelbimų skaičių, išsitrinkite neaktyvius skelbimus.'
            };
        </script>
    
        <script type="text/javascript">
                  var dialogOption = {
                title: "Skelbim\u0173 prenumerata",
                description: document.getElementById('subscribeTemplate').innerHTML,
                link: '',
                callback_title: "Prenumeruoti",
                callback: 'SavedSearchItem.subscribeEmailModal("subscribeForm")'
            }
           SavedSearchItem.init();
           
            var orderBy = document.getElementById('order-by-select-input');
            if (orderBy) {
                orderBy.addEventListener('change', function (e) {
                    window.location = this.value;
                    e.preventDefault();
                });
            }
    
    
        </script>
    
        <script type="text/javascript">
    
            var scrollTopBtn = document.getElementById('scroll-to-top');
    
            if (scrollTopBtn) {
    
                scrollTopBtn.addEventListener('click', function () {
                    $("html, body").animate({scrollTop:0});
                });
    
                window.onscroll = function () {
                    if (window.pageYOffset > 700) {
                        scrollTopBtn.style.display = 'block';
                    } else {
                        scrollTopBtn.style.display = 'none';
                    }
                }
    
                var setScrollToTopPosition = function() {
    
                    var win_width = $(window).width();
    
                    if (win_width < 1400) {
                        scrollTopBtn.style.right = '';
                        return;
                    }
    
                    scrollTopBtn.style.right = ((($(window).width() - 1330) / 2) - 50) + 'px';
                };
    
                $(window).on('resize', setScrollToTopPosition);
    
                setScrollToTopPosition();
            }
        </script>
    
    
        <script src="https://static.autogidas.lt/static/d3f04eb7d270824b971a.processed.assets.js?v=2353"></script>
    
    <script>
        var contactsDialog = new ContactDialog();
        var contactsDialogBtn = document.getElementsByClassName('contact-us');
        //var feedbackClose = document.getElementById('feedback-close');
        if (contactsDialogBtn !== null) {
            for (var i = 0; i < contactsDialogBtn.length; i++) {
                contactsDialogBtn[i].addEventListener('click', function (event) {
                    event.preventDefault();
                    contactsDialog.open();
                });
            }
        }
    
        /*if (feedbackClose !== null) {
            feedbackClose.addEventListener('click', function (event) {
                event.preventDefault();
                document.getElementsByClassName('feedback-stick')[0].remove();
            });
        }*/
        function postFeedbackForm(type) {
            var url = 'autogidas.lt/skelbimai/automobiliai/';
            sendGAEvent('meniu', 'send_feedback', url);
        }
    </script>
    
            
        
        <script src="//chat.vmedija.lt/socket.io.slim.js?v=44"></script><iframe style="display: none;" name="__tcfapiLocator" title="CMP Locator"></iframe>
        <script src="//chat.vmedija.lt/chat.min.js?v=44"></script>
        <script>
            VM_Chat.init({
                project: 'autogidas',
                server: 'wss://chat.vmedija.lt',
                version: 44,
                token: false,
                translations: {
                    btn_room_hide: 'Slėpti pokalbį',
                    btn_room_block: 'Blokuoti pokalbį',
                    date_day_short: 'd.',
                    date_year_short: 'm.',
                    date_month: {
                        '01': 'sausis',
                        '02': 'vasaris',
                        '03': 'kovas',
                        '04': 'balandis',
                        '05': 'gegužė',
                        '06': 'birželis',
                        '07': 'liepa',
                        '08': 'rugpjūtis',
                        '09': 'rugsėjis',
                        '10': 'spalis',
                        '11': 'lapkritis',
                        '12': 'gruodis'
                    },
                    error_action_not_allowed: 'Veiksmo atlikti nepavyko',
                    error_connection: 'Prisijungti nepavyko',
                    error_chat_not_allowed: 'Vartotojas yra išjungęs chat pokalbių galimybę',
                    error_message_not_allowed: 'Žinutės išsiųsti nepavyko',
                    error_room_not_allowed: 'Prisijungti prie pokalbio nepavyko',
                    error_room_blocked: 'Pokalbis buvo užblokuotas gavėjo',
                    info_no_rooms: 'Nėra aktyvių pokalbių',
                    info_start: 'Norėdami pradėti, tęsti pokalbį, skelbime spauskite mygtuką Pradėti pokalbį (chat)',
                    info_start_login: 'Norėdami pradėti bendrauti prisijunkite prie savo paskyros',
                    info_unblock: 'Išsiuntus žinutę, pokalbio blokavimas nebegalios.',
                    info_welcome: 'Sveiki, turite klausimų? Klauskite dabar, mielai atsakysiu.',
                    login: 'Prisijungti',
                    offline: 'Atsijungęs',
                    online: 'Prisijungęs',
                    status_inactive: 'Neaktyvus',
                    status_reserved: 'Rezervuotas',
                    status_sold: 'Parduotas',
                    title_all_rooms: 'Visi pokalbiai',
                    write_message: 'Rašyti žinutę'
                }
            });
        </script>
    
        <script data-cookieconsent="ignore" src="https://www.google.com/recaptcha/api.js?render=6Ld13BAdAAAAAP7nJJskjKzeyLc_CD_iP7l97wbh"></script>
        <script>var google_recaptcha_key = '6Ld13BAdAAAAAP7nJJskjKzeyLc_CD_iP7l97wbh';</script>
    
    
    
    
    <script type="text/javascript" id="">!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version="2.0",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,"script","https://connect.facebook.net/en_US/fbevents.js");fbq("init","215817955426323");fbq("track","PageView");</script>
        <script type="text/javascript" id="">fbq("trackCustom","CustomDimensions",{usertype:"NOT_LOGGED_IN",category:"01",price:"undefined"});</script><div><div class="grecaptcha-badge" data-style="bottomright" style="width: 256px; height: 60px; display: block; transition: right 0.3s ease 0s; position: fixed; bottom: 14px; right: -186px; box-shadow: gray 0px 0px 5px; border-radius: 2px; overflow: hidden;"><div class="grecaptcha-logo"><iframe title="reCAPTCHA" src="https://www.google.com/recaptcha/api2/anchor?ar=1&amp;k=6Ld13BAdAAAAAP7nJJskjKzeyLc_CD_iP7l97wbh&amp;co=aHR0cHM6Ly9hdXRvZ2lkYXMubHQ6NDQz&amp;hl=en&amp;v=5JGZgxkKwe0uOXDdUvSaNtk_&amp;size=invisible&amp;cb=xjxfzrg2zem8" width="256" height="60" role="presentation" name="a-t4w9qs1uu2ko" frameborder="0" scrolling="no" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox"></iframe></div><div class="grecaptcha-error"></div><textarea id="g-recaptcha-response-100000" name="g-recaptcha-response" class="g-recaptcha-response" style="width: 250px; height: 40px; border: 1px solid rgb(193, 193, 193); margin: 10px 25px; padding: 0px; resize: none; display: none;"></textarea></div><iframe style="display: none;"></iframe></div><div id="onetrust-consent-sdk"><div class="onetrust-pc-dark-filter ot-hide ot-fade-in"></div><div id="onetrust-pc-sdk" class="otPcCenter ot-hide ot-fade-in ot-leg-opt-out ot-leg-btn" aria-modal="true" role="dialog" aria-labelledby="ot-pc-title" lang="lt"><!-- Close Button --><div class="ot-pc-header"><!-- Logo Tag --><div class="ot-pc-logo" role="img" aria-label="Company Logo" style="background-image: url(&quot;https://cdn.cookielaw.org/logos/74f8ca37-1774-4892-8d27-a858c747f0aa/b280a35d-99c8-4509-aa14-1c061d4f9fe6/ab50d0fe-7f38-4d9a-8fc7-6da265534c61/Autogidas-logo.png&quot;);
                        background-position: left"></div></div><!-- Close Button --><div id="ot-pc-content" class="ot-pc-scrollbar"><h3 id="ot-pc-title">Apie Jūsų privatumą</h3><div id="ot-pc-desc">Mes tvarkome Jūsų duomenis, kad teiktume turinį arba reklamą, arba vertintume tokio turinio ar reklamos pateikimą, kad gautume įžvalgas apie mūsų svetainę. Šia informacija mes dalijamės su mūsų partneriais remdamiesi sutikimu ir teisėtu interesu. Jūs galite pasinaudoti savo teise sutikti arba nesutikti su teisėtu interesu remdamiesi konkrečiu toliau nurodytu tikslu arba partnerio lygmeniu pagal nuorodą prie kiekvieno tikslo. Apie šias parinktis bus informuoti mūsų tiekėjai, dalyvaujantys „Skaidrumo ir sutikimo sistemoje“.</div><button id="accept-recommended-btn-handler">Leisti visus</button><section class="ot-sdk-row ot-cat-grp"><h3 id="ot-category-title">Valdyti sutikimo parinktis</h3><div class="ot-accordion-layout ot-cat-item" data-optanongroupid="C0001"><button aria-expanded="false" ot-accordion="true" aria-controls="ot-desc-id-C0001" aria-labelledby="ot-header-id-C0001"></button><!-- Accordion header --><div class="ot-acc-hdr ot-always-active-group"><div class="ot-plus-minus"><span></span><span></span></div><h4 class="ot-cat-header" id="ot-header-id-C0001">Griežtai būtini slapukai</h4><div class="ot-always-active">Visada aktyvus</div></div><!-- accordion detail --><div class="ot-acc-grpcntr ot-acc-txt"><p class="ot-acc-grpdesc ot-category-desc" id="ot-desc-id-C0001">Šių slapukų reikia, kad svetainė galėtų veikti, ir jų mūsų sistemose išjungti negalima. Jie paprastai nustatomi tik reaguojant į jūsų atliktus veiksmus, kurie prilygsta paslaugų prašymams, pavyzdžiui, privatumo nuostatų nustatymą, prisijungimą ar formų pildymą. Galite nustatyti, kad naršyklė blokuotų šiuos slapukus ar įspėtų apie juos, bet tokiu atveju kai kurios svetainės dalys gali neveikti.</p></div></div><div class="ot-accordion-layout ot-cat-item" data-optanongroupid="C0003"><button aria-expanded="false" ot-accordion="true" aria-controls="ot-desc-id-C0003" aria-labelledby="ot-header-id-C0003"></button><!-- Accordion header --><div class="ot-acc-hdr"><div class="ot-plus-minus"><span></span><span></span></div><h4 class="ot-cat-header" id="ot-header-id-C0003">Funkciniai slapukai</h4><div class="ot-tgl"><input type="checkbox" name="ot-group-id-C0003" id="ot-group-id-C0003" aria-checked="true" role="switch" class="category-switch-handler" data-optanongroupid="C0003" checked="" aria-labelledby="ot-header-id-C0003"> <label class="ot-switch" for="ot-group-id-C0003"><span class="ot-switch-nob"></span> <span class="ot-label-txt">Funkciniai slapukai</span></label> </div></div><!-- accordion detail --><div class="ot-acc-grpcntr ot-acc-txt"><p class="ot-acc-grpdesc ot-category-desc" id="ot-desc-id-C0003">Šie slapukai suteikia galimybę parūpinti patobulintas funkcijas ir suasmeninti, pavyzdžiui, vaizdo įrašus ir tiesioginius pokalbius. Juos galime nustatyti mes arba trečiųjų šalių teikėjai, kurių paslaugomis naudojamės savo puslapiuose. Jei neleisite šių slapukų, kai kurios ar visos šios funkcijos gali neveikti tinkamai.</p></div></div><div class="ot-accordion-layout ot-cat-item" data-optanongroupid="C0004"><button aria-expanded="false" ot-accordion="true" aria-controls="ot-desc-id-C0004" aria-labelledby="ot-header-id-C0004"></button><!-- Accordion header --><div class="ot-acc-hdr"><div class="ot-plus-minus"><span></span><span></span></div><h4 class="ot-cat-header" id="ot-header-id-C0004">Taikymo slapukai</h4><div class="ot-tgl"><input type="checkbox" name="ot-group-id-C0004" id="ot-group-id-C0004" aria-checked="true" role="switch" class="category-switch-handler" data-optanongroupid="C0004" checked="" aria-labelledby="ot-header-id-C0004"> <label class="ot-switch" for="ot-group-id-C0004"><span class="ot-switch-nob"></span> <span class="ot-label-txt">Taikymo slapukai</span></label> </div></div><!-- accordion detail --><div class="ot-acc-grpcntr ot-acc-txt"><p class="ot-acc-grpdesc ot-category-desc" id="ot-desc-id-C0004">Šiuos slapukus mūsų svetainėje nustato reklamavimo partneriai. Šios įmonės gali juos naudoti sudarydamos jūsų pomėgių profilį ir rodydamos jums aktualius skelbimus kitose svetainėse. Jie veikia unikaliai identifikuodami jūsų naršyklę ir įrenginį. Jei neleisite šių slapukų, negausite jums pritaikytų skelbimų kitose svetainėse.</p></div></div><div class="ot-accordion-layout ot-cat-item" data-optanongroupid="IABV2_1"><button aria-expanded="false" ot-accordion="true" aria-controls="ot-desc-id-IABV2_1" aria-labelledby="ot-header-id-IABV2_1"></button><!-- Accordion header --><div class="ot-acc-hdr"><div class="ot-plus-minus"><span></span><span></span></div><h4 class="ot-cat-header" id="ot-header-id-IABV2_1">Laikyti ir (arba) gauti informaciją įrenginyje</h4><div class="ot-tgl"><input type="checkbox" name="ot-group-id-IABV2_1" id="ot-group-id-IABV2_1" aria-checked="false" role="switch" class="category-switch-handler" data-optanongroupid="IABV2_1" aria-labelledby="ot-header-id-IABV2_1"> <label class="ot-switch" for="ot-group-id-IABV2_1"><span class="ot-switch-nob"></span> <span class="ot-label-txt">Laikyti ir (arba) gauti informaciją įrenginyje</span></label> </div></div><!-- accordion detail --><div class="ot-acc-grpcntr ot-acc-txt"><p class="ot-acc-grpdesc ot-category-desc" id="ot-desc-id-IABV2_1">Slapukai, įrenginių identifikatoriai ar kita informacija gali būti laikoma ir prieinama jūsų įrenginyje jums nurodytais tikslais.</p><div class="ot-vlst-cntr"><button class="ot-link-btn category-vendors-list-handler" data-parent-id="IABV2_1">IAB tiekėjų sąrašas‎</button><a href="https://tcf.cookiepedia.co.uk?lang=lt" rel="noopener" target="_blank">&nbsp;|&nbsp;Peržiūrėti visą teisinį tekstą&nbsp;<span class="ot-scrn-rdr">Opens in a new Tab</span></a></div></div></div><div class="ot-accordion-layout ot-cat-item" data-optanongroupid="STACK42"><button aria-expanded="false" ot-accordion="true" aria-controls="ot-desc-id-STACK42" aria-labelledby="ot-header-id-STACK42"></button><!-- Accordion header --><div class="ot-acc-hdr"><div class="ot-plus-minus"><span></span><span></span></div><h4 class="ot-cat-header" id="ot-header-id-STACK42">Suasmeninti skelbimai ir turinys, skelbimų ir jų turinio vertinimas, auditorijos įžvalgos ir produktų kūrimas</h4><div class="ot-tgl"><input type="checkbox" name="ot-group-id-STACK42" id="ot-group-id-STACK42" aria-checked="false" role="switch" class="category-switch-handler" data-optanongroupid="STACK42" aria-labelledby="ot-header-id-STACK42"> <label class="ot-switch" for="ot-group-id-STACK42"><span class="ot-switch-nob"></span> <span class="ot-label-txt">Suasmeninti skelbimai ir turinys, skelbimų ir jų turinio vertinimas, auditorijos įžvalgos ir produktų kūrimas</span></label> </div></div><!-- accordion detail --><div class="ot-acc-grpcntr ot-acc-txt"><div class="ot-subgrp-cntr"><ul class="ot-subgrps"><li class="ot-subgrp" data-optanongroupid="IABV2_2"><h5>Pasirinkti pagrindinius reklaminius skelbimus</h5><div class="ot-tgl-cntr ot-subgrp-tgl"><div class="ot-tgl"><input type="checkbox" name="switch" id="ot-sub-group-id-IABV2_2" aria-checked="false" role="switch" data-optanongroupid="IABV2_2" class="cookie-subgroup-handler" aria-label="Pasirinkti pagrindinius reklaminius skelbimus"> <label class="ot-switch" for="ot-sub-group-id-IABV2_2"><span class="ot-switch-nob"></span> <span class="ot-label-txt">Switch Label</span></label> </div></div><p class="ot-subgrp-desc">Reklaminiai skelbimai gali būti jums rodomi atsižvelgiant į jūsų peržiūrimą turinį, naudojamą programėlę, jūsų apytikslę buvimo vietą arba  jūsų įrenginio tipą.</p><div class="ot-leg-btn-container" data-group-id="IABV2_2" data-el-id="IABV2_2-leg-out" is-vendor="false">
                        <button class="ot-obj-leg-btn-handler ot-leg-int-enabled ot-inactive-leg-btn">
                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512">
                                <path fill="#FFFFFF" d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path>
                            </svg>
                           <span>Prieštarauti teisėtiems interesams
                            </span>
                        </button>
                        <button class="ot-remove-objection-handler" style="color:#77bb41; display:none;">Pašalinti prieštaravimą</button>
                    </div>
            </li></ul></div><div class="ot-subgrp-cntr"><ul class="ot-subgrps"><li class="ot-subgrp" data-optanongroupid="IABV2_3"><h5>Kurti suasmenintą reklaminių skelbimų profilį</h5><div class="ot-tgl-cntr ot-subgrp-tgl"><div class="ot-tgl"><input type="checkbox" name="switch" id="ot-sub-group-id-IABV2_3" aria-checked="false" role="switch" data-optanongroupid="IABV2_3" class="cookie-subgroup-handler" aria-label="Kurti suasmenintą reklaminių skelbimų profilį"> <label class="ot-switch" for="ot-sub-group-id-IABV2_3"><span class="ot-switch-nob"></span> <span class="ot-label-txt">Switch Label</span></label> </div></div><p class="ot-subgrp-desc">Profilis gali būti sukurtas atsižvelgiant į jus ir jūsų interesus, kad jums būtų rodomi asmeniškai jums pritaikyti ir aktualūs skelbimai.</p><div class="ot-leg-btn-container" data-group-id="IABV2_3" data-el-id="IABV2_3-leg-out" is-vendor="false">
                        <button class="ot-obj-leg-btn-handler ot-leg-int-enabled ot-inactive-leg-btn">
                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512">
                                <path fill="#FFFFFF" d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path>
                            </svg>
                           <span>Prieštarauti teisėtiems interesams
                            </span>
                        </button>
                        <button class="ot-remove-objection-handler" style="color:#77bb41; display:none;">Pašalinti prieštaravimą</button>
                    </div>
            </li></ul></div><div class="ot-subgrp-cntr"><ul class="ot-subgrps"><li class="ot-subgrp" data-optanongroupid="IABV2_4"><h5>Pasirinkti suasmenintus skelbimus</h5><div class="ot-tgl-cntr ot-subgrp-tgl"><div class="ot-tgl"><input type="checkbox" name="switch" id="ot-sub-group-id-IABV2_4" aria-checked="false" role="switch" data-optanongroupid="IABV2_4" class="cookie-subgroup-handler" aria-label="Pasirinkti suasmenintus skelbimus"> <label class="ot-switch" for="ot-sub-group-id-IABV2_4"><span class="ot-switch-nob"></span> <span class="ot-label-txt">Switch Label</span></label> </div></div><p class="ot-subgrp-desc">Suasmeninti skelbimai gali būti rodomi vadovaujantis sukurtu jūsų profiliu.</p><div class="ot-leg-btn-container" data-group-id="IABV2_4" data-el-id="IABV2_4-leg-out" is-vendor="false">
                        <button class="ot-obj-leg-btn-handler ot-leg-int-enabled ot-inactive-leg-btn">
                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512">
                                <path fill="#FFFFFF" d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path>
                            </svg>
                           <span>Prieštarauti teisėtiems interesams
                            </span>
                        </button>
                        <button class="ot-remove-objection-handler" style="color:#77bb41; display:none;">Pašalinti prieštaravimą</button>
                    </div>
            </li></ul></div><div class="ot-subgrp-cntr"><ul class="ot-subgrps"><li class="ot-subgrp" data-optanongroupid="IABV2_5"><h5>Sukurti suasmenintą turinio profilį</h5><div class="ot-tgl-cntr ot-subgrp-tgl"><div class="ot-tgl"><input type="checkbox" name="switch" id="ot-sub-group-id-IABV2_5" aria-checked="false" role="switch" data-optanongroupid="IABV2_5" class="cookie-subgroup-handler" aria-label="Sukurti suasmenintą turinio profilį"> <label class="ot-switch" for="ot-sub-group-id-IABV2_5"><span class="ot-switch-nob"></span> <span class="ot-label-txt">Switch Label</span></label> </div></div><p class="ot-subgrp-desc">Profilis gali būti sukurtas atsižvelgiant į jus ir jūsų interesus, kad jums būtų rodomas asmeniškai jums pritaikytas ir aktualus turinys.</p><div class="ot-leg-btn-container" data-group-id="IABV2_5" data-el-id="IABV2_5-leg-out" is-vendor="false">
                        <button class="ot-obj-leg-btn-handler ot-leg-int-enabled ot-inactive-leg-btn">
                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512">
                                <path fill="#FFFFFF" d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path>
                            </svg>
                           <span>Prieštarauti teisėtiems interesams
                            </span>
                        </button>
                        <button class="ot-remove-objection-handler" style="color:#77bb41; display:none;">Pašalinti prieštaravimą</button>
                    </div>
            </li></ul></div><div class="ot-subgrp-cntr"><ul class="ot-subgrps"><li class="ot-subgrp" data-optanongroupid="IABV2_6"><h5>Pasirinkti suasmenintą turinį</h5><div class="ot-tgl-cntr ot-subgrp-tgl"><div class="ot-tgl"><input type="checkbox" name="switch" id="ot-sub-group-id-IABV2_6" aria-checked="false" role="switch" data-optanongroupid="IABV2_6" class="cookie-subgroup-handler" aria-label="Pasirinkti suasmenintą turinį"> <label class="ot-switch" for="ot-sub-group-id-IABV2_6"><span class="ot-switch-nob"></span> <span class="ot-label-txt">Switch Label</span></label> </div></div><p class="ot-subgrp-desc">Suasmenintas turinys gali būti rodomas vadovaujantis sukurtu jūsų profiliu.</p><div class="ot-leg-btn-container" data-group-id="IABV2_6" data-el-id="IABV2_6-leg-out" is-vendor="false">
                        <button class="ot-obj-leg-btn-handler ot-leg-int-enabled ot-inactive-leg-btn">
                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512">
                                <path fill="#FFFFFF" d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path>
                            </svg>
                           <span>Prieštarauti teisėtiems interesams
                            </span>
                        </button>
                        <button class="ot-remove-objection-handler" style="color:#77bb41; display:none;">Pašalinti prieštaravimą</button>
                    </div>
            </li></ul></div><div class="ot-subgrp-cntr"><ul class="ot-subgrps"><li class="ot-subgrp" data-optanongroupid="IABV2_7"><h5>Vertinti skelbimo veiksmingumą</h5><div class="ot-tgl-cntr ot-subgrp-tgl"><div class="ot-tgl"><input type="checkbox" name="switch" id="ot-sub-group-id-IABV2_7" aria-checked="false" role="switch" data-optanongroupid="IABV2_7" class="cookie-subgroup-handler" aria-label="Vertinti skelbimo veiksmingumą"> <label class="ot-switch" for="ot-sub-group-id-IABV2_7"><span class="ot-switch-nob"></span> <span class="ot-label-txt">Switch Label</span></label> </div></div><p class="ot-subgrp-desc">Skelbimų, kuriuos matote ir su kuriais sąveikaujate, veiksmingumas ir efektyvumas gali būti įvertintas.</p><div class="ot-leg-btn-container" data-group-id="IABV2_7" data-el-id="IABV2_7-leg-out" is-vendor="false">
                        <button class="ot-obj-leg-btn-handler ot-leg-int-enabled ot-inactive-leg-btn">
                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512">
                                <path fill="#FFFFFF" d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path>
                            </svg>
                           <span>Prieštarauti teisėtiems interesams
                            </span>
                        </button>
                        <button class="ot-remove-objection-handler" style="color:#77bb41; display:none;">Pašalinti prieštaravimą</button>
                    </div>
            </li></ul></div><div class="ot-subgrp-cntr"><ul class="ot-subgrps"><li class="ot-subgrp" data-optanongroupid="IABV2_8"><h5>Vertinti turinio veiksmingumą</h5><div class="ot-tgl-cntr ot-subgrp-tgl"><div class="ot-tgl"><input type="checkbox" name="switch" id="ot-sub-group-id-IABV2_8" aria-checked="false" role="switch" data-optanongroupid="IABV2_8" class="cookie-subgroup-handler" aria-label="Vertinti turinio veiksmingumą"> <label class="ot-switch" for="ot-sub-group-id-IABV2_8"><span class="ot-switch-nob"></span> <span class="ot-label-txt">Switch Label</span></label> </div></div><p class="ot-subgrp-desc">Turinio, kurį matote ir su kuriuo sąveikaujate veiksmingumas ir efektyvumas gali būti įvertintas.</p><div class="ot-leg-btn-container" data-group-id="IABV2_8" data-el-id="IABV2_8-leg-out" is-vendor="false">
                        <button class="ot-obj-leg-btn-handler ot-leg-int-enabled ot-inactive-leg-btn">
                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512">
                                <path fill="#FFFFFF" d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path>
                            </svg>
                           <span>Prieštarauti teisėtiems interesams
                            </span>
                        </button>
                        <button class="ot-remove-objection-handler" style="color:#77bb41; display:none;">Pašalinti prieštaravimą</button>
                    </div>
            </li></ul></div><div class="ot-subgrp-cntr"><ul class="ot-subgrps"><li class="ot-subgrp" data-optanongroupid="IABV2_9"><h5>Taikyti rinkos tyrimus auditorijos įžvalgoms gauti</h5><div class="ot-tgl-cntr ot-subgrp-tgl"><div class="ot-tgl"><input type="checkbox" name="switch" id="ot-sub-group-id-IABV2_9" aria-checked="false" role="switch" data-optanongroupid="IABV2_9" class="cookie-subgroup-handler" aria-label="Taikyti rinkos tyrimus auditorijos įžvalgoms gauti"> <label class="ot-switch" for="ot-sub-group-id-IABV2_9"><span class="ot-switch-nob"></span> <span class="ot-label-txt">Switch Label</span></label> </div></div><p class="ot-subgrp-desc">Rinkos tyrimų duomenys gali būti naudojami siekiant sužinoti daugiau apie auditorijas, kurios lankosi svetainėse / programėlėse, ar jas peržiūri.</p><div class="ot-leg-btn-container" data-group-id="IABV2_9" data-el-id="IABV2_9-leg-out" is-vendor="false">
                        <button class="ot-obj-leg-btn-handler ot-leg-int-enabled ot-inactive-leg-btn">
                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512">
                                <path fill="#FFFFFF" d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path>
                            </svg>
                           <span>Prieštarauti teisėtiems interesams
                            </span>
                        </button>
                        <button class="ot-remove-objection-handler" style="color:#77bb41; display:none;">Pašalinti prieštaravimą</button>
                    </div>
            </li></ul></div><div class="ot-subgrp-cntr"><ul class="ot-subgrps"><li class="ot-subgrp" data-optanongroupid="IABV2_10"><h5>Kurti ir tobulinti produktus</h5><div class="ot-tgl-cntr ot-subgrp-tgl"><div class="ot-tgl"><input type="checkbox" name="switch" id="ot-sub-group-id-IABV2_10" aria-checked="false" role="switch" data-optanongroupid="IABV2_10" class="cookie-subgroup-handler" aria-label="Kurti ir tobulinti produktus"> <label class="ot-switch" for="ot-sub-group-id-IABV2_10"><span class="ot-switch-nob"></span> <span class="ot-label-txt">Switch Label</span></label> </div></div><p class="ot-subgrp-desc">Jūsų duomenys gali būti naudojami esamoms sistemoms ir programinei įrangai tobulinti ir naujiems produktams kurti.</p><div class="ot-leg-btn-container" data-group-id="IABV2_10" data-el-id="IABV2_10-leg-out" is-vendor="false">
                        <button class="ot-obj-leg-btn-handler ot-leg-int-enabled ot-inactive-leg-btn">
                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512">
                                <path fill="#FFFFFF" d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path>
                            </svg>
                           <span>Prieštarauti teisėtiems interesams
                            </span>
                        </button>
                        <button class="ot-remove-objection-handler" style="color:#77bb41; display:none;">Pašalinti prieštaravimą</button>
                    </div>
            </li></ul></div><div class="ot-vlst-cntr"><button class="ot-link-btn category-vendors-list-handler" data-parent-id="STACK42">IAB tiekėjų sąrašas‎</button><a href="https://tcf.cookiepedia.co.uk?lang=lt" rel="noopener" target="_blank">&nbsp;|&nbsp;Peržiūrėti visą teisinį tekstą&nbsp;<span class="ot-scrn-rdr">Opens in a new Tab</span></a></div></div></div><div class="ot-accordion-layout ot-cat-item" data-optanongroupid="ISFV2_1"><button aria-expanded="false" ot-accordion="true" aria-controls="ot-desc-id-ISFV2_1" aria-labelledby="ot-header-id-ISFV2_1"></button><!-- Accordion header --><div class="ot-acc-hdr"><div class="ot-plus-minus"><span></span><span></span></div><h4 class="ot-cat-header" id="ot-header-id-ISFV2_1">Naudoti tikslius geografinės vietos duomenis</h4><div class="ot-tgl"><input type="checkbox" name="ot-group-id-ISFV2_1" id="ot-group-id-ISFV2_1" aria-checked="false" role="switch" class="category-switch-handler" data-optanongroupid="ISFV2_1" aria-labelledby="ot-header-id-ISFV2_1"> <label class="ot-switch" for="ot-group-id-ISFV2_1"><span class="ot-switch-nob"></span> <span class="ot-label-txt">Naudoti tikslius geografinės vietos duomenis</span></label> </div></div><!-- accordion detail --><div class="ot-acc-grpcntr ot-acc-txt"><p class="ot-acc-grpdesc ot-category-desc" id="ot-desc-id-ISFV2_1">Jūsų tikslūs geografinės vietos duomenys gali būti naudojami siekiant vieno ar daugiau tikslų. Tai reiškia, kad jūsų buvimo vieta gali būti nustatyta kelių metrų tikslumu.</p><div class="ot-vlst-cntr"><button class="ot-link-btn category-vendors-list-handler" data-parent-id="ISFV2_1">IAB tiekėjų sąrašas‎</button><a href="https://tcf.cookiepedia.co.uk?lang=lt" rel="noopener" target="_blank">&nbsp;|&nbsp;Peržiūrėti visą teisinį tekstą&nbsp;<span class="ot-scrn-rdr">Opens in a new Tab</span></a></div></div></div><div class="ot-accordion-layout ot-cat-item" data-optanongroupid="ISFV2_2"><button aria-expanded="false" ot-accordion="true" aria-controls="ot-desc-id-ISFV2_2" aria-labelledby="ot-header-id-ISFV2_2"></button><!-- Accordion header --><div class="ot-acc-hdr"><div class="ot-plus-minus"><span></span><span></span></div><h4 class="ot-cat-header" id="ot-header-id-ISFV2_2">Aktyviai skenuoti įrenginio charakteristikas identifikavimo tikslais</h4><div class="ot-tgl"><input type="checkbox" name="ot-group-id-ISFV2_2" id="ot-group-id-ISFV2_2" aria-checked="false" role="switch" class="category-switch-handler" data-optanongroupid="ISFV2_2" aria-labelledby="ot-header-id-ISFV2_2"> <label class="ot-switch" for="ot-group-id-ISFV2_2"><span class="ot-switch-nob"></span> <span class="ot-label-txt">Aktyviai skenuoti įrenginio charakteristikas identifikavimo tikslais</span></label> </div></div><!-- accordion detail --><div class="ot-acc-grpcntr ot-acc-txt"><p class="ot-acc-grpdesc ot-category-desc" id="ot-desc-id-ISFV2_2">Jūsų įrenginys gali būti identifikuotas remiantis jūsų įrenginio unikalių charakteristikų derinio skenavimo duomenimis.</p><div class="ot-vlst-cntr"><button class="ot-link-btn category-vendors-list-handler" data-parent-id="ISFV2_2">IAB tiekėjų sąrašas‎</button><a href="https://tcf.cookiepedia.co.uk?lang=lt" rel="noopener" target="_blank">&nbsp;|&nbsp;Peržiūrėti visą teisinį tekstą&nbsp;<span class="ot-scrn-rdr">Opens in a new Tab</span></a></div></div></div><div class="ot-accordion-layout ot-cat-item" data-optanongroupid="ISPV2_1"><button aria-expanded="false" ot-accordion="true" aria-controls="ot-desc-id-ISPV2_1" aria-labelledby="ot-header-id-ISPV2_1"></button><!-- Accordion header --><div class="ot-acc-hdr ot-always-active-group"><div class="ot-plus-minus"><span></span><span></span></div><h4 class="ot-cat-header" id="ot-header-id-ISPV2_1">Užtikrinti saugumą, užkirti kelią apgaulėms ir atlikti derinimo veiksmus</h4><div class="ot-always-active">Visada aktyvus</div></div><!-- accordion detail --><div class="ot-acc-grpcntr ot-acc-txt"><p class="ot-acc-grpdesc ot-category-desc" id="ot-desc-id-ISPV2_1">Jūsų duomenys gali būti naudojami apgaulingai veiklai stebėti ir užkirsti jai kelią, ir užtikrinti, kad sistemos ir procesai veiktų tinkamai ir saugiai.</p><div class="ot-vlst-cntr"><button class="ot-link-btn category-vendors-list-handler" data-parent-id="ISPV2_1">IAB tiekėjų sąrašas‎</button><a href="https://tcf.cookiepedia.co.uk?lang=lt" rel="noopener" target="_blank">&nbsp;|&nbsp;Peržiūrėti visą teisinį tekstą&nbsp;<span class="ot-scrn-rdr">Opens in a new Tab</span></a></div></div></div><div class="ot-accordion-layout ot-cat-item" data-optanongroupid="ISPV2_2"><button aria-expanded="false" ot-accordion="true" aria-controls="ot-desc-id-ISPV2_2" aria-labelledby="ot-header-id-ISPV2_2"></button><!-- Accordion header --><div class="ot-acc-hdr ot-always-active-group"><div class="ot-plus-minus"><span></span><span></span></div><h4 class="ot-cat-header" id="ot-header-id-ISPV2_2">Techniškai pateikti turinį arba skelbimus</h4><div class="ot-always-active">Visada aktyvus</div></div><!-- accordion detail --><div class="ot-acc-grpcntr ot-acc-txt"><p class="ot-acc-grpdesc ot-category-desc" id="ot-desc-id-ISPV2_2">Jūsų įrenginys gali priimti ir gauti informaciją, kuri jums leistų matyti skelbimus ir turinį ir su jais sąveikauti</p><div class="ot-vlst-cntr"><button class="ot-link-btn category-vendors-list-handler" data-parent-id="ISPV2_2">IAB tiekėjų sąrašas‎</button><a href="https://tcf.cookiepedia.co.uk?lang=lt" rel="noopener" target="_blank">&nbsp;|&nbsp;Peržiūrėti visą teisinį tekstą&nbsp;<span class="ot-scrn-rdr">Opens in a new Tab</span></a></div></div></div><div class="ot-accordion-layout ot-cat-item" data-optanongroupid="IFEV2_1"><button aria-expanded="false" ot-accordion="true" aria-controls="ot-desc-id-IFEV2_1" aria-labelledby="ot-header-id-IFEV2_1"></button><!-- Accordion header --><div class="ot-acc-hdr ot-always-active-group"><div class="ot-plus-minus"><span></span><span></span></div><h4 class="ot-cat-header" id="ot-header-id-IFEV2_1">Derinti ir jungti ne interneto duomenų šaltinius</h4><div class="ot-always-active">Visada aktyvus</div></div><!-- accordion detail --><div class="ot-acc-grpcntr ot-acc-txt"><p class="ot-acc-grpdesc ot-category-desc" id="ot-desc-id-IFEV2_1">Ne interneto duomenų šaltinių duomenys gali būti derinami su jūsų veiklos internete duomenimis padedant pasiekti vieno ar daugiau tikslų.</p><div class="ot-vlst-cntr"><button class="ot-link-btn category-vendors-list-handler" data-parent-id="IFEV2_1">IAB tiekėjų sąrašas‎</button><a href="https://tcf.cookiepedia.co.uk?lang=lt" rel="noopener" target="_blank">&nbsp;|&nbsp;Peržiūrėti visą teisinį tekstą&nbsp;<span class="ot-scrn-rdr">Opens in a new Tab</span></a></div></div></div><div class="ot-accordion-layout ot-cat-item" data-optanongroupid="IFEV2_2"><button aria-expanded="false" ot-accordion="true" aria-controls="ot-desc-id-IFEV2_2" aria-labelledby="ot-header-id-IFEV2_2"></button><!-- Accordion header --><div class="ot-acc-hdr ot-always-active-group"><div class="ot-plus-minus"><span></span><span></span></div><h4 class="ot-cat-header" id="ot-header-id-IFEV2_2">Susieti skirtingus įrenginius</h4><div class="ot-always-active">Visada aktyvus</div></div><!-- accordion detail --><div class="ot-acc-grpcntr ot-acc-txt"><p class="ot-acc-grpdesc ot-category-desc" id="ot-desc-id-IFEV2_2">Gali būti nustatyta, kad skirtingi įrenginiai priklauso jums ar jūsų būstui siekiant vieno ar kelių tikslų.</p><div class="ot-vlst-cntr"><button class="ot-link-btn category-vendors-list-handler" data-parent-id="IFEV2_2">IAB tiekėjų sąrašas‎</button><a href="https://tcf.cookiepedia.co.uk?lang=lt" rel="noopener" target="_blank">&nbsp;|&nbsp;Peržiūrėti visą teisinį tekstą&nbsp;<span class="ot-scrn-rdr">Opens in a new Tab</span></a></div></div></div><div class="ot-accordion-layout ot-cat-item" data-optanongroupid="IFEV2_3"><button aria-expanded="false" ot-accordion="true" aria-controls="ot-desc-id-IFEV2_3" aria-labelledby="ot-header-id-IFEV2_3"></button><!-- Accordion header --><div class="ot-acc-hdr ot-always-active-group"><div class="ot-plus-minus"><span></span><span></span></div><h4 class="ot-cat-header" id="ot-header-id-IFEV2_3">Gauti ir naudoti automatiškai siunčiamas įrenginio charakteristikas identifikavimui</h4><div class="ot-always-active">Visada aktyvus</div></div><!-- accordion detail --><div class="ot-acc-grpcntr ot-acc-txt"><p class="ot-acc-grpdesc ot-category-desc" id="ot-desc-id-IFEV2_3">Jūsų įrenginys gali būti atskirtas nuo kitų įrenginių pagal informaciją, kurią jis automatiškai siunčia, pvz., IP adresą ar naršyklės tipą.</p><div class="ot-vlst-cntr"><button class="ot-link-btn category-vendors-list-handler" data-parent-id="IFEV2_3">IAB tiekėjų sąrašas‎</button><a href="https://tcf.cookiepedia.co.uk?lang=lt" rel="noopener" target="_blank">&nbsp;|&nbsp;Peržiūrėti visą teisinį tekstą&nbsp;<span class="ot-scrn-rdr">Opens in a new Tab</span></a></div></div></div><!-- Groups sections starts --><!-- Group section ends --><!-- Accordion Group section starts --><!-- Accordion Group section ends --></section></div><section id="ot-pc-lst" class="ot-hide ot-hosts-ui ot-pc-scrollbar"><div id="ot-pc-hdr"><h3 id="ot-lst-title"><button class="ot-link-btn back-btn-handler" aria-label="Back"><svg id="ot-back-arw" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 444.531 444.531" xml:space="preserve"><title>Back Button</title><g><path fill="#656565" d="M213.13,222.409L351.88,83.653c7.05-7.043,10.567-15.657,10.567-25.841c0-10.183-3.518-18.793-10.567-25.835
                        l-21.409-21.416C323.432,3.521,314.817,0,304.637,0s-18.791,3.521-25.841,10.561L92.649,196.425
                        c-7.044,7.043-10.566,15.656-10.566,25.841s3.521,18.791,10.566,25.837l186.146,185.864c7.05,7.043,15.66,10.564,25.841,10.564
                        s18.795-3.521,25.834-10.564l21.409-21.412c7.05-7.039,10.567-15.604,10.567-25.697c0-10.085-3.518-18.746-10.567-25.978
                        L213.13,222.409z"></path></g></svg></button> <span>Performance Cookies</span></h3><div class="ot-lst-subhdr"><div class="ot-search-cntr"><p role="status" class="ot-scrn-rdr"></p><label for="vendor-search-handler" class="ot-scrn-rdr">Vendor Search</label> <input id="vendor-search-handler" type="text" placeholder="Search..." name="vendor-search-handler"> <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 -30 110 110"><title>Search Icon</title><path fill="#2e3644" d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23
                s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92
                c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17
                s-17-7.626-17-17S14.61,6,23.984,6z"></path></svg></div><div class="ot-fltr-cntr"><button id="filter-btn-handler" aria-label="Filter" aria-haspopup="true"><svg role="presentation" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 402.577 402.577" xml:space="preserve"><title>Filter Icon</title><g><path fill="#fff" d="M400.858,11.427c-3.241-7.421-8.85-11.132-16.854-11.136H18.564c-7.993,0-13.61,3.715-16.846,11.136
          c-3.234,7.801-1.903,14.467,3.999,19.985l140.757,140.753v138.755c0,4.955,1.809,9.232,5.424,12.854l73.085,73.083
          c3.429,3.614,7.71,5.428,12.851,5.428c2.282,0,4.66-0.479,7.135-1.43c7.426-3.238,11.14-8.851,11.14-16.845V172.166L396.861,31.413
          C402.765,25.895,404.093,19.231,400.858,11.427z"></path></g></svg></button></div><div id="ot-anchor"></div><section id="ot-fltr-modal"><div id="ot-fltr-cnt"><button id="clear-filters-handler">Clear</button><div class="ot-fltr-scrlcnt ot-pc-scrollbar"><div class="ot-fltr-opts"><div class="ot-fltr-opt"><div class="ot-chkbox"><input id="chkbox-id" type="checkbox" aria-checked="false" class="category-filter-handler"> <label for="chkbox-id"><span class="ot-label-txt">checkbox label</span></label> <span class="ot-label-status">label</span></div></div></div><div class="ot-fltr-btns"><button id="filter-apply-handler">Apply</button> <button id="filter-cancel-handler">Cancel</button></div></div></div></section></div></div><section id="ot-lst-cnt" class="ot-host-cnt ot-pc-scrollbar"><div id="ot-sel-blk"><div class="ot-sel-all"><div class="ot-sel-all-hdr"><span class="ot-consent-hdr">Consent</span> <span class="ot-li-hdr">Leg.Interest</span></div><div class="ot-sel-all-chkbox"><div class="ot-chkbox" id="ot-selall-hostcntr"><input id="select-all-hosts-groups-handler" type="checkbox" aria-checked="false"> <label for="select-all-hosts-groups-handler"><span class="ot-label-txt">checkbox label</span></label> <span class="ot-label-status">label</span></div><div class="ot-chkbox" id="ot-selall-vencntr"><input id="select-all-vendor-groups-handler" type="checkbox" aria-checked="false"> <label for="select-all-vendor-groups-handler"><span class="ot-label-txt">checkbox label</span></label> <span class="ot-label-status">label</span></div><div class="ot-chkbox" id="ot-selall-licntr"><input id="select-all-vendor-leg-handler" type="checkbox" aria-checked="false"> <label for="select-all-vendor-leg-handler"><span class="ot-label-txt">checkbox label</span></label> <span class="ot-label-status">label</span></div></div></div></div><div class="ot-sdk-row"><div class="ot-sdk-column"><ul id="ot-ven-lst"></ul></div></div></section></section><div class="ot-pc-footer"><div class="ot-btn-container"> <button class="save-preference-btn-handler onetrust-close-btn-handler">Patvirtinti mano pasirinkimus</button></div><!-- Footer logo --><div class="ot-pc-footer-logo"><a href="https://www.onetrust.com/products/cookie-consent/" target="_blank" rel="noopener noreferrer" style="background-image: url(&quot;https://cdn.cookielaw.org/logos/static/poweredBy_ot_logo.svg&quot;)" aria-label="Powered by OneTrust Opens in a new Tab"></a></div></div><!-- Cookie subgroup container --><!-- Vendor list link --><!-- Cookie lost link --><!-- Toggle HTML element --><!-- Checkbox HTML --><!-- plus minus--><!-- Arrow SVG element --><!-- Accordion basic element --><span class="ot-scrn-rdr" aria-atomic="true" aria-live="polite"></span><iframe class="ot-text-resize" title="onetrust-text-resize" style="position:absolute;top:-50000px;width:100em;" aria-hidden="true"></iframe></div><div id="onetrust-banner-sdk" class="otFlat ot-iab-2 bottom vertical-align-content ot-buttons-fw" tabindex="0" style="bottom: 0px"><div role="dialog" aria-describedby="onetrust-policy-text" aria-labelledby="onetrust-policy-title"><div class="ot-sdk-container"><div class="ot-sdk-row"><div id="onetrust-group-container" class="ot-sdk-columns ot-sdk-ten"><div class="banner_logo"></div><div id="onetrust-policy"><h3 id="onetrust-policy-title">Mums rūpi Jūsų privatumas</h3><p id="onetrust-policy-text">Mes ir mūsų partneriai saugojame įrenginyje esančią informaciją, tokią kaip unikalius ID slapukuose ir&nbsp;(arba) turime prie jos prieigą, kad galėtume tvarkyti asmens duomenis. Galite priimti ar tvarkyti savo parinktis spustelėdami žemiau privatumo politikos puslapyje, įskaitant Jūsų teisę prieštarauti, jeigu remiamasi teisėtu interesu, arba bet kuriuo kitu metu. Apie tokias parinktis bus informuoti mūsų partneriai ir jos neturės įtakos naršymo duomenimis.</p><div class="ot-dpd-container"><h3 class="ot-dpd-title">Mes ir mūsų partneriai tvarkome duomenis, kad teiktume:</h3><div class="ot-dpd-content"><p class="ot-dpd-desc">Naudoti tikslius geografinės vietos duomenis. Aktyviai skenuoti įrenginio charakteristikas identifikavimo tikslais. Laikyti ir (arba) gauti informaciją įrenginyje. Suasmeninti skelbimai ir turinys, skelbimų ir jų turinio vertinimas, auditorijos įžvalgos ir produktų kūrimas. <button class="ot-link-btn onetrust-vendors-list-handler">
                    Partnerių sąrašas`


    const scrapeSiteForCars = (html) => {
        const $ = cheerio.load(html)

        const elems = $('article')

        const articles = elems.slice(1)

        //console.log(articles)

        articles.each((index, element) => {

            const url = `https://autogidas.lt${$(element).children('a').attr('href')}`

            //console.log(url)
            const image = $(element).children('a').children('.right').children('.image').children('img').attr('data-src')

            console.log(image)
            const stars = $(element).children('a').children('.right').children('.description').children('.up').text().trim()
            const title = $(element).children('a').children('.right').children('.description').children('.item-title').text().trim()
            const price = $(element).children('a').children('.right').children('.description').children('.item-price').text().trim()
            //console.log(price)

            let parameters1 = $(element).children('a').children('.right').children('.description').children('.item-description').children('.primary').text().split(', ')

            let parameters2 = $(element).children('a').children('.right').children('.description').children('.item-description').children('.secondary').text().split(', ')

            //console.log(title + " " + parameters1)

            let date = parameters1[2].slice(0, parameters1[2].length - 1).trim()
            let fuelType = parameters1[1].trim()
            let gearBox = parameters1[3].trim()
            let power = parameters1[4] ? parameters1[4].trim() : ''
            let mileage = parameters2[0] ? parameters2[0].trim() : ''
            let bodyType = parameters2[1] ? parameters2[1].trim() : ''
            let city = parameters2[2] ? parameters2[2].trim() : ''



            const car = {
                title: title,
                price: price,
                url: url,
                stars: stars,
                image: image,
                date: date,
                fuelType: fuelType,
                bodyType: bodyType,
                gearBox: gearBox,
                power: power,
                mileage: mileage,
                city: city
            }

            //console.log(car)
            cars.push(car)
            // const searchTitle = $(element).children('h1').children('.js-search-title').text().trim()
            // const resultCount = $(element).children('h1').children('.result-count').text()

            // headline = `${searchTitle} " : " ${resultCount}`

            // console.log(headline)
        })




    }

    console.log(vehicle)

    let url = ''

    //fuel_id%5B32%5D=${vehicle.fuelType.id}&
    //body_type_id%5B4%5D=${vehicle.bodyType.id}&

    if (vehicle.make.name === '')
        url = `https://autogidas.lt/skelbimai/automobiliai/`
    else {
        url = `https://autogidas.lt/skelbimai/automobiliai/?
        ${vehicle.offerTypes.length > 1 ? '' : `f_434[]=${vehicle.offerTypes[0].name}&`}
        f_1%5B0%5D=${vehicle.make.name ? vehicle.make.name : ''}&
        f_model_14%5B0%5D=${vehicle.model.name ? vehicle.model.name : ''}&
        f_215=${vehicle.priceFrom}&
        f_216=${vehicle.priceTo}&
        f_41=${vehicle.yearFrom}&
        f_42=${vehicle.yearTo}&
        ${vehicle.bodyTypes.map((element, index) => `f_3%5B${index}%5D=${element}&`)}
        ${vehicle.fuelTypes.map((element, index) => `f_2%5B${index}%5D=${element}&`)}
        f_376=${vehicle.textField}`
    }

    console.log(url)

    // }
    // else {
    // url = `https://autoplius.lt/skelbimai/naudoti-automobiliai?
    //     make_id=${vehicle.make.id}&
    //     model_id=${vehicle.model.id}&
    //     make_date_from=${vehicle.yearFrom}&
    //     make_date_to=${vehicle.yearTo}&
    //     sell_price_from=${vehicle.priceFrom}&
    //     sell_price_to=${vehicle.priceTo}&
    //     qt=${vehicle.text}`

    // }

    // const scraperCall = async () => {
    //     await axios(`https://api.apify.com/v2/actor-tasks/jusadocode~url-list-download-html-task/run-sync-get-dataset-items?token=apify_api_Ii5JCFmHTI6ZJAaqhzjlKa6VzcIDMq0SAAya`)
    //         .then(response => {
    //             console.log(response)
    //             scrapeSiteForCars(response.data[0].fullHtml)
    //         })
    //         .catch(error => {
    //             console.log(error)
    //         })
    // }

    let timer
    let seconds = 0

    const scraperCall = async () => {

        timer = setInterval(() => {
            seconds++
        }, 1000);

        await client.scrape(url, { proxy_country: 'IT', wait_for_selector: ".all-items-block" }) // IT, FR, DE, SA, UK, CZ
            .then(response => {
                console.log(response)
                scrapeSiteForCars(response.content)
                clearInterval(timer)
            })
            .catch(error => {
                console.log(error)
            })
    }


    // Scrape autoplius site.

    await scraperCall()

    return (
        {
            carList: cars,
            requestTime: seconds
        }
    )
}

export default Autogidas_scraper