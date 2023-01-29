var date = new Date();
var h = date.getHours();
        if(h >= 6 && h <= 18){
            var headHTML = document.getElementsByTagName('head')[0].innerHTML;
            headHTML    += '    <link rel="stylesheet" href="css/StylePc1080pDay.css">\r\n    <link rel="stylesheet" href="../../../css/StylePc1080pDay.css">';
            document.getElementsByTagName('head')[0].innerHTML = headHTML;
        }else {
            var headHTML = document.getElementsByTagName('head')[0].innerHTML;
            headHTML    += '    <link rel="stylesheet" href="css/StylePc1080pNight.css">\r\n    <link rel="stylesheet" href="../../../css/StylePc1080pNight.css">';
            document.getElementsByTagName('head')[0].innerHTML = headHTML;
        }