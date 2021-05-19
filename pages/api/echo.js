export default function echo(req, res) {
  // res.status = 200;
  // res.setHeader("Content-Type", "application/json");
  // res.end(
  //   JSON.stringify({
  //     message: req.query.message ?? "Base message",
  //   })
  // );

  res.json({ message: req.query.message ?? "Base message" });
}
