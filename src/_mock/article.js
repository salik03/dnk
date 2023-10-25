import { sample } from 'lodash';

const names = [
  'Smartphones',
  'Laptops',
  'Designer clothing',
  'High-end cosmetics',
  'Watches',
  'Digital cameras',
  'Jewelry',
  'Perfumes',
  'Musical instruments',
  'Electronics accessories',
  'Legal contracts',
  'Academic transcripts',
  'Medical records',
  'Business proposals',
  'Visa applications',
  'Diplomas and certificates',
  'Research papers',
  'Notarized documents',
  'Patent applications',
  'Personal letters and cards',
  'Handmade crafts',
  'Small collectible items',
  'Rare stamps or coins',
  'Vintage postcards',
  'Art prints',
  'Souvenirs',
  'Miniature models',
  'Homemade jams or preserves',
  'Small fashion accessories',
  'Small toys or figurines',
  'Clothing and apparel',
  'Footwear',
  'Home decor items',
  'Kitchen appliances',
  'Toys and games',
  'Sports equipment',
  'Books and magazines',
  'Electronics (small appliances)',
  'Bedding and linens',
  'Personal care products',
  'International Regd. Letter',
  'Personal letters',
  'Greeting cards',
  'Handwritten notes',
  'Invitations',
  'Postcards',
  'Family photographs',
  'Personal diaries',
  'Handwritten recipes',
  'Penpal letters',
  'Sympathy cards',
  'Dietary supplements',
  'Small kitchen gadgets',
  'Phone cases',
  'Board games',
  'Craft supplies',
  'Trading cards',
];


const countries = [
  'United States',
  'China',
  'Brazil',
  'India',
  'Canada',
  'Germany',
  'United Kingdom',
  'France',
  'Japan',
  'South Korea',
  'Australia',
  'Mexico',
  'Netherlands',
  'Singapore',
  'Spain',
  'Italy',
  'Switzerland',
  'Sweden',
  'Belgium',
  'Norway',
  'Denmark',
  'Austria',
  'Ireland',
  'New Zealand',
  'United Arab Emirates',
  'Malaysia',
  'Thailand',
  'Poland',
  'Turkey',
  'South Africa',
  'Chile',
  'Saudi Arabia',
  'Vietnam',
  'Indonesia',
  'Czech Republic',
  'Portugal',
];

export const articles = [...Array(24)].map((_, index) => ({
  id: sample(['1', '2', '3', '4', '5']), 
  name: sample(names), 
  company: sample(countries), 
  isVerified: sample([true, false]), 
  status: sample(['Available', 'Unavailable']),
  role: sample([
    'International EMS Merchandise',
    'International EMS Document',
    'International Regd. Small Packet',
    'International Air Parcel',
    'International RegdL. Letter',
    'International Tracked Packet Service',
  ]),
}));