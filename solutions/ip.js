const checkIP = ipAddress => {
    const ipAddressRegex = /^(?!0)(?!.*\.$)((1?\d?\d|25[0-5]|2[0-4]\d)(\.|$)){4}$/;
    return ipAddressRegex.test(ipAddress);
}

export default checkIP;