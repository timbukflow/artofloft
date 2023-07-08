<script src="js/vendor/modernizr-3.6.0.min.js"></script>
<script src="https://code.jquery.com/jquery-3.3.1.min.js" integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8=" crossorigin="anonymous"></script>
<script>window.jQuery || document.write('<script src="js/vendor/jquery-3.3.1.min.js"><\/script>')</script>
<script src="js/plugins.js"></script>
<script src="js/main.js"></script>

<div id="cookiebanner">
  <p>Wir verwenden Cookies, um Ihnen das beste Online-Erlebnis zu bieten. Mit Ihrer Zustimmung akzeptieren Sie die Verwendung von Cookies.</p>
  <button id="acceptBtn">Okay</button>
  <button id="declineBtn">Nein, danke</button>
</div>

<script async src="https://www.googletagmanager.com/gtag/js?id=G-BYET4V3YZL"></script>
<script>
    window.dataLayer = window.dataLayer || [];
    function gtag() {
        dataLayer.push(arguments);
    }
    gtag('js', new Date());

    var trackingID = 'G-BYET4V3YZL';
    var disableString = 'ga-disable-' + trackingID;

    function accept() {
        var expirationDate = new Date();
        expirationDate.setDate(expirationDate.getDate() + 365);
        document.cookie = 'accepted=yes, i accept google analytics; expires=' + expirationDate.toUTCString() + '; path=/; SameSite=None; Secure';
        document.getElementById('cookiebanner').remove();
        gtag('config', trackingID, {
            'anonymize_ip': true,
            'allow_google_signals': false,
            'allow_ad_personalization_signals': false
        });
    }

    function decline() {
        var expirationDate = new Date();
        expirationDate.setDate(expirationDate.getDate() + 365);
        document.cookie = disableString + '=true; expires=' + expirationDate.toUTCString() + '; path=/; SameSite=None; Secure';
        document.getElementById('cookiebanner').remove();
    }

    function showBanner() {
        var banner = document.getElementById('cookiebanner');
        banner.classList.add('visible');
    }

    document.getElementById('acceptBtn').addEventListener('click', accept);
    document.getElementById('declineBtn').addEventListener('click', decline);

    if (document.cookie.indexOf(disableString + '=true') > -1) {
        window[disableString] = true;
        document.getElementById('cookiebanner').remove();
    } else if (document.cookie.indexOf('accepted=') >= 0) {
        accept();
    } else {
        setTimeout(showBanner, 3500);
    }
</script>

