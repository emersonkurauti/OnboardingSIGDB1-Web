import { Selector } from 'testcafe';

fixture('Servidor').page('localhost:4200');

test('Validar se o servidor está de pé', async t => {
    await t.expect(Selector('title').innerText).eql('OnboardingSIGDB1-Web');
});
