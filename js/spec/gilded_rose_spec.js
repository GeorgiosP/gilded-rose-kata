describe('Gilded Rose', function() {
  it('should foo', function() {
    items = [new Item('foo', 0, 0)]
    update_quality()
    expect(items[0].name).toEqual('foo')
  })

  it('brie increase by 1', () => {
    items = [new Item('Aged Brie', 10, 1)]
    update_quality()
    expect(items[0].quality).toEqual(2)
  })

  it('should decrease by 2 and then 4', () => {
    items = [new Item('conjured item', 1, 6)]
    update_quality()
    expect(items[0].quality).toEqual(4)
    update_quality()
    expect(items[0].quality).toEqual(0)
  })

  it('should decrease by 2', () => {
    items = [new Item('foo', 0, 6)]
    update_quality()
    expect(items[0].quality).toEqual(4)
    update_quality()
    expect(items[0].quality).toEqual(2)
    update_quality()
    expect(items[0].quality).toEqual(0)
    update_quality()
    expect(items[0].quality).toEqual(0)
  })

  it('should increase by 2', () => {
    items = [new Item('Backstage passes to a TAFKAL80ETC concert', 10, 2)]
    update_quality()
    expect(items[0].quality).toEqual(4)
  })

  it('should increase by 3', () => {
    items = [new Item('Backstage passes to a TAFKAL80ETC concert', 5, 2)]
    update_quality()
    expect(items[0].quality).toEqual(5)
  })

  it('should increase by 1', () => {
    items = [new Item('Backstage passes to a TAFKAL80ETC concert', 10, 49)]
    update_quality()
    expect(items[0].quality).toEqual(50)
  })

  it('should increase by 1', () => {
    items = [new Item('Backstage passes to a TAFKAL80ETC concert', 5, 49)]
    update_quality()
    expect(items[0].quality).toEqual(50)
  })

  it('should decrease to 0', () => {
    items = [new Item('Backstage passes to a TAFKAL80ETC concert', 0, 49)]
    update_quality()
    expect(items[0].quality).toEqual(0)
  })
})
