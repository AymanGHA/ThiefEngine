/**
 * @class
 * @classdesc Represents a color with 8-bit RGB components and a float alpha.
 * @param {number} r The red component (0-255).
 * @param {number} g The green component (0-255).
 * @param {number} b The blue component (0-255).
 * @param {number} [a=1.0] The alpha component (0.0-1.0).
 */
function Color(r, g, b, a = 1.0) {
  this.data = new Uint8Array([r & 0xFF, g & 0xFF, b & 0xFF]); // Clamp to 0-255
  this.a = Math.min(Math.max(a, 0.0), 1.0); // Clamp alpha to 0.0-1.0
}

// Define getters for r, g, b
Object.defineProperties(Color.prototype, {
  r: { get: function() { return this.data[0]; }, set: function(v) { this.data[0] = v & 0xFF; } },
  g: { get: function() { return this.data[1]; }, set: function(v) { this.data[1] = v & 0xFF; } },
  b: { get: function() { return this.data[2]; }, set: function(v) { this.data[2] = v & 0xFF; } }
});

// Pre-defined colors (using 0-255 for RGB)
Color.NONE = new Color(0, 0, 0, 0.0);
Color.RED = new Color(255, 0, 0, 1.0);
Color.GREEN = new Color(0, 255, 0, 1.0);
Color.BLUE = new Color(0, 0, 255, 1.0);
Color.CYAN = new Color(0, 255, 255, 1.0);
Color.YELLOW = new Color(255, 255, 0, 1.0);

/**
 * Returns a random color.
 * @returns {Color} A random color with full alpha.
 */
Color.random = function() {
  return new Color(
    Math.random() * 255 | 0,
    Math.random() * 255 | 0,
    Math.random() * 255 | 0,
    1.0
  );
};

/**
 * Returns an array representation of the color (RGB: 0-255, A: 0.0-1.0).
 * @returns {Array<number>} Array of [r, g, b, a].
 */
Color.prototype.toArray = function() {
  return [this.data[0], this.data[1], this.data[2], this.a];
};

/**
 * Tests if this color equals another color.
 * @param {Color} otherColor The color to compare with.
 * @returns {boolean} True if colors are equal.
 */
Color.prototype.equals = function(otherColor) {
  return this.data[0] === otherColor.data[0] &&
         this.data[1] === otherColor.data[1] &&
         this.data[2] === otherColor.data[2] &&
         this.a === otherColor.a;
};
