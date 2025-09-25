"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        /**
         * Add seed commands here.
         *
         * Example:
         * await queryInterface.bulkInsert('People', [{
         *   name: 'John Doe',
         *   isBetaMember: false
         * }], {});
         */
        return queryInterface.bulkInsert("Users", [
            {
                email: "admin@gmail.com",
                password: "123456",
                firstName: "Dat",
                lastName: "Nguyen",
                address: "Phu Tho",
                phoneNumber: "0987654321",
                gender: 1,
                image: "",
                roleId: "R1",
                positionId: "",
            },
        ]);
    },

    async down(queryInterface, Sequelize) {
        /**
         * Add commands to revert seed here.
         *
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
    },
};
