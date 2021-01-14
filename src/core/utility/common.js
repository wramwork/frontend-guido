export default class Common {
    slice_object = (arr, size) => Array.from({ length: Math.ceil(arr && arr.length / size) }, (v, i) => arr.slice(i * size, i * size + size)
    )
}