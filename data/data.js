
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
        title : {
          fa: "نمودار خطی",
          en: "Linear Chart"
        },
        link: "LinearChartPage",
      },
      {
        title : {
          fa: "رده بندی",
          en: "LeaderBoard"
        },
        link: "LeaderBoardPage",
      },
      {
        title : {
          fa: "دکمه ها",
          en: "Buttons"
        },
        link: "Buttons",
      },
      {
        title : {
          fa: "نئون",
          en: "Neon"
        },
        link: "NeonPage",
      }
    ]
  },
  {
    id: "menu2",
    title : {
      fa: "درباره من",
      en: "About me"
    },
    link: "",
    subItems : [
      {
        title : {
          fa: "اولین از دومین",
          en: "first"
        },
        link: "/",
      },
      {
        title : {
          fa: "دومین از دومین",
          en: "second"
        },
        link: "/",
      }
    ]
  }
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
    imageUrl: "_nuxt/assets/me.svg"
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
    imageUrl: "_nuxt/assets/me.svg"
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
    imageUrl: "_nuxt/assets/me.svg"
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
    imageUrl: "_nuxt/assets/me.svg"
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
    imageUrl: "_nuxt/assets/me.svg"
  },
];
export const flipCardData = [
  {
    id: "flip1",
    front: {
      imageURL: "_nuxt/assets/chart.svg"
    },
    back: {
      title: {
        fa: "یه نمودار خطی باحال اینجا گذاشتم",
        en: "There is a nice Linear-Chart here"
      },
      pageLink: "/LinearChart",
    }
  },
  {
    id: "flip2",
    front: {
      imageURL: "_nuxt/assets/2.svg"
    },
    back: {
      title: {
        fa: "یه نمودار خطی باحال اینجا گذاشتم",
        en: "There is a nice Linear-Chart here"
      },
      pageLink: "/LinearChart",
    }
  },
  {
    id: "flip3",
    front: {
      imageURL: "_nuxt/assets/1.svg"
    },
    back: {
      title: {
        fa: "یه نمودار خطی باحال اینجا گذاشتم",
        en: "There is a nice Linear-Chart here"
      },
      pageLink: "/LinearChart",
    }
  },
  {
    id: "flip4",
    front: {
      imageURL: "_nuxt/assets/3.svg"
    },
    back: {
      title: {
        fa: "یه نمودار خطی باحال اینجا گذاشتم",
        en: "There is a nice Linear-Chart here"
      },
      pageLink: "/LinearChart",
    }
  },
];
export const flip3DCardData = [
  {
    id: "flip3D1",
    front: {
      imageURL: "_nuxt/assets/2.svg"
    },
    back: {
      title: {
        fa: "یه نمودار خطی باحال اینجا گذاشتم",
        en: "There is a nice Linear-Chart here"
      },
      pageLink: "/LinearChart",
    }
  },
  {
    id: "flip3D2",
    front: {
      imageURL: "_nuxt/assets/chart.svg"
    },
    back: {
      title: {
        fa: "یه نمودار خطی باحال اینجا گذاشتم",
        en: "There is a nice Linear-Chart here"
      },
      pageLink: "/LinearChart",
    }
  },
  {
    id: "flip3D3",
    front: {
      imageURL: "_nuxt/assets/1.svg"
    },
    back: {
      title: {
        fa: "یه نمودار خطی باحال اینجا گذاشتم",
        en: "There is a nice Linear-Chart here"
      },
      pageLink: "/LinearChart",
    }
  },
  {
    id: "flip3D4",
    front: {
      imageURL: "_nuxt/assets/3.svg"
    },
    back: {
      title: {
        fa: "یه نمودار خطی باحال اینجا گذاشتم",
        en: "There is a nice Linear-Chart here"
      },
      pageLink: "/LinearChart",
    }
  }
];
export const elevateCardData = [
  {
    id: "elevate1",
    front: {
      imageURL: "_nuxt/assets/3.svg"
    },
    back: {
      title: {
        fa: "یه نمودار خطی باحال اینجا گذاشتم",
        en: "There is a nice Linear-Chart here"
      },
      pageLink: "/LinearChart",
    }
  },
  {
    id: "elevate2",
    front: {
      imageURL: "_nuxt/assets/1.svg"
    },
    back: {
      title: {
        fa: "یه نمودار خطی باحال اینجا گذاشتم",
        en: "There is a nice Linear-Chart here"
      },
      pageLink: "/LinearChart",
    }
  },
  {
    id: "elevate3",
    front: {
      imageURL: "_nuxt/assets/2.svg"
    },
    back: {
      title: {
        fa: "یه نمودار خطی باحال اینجا گذاشتم",
        en: "There is a nice Linear-Chart here"
      },
      pageLink: "/LinearChart",
    }
  },
  {
    id: "elevate4",
    front: {
      imageURL: "_nuxt/assets/chart.svg"
    },
    back: {
      title: {
        fa: "یه نمودار خطی باحال اینجا گذاشتم",
        en: "There is a nice Linear-Chart here"
      },
      pageLink: "/LinearChart",
    }
  },
];


