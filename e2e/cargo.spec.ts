import { async } from '@angular/core/testing';
import { Selector } from 'testcafe';

fixture('Curso').page('localhost:4200/cargos/create');

test('Deve criar um novo cargo', async t => {
    await t.typeText(Selector('[formControlName="descricao"]'), `Descrição teste café ${new Date().toString()}`);
    await t.click(Selector('.btn-primary'));
    await t.expect(Selector('h1').innerText).eql('Listagem de Cargos');
});


test('Não deve criar um novo cargo', async t => {
    await t.typeText(Selector('[formControlName="descricao"]'), `Descrição teste café`);
    await t.click(Selector('.btn-primary'));
    await t.expect(Selector('h1').innerText).eql('Cadastro de Cargo');
});

test('Testar campo obrigatório', async t => {
    await t.typeText(Selector('[formControlName="descricao"]'), ' ');
    await t.click(Selector('.btn-primary'));
    await t.expect(Selector('.toast-message').withText(`'Descricao' deve ser informado.`).count).eql(1);
});
