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
    ["Groom’s Side", 6, "Group table"],
    ["Groom’s Side", 7, "Group table"],
    ["Groom’s Side", 8, "Group table"],
    ["Miss. Ivana David", 9],
    ["Miss. Shenan Perera", 9],
    ["Miss. Dulanthi Perera", 9],
    ["Miss. Savindi Yayawardena", 9],
    ["Miss. Gayandie Sachithma", 9],
    ["Mrs. Meheshi Peiris", 10],
    ["Mr. Chandana Herath", 10],
    ["Mr. Mahela Morais", 10],
    ["Mrs. Sewmini Rathnayake", 10],
    ["Miss. Mavinka Gunarathne", 10],
    ["Miss. Fayaza Zackydeen", 10],
    ["Miss. Amanda Sewmini", 10],
    ["Miss. Hasini Gunathilake", 10],
    ["Miss. Nishadi Lakshani", 10],
    ["Miss. Menu Vitharana", 10],
    ["Miss. Charlene Amarasekara", 10],
    ["Mr. Nishantha de Silva", 11],
    ["Mr. Wanshapala Perera & Family", 11],
    ["Mr. Rohan Fernando & Family", 11],
    ["Mr. Chathura Sembukuttiarachchi", 11],
    ["Mr. Naveen", 11],
    ["Mr. Nadeera", 11],
    ["Mr. Upul Sembukuttiarachchi & Family", 12],
    ["Mr. Kristy Perera & Family", 12],
    ["Mr. Janaka Perera & Family", 12],
    ["Mr. Roshan Perera & Family", 12],
    ["Mrs. Wasuki Kanchana", 13],
    ["Mr. Asela Fernando & Family", 13],
    ["Mrs. Swarna Fernando", 13],
    ["Mr. Anura Perera & Family", 13],
    ["Mr. Anton Fernando & Family", 13],
    ["Mr. Kristy Fernando & Family", 13],
    ["Mr. Upali Hewawissa & Family", 14],
    ["Mrs. Kamala Pemasiri& Family", 14],
    ["Mr. Mahinda Ranasinghe Family", 14],
    ["Mr. Mithila Wickramaratne", 15],
    ["Mr. Miresh Mohanaraj", 15],
    ["Mr. Miranga Senaratne", 15],
    ["Mr. Thameera", 15],
    ["Mr. Ishan Manthilake", 15],
    ["Mr. Kaushalya Megasooriya", 15],
    ["Mr. Thenula Pieris", 16],
    ["Miss. Tiyana Ludowyke", 16],
    ["Miss. Nethmi Sandeepa", 16],
    ["Miss. Pawani Amarasinghe", 16],
    ["Miss. Yasuri Fernando", 16],
    ["Miss. Diduli Sahasra", 16],
    ["Miss. Agarliya Ravichandran", 16],
    ["Mr. Ahamed Rizlan", 16],
    ["Mr. Thisula Mahawatte", 16],
    ["Mr. Kasuntha Chanaka", 17],
    ["Mr. Davisan", 17],
    ["Mr. Dilshan Hansana", 17],
    ["Mr. Isuru Madhushan", 17],
    ["Mr. Shehan Rathnayake", 17],
    ["Mr. Dumindu Pannila", 17],
    ["Miss. Avishka Samadhi", 17],
    ["Miss. Nuwanthi Dissanayake", 17],
    ["Miss. Samadhi Nethmini", 17],
    ["Miss. Nasrina Nasoor", 17],
    ["Miss. Rishani Fernando", 17],
    ["Miss. Melani Tharushika", 17],
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
      { time: "7.00 PM", title: "Oil lamp & cake cutting", note: "Lit by the Bride’s and Groom’s parents" },
      { time: "7.15 PM", title: "Champagne fountain & toast", note: "Raise a glass with us" },
      { time: "7.30 PM", title: "First dance", note: "Bites will be served" },
      { time: "7.45 PM", title: "Bar opens", note: "Group photos with the couple" },
      { time: "8.00 PM", title: "Table rounds", note: "The couple will visit each table" },
      { time: "8.45 PM", title: "Buffet" },
      { time: "9.15 PM", title: "Pre-shoot video & group dance", note: "The dance floor opens straight after (until 9.30 PM)", key: true },
      { time: "9.40 PM", title: "Fireworks", key: true },
      { time: "9.45 PM", title: "Catch-up table rounds & group photos", note: "Until 10.15 PM" },
      { time: "10.45 PM", title: "Bar closes" },
      { time: "11.00 PM", title: "Buffet closes" },
      { time: "11.30 PM", title: "The couple leaves", note: "Thank you for celebrating with us" }
    ]}
  ]
};