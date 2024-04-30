'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.createTable('Comics', {
      comic_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        unique: true,
        primaryKey: true,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      english_title: {
        type: Sequelize.STRING(128),
      },
      original_title: {
        type: Sequelize.STRING(128),
      },
      alternate_title: {
        type: Sequelize.STRING(128),
      },
      year_published: {
        type: Sequelize.DATE,
      },
      status: {
        type: Sequelize.STRING(32),
      },
      read_chapter: {
        type: Sequelize.INTEGER,
      },
      total_chapter: {
        type: Sequelize.INTEGER,
      },
      personal_notes: {
        type: Sequelize.STRING,
      },
      image_url: {
        type: Sequelize.STRING,
      },
      last_update: {
        type: Sequelize.DATE,
      },
      score_review: {
        type: Sequelize.INTEGER,
      },
      synopsis: {
        type: Sequelize.TEXT,
      },
      country_of_origin: {
        type: Sequelize.STRING(64),
      },
      author: {
        type: Sequelize.STRING(64),
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
    });
  },

  async down(queryInterface) {
    return queryInterface.dropTable('Comics');
  },
};
