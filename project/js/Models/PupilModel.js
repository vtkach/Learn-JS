(function(app){
    app.Models.PupilModel = Backbone.Model.extend({
        defaults:{
            'Имя':'Иван',
            'Фамилия':'Иванов',
            'Математика':5,
            'Английский':5,
            'Украинский':5,
            'История':5,
            'Коефициент':100
        }
    })

}(window.application));
