/* =====================================================================
   EDIT THIS FILE — it is the only file you need to change.

   GUESTS    one line per guest/family:  ["Name as shown", TABLE]
             optional 3rd item = small note: ["Perera Family", 5, "4 guests"]
   ENTRANCE  where guests walk in from (x, y on the floor plan, see map.js)
   SCHEDULE  the times and wording for the schedule page
   Keep the commas and quotes exactly as in the examples.
   ===================================================================== */
window.WEDDING = {

  /* Guests walk in here; the animated route starts at this point on the plan.
     Default = right end of the central pathway. Move it if the real door is elsewhere:
     the hall spans x 145–1442 and y 171–857 on the plan. */
  entrance: { x: 1442, y: 503, label: "Entrance" },

  /* Optional friendly table descriptions, shown under the table number. */
  tableNotes: {
    1: "Family table"
  },

  /* ---- GUEST LIST (from your Table arrangement document) ---- */
  guests: [
    ["Bride’s Parents", 1, "Family table"],
    ["Groom’s Parents", 1, "Family table"],
    ["Mr. Ishan Akalanka & Family", 1],
    ["Mr. Amila Ranasinghe & Family", 1],
    ["Mrs. Chandra Ranthilaka", 2],
    ["Mrs. Dilani Jayaratne & Family", 2],
    ["Mrs. Priyanka Jayaratne & Family", 2],
    ["Mrs. Krishanthi Jayaratne & Family", 2],
    ["Mrs. Inoka Somaratne & Family", 3],
    ["Mrs. Seetha Somaratne & Family", 3],
    ["Mrs. Somaratne & Family", 3],
    ["Mr. Sadun Somaratne & Family", 3],
    ["Mr. Srimantha Fernando & Family", 4],
    ["Mr. Dinesh Fernando & Family", 4],
    ["Mrs. Morin Fernando", 4],
    ["Mr. Ruwan Fernando & Family", 4],
    ["Mrs. Chandrani Fernando & Family", 4],
    ["Mr. Sarath Abewansha & Family", 5],
    ["Mr. Priyantha Abewansha & Family", 5],
    ["Mr. Somadasa & Family", 5],
    ["Groom’s Side", 6, "Group table"],
    ["Groom’s Side", 7, "Group table"],
    ["Groom’s Side", 8, "Group table"],
    ["Bride’s School Friends", 9, "Group table"],
    ["Shehani’s Office", 10, "Group table"],
    ["Mr. Nishantha de Silva", 11],
    ["Mr. Wanshapala Perera & Family", 11],
    ["Mr. Rohan Fernando & Family", 11],
    ["Mr. Chathura Sembukuttiarachchi", 11],
    ["Mr. Upul Sembukuttiarachchi & Family", 12],
    ["Mr. Kristy Perera & Family", 12],
    ["Mr. Janaka Perera & Family", 12],
    ["Mr. Roshan Perera & Family", 12],
    ["Mrs. Wasuki Kanchana", 13],
    ["Mr. Asela Fernando & Family", 13],
    ["Baby", 13],
    ["Baba Family", 13],
    ["Mr. Anton Family", 13],
    ["Mr. Kristy Fernando & Family", 13],
    ["Mr. Upali Hewawissa & Family", 14],
    ["Mrs. Kamala Pemasiri & Family", 14],
    ["Mr. Mahinda Ranasinghe Family", 14],
    ["Dinod’s Office", 15, "Group table"],
    ["Dinod’s Office", 16, "Group table"],
    ["University Friends", 17, "Group table"],
    ["Mr. Senarath Navaratne & Family", 18],
    ["Mrs. Palika & Family", 18],
    ["Mrs. Inoka Thissera", 18],
    ["Mrs. Pushpa Perera", 18],
    ["Mr. Anula Abhesinghe & Family", 18],
    ["Mr. Thushara Perera & Family", 19],
    ["Mr. Mangala Perera & Family", 19],
    ["Mr. Lakmal Perera & Family", 19],
    ["Mr. Hector Perera & Family", 20],
    ["Mrs. Magilin", 20],
    ["Mr. Wasantha Perera & Family", 20],
    ["Mr. Anura Sembukuttiarachchi & Family", 20]
  ],

  /* ---- SCHEDULE (from your Wedding agenda sheet) ---- */
  schedule: [
    { event: "Holy Mass & Blessing", where: "Immaculate Virgin Mary's Church, Seeduwa", items: [
      { time: "2.30 PM", title: "Holy Mass", note: "Wedding Mass & blessing of the union", key: true }
    ]},
    { event: "Wedding Reception", where: "Eagles' Lagoon View Banquet Hall, Katunayake", items: [
      { time: "6.30 PM", title: "Doors open & welcome", note: "Find your table and settle in", key: true },
      { time: "6.45 PM", title: "Couple's entrance", note: "Join us in welcoming Shehani & Dinod", key: true },
      { time: "7.00 PM", title: "Oil lamp & cake cutting" },
      { time: "7.15 PM", title: "Champagne fountain & toast", note: "Raise a glass with us" },
      { time: "7.30 PM", title: "First dance", note: "Bites will be served" },
      { time: "7.45 PM", title: "Bar opens", note: "Group photos with the couple" },
      { time: "8.00 PM", title: "Table rounds", note: "The couple will visit each table" },
      { time: "8.45 PM", title: "Buffet" },
      { time: "9.15 PM", title: "Pre-shoot video & group dance", note: "The dance floor opens straight after (until 9.30 PM)", key: true },
      { time: "9.40 PM", title: "Fireworks", key: true },
      { time: "Later", title: "Catch-up table rounds & group photos" },
      { time: "10.45 PM", title: "Bar closes" },
      { time: "11.00 PM", title: "Buffet closes" },
      { time: "11.30 PM", title: "The couple leaves", note: "Thank you for celebrating with us" }
    ]}
  ]
};