// Edit with admin.html, or by hand. Text fields may contain HTML.
//
// Item fields (all optional except title):
//   title, role, dates, text, href
//   image   path to a picture; images/cards/ holds pre-made 2:1 (1200x600) card images
//   fit     "contain" (logos, default: shown small and centered) | "cover" (photos/covers fill the box top)
//   draft   true = blurb written by Claude, shown in gray until you replace it
//   mark    short text shown in the box top when there's no image, e.g. "MIRI"
//
// cardStyle: "row" (one box per line, square logo left) | "logo" (small logo on top) | "banner" (wide image on top)
//
// showMoreAfter: sections after the one with this title stay hidden behind a
// "Show more" button. Remove it (or leave it empty) to show everything.

window.SITE = {
  "cardStyle": "banner",
  "name": "Jacob Meyer Cohen",
  "photo": "images/jacob.jpg",
  "blurb": "Hi! I'm on leave from Stanford University, working to address civilization-scale risk from AI.<br>In the past, I was an election columnist for Manifold and a puzzle author for <em>The New York Times</em>.",
  "links": [
    {
      "label": "Show/Copy Email",
      "href": "mailto:chromaticconflux+jmc@gmail.com"
    },
    {
      "label": "LinkedIn",
      "href": "https://www.linkedin.com/in/jacob-meyer-cohen"
    },
    {
      "label": "Substack",
      "href": "https://substack.com/@jacobcohen4761"
    }
  ],
  "showMoreAfter": "Miscellany",
  "sections": [
    {
      "title": "AI safety",
      "items": [
        {
          "title": "MIRI",
          "role": "Technical Governance Fellow",
          "dates": "2026",
          "text": "My work focused on the tradeoff between AI research secrecy and AI research transparency, as well as US executive policy and treaty design.",
          "href": "https://techgov.intelligence.org/",
          "image": "images/cards/miri.jpg",
          "fit": "cover"
        },
        {
          "title": "SAGA",
          "role": "Co-Director",
          "dates": "2026",
          "text": "I led Stanford AI Governance and Alignment through a revitalization, launching a new fellowship (which had over 250 applications).",
          "href": "https://saga.stanford.edu",
          "image": "images/cards/saga.jpg",
          "fit": "cover"
        },
        {
          "title": "MARS",
          "role": "Research Fellow",
          "dates": "2025–2026",
          "text": "Our paper <a href=\"https://arxiv.org/pdf/2605.15183\" target=\"_blank\" rel=\"noopener\"><em>When Are Two Networks the Same? Tensor Similarity for Mechanistic Interpretability</em></a> was accepted to the TPM workshop at UAI 2026.",
          "href": "https://caish.org/mars",
          "image": "images/cards/mars.jpg",
          "fit": "cover"
        }
      ]
    },
    {
      "title": "Puzzles",
      "items": [
        {
          "title": "The New York Times Magazine",
          "role": "Puzzle Author",
          "dates": "2023",
          "text": "I created 16 original Upon Reflection logic puzzles under Will Shortz's mentorship, which aired over 16 weeks.",
          "href": "https://www.puzzlesforprogress.net/post/new-york-times-published",
          "image": "images/cards/nyt-logo.jpg",
          "fit": "cover"
        },
        {
          "title": "Puzzles for Progress",
          "role": "Sole Creator",
          "dates": "2020–2025",
          "text": "I composed hundreds of original puzzles and self-published a <a href=\"https://tinyurl.com/best-of-pfp\" target=\"_blank\" rel=\"noopener\">compilation book</a>, fundraising for malaria nets.",
          "href": "https://puzzlesforprogress.net",
          "image": "images/cards/book.jpg",
          "fit": "cover"
        },
        {
          "title": "Wordle",
          "role": "Speedrunner",
          "dates": "2022",
          "text": "I solved seven Wordles in seventeen seconds.",
          "href": "https://www.youtube.com/watch?v=PMXPaOkg3ts&list=PLTiI0TJ45T5lRhfsv6GV3YV7EjOAcILlM",
          "image": "images/cards/wordle.jpg",
          "fit": "cover"
        }
      ]
    },
    {
      "title": "Miscellany",
      "items": [
        {
          "title": "Manifold Markets",
          "role": "Election Columnist",
          "dates": "2024",
          "text": "I covered the 2024 election for 20,000+ readers. I was also a site moderator, top-50 trader and market creator, and <a href=\"https://beautifulthorns.wixsite.com/home/post/the-market-manipulation-podcast-five-episodes-five-stories-at-the-conflux-of-serious-and-meme\" target=\"_blank\" rel=\"noopener\">podcast host</a>.",
          "href": "https://manifold.markets",
          "image": "images/manifold.svg"
        },
        {
          "title": "HIPPOCAMPUS",
          "role": "Creator",
          "dates": "2026",
          "text": "An acronym for Hopefully Intuitive Platform for Properly Organizing College Application Materials to Prevent Unnecessary Suffering.",
          "href": "https://hippocampus.college",
          "image": "images/cards/hippocampus.jpg",
          "fit": "cover"
        },
        {
          "title": "The Search for Nice Numbers",
          "role": "Researcher and YouTuber",
          "dates": "2022–2023",
          "text": "I conducted independent research into “nice numbers” and presented it to over 28,000 viewers for the Summer of Math Exposition.",
          "href": "https://beautifulthorns.wixsite.com/home/post/my-unlistenable-youtube-video-got-28-706-views",
          "image": "images/cards/nice-numbers.jpg",
          "fit": "cover"
        }
      ]
    },
    {
      "title": "Math/CS teaching",
      "items": [
        {
          "title": "National Math Stars",
          "role": "Math Mentor",
          "dates": "2025–",
          "text": "I work super-part-time as a Math Mentor, spreading joyful math to kids who otherwise might not have access.",
          "href": "https://www.nationalmathstars.org",
          "image": "images/cards/nms.jpg",
          "fit": "cover"
        },
        {
          "title": "Camp Lemma",
          "role": "Head Counselor",
          "dates": "2022–2025",
          "text": "In 2025, I designed and ran a voting-systems module for nearly 100 kids with an interactive election.",
          "href": "https://www.camplemma.org",
          "image": "images/cards/camp-lemma.jpg",
          "fit": "cover"
        },
        {
          "title": "Proof School CS Department",
          "role": "Assistant Teacher",
          "dates": "2023–2024",
          "text": "I co-taught a yearlong sixth-grade Python class. After graduating, I stayed on as a paid Faculty Consultant.",
          "href": "https://www.proofschool.org",
          "image": "images/cards/proof-school.jpg",
          "fit": "cover"
        }
      ]
    },
    {
      "title": "Education",
      "items": [
        {
          "title": "Stanford University",
          "role": "On leave",
          "dates": "2024–",
          "text": "I'm on leave from a Symbolic Systems major, concentrating in Human-Centered AI. I'm part of Stanford Abundance and People for Animal Welfare.",
          "href": "https://www.stanford.edu",
          "image": "images/cards/stanford.jpg",
          "fit": "cover"
        },
        {
          "title": "Proof School",
          "role": "High school",
          "dates": "2020–2024",
          "text": "I took thirteen college-level math courses, including Galois Theory, Complex Analysis, and Stochastic Processes. I graduated with a perfect 5.0 GPA.",
          "href": "https://www.proofschool.org",
          "image": "images/cards/proof-school.jpg",
          "fit": "cover"
        }
      ]
    },
    {
      "title": "Awards",
      "items": [
        {
          "title": "International Linguistics Olympiad",
          "role": "US Team Qualifier",
          "dates": "2023",
          "text": "I ranked #9 on the NACLO Invitational Round out of over 1,000 competitors, making me first alternate.",
          "href": "https://ioling.org/index.html",
          "image": "images/cards/iol.jpg",
          "fit": "cover"
        },
        {
          "title": "Caroline D. Bradley Scholarship",
          "role": "National Winner",
          "dates": "2019",
          "text": "I won a merit-based, highly selective national scholarship that paid my private high school tuition in full.",
          "href": "https://ieagifted.org/caroline-d-bradley-scholarship/",
          "image": "images/cards/iea.jpg",
          "fit": "cover"
        }
      ]
    }
  ],
  "footer": "This is my serious professional website. For a more whimsical experience, go to <a href=\"https://jacob.show\" target=\"_blank\" rel=\"noopener\">jacob.show</a>."
};
