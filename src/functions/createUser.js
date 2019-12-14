export { createUser as default, runServer };

async function runServer() {
  return new Promise(res => {
    process.nextTick(() => {
      let server = {
        running: true,
        close: function(cb) {
          this.running = false;
          cb()
        }
      };
      return res(server);
    });
  });
}

async function createUser(user) {
  return new Promise((resolve, reject) => {
    process.nextTick(() => {
      if (!user.email) reject("no email provided");

      const userResult = { name: user.name, age: user.age, email: user.email };
      resolve(userResult);
    });
  });
}
