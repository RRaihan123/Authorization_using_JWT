const EventEmitter = require('events');

class School extends EventEmitter {
    startPeriod() {
        console.log('Class started');

        // raise event when bell rings
        // raise an event
        setTimeout(() => {
            this.emit('bellRing', {
                period: 'first',
                text: 'period shesh',
            });
        }, 2000);
    }
}

module.exports = School;