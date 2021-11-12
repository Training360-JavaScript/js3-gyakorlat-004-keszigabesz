import checkVisa from './visa.js';
import checkIP from './ip.js';
import checkMac from './mac.js';


const checker = {
    rules: {
        'visa': checkVisa,
        'ip': checkIP,
        'mac': checkMac
    },
    validate(text, type) {
        return this.rules[type](text);
    }
};


export default checker;