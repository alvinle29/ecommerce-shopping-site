const products = [
  {
    name: "Apple iPhone 14 Pro",
    image: "https://t-mobile.scene7.com/is/image/Tmusprod/Apple-iPhone-14-Pro-Gold-frontimage",
    description:
      "iPhone 14 Pro. Capture incredible detail with a 48MP Main camera. Experience iPhone in a whole new way with Dynamic Island and Always-On display. And get peace of mind with groundbreaking safety features. Discover the all-new iPhone 14 Pro and unleash the power of T-Mobile's 5G network, tapping into Extended Range 5G for broad coverage and Ultra Capacity 5G for super-fast speeds in more places.",
    price: 1500,
    countInStock: 3,
    rating: 4,
    numReviews: 4,
  },
  {
    name: "GOOGLE Pixel 7",
    image: "https://t-mobile.scene7.com/is/image/Tmusprod/Google-Pixel-7-Obsidian-frontimage",
    description:
      "Meet Pixel 7. Powered by Google Tensor G2, it’s fast and secure, with amazing battery life and the advanced Pixel Camera. Take beautifully authentic, accurate photos with Real Tone and stunning video with Cinematic Blur. And with the Titan M2 security chip and a built-in VPN, Pixel helps protect your personal data.",
    price: 1299,
    countInStock: 10,
    rating: 2,
    numReviews: 2,
  },
  {
    name: "Samsung Galaxy Z Flip4",
    image: "https://t-mobile.scene7.com/is/image/Tmusprod/Samsung-Galaxy-Z-Flip4-Bora-Purple-frontimage",
    description:
      "The Samsung Galaxy Z Flip4 is the ultimate tool for next-level expression. Enjoy compact portability that opens up to a large 6.7” Infinity Flex display with 120 HZ refresh rate. Read notifications, respond to texts, skip songs, and change settings on the customizable cover screen without unfolding your phone. Capture hands-free selfies, photos, or videos wherever you go with the Flex Mode Camera then share life’s moments with more 5G bars in more places on America’s largest & fastest 5G network.",
    price: 999,
    countInStock: 0,
    rating: 3.5,
    numReviews: 3,
  },
  {
    name: "Samsung Galaxy S22",
    image: "https://t-mobile.scene7.com/is/image/Tmusprod/Samsung-Galaxy-S22-Phantom-Black-frontimage",
    description:
      "The Samsung Galaxy S22 sets a new epic standard with 8K video capture, the highest recording resolution available on a smartphone. Enjoy your favorite content on a bright, beautiful 6.1” FHD+ Dynamic AMOLED display with adaptive 120Hz refresh rate. Capture vivid detail with a triple lens camera and a 50MP resolution main lens with up to 30X digital zoom. Power every scroll, click, tap and stream all day long with an intelligent 3700 mAh battery that keeps your day going. Wait less and do more of what you love, with the incredibly fast 4nm processor all on the nation’s largest, fastest and most reliable nationwide 5G network",
    price: 799,
    countInStock: 10,
    rating: 5,
    numReviews: 0,
  },
  {
    name: "Apple iPhone SE (3rd gen)",
    image: "https://t-mobile.scene7.com/is/image/Tmusprod/Apple-iPhone-SE-3rd-gen-Starlight-frontimage",
    description:
      "Lightning-fast A15 Bionic chip and fast 5G.1 Big-time battery life and a superstar camera. Plus, the toughest glass in a smartphone and a Home button with secure Touch ID.",
    price: 799,
    countInStock: 10,
    rating: 5,
    numReviews: 9,
  },
  {
    name: "Samsung Galaxy S22 Ultra",
    image: "https://t-mobile.scene7.com/is/image/Tmusprod/Samsung-Galaxy-S22-Ultra-Burgund-frontimage",
    description:
      "The Samsung Galaxy S22 Ultra offers the ultimate epic standard of smartphone experiences bringing back the best of Galaxy Note to the S22 line with an embedded SPen enabling new ways to work and create on the go. The quad cameras let you capture premium detail with the ultra-clear 108MP main lens, the highest resolution available on a smartphone. Shoot videos that rival how epic your life is with stunning 8K recording. Your favorite content will look even better on the amazingly bright 6.8” WQHD+ Dynamic AMOLED 2X display with adaptive 120Hz refresh rate. The Galaxy S22 Ultra’s long lasting 5000 mAh intelligent battery powers your day and then some. Do more of what you love, with the incredibly fast 4nm processor, all on the nation’s largest, fastest, and most reliable nationwide 5G network",
    price: 1299,
    countInStock: 10,
    rating: 4,
    numReviews: 2,
  },
  {
    name: "OpePlus 10T 5G",
    image: "https://cdn.tmobile.com/content/dam/t-mobile/en-p/cell-phones/OnePlus/OnePlus-10T-5G/Moonstone-Black/OnePlus-10T-5G-Moonstone-Black-frontimage.png",
    description:
      "OnePlus 10T 5G is the speed-leading flagship delivering ultimate performance. Driven by the fastest charging in OnePlus history-125Watt SuperVooC Charging giving you a full days’ power in 10 minutes and the most powerful Qualcomm® mobile platform available; 10T has Evolved Beyond Speed.",
    price: 999,
    countInStock: 10,
    rating: 3,
    numReviews: 3,
  },
  {
    name: "Motorola moto g pure",
    image: "https://t-mobile.scene7.com/is/image/Tmusprod/Motorola-moto-g-pure-Deep-Indigo-frontimage",
    description:
      "abcdxyz",
    price: 499,
    countInStock: 10,
    rating: 2,
    numReviews: 9,
  },
  {
    name: "OnePlus 10 Pro 5G",
    image: "https://t-mobile.scene7.com/is/image/Tmusprod/OnePlus-10-Pro-5G-Volcanic-Black-frontimage",
    description:
      "Introducing the OnePlus 10 Pro 5G, our most powerful smartphone ever. Unleash your creativity with a triple-camera system co-developed with Hasselblad, featuring the new OnePlus Billion Color Solution and a wider 150° FOV Ultra-Wide lens. A 6.7” QHD+ screen displays stunning colors and adjusts dynamically from 1Hz up to 120Hz, delivering the smoothest & most battery-efficient user experience. Powering the 10 Pro is the latest Qualcomm Snapdragon 8 Gen 1 Processor. Coupled with the new HyperBoost Gaming Engine and next-gen heat dissipation, the 10 Pro is one of the best choices for mobile gaming. Say goodbye to battery anxiety with 65W fast charging (wired) and 50W wireless charging, giving you a day’s power in 15 minutes. Packed with premium features & a smooth and clean interface, the 10 Pro is best smartphone from OnePlus yet.",
    price: 399,
    countInStock: 10,
    rating: 4,
    numReviews: 9,
  },
  {
    name: "OnePlus Nord N200 5G",
    image: "https://t-mobile.scene7.com/is/image/Tmusprod/OnePlus-Nord-N200-5G-Quantum-Blue-frontimage",
    description:
      "It’s 5G for all with the OnePlus Nord N200 5G, harnessing the power of the largest 5G network to enable blazing fast upload and download speeds. The large, clear 90Hz Full HD display puts all day immersive entertainment in the palm of your hands. Powered by a massive 5000mAh battery, you can rest assured that the Nord N200 5G can handle all your movies, TV shows, and games without breaking a sweat. Combined with a healthy pool of RAM and expandable storage, you’ll have all the resources necessary to run all your games and apps smoothly. A triple camera system allows for beautiful photo and video shoots. OnePlus Nord N200 5G packs a powerful punch, making premium specs and the power of 5G more accessible than ever.",
    price: 799,
    countInStock: 10,
    rating: 3,
    numReviews: 4,
  },
  {
    name: "Nokia G400 5G",
    image: "https://t-mobile.scene7.com/is/image/Tmusprod/Nokia-G400-5G-Meteor-Grey-frontimage",
    description:
      "This one’s for those demanding the most from their smartphone. An immersive display? How’s a 1080p Full HD+ display with 120Hz refresh rate sound? Want to take the best pictures? A spectacular triple-rear camera, with a 48MP main sensor and A.I. enhancements, including dual sight will help. Social-worthy selfies with the Super Night mode on the 16MP front facing camera lets you own the night. It also includes up to 2 days of battery life, you could escape for the weekend and leave the charger at home. When you do need to fill up, fast charge has you covered. This is all housed behind Gorilla Glass 3 display so that your device is tougher and less prone to scratches. If you’ve got high demands, the Nokia G400 5G is the smartphone for you.",
    price: 399,
    countInStock: 10,
    rating: 5,
    numReviews: 20,
  },
  {
    name: "Google Pixel 6a",
    image: "https://t-mobile.scene7.com/is/image/Tmusprod/Google-Pixel-6a-Black-frontimage",
    description:
      "Meet Pixel 6a, the more affordable Google phone that adapts to you.(7) Powered by Google Tensor, it’s super fast and secure. The battery lasts up to 72 hours with Extreme Battery Saver.(2) The Pixel Camera captures the moment just how you experienced it. And with Titan M2™ security, protection is built right in.",
    price: 599,
    countInStock: 10,
    rating: 5,
    numReviews: 15,
  },
  {
    name: "Apple iPhone 13 mini",
    image: "https://t-mobile.scene7.com/is/image/Tmusprod/Apple-iPhone-13-mini-Blue-frontimage",
    description:
      "iPhone 13 mini. Lightning-fast A15 Bionic chip. Durable design. Superfast 5G. 1 And a bright Super Retina XDR display.",
    price: 799,
    countInStock: 10,
    rating: 5,
    numReviews: 5,
  },
  {
    name: "Nokia X100 5G",
    image: "https://t-mobile.scene7.com/is/image/Tmusprod/Nokia-X100-Midnight-Blue-frontimage",
    description:
      "A Big full HD+ display, immersive OZO Audio technology, and super-fast streaming with 5G1 make the Nokia X100 your ideal entertainment wingman. All with facial recognition and a fingerprint sensor to quickly access everything on your phone. Safely kept, easily accessed.",
    price: 399,
    countInStock: 10,
    rating: 4,
    numReviews: 9,
  },
];

export default products;