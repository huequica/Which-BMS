import get_MetaData from "./get_metadata"; 

test('hogehoge => undefined', (): void => {
  expect(get_MetaData('hoge')).resolves.toBeUndefined();
});

test('https://huequica.xyz => undefined', (): void => {
  expect(get_MetaData('https://huequica.xtz')).resolves.toBeUndefined();
});

test('https://lite.stellabms.xyz/table.html => string', (): void => {
  get_MetaData('https://lite.stellabms.xyz/table.html').then((response: string) => {
    expect(typeof response).toBe('string');
  });
});