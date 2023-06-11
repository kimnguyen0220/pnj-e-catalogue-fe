export const getSvgIcon = (iconName) => {
    return iconName ? `src/assets/icons/${iconName}.svg` : undefined
}

export const getPngImage = (imageName) => {
    return imageName ? `src/assets/images/${imageName}.png` : undefined
}

export const VNDong = new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND'
})
