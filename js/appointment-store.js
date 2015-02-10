//The appointment store object is responsible for persisiting and loading appointments, adding, removing and returning
app.AppointmentStore = function () {
    var appts = [];
    var self = {
        add: function (appt) {
            appts.push(appt);
            self.save();
        },

        query: function () {
            return appts;
        },

        getById: function (appointmentId) {
            for (var i = 0; i < appts.length; ++i) {
                if (appts[i].id === appointmentId) {
                    return appts[i];
                }
            }
        },

        removeById: function (appt) {
            appts = appts.filter(function (item) {
                return item.id !== appt.id;
            });
        },

        load: function () {
            appts = JSON.parse(localStorage.getItem('appts') || '[]').map(app.Appointment);
        },

        save: function () {
            localStorage.setItem('appts', JSON.stringify(appts));
        }
    };

    return self;
};
