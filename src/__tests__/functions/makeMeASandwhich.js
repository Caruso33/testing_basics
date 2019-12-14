import makeMeASandwhich from "../../functions/makeMeASandwhich";

test("returns null if the sandwhich does not exist", () => {
  const req = getReq();
  const result = makeMeASandwhich(req);
  expect(result).toBeNull();
});

test("returns my sandwhich", () => {
  const sandwhich = "Monte Cristo";
  const req = getReq(sandwhich);
  const result = makeMeASandwhich(req);
  expect(result).toBe(sandwhich);
});

function getReq(sandwhich) {
  return { query: { sandwhich } };
}
