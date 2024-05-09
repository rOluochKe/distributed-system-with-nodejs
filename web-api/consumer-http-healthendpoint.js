server.get("/health", async () => {
  console.log("health check");
  return "OK";
});
