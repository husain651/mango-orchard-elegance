import drone from "@/assets/gallery-drone.jpg";
import harvest from "@/assets/gallery-harvest.jpg";
import packing from "@/assets/gallery-packing.jpg";
import shipping from "@/assets/gallery-shipping.jpg";
import giftbox from "@/assets/gallery-giftbox.jpg";

export interface BlogPost {
  slug: string;
  title: string;
  category: string;
  readTime: string;
  image: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  relatedPosts?: string[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: "complete-guide-to-pakistani-mango-varieties",
    title: "The complete guide to Pakistani mango varieties",
    category: "Guide",
    readTime: "9 min",
    image: harvest,
    excerpt: "Sindhri to Black Chaunsa — how to tell them apart, when they peak and what each is best for.",
    author: "Sarah Ahmed",
    date: "June 15, 2024",
    content: `
Pakistan produces over 1.7 million tonnes of mangoes annually, with more than 150 varieties grown across the mango belt stretching from Multan to Hyderabad. While each variety has its devotees, knowing which to choose — and when — can transform your mango experience.

## The Summer Kings

### Sindhri
The ambassador of Pakistani mangoes. elongated, yellow when ripe, with a mild sweetness that makes it perfect for desserts and eating fresh. Peak season: Late May to mid-June.

Best for: Lassi, desserts, fresh eating
Sweetness: Medium-low
Fiber: Minimal

### Chaunsa
The crown jewel. Small to medium, greenish-yellow skin that turns golden, with incredibly sweet, fibreless flesh. Peak season: Mid-June to August.

Best for: Fresh eating, gift boxes
Sweetness: Very high
Fiber: None

### White Chaunsa
A premium export variety with white-green skin and exceptionally sweet, aromatic flesh. Peak season: July to early August.

Best for: Premium exports, connoisseurs
Sweetness: High
Fiber: None

### Black Chaunsa
Distinctive dark green skin with reddish blush. Rich, complex flavor with a perfect balance of sweet and tart. Peak season: Late July to August.

Best for: Fresh eating, culinary use
Sweetness: High
Fiber: Minimal

## The Heritage Varieties

### Anwar Ratol
Small, ovate fruit with yellow skin. Intensely sweet with a unique aroma that fills the room. Peak season: Late June to July.

Best for: Fresh eating, traditional desserts
Sweetness: Very high
Fiber: Minimal

### Langra
Distinctive oblong shape with greenish-yellow skin even when ripe. Tangy-sweet flavor with slight fiber. Peak season: July to early August.

Best for: Pickles, traditional dishes
Sweetness: Medium
Fiber: Some

### Dussehri
Medium-sized, elongated with yellow skin. Mild sweetness with pleasant aroma. Peak season: Late June to July.

Best for: Fresh eating, juice
Sweetness: Medium
Fiber: Minimal

## Choosing Your Mango

For export and long-distance shipping, Chaunsa varieties reign supreme due to their shelf life and ability to ripen off the tree. For immediate consumption, Sindhri offers the earliest taste of summer, while Anwar Ratol delivers the most intense mango experience.

At MangoPlus, we select each variety at peak maturity from partner farms, ensuring what reaches you is what nature intended — at its absolute best.
    `,
    relatedPosts: ["how-to-store-mangoes", "five-ways-our-packhouse-team-eats-mango"],
  },
  {
    slug: "why-mangoes-are-the-most-nutrient-dense-summer-fruit",
    title: "Why mangoes are the most nutrient-dense summer fruit",
    category: "Health",
    readTime: "6 min",
    image: giftbox,
    excerpt: "Vitamin C, carotenoids and fibre: what a single Chaunsa actually delivers.",
    author: "Dr. Fatima Khan",
    date: "June 10, 2024",
    content: `
Mangoes aren't just delicious — they're one of the most nutritionally dense fruits you can eat. A single medium Chaunsa (approximately 200g) delivers remarkable health benefits.

## Vitamin C Powerhouse

One mango provides nearly 67% of your daily Vitamin C requirement. This isn't just about immunity — Vitamin C is essential for collagen production, iron absorption, and protecting your cells from damage.

## Vision Protection

Mangoes are rich in beta-carotene, which your body converts to Vitamin A. This supports eye health, reduces the risk of macular degeneration, and maintains healthy skin and mucous membranes.

## Digestive Health

With 3g of fiber per mango, they support digestive health and regular bowel movements. The enzymes in mango — particularly amylases — help break down carbohydrates, making digestion more efficient.

## Heart Health

Studies suggest that the antioxidants and plant compounds in mangoes may support heart health by reducing inflammation and oxidative stress. The magnesium content helps maintain healthy blood pressure levels.

## Blood Sugar Regulation

Despite their sweetness, mangoes have a relatively low glycemic index (41-60). The fiber content helps slow sugar absorption, making them suitable even for those monitoring blood sugar when consumed in moderation.

## Cancer-Fighting Properties

Research indicates that mango polyphenols, including mangiferin, quercetin, and gallic acid, may have anti-cancer properties. These compounds help protect cells from damage and inhibit tumor growth.

## The Chaunsa Advantage

Pakistani Chaunsa mangoes, in particular, are noted for their high concentration of these beneficial compounds. The specific terroir of Punjab's mango belt — with its intense summer heat and careful irrigation — produces fruit with exceptional nutritional density.

## Best Ways to Enjoy

- **Fresh**: Simply sliced, nothing added
- **Smoothies**: Blended with yogurt for a protein boost
- **Salads**: Diced over greens for sweetness and vitamins
- **Grilled**: Caramelized natural sugars enhance the sweetness

At MangoPlus, we ensure our mangoes are harvested at peak ripeness, maximizing their nutritional content. When you eat a mango from us, you're not just enjoying a fruit — you're nourishing your body with nature's multivitamin.
    `,
    relatedPosts: ["five-ways-our-packhouse-team-eats-mango", "how-to-store-mangoes"],
  },
  {
    slug: "inside-a-mango-export-72-hours",
    title: "Inside a mango export: 72 hours from branch to buyer",
    category: "Export",
    readTime: "8 min",
    image: shipping,
    excerpt: "Pre-cooling, phytosanitary clearance, airway bills and the paperwork behind a pallet.",
    author: "Omar Hassan",
    date: "June 5, 2024",
    content: `
Every mango that leaves Pakistan for international markets undergoes a meticulously orchestrated 72-hour journey. Here's what happens between the orchard and your doorstep.

## Hour 0-6: Harvest

Mangoes are harvested between 6 AM and 10 AM, when temperatures are coolest. Our trained farmers identify fruit at 80-85% maturity — developed enough to ship, but not so ripe that it won't survive the journey.

Each mango is hand-picked using a specialized harvesting pole with a soft net to prevent bruising. They're placed in field boxes lined with foam and transported immediately to the packhouse.

## Hour 6-12: Reception & Sorting

At the packhouse, mangoes undergo visual inspection. Any fruit with blemishes, insect damage, or irregular shape is removed. The remaining fruit is sorted by size, variety, and maturity.

Quality control teams check internal maturity using a fruit penetrometer to ensure optimal sugar content (12-16° Brix for export quality).

## Hour 12-18: Pre-cooling

This is the most critical step. Mangoes are rapidly cooled to 10-12°C to halt ripening and extend shelf life. We use forced-air cooling systems that pull chilled air through pallets, reducing fruit temperature by 5-6°C per hour.

Proper pre-cooling can extend shelf life by 7-10 days, making the difference between fruit arriving fresh or overripe.

## Hour 18-24: Packing

Mangoes are packed in export-grade cartons designed for optimal ventilation. Each layer is separated by foam dividers, and individual fruit may be wrapped in tissue paper for premium markets.

Packing specifications vary by destination:
- **UK/Europe**: 4kg cartons, 8-12 fruit per box
- **Middle East**: 6kg cartons, 12-16 fruit per box
- **North America**: 4kg cartons, with additional cold-chain documentation

## Hour 24-30: Phytosanitary Inspection

Government inspectors examine each shipment for pests and diseases. They check random samples from each lot, looking for fruit fly larvae, anthracnose, or other quarantine issues.

Once cleared, a Phytosanitary Certificate is issued — this document is mandatory for all international shipments and must accompany the cargo to its destination.

## Hour 30-36: Cold Storage

Packed pallets are stored in cold storage at 10-12°C while awaiting shipment. Temperature and humidity are monitored continuously. Some markets require vapor treatment for pest control, which happens during this window.

## Hour 36-48: Documentation & Customs

Export documentation is prepared:
- Commercial Invoice
- Packing List
- Certificate of Origin
- Phytosanitary Certificate
- Export License
- Airway Bill (for air freight) or Bill of Lading (for sea freight)

Customs officials verify documents and may inspect the shipment. Once cleared, cargo is released to the freight forwarder.

## Hour 48-72: Transit

For air freight (most common for mangoes):
- Truck to airport (2-3 hours)
- Airport security screening (2-4 hours)
- Loading onto aircraft (2-3 hours)
- Flight time (6-8 hours to Europe, 12-15 hours to North America)
- Arrival procedures (4-6 hours)

For sea freight (used for large volume to nearby markets):
- Truck to seaport (4-6 hours)
- Port procedures (8-12 hours)
- Container loading (4-6 hours)
- Sailing time (3-7 days depending on destination)

## Hour 72+: Last Mile Delivery

Upon arrival, the import broker handles customs clearance in the destination country. The shipment is then transferred to cold chain transport for delivery to retailers, distributors, or directly to customers.

From tree to table, a Pakistani mango travels thousands of kilometers and undergoes dozens of quality checks — all to ensure what reaches you is as perfect as when it left the orchard.

At MangoPlus, we've refined this process over 20 years. Our relationships with farms, packhouses, freight forwarders, and customs brokers ensure your mangoes arrive fresh, every time.
    `,
    relatedPosts: ["complete-guide-to-pakistani-mango-varieties", "the-rahim-family-story"],
  },
  {
    slug: "five-ways-our-packhouse-team-eats-mango",
    title: "Five ways our packhouse team eats mango",
    category: "Recipes",
    readTime: "5 min",
    image: packing,
    excerpt: "Lassi, salsa, sticky rice, sorbet and the unbeatable slice-over-the-sink.",
    author: "Chef Mariam Ali",
    date: "May 28, 2024",
    content: `
Our packhouse team handles thousands of mangoes daily during peak season. They know this fruit better than anyone. Here's how they actually eat mango when they're off the clock.

## 1. The Slice-Over-the-Sink

The simplest and, many argue, the best. Stand over the kitchen sink, cut a mango in half, and eat directly from the skin. No plates, no utensils, no judgment.

"The juice runs down your arm, but that's part of the experience," says Rashid, our packing supervisor. "It's how we've eaten mangoes since childhood."

## 2. Classic Mango Lassi

Blend equal parts mango and yogurt, add a touch of sugar and cardamom. Some of our team swear by a pinch of salt to bring out the sweetness.

"Our secret," says Aisha from quality control, "is using Chaunsa for lassi — the sweetness means you need less sugar."

**Recipe:**
- 2 cups diced Chaunsa mango
- 2 cups plain yogurt
- 2 tbsp sugar (adjust to taste)
- 1/4 tsp cardamom powder
- Pinch of salt
- Blend until smooth, serve chilled

## 3. Mango Salsa

A family favorite at weekend gatherings. Dice mango finely with red onion, cilantro, jalapeño, and lime juice. Perfect with grilled fish or chicken.

"My children won't eat fish without it," says Jamil, our logistics manager. "It's become our go-to summer dish."

**Recipe:**
- 2 ripe mangoes, diced
- 1/2 red onion, finely diced
- 1/4 cup fresh cilantro, chopped
- 1 jalapeño, seeded and minced
- 2 tbsp lime juice
- Salt to taste
- Mix and let sit 15 minutes before serving

## 4. Mango Sticky Rice

This Thai-inspired dish has become a Friday tradition in our breakroom. Coconut sticky rice topped with fresh mango and sesame seeds.

"It reminds me of my grandmother's version," says Nabeel, from receiving. "She'd make it during summer holidays."

**Recipe:**
- 1 cup sticky rice, soaked overnight
- 1 cup coconut milk
- 3 tbsp sugar
- 1/2 tsp salt
- 2 ripe mangoes, sliced
- Toasted sesame seeds
- Steam rice, mix with coconut milk mixture, serve warm with mango

## 5. Mango Sorbet

When temperatures hit 45°C in Multan, this is the only thing that provides relief. Frozen mango blended with a touch of lime and honey — no ice cream maker needed.

"We make batches in the breakroom freezer," says Sara from shipping. "It disappears in minutes."

**Recipe:**
- 3 cups frozen mango chunks
- 2 tbsp honey
- 1 tbsp lime juice
- Blend until smooth, serve immediately or freeze for firmer texture

## Bonus: The Traditional Approach

Several team members mentioned their families' traditional preparations:
- **Aam Ras**: Pureed mango eaten with roti
- **Aam Papad**: Sun-dried mango leather
- **Aam Murabba**: Sweet mango preserve
- **Aam Ka Achar**: Mango pickle made from raw fruit

But when pressed for their absolute favorite, the consensus remains: fresh, perfectly ripe, eaten standing over the sink with juice running down your arm.

At MangoPlus, we believe the best way to enjoy mango is the way that brings you joy. Whether that's a Michelin-star preparation or a simple slice, we're proud to provide the fruit that makes these moments possible.
    `,
    relatedPosts: ["why-mangoes-are-the-most-nutrient-dense", "how-to-store-mangoes"],
  },
  {
    slug: "the-rahim-family-story",
    title: "The Rahim family have farmed the same block since 1962",
    category: "Farm stories",
    readTime: "7 min",
    image: drone,
    excerpt: "Three generations, one orchard and a canopy pruned entirely by hand.",
    author: "Zara Rahim",
    date: "May 20, 2024",
    content: `
In the heart of Multan's mango belt, 12 acres of Chaunsa trees tell a story of continuity, care, and an unbroken bond with the land. The Rahim family has tended this orchard for three generations, and every tree has a story.

## The Beginning

"My grandfather planted these trees in 1962," says Abdul Rahim, current owner of the orchard. "He had returned from East Africa with a dream — to grow the finest mangoes in Pakistan."

The first years were hard. Water was scarce, and the young trees needed constant attention. Grandfather Rahim dug wells by hand, carried water in buckets, and slept under the trees to protect them from animals.

"By 1968, we had our first proper harvest," Abdul recalls. "My grandfather cried. He said these trees were his children."

## The Philosophy

What makes the Rahim orchard different is simple: everything is done by hand. No machines for pruning, no chemical shortcuts for pest control, no irrigation systems that waste water.

"We prune by hand because each tree is different," explains Abdul's son, Imran, who now manages the orchard's daily operations. "A machine can't see which branch needs to go and which should stay. We study each tree, understand its shape, and prune to help it thrive."

The family uses traditional pest control methods — neem oil sprays, pheromone traps, and birds that nest in the orchard. They believe this produces better fruit and protects the land for future generations.

## The Trees

Some of the original 1962 plantings still produce fruit. These grandmother trees, gnarled and twisted, yield less than younger trees but produce mangoes of exceptional quality.

"The fruit from an old tree has character," Imran says. "The flavor is deeper, more complex. Chefs in Karachi specifically request our grandmother tree mangoes."

The orchard follows a careful cycle: pruning in winter, irrigation management in spring, pest monitoring through summer, and rest in autumn. Each year brings new challenges — unexpected weather, new pests, market fluctuations — but the family adapts.

## The Partnership

MangoPlus has worked with the Rahim family for eight years. It's a partnership built on mutual respect and shared values.

"They don't push us to use chemicals or increase yield at the expense of quality," Abdul says. "They understand that good mangoes take time and care."

The relationship goes beyond business. MangoPlus provides advance payments that help the family invest in the orchard. They've shared knowledge about sustainable practices. When the Rahim family needed help rebuilding after a storm, MangoPlus was there.

## The Future

Imran's children, the fourth generation, are already learning the orchard's ways. His daughter, Zara, is studying agriculture with plans to return to the farm. His son, Hassan, helps during harvest season.

"I used to think this was just farming," Imran reflects. "Now I understand it's stewardship. We're caring for something that will outlast us."

The orchard faces challenges — climate change, water scarcity, market pressure. But the Rahim family remains committed to their principles.

"My grandfather planted these trees," Abdul says, looking across the orchard. "I've cared for them. My children will care for them. As long as there are Rahims, these trees will have guardians."

## The Mango

The Chaunsa from Rahim Orchards is distinctive — smaller than average, with an intense sweetness and floral aroma. Chefs describe it as having "terroir" — a taste of the specific soil, climate, and care that produced it.

When you eat a mango from MangoPlus, there's a good chance it came from this orchard. You're not just tasting fruit — you're tasting three generations of dedication, a philosophy of care, and a commitment to the land.

That's the MangoPlus difference: every mango has a story, and we're proud to tell them.
    `,
    relatedPosts: ["inside-a-mango-export-72-hours", "complete-guide-to-pakistani-mango-varieties"],
  },
  {
    slug: "how-to-store-mangoes",
    title: "How to store mangoes so they ripen perfectly",
    category: "Tips",
    readTime: "4 min",
    image: giftbox,
    excerpt: "Never the fridge before ripening — and the paper-bag trick that actually works.",
    author: "Sarah Ahmed",
    date: "May 15, 2024",
    content: `
Nothing disappoints like a mango that never ripens, or one that turns from perfect to overripe overnight. Proper storage is the secret to getting the most from your mangoes.

## The Golden Rule: No Fridge Until Ripe

This is the most common mistake. Refrigerating unripe mangoes halts the ripening process permanently. The fruit will never develop its full sweetness or flavor.

Keep unripe mangoes at room temperature, ideally 20-25°C. Countertops are perfect. The kitchen windowsill is even better — sunlight helps, though direct sun can cause uneven ripening.

## Speed Up Ripening: The Paper Bag Method

If you need mangoes to ripen faster, place them in a paper bag with a banana or apple. These fruits release ethylene gas, which accelerates ripening.

**Why paper, not plastic?** Paper allows the fruit to breathe while trapping ethylene. Plastic can cause fermentation and off-flavors.

Check the bag daily. Once mangoes yield slightly to gentle pressure, remove them.

## The Squeeze Test

Don't rely on color alone — some varieties (like Chaunsa) stay greenish even when ripe. Instead:

1. **Gently squeeze** the mango
2. **Ripe**: Yields slightly to pressure, like a ripe avocado
3. **Underripe**: Hard, no give
4. **Overripe**: Very soft, may have indentations from your fingers

## Storing Ripe Mangoes

Once ripe, mangoes can be refrigerated to extend their life by 3-5 days. Wrap them individually in paper towels to prevent moisture buildup, which can cause mold.

For longer storage:

### Freezing Whole
- Wash and peel the mango
- Cut into chunks or slices
- Spread on a baking sheet (not touching)
- Freeze until solid (2-3 hours)
- Transfer to freezer bags
- Lasts 6-8 months

### Freezing Purée
- Blend ripe mango until smooth
- Add a squeeze of lemon juice (prevents browning)
- Pour into ice cube trays or freezer bags
- Lasts 6-8 months

## Reviving Overripe Mangoes

If your mango is softer than ideal but not spoiled, don't throw it away:

- **Blend it** into smoothies or lassi
- **Cook it** into sauces or chutneys
- **Bake it** into muffins or bread
- **Freeze it** for later use

## Signs Your Mango Has Gone Bad

Unfortunately, even with proper storage, some mangoes go bad. Look for:

- **Dark, sunken spots** (not to be confused with natural blemishes)
- **Oozing liquid** or sticky residue
- **Fermented smell** (alcohol-like)
- **Mold** (fuzzy growth, usually white or black)
- **Extremely soft** with no resistance to pressure

When in doubt, trust your nose. If it smells off, it probably is.

## Variety-Specific Tips

Different mango varieties have different storage needs:

### Sindhri
Ripens quickly once off the tree. Consume within 2-3 days of ripening.

### Chaunsa
Has excellent shelf life. Can be stored 5-7 days after ripening if refrigerated.

### Anwar Ratol
Very delicate once ripe. Consume within 2 days or process immediately.

### Langra
Tolerates slightly cooler storage but loses flavor if refrigerated too early.

## The MangoPlus Advantage

Our mangoes are harvested at optimal maturity and shipped in temperature-controlled conditions. They're designed to ripen beautifully at home if you follow these guidelines.

Every shipment includes a ripeness guide specific to the varieties in your box. We're not just selling mangoes — we're ensuring you get the perfect mango experience, from orchard to table.

Remember: a little patience goes a long way. Let your mangoes ripen naturally, and you'll be rewarded with the sweet, aromatic experience that makes Pakistani mangoes the world's finest.
    `,
    relatedPosts: ["five-ways-our-packhouse-team-eats-mango", "why-mangoes-are-the-most-nutrient-dense"],
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export function getRelatedPosts(currentSlug: string, slugs: string[] = []): BlogPost[] {
  const currentPost = getPostBySlug(currentSlug);
  if (!currentPost) return [];

  const related = slugs
    .map((slug) => getPostBySlug(slug))
    .filter((post): post is BlogPost => post !== undefined);

  if (related.length >= 3) return related.slice(0, 3);

  // If not enough related posts, fill with posts from same category
  const sameCategory = blogPosts
    .filter((post) => post.category === currentPost.category && post.slug !== currentSlug)
    .slice(0, 3 - related.length);

  return [...related, ...sameCategory];
}
