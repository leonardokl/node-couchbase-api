const Pagination = {
  addHeaders: ({res, options, count}) => {
    const {skip, limit} = options
    const page = skip + 1
    const totalPages = count > limit ? (count / limit) : 1
    const hasNextPage = totalPages > page && totalPages > 1
    const hasPrevPage = page - 1 > 0 && page <= totalPages
    const nextPage = hasNextPage ? page + 1 : ''
    const prevPage = hasPrevPage ? (page - 1) : ''

    res.setHeader('X-Total', count)
    res.setHeader('X-Total-Pages', totalPages)
    res.setHeader('X-Page', page)
    res.setHeader('X-Next-Page', nextPage)
    res.setHeader('X-Prev-Page', prevPage)
    res.setHeader('X-Limit', limit)
  }
}

module.exports = Pagination
