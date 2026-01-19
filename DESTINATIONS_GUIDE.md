# Scalable Locations System - How to Add New Destinations

This guide explains how to add new destinations (like Kenya, Uganda, etc.) to the Locations system in a scalable way.

## Current Structure

```
/locations                    → Destinations index (selector page)
/locations/:destinationSlug   → Individual destination detail page
```

Example: `/locations/zanzibar` shows all Zanzibar locations

## How to Add a New Destination

### Step 1: Define Location Categories and Locations

Open `client/src/lib/locations.ts` and add your destination data. Use Zanzibar as a template:

```typescript
const kenyaCategories: LocationCategory[] = [
  {
    id: "national-parks_001",
    name: "National Parks & Reserves",
    category: "Nature",
    locations: [
      {
        id: "masai-mara",
        name: "Masai Mara National Reserve",
        slug: "masai-mara",
        type: "National Park",
        region: "Southwest Kenya",
        description: "World-famous safari destination known for the Great Migration...",
        highlights: ["Great Migration", "Big Five", "Scenic landscapes"],
        activity: "Safari Game Drive",
        estimatedCost: "Included in packages",
        relatedTours: ["masai-mara-safari"],
        image: kenyaImage,
      },
      // ... more locations
    ],
  },
  // ... more categories
];
```

### Step 2: Add the Destination to the destinations Array

Still in `client/src/lib/locations.ts`, add your destination to the `destinations` array:

```typescript
export const destinations: Destination[] = [
  {
    id: "zanzibar",
    name: "Zanzibar",
    slug: "zanzibar",
    description: "Pristine beaches, historic Stone Town, and island adventures in Tanzania's paradise.",
    heroImage: zanzibarBeachImage,
    heroSubtitle: "Explore pristine beaches, cultural heritage, and island adventures...",
    categories: zanzibarCategories,
    stats: [
      { label: "Destinations", value: "20+" },
      { label: "Resort Packages", value: "9" },
      { label: "Activities", value: "15+" },
      { label: "Average Rating", value: "4.8★" },
    ],
    featured: true,
  },
  {
    id: "kenya",
    name: "Kenya",
    slug: "kenya",
    description: "Epic safari experiences, diverse wildlife, and stunning landscapes.",
    heroImage: kenyaImage,
    heroSubtitle: "Discover world-class safaris, from Masai Mara to Mount Kenya...",
    categories: kenyaCategories,
    stats: [
      { label: "Destinations", value: "15+" },
      { label: "Safari Packages", value: "8" },
      { label: "Activities", value: "12+" },
      { label: "Average Rating", value: "4.7★" },
    ],
    featured: false,
  },
];
```

### Step 3: Add Hero Image

Import your destination's hero image at the top of `locations.ts`:

```typescript
import kenyaImage from "@assets/generated_images/kenya_savanna.png";
```

## File Structure

```
client/src/
├── lib/
│   └── locations.ts          # All destination data (main config)
├── pages/
│   ├── LocationsIndex.tsx     # List all destinations (/locations)
│   └── Locations.tsx          # Show individual destination (/locations/:slug)
└── App.tsx                    # Routes configuration
```

## Routing

Routes are automatically generated based on the `destinations` array:

- `/locations` → Shows all destinations as cards
- `/locations/zanzibar` → Shows all Zanzibar locations
- `/locations/kenya` → Shows all Kenya locations (once added)
- `/locations/uganda` → Shows all Uganda locations (once added)

## Key Features of the System

✅ **Scalable** - Add destinations by just updating the data file  
✅ **Dynamic** - All routes are generated from the destinations array  
✅ **Reusable** - Same component template works for all destinations  
✅ **Consistent** - All destinations follow the same category structure  
✅ **SEO-Friendly** - URLs use meaningful slugs like `/locations/zanzibar`

## Example: Adding Kenya

1. Create `kenyaCategories` with all Kenya locations
2. Add Kenya to `destinations` array with:
   - `id: "kenya"`
   - `slug: "kenya"`
   - `heroImage: kenyaImage`
   - etc.
3. That's it! Routes `/locations` and `/locations/kenya` now work automatically

## Data Model Reference

```typescript
// Each destination has:
{
  id: string;                           // Unique ID
  name: string;                         // Display name
  slug: string;                         // URL slug
  description: string;                  // Short description
  heroImage: string;                    // Hero banner image
  heroSubtitle: string;                 // Subtitle on hero
  categories: LocationCategory[];       // 5 categories (Islands, Beaches, Cities, Nature, Historical)
  stats: Array<{label, value}>;         // Quick stats (4 items)
  featured: boolean;                    // Show "Featured" badge
}

// Each category has:
{
  id: string;
  name: string;
  category: "Island" | "Beach" | "City" | "Nature" | "Historical";
  locations: Location[];
}

// Each location has:
{
  id: string;
  name: string;
  slug: string;
  type: string;
  region: string;
  description: string;
  highlights: string[];
  activity?: string;
  estimatedCost?: string;
  relatedTours: string[];
  image?: string;
}
```

## Tips

- Keep location slugs simple and URL-friendly (e.g., "stone-town" not "Stone Town!")
- Use the same image placeholder (`sharedImage`) if you don't have destination-specific images
- Set `featured: true` only for 1-2 destinations to show on homepage
- Stats should have 4 items for consistent grid layout
- Keep descriptions concise (1-2 sentences)

That's it! Your new destination will automatically appear on the Locations page! 🎉
