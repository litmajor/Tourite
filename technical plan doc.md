https://bountifulsafaris.com/locations/zanzibar/

# Technical Documentation Plan for Developing a Similar Niche Website: Zanzibar Tour Booking Platform

Based on a deep analysis of the reference website (https://bountifulsafaris.com/locations/zanzibar/), this document outlines a plan for developing a similar niche site focused on Zanzibar beach holidays and tours, targeting users from Nairobi, Kenya. The site would feature tour listings, detailed package pages, pricing variations, and customization options. The plan extracts key elements like locations, tour packages, attractions, and prices to inform data models, site structure, UI/UX features, and backend requirements.

The reference site is a tour aggregator emphasizing flying vacations from Nairobi, with a focus on all-inclusive beach resorts, excursions, and cultural experiences in Zanzibar. It uses a simple structure with a location overview page linking to individual tour pages. Prices are dynamic based on dates, accommodations, and group types (e.g., per person sharing, single, child). Common themes include Stone Town tours, Safari Blue excursions to Mnemba, sunset cruises, and optional add-ons like Jozani Forest visits.

## 1. Extracted Data from Reference Site

### 1.1 All Mentioned Locations in Zanzibar
The following unique locations are compiled from the main Zanzibar page and all linked tour pages. These include islands, beaches, cities, and attractions.

- **Islands and Archipelagos**: Zanzibar Archipelago, Unguja Island (main Zanzibar Island), Pemba Island, Mnemba Island/Atoll, Prison Island (Changuu Island).
- **Cities and Towns**: Zanzibar City, Stone Town (UNESCO World Heritage Site), Matemwe, Nungwi Village.
- **Beaches**: Nungwi Beach, Kendwa Beach, Paje Beach, Kiwengwa Beach, Marumbi Beach (east coast), Muyuni Beach, Blue Lagoon, Sandbank.
- **Natural and Protected Areas**: Jozani Forest, Chwaka National Park, Selous Game Reserve (mainland Tanzania, mentioned in bucket lists), Mikumi National Park (mainland Tanzania, mentioned in bucket lists).
- **Markets and Historical Sites**: Darajani Market (in Stone Town), Slave Trade Caves, Palace (in Stone Town).
- **Other**: North-western coast (e.g., near Mangapwani for Sea Cliff Resort), East coast (general for several resorts).

These locations can be used for tagging tours, search filters, or interactive maps on the new site.

### 1.2 All Tour Packages and Attractions Listed
The site lists 9 main tour packages, each centered on beach resorts with bundled excursions. Attractions are embedded as activities (e.g., tours, cruises). No detailed day-by-day itineraries are provided on most pages—suggesting a feature gap for enhancement in the new site. Common attractions across packages:

- **Core Attractions/Activities** (included in most packages):
  - Stone Town Tour & Spice Tour: Historical walking tour in Stone Town, focusing on architecture, markets, and spice plantations.
  - Safari Blue Excursion to Mnemba: Full-day boat trip with snorkeling, dolphin watching (no swimming required), fishing, seafood lunch, and equipment provided.
  - Sunset Cruise: Evening boat ride for relaxation.
  - Swimming with Turtles (included in some, like 6-day packages).
  - Use of Hotel Amenities: Pools, spas, water sports (e.g., diving, snorkeling, beach sports).

- **Optional Attractions/Activities** (at extra cost, mentioned in bucket lists):
  - Sandbank Picnic.
  - Jozani Forest Tour: Wildlife viewing in the forest.
  - Prison Island Tour: Boat trip to Changuu Island.
  - Nungwi Village Tour.
  - Day Safari to Selous Game Reserve or Mikumi National Park (from Zanzibar).
  - Cool Quads Tour.
  - 5-Hour Snorkeling with Dolphins and Sea Turtles.
  - Cooking Class & Spice Tour.

**Tour Packages** (with durations, key attractions, and accommodations):
- **4 Days Zanzibar Pre-Christmas Holidays** (4 days): Focuses on beach relaxation with core excursions (Safari Blue, Stone Town, Sunset Cruise). Accommodations: Paradise Beach Resort, Alladin Zanzibar, Toa Hotel & Spa (all all-inclusive).
- **Blue Bay Beach Resort & Spa** (6 days, 5 nights): Beachfront stay with water sports, diving, cultural excursions, and core activities. Accommodation: Bluebay Zanzibar Hotel (Deluxe Garden View, half board).
- **Royal Zanzibar Beach Resort** (6 days, 5 nights): Luxurious beach escape with snorkeling, beach sports, and core excursions. Accommodation: Royal Zanzibar (Superior Room, all-inclusive).
- **Zanzibar Bay Resort** (6 days, 5 nights): Laid-back island stay near Chwaka National Park, with water sports, dhow excursions, and core activities. Accommodation: Zanzibar Bay Resort (Luxury Room, all-inclusive).
- **Sea Cliff Resort & Spa** (6 days, 5 nights): Cliffside luxury with golf access, spa treatments, water activities, and core excursions. Accommodation: Sea Cliff Resort & Spa (Garden View Room, half board).
- **Diamonds Mapenzi Beach** (6 days, 5 nights): Scenic shoreline stay with abundant water sports and core activities. Accommodation: Diamonds Mapenzi Beach (Garden View Room, all-inclusive).
- **The Mora Zanzibar** (6 days, 5 nights): Luxury suites with private pools, water sports, and core excursions. Accommodation: The Mora Zanzibar (Junior Suite Garden View, all-inclusive).
- **6 Days, 5 Nights Zanzibar Beach Holiday Experience** (6 days, 5 nights): Extended beach holiday with swimming with turtles and core activities. Accommodations: The Mora Zanzibar, Royal Zanzibar, The Residence Zanzibar (half board), Konokono Beach Resort (half board).
- **5 Days, 4 Nights Zanzibar Holiday Packages** (5 days, 4 nights): Shorter version with core excursions. Accommodations: Same as above (The Mora, Royal, Residence, Konokono).

### 1.3 All Prices
Prices are starting from USD, per person sharing (PPS), and vary by date ranges (e.g., seasonal: Jan-Mar high season, Apr-Jun low), accommodation, meal plan (all-inclusive or half board), and group type (adult sharing, single, child). All include flights from Nairobi, transfers, insurance, and core excursions. Exclusions: Yellow fever certificate, infrastructure tax (~USD 5-10/night), tips, personal expenses, entry fees to attractions. Rates subject to availability.

Use tables for clarity:

**4 Days Zanzibar Pre-Christmas Holidays** (Validity: Dec 1-18, 2025; All-Inclusive):
| Accommodation | Adult PPS (USD) | Single Room (USD) | Child (USD) |
|---------------|----------------|-------------------|-------------|
| Paradise Beach Resort | 930 | 1,120 | 770 |
| Alladin Zanzibar | 1,080 | 1,350 | 970 |
| Toa Hotel & Spa | 1,190 | 1,630 | 940 |

**Blue Bay Beach Resort & Spa** (6 days; Half Board; Dec/Festive):
| Room Type | Adult Sharing (USD) | Child Sharing (USD) |
|-----------|---------------------|---------------------|
| Deluxe Garden View | 2,415 | 705 |

**Royal Zanzibar Beach Resort** (6 days; All-Inclusive; Dec/Festive):
| Room Type | Adult Sharing (USD) | Child Sharing (USD) |
|-----------|---------------------|---------------------|
| Superior | 3,490 | 2,100 |

**Zanzibar Bay Resort** (6 days; All-Inclusive; Dec/Festive):
| Room Type | Adult Sharing (USD) | Child Sharing (USD) |
|-----------|---------------------|---------------------|
| Luxury | 1,410 | 930 |

**Sea Cliff Resort & Spa** (6 days; Half Board; Dec/Festive):
| Room Type | Adult Sharing (USD) | Child Sharing (USD) |
|-----------|---------------------|---------------------|
| Garden View | 1,955 | 1,070 |

**Diamonds Mapenzi Beach** (6 days; All-Inclusive; Dec/Festive):
| Room Type | Adult Sharing (USD) | Child Sharing (USD) |
|-----------|---------------------|---------------------|
| Garden View | 2,910 | 705 |

**The Mora Zanzibar** (6 days; All-Inclusive; Dec/Festive):
| Room Type | Adult Sharing (USD) | Child Sharing (USD) |
|-----------|---------------------|---------------------|
| Junior Suite Garden View | 3,910 | 890 |

**6 Days, 5 Nights Zanzibar Beach Holiday Experience** (Starting from 1,705 USD; Varies by date):
| Accommodation (Meal Plan) | Jan-Mar (USD) | Apr-Jun (USD) | Jul-Aug (USD) | Sep-Oct (USD) | Nov-Dec (USD) |
|---------------------------|---------------|---------------|---------------|---------------|---------------|
| The Mora (All-Inclusive) | 1,910 | 1,600-1,770 | 2,025 | 1,800 | 1,865 |
| Royal Zanzibar (All-Inclusive) | 2,070 | 1,565-1,730 | 2,070 | 1,760 | 1,705 |
| The Residence (Half Board) | 2,025 | 1,825-1,890 | 2,400 | 2,025 | 1,825 |
| Konokono (Half Board) | 2,325 | 2,115 | 2,325-2,535 | 2,325 | 2,115 |

**5 Days, 4 Nights Zanzibar Holiday Packages** (Starting from 1,445 USD; Varies by date):
| Accommodation (Meal Plan) | Jan-Mar (USD) | Apr-Jun (USD) | Jul-Aug (USD) | Sep-Oct (USD) | Nov-Dec (USD) |
|---------------------------|---------------|---------------|---------------|---------------|---------------|
| The Mora (All-Inclusive) | 1,690 | 1,445-1,575 | 1,780 | 1,600 | 1,655 |
| Royal Zanzibar (All-Inclusive) | 1,815 | 1,415-1,545 | 1,815 | 1,570 | 1,525 |
| The Residence (Half Board) | 1,780 | 1,625-1,675 | 2,080 | 1,780 | 1,625 |
| Konokono (Half Board) | 2,020 | 1,850 | 2,020-2,190 | 2,020 | 1,850 |

## 2. Development Plan for Similar Website

### 2.1 Site Structure and Navigation
- **Homepage**: Hero banner with Zanzibar imagery, search bar for tours, featured packages carousel.
- **Locations Page**: Overview of Zanzibar (e.g., /locations/zanzibar/) with sub-sections for beaches, islands, attractions. Include interactive map (e.g., Google Maps integration).
- **Tours List Page**: Grid or list view of packages with filters (duration, price range, date, accommodation type). Paginate if many.
- **Individual Tour Pages**: Detailed view (e.g., /tours/[slug]/) with sections: Overview, Itinerary (add day-by-day even if reference lacks it), Locations/Attractions, Pricing Table, Inclusions/Exclusions, Accommodations, Booking Form.
- **Custom Tour Plan**: Form-based page (/custom-tour-plan/) for user requests.
- **Other Pages**: About, Contact, Blog (for Zanzibar tips), FAQ (e.g., yellow fever requirements).
- **Footer**: Contact info (phone, email, address), social links.
### 2.2 Data Models
- **Tour Model**:
  - Name (string)
  - Slug (string)
  - Duration (string, e.g., "6 days, 5 nights")
  - Description (text)
  - Locations (array of strings)
  - Activities (array of objects: {name, description, included: boolean})
  - Prices (array of objects: {accommodation: string, mealPlan: string, dateRange: string, adultPPS: number, single: number, child: number})
  - Inclusions (array of strings)
  - Exclusions (array of strings)
  - Accommodations (array of objects: {name, description, roomType: string})
  - Highlights (array of strings)
  - Images (array of URLs)
  - Validity (string, e.g., "Jan 2026 - Dec 2026")

- **Location Model**: Name, Type (beach/island/etc.), Description, Related Tours (array of tour IDs).
- **Attraction Model**: Name, Description, Location, Cost (if optional).

### 2.3 UI/UX Features
- **Responsive Design**: Mobile-first, with large images for beaches/resorts.
- **Components**:
  - Tour Card: Image, name, starting price, duration, "View Details" button.
  - Pricing Table: Dynamic based on user selections (e.g., dates, group size).
  - Booking Form: Fields for dates, travelers, contact; integrate with payment gateway (e.g., Stripe for USD payments).
  - Filters/Search: By location, price, duration; autocomplete for attractions.
  - Interactive Elements: Accordion for inclusions/exclusions, gallery for resort photos.
- **Enhancements over Reference**: Add day-by-day itineraries, user reviews, real-time availability checker, currency converter (USD to KES).

### 2.4 Backend and Technical Requirements
- **Tech Stack**: React or Vue.js for frontend; Node.js/Express or Django for backend; MongoDB or PostgreSQL for database.
- **APIs**: RESTful API for tour data; authentication API for user bookings.
- **Integrations**: Flight API (for bundled tickets), Maps API, Email (for booking confirmations), Analytics (Google Analytics).
- **Security**: HTTPS, user authentication for bookings, GDPR compliance for personal data.
- **SEO**: Meta tags for tours, sitemap, fast loading (optimize images).
- **Admin Panel**: CRUD for tours, prices; bulk upload for seasonal rates.

### 2.5 Development Phases
1. **Research/Design**: Wireframes based on this doc (1-2 weeks).
2. **Backend Setup**: Models, API endpoints (2-3 weeks).
3. **Frontend Build**: Pages, components (3-4 weeks).
4. **Testing**: Functionality, mobile, edge cases (e.g., price variations) (1 week).
5. **Deployment**: Hosting (AWS/Vercel), monitoring.
6. **Post-Launch**: User feedback, iterative improvements.

## 3. Locations Page Implementation: Zanzibar

### 3.1 Page Structure (`/locations/zanzibar/`)
The Locations Page serves as a hub for discovering Zanzibar's regions, attractions, and available tours. This page aggregates all geographic and experiential data to help users explore and filter tours by location.

**Page Layout (Top to Bottom)**:
1. **Hero Banner**: Hero image of Zanzibar (Nungwi Beach or Stone Town), headline "Discover Zanzibar", subtitle "Explore pristine beaches, cultural heritage, and island adventures"
2. **Quick Stats**: Cards showing key info (e.g., "9+ Resort Packages", "20+ Attractions", "Starting from $1,410")
3. **Location Categories** (Tabbed or Accordion Interface):
   - Islands & Archipelagos
   - Cities & Towns
   - Beaches
   - Natural & Protected Areas
   - Markets & Historical Sites
4. **Related Tours Section**: Grid of tours available from this location
5. **Attractions Showcase**: Gallery of must-do activities with prices
6. **Interactive Map**: Google Maps embed showing all locations and tour starting points
7. **FAQ Section**: Yellow fever, best time to visit, travel tips

### 3.2 Zanzibar Locations Data Structure

**Islands & Archipelagos**:
```json
{
  "id": "islands_001",
  "category": "Island",
  "locations": [
    {
      "name": "Zanzibar Archipelago",
      "slug": "zanzibar-archipelago",
      "type": "Archipelago",
      "description": "The full island group including Unguja, Pemba, and surrounding atolls. Perfect base for multi-island exploration and water sports.",
      "highlights": ["Multi-island tours", "Water sports", "Diverse marine life"],
      "relatedTours": ["4-days-pre-christmas", "6-days-beach-holiday", "5-days-packages"]
    },
    {
      "name": "Unguja Island (Main Zanzibar)",
      "slug": "unguja-island",
      "type": "Island",
      "description": "The primary island hosting most tourism infrastructure. Home to Stone Town, Nungwi, and major beach resorts.",
      "highlights": ["Stone Town UNESCO site", "Beach resorts", "Cultural experiences"],
      "relatedTours": ["all-tours"]
    },
    {
      "name": "Mnemba Island/Atoll",
      "slug": "mnemba-atoll",
      "type": "Atoll",
      "description": "Premier snorkeling and diving destination. Featured in Safari Blue excursions with dolphin watching and turtle encounters.",
      "highlights": ["Snorkeling", "Dolphin watching", "Fishing", "Seafood lunch"],
      "relatedTours": ["all-tours"],
      "activity": "Safari Blue Excursion"
    },
    {
      "name": "Prison Island (Changuu Island)",
      "slug": "prison-island",
      "type": "Island",
      "description": "Historic island with boat access from Stone Town. Featured in optional excursions with turtle sanctuary.",
      "highlights": ["Historic tours", "Turtle sanctuary", "Boat access"],
      "relatedTours": ["all-tours"],
      "activity": "Prison Island Tour",
      "estimatedCost": "Optional add-on"
    },
    {
      "name": "Pemba Island",
      "slug": "pemba-island",
      "type": "Island",
      "description": "Sister island north of Unguja, known for diving and less-touristy experiences.",
      "highlights": ["Diving", "Authentic experiences", "Marine biodiversity"],
      "relatedTours": ["custom-tours"]
    }
  ]
}
```

**Beaches**:
```json
{
  "id": "beaches_001",
  "category": "Beach",
  "locations": [
    {
      "name": "Nungwi Beach",
      "slug": "nungwi-beach",
      "type": "Beach",
      "region": "North Coast",
      "description": "Popular northern beach known for calm waters, beach bars, and vibrant nightlife. Host to several resort packages.",
      "highlights": ["Calm waters", "Beach bars", "Water sports", "Sunset views"],
      "resorts": ["Royal Zanzibar", "The Mora Zanzibar", "Paradise Beach Resort"],
      "activities": ["Swimming", "Snorkeling", "Diving", "Water sports"]
    },
    {
      "name": "Kendwa Beach",
      "slug": "kendwa-beach",
      "type": "Beach",
      "region": "North Coast",
      "description": "Pristine white sand beach adjacent to Nungwi with similar amenities but slightly quieter atmosphere.",
      "highlights": ["White sand", "Clear waters", "Beach restaurants", "Less crowded"],
      "relatedTours": ["custom-tours"]
    },
    {
      "name": "Paje Beach",
      "slug": "paje-beach",
      "type": "Beach",
      "region": "East Coast",
      "description": "Scenic eastern beach with strong tide patterns, ideal for kitesurfing and water sports.",
      "highlights": ["Kitesurfing", "Water sports", "Scenic views", "Beach restaurants"],
      "relatedTours": ["custom-tours"]
    },
    {
      "name": "Kiwengwa Beach",
      "slug": "kiwengwa-beach",
      "type": "Beach",
      "region": "East Coast",
      "description": "Long sandy beach on the east coast with various resort options and calm conditions.",
      "highlights": ["Long beach", "Calm waters", "Resort infrastructure", "Water activities"],
      "relatedTours": ["custom-tours"]
    },
    {
      "name": "Marumbi Beach",
      "slug": "marumbi-beach",
      "type": "Beach",
      "region": "East Coast",
      "description": "Eastern coast beach known for tranquility and snorkeling opportunities.",
      "highlights": ["Snorkeling", "Tranquil", "Marine life", "Beach walks"],
      "relatedTours": ["custom-tours"]
    },
    {
      "name": "Muyuni Beach",
      "slug": "muyuni-beach",
      "type": "Beach",
      "region": "South/Southwest",
      "description": "Less-developed beach offering authentic beach experiences and closer proximity to local communities.",
      "highlights": ["Authentic experiences", "Local culture", "Quieter", "Less touristy"],
      "relatedTours": ["custom-tours"]
    },
    {
      "name": "Blue Lagoon",
      "slug": "blue-lagoon",
      "type": "Beach/Lagoon",
      "region": "Central",
      "description": "Picturesque lagoon area with crystal-clear turquoise waters, ideal for swimming and photography.",
      "highlights": ["Crystal clear waters", "Photography", "Swimming", "Scenic"],
      "relatedTours": ["all-tours"]
    },
    {
      "name": "Sandbank",
      "slug": "sandbank",
      "type": "Beach/Sandbar",
      "region": "Open Water",
      "description": "Unique sandbank formation in open water, featured in optional excursions for picnicking and swimming with turtles.",
      "highlights": ["Turtle encounters", "Picnicking", "Photography", "Unique experience"],
      "activity": "Sandbank Picnic",
      "estimatedCost": "Optional add-on"
    }
  ]
}
```

**Cities & Towns**:
```json
{
  "id": "cities_001",
  "category": "City/Town",
  "locations": [
    {
      "name": "Stone Town",
      "slug": "stone-town",
      "type": "Historic City",
      "region": "West Coast (Zanzibar City)",
      "description": "UNESCO World Heritage Site and cultural heart of Zanzibar. Historic architecture, spice markets, and Arab heritage.",
      "highlights": ["UNESCO site", "Historic architecture", "Darajani Market", "Spice tours", "Arab heritage"],
      "activities": ["Stone Town Tour", "Spice Tour", "Market exploration", "Historical walking tours"],
      "relatedTours": ["all-tours"],
      "estimatedDuration": "Full-day excursion"
    },
    {
      "name": "Zanzibar City",
      "slug": "zanzibar-city",
      "type": "City",
      "region": "West Coast",
      "description": "Main urban center and capital of the Zanzibar Archipelago. Gateway for most visitors and home to Stone Town.",
      "highlights": ["Main hub", "Airport access", "Markets", "Restaurants", "Accommodation variety"],
      "relatedTours": ["all-tours"]
    },
    {
      "name": "Matemwe",
      "slug": "matemwe",
      "type": "Fishing Village",
      "region": "East Coast",
      "description": "Traditional fishing village offering authentic local experiences and cultural immersion.",
      "highlights": ["Fishing culture", "Local experiences", "Authentic", "Community interaction"],
      "relatedTours": ["custom-tours"]
    },
    {
      "name": "Nungwi Village",
      "slug": "nungwi-village",
      "type": "Coastal Village",
      "region": "North",
      "description": "Charming northern village known for traditional dhow boat building, local culture, and water-based activities.",
      "highlights": ["Dhow boats", "Local culture", "Village tours", "Authentic experiences"],
      "activity": "Nungwi Village Tour",
      "estimatedCost": "Optional add-on"
    }
  ]
}
```

**Natural & Protected Areas**:
```json
{
  "id": "nature_001",
  "category": "Natural Area",
  "locations": [
    {
      "name": "Jozani Forest",
      "slug": "jozani-forest",
      "type": "Protected Forest",
      "region": "Central",
      "description": "Only remaining natural forest on Zanzibar. Home to endemic red colobus monkeys, exotic birds, and diverse flora.",
      "highlights": ["Red colobus monkeys", "Exotic birds", "Nature trails", "Endemic species"],
      "activity": "Jozani Forest Tour",
      "estimatedCost": "Optional add-on",
      "relatedTours": ["all-tours"]
    },
    {
      "name": "Chwaka National Park",
      "slug": "chwaka-national-park",
      "type": "National Park",
      "region": "Central",
      "description": "Marine and terrestrial protected area near Zanzibar Bay Resort. Features wetlands, mangroves, and birdwatching.",
      "highlights": ["Mangroves", "Birdwatching", "Wetlands", "Marine life"],
      "relatedTours": ["zanzibar-bay-resort-tour"]
    },
    {
      "name": "Selous Game Reserve",
      "slug": "selous-game-reserve",
      "type": "Game Reserve (Mainland)",
      "region": "Mainland Tanzania",
      "description": "Large safari reserve on mainland Tanzania, accessible via day excursion from Zanzibar.",
      "highlights": ["Safari", "Wildlife", "Big Five", "Day trip option"],
      "activity": "Day Safari to Selous",
      "estimatedCost": "Optional add-on",
      "relatedTours": ["all-tours"]
    },
    {
      "name": "Mikumi National Park",
      "slug": "mikumi-national-park",
      "type": "National Park (Mainland)",
      "region": "Mainland Tanzania",
      "description": "Another mainland safari option with diverse wildlife and scenic landscapes.",
      "highlights": ["Safari", "Wildlife", "Scenic", "Day trip option"],
      "activity": "Day Safari to Mikumi",
      "estimatedCost": "Optional add-on",
      "relatedTours": ["all-tours"]
    }
  ]
}
```

**Markets & Historical Sites**:
```json
{
  "id": "historical_001",
  "category": "Historical Site",
  "locations": [
    {
      "name": "Darajani Market",
      "slug": "darajani-market",
      "type": "Market",
      "region": "Stone Town",
      "description": "Historic spice market in Stone Town. Vibrant, colorful marketplace showcasing Zanzibar's spice trade heritage.",
      "highlights": ["Spice market", "Local produce", "Cultural experience", "Photography"],
      "activity": "Market exploration (part of Stone Town Tour)",
      "relatedTours": ["all-tours"]
    },
    {
      "name": "Slave Trade Caves",
      "slug": "slave-trade-caves",
      "type": "Historical Site",
      "region": "Stone Town",
      "description": "Historic caves related to Zanzibar's slave trade history. Educational and culturally significant.",
      "highlights": ["Historical significance", "Cultural education", "Guided tours", "Deep history"],
      "activity": "Historical tour (optional)",
      "relatedTours": ["custom-tours"]
    },
    {
      "name": "Palace",
      "slug": "palace-stone-town",
      "type": "Historical Site",
      "region": "Stone Town",
      "description": "Historic palace structure in Stone Town representing Sultanate heritage.",
      "highlights": ["Sultanate architecture", "Historical tours", "Cultural significance"],
      "activity": "Historical tour (part of Stone Town Tour)",
      "relatedTours": ["all-tours"]
    }
  ]
}
```

### 3.3 Location Display Components

**Location Card Component** (for grid/list views):
```jsx
<LocationCard>
  <CardImage src={location.image} alt={location.name} />
  <CardBadge category={location.type} />
  <CardTitle>{location.name}</CardTitle>
  <CardDescription>{location.description}</CardDescription>
  <HighlightsTags highlights={location.highlights} />
  <RelatedToursCount count={location.relatedTours.length} />
  <ExploreButton href={`/locations/${location.slug}`} />
</LocationCard>
```

**Interactive Map Component** (using Google Maps API):
- Map shows all locations with custom markers colored by category
- Click marker → popup with location name, highlights, and "View Tours" link
- Filter by location type (Beach, Island, City, etc.)
- Zoom levels adjusted for different contexts

**Activity Card** (for Optional Activities):
```jsx
<ActivityCard>
  <ActivityIcon icon={activity.icon} />
  <ActivityName>{activity.name}</ActivityName>
  <ActivityDescription>{activity.description}</ActivityDescription>
  <ActivityCost estimatedCost={activity.estimatedCost} />
  <ActivityDuration duration={activity.duration} />
  <RelatedToursLink />
</ActivityCard>
```

### 3.4 Real Data Integration: Pricing & Tour Association

**Tour-Location Mapping** (from extracted data):
- **4 Days Zanzibar Pre-Christmas** ($930-$1,630): Stone Town, Nungwi Beach, Mnemba Island
- **Blue Bay Resort** ($2,415-$2,415): Kiwengwa Beach, Mnemba Island, Stone Town
- **Royal Zanzibar** ($3,490-$3,490): Nungwi Beach, Stone Town, Mnemba Island
- **Zanzibar Bay Resort** ($1,410-$1,410): Chwaka National Park, nearby beaches
- **Sea Cliff Resort & Spa** ($1,955-$1,955): North-western coast, Stone Town
- **Diamonds Mapenzi Beach** ($2,910-$2,910): East Coast beaches, Mnemba Island
- **The Mora Zanzibar** ($3,910-$3,910): Nungwi Beach, premium location
- **6 Days Beach Holiday** ($1,605-$2,400): Multiple beaches, Stone Town, Mnemba
- **5 Days Holiday** ($1,415-$2,190): Multiple beaches, Stone Town

**Seasonal Pricing Display** (for Location Page):
When users click a location (e.g., "Nungwi Beach"), display available tours with current seasonal pricing:
- Shows lowest available price across all seasons
- Link to full pricing table on individual tour page
- Currency in USD with KES conversion option

### 3.5 Implementation Priorities

**Phase 1 (MVP)**:
- Hero banner + Quick stats
- 5 location categories (Islands, Beaches, Cities, Nature, Historical)
- Basic location cards with descriptions
- Filter by category
- Related tours count

**Phase 2**:
- Interactive Google Map with location markers
- Individual location detail pages
- Activity showcase section
- Seasonal pricing display

**Phase 3**:
- User reviews per location
- Photo gallery from user submissions
- Travel tips and best time to visit
- Advanced filtering (accessibility, family-friendly, adventure level)