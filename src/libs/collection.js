class Collection {
  constructor (model) {
    this._index = 0
    this._collection = {}
    this.Model = model
  }

  getCollection () {
    return Object.entries(this._collection).map(([id, item]) => ({ ...item, id: parseInt(id) }))
  }

  addItem (params) {
    const item = new this.Model(params)
    const result = { id: this._index, ...item }
    this._collection[this._index] = item
    this._index++
    return result
  }

  removeItem (index) {
    const item = { ...this._collection[index], id: index }
    delete this._collection[index]
    return item
  }
}

export default Collection
