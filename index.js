// Code your solution here
function findMatching(array, str) {
    return array.filter(name => name.toLowerCase() === str.toLowerCase())
}

function fuzzyMatch(array, str) {
    return array.filter(name => name.startsWith(str))
}

function matchName(array, str) {
    return array.filter(obj => obj.name === str)
}