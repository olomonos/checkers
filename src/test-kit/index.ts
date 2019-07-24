import React from 'react';
import ReactDOM from 'react-dom';
import {Simulate} from 'react-dom/test-utils';
import { string } from 'prop-types';
import { timeout } from 'q';

export class ClientRenderer {
  root = document.createElement('div');

  setup() {
    document.body.appendChild(this.root);
  }

  render(element: React.ReactElement) {
    ReactDOM.render(element, this.root);
  }

  cleanup() {
    ReactDOM.unmountComponentAtNode(this.root);
    document.body.removeChild(this.root);
  }

}

export const select = <T extends Element = Element>(
  selector: string
): T => document.querySelectorAll(`[data-aid="${selector}"]`)[0] as T;

export const selectAll = <T extends Element = Element>(
  selector: string
): NodeListOf<T> => document.querySelectorAll(`[data-aid="${selector}"]`)

export const triggerChange = (
  input: HTMLInputElement,
  value: string
) => {
  input.value = value;
  Simulate.change(input);
}

export const waitFor = async (
  assertion: () => void,
  timeout = 2000,
  interval = 20
) => {
  const start = Date.now();
  let lastError: Error
  return new Promise(async (resolve, reject) => {
    if (Date.now() > start + timeout)
      return reject(lastError)
    try {
      assertion()
      resolve()
    } catch (e) {
      lastError = e
    } finally {
      await new Promise(resolve => setTimeout(resolve, interval))
    }
  })
}