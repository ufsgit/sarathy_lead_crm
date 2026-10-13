const db = require("./dbconnection");

function initSocket(io) {
  io.on("connection", (socket) => {
    console.log("✅ User connected");

    socket.on("register", (payload) => {
      try {
        const userId = payload && Number(payload.userId);
        if (userId) {
          socket.join(`user:${userId}`);
          console.log(`🔗 Socket registered to room user:${userId}`);
        }
      } catch (e) {
        console.error("register handler error", e);
      }
    });

    socket.on("new-message", async (message) => {
      let connection;
      try {
        io.emit("new-message", message);

        const pool = db.promise();
        connection = await pool.getConnection();
        console.log("📩 new-message socket values", message);

        // your Notification + DB insert logic (moved here)
        // ...
      } catch (err) {
        console.error("Error in new-message socket:", err);
      } finally {
        if (connection) connection.release();
      }
    });
  });
}

module.exports = initSocket;
