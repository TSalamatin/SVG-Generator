const Circle = require(`../lib/circle`)
const Triangle = require(`../lib/triangle`)
const Rectangle = require(`../lib/rectangle`)




// A testing suite for Shapes is created.
//Note: Spacing syntax for strings
describe('Generating Shapes', () => {

  describe('Blank Test', () => {
    it('should fail as no variables are being fed ', () => {
      const shape = new Triangle()

      expect(shape.render()).toBe(``)
    });
  });

  describe('Rectangle Test', () => {
    it('', () => {

      const shape = new Rectangle('SVG', 'white', 'blue')

      expect(shape.render()).toBe(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
      <rect x="73" y="40" width="160" height="160" fill="blue" />
      <text x="150" y="125" font-size="70" text-anchor="middle" fill="white">SVG</text>
      </svg>`)
    });
  });

  describe('Triangle Test', () => {
    it(' ', () => {

    const shape = new Triangle('SVG', 'white', 'blue')
   
      expect(shape.render()).toBe(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <polygon points="150, 18 244, 182 56, 182" fill="blue" />
        <text x="150" y="125" font-size="70" text-anchor="middle" fill="white">SVG</text>
        </svg>`)
    });
  });

  describe('Cicle Test', () => {
    it(' ', () => {

      const shape = new Circle('SVG', 'white', 'blue')

      expect(shape.render()).toBe(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
      <circle cx="150" cy="100" r="100" fill="blue" />
      <text x="150" y="125" font-size="70" text-anchor="middle" fill="white>SVG}</text>
      </svg>`)
    });
  });


});