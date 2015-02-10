//The appointment constructor creates the appointment object
app.Appointment = function (spec) {
    if (!spec.title || spec.title.trim() === '') {
        throw 'Title is required';
    } if (!spec.date || spec.date.trim() === '') {
        throw 'Date is required';
    }

    var self = {
        title: spec.title,
        date: spec.date,
        time: spec.time,
        streetAddress: spec.streetAddress,
        cityState: spec.cityState,
        id: spec.id,
        dateTime: function () {
            return new Date(self.date + ' ' + self.time);
        }
    };

    return self;
}
