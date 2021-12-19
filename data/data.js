export const links = {
  social: [
    {
      title: {
        fa: 'اینستاگرام',
        en: 'Instagram'
      },
      link: 'https://instagram.com/mhmd_honari',
      icon: 'instagram.svg'
    },
    {
      title: {
        fa: 'واتساپ',
        en: 'Whatsapp'
      },
      link: 'https://wa.me/+989354162124',
      icon: 'whatsapp.svg'
    },
  ],
  github: [
    {
      title: {
        fa: 'کد فرانت اند',
        en: 'Front-end'
      },
      link: 'https://github.com/Mhmdhnr/Nuxt-Sample',
      icon: 'github.svg'
    },
    {
      title: {
        fa: 'کد بک اند',
        en: 'Back-end'
      },
      link: 'https://github.com/Mhmdhnr/Python-Nuxt',
      icon: 'github.svg'
    },
  ]
};
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
      // {
      //   id:"sub15",
      //   title : {
      //     fa: "سوایپ",
      //     en: "Swipe"
      //   },
      //   link: "SwipePage",
      // },
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
          fa: "تست MBTI",
          en: "MBTI Test"
        },
        link: "MBTI",
      },
      {
        id:"sub22",
        title : {
          fa: "تست هالند",
          en: "Holland Test"
        },
        link: "Holland",
      },
      {
        id:"sub23",
        title : {
          fa: "تست اُکانر",
          en: "O'connor Test"
        },
        link: "Johnson",
      },
      {
        id:"sub24",
        title : {
          fa: "تست ریون",
          en: "Raven Test"
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
      imageUrl: "LB.svg"
    },
    back: {
      title: {
        fa: "جدول رده بندی",
        en: "Leader Board"
      },
      pageLink: "/LeaderBoardPage",
    }
  },
  // {
  //   id: "work3",
  //   front: {
  //     imageUrl: "swipe.svg"
  //   },
  //   back: {
  //     title: {
  //       fa: "سوایپ در بروزر",
  //       en: "Swipe in browser"
  //     },
  //     pageLink: "/SwipePage",
  //   }
  // },
  {
    id: "work4",
    front: {
      imageUrl: "shoe.svg"
    },
    back: {
      title: {
        fa: "گالری کفش!",
        en: "Show Gallery"
      },
      pageLink: "/Shop",
    }
  },
  {
    id: "work5",
    front: {
      imageUrl: "raven.svg"
    },
    back: {
      title: {
        fa: "تست هوش ریون",
        en: "Raven IQ test"
      },
      pageLink: "/Raven",
    }
  },
  {
    id: "work6",
    front: {
      imageUrl: "INTP.png"
    },
    back: {
      title: {
        fa: "تست شخصیت شناسی MBTI",
        en: "MBTI type test"
      },
      pageLink: "/MBTI",
    }
  },
  {
    id: "work7",
    front: {
      imageUrl: "holland.svg"
    },
    back: {
      title: {
        fa: "تست هالند",
        en: "Holland Test"
      },
      pageLink: "/Holland",
    }
  },
  {
    id: "work8",
    front: {
      imageUrl: "johnson.svg"
    },
    back: {
      title: {
        fa: "تست اُکانر",
        en: "O'connor Test"
      },
      pageLink: "/Johnson",
    }
  },
];
export const slider = [
  {
    summary: {
      fa: "سلام، من محمد هنری هستم و این وبسایت به عنوان نمونه کار تهیه شده است.",
      en: "Hi, I'm Mohammad Honari and this website is designed as a work sample"
    },
    detail: {
      fa: "سلام دوباره... این وبسایت روی فریم ورک Nuxt اجرا شده. در برخی قسمت ها دیتا از API ساده نوشته شده با python گرفته میشه.سورس کد بک اند و فرانت اند روی git-hub هست و اگر مایل باشید میتونید یه نگاهی بهش بندازید. جستوجو روی وبسایت رو شروع کنید شاید چیزی پیدا کردید که براتون جالب بود... شاید همین موجهای متحرک که همین پایینه.",
      en: "Hi again... this website is implemented on Nuxt framework. In some parts data is fetching from a simple API coded whit python. back-end and front-end source code is available on git-hub and you can have a look at it if you wish. begin your explore. there may be something that you find it interesting... Even this Animated Waves just below"
    },
    imageUrl: "me.svg"
  },
  {
    summary: {
      fa: "این یک چارت خطی است که با اعداد تصادفی که از api گرفته میشه رسم میشه!!! شما میتونید تعداد داده رو تغییر بدید.",
      en: "This is a linear chart which is drown using random numbers from core api!!! You can change the data count."
    },
    detail: {
      fa: "این کامپوننت یه dynamic svg با استفاده از اعداد دریافت شده میسازه و با تغییر تعداد دیتا درخواست جدیدی برای دیتای جدید به api ارسال میشه و دوباره نمودار رو رسم میکنه.",
      en: "This component create a dynamic svg using received data from api and by changing data count, new request for new set of data will be sent to the api and the chart will drown again."
    },
    imageUrl: "chart.svg"
  },
  {
    summary: {
      fa: "این یک جدول رده بندی است که رده مخاطب همیشه نشون داده میشه.",
      en: "This is a LeaderBoard which client rank is always visible. "
    },
    detail: {
      fa: "در این کامپوننت از Intersection observer استفاده شده. وقتی رده مورد نظر توی جدول قرار گرفته باشه سر جای اصلیشه ولی وقتی بالا یا پایین محدوده قرار میگیره به صورت فیکس بالا یا پایین قرار میگیره!!! اسامی دندوم از api گرفته میشوند.",
      en: "This component is using intersection observer. when specific rank is inside the table area it remain at own location and when is below or under area gets fix at top or bottom of root!!! Random names are received from api."
    },
    imageUrl: "LB.svg"
  },
  {
    summary: {
      fa: "سوایپ در بروزر",
      en: "Swipe in browser"
    },
    detail: {
      fa: "در این قسمت از جاوا اسکریپت برای مشاهده کردن شروع لمس صفحه، حرکت انگشت و رها کردن صفحه استفاده شده و با انحام محاسبه روی این اعداد جهت کشیده شدن انگشت رو تشخیص میده!!! برای امتحان کردنش حتما بروزر رو در حالت موبایل قرار بدید.",
      en: "In this part I used javascript to observe and track touch start, touch move and touch release and with some calculations swipe direction is recognized!!! Set browser in Mobile view to test."
    },
    imageUrl: "swipe.svg"
  },
  {
    summary: {
      fa: "تست هوش پیش رونده ریون",
      en: "Raven progressive IQ test"
    },
    detail: {
      fa: "آزمون پیشرونده ریون یکی آزمون استاندارد برای اندازه گیری هوش منطقی است.سوالات، گزینه ها و سایر پارامتر ها و همین طور محاسبه نتایج از api گرفته میشه.",
      en: "Raven progressive test is a standard test to determine logical intelligence quality. Questions, choices and other parameters and also the calculation of result comes from the api."
    },
    imageUrl: "raven.svg"
  },
  {
    summary: {
      fa: "مقایسه رنگ کفش",
      en: "Shoe color comparision"
    },
    detail: {
      fa: "این کامپوننت با استفاده از دنبال کردن موقعیت موس رو صفحه طراحی شده. در مرحله بعد یکی از عکس ها با clip-path به مقدار لازم نشون داده میشه.",
      en: "This component designed with tracking mouse position on screen. At the next stage One of pictures appear as client want with clip-path"
    },
    imageUrl: "shoe.svg"
  },
  {
    summary: {
      fa: "تست شخصیت MBTI",
      en: "MBTI type test"
    },
    detail: {
      fa: "تست شخصیت شناسی MBTI یک تست استاندارد برای برای تعیین تیپ شخصیتی شما از بین 16 تیپ شخصیتی موجود است.",
      en: "MBTI type test is an standard test to determine your type from 16 available types."
    },
    imageUrl: "INTP.png"
  },
  {
    summary: {
      fa: "تست هالند. میزان علاقه خود به کارهای زیر را انتخاب کنید.",
      en: "Holland test"
    },
    detail: {
      fa: "وقتی کارهایی را انجام می‌دهید که دوست دارید، از کار خود لذت می‌برید. کدهای تست شخصیت شناسی هالند مجموعه‌ای از انواع شخصیت است که توسط روانشناس جان ل. هالند در دهه ۱۹۷۰ ساخته‌شده است. دکتر هالند معتقد است که مردم بهترین عملکرد خود را در محیط‌های کاری‌ای نشان می‌دهند که با ترجیحات و علاقه‌مندی‌هایشان مطابقت دارد.",
      en: ""
    },
    imageUrl: "holland.svg"
  },
  {
    summary: {
      fa: "تست استعدادیابی جانسون اکانر. قابل استفاده برای تعیین میزان استعداد شغلی در افراد.",
      en: "Holland test"
    },
    detail: {
      fa: "وقتی کارهایی را انجام می‌دهید که دوست دارید، از کار خود لذت می‌برید. کدهای تست شخصیت شناسی هالند مجموعه‌ای از انواع شخصیت است که توسط روانشناس جان ل. هالند در دهه ۱۹۷۰ ساخته‌شده است. دکتر هالند معتقد است که مردم بهترین عملکرد خود را در محیط‌های کاری‌ای نشان می‌دهند که با ترجیحات و علاقه‌مندی‌هایشان مطابقت دارد.",
      en: ""
    },
    imageUrl: "johnson.svg"
  },
];
export const colorPicker = {
  light: {
    primary: [
      'hsl(0, 100%, 70%)',
      'hsl(20, 100%, 70%)',
      'hsl(40, 100%, 70%)',
      'hsl(60, 100%, 50%)',
      'hsl(80, 100%, 70%)',
      'hsl(100, 100%, 70%)',
      'hsl(120, 100%, 70%)',
      'hsl(140, 100%, 70%)',
      'hsl(160, 100%, 70%)',
      'hsl(180, 100%, 70%)',
      'hsl(200, 100%, 70%)',
      'hsl(220, 100%, 70%)',
      'hsl(240, 100%, 70%)',
      'hsl(260, 100%, 70%)',
      'hsl(280, 100%, 70%)',
      'hsl(300, 100%, 70%)',
      'hsl(320, 100%, 70%)',
      'hsl(340, 100%, 70%)',
    ],
    text: [
      '#111',
      '#222',
      '#333',
      '#444',
      '#555',
      '#666',
      'hsl(0, 40%, 40%)',
      'hsl(60, 40%, 40%)',
      'hsl(120, 40%, 40%)',
      'hsl(180, 40%, 40%)',
      'hsl(240, 40%, 40%)',
      'hsl(300, 40%, 40%)',
    ],
    bg: [
      '#ddd',
      '#eee',
      '#fff',
      'hsl(0, 20%, 90%)',
      'hsl(40, 20%, 90%)',
      'hsl(80, 20%, 90%)',
      'hsl(120, 20%, 90%)',
      'hsl(160, 20%, 90%)',
      'hsl(200, 20%, 90%)',
      'hsl(240, 20%, 90%)',
      'hsl(280, 20%, 90%)',
      'hsl(320, 20%, 90%)',
    ],
  },
  dark: {
    primary: [
      'hsl(0, 80%, 40%)',
      'hsl(20, 80%, 40%)',
      'hsl(40, 80%, 40%)',
      'hsl(60, 80%, 40%)',
      'hsl(80, 80%, 40%)',
      'hsl(100, 80%, 40%)',
      'hsl(120, 80%, 40%)',
      'hsl(140, 80%, 40%)',
      'hsl(160, 80%, 40%)',
      'hsl(180, 80%, 40%)',
      'hsl(200, 80%, 40%)',
      'hsl(220, 80%, 40%)',
      'hsl(240, 80%, 40%)',
      'hsl(260, 80%, 40%)',
      'hsl(280, 80%, 40%)',
      'hsl(300, 80%, 40%)',
      'hsl(320, 80%, 40%)',
      'hsl(340, 80%, 40%)',
    ],
    text: [
      '#fff',
      '#eee',
      '#ddd',
      '#ccc',
      '#bbb',
      '#aaa',
      'hsl(0, 30%, 90%)',
      'hsl(60, 30%, 90%)',
      'hsl(120, 30%, 90%)',
      'hsl(180, 30%, 90%)',
      'hsl(240, 30%, 90%)',
      'hsl(300, 30%, 90%)',
    ],
    bg: [
      '#000',
      '#111',
      '#222',
      'hsl(0, 50%, 10%)',
      'hsl(40, 50%, 10%)',
      'hsl(80, 50%, 10%)',
      'hsl(120, 50%, 10%)',
      'hsl(160, 50%, 10%)',
      'hsl(200, 50%, 10%)',
      'hsl(240, 50%, 10%)',
      'hsl(280, 50%, 10%)',
      'hsl(320, 50%, 10%)',
    ]
  }
};
