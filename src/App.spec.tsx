import React from 'react';
import App from './App';
import { expect } from "chai";
import { select, ClientRenderer, selectAll, waitFor } from "./test-kit";

describe('App', () => {
  const renderer = new ClientRenderer();

  beforeEach(() => renderer.setup());
  beforeEach(() => renderer.render(<App />));

  afterEach(() => renderer.cleanup());

  describe('Chapaev', () => {

    describe('Checkers', () => {
      beforeEach(() => {
        select<HTMLAnchorElement>('LINK_TO_CHAPAEV').click();
      });
      it('should appear on board on button click', async () => {
        await waitFor(() => expect(select<HTMLButtonElement>('BUTTON_POPULATE')).to.be.ok);
        const populate = select<HTMLButtonElement>('BUTTON_POPULATE');
        populate.click();

        const checkers = selectAll('CHECKER');

        expect(checkers).to.have.length(16);
      });
    });

  });
});
