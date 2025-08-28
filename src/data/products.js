const products = [
  { id: 1, title: "REVERSO Gloves-Choco/Gold", desc: "VENUM 05411-058", price: 67900, oldPrice: 77500, season: "все", images: [
    require('../pages/productimage/venum-05411-058-1.webp'),
    require('../pages/productimage/venum-05411-058-2.webp'),
    require('../pages/productimage/venum-05411-058-3.webp'),
    require('../pages/productimage/venum-05411-058-4.webp')
  ], category: 'gloves', discount: true },
  { id: 2, title: "Impact Gloves-Earth Kaki", desc: "VENUM 05061-015", price: 49900, oldPrice: 54900, season: "все", category: 'gloves', images: [
    require('../pages/productimage/venum-05061-015-1.webp'),
    require('../pages/productimage/venum-05061-015-2.webp'),
    require('../pages/productimage/venum-05061-015-3.webp'),
    require('../pages/productimage/venum-05061-015-4.webp')
  ], discount: true },
  { id: 3, title: "Impact Gloves-Icy Blue", desc: "VENUM 05061-018", price: 49900, oldPrice: 54900, season: "все", category: 'gloves', images: [
    require('../pages/productimage/venum-05061-018-1.webp'),
    require('../pages/productimage/venum-05061-018-2.webp'),
    require('../pages/productimage/venum-05061-018-3.webp'),
    require('../pages/productimage/venum-05061-018-4.webp')
  ], discount: true },
  { id: 4, title: "TIGER KIDS Gloves", desc: "VENUM 05380-117", price: 23900, oldPrice: 0, season: "все", category: 'gloves', images: [
    require('../pages/productimage/venum-05380-117-1.webp'),
    require('../pages/productimage/venum-05380-117-2.webp'),
    require('../pages/productimage/venum-05380-117-3.webp'),
    require('../pages/productimage/venum-05380-117-4.webp')
  ], discount: false },
  { id: 5, title: "REVERSO Gloves-Black", desc: "VENUM 05411-114", price: 67900, oldPrice: 77500, season: "все", category: 'gloves', images: [ require('../pages/productimage/venum-05411-114-1.webp') ], discount: true },
  { id: 6, title: "TIGER KIDS Gloves", desc: "VENUM 05380-117", price: 23900, oldPrice: 0, season: "все", category: 'gloves', images: [
    require('../pages/productimage/venumelit1.webp'),
    require('../pages/productimage/venumelit2.webp'),
    require('../pages/productimage/venumelit3.webp'),
    require('../pages/productimage/venumelit4.webp')
  ], discount: false },
  
  // MMA gloves ------------------------------------------------------------------------------------------------------
  { id: 50, title: "MMA Gloves - Elite Black", desc: "", price: 24670, oldPrice: 37900, season: "все", category: 'MMAGloves', images: [
    require('../pages/productimage/glovesMMA1webp.webp'),
    require('../pages/productimage/glovesMMA2.webp'),
    require('../pages/productimage/glovesMMA3.webp')
  ], discount: false },

  { id: 53, title: "Venum Challenger", desc: "VENUM Challenger series", price: 27400, oldPrice: 33900, season: "все", category: 'MMAGloves', images: [
    require('../pages/productimage/venumchelenger1.webp'),
    require('../pages/productimage/venumchelenger2.webp'),
    require('../pages/productimage/venumchelenger3.webp'),
    require('../pages/productimage/venumchelenger4.webp')
  ], discount: true },
  { id: 54, title: "Venum Undisputed", desc: "VENUM Undisputed series", price: 32900, oldPrice: 0, season: "все", category: 'MMAGloves', images: [
    require('../pages/productimage/venumundisputed1.webp'),
    require('../pages/productimage/venumundisputed2.webp'),
    require('../pages/productimage/venumundisputed3.webp'),
    require('../pages/productimage/venumundisputed4.webp')
  ], discount: true },

  // Headguards
  { id: 60, title: "Headgear-Earth Kaki", desc: "Headguard Venum 05063-015", price: 46900, oldPrice: 51900, season: "все", category: 'headguards', images: [
    require('../pages/productimage/venum-05063-015-1.webp'),
    require('../pages/productimage/venum-05063-015-2.webp'),
    require('../pages/productimage/venum-05063-015-3.webp'),
    require('../pages/productimage/venum-05063-015-4.webp')
  ], discount: true },
  { id: 61, title: "Headgear-Icy Blue", desc: "Headguard Venum 05063-018", price: 46900, oldPrice: 51900, season: "все", category: 'headguards', images: [
    require('../pages/productimage/venum-05063-018-1.webp'),
    require('../pages/productimage/venum-05063-018-2.webp'),
    require('../pages/productimage/venum-05063-018-3.webp'),
    require('../pages/productimage/venum-05063-018-4.webp')
  ], discount: true },

  // Pads (сумки / пэды)
  { id: 70, title: "UFC Venum FIGHT WEEK 4.0 Sport Bags - Blue", desc: "VNMUFC 00312-004", price: 54000, oldPrice: 0, season: "все", category: 'pads', images: [
    require('../pages/productimage/VNMUFC-00312-004-1.webp'),
    require('../pages/productimage/VNMUFC-00312-004-2.webp'),
    require('../pages/productimage/VNMUFC-00312-004-3.webp'),
    require('../pages/productimage/VNMUFC-00312-004-4.webp')
  ], discount: false },
  { id: 71, title: "UFC Venum FIGHT WEEK 4.0 Sport Bags - Dark Brown", desc: "VNMUFC 00312-058", price: 54000, oldPrice: 0, season: "все", category: 'pads', images: [
    require('../pages/productimage/VNMUFC-00312-058-1.webp'),
    require('../pages/productimage/VNMUFC-00312-058-2.webp'),
    require('../pages/productimage/VNMUFC-00312-058-3.webp'),
    require('../pages/productimage/VNMUFC-00312-058-4.webp')
  ], discount: false },
  { id: 72, title: " Venum Bag-URBAN CAMO", desc: "VNMUFC 00267-651", price: 46000, oldPrice: 51900, season: "все", category: 'pads', images: [
    require('../pages/productimage/VNMUFC-00267-651-1.webp'),
    require('../pages/productimage/VNMUFC-00267-651-2.webp'),
    require('../pages/productimage/VNMUFC-00267-651-3.webp'),
    require('../pages/productimage/VNMUFC-00267-651-4.webp')
  ], discount: false },

  // Handwraps (бинты)---------------------------------------------------------------------------------------------------------


  { id: 121, title: "Hand Wraps", desc: "Бинты Venum 2-5м и 4м", price: 4900, oldPrice: 7500, season: "все", category: 'HandWraps', images: [
    require('../pages/productimage/kontakt1.webp'),
    require('../pages/productimage/kontakt2.webp'),
    require('../pages/productimage/kontakt3.webp'),
    require('../pages/productimage/kontakt4.webp')
  ], discount: false },
  { id: 122, title: "Hand Wraps", desc: "Бинты Venum 2.5м и 4м", price: 4900, oldPrice: 7500, season: "все", category: 'HandWraps', images: [
    require('../pages/productimage/kontakt11.webp'),
    require('../pages/productimage/kontakt12.webp'),
    require('../pages/productimage/kontakt13.webp'),
    require('../pages/productimage/kontakt14.webp')
  ], discount: false },
  { id: 123, title: "Hand Wraps", desc: "Эластичные бинты 2.5м и 4м", price: 4900, oldPrice: 7500, season: "все", category: 'HandWraps', images: [
    require('../pages/productimage/kontakt21.webp'),
    require('../pages/productimage/kontakt22.webp'),
    require('../pages/productimage/kontakt23.webp'),
    require('../pages/productimage/kontakt24.webp')
  ], discount: false },
  { id: 124, title: "Hand Wraps", desc: "бинты Venum 2.5м и 4м", price: 4900, oldPrice: 7500, season: "все", category: 'HandWraps', images: [
    require('../pages/productimage/kontakt31.webp'),
    require('../pages/productimage/kontakt32.webp'),
    require('../pages/productimage/kontakt33.webp'),
    require('../pages/productimage/kontakt34.webp')
  ], discount: true },
  
  // Leggings (men) 
  { id: 200, title: "Venum G-Fit Air Men's Spats - Digital Urban Camo", desc: "", price: 21900, oldPrice: 0, season: "все", category: 'leggings', images: [
    require('../pages/productimage/manleggingsblack-1.webp'),
    require('../pages/productimage/manleggingsblack-2.webp'),
    require('../pages/productimage/manleggingsblack-3.webp'),
    require('../pages/productimage/manleggingsblack-4.webp')
  ], discount: false },
  { id: 201, title: "UFC Fusion by Venum Fight Week Men’s Performance Tight - Blue", desc: "", price: 26900, oldPrice: 28900, season: "все", category: 'leggings', images: [
    require('../pages/productimage/manleggingsblue1.webp'),
    require('../pages/productimage/manleggingsblue2.webp'),
    require('../pages/productimage/manleggingsblue3.webp'),
    require('../pages/productimage/manleggingsblue4.webp')
  ], discount: false },
  { id: 202, title: "UFC Fusion by Venum Fight Week Men’s Performance Tight - Dark Brown", desc: "", price: 26900, oldPrice: 28900, season: "все", category: 'leggings', images: [
    require('../pages/productimage/manleggingsbrown1.webp'),
    require('../pages/productimage/manleggingsbrown2.webp'),
    require('../pages/productimage/manleggingsbrown3.webp'),
    require('../pages/productimage/manleggingsbrown4.webp')
  ], discount: false },
  { id: 203, title: "Venum G-Fit Air Men's Spats - Army Camo", desc: "", price: 21900, oldPrice: 0, season: "все", category: 'leggings', images: [
    require('../pages/productimage/manleggingsgfit-1.webp'),
    require('../pages/productimage/manleggingsgfit-2.webp'),
    require('../pages/productimage/manleggingsgfit-3.webp'),
    require('../pages/productimage/manleggingsgfit-4.webp')
  ], discount: false },
  
  // Rashguards
  { id: 300, title: "UFC Venum FIGHT WEEK Rashguard Blue", desc: "Rashguard Venum 00302-004", price: 30900, oldPrice: 33500, season: "все", category: 'rashguards', images: [
    require('../pages/productimage/venum-00302-004-1.webp'),
    require('../pages/productimage/venum-00302-004-2.webp'),
    require('../pages/productimage/venum-00302-004-3.webp'),
    require('../pages/productimage/venum-00302-004-4.webp')
  ], discount: false },
  { id: 301, title: "UFC Venum FIGHT WEEK Rashguard Dark Brown", desc: "Rashguard Venum 00302-058", price: 30900, oldPrice: 33500, season: "все", category: 'rashguards', images: [
    require('../pages/productimage/venum-00302-058-1.webp'),
    require('../pages/productimage/venum-00302-058-2.webp'),
    require('../pages/productimage/venum-00302-058-3.webp'),
    require('../pages/productimage/venum-00302-058-4.webp')
  ], discount: false },
  { id: 302, title: "Rashguard SS-Army Camo", desc: "Rashguard Venum 05007-534", price: 27000, oldPrice: 0, season: "все", category: 'rashguards', images: [
    require('../pages/productimage/venum-05007-534-1.webp'),
    require('../pages/productimage/venum-05007-534-2.webp'),
    require('../pages/productimage/venum-05007-534-3.webp'),
    require('../pages/productimage/venum-05007-534-4.webp')
  ], discount: false },
  { id: 303, title: " Venum G-Fit Air Rashguard LS Urban Camo", desc: "Rashguard Venum 05008-543", price: 28500, oldPrice: 0, season: "все", category: 'rashguards', images: [
    require('../pages/productimage/venum-05008-543-1.webp'),
    require('../pages/productimage/venum-05008-543-2.webp'),
    require('../pages/productimage/venum-05008-543-3.webp'),
    require('../pages/productimage/venum-05008-543-4.webp')
  ], discount: false },
  { id: 307, title: "Venum G-Fit Air Men's Short Sleeve Rashguard - Digital Urban Camo", desc: "Rashguard Venum 05007-543", price: 28500, oldPrice: 0, season: "все", category: 'rashguards', images: [
    require('../pages/productimage/venum-05007-543-1.webp'),
    require('../pages/productimage/venum-05007-543-2.webp'),
    require('../pages/productimage/venum-05007-543-3.webp'),
    require('../pages/productimage/venum-05007-543-4.webp')
  ], discount: false },
  { id: 304, title: "UFC Fusion by Venum Fight Week Men’s Performance Long Sleeve Rashguard - Blue", desc: "Rashguard Venum 00307-004", price: 30900, oldPrice: 33500, season: "все", category: 'rashguards', images: [
    require('../pages/productimage/venum-00307-004-1.webp'),
    require('../pages/productimage/venum-00307-004-2.webp'),
    require('../pages/productimage/venum-00307-004-3.webp'),
    require('../pages/productimage/venum-00307-004-4.webp')
  ], discount: false },
  { id: 305, title: "UFC Fusion by Venum Fight Week Men’s Performance Long Sleeve Rashguard - Dark Brown", desc: "Rashguard Venum 00307-058", price: 30900, oldPrice: 33500, season: "все", category: 'rashguards', images: [
    require('../pages/productimage/venum-00307-058-1.webp'),
    require('../pages/productimage/venum-00307-058-2.webp'),
    require('../pages/productimage/venum-00307-058-3.webp'),
    require('../pages/productimage/venum-00307-058-4.webp')
  ], discount: false },
  
  // Shorts (added: user request - 9 products)
  { id: 400, title: "UFC Fusion by Venum Fight Week Men’s Performance Short Sleeve Rashguard -Blue", desc: "Shorts Venum 00302-004", price: 29500, oldPrice: 33500, season: "все", category: 'shorts', images: [
    require('../pages/productimage/venum-00302-004-1.webp'),
    require('../pages/productimage/venum-00302-004-2.webp'),
    require('../pages/productimage/venum-00302-004-3.webp'),
    require('../pages/productimage/venum-00302-004-4.webp')
  ], discount: false },
  { id: 401, title: "UFC Fusion by Venum Fight Week Men’s Performance Short Sleeve Rashguard - Dark Brown", desc: "Shorts Venum 00302-058", price: 29500, oldPrice: 33500, season: "все", category: 'shorts', images: [
    require('../pages/productimage/venum-00302-058-1.webp'),
    require('../pages/productimage/venum-00302-058-2.webp'),
    require('../pages/productimage/venum-00302-058-3.webp'),
    require('../pages/productimage/venum-00302-058-4.webp')
  ], discount: false },
  { id: 402, title: "Venum G-Fit Air Men's Training Shorts - Urban Digital Camo", desc: "Shorts Venum 05005-534", price: 23800, oldPrice: 0, season: "все", category: 'shorts', images: [
    require('../pages/productimage/venum-05005-534-1.webp'),
    require('../pages/productimage/venum-05005-534-2.webp'),
    require('../pages/productimage/venum-05005-534-3.webp'),
    require('../pages/productimage/venum-05005-534-4.webp')
  ], discount: false },
  { id: 403, title: " Venum G-Fit Air Men's Training Shorts - Army Camo", desc: "Shorts Venum 05006-534", price: 23800, oldPrice: 0, season: "все", category: 'shorts', images: [
    require('../pages/productimage/venum-05006-534-1.webp'),
    require('../pages/productimage/venum-05006-534-2.webp'),
    require('../pages/productimage/venum-05006-534-3.webp'),
    require('../pages/productimage/venum-05006-534-4.webp')
  ], discount: false },
  { id: 404, title: "Venum Technical 3.0 Training Shorts - Night Blue", desc: "Shorts Venum 05363-004", price: 23500, oldPrice: 25900, season: "все", category: 'shorts', images: [
    require('../pages/productimage/venum-05363-004-1.webp'),
    require('../pages/productimage/venum-05363-004-2.webp'),
    require('../pages/productimage/venum-05363-004-3.webp'),
    require('../pages/productimage/venum-05363-004-4.webp')
  ], discount: false },
  { id: 405, title: "Venum Technical 3.0 Training Shorts - Forest Green", desc: "Shorts Venum 05363-005", price: 23500, oldPrice: 25900, season: "все", category: 'shorts', images: [
    require('../pages/productimage/venum-05363-005-1.webp'),
    require('../pages/productimage/venum-05363-005-2.webp'),
    require('../pages/productimage/venum-05363-005-3.webp'),
    require('../pages/productimage/venum-05363-005-4.webp')
  ], discount: false },
  { id: 406, title: "Venum Technical 3.0 Training Shorts - Graphite", desc: "Shorts Venum 05363-052", price: 23500, oldPrice: 25900, season: "все", category: 'shorts', images: [
    require('../pages/productimage/venum-05363-052-1.webp'),
    require('../pages/productimage/venum-05363-052-2.webp'),
    require('../pages/productimage/venum-05363-052-3.webp'),
    require('../pages/productimage/venum-05363-052-4.webp')
  ], discount: false },
  { id: 407, title: "UFC Fusion by Venum Fight Week Men’s Vale Tudo Short - Blue", desc: "Shorts Venum 00306-004", price: 23400, oldPrice: 25900, season: "все", category: 'shorts', images: [
    require('../pages/productimage/venum-00306-004-1.webp'),
    require('../pages/productimage/venum-00306-004-2.webp'),
    require('../pages/productimage/venum-00306-004-3.webp'),
    require('../pages/productimage/venum-00306-004-4.webp')
  ], discount: false },
  { id: 408, title: "UFC Fusion by Venum Fight Week Men’s Vale Tudo Short - Dark Brown", desc: "Shorts Venum 00306-058", price: 23400, oldPrice: 25900, season: "все", category: 'shorts', images: [
    require('../pages/productimage/venum-00306-058-1.webp'),
    require('../pages/productimage/venum-00306-058-2.webp'),
    require('../pages/productimage/venum-00306-058-3.webp'),
    require('../pages/productimage/venum-00306-058-4.webp')
  ], discount: false },
  { id: 409, title: "Venum G-Fit Air Men's Fight Shorts - Deep Black/Desert Sand", desc: "Shorts Venum 05011-617", price: 24900, oldPrice: 27900, season: "все", category: 'shorts', images: [
    require('../pages/productimage/venum-05011-617-1.webp'),
    require('../pages/productimage/venum-05011-617-2.webp'),
    require('../pages/productimage/venum-05011-617-3.webp'),
    require('../pages/productimage/venum-05011-617-4.webp')
  ], discount: false },

  // Underwear (user request: 00309-004 and 00309-058 -> 00309-005 used because 00309-058 not found)
  { id: 500, title: "UFC Fusion by Venum Fight Week Men’s Weigh-In Underwear - Blue", desc: "Underwear Venum 00309-004", price: 13900, oldPrice: 0, season: "все", category: 'underwear', images: [
    require('../pages/productimage/venum-00309-004-1.webp'),
    require('../pages/productimage/venum-00309-004-2.webp'),
    require('../pages/productimage/venum-00309-004-3.webp'),
    require('../pages/productimage/venum-00309-004-4.webp')
  ], discount: false },
  { id: 501, title: "UFC Fusion by Venum Fight Week Men’s Weigh-In Underwear - Dark Brown", desc: "Underwear Venum 00309-058", price: 13900, oldPrice: 0, season: "все", category: 'underwear', images: [
    require('../pages/productimage/venum-00309-005-1.webp'),
    require('../pages/productimage/venum-00309-005-2.webp'),
    require('../pages/productimage/venum-00309-005-3.webp'),
    require('../pages/productimage/venum-00309-005-4.webp')
  ], discount: false },
  // T-shirts (user request: add 7 Venum T-shirts)
  { id: 510, title: "UFC Fusion by Venum Fight Week Men’s Dry-Tech T-Shirt - Blue", desc: "T-Shirt Venum 00303-004", price: 22500, oldPrice: 24900, season: "все", category: 'tshirts', images: [
    require('../pages/productimage/venum-00303-004-1.webp'),
    require('../pages/productimage/venum-00303-004-2.webp'),
    require('../pages/productimage/venum-00303-004-3.webp'),
    require('../pages/productimage/venum-00303-004-4.webp')
  ], discount: false },
  { id: 511, title: "UFC Fusion by Venum Fight Week Men’s Dry-Tech T-Shirt - Dark Brown", desc: "T-Shirt Venum 00303-058", price: 22500, oldPrice: 24900, season: "все", category: 'tshirts', images: [
    require('../pages/productimage/venum-00303-058-1.webp'),
    require('../pages/productimage/venum-00303-058-2.webp'),
    require('../pages/productimage/venum-00303-058-3.webp'),
    require('../pages/productimage/venum-00303-058-4.webp')
  ], discount: false },
  { id: 512, title: "Venum Technical 3.0 Dry-Tech T-Shirt - Night Blue", desc: "T-Shirt Venum 05364-004", price: 21900, oldPrice: 23900, season: "все", category: 'tshirts', images: [
    require('../pages/productimage/venum-05364-004-1.webp'),
    require('../pages/productimage/venum-05364-004-2.webp'),
    require('../pages/productimage/venum-05364-004-3.webp'),
    require('../pages/productimage/venum-05364-004-4.webp')
  ], discount: false },
  { id: 513, title: "Venum Technical 3.0 Dry-Tech T-Shirt - Forest Green", desc: "T-Shirt Venum 05364-005", price: 21900, oldPrice: 23900, season: "все", category: 'tshirts', images: [
    require('../pages/productimage/venum-05364-005-1.webp'),
    require('../pages/productimage/venum-05364-005-2.webp'),
    require('../pages/productimage/venum-05364-005-3.webp'),
    require('../pages/productimage/venum-05364-005-4.webp')
  ], discount: false },
  { id: 514, title: "Venum Technical 3.0 Dry-Tech T-Shirt - Graphite", desc: "T-Shirt Venum 05364-052", price: 21900, oldPrice: 23900, season: "все", category: 'tshirts', images: [
    require('../pages/productimage/venum-05364-052-1.webp'),
    require('../pages/productimage/venum-05364-052-2.webp'),
    require('../pages/productimage/venum-05364-052-3.webp'),
    require('../pages/productimage/venum-05364-052-4.webp')
  ], discount: false },
  { id: 515, title: "Venum G-Fit Air Men's Dry-Tech T-Shirt - Army Camo", desc: "T-Shirt Venum 050055-534", price: 19900, oldPrice: 21900, season: "все", category: 'tshirts', images: [
    require('../pages/productimage/venum-050055-534-1.webp'),
    require('../pages/productimage/venum-050055-534-2.webp'),
    require('../pages/productimage/venum-050055-534-3.webp'),
    require('../pages/productimage/venum-050055-534-4.webp')
  ], discount: false },
  { id: 516, title: " Venum G-Fit Air Men's Dry-Tech T-Shirt - Urban Digital Camo", desc: "T-Shirt Venum 05005-543", price: 19900, oldPrice: 21900, season: "все", category: 'tshirts', images: [
    require('../pages/productimage/venum-05005-543-1.webp'),
    require('../pages/productimage/venum-05005-543-2.webp'),
    require('../pages/productimage/venum-05005-543-3.webp'),
    require('../pages/productimage/venum-05005-543-4.webp')
  ], discount: false },
  // Hoodies (user request: 5 hoodies with provided SKUs)
  { id: 517, title: "UFC Fusion by Venum Fight Week Men’s Pullover Hoodie - Blue", desc: "Hoodie Venum 00297-004", price: 43900, oldPrice: 48500, season: "все", category: 'hudi', images: [
    require('../pages/productimage/venum-00297-004-1.webp'),
    require('../pages/productimage/venum-00297-004-2.webp'),
    require('../pages/productimage/venum-00297-004-3.webp'),
    require('../pages/productimage/venum-00297-004-4.webp')
  ], discount: false },
  { id: 518, title: "UFC Fusion by Venum Fight Week Men’s Pullover Hoodie - Dark Brown", desc: "Hoodie Venum 00297-058", price: 43900, oldPrice: 48500, season: "все", category: 'hudi', images: [
    require('../pages/productimage/venum-00297-058-1.webp'),
    require('../pages/productimage/venum-00297-058-2.webp'),
    require('../pages/productimage/venum-00297-058-3.webp'),
    require('../pages/productimage/venum-00297-058-4.webp')
  ], discount: false },
  { id: 519, title: "UFC Fusion by Venum Men’s Replica Pullover Hoodie - Black", desc: "Hoodie Venum 00333-001", price: 38900, oldPrice: 41900, season: "все", category: 'hudi', images: [
    require('../pages/productimage/venum-00299-001-1.webp'),
    require('../pages/productimage/venum-00299-001-2.webp'),
    require('../pages/productimage/venum-00299-001-3.webp'),
    require('../pages/productimage/venum-00299-001-4.webp')
  ], discount: false },
  { id: 520, title: "UFC Fusion by Venum Men’s Replica Pullover Hoodie - Champion", desc: "Hoodie Venum 00333-126", price: 38900, oldPrice: 41900, season: "все", category: 'hudi', images: [
    require('../pages/productimage/venum-00299-126-1.webp'),
    require('../pages/productimage/venum-00299-126-2.webp'),
    require('../pages/productimage/venum-00299-126-3.webp'),
    require('../pages/productimage/venum-00299-126-4.webp')
  ], discount: false },
  { id: 521, title: "Venum Trooper Men's Half-Zip Jacket - Black/Dark Charcoal", desc: "Hoodie Venum 5555-126", price: 36900, oldPrice: 0, season: "все", category: 'hudi', images: [
    require('../pages/productimage/venum-5555-126-1.webp'),
    require('../pages/productimage/venum-5555-126-2.webp'),
    require('../pages/productimage/venum-5555-126-3.webp'),
    require('../pages/productimage/venum-5555-126-4.webp')
  ], discount: false },
  // Outerwear (user request: 4 items)
  { id: 522, title: "UFC Fusion by Venum Fight Week Men’s Zip Hoodie - Blue", desc: "Jacket Venum 00299-004", price: 49900, oldPrice: 55500, season: "все", category: 'outerwear', images: [
    require('../pages/productimage/venum-00299-004-1.webp'),
    require('../pages/productimage/venum-00299-004-2.webp'),
    require('../pages/productimage/venum-00299-004-3.webp'),
    require('../pages/productimage/venum-00299-004-4.webp')
  ], discount: false },
  { id: 523, title: "UFC Fusion by Venum Fight Week Men’s Zip Hoodie - Dark Brown", desc: "Jacket Venum 00299-058", price: 49900, oldPrice: 55500, season: "все", category: 'outerwear', images: [
    require('../pages/productimage/venum-00299-058-1.webp'),
    require('../pages/productimage/venum-00299-058-2.webp'),
    require('../pages/productimage/venum-00299-058-3.webp'),
    require('../pages/productimage/venum-00299-058-4.webp')
  ], discount: false },
  { id: 524, title: "UFC Fusion by Venum Men’s Replica Zip Hoodie - Champion", desc: "Jacket Venum 00334-126", price: 34900, oldPrice: 38500, season: "все", category: 'outerwear', images: [
    require('../pages/productimage/venum-00334-126-1.webp'),
    require('../pages/productimage/venum-00334-126-2.webp'),
    require('../pages/productimage/venum-00334-126-3.webp'),
    require('../pages/productimage/venum-00334-126-4.webp')
  ], discount: false },
  { id: 525, title: "UFC Fusion by Venum Men’s Replica Zip Hoodie - Black", desc: "Jacket Venum 00334-001", price: 34900, oldPrice: 38500, season: "все", category: 'outerwear', images: [
    require('../pages/productimage/venum-00334-001-1.webp'),
    require('../pages/productimage/venum-00334-001-2.webp'),
    require('../pages/productimage/venum-00334-001-3.webp'),
    require('../pages/productimage/venum-00334-001-4.webp')
  ], discount: false },
  // Pants (user request)
  { id: 526, title: "UFC Fusion by Venum Fight Week Men’s Cotton Pant - Blue", desc: "Pants Venum 00335-004", price: 31900, oldPrice: 0, season: "все", category: 'pants', images: [
    require('../pages/productimage/venum-00335-004-1.webp'),
    require('../pages/productimage/venum-00335-004-2.webp'),
    require('../pages/productimage/venum-00335-004-3.webp'),
    require('../pages/productimage/venum-00335-004-4.webp')
  ], discount: false },
  { id: 527, title: "UFC Fusion by Venum Fight Week Men’s Cotton Pant - Dark Brown", desc: "Pants Venum 00335-058 (substituted for requested 00335-052)", price: 31900, oldPrice: 0, season: "все", category: 'pants', images: [
    require('../pages/productimage/venum-00335-058-1.webp'),
    require('../pages/productimage/venum-00335-058-2.webp'),
    require('../pages/productimage/venum-00335-058-3.webp'),
    require('../pages/productimage/venum-00335-058-4.webp')
  ], discount: false },
  { id: 528, title: "FC Fusion by Venum Men’s Replica Pant - Black", desc: "Pants Venum 00335-001", price: 29400, oldPrice: 32500, season: "все", category: 'pants', images: [
    require('../pages/productimage/venum-33333-001-1.webp'),
    require('../pages/productimage/venum-33333-001-2.webp'),
    require('../pages/productimage/venum-33333-001-3.webp'),
    require('../pages/productimage/venum-33333-001-4.webp')
  ], discount: false },
  { id: 529, title: " UFC Fusion by Venum Men’s Replica Pant - Champion", desc: "Pants Venum 00335-126", price: 29400, oldPrice: 32500, season: "все", category: 'pants', images: [
    require('../pages/productimage/venum-33333-126-1.webp'),
    require('../pages/productimage/venum-33333-126-2.webp'),
    require('../pages/productimage/venum-33333-126-3.webp'),
    require('../pages/productimage/venum-33333-126-4.webp')
  ], discount: false },
  { id: 530, title: "Venum Trooper Men's Tracksuit Pants - Black/Forest Green", desc: "Pants Venum 33335-005", price: 34500, oldPrice: 37500, season: "все", category: 'pants', images: [
    require('../pages/productimage/venum-33335-005-1.webp'),
    require('../pages/productimage/venum-33335-005-2.webp'),
    require('../pages/productimage/venum-33335-005-3.webp'),
    require('../pages/productimage/venum-33335-005-4.webp')
  ], discount: false },
];

export default products;
