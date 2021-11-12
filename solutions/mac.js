const checkMac = macAddress => {
    const macAddressRegex = /^([0-9a-f]{2}[:-]){5}[0-9a-f]{2}$/i;
    return macAddressRegex.test(macAddress);
}

export default checkMac;