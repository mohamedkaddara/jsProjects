let englishLang = {
    title : 'Multiple App',
    arabBtn : 'arabic',
    engBtn : 'english',
    h2 : 'This is a Multiple languages Website',
    introP : 'Welcome everybody to my Multiple language Website.',
    addedBy : 'Added by the web Developer: Mohamed kaddara',
    ourServices : 'Our services',
    webDesign : 'Web Design',
    webDesignP : `I'm a web designer using the best technologie at this time`,
    frontEnd : `Front-end Developer`,
    frontEndP : `I'm Front-end Developer whit big experience`,
    backEnd : `Back-end Developer`,
    backEndP : `I'm Back-end Developer using php and sql & mysql and laravel`
}

let arabLang = {
    title : 'موقع متعدد اللغات',
    arabBtn : 'العربية',
    engBtn : 'الإنجليزية',
    h2 : 'هذا موقع متعدد اللغات',
    introP : 'مرحبا بالجميع في موقعي متعدد اللغات',
    addedBy : 'تمت الإضافة بواسطة : محمد قدارة',
    ourServices : 'خدماتنا',
    webDesign : 'مصمم ويب',
    webDesignP : `أنا مصمم ويب أستخدم أحدث التكنولوجيا`,
    frontEnd : `مطور front-end`,
    frontEndP : ` أنا مطور front-enي مع خبرة كبيرة في المجال`,
    backEnd : `مطور Back-end`,
    backEndP : `أنا مطور back-end مع خبرة بالعمل مع لغة php و sql & mysql و laravel`
}
console.log(arabLang.title)

//////////////////////////////////////////////////////:
let title       = document.getElementById("title"),
    arab        = document.getElementById("arab"),
    english     = document.getElementById("english"),
    h2          = document.getElementById('h2'),
    introP      = document.getElementById('p'),
    addedBy     = document.querySelector('.introduction h3'),
    ourServices = document.querySelector('#our-service'),
    webDesign   = document.querySelector('#wd'),
    webDesignP  = document.querySelector('#wdP'),
    frontEnd    = document.querySelector('#fe'),
    frontEndP   = document.querySelector('#feP'),
    backEnd     = document.querySelector('#be'),
    backEndP    = document.querySelector('#beP');



arab.onclick = ()=>{
    setLanguage("arabic");
    localStorage.setItem("language", "arabic");
}

english.onclick = ()=>{
    setLanguage("english");
    localStorage.setItem("language", "english");
}

onload = ()=>{
    setLanguage(localStorage.getItem('language'));
}


function setLanguage(getLanguage){

    if(getLanguage === "arabic"){

        title.textContent = arabLang.title;
        arab.textContent = arabLang.arabBtn;
        english.textContent  = arabLang.engBtn;
        h2.textContent = arabLang.h2;
        introP.textContent = arabLang.introP;
        addedBy.textContent = arabLang.addedBy;
        ourServices.textContent = arabLang.ourServices;
        webDesign.textContent = arabLang.webDesign;
        webDesignP.textContent = arabLang.webDesignP;
        frontEnd.textContent = arabLang.frontEnd;
        frontEndP.textContent = arabLang.frontEndP;
        backEnd.textContent = arabLang.backEnd;
        backEndP.textContent  = arabLang.backEndP;

        document.body.classList.remove('english');
        document.body.classList.add('arabic');

    }else if(getLanguage === "english"){

        title.textContent = englishLang.title;
        arab.textContent = englishLang.arabBtn;
        english.textContent  = englishLang.engBtn;
        h2.textContent = englishLang.h2;
        introP.textContent = englishLang.introP;
        addedBy.textContent = englishLang.addedBy;
        ourServices.textContent = englishLang.ourServices;
        webDesign.textContent = englishLang.webDesign;
        webDesignP.textContent = englishLang.webDesignP;
        frontEnd.textContent = englishLang.frontEnd;
        frontEndP.textContent = englishLang.frontEndP;
        backEnd.textContent = englishLang.backEnd;
        backEndP.textContent  = englishLang.backEndP;

        document.body.classList.remove('arabic');
        document.body.classList.add('english');
    }

}