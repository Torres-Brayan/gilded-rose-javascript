import { expect, describe, it } from "vitest";
import {
  ConjuredItem,
  TicketItem,
  AgedItem,
  LegendaryItem,
  BaseItem,
  Item,
  items,
  updateQuality,
} from "./gilded-rose.js";

describe("updateQuality", () => {
  it("reduces quality and sellIn of basic items by 1", () => {
    const testItem = new BaseItem("basic", 5, 3);
    items.push(testItem);

    updateQuality();

    expect(testItem.quality).toBe(2);
    expect(testItem.sellIn).toBe(4);
  });

  it('"Aged Brie" actually increases in `quality` the older it gets.', () => {
    const testItem = new AgedItem("Aged Brie", 2, 0);
    items.push(testItem);

    updateQuality();

    expect(testItem.quality).toBe(1);
    expect(testItem.sellIn).toBe(1);
  });

  it("Once the `sellIn` days is less then zero, `quality` degrades twice as fast", () => {
    const testItem = new BaseItem("flashSale", 0, 3);
    items.push(testItem);

    updateQuality();

    expect(testItem.quality).toBe(1);
    expect(testItem.sellIn).toBe(-1);
  });

  it("The `quality` of an item is never negative", () => {
    const testItem = new BaseItem("Trash", 5, 0);
    items.push(testItem);

    updateQuality();

    expect(testItem.quality).toBe(0);
    expect(testItem.sellIn).toBe(4);
  });

  it("The `quality` of an item is never more than `50`.", () => {
    const testItem = new AgedItem("Aged Brie", 2, 49);
    items.push(testItem);

    updateQuality();
    updateQuality();

    expect(testItem.quality).toBe(50);
    expect(testItem.sellIn).toBe(0);
  });

  it('"Sulfuras, Hand of Ragnaros," being a legendary item, never has to be sold nor does it decrease in `quality`."', () => {
    const testItem = new LegendaryItem("Sulfuras, Hand of Ragnaros", 1, 80);
    items.push(testItem);

    updateQuality();
    updateQuality();

    expect(testItem.quality).toBe(80);
    expect(testItem.sellIn).toBe(1);
  });

  it('"Backstage passes to a TAFKAL80ETC concert", increase in `quality` as its `sellIn` value decreases:', () => {
    const testItem = new TicketItem(
      "Backstage passes to a TAFKAL80ETC concert",
      15,
      6
    );
    items.push(testItem);

    updateQuality();

    expect(testItem.quality).toBe(7);
    expect(testItem.sellIn).toBe(14);
  });

  it('"Backstage passes to a TAFKAL80ETC concert", increase in `quality` as its `sellIn` value decreases: - `quality` increases by `2` when there are `10` days or less left before the concert. ', () => {
    const testItem = new TicketItem(
      "Backstage passes to a TAFKAL80ETC concert",
      8,
      0
    );
    items.push(testItem);

    updateQuality();

    expect(testItem.quality).toBe(2);
    expect(testItem.sellIn).toBe(7);
  });

  it('"Backstage passes to a TAFKAL80ETC concert", increase in `quality` as its `sellIn` value decreases: - `quality` increases by `3` when there are `5` days or less left before the concert.', () => {
    const testItem = new TicketItem(
      "Backstage passes to a TAFKAL80ETC concert",
      4,
      0
    );
    items.push(testItem);

    updateQuality();

    expect(testItem.quality).toBe(3);
    expect(testItem.sellIn).toBe(3);
  });

  it('"Backstage passes to a TAFKAL80ETC concert", increase in `quality` as its `sellIn` value decreases: - `quality` drops to `0` after the concert.', () => {
    const testItem = new TicketItem(
      "Backstage passes to a TAFKAL80ETC concert",
      0,
      35
    );
    items.push(testItem);

    updateQuality();

    expect(testItem.quality).toBe(0);
    expect(testItem.sellIn).toBe(-1);
  });

  it("reduces quality and sellIn of Conjured items by 2", () => {
    const testItem = new ConjuredItem("conjured", 5, 7);
    items.push(testItem);

    updateQuality();

    expect(testItem.quality).toBe(5);
    expect(testItem.sellIn).toBe(4);
  });

  it("reduces quality and sellIn of Conjured items by 4 when sellIn is less than 0", () => {
    const testItem = new ConjuredItem("conjured", 0, 7);
    items.push(testItem);

    updateQuality();

    expect(testItem.quality).toBe(3);
    expect(testItem.sellIn).toBe(-1);
  });
});
