import get_Metadata from "./get_metadata"; 

test('hogehoge => undefined', (): void => {
  expect(get_Metadata('hoge')).resolves.toBeUndefined();
});

test('https://lite.stellabms.xyz/table.html => string', (): void => {
  expect(get_Metadata('https://lite.stellabms.xyz/table.html')).resolves.toBeDefined();
});