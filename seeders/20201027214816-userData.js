"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert(
      "users",
      [
        {
          email: "admin@admin.com",
          password: "12345678",
          fullName: "Siapa Kamu",
          gender: "Female",
          phone: "080801209318",
          address: "Jln. Marvel Universe, RT.21 RW.69",
          avatar: null,
          isAdmin: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          email: "rizkiiqbal36@gmail.com",
          password: "12345678",
          fullName: "Muhammad Rizky Iqbal Syaifullah",
          gender: "Male",
          phone: "082347660388",
          address: "Jln. Johor No5.A Asrama, Perak Timur, Surabaya ",
          avatar: null,
          isAdmin: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("Users", null, {});
  },
};
