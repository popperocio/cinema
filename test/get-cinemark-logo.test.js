import '@testing-library/jest-dom';
import { test } from '@jest/globals';
import fs from 'fs';
import path from 'path';
import { JSDOM } from 'jsdom';


const html= fs.readFileSync(path.resolve(process.cwd(), './pages/index.html'), 'utf8');

describe("Cinemark logo", () =>{
    test('Cinemark logo renders correctly', () => {
        const dom = new JSDOM(html);
        global.document = dom.window.document;

        const logo = document.querySelector('.logo');

        expect(logo).toBeInTheDocument();
        expect(logo).toHaveAttribute('src', '../resources/images/cinemark_logo.png');
    });
    test("Cinemark logo doesn't render", () => {
        const dom = new JSDOM(html);
        global.document = dom.window.document;

        const logo = document.querySelector('.logo');

        expect(logo).toBeInTheDocument();
        expect(logo).toHaveAttribute('alt', "Cinemark's logo");
    });
});
