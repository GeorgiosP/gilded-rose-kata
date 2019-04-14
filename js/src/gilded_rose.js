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
      is_concert(items[i])
    }

    if (items[i].name !== 'Sulfuras, Hand of Ragnaros') {
      items[i].sell_in = items[i].sell_in - 1
    }

    if (items[i].sell_in < 0) {
      check_quality_update(items[i])
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

is_concert = item => {
  if (item.quality < 50) {
    item.quality = item.quality + 1
    if (item.name === 'Backstage passes to a TAFKAL80ETC concert') {
      if (item.sell_in < 11) {
        if (item.quality < 50) {
          item.quality = item.quality + 1
        }
      }
      if (item.sell_in < 6) {
        if (item.quality < 50) {
          item.quality = item.quality + 1
        }
      }
    }
  }
}

check_quality_update = item => {
  if (item.name !== 'Aged Brie') {
    if (item.name !== 'Backstage passes to a TAFKAL80ETC concert') {
      is_conjured(item)
      if (item.quality > 0) {
        if (item.name !== 'Sulfuras, Hand of Ragnaros') {
          item.quality = item.quality - 1
        }
      }
    } else {
      item.quality = item.quality - item.quality
    }
  } else {
    if (item.quality < 50) {
      item.quality = item.quality + 1
    }
  }
}
