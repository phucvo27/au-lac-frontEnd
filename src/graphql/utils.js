const setStaticPrice = (_id, salePrice) => {
    let result = 0;
    switch(_id) {
        case '5faa75e53452561a3f6463cf':
            result = salePrice
            break;
        case '5faa75e53452561a3f6463d0':
            result = salePrice + (salePrice * 5)/100;
            break;
        case '5faa75e53452561a3f6463d1':
            result = salePrice + (salePrice * 7)/100;
            break;
        default:
            result = salePrice
            break;
    }
    return result;
}
export const transformProductObject = (product, region) => {
    let { salePriceInRegions, salePrice } = product;
    let customObject = {
        ...product
    }
    if(salePriceInRegions.length === 0){
        const { _id } = region;
        customObject.salePrice = setStaticPrice(_id, salePrice);
        return customObject;
    }else {
        const { _id } = region;
        const found = salePriceInRegions.find(region => region._id === _id);
        if(found){
            customObject.salePrice = found.salePrice;
        }else {
            customObject.salePrice = setStaticPrice(_id, salePrice);
        }
        return customObject;
    }
}
