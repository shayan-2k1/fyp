const sendNotification = async (userId, message, io) => {
  console.log("Alina is Alina");
  io.to(userId).emit('notification', { message });
};

module.exports = {
  sendNotification,
};
