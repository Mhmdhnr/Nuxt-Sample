
export const menu = [
  {
    id: "menu1",
    title : {
      fa: "نمونه کارها",
      en: "Work Samples"
    },
    link: "",
    subItems : [
      {
        id:"sub11",
        title : {
          fa: "نمودار",
          en: "Chart"
        },
        link: "LinearChartPage",
      },
      {
        id:"sub12",
        title : {
          fa: "رده بندی",
          en: "Board"
        },
        link: "LeaderBoardPage",
      },
      {
        id:"sub13",
        title : {
          fa: "دکمه ها",
          en: "Buttons"
        },
        link: "Buttons",
      },
      {
        id:"sub14",
        title : {
          fa: "نئون",
          en: "Neon"
        },
        link: "NeonPage",
      },
      {
        id:"sub15",
        title : {
          fa: "سوایپ",
          en: "Swipe"
        },
        link: "SwipePage",
      },
      {
        id:"sub16",
        title : {
          fa: "گالری",
          en: "Gallery"
        },
        link: "Shop",
      }
    ]
  },
  {
    id: "menu2",
    title : {
      fa: "آزمون ها",
      en: "Tests"
    },
    link: "",
    subItems : [
      {
        id:"sub21",
        title : {
          fa: "MBTI",
          en: "MBTI"
        },
        link: "MBTI",
      },
      {
        id:"sub22",
        title : {
          fa: "Raven",
          en: "Raven"
        },
        link: "Raven",
      }
    ]
  }
];

export const workCards = [
  {
    id: "work1",
    front: {
      imageUrl: "chart.svg"
    },
    back: {
      title: {
        fa: "نمودار خطی",
        en: "Linear-Chart"
      },
      pageLink: "/LinearChartPage",
    }
  },
  {
    id: "work2",
    front: {
      imageUrl: "2.svg"
    },
    back: {
      title: {
        fa: "جدول رده بندی",
        en: "Leader Board"
      },
      pageLink: "/LeaderBoardPage",
    }
  },
  {
    id: "work3",
    front: {
      imageUrl: "1.svg"
    },
    back: {
      title: {
        fa: "دکمه",
        en: "Button"
      },
      pageLink: "/Buttons",
    }
  },
  {
    id: "work4",
    front: {
      imageUrl: "3.svg"
    },
    back: {
      title: {
        fa: "متن نئونی",
        en: "Neon Text"
      },
      pageLink: "/NeonPage",
    }
  },
  {
    id: "work5",
    front: {
      imageUrl: "1.svg"
    },
    back: {
      title: {
        fa: "سوایپ در بروزر",
        en: "Swipe in browser"
      },
      pageLink: "/SwipePage",
    }
  },
  {
    id: "work6",
    front: {
      imageUrl: "2.svg"
    },
    back: {
      title: {
        fa: "گالری کفش!",
        en: "Show Gallery"
      },
      pageLink: "/Shop",
    }
  },
];
export const slider = [
  {
    summary: {
      fa: "سلام، من محمد هنری هستم و این وبسایت به عنوان نمونه کار تهیه شده است!!!",
      en: "Hi, I'm Mohammad Honari and this website is designed as a work sample"
    },
    detail: {
      fa: "سلام دوباره..\ این وبسایت روی فریم ورک Nuxt اجرا شده. در برخی قسمت ها دیتا از API ساده نوشته شده با python گرفته میشه.سورس کد بک اند و فرانت اند روی git-hub هست و اگر مایل باشید میتونید یه نگاهی بهش بندازید. جستوجو روی وبسایت رو شروع کنید شاید چیزی پیدا کردید که براتون جالب بود... شاید همین موجهای متحرک که همین پایینه!!!",
      en: "Hi again... this website is implemented on Nuxt framework. In some parts data is fetching from a simple API coded whit python. back-end and front-end source code is available on git-hub and you can have a look at it if you wish. begin your explore. there may be something that you find it interesting... Even this Animated Waves just below!!!"
    },
    imageUrl: "me.svg"
  },
  {
    summary: {
      fa: "این یک چارت خطی است!!!",
      en: "This is a linear chart"
    },
    detail: {
      fa: "سلام دوباره..\ این وبسایت روی فریم ورک Nuxt اجرا شده. در برخی قسمت ها دیتا از API ساده نوشته شده با python گرفته میشه.سورس کد بک اند و فرانت اند روی git-hub هست و اگر مایل باشید میتونید یه نگاهی بهش بندازید!!!",
      en: "Hi again... this website is implemented on Nuxt framework. In some parts data is fetching from a simple API coded whit python. back-end and front-end source code is available on git-hub and you can have a look at it if you wish!!!"
    },
    imageUrl: "me.svg"
  },
  {
    summary: {
      fa: "این یک جدول رده بندی است!!!",
      en: "This is a LeaderBoard"
    },
    detail: {
      fa: "سلام دوباره..\ این وبسایت روی فریم ورک Nuxt اجرا شده. در برخی قسمت ها دیتا از API ساده نوشته شده با python گرفته میشه.سورس کد بک اند و فرانت اند روی git-hub هست و اگر مایل باشید میتونید یه نگاهی بهش بندازید!!!",
      en: "Hi again... this website is implemented on Nuxt framework. In some parts data is fetching from a simple API coded whit python. back-end and front-end source code is available on git-hub and you can have a look at it if you wish!!!"
    },
    imageUrl: "me.svg"
  },
  {
    summary: {
      fa: "چند تا دکمه اصلی!!!",
      en: "Some CTA Buttons"
    },
    detail: {
      fa: "سلام دوباره..\ این وبسایت روی فریم ورک Nuxt اجرا شده. در برخی قسمت ها دیتا از API ساده نوشته شده با python گرفته میشه.سورس کد بک اند و فرانت اند روی git-hub هست و اگر مایل باشید میتونید یه نگاهی بهش بندازید!!!",
      en: "Hi again... this website is implemented on Nuxt framework. In some parts data is fetching from a simple API coded whit python. back-end and front-end source code is available on git-hub and you can have a look at it if you wish!!!"
    },
    imageUrl: "me.svg"
  },
  {
    summary: {
      fa: "متن نئونی!!!",
      en: "Neon Text"
    },
    detail: {
      fa: "سلام دوباره..\ این وبسایت روی فریم ورک Nuxt اجرا شده. در برخی قسمت ها دیتا از API ساده نوشته شده با python گرفته میشه.سورس کد بک اند و فرانت اند روی git-hub هست و اگر مایل باشید میتونید یه نگاهی بهش بندازید!!!",
      en: "Hi again... this website is implemented on Nuxt framework. In some parts data is fetching from a simple API coded whit python. back-end and front-end source code is available on git-hub and you can have a look at it if you wish!!!"
    },
    imageUrl: "me.svg"
  },
  {
    summary: {
      fa: "سوایپ در بروزر!!!",
      en: "Swipe in browser"
    },
    detail: {
      fa: "سلام دوباره..\ این وبسایت روی فریم ورک Nuxt اجرا شده. در برخی قسمت ها دیتا از API ساده نوشته شده با python گرفته میشه.سورس کد بک اند و فرانت اند روی git-hub هست و اگر مایل باشید میتونید یه نگاهی بهش بندازید!!!",
      en: "Hi again... this website is implemented on Nuxt framework. In some parts data is fetching from a simple API coded whit python. back-end and front-end source code is available on git-hub and you can have a look at it if you wish!!!"
    },
    imageUrl: "me.svg"
  },
];
