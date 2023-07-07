// main or parent class
export class Item {
  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

// BasdeItem class extended from Item class
export class BaseItem extends Item {
  constructor(name, sellIn, quality) {
    // super keyword used to call parent state
    super(name, sellIn, quality);
  }

  // update function will run when update quality function is ran.
  update() {
    // first sellIn reduced by 1.
    this.sellIn--;
    // if quality is greater than 0 reduce quality by 1.
    if (this.quality > 0) {
      this.quality--;
      // if sellin is less than 0 and guality is greater than 1 reduce quality by 1.
      if (this.sellIn < 0 && this.quality > 1) {
        this.quality--;
      }
    }
  }
}

// LegendaryItem class extended from Item class
export class LegendaryItem extends Item {
  constructor(name, sellIn, quality) {
    // super keyword used to call parent state
    super(name, sellIn, quality);
  }
  //update function will run when update quality function is ran. (Legendary items never need to be sold or lose value)
  update() {}
}

// AgedItem extended from item class
export class AgedItem extends Item {
  constructor(name, sellIn, quality) {
    // super keyword used to call parent state
    super(name, sellIn, quality);
  }

  // update function will run when update quality function is ran.
  update() {
    // if quality is less than 50 quality will gain 1
    if (this.quality < 50) {
      this.quality++;
    }
    // sellIn reduced by 1
    this.sellIn--;
  }
}

// TicketItem extended from AgedItem
export class TicketItem extends AgedItem {
  constructor(name, sellIn, quality) {
    // super keyword used to call parent state
    super(name, sellIn, quality);
  }

  // update function will run when update quality function is ran.
  update() {
    // if sellIn is greater than 10, run the update function from the AgedItem class
    if (this.sellIn > 10) {
      super.update();
      // else if sellIn is greater than 5, qulaity increases by 2 and sellIn decreases by 1.
    } else if (this.sellIn > 5) {
      this.quality++;
      this.quality++;
      this.sellIn--;
      // else if sellIn is greater than 0, qulaity increases by 3 and sellIn decreases by 1.
    } else if (this.sellIn > 0) {
      this.quality++;
      this.quality++;
      this.quality++;
      this.sellIn--;
      // else quality is set to 0 and sellIn is decreased by 1.
    } else {
      this.quality = 0;
      this.sellIn--;
    }
  }
}

// ConjuredItem Extends from BaseItem
export class ConjuredItem extends BaseItem {
  constructor(name, sellIn, quality) {
    // super keyword used to call parent state
    super(name, sellIn, quality);
  }

  // update function will run when update quality function is ran.
  update() {
    // super keyword used to call parent behavior
    super.update();
    super.update();
    // sellIn is increased by 1
    this.sellIn++;
  }
}

// this function is ran by the inkeeper to update all the items in the items array.
export const updateQuality = () => {
  for (let item of items) {
    item.update();
  }
};

export let items = [];

items.push(new BaseItem("+5 Dexterity Vest", 10, 20));
items.push(new AgedItem("Aged Brie", 2, 0));
items.push(new BaseItem("Elixir of the Mongoose", 5, 7));
items.push(new LegendaryItem("Sulfuras, Hand of Ragnaros", 0, 80));
items.push(new TicketItem("Backstage passes to a TAFKAL80ETC concert", 15, 20));
items.push(new ConjuredItem("Conjured Mana Cake", 3, 6));
