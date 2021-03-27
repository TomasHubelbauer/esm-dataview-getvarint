// TODO: Figure out if Protobuf varints have a maximum amount of bytes with last byte being all 8 bits like SQLite
// https://developers.google.com/protocol-buffers/docs/encoding#varints
DataView.prototype.getVarint = function getVarint(/** @type {Number} */ byteOffset = 0) {
  // TODO: Figure out if TypeScript will respect `@this` somehow instead of `@type {DataView}`
  /** @type {DataView} */
  const dataView = this;

  let byte;
  let value = 0;
  let index = 0;

  do {
    // Multiply each number by this factor so that bit index as well as byte index give the final value
    const factor = Math.pow(2, index * 7);

    byte = dataView.getUint8(byteOffset + index);
    value += (byte & 64) * factor + (byte & 32) * factor + (byte & 16) * factor + (byte & 8) * factor + (byte & 4) * factor + (byte & 2) * factor + (byte & 1) * factor;
    index++;
  } while (byte & 128 /* Continue looking if the initial bit is non-zero, can only be 0 or 128. */);

  return { value, byteLength: index };
}
