
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
      //       //   id:"sub13",
      //       //   title : {
      //       //     fa: "دکمه ها",
      //       //     en: "Buttons"
      //       //   },
      //       //   link: "Buttons",
      //       // },
      //       // {
      //       //   id:"sub14",
      //       //   title : {
      //       //     fa: "نئون",
      //       //     en: "Neon"
      //       //   },
      //       //   link: "NeonPage",
      //       // },
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
      // {
      //   id:"sub21",
      //   title : {
      //     fa: "MBTI",
      //     en: "MBTI"
      //   },
      //   link: "MBTI",
      // },
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
  //     imageUrl: "1.svg"
  //   },
  //   back: {
  //     title: {
  //       fa: "دکمه",
  //       en: "Button"
  //     },
  //     pageLink: "/Buttons",
  //   }
  // },
  // {
  //   id: "work4",
  //   front: {
  //     imageUrl: "3.svg"
  //   },
  //   back: {
  //     title: {
  //       fa: "متن نئونی",
  //       en: "Neon Text"
  //     },
  //     pageLink: "/NeonPage",
  //   }
  // },
  {
    id: "work5",
    front: {
      imageUrl: "swipe.svg"
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
    id: "work7",
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
];
export const slider = [
  {
    summary: {
      fa: "سلام، من محمد هنری هستم و این وبسایت به عنوان نمونه کار تهیه شده است!!!",
      en: "Hi, I'm Mohammad Honari and this website is designed as a work sample"
    },
    detail: {
      fa: "سلام دوباره... این وبسایت روی فریم ورک Nuxt اجرا شده. در برخی قسمت ها دیتا از API ساده نوشته شده با python گرفته میشه.سورس کد بک اند و فرانت اند روی git-hub هست و اگر مایل باشید میتونید یه نگاهی بهش بندازید. جستوجو روی وبسایت رو شروع کنید شاید چیزی پیدا کردید که براتون جالب بود... شاید همین موجهای متحرک که همین پایینه!!!",
      en: "Hi again... this website is implemented on Nuxt framework. In some parts data is fetching from a simple API coded whit python. back-end and front-end source code is available on git-hub and you can have a look at it if you wish. begin your explore. there may be something that you find it interesting... Even this Animated Waves just below!!!"
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
  // {
  //   summary: {
  //     fa: "چند تا دکمه اصلی!!!",
  //     en: "Some CTA Buttons"
  //   },
  //   detail: {
  //     fa: "سلام دوباره..\ این وبسایت روی فریم ورک Nuxt اجرا شده. در برخی قسمت ها دیتا از API ساده نوشته شده با python گرفته میشه.سورس کد بک اند و فرانت اند روی git-hub هست و اگر مایل باشید میتونید یه نگاهی بهش بندازید!!!",
  //     en: "Hi again... this website is implemented on Nuxt framework. In some parts data is fetching from a simple API coded whit python. back-end and front-end source code is available on git-hub and you can have a look at it if you wish!!!"
  //   },
  //   imageUrl: "me.svg"
  // },
  // {
  //   summary: {
  //     fa: "متن نئونی!!!",
  //     en: "Neon Text"
  //   },
  //   detail: {
  //     fa: "سلام دوباره..\ این وبسایت روی فریم ورک Nuxt اجرا شده. در برخی قسمت ها دیتا از API ساده نوشته شده با python گرفته میشه.سورس کد بک اند و فرانت اند روی git-hub هست و اگر مایل باشید میتونید یه نگاهی بهش بندازید!!!",
  //     en: "Hi again... this website is implemented on Nuxt framework. In some parts data is fetching from a simple API coded whit python. back-end and front-end source code is available on git-hub and you can have a look at it if you wish!!!"
  //   },
  //   imageUrl: "me.svg"
  // },
  {
    summary: {
      fa: "سوایپ در بروزر!!!",
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
      fa: "مقایسه رنگ کفش!!!",
      en: "Shoe color comparision"
    },
    detail: {
      fa: "این کامپوننت با استفاده از دنبال کردن موقعیت موس رو صفحه طراحی شده. در مرحله بعد یکی از عکس ها با clip-path به مقدار لازم نشون داده میشه.",
      en: "This component designed with tracking mouse position on screen. At the next stage One of pictures appear as client want with clip-path"
    },
    imageUrl: "shoe.svg"
  },
];
