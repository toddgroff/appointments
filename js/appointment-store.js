//The appointment store object is responsible for persisiting and loading appointments, adding, removing and returning
app.AppointmentStore = function () {
    var appts = [];
    var self = {
        add: function (appt) {
            appts.push(appt);
            self.save();
        },

        query: function() {
            return appts;
        },

        getById: function (appointmentId) {
            // var appt;
            //
            // appts.some(function (item) {
            //     if (item.id === appointmentId) {
            //         appt = item;
            //         return true;
            //     }
            //
            //     return false;
            // })
            //
            // return appt;
            //

            for (var i = 0; i < appts.length; ++i) {
                if (appts[i].id === appointmentId) {
                    return appts[i];
                }
            }

            // var arrId =  appts.filter(function(appt) { return appt.id === appointmentId; });
            // return arrId[0];
        },

        removeById: function(appt) {
            appts = appts.filter(function (item) {
                return item.id !== appt.id;
                //remove maybe use splice instead
                //save appointments on local storage
            });
        },

        load: function () {
            appts = JSON.parse(localStorage.getItem('appts') || []);
        },

        save: function () {
            localStorage.setItem('appts', JSON.stringify(appts));
        }
    };

    return self;
};
