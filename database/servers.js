const servers = [
  {
    name: "codedamn",
    image: "https://codedamn.com/assets/images/blacklogo.jpg",
    totalmembers: 5034,
    peak: 255,
    channels: [
      {
        name: "Announcment",
      },
      {
        name: "Rules",
      },
      {
        name: "Bot Activity",
      },
      {
        name: "Course-Request",
      },
      {
        name: "Introdcution",
      },
      {
        name: "General",
      },
      {
        name: "i-learned-today",
      },
      {
        name: "career-advice",
      },
    ],
    members: [
      {
        name: "Debajyoti Saha",
        image:
          "https://lh3.googleusercontent.com/a-/AOh14GgehZ92keFYfw3n7XRdkF_jt03n4F0_cjdYFyPElA=s96-c",
      },
      {
        name: "Itachi Uciha",
        image:
          "https://lh3.googleusercontent.com/a-/AOh14GgvQ_Mv8Q3DQ7GwevyjJlWwE2-4MEsCQW3Zphbx=s96-c",
      },
      {
        name: "Nikhil Raj",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMxs6WomVTQHgGHG7LmEg_MWy2npCBGjAvMA&usqp=CAU",
      },
      {
        name: "kingshuk Sarkar",
        image:
          "https://lh3.googleusercontent.com/3b-ob2U1ZnEB5Rxyk233OYb82EWTpYvlOofpYGyzLJNdjRAWzZCElMmr2jUcGYw0gRnsTQ0nLuwOdSlbtS_fVJdyLwWhTbf_TQ-rkw=w600",
      },
      {
        name: "Parthib Dhar",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzhkK118ZYpfQW8UJ6VqYSt2j-rYEJ4PNch-LoqKj8dttHi5jpUCnUfgO6s9O1zyFRFrk&usqp=CAU",
      },
      {
        name: "Anubhab Halder",
        image:
          "https://better-default-discord.netlify.app/Icons/Gradient-Red.png",
      },
    ],
  },
  {
    name: "Java Script",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/2048px-Unofficial_JavaScript_logo_2.svg.png",
    members: 1081,
    peak: 135,
    channels: [
      {
        name: "Announcment",
      },
      {
        name: "Rules",
      },
      {
        name: "General",
      },
      {
        name: "Javascript is Love",
      },
      {
        name: "Introdcution",
      },
      {
        name: "Beginner",
      },
      {
        name: "Intermediate",
      },
      {
        name: "Expert",
      },
      {
        name: "God!",
      },
      {
        name: "Twitter Comunnity",
      },
    ],
    members: [
      {
        name: "Debajyoti Saha",
        image:
          "https://lh3.googleusercontent.com/a-/AOh14GgehZ92keFYfw3n7XRdkF_jt03n4F0_cjdYFyPElA=s96-c",
      },
      {
        name: "kingshuk Sarkar",
        image:
          "https://lh3.googleusercontent.com/3b-ob2U1ZnEB5Rxyk233OYb82EWTpYvlOofpYGyzLJNdjRAWzZCElMmr2jUcGYw0gRnsTQ0nLuwOdSlbtS_fVJdyLwWhTbf_TQ-rkw=w600",
      },
      {
        name: "Parthib Dhar",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzhkK118ZYpfQW8UJ6VqYSt2j-rYEJ4PNch-LoqKj8dttHi5jpUCnUfgO6s9O1zyFRFrk&usqp=CAU",
      },
      {
        name: "Anubhab Halder",
        image:
          "https://better-default-discord.netlify.app/Icons/Gradient-Red.png",
      },
    ],
  },
  {
    name : "Tailwind",
    image : "data:image/png;base64,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",
    totalmembers: 10254,
    peak: 495,
    channels : [
        {
            name: "Announcment"
        },
        {
            name: "Rules"
        },
        {
            name:"Vanilla CSS"
        },
        {
            name: "Update-Request"
        },
        {
            name: "Introdcution"
        },
        {
            name: "Framework Support"
        },
        {
            name: "New CLI"
        },
        {
            name: "Post-CSS"
        },
        {
            name: "Beginer"
        },
        {
            name: "Intermediate"
        },
        {
            name: "Expert"
        },
        {
            name: "Errors and Bug"
        },
        {
            name: "Help"
        },
    ],
    members:[
        {
            name: "Debajyoti Saha",
            image: "https://lh3.googleusercontent.com/a-/AOh14GgehZ92keFYfw3n7XRdkF_jt03n4F0_cjdYFyPElA=s96-c"
        },
        {
            name: "Itachi Uciha",
            image : "https://lh3.googleusercontent.com/a-/AOh14GgvQ_Mv8Q3DQ7GwevyjJlWwE2-4MEsCQW3Zphbx=s96-c"
        },
        {
            name : "Nikhil Raj",
            image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMxs6WomVTQHgGHG7LmEg_MWy2npCBGjAvMA&usqp=CAU"
        },
        {
            name: "kingshuk Sarkar",
            image: "https://lh3.googleusercontent.com/3b-ob2U1ZnEB5Rxyk233OYb82EWTpYvlOofpYGyzLJNdjRAWzZCElMmr2jUcGYw0gRnsTQ0nLuwOdSlbtS_fVJdyLwWhTbf_TQ-rkw=w600"
        },
        {
            name: "Parthib Dhar",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzhkK118ZYpfQW8UJ6VqYSt2j-rYEJ4PNch-LoqKj8dttHi5jpUCnUfgO6s9O1zyFRFrk&usqp=CAU"
        },
        {
            name: "Anubhab Halder",
            image: "https://better-default-discord.netlify.app/Icons/Gradient-Red.png"
        },
        {
            name : "Roshan Kumar",
            image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMxs6WomVTQHgGHG7LmEg_MWy2npCBGjAvMA&usqp=CAU"
        },
        {
            name: "Sadhab Imran",
            image: "https://lh3.googleusercontent.com/3b-ob2U1ZnEB5Rxyk233OYb82EWTpYvlOofpYGyzLJNdjRAWzZCElMmr2jUcGYw0gRnsTQ0nLuwOdSlbtS_fVJdyLwWhTbf_TQ-rkw=w600"
        },
        {
            name: "Priyam Saha",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzhkK118ZYpfQW8UJ6VqYSt2j-rYEJ4PNch-LoqKj8dttHi5jpUCnUfgO6s9O1zyFRFrk&usqp=CAU"
        },
        {
            name: "Dipen Saha",
            image: "https://better-default-discord.netlify.app/Icons/Gradient-Red.png"
        }
    
    ]
},
];
export default servers;
