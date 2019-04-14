function Item(name, sell_in, quality) {
  this.name = name
  this.sell_in = sell_in
  this.quality = quality
}

var items = []

function update_quality() {
  for (var i = 0; i < items.length; i++) {
    if (
      items[i].name !== 'Aged Brie' &&
      items[i].name !== 'Backstage passes to a TAFKAL80ETC concert'
    ) {
      is_conjured(items[i])
      if (items[i].quality > 0) {
        if (items[i].name !== 'Sulfuras, Hand of Ragnaros') {
          items[i].quality = items[i].quality - 1
        }
      }
    } else {
      if (items[i].quality < 50) {
        items[i].quality = items[i].quality + 1
        if (items[i].name === 'Backstage passes to a TAFKAL80ETC concert') {
          if (items[i].sell_in < 11) {
            if (items[i].quality < 50) {
              items[i].quality = items[i].quality + 1
            }
          }
          if (items[i].sell_in < 6) {
            if (items[i].quality < 50) {
              items[i].quality = items[i].quality + 1
            }
          }
        }
      }
    }

    if (items[i].name !== 'Sulfuras, Hand of Ragnaros') {
      items[i].sell_in = items[i].sell_in - 1
    }

    if (items[i].sell_in < 0) {
      if (items[i].name !== 'Aged Brie') {
        if (items[i].name !== 'Backstage passes to a TAFKAL80ETC concert') {
          is_conjured(items[i])
          if (items[i].quality > 0) {
            if (items[i].name !== 'Sulfuras, Hand of Ragnaros') {
              items[i].quality = items[i].quality - 1
            }
          }
        } else {
          items[i].quality = items[i].quality - items[i].quality
        }
      } else {
        if (items[i].quality < 50) {
          items[i].quality = items[i].quality + 1
        }
      }
    }
  }
}

is_conjured = item => {
  if (item.name.toLowerCase().includes('conjured')) {
    if (item.quality > 0) {
      item.quality = item.quality - 1
      if (item.sell_in < 0) {
        item.quality = item.quality - 1
      }
    }

    return item
  } else return item
}
