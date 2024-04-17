const sendNotification = async (userId, message, io) => {
 
  io.to(userId).emit('notification', { message });
};

module.exports = {
  sendNotification,
};
