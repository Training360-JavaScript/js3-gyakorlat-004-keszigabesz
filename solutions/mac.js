const checkMac = macAddress => {
    const macAddressRegex = /^$/;
    return macAddress.match(macAddressRegex) ? true : false;
}

export default checkMac;