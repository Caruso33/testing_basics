export default makeMeASandwhich;

function makeMeASandwhich(req) {
  if (typeof req.query.sandwhich !== "string") {
    return null;
  }

  return req.query.sandwhich;
}
