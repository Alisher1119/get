function get(object: any, path: string | Array<string | number>, defaultValue?: any) {
    if (path === undefined) {
        return defaultValue;
    }

    const keys = Array.isArray(path) ? path : path.replace(/\[(\w+)\]/g, '.$1').split('.');

    let currentValue = object;

    for (const key of keys) {
        if ([null, undefined].includes(currentValue)) {
            return defaultValue;
        }
        currentValue = currentValue[key];
    }

    return currentValue === undefined ? defaultValue : currentValue;
}

export {get};