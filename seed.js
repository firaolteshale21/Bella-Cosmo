const mongoose = require("mongoose");
const Product = require("./models/Product");
const dotenv = require("dotenv");

dotenv.config();

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => Product.deleteMany({}))
  .then(() => {
    const products = [
      {
        name: "Revitalizing Face Serum",
        description:
          "A serum that hydrates and replenishes your skin, leaving it radiant with a long-lasting glow. This formula penetrates deep into the skin layers to provide moisture and improve texture.",
        price: 49.99,
        stock: 100,
        category: "Skincare",
        image1Url: "https://via.placeholder.com/150/face-serum1.jpg",
        image2Url: "https://via.placeholder.com/150/face-serum2.jpg",
        image3Url: "https://via.placeholder.com/150/face-serum3.jpg",
      },
      {
        name: "Hydrating Night Cream",
        description:
          "Rich night cream that restores your skin’s glow while you sleep. Infused with natural ingredients like hyaluronic acid and shea butter.",
        price: 39.99,
        stock: 120,
        category: "Skincare",
        image1Url: "https://via.placeholder.com/150/night-cream1.jpg",
        image2Url: "https://via.placeholder.com/150/night-cream2.jpg",
        image3Url: "https://via.placeholder.com/150/night-cream3.jpg",
      },
      {
        name: "Vitamin C Brightening Serum",
        description:
          "Brighten your skin with this powerful Vitamin C formula. It helps reduce dark spots, even out skin tone, and improve overall skin texture.",
        price: 59.99,
        stock: 75,
        category: "Skincare",
        image1Url: "https://via.placeholder.com/150/vitamin-c-serum1.jpg",
        image2Url: "https://via.placeholder.com/150/vitamin-c-serum2.jpg",
        image3Url: "https://via.placeholder.com/150/vitamin-c-serum3.jpg",
      },
      {
        name: "Moisturizing Body Lotion",
        description:
          "Deeply nourishing body lotion to keep your skin soft all day long.",
        price: 25.99,
        stock: 150,
        category: "Body Care",
        image1Url: "https://via.placeholder.com/150/body-lotion1.jpg",
        image2Url: "https://via.placeholder.com/150/body-lotion2.jpg",
        image3Url: "https://via.placeholder.com/150/body-lotion3.jpg",
      },
      {
        name: "Exfoliating Face Scrub",
        description:
          "Gentle exfoliating scrub that removes dead skin cells and unclogs pores.",
        price: 29.99,
        stock: 110,
        category: "Skincare",
        image1Url: "https://via.placeholder.com/150/face-scrub1.jpg",
        image2Url: "https://via.placeholder.com/150/face-scrub2.jpg",
        image3Url: "https://via.placeholder.com/150/face-scrub3.jpg",
      },
      {
        name: "Nourishing Lip Balm",
        description: "Organic lip balm to keep your lips soft and hydrated.",
        price: 8.99,
        stock: 200,
        category: "Lip Care",
        image1Url: "https://via.placeholder.com/150/lip-balm1.jpg",
        image2Url: "https://via.placeholder.com/150/lip-balm2.jpg",
        image3Url: "https://via.placeholder.com/150/lip-balm3.jpg",
      },
      {
        name: "Clarifying Face Mask",
        description:
          "Detoxify your skin with this clarifying mask, made with natural clay.",
        price: 34.99,
        stock: 90,
        category: "Skincare",
        image1Url: "https://via.placeholder.com/150/face-mask1.jpg",
        image2Url: "https://via.placeholder.com/150/face-mask2.jpg",
        image3Url: "https://via.placeholder.com/150/face-mask3.jpg",
      },
      {
        name: "Sunscreen SPF 50",
        description:
          "High-protection sunscreen for all-day outdoor activities.",
        price: 19.99,
        stock: 130,
        category: "Skincare",
        image1Url: "https://via.placeholder.com/150/sunscreen1.jpg",
        image2Url: "https://via.placeholder.com/150/sunscreen2.jpg",
        image3Url: "https://via.placeholder.com/150/sunscreen3.jpg",
      },
      {
        name: "Anti-Aging Eye Cream",
        description:
          "Reduce fine lines and dark circles with this anti-aging eye cream.",
        price: 44.99,
        stock: 60,
        category: "Skincare",
        image1Url: "https://via.placeholder.com/150/eye-cream1.jpg",
        image2Url: "https://via.placeholder.com/150/eye-cream2.jpg",
        image3Url: "https://via.placeholder.com/150/eye-cream3.jpg",
      },
      {
        name: "Rejuvenating Hair Oil",
        description:
          "Nourish and revitalize your hair with this lightweight hair oil.",
        price: 24.99,
        stock: 140,
        category: "Hair Care",
        image1Url: "https://via.placeholder.com/150/hair-oil1.jpg",
        image2Url: "https://via.placeholder.com/150/hair-oil2.jpg",
        image3Url: "https://via.placeholder.com/150/hair-oil3.jpg",
      },
      {
        name: "Rose Water Toner",
        description:
          "A gentle toner that balances your skin’s pH and refreshes your face.",
        price: 14.99,
        stock: 180,
        category: "Skincare",
        image1Url: "https://via.placeholder.com/150/rose-toner1.jpg",
        image2Url: "https://via.placeholder.com/150/rose-toner2.jpg",
        image3Url: "https://via.placeholder.com/150/rose-toner3.jpg",
      },
      {
        name: "Whipped Body Butter",
        description:
          "Indulge your skin with this ultra-hydrating whipped body butter.",
        price: 32.99,
        stock: 80,
        category: "Body Care",
        image1Url: "https://via.placeholder.com/150/body-butter1.jpg",
        image2Url: "https://via.placeholder.com/150/body-butter2.jpg",
        image3Url: "https://via.placeholder.com/150/body-butter3.jpg",
      },
      {
        name: "Brightening Face Oil",
        description:
          "Lightweight face oil that evens skin tone and adds a radiant glow.",
        price: 49.99,
        stock: 85,
        category: "Skincare",
        image1Url: "https://via.placeholder.com/150/face-oil1.jpg",
        image2Url: "https://via.placeholder.com/150/face-oil2.jpg",
        image3Url: "https://via.placeholder.com/150/face-oil3.jpg",
      },
      {
        name: "Coconut Milk Shampoo",
        description:
          "A nourishing shampoo that strengthens and moisturizes your hair.",
        price: 22.99,
        stock: 110,
        category: "Hair Care",
        image1Url: "https://via.placeholder.com/150/shampoo1.jpg",
        image2Url: "https://via.placeholder.com/150/shampoo2.jpg",
        image3Url: "https://via.placeholder.com/150/shampoo3.jpg",
      },
      {
        name: "Detoxifying Charcoal Mask",
        description: "Purify your skin with this deep cleansing charcoal mask.",
        price: 39.99,
        stock: 95,
        category: "Skincare",
        image1Url: "https://via.placeholder.com/150/charcoal-mask1.jpg",
        image2Url: "https://via.placeholder.com/150/charcoal-mask2.jpg",
        image3Url: "https://via.placeholder.com/150/charcoal-mask3.jpg",
      },
      {
        name: "Lavender Bath Salts",
        description:
          "Relax and unwind with these soothing lavender bath salts.",
        price: 15.99,
        stock: 170,
        category: "Body Care",
        image1Url: "https://via.placeholder.com/150/bath-salts1.jpg",
        image2Url: "https://via.placeholder.com/150/bath-salts2.jpg",
        image3Url: "https://via.placeholder.com/150/bath-salts3.jpg",
      },
      {
        name: "Hand Cream with Shea Butter",
        description:
          "Moisturizing hand cream infused with organic shea butter.",
        price: 12.99,
        stock: 140,
        category: "Body Care",
        image1Url: "https://via.placeholder.com/150/hand-cream1.jpg",
        image2Url: "https://via.placeholder.com/150/hand-cream2.jpg",
        image3Url: "https://via.placeholder.com/150/hand-cream3.jpg",
      },
      {
        name: "Aloe Vera Gel",
        description: "Natural aloe vera gel to soothe and hydrate your skin.",
        price: 16.99,
        stock: 120,
        category: "Skincare",
        image1Url: "https://via.placeholder.com/150/aloe-gel1.jpg",
        image2Url: "https://via.placeholder.com/150/aloe-gel2.jpg",
        image3Url: "https://via.placeholder.com/150/aloe-gel3.jpg",
      },
      {
        name: "Tea Tree Oil",
        description: "Purifying tea tree oil to treat blemishes and acne.",
        price: 17.99,
        stock: 100,
        category: "Skincare",
        image1Url: "https://via.placeholder.com/150/tea-tree-oil1.jpg",
        image2Url: "https://via.placeholder.com/150/tea-tree-oil2.jpg",
        image3Url: "https://via.placeholder.com/150/tea-tree-oil3.jpg",
      },
      {
        name: "Bamboo Toothbrush",
        description:
          "Eco-friendly bamboo toothbrush for sustainable oral care.",
        price: 4.99,
        stock: 300,
        category: "Oral Care",
        image1Url: "https://via.placeholder.com/150/toothbrush1.jpg",
        image2Url: "https://via.placeholder.com/150/toothbrush2.jpg",
        image3Url: "https://via.placeholder.com/150/toothbrush3.jpg",
      },
      {
        name: "Organic Cotton Face Towels",
        description:
          "Soft organic cotton face towels for a gentle touch on your skin.",
        price: 19.99,
        stock: 150,
        category: "Body Care",
        image1Url: "https://via.placeholder.com/150/face-towels1.jpg",
        image2Url: "https://via.placeholder.com/150/face-towels2.jpg",
        image3Url: "https://via.placeholder.com/150/face-towels3.jpg",
      },
      {
        name: "Eucalyptus Essential Oil",
        description:
          "Refresh your mind with invigorating eucalyptus essential oil.",
        price: 12.49,
        stock: 90,
        category: "Aromatherapy",
        image1Url: "https://via.placeholder.com/150/eucalyptus-oil1.jpg",
        image2Url: "https://via.placeholder.com/150/eucalyptus-oil2.jpg",
        image3Url: "https://via.placeholder.com/150/eucalyptus-oil3.jpg",
      },
      {
        name: "Nourishing Face Mask",
        description:
          "Deeply nourishing face mask that rejuvenates and revitalizes.",
        price: 29.99,
        stock: 75,
        category: "Skincare",
        image1Url: "https://via.placeholder.com/150/nourishing-mask1.jpg",
        image2Url: "https://via.placeholder.com/150/nourishing-mask2.jpg",
        image3Url: "https://via.placeholder.com/150/nourishing-mask3.jpg",
      },
      {
        name: "Hair Growth Serum",
        description: "Promote hair growth and thickness with this serum.",
        price: 39.99,
        stock: 50,
        category: "Hair Care",
        image1Url: "https://via.placeholder.com/150/hair-growth-serum1.jpg",
        image2Url: "https://via.placeholder.com/150/hair-growth-serum2.jpg",
        image3Url: "https://via.placeholder.com/150/hair-growth-serum3.jpg",
      },
      {
        name: "Anti-Frizz Hair Spray",
        description: "Keep your hair smooth and frizz-free all day.",
        price: 18.99,
        stock: 65,
        category: "Hair Care",
        image1Url: "https://via.placeholder.com/150/anti-frizz-spray1.jpg",
        image2Url: "https://via.placeholder.com/150/anti-frizz-spray2.jpg",
        image3Url: "https://via.placeholder.com/150/anti-frizz-spray3.jpg",
      },
      {
        name: "Bamboo Makeup Remover Pads",
        description: "Eco-friendly reusable makeup remover pads.",
        price: 9.99,
        stock: 180,
        category: "Makeup",
        image1Url: "https://via.placeholder.com/150/makeup-pads1.jpg",
        image2Url: "https://via.placeholder.com/150/makeup-pads2.jpg",
        image3Url: "https://via.placeholder.com/150/makeup-pads3.jpg",
      },
      {
        name: "Hydrating Face Mist",
        description:
          "A refreshing face mist to hydrate and revitalize your skin throughout the day.",
        price: 15.99,
        stock: 120,
        category: "Skincare",
        image1Url: "https://via.placeholder.com/150/face-mist1.jpg",
        image2Url: "https://via.placeholder.com/150/face-mist2.jpg",
        image3Url: "https://via.placeholder.com/150/face-mist3.jpg",
      },
    ];

    return Product.insertMany(products);
  })
  .then(() => {
    console.log("Database seeded successfully!");
    mongoose.connection.close();
  })
  .catch((err) => {
    console.error("Error seeding the database:", err);
    mongoose.connection.close();
  });
