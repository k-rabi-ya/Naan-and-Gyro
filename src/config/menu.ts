export interface MenuItem {
  id: string
  name: string
  description: string
  price: number
  category: 'grills' | 'breads' | 'curries' | 'rice' | 'desserts' | 'drinks'
  image: string
  badges?: string[]
}

export const MENU_ITEMS: MenuItem[] = [
  // Grills & Kebabs
  {
    id: 'grill-adana',
    name: 'Charred Lamb Adana Kebab',
    description: 'Traditional hand-minced lamb, spiced with sumac and chili, grilled over charcoal, served with flame-roasted peppers.',
    price: 26,
    category: 'grills',
    image: '/images/juicy charred koobideh that melts with smoky beef flavor.jpg',
    badges: ['Charcoal Grilled', 'Spicy'],
  },
  {
    id: 'grill-chicken-tikka',
    name: 'Traditional Chicken Tikka',
    description: 'Clay tandoor roasted chicken breast cubes marinated in mustard oil, Kashmiri chili, and organic yogurt.',
    price: 21,
    category: 'grills',
    image: '/images/chicken kabab.jpg',
    badges: ['Tandoor Masterpiece'],
  },
  {
    id: 'grill-mutabbaq',
    name: 'Minced Beef Mutabbaq',
    description: 'Thin layered pan-fried pastry stuffed with spiced beef, eggs, scallions, and fresh green chilies.',
    price: 18,
    category: 'grills',
    image: '/images/Chicken Tikka Mutabbaq.jpg',
    badges: ['Chef Signature'],
  },
  {
    id: 'grill-lahmacun',
    name: 'Classic Turkish Lahmacun',
    description: 'Thin, crispy stone-baked dough topped with a minced lamb and beef paste, tomato, bell pepper, and fresh parsley.',
    price: 18,
    category: 'grills',
    image: '/images/Lahmacun.jpg',
    badges: ['Classic'],
  },

  // Naans & Breads
  {
    id: 'bread-garlic-naan',
    name: 'Hand-Stretched Garlic Naan',
    description: 'Tandoor-baked flatbread glazed with melted premium ghee, roasted organic garlic, and fresh coriander.',
    price: 6,
    category: 'breads',
    image: '/images/Naan.jpg',
    badges: ['Wood-Fired'],
  },
  {
    id: 'bread-pide',
    name: 'Traditional Cheese Pide',
    description: 'Boat-shaped wood-fired Turkish flatbread stuffed with molten Turkish kasseri cheese, feta, and sweet butter.',
    price: 19,
    category: 'breads',
    image: '/images/Turkish Pide.jpg',
    badges: ['Fresh Baked'],
  },
  {
    id: 'bread-simit',
    name: 'Sesame Simit Bread',
    description: 'Circular Turkish bread encrusted with toasted sesame seeds and molasses, baked crisp daily.',
    price: 7,
    category: 'breads',
    image: '/images/Turkish Simit.jpg',
  },
  {
    id: 'bread-bhature',
    name: 'Delhi Chhole Bhature',
    description: 'Crispy, puffed deep-fried leavened bread served with rich, slow-simmered Punjabi chickpea masala.',
    price: 16,
    category: 'breads',
    image: '/images/Chana Masala- chole bhature.jpg',
  },

  // Curries & Stews
  {
    id: 'curry-tikka-masala',
    name: 'Old Delhi Tikka Masala',
    description: 'Tender tandoori chicken simmered in a rich, slow-cooked tomato, cashew, and fenugreek reduction.',
    price: 22,
    category: 'curries',
    image: '/images/Chicken Tikka Masala_ with naan.jpg',
    badges: ['Legendary Recipe'],
  },
  {
    id: 'curry-paneer-butter',
    name: 'Paneer Butter Masala',
    description: 'Fresh artisanal cottage cheese cubes cooked in a buttery tomato gravy with warm spices.',
    price: 20,
    category: 'curries',
    image: '/images/Street Style Paneer Butter Masala with Rice & Naan.jpg',
    badges: ['Vegetarian'],
  },
  {
    id: 'curry-chicken-saag',
    name: 'Slow-Cooked Palak Chicken',
    description: 'Boneless chicken cubes simmered with puréed spinach, garlic, ginger, and fresh ground spices.',
    price: 23,
    category: 'curries',
    image: '/images/Chicken Saag Recipe - Palak Chicken (Video) - Cubes N Juliennes.jpg',
  },
  {
    id: 'curry-kuru-fasulye',
    name: 'Turkish Kuru Fasülye Stew',
    description: 'Creamy white bean stew slow-simmered in olive oil with caramelized onions, tomatoes, and dry red chilies.',
    price: 18,
    category: 'curries',
    image: '/images/Kuru_Fasulye_Stew.jpg',
    badges: ['Vegan'],
  },

  // Biryani & Rice
  {
    id: 'rice-dum-biryani',
    name: 'Hyderabadi Chicken Dum Biryani',
    description: 'Aromatic long-grain basmati rice, slow-cooked in a sealed copper pot (Dum) with marinated chicken and saffron.',
    price: 24,
    category: 'rice',
    image: '/images/Chicken Biryani.jpg',
    badges: ['Slow Cooked'],
  },
  {
    id: 'rice-kabsa',
    name: 'Smoked Chicken Kabsa',
    description: 'Traditional spiced long-grain rice topped with slow-roasted half chicken, toasted almonds, and raisins.',
    price: 25,
    category: 'rice',
    image: '/images/Chicken Kabsa _ Moribyan.jpg',
  },
  {
    id: 'rice-thali',
    name: 'Royal Culinary Thali Platter',
    description: 'An editorial platter showcasing chicken curry, lamb kebab, white beans, tandoori bread, rice, and fresh raita.',
    price: 32,
    category: 'rice',
    image: '/images/Indian thali- roti chawal& some sides.jpg',
    badges: ['Feast'],
  },

  // Desserts
  {
    id: 'dessert-kunefe',
    name: 'Pistachio Kunefe with Rabdi',
    description: 'Golden spun pastry layered with unsalted cheese, soaked in orange blossom syrup, topped with sweet Rabdi.',
    price: 12,
    category: 'desserts',
    image: '/images/Kunefe Recipe.jpg',
    badges: ['Signature Dessert'],
  },
  {
    id: 'dessert-rasmalai',
    name: 'Saffron Pistachio Rasmalai',
    description: 'Poached paneer discs soaked in cardamom and saffron-infused milk, finished with slivered almonds.',
    price: 10,
    category: 'desserts',
    image: '/images/Rasmalai.jpg',
  },
  {
    id: 'dessert-rabri',
    name: 'Traditional Cardamom Rabri',
    description: 'Slow-condensed sweet milk reduction flavored with saffron, cardamom, and toasted pistachios.',
    price: 9,
    category: 'desserts',
    image: '/images/Rabri.jpg',
  },
  {
    id: 'dessert-ladoos',
    name: 'Hand-Rolled Coconut Ladoos',
    description: 'Delicate sweet roundels made of grated coconut, condensed milk, and green cardamom powder.',
    price: 8,
    category: 'desserts',
    image: '/images/Coconut Ladoos.jpg',
  },
  {
    id: 'dessert-baklava',
    name: 'Antep Pistachio Baklava',
    description: 'Flaky layers of hand-stretched phyllo pastry stuffed with crushed green pistachios and hot honey syrup.',
    price: 13,
    category: 'desserts',
    image: '/images/Pista baklava.jpg',
  },

  // Drinks & Tea
  {
    id: 'drink-cay',
    name: 'Authentic Turkish Çay',
    description: 'Traditional double-brewed loose-leaf black tea served piping hot in custom tulip glass cups.',
    price: 5,
    category: 'drinks',
    image: '/images/Turkish tea.jpg',
  },
  {
    id: 'drink-chai',
    name: 'Kolkata Masala Çai',
    description: 'Slow-boiled robust black tea leaves with fresh milk, cardamom, cloves, ginger, and raw sugar.',
    price: 6,
    category: 'drinks',
    image: '/images/Masala Doodh _ How to make masala Doodh.jpg',
  },
]
