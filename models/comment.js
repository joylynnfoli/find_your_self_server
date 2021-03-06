module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define("comment", {
    user_id: {
      type: DataTypes.INTEGER,
    },
    topicId: {
      type: DataTypes.INTEGER,
    },
    note: {
      type: DataTypes.STRING,
    },
  });
  return Comment;
};
