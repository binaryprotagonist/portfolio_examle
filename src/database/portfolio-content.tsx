import { CiTimer } from "react-icons/ci";
import {
  SiExpress,
  SiNodedotjs,
  SiMysql,
  SiSequelize,
  SiAmazonaws,
  SiPostman,
  SiNpm,
  SiMongodb,
  SiMongoose,
  SiFirebase,
  SiNginx,
  SiInsomnia,
  SiGraphql,
  SiApollographql,
} from "react-icons/si";

type data = {
  title: string;
  description: string;
  techstack: React.ElementType[];
  role: string;
  responsibilities: string[];
  url: string;
}[];

const portfolioContent: data = [
  {
    title: "BookMyPet",
    description: `Step into a Dubai-centric E-commerce oasis dedicated to pampering pets. This unique platform presents a diverse array of services catering to beloved companions. From luxurious pet boarding to meticulous grooming, expert veterinary care to engaging daycare, every pet's need is catered to. Beyond these offerings, this innovative venture extends its embrace to pet care centers, allowing them to welcome customer pets with open arms. As the architect behind this digital haven, I've meticulously designed an interface that seamlessly connects pet owners with an array of services, ensuring furry friends receive the attention they deserve. This isn't just E-commerce; it's a symphony of care, convenience, and connection. : In this application users can book all the pet-related services for their own pet in the UAE, Bookmypet consolidates all boarding, grooming, day care and veterinary services from Centers. Users can select preferred locations and dates and can find suitable centers and services easily.`,
    role: "Front-end Developer",
    responsibilities: [
      "UI Design",
      "Redux setup with graphQL Integration",
      "Smart search",
      "Managed Bookings for different services and centers",
      "API Integration",
      "Authentication flow with social media login",
      "Profile creation and Update profile",
      "Analytics, crashlytics and push notification with firebase",
    ],
    techstack: [SiNodedotjs, SiExpress, SiMysql, SiApollographql, SiGraphql],
    url: "https://apps.apple.com/in/app/bookmypet/id6443789349",
  },
  {
    title: "Saver Grocery",
    description: `Saver grocery is a React Native mobile application designed to make grocery shopping easier and more cost-effective. With this app, users can create shopping lists, search for products, and compare prices from multiple grocery stores in their area. The app also provides users with access to exclusive deals and coupons to save money on their purchases.`,
    role: "Front-end Developer",
    responsibilities: [
      "UI Design",
      "User authentication",
      "Shopping list creation and their management",
      "Product search and price comparison",
      "Integration with multiple grocery store APIs",
      "Exclusive deals and coupons for users",
      "Push notifications for deals and new product arrivals",
      "User profile and settings management",
    ],
    techstack: [SiNodedotjs, SiExpress, SiMysql, SiApollographql, SiGraphql],
    url: "https://apps.apple.com/in/app/saver-grocery/id6444906501",
  },
  {
    title: "Mum & Bub",
    description: `This app is for pregnant ladies, Admin update module for user-related to relevant information and awareness for health-related issues during pregnancy.`,
    role: "Front-end Developer",
    responsibilities: [
      "UI Design",
      "Push and Schedule Notification",
      "Modules Management",
      "Implementation of Firebase",
    ],
    techstack: [SiNodedotjs, SiExpress, SiMysql, SiApollographql, SiGraphql],
    url: "https://play.google.com/store/apps/details?id=com.iflashapps.mumsnbub",
  },
  {
    title: "QuvuLive",
    description: `Bringing the world together with music and eventually movies, podcasts, and more. connect with friends, celebrities, businesses, and brands worldwide. Share what you’re listening to and see what they’re listening and listen together regardless of location. Create your own room or pop into someone else’s. Listen to get her and chat.`,
    role: "Front-end Developer",
    responsibilities: [
      "UI Design",
      "Created front-end modules",
      "Implemented clean, smooth animations to provide an excellent user interface",
      "Coordinated with the cross - functional teams to build an app",
      "Worked as a part of a small team that includes other react native developers, QA experts, and managers",
      "Completed third party API Integration for the application",
      "Responsible for the UI design",
    ],
    techstack: [SiNodedotjs, SiExpress, SiMysql, SiApollographql, SiGraphql],
    url: "https://play.google.com/store/apps/details?id=com.roarapp",
  },
  {
    title: "OFMS",
    description: `OFMS Resident and Guard is a React Native mobile application designed for
a residential community that enables residents and guards to manage their day-to-day
activities more efficiently. With this app, residents can book community amenities, raise
complaints and requests, while guards can view and manage visitor entry and exit, and
send security alerts.`,
    role: "Front-end Developer",
    responsibilities: [
      "UI Design",
      "User registration and login for residents and guards",
      "Booking, complaint and request management for residents",
      "Visitor entry and exit management for guards",
      "Real - time visitor check -in and check - out",
      "Security alerts and notifications",
      "Push notifications for complaints, requests, and security alerts.",
    ],
    techstack: [SiNodedotjs, SiExpress, SiMysql, SiApollographql, SiGraphql],
    url: "https://play.google.com/store/apps",
  },
  {
    title: "My Fit Mantra",
    description: `The aim of this app is providing the all-in-one fitness app designed to elevate your workout
experience and help you achieve your fitness goals. Users can take coaching online and deliver an experience like
nothing your clients have ever seen before. With fitness, nutrition, and habit coaching features, plus in-app
messaging, progress tracking, and more. It’s everything you need to motivate and inspire. We pride ourselves in
providing our customers with transparency, trust and the very best service.`,
    role: "Front-end Developer",
    responsibilities: [
      "UI Design",
      "Implemented push notifications and navigation",
      "Bug fixing, ui changes and updation",
      "Feature enhancements",
      "Maintenance of application.",
    ],
    techstack: [SiNodedotjs, SiExpress, SiMysql, SiApollographql, SiGraphql],
    url: "https://play.google.com/store/apps/details?id=com.myfitmantra",
  },
  {
    title: "NuMetric.work",
    description: `Numertic is accounting software for Small businesses that works as hard as you do Create
Professional Invoices, manage expenses, send payments links, and dynamic dashboard. All you need for your
growing business.
It is the most straightforward, comprehensive accounting technology solution that small business owners rely on
to shape their future. Platform believes in taking bold steps to define what's next. Leadership demands the bravery
to evolve, and while making the right choices isn't always easy, it's invariably worthwhile.`,
    role: "Front-end Developer",
    responsibilities: [
      "Implemented push notifications and navigation",
      "Implemented pdf download and print functionality",
      "Feature enhancements",
      "Deployed on both the stores",
    ],
    techstack: [SiNodedotjs, SiExpress, SiMysql, SiApollographql, SiGraphql],
    url: "https://apps.apple.com/in/app/numetric/id1639065837",
  },
  {
    title: "NuMetric POS",
    description: ` Numertic POS is a stand alone app of Cash invoices, in which we have added the feature of create cash
invoices and provide feature of download and print receipt and invoices.`,
    role: "Front-end Developer",
    responsibilities: [
      "Design and api integrations",
      "Implemented pdf download and print functionality",
      "Deployed on both the stores",
    ],
    techstack: [SiNodedotjs, SiExpress, SiMysql, SiApollographql, SiGraphql],
    url: "https://apps.apple.com/in/app/numetric-pos/id6470201281",
  },
];

export default portfolioContent;
