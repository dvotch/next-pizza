import { hashSync } from "bcrypt";
import { prisma } from "./prisma-client";
import { _ingredients, categories, products } from "./constants";

async function up() {
  await prisma.user.createMany({
    data: [
      {
        fullName: "User Test",
        email: "user@test.ru",
        password: hashSync("1111111", 10),
        verificated: new Date(),
      },
      {
        fullName: "Admin Test",
        email: "admin@test.ru",
        password: hashSync("1111111", 10),
        verificated: new Date(),
        role: "ADMIN",
      },
    ],
  });

  await prisma.category.createMany({ data: categories });

  await prisma.ingredient.createMany({ data: _ingredients });

  await prisma.product.createMany({ data: products });

  const pizza1 = await prisma.product.create({
    data: {
      name: "Пепперони фреш",
      imageUrl:
        "https://media.dodostatic.net/image/r:233x233/11EE7D61304FAF5A98A6958F2BB2D260.webp",
      categoryId: 1,
      ingredients: {
        connect: _ingredients.slice(0, 5),
      },
    },
  });

  const pizza2 = await prisma.product.create({
    data: {
      name: "Сырная",
      imageUrl:
        "https://media.dodostatic.net/image/r:233x233/11EE7D610CF7E265B7C72BE5AE757CA7.webp",
      categoryId: 1,
      ingredients: {
        connect: _ingredients.slice(5, 10),
      },
    },
  });

  const pizza3 = await prisma.product.create({
    data: {
      name: "Чоризо фреш",
      imageUrl:
        "https://media.dodostatic.net/image/r:584x584/11EE7D61706D472F9A5D71EB94149304.webp",
      categoryId: 1,
      ingredients: {
        connect: _ingredients.slice(10, 40),
      },
    },
  });

  await prisma.productItem.createMany({
    data: [
      //Пицца "Пепперони Фреш"
      {
        productId: pizza1.id,
        pizzaType: 1,
        size: 20,
        price: 300,
      },
      {
        productId: pizza1.id,
        pizzaType: 2,
        size: 30,
        price: 450,
      },
      {
        productId: pizza1.id,
        pizzaType: 2,
        size: 40,
        price: 600,
      },

      //Пицца "Сырная"
      {
        productId: pizza2.id,
        pizzaType: 1,
        size: 20,
        price: 300,
      },
      {
        productId: pizza2.id,
        pizzaType: 1,
        size: 30,
        price: 450,
      },
      {
        productId: pizza2.id,
        pizzaType: 2,
        size: 20,
        price: 300,
      },
      {
        productId: pizza2.id,
        pizzaType: 2,
        size: 30,
        price: 450,
      },
      {
        productId: pizza2.id,
        pizzaType: 2,
        size: 40,
        price: 600,
      },

      //Пицца "Чоризо Фреш"
      {
        productId: pizza3.id,
        pizzaType: 1,
        size: 20,
        price: 300,
      },
      {
        productId: pizza3.id,
        pizzaType: 1,
        size: 30,
        price: 450,
      },
      {
        productId: pizza3.id,
        pizzaType: 2,
        size: 20,
        price: 300,
      },
      {
        productId: pizza3.id,
        pizzaType: 2,
        size: 30,
        price: 450,
      },

      //Остальные продукты
      { productId: 1, price: 100 },
      { productId: 2, price: 110 },
      { productId: 3, price: 400 },
      { productId: 4, price: 140 },
      { productId: 5, price: 105 },
      { productId: 6, price: 120 },
      { productId: 7, price: 400 },
      { productId: 8, price: 300 },
      { productId: 9, price: 500 },
      { productId: 10, price: 110 },
      { productId: 11, price: 140 },
      { productId: 12, price: 120 },
      { productId: 13, price: 500 },
      { productId: 14, price: 160 },
      { productId: 15, price: 180 },
      { productId: 16, price: 160 },
      { productId: 17, price: 180 },
    ],
  });

  await prisma.cart.createMany({
    data: [
      {
        userId: 1,
        totalAmount: 650,
        token: "11111",
      },
      {
        userId: 2,
        totalAmount: 0,
        token: "22222",
      },
    ],
  });

  await prisma.cartItem.create({
    data: {
      productItemId: 1,
      cartId: 1,
      quantity: 2,
      ingredients: {
        connect: [{ id: 1 }, { id: 2 }, { id: 3 }],
      },
    },
  });
}

async function down() {
  await prisma.$executeRaw`TRUNCATE TABLE "User" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "Category" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "Cart" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "CartItem" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "Product" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "ProductItem" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "Ingredient" RESTART IDENTITY CASCADE`;
}

async function main() {
  try {
    await down();
    await up();
  } catch (e) {
    console.log(e);
  }
}

main()
  .then(async () => await prisma.$disconnect())
  .catch(async (e) => {
    console.log(e);
    await prisma.$disconnect();
    process.exit(1);
  });
