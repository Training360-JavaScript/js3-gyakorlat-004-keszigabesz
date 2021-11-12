const checkMac = macAddress => {
    const macAddressRegex = /^([0-9a-f]{2}[:-]){5}[0-9a-f]{2}$/i;
    return macAddress.match(macAddressRegex) ? true : false;
}

export default checkMac;