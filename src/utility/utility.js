const getStoredProductList = () => {
    const storedListStr = localStorage.getItem('cart')

    if (storedListStr) {
        const storedList = JSON.parse(storedListStr)
        return storedList;
    } else {
        return [];
    }
}

const addToStoredProductList = (id) => {
    const storedList = getStoredProductList();

    if (storedList.includes(id)) {
        console.log(id, 'already exists in the read list')
    } else {
        storedList.push(id)
        const storedListStr = JSON.stringify(storedList)
        localStorage.setItem('cart', storedListStr)
    }
}

const removeProductLists = (id) => {
    const storedList = getStoredProductList();

    const remaining = storedList.filter(product => product !== id)

    const storedListStr = JSON.stringify(remaining)
    localStorage.setItem('cart', storedListStr)
}

const removeAllProducts = () => {
    localStorage.removeItem('cart')
}

const getStoredWishlistList = () => {
    const storedListStr = localStorage.getItem('wishlist')

    if (storedListStr) {
        const storedList = JSON.parse(storedListStr)
        return storedList;
    } else {
        return [];
    }
}

const addToStoredWishlistList = (id) => {
    const storedList = getStoredWishlistList();

    if (storedList.includes(id)) {
        console.log(id, 'already exists in the read list')
    } else {
        storedList.push(id)
        const storedListStr = JSON.stringify(storedList)
        localStorage.setItem('wishlist', storedListStr)
    }
}

const removeWishLists = (id) => {
    const storedList = getStoredWishlistList();

    const remaining = storedList.filter(wish => wish !== id)

    const storedListStr = JSON.stringify(remaining)
    localStorage.setItem('wishlist', storedListStr)
}

export { getStoredProductList, addToStoredProductList, getStoredWishlistList, addToStoredWishlistList, removeProductLists, removeWishLists, removeAllProducts }