module CarStalker
  AUTOPLIUS_MODELS = {:Abarth=>["Punto Evo"], :AC=>["Ace", "Aceca", "Cobra"], :Acura=>["CL", "EL", "ILX", "Integra", "MDX", "NSX", "RDX", "RL", "RLX", "RSX", "SLX", "TL", "TLX", "TSX", "Vigor", "ZDX"], :Aixam=>["400", "500", "A751", "City", "Crossline", "Ligier", "Scouty"], :"Alfa Romeo"=>["145", "146", "147", "155", "156", "159", "164", "166", "33", "4C", "75", "8C", "90", "Alfasud", "Alfetta", "Arna", "Brera", "Crosswagon Q4", "Giulia", "Giulietta", "GT", "GTV", "Junior", "Mito", "RZ/SZ", "Spider", "Sportwagon", "Sprint", "Stelvio "], :Alpina=>["B10", "B12", "B3", "B5", "B6", "B7", "B8", "D10", "D3", "Roadster S"], :AMC=>["Ambassador", "Concord", "Eagle", "Gremlin", "Javelin", "Matador", "Pacer", "Rambler", "Rebel", "Spirit"], :ARO=>["10", "24", "243", "244", "245", "246", "K450", "Spartana"], :Asia=>["Hi-Topic", "Retona", "Rocsta", "Towner"], :"Aston Martin"=>["AR1", "Cygnet", "DB", "DB7", "DB9", "DBS", "Lagonda", "Rapide", "Vanquish", "Vantage", "Virage", "Volante", "Zagato"], :Audi=>["100", "200", "5000", "80", "90", "A1", "A2", "A3", "A4", "A4 ALLROAD", "A5", "A5 SPORTBACK", "A6", "A6 ALLROAD", "A7 SPORTBACK", "A8", "Allroad", "Cabriolet", "Coupe", "Q2", "Q3", "Q5", "Q7", "Quattro", "R8", "RS Q3", "RS2", "RS3", "RS4", "RS5", "RS6", "RS7", "S1", "S2", "S3", "S4", "S5", "S6", "S7", "S8", "SQ5", "SQ7", "TT", "TT RS", "TTS", "V8"], :"Austin Rover"=>[], :Bentley=>["Arnage", "Azure", "Bentayga", "Brooklands", "Continental", "Eight", "Flying Spur", "Mulsanne", "S1", "Turbo R"], :BMW=>["1 serija", "114", "116", "118", "120", "123", "125", "128", "130", "135", "2 serija", "214 Active Tourer", "216 Active Tourer", "216 Gran Tourer", "218", "218 Active Tourer", "218 Gran Tourer", "220", "220 Active Tourer", "220 Gran Tourer", "225", "225 Active Tourer", "228", "3 serija", "315", "316", "318", "318 Gran turismo", "320", "320 Gran turismo", "323", "324", "325", "325 Gran turismo", "327", "328", "328 Gran turismo", "330", "330 Gran turismo", "335", "335 Gran turismo", "340", "346", "Active Hybrid 3", "4 serija", "418 Gran Coupe", "420", "420 Gran Coupe", "425", "428", "428 Gran Coupe", "430", "430 Gran Coupe", "435", "435 Gran Coupe", "5 serija", "518", "520", "520 Gran turismo", "523", "524", "525", "528", "530", "530 Gran Turismo", "535", "535 Gran Turismo", "540", "545", "550", "550 Gran turismo", "Active Hybrid 5", "6 serija", "628", "630", "632", "633", "635", "640", "640 Gran Coupe", "645", "650", "650 Gran Coupe", "7 serija", "725", "728", "730", "732", "735", "740", "745", "750", "760", "Active Hybrid 7", "8 serija", "840", "850", "i serija", "i3", "i8", "M serija", "1M Coupe", "M Coupe", "M Roadster", "M1", "M135", "M2", "M235", "M3", "M4", "M5", "M550", "M6", "X serija", "X1", "X3", "X4", "X5", "X5 M", "X6", "X6 M", "Z serija", "Z1", "Z3", "Z3 M", "Z4", "Z4 M", "Z8", "1502", "1602", "1802", "2002", "2800CS"], :Briliance=>["Andere", "BC3", "BS2", "BS4", "BS6"], :Bugatti=>["Veyron"], :Buick=>["Century", "Electra", "Enclave", "Encore", "LaCrosse", "Le Sabre", "LeSabre", "Lucerne", "Park Avenue", "Rainier", "Regal", "Rendezvous", "Riviera", "Roadmaster", "Skylark", "Terraza", "Verano"], :Cadillac=>["Allante", "ATS", "BLS", "Catera", "CTS", "DeVille", "DTS", "Eldorado", "Escalade", "Fleetwood", "Seville", "SRX", "STS", "Vizon", "XLR", "XTS"], :Chevrolet=>["2500", "Alero", "Astro", "Avalanche", "Aveo", "Bel Air", "Beretta", "Blazer", "C1500", "Camaro", "Caprice", "Captiva", "Cavalier", "Chevelle", "Chevy Van", "Citation", "Cobalt", "Colorado", "Corsica", "Corvette", "Cruze", "El Camino", "Epica", "Equinox", "Evanda", "Express", "HHR", "Impala", "Ipanema", "Kalos", "Lacetti", "Lumina", "M-1009", "Malibu", "Matiz", "Metro", "Monte Carlo", "Monza", "Nubira", "Orlando", "Pickup", "Prizm", "Rezzo", "S-10", "Silverado", "Sonic", "Spark", "Special Deluxe", "SSR", "Suburban", "Tacuma", "Tahoe", "Tracker", "TrailBlazer", "Trans Sport", "Traverse", "Trax", "Uplander", "Venture", "Volt"], :Chrysler=>["200", "300", "300C", "300M", "Aspen", "Cirrus", "Concorde", "Conquest", "Crossfire", "Daytona", "Daytona Shelby", "ES", "Grand Voyager", "Imperial", "Intrepid", "Le Baron", "LHS", "Neon", "New Yorker", "Newport", "Pacifica", "Plymouth", "Prowler", "PT Cruiser", "Saratoga", "Sebring", "Stratus", "Town & Country", "Valiant", "Viper", "Vision", "Voyager"], :Citroen=>["2 CV", "AX", "Berlingo", "BX", "C-Crosser", "C-Elysee", "C-Zero", "C1", "C15", "C2", "C25", "C3", "C3 Picasso  ", "C3 Pluriel", "C4", "C4 Aircross", "C4 Cactus", "C4 Picasso", "C5", "C6", "C8", "CX", "DS", "DS3", "DS4", "DS5", "Evasion", "Grand C4 Picasso", "GSA", "Jumper", "Jumpy", "Nemo", "Saxo", "SM", "Spacetourer", "Synergie", "Visa", "Xantia", "XM", "Xsara", "Xsara Picasso", "ZX"], :Cobra=>["AC"], :Dacia=>["Dokker", "Duster", "Lodgy", "Logan", "Sandero"], :Daewoo=>["Espero", "Evanda", "Istana", "Kalos", "Korando", "Labo", "Lacetti", "Lanos", "Leganza", "Lublin", "Magnus", "Matiz", "Musso", "Nexia", "Nubira", "Polonez", "Prince", "Racer", "Rexton", "Rezzo", "Tacuma", "Tico"], :DAF=>["33", "44", "46", "55", "600", "66"], :Daihatsu=>["1000", "1000", "Applause", "Charade", "Charmant", "Copen", "Cuore", "Delta", "Feroza", "Freeclimber", "Gran Move", "Hi Jet", "Leeza", "Materia", "Max", "Mira", "Move", "Naked", "Opti", "Rocky", "Sirion", "Sparcar", "Terios", "Trevis", "Valera", "YRV"], :Datsun=>["260z", "280z"], :Delorean=>["DMC-12"], :Desoto=>["Adventurer", "Airflow", "Airstream", "Custom", "Deluxe", "Diplomat", "Firedome", "Fireflite", "Firesweep", "Powermaster"], :Dodge=>["Avenger", "Caliber", "Caravan", "Challenger", "Charger", "Dakota", "Dart", "Demon", "Durango", "Grand Caravan", "Hornet", "Intrepid", "Journey", "Magnum", "Neon", "Nitro", "Ram", "Spirit", "Stealth", "Stratus", "Viper", "Voyager"], :"DR Motor"=>[], :Eagle=>["Summit", "Summit Wagon", "Talon", "Vision"], :Ferrari=>["F 360", "208", "246", "250", "275", "288", "308", "328", "330", "348", "360", "365", "400", "412", "456", "458", "512", "550", "575", "599 GTB Fiorano", "612", "612 Scaglietti", "750", "Barchetta", "California", "Daytona", "Enzo", "F 355", "F 40", "F 430", "F 50", "F 512", "Maranello", "Mondial", "Superamerica", "Testarossa"], :Fiat=>["124", "126", "127", "130", "131", "500", "500 Abarth", "500L", "500X", "850 Spider ", "Albea", "Barchetta", "Brava", "Bravo", "Cinquecento", "Coupe", "Croma", "Dino", "Doblo", "Ducato", "Duna", "Fiorino", "Freemont", "Fullback", "Grande Punto", "Idea", "Linea", "Marea", "Marengo", "Multipla", "Palio", "Palio Weekend", "Panda", "Punto", "Punto Evo", "Qubo", "Regata", "Ritmo", "Scudo", "Sedici", "Seicento", "Stilo", "Strada", "Talento", "Tempra", "Tipo", "Ulysse", "Uno", "X 1/9"], :Fisker=>["Atlantic", "Karma "], :Ford=>["Aerostar", "Aspire", "B-MAX", "Bronco", "C-MAX", "Capri", "Caravan", "Cargo", "Club Wagon", "Connect Tourneo", "Contour", "Cougar", "Courier", "Crown Victoria", "Econoline", "Econovan", "EcoSport", "Edge", "Escape", "Escort", "Excursion", "Expedition", "Explorer", "Express", "F150", "F250", "F350", "F450", "F470", "F700", "Fairlane", "Falcon", "Fiesta", "Five Hundred", "Flex", "Focus", "Freestar", "Freestyle", "Fusion", "Galaxy", "Granada", "Grand C-MAX", "GT", "Ka", "Kuga", "LTD", "Maverick", "Mercury", "Mondeo", "Mustang", "Orion", "Probe", "Puma", "Ranger", "S-MAX", "Scorpio", "Sierra", "Sportka", "Streetka", "Superduty", "Taunus", "Taurus", "Tempo", "Thunderbird", "Tourneo", "Transit", "Transit Connect", "Transit Custom", "Windstar"], :GAZ=>["22", "11-73", "12 ZiM", "12B", "13", "14", "21", "2110", "24", "2410", "2752", "3110", "32213", "3302", "3308", "53", "61", "64", "66", "67", "69A", "Chaika", "Gazele", "M-20 Pobeda", "M1", "Volga"], :Geo=>["Metro", "Prizm", "Spectrum", "Storm", "Tracker"], :GMC=>["Acadia", "Envoy", "Jimmy", "Safari", "Savana", "Sierra", "Sonoma", "Suburban", "Syclone", "Terrain", "Typhoon", "Yukon"], :Gonow=>["-Kita-", "GA200", "GX6"], :"Great Wall"=>["Deer", "Hover", "Pegasus", "Safe", "Sailor", "Sing", "Socool", "Wingle"], :Honda=>["Accord", "Aerodeck", "Avancier", "Capa", "City", "Civic", "Concerto", "CR-V", "Crosstour", "CRX", "CRZ", "Domani", "Element", "F- MX", "FIT", "FR-V", "HR-V", "Insight", "Inspire", "Integra", "Jazz", "Lagreat", "Legend", "Life", "Logo", "Mobilo", "NSX", "Odyssey", "Passport", "Pilot", "Prelude", "Ridgeline", "S2000", "Shuttle", "Stream", "Today"], :Hummer=>["H1", "H2", "H3"], :Hyundai=>["Accent", "Atos", "Azera", "Coupe", "Elantra", "Entourage", "Equus", "Excel", "Galloper", "Genesis", "Getz", "Grandeur", "H1", "H1 Travel", "H100", "H200", "i10", "i20", "i30", "i40", "i50", "IONIQ", "ix20", "ix35", "ix55", "Lantra", "Lavita", "Marcia", "Matrix", "Pony", "S-Coupe", "Santa Fe", "Santamo", "Solaris", "Sonata", "Sonica", "Starex", "Terracan", "Tiburon", "Trajet", "Tucson", "Veloster", "Veracruz", "XG", "XG 350", "XG30"], :Infiniti=>["EX", "EX30", "EX35", "EX37", "FX", "FX30", "FX35", "FX37", "FX45", "FX50", "G20", "G35", "G37", "I30", "I35", "J30", "JX35", "M30", "M35/45", "M37", "M56", "Q30", "Q45", "Q50", "Q60", "Q70", "QX4", "QX50", "QX56", "QX60", "QX70"], :International=>["Scout", "Scout II"], :Isuzu=>["Amigo", "Ascender", "Aska", "Axiom", "Bighorn", "Campo", "D-Max", "Gemini", "HiLander", "Impulse", "Midi", "MU", "NPR", "Panther", "Piazza", "Pick Up", "Rodeo", "Trooper", "Turkuaz", "Vehi Cross", "Wizard"], :Iveco=>["Daily", "35-12", "Massif"], :Jaguar=>["Daimler", "E-Type", "F-Pace", "F-Type", "MK II", "S-Type", "Sovereign", "Vanden Plas", "X-Type", "XE", "XF", "XJ", "XJ-Series", "XJ12", "XJ40", "XJ6", "XJ8", "XJR", "XJS", "XK", "XK-Series", "XK8", "XKR"], :Jeep=>["Cherokee", "CJ", "Comanche", "Commander", "Compass", "Grand Cherokee", "Liberty", "Patriot", "Renegade", "Wagoneer", "Willys", "Wrangler"], :Kia=>["Avella", "Besta", "Borrego", "Cadenza", "Carens", "Carnival", "cee'd", "Cerato", "Clarus", "Elan", "Enterprise", "Forte", "Joice", "K2500", "K2700", "Leo", "Magentis", "Mentor", "Mini", "Niro", "Opirus", "Optima", "Picanto", "Potentia", "Pregio", "Pride", "Pro cee'd", "Retona", "Rio", "Roadster", "Rocsta", "Rondo", "Sedona", "Sephia", "Shuma", "Sorento", "Soul", "Spectra", "Sportage", "Venga"], :Koenigsegg=>["Agera", "CC8S", "CCGT", "CCR", "CCX", "CCX Edition", "CCXR", "CCXR Edition", "CCXR Special Edition", "Trevita"], :Lada=>["110", "111", "112", "1200", "2101", "21011", "21013", "2102", "2103", "2104", "2105", "21051", "21053", "2106", "21061", "21063", "2107", "2108", "2109", "2110", "2111", "21110", "21111", "2112", "2115", "2120", "2121", "21213", "21214", "21215", "2123", "2129", "2131", "2141", "2329", "Aleko", "Forma", "Kalina", "Niva", "Nova", "Oka", "Priora", "Samara", "Vis"], :Lamborghini=>["Aventador", "Countach", "Diablo", "Espada", "Gallardo", "Huracan", "Jalpa", "LM", "Miura", "Murcielago", "Urraco"], :Lancia=>["Beta", "Dedra", "Delta", "Flaminia", "Fulvia", "Gamma", "Kappa", "Lybra", "Montecarlo", "Musa", "Phedra", "Prisma", "Stratos", "Thema", "Thesis", "Voyager", "Y", "Ypsilon", "Zeta"], :"Land Rover"=>["Defender", "Discovery", "Evoque", "Freelander", "Range Rover", "Range Rover Sport"], :Landwind=>["CV9", "S", "SC 2", "SC 4"], :Lexus=>["CT 200h", "ES klasė", "ES 300", "ES 330", "ES 350h", "ES 350", "GS klasė", "GS 200t", "GS 250", "GS 300", "GS 300h", "GS 350 ", "GS 400", "GS 430", "GS 450", "GS 460", "GS-F", "GX klasė", "GX 460", "GX 470", "GX 640", "HS klasė", "HS 250", "IS klasė", "IS 200", "IS 300h", "IS 220", "IS 250", "IS 300", "IS 350", "IS-F", "LFA", "LS klasė", "LS 400", "LS 430", "LS 460", "LS 600 h", "LX klasė", "LX 450", "LX 470", "LX 570", "NX klasė", "NX 200t", "NX 300h", "RC klasė", "RC 200t", "RC 300h", "RC 350", "RC-F", "RX klasė", "RX 200t", "RX 300", "RX 330", "RX 350", "RX 400h", "RX 450h", "SC klasė", "SC 300", "SC 400", "SC 430", "SL"], :Ligier=>["Ambra", "Andere", "ixo", "JS 50", "Nova", "Optima", "X - Too"], :Lincoln=>["Aviator", "Continental", "LS", "Mark", "MKS", "MKT", "MKX", "MKZ", "Navigator", "Town Car", "Zephyr"], :Lotus=>["340 R", "Cortina", "Eagle", "Elan", "Elise", "Elite", "Esprit", "Europa", "Evora", "Excel", "Exige", "Super Seven", "V8"], :LuAZ=>["1302", "967M", "969M"], :Mahindra=>[], :Maserati=>["222", "224", "228", "3200", "3200 GT", "418", "420", "4200", "422", "424", "430", "Biturbo", "Chamal", "Ghibli", "GranCabrio", "Gransport", "GranTurismo", "Indy", "Karif", "Levante", "MC12", "Merak", "Quattroporte", "Spyder"], :Maybach=>["57", "62"], :Mazda=>["121", "2", "3", "323", "323F", "5", "6", "626", "929", "Atenza", "AZ", "B Series", "Bongo", "BT-50", "Carol", "Clef", "Cronos", "CX-3", "CX-5", "CX-7", "CX-9", "Demio", "Eunos", "Lantis", "Laputa", "Levante", "Miata", "Millenia", "MPV", "MX-3", "MX-5", "MX-6", "Navajo", "PickUp", "Premacy", "Protege", "Rustler", "RX-6", "RX-7", "RX-8", "Tribute", "Vantred", "Xedos 6", "Xedos 9"], :Mclaren=>["540C", "570S", "650S", "650S Coupe", "650S Spider", "675LT", "675LT Spider", "Andere", "MP4-12C", "P1"], :"Mercedes-Benz"=>["100", "108", "110", "123", "124", "190", "200", "207", "208", "211", "212", "220", "230", "240", "250", "260", "270", "280", "290", "300", "300 GD", "307", "308", "320", "350", "380", "400", "416", "420", "450", "500", "560", "600", "608", "A klasė", "A140", "A150", "A160", "A170", "A180", "A190", "A200", "A210", "A220", "A250", "A45 AMG", "AMG GT ", "Atego", "B klasė", "B150", "B160", "B170", "B180", "B200", "B220", "B250", "C klasė", "C160", "C180", "C200", "C220", "C230", "C240", "C250", "C270", "C280", "C30 AMG", "C300", "C32 AMG", "C320", "C350", "C36 AMG", "C400", "C43 AMG", "C450", "C55 AMG", "C63 AMG", "C klasė SC", "CE klasė", "CE200", "CE220", "CE230", "CE300", "Citan", "CL klasė", "CL180", "CL200", "CL220", "CL230", "CL420", "CL500", "CL55 AMG", "CL600", "CL63 AMG", "CL65 AMG", "CLA klasė", "CLA180", "CLA200", "CLA220", "CLA250", "CLA45 AMG", "CLC klasė", "CLC160", "CLC180", "CLC200", "CLC220", "CLC230", "CLC250", "CLC350", "CLK klasė", "CLK200", "CLK220", "CLK230", "CLK240", "CLK270", "CLK280", "CLK320", "CLK350", "CLK430", "CLK500", "CLK55 AMG", "CLK63 AMG", "CLS klasė", "CLS220", "CLS250", "CLS280", "CLS300", "CLS320", "CLS350", "CLS400", "CLS500", "CLS55 AMG", "CLS550", "CLS63 AMG", "E klasė", "E200", "E220", "E230", "E240", "E250", "E260", "E270", "E280", "E290", "E300", "E320", "E350", "E36 AMG", "E400", "E420", "E430", "E50 AMG", "E500", "E55", "E55 AMG", "E550", "E60 AMG", "E63 AMG", "G klasė", "G230", "G240", "G250", "G270", "G280", "G290", "G300", "G320", "G350", "G400", "G500", "G55 AMG", "G63 AMG", "G65 AMG", "GL klasė", "GL320", "GL350", "GL350 BlueTEC", "GL420", "GL450", "GL500", "GL550", "GL55 AMG", "GL63 AMG", "GLA klasė", "GLA180", "GLA200", "GLA220", "GLA250", "GLA45 AMG", "GLC Coupe klasė ", "GLC Coupe 220 ", "GLC Coupe 250 ", "GLC Coupe 300 ", "GLC Coupe 350 ", "GLC Coupe 43 AMG ", "GLC klasė", "GLC220", "GLC250", "GLC300", "GLC350", "GLC43 AMG", "GLE Coupe klasė", "GLE Coupe 250", "GLE Coupe 350", "GLE Coupe 400", "GLE Coupe 450", "GLE Coupe 500", "GLE Coupe 63 AMG", "GLE klasė", "GLE250", "GLE350", "GLE400", "GLE450", "GLE500", "GLE63 AMG", "GLK klasė", "GLK200", "GLK220", "GLK250", "GLK280", "GLK300", "GLK320", "GLK350", "GLS klasė ", "GLS350", "GLS500", "M klasė", "ML klasė", "ML230", "ML250", "ML270", "ML280", "ML300", "ML320", "ML350", "ML400", "ML420", "ML430", "ML450", "ML500", "ML53 AMG", "ML55 AMG", "ML63 AMG", "R klasė", "R280", "R300", "R320", "R350", "R500", "R63 AMG", "S klasė", "S250", "S260", "S280", "S300", "S320", "S350", "S400", "S420", "S430", "S450", "S500", "S55 AMG", "S550", "S560", "S600", "S63 AMG", "S65 AMG", "SL klasė", "SL280", "SL300", "SL320", "SL350", "SL380", "SL400", "SL420", "SL450", "SL500", "SL55 AMG", "SL560", "SL60 AMG", "SL600", "SL63 AMG", "SL65 AMG", "SL70 AMG", "SL73 AMG", "SLK klasė", "SLK200", "SLK230", "SLK250", "SLK260", "SLK280 ", "SLK300", "SLK32 AMG", "SLK320", "SLK350", "SLK55 AMG", "SLR McLaren", "SLS AMG", "Sprinter", "T 1", "V klasė", "V200", "V220", "V230", "V250", "V280", "Vaneo", "Vario", "Viano", "Vito"], :Mercury=>["Tiffany", "Capri", "Cougar", "Grand Marquis", "Marauder", "Milan", "Mountaineer", "Mystique", "Sable", "Topaz", "Tracer", "Villager"], :MG=>["Express", "Maestro", "Metro", "MGA", "MGB", "MGF", "MGR V8", "Midget", "Montego", "TF", "X", "ZR", "ZS", "ZT"], :Microcar=>["Mc 1 ", "Mgo"], :Mini=>["1000", "1300", "Clubman", "Cooper", "Cooper S", "Countryman", "Mini", "One", "Paceman"], :Mitsubishi=>["3000 GT", "ASX", "Canter", "Carisma", "Colt", "Cordia", "Delica", "Diamante", "Eclipse", "Endeavor", "FTO", "Galant", "Galloper", "Grandis", "GTO", "L200", "L300", "L400", "Lancer", "Lancer  Evolution", "MiEV", "Mirage", "Montero", "Outlander", "Pajero", "Pajero Pinin", "Pajero Sport", "Pick-up", "Pinin", "Santamo", "Sapporo", "Shogun", "Sigma", "Space Gear", "Space Runner", "Space Star", "Space Wagon", "Starion"], :Morgan=>["4/4", "Aero 8", "Plus 4", "Plus 8", "Roadster"], :Moskvich=>["407", "423", "2140", "2141", "401", "403", "408", "412", "M-400", "M-402", "M-408", "M-412"], :Nissan=>["100 NX", "200 SX", "240 SX", "280 ZX", "300 ZX", "350Z", "370Z", "Almera", "Almera Tino", "Altima", "Armada", "Bluebird", "Cabstar", "Cargo", "Cherry", "Cima", "Cube", "Evalia", "Frontier", "GT-R", "Interstar", "Juke", "King Cab", "Kubistar", "Laurel", "Leaf", "Liberty", "Maxima", "Micra", "Murano", "Navara", "Note", "NP300", "NV200", "NV300", "NV400", "Pathfinder", "Patrol", "Pick-Up", "Pixo", "Prairie", "President", "Primastar", "Primera", "Pulsar", "Qashqai", "Qashqai+2", "Quest", "Rogue", "Rougue", "Sentra", "Serena", "Silvia", "Skyline", "Sunny", "Terrano", "Tiida", "Titan", "Trade", "Urvan", "Vanette", "Versa", "Wingroad", "X-Terra", "X-Trail"], :Norster=>["600R"], :Nysa=>["522"], :Oldsmobile=>["Achieva", "Alero", "Aurora", "Bravada", "Custom Cruiser", "Cutlass", "Delta 88", "Eighty-Eight", "Intrigue", "Silhouete", "Silhouette", "Super 88", "Toronado"], :Opel=>["Adam", "Agila", "Ampera", "Antara", "Arena", "Ascona", "Astra", "Calibra", "Campo", "Cascada", "Combo", "Corsa", "Diplomat", "Frontera", "GT", "Insignia", "Kadett", "Karl", "Manta", "Meriva", "Mokka", "Mokka X", "Monterey", "Monza", "Movano", "Nova", "Omega", "Rekord", "Senator", "Signum", "Sintra", "Speedster", "Tigra", "Vectra", "Vivaro", "Zafira", "Zafira tourer"], :Packard=>["110", "120", "180", "200", "300", "Caribbean", "Cavalier", "Clipper", "Executive", "Hawk", "Patrician", "Station Sedan", "Super Eight"], :Peugeot=>["1007", "104", "106", "107", "108", "2008", "204", "205", "206", "206+", "207", "208", "3008", "301", "304", "305", "306", "307", "308", "309", "4007", "4008", "404", "405", "406", "407", "5008", "504", "505", "508", "508 RXH", "604", "605", "607", "806", "807", "Bipper", "Boxer", "Expert", "iOn", "J5", "Partner", "RCZ", "Traveller", "Vivacity"], :Plymouth=>["Breeze", "Grand Voyager", "Neon", "Prowler", "Voyager"], :Pontiac=>["6000", "Aztek", "Bonneville", "Catalina", "Fiero", "Firebird", "G6", "G8", "Grand-Am", "Grand-Prix", "GTO", "Montana", "Solstice", "Sunbird", "Sunfire", "Targa", "Trans Am", "Trans Sport", "Vibe"], :Porsche=>["356", "911", "912", "914", "924", "928", "944", "959", "968", "Boxster", "Carrera GT", "Cayenne", "Cayman", "Macan", "Panamera"], :Proton=>["313", "315", "416", "Gen-2", "Persona", "Satria"], :Renault=>["11", "19", "21", "25", "4", "5", "9", "Avantime", "Captur", "Clio", "Espace", "Express", "Fluence", "Fuego", "Grand Espace", "Grand Modus", "Grand Scenic", "Kadjar", "Kangoo", "Koleos", "Laguna", "Latitude", "Logan", "Magnum", "Mascott", "Master", "Megane", "Modus", "Nevada", "Rapid", "Safrane", "Scenic", "Spacetourer", "Sport Spider", "Super 5", "Symbol", "Talisman", "Thalia", "Trafic", "Twingo", "Twizy", "Vel Satis", "Wind", "Zoe"], :"Rolls-Royce"=>["Corniche", "Flying Spur", "Ghost", "Park Ward", "Phantom", "Silver"], :Roosevelt=>[], :Rover=>["25", "45", "75", "100", "200 serija", "200", "211", "213", "214", "216", "218", "220", "400 serija", "400", "414", "416", "418", "420", "600 serija", "600", "618", "620", "623", "800 serija", "800", "820", "825", "827", "Discovery", "Maestro", "Metro", "MGF", "Mini", "Montego", "Streetwise"], :Saab=>["9-2X", "9-3", "9-4X", "9-5", "9-7X", "90", "900", "9000", "92", "96", "97", "99"], :Santana=>["300", "350", "PS-10"], :Saturn=>["Aura", "ION", "LS", "LW", "Relay", "SC", "Sky", "SL", "SW", "VUE"], :Scion=>["FR-S", "iM", "IQ", "TC", "XA", "XB", "XD"], :Seat=>["Alhambra", "Altea", "Altea XL", "Arosa", "Ateca", "Cordoba", "Exeo", "Ibiza", "Inca", "Leon", "Malaga", "Marbella", "Mii", "Terra", "Toledo"], :Secma=>["Extrem 500", "F16", "Fun Family"], :Shuanghuan=>["CEO", "Sceo"], :Skoda=>["105", "120", "130", "135", "Citigo", "Fabia", "Favorit", "Felicia", "Forman", "Kodiaq", "Octavia", "Pick Up", "Praktik", "Rapid", "Roomster", "Superb", "Yeti"], :Smart=>["City", "Coupe", "Crossblade", "Forfour", "Fortwo", "Fortwo Coupe", "MCC", "Roadster"], :Spartan=>["Roadster", "Sherwood", "Starcraft", "Treka"], :Spyker=>["C8 Laviolette"], :SsangYong=>["Actyon", "Actyon Sports", "Chairman", "Family", "Istana", "Kallista", "Korando", "Kyron", "Musso", "Rexton", "Rodius", "Tivoli"], :Studebaker=>["Avanti", "Big Six", "Champion", "Commander", "Conestoga", "Cruiser", "Daytona", "Desoto", "Dictator", "Electric car", "Flight Hawk", "Golden Hawk", "Gran Turismo Hawk", "Land Cruiser", "Lark", "Light Four", "Light Six", "Power Hawk", "President", "Scotsman", "Silver Hawk", "Sky Hawk", "Special Six", "Speedster", "Standard Six", "Starlight", "Wagonaire"], :Subaru=>["Baja", "BRZ", "Forester", "Impreza", "Impreza  WRX", "Justy", "Legacy", "Leone", "Levorg", "Libero", "M 80", "Outback", "R1", "SVX", "Trezia", "Tribeca", "Vivio", "XT Coupe", "XV"], :Suzuki=>["Aerio", "Alto", "Baleno", "Cappuccino", "Carry", "Celerio ", "Cultis Wagon", "Equator", "Esteem", "Every Landy", "Forenza", "Grand Vitara", "Ignis", "Jimny", "Kei", "Kizashi", "Liana", "LJ", "Reno", "Samurai", "SJ", "Splash", "Super-Carry", "Swift", "SX4", "SX4 S-Cross", "Twin", "Verona", "Vitara", "Wagon R+", "X-90", "XL7"], :Talbot=>["Andere", "Horizon", "Samba"], :Tartan=>["-Kita-", "Prancer"], :Tata=>["Indica", "Indigo", "Nano", "Safari", "Sumo", "Telcoline", "Telcosport", "Xenon"], :Tatra=>["603", "613", "700", "77", "80", "87"], :Tazzari=>["Zero"], :Tesla=>["Andere", "Model S", "Model X", "Roadster"], :Think=>["City"], :Toyota=>["4Runner", "Allion", "Alphard", "Auris", "Avalon", "Avensis", "Avensis Verso", "Aygo", "C-HR", "Camry", "Carina", "Celica", "Chaser", "Corolla", "Corolla Verso", "Cressida", "Cresta", "Crown", "Dyna", "Echo", "Estima", "FJ Cruiser", "GT 86", "Hiace", "Highlander", "Hilux", "Ipsum", "iQ", "Kluger V", "Land Cruiser", "Liteace", "Matrix", "Mega Cruiser", "MR 2", "Nadia", "Paseo", "Picnic", "Previa", "Prius", "Prius C", "Prius+", "ProAce", "RAV4", "Rush", "Sequoia", "Sienna", "Soarer", "Solara", "Starlet", "Supra", "Tacoma", "Tercel", "Tundra", "Urban Cruiser", "Venza", "Verso", "Verso-S", "Yaris", "Yaris Verso"], :Trabant=>["601"], :Triumph=>["Dolomite", "Moss", "Spitfire", "TR6"], :UAZ=>["2101", "2103", "2206", "3151", "3303", "3741", "3909", "3962", "452", "469", "Hunter", "Patriot", "Pickup"], :Vauxhall=>["Astra", "Insignia", "Vectra"], :Venturi=>["210", "260", "300", "400"], :Volkswagen=>["Amarok", "Beetle", "Bora", "Buggy ", "Caddy", "California", "Caravelle", "Corrado", "Crafter", "Derby", "Eos", "Fox", "Golf", "Golf Plus", "Golf Sportsvan", "Golf SportWagen", "Iltia", "Jetta", "Kaefer", "Karmann Ghia", "LT", "Lupo", "Multivan", "Passat", "Passat Alltrack", "Passat CC", "Phaeton", "Polo", "Rabbit", "Routan", "Santana", "Scirocco", "Sharan", "Taro", "Tiguan", "Touareg", "Touran", "Transporter", "Up", "Vento"], :Volvo=>["240", "244", "245", "262", "264", "340", "360", "440", "460", "480", "740", "744", "745", "760", "780", "850", "855", "940", "944", "945", "960", "965", "Amazon", "C30", "C70", "Polar", "S40", "S60", "S70", "S80", "S90", "V40", "V40 Cross Country", "V50", "V60", "V60 Cross Country ", "V70", "V90", "XC60", "XC70", "XC90"], :Wanderer=>["W 25K"], :Wartburg=>["311", "353"], :ZAZ=>["965", "966", "968", "968A", "968M", "Tavrija"]}
end