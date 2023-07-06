export class Item {
  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

export class BaseItem extends Item {
  constructor(name, sellIn, quality) {
    super(name, sellIn, quality);
  }

  update() {
    this.sellIn--;
    if (this.quality > 0) {
      if (this.sellIn < 0 && this.quality > 1) {
        this.quality--;
      }
      this.quality--;
    }
  }
}

export class LegendaryItem extends Item {
  constructor(name, sellIn, quality) {
    super(name, sellIn, quality);
  }
  update() {}
}

export class CheeseItem extends Item {
  constructor(name, sellIn, quality) {
    super(name, sellIn, quality);
  }
  update() {
    if (this.quality < 50) {
      this.quality++;
    }
    this.sellIn--;
  }
}

export class TicketItem extends CheeseItem {
  constructor(name, sellIn, quality) {
    super(name, sellIn, quality);
  }

  update() {
    if (this.sellIn > 10) {
      super.update();
    } else if (this.sellIn > 5) {
      this.quality++;
      this.quality++;
      this.sellIn--;
    } else if (this.sellIn > 0) {
      this.quality++;
      this.quality++;
      this.quality++;
      this.sellIn--;
    } else {
      this.quality = 0;
      this.sellIn--;
    }
  }
}

export class ConjuredItem extends BaseItem {
  constructor(name, sellIn, quality) {
    super(name, sellIn, quality);
  }
  update() {
    super.update();
    super.update();
    this.sellIn++;
  }
}

export const updateQuality = () => {
  for (let item of items) {
    item.update();
  }
};

export let items = [];

items.push(new BaseItem("+5 Dexterity Vest", 10, 20));
items.push(new CheeseItem("Aged Brie", 2, 0));
items.push(new BaseItem("Elixir of the Mongoose", 5, 7));
items.push(new LegendaryItem("Sulfuras, Hand of Ragnaros", 0, 80));
items.push(new TicketItem("Backstage passes to a TAFKAL80ETC concert", 15, 20));
items.push(new ConjuredItem("Conjured Mana Cake", 3, 6));

//
//   for (let item of items) {
//     if (
//       item.name != "Aged Brie" &&
//       item.name != "Backstage passes to a TAFKAL80ETC concert"
//     ) {
//       if (item.quality > 0) {
//         if (item.name != "Sulfuras, Hand of Ragnaros") {
//           item.quality = item.quality - 1;
//         }
//       }
//     } else {
//       if (item.quality < 50) {
//         item.quality = item.quality + 1;
//         if (item.name == "Backstage passes to a TAFKAL80ETC concert") {
//           if (item.sellIn < 11) {
//             if (item.quality < 50) {
//               item.quality = item.quality + 1;
//             }
//           }
//           if (item.sellIn < 6) {
//             if (item.quality < 50) {
//               item.quality = item.quality + 1;
//             }
//           }
//         }
//       }
//     }
//     if (item.name != "Sulfuras, Hand of Ragnaros") {
//       item.sellIn = item.sellIn - 1;
//     }
//     if (item.sellIn < 0) {
//       if (item.name != "Aged Brie") {
//         if (item.name != "Backstage passes to a TAFKAL80ETC concert") {
//           if (item.quality > 0) {
//             if (item.name != "Sulfuras, Hand of Ragnaros") {
//               item.quality = item.quality - 1;
//             }
//           }
//         } else {
//           item.quality = item.quality - item.quality;
//         }
//       } else {
//         if (item.quality < 50) {
//           item.quality = item.quality + 1;
//         }
//       }
//     }
//   }
// };
