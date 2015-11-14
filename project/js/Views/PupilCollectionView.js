(function(app){
    app.Views.PupilCollectionView = Backbone.View.extend({
        el:'html',
        events:{
          'click .clickAddPupil':'showFormPupil',
           'click .addFormPupil':'addPupil',
        },
        initialize:function(){
            this.collection = new app.Collections.PupilCollectionModel();
            this.listenTo(this.collection,'add',render());
        },
        render:function(){
          alert('')
        },
        showFormPupil:function(){
            $('form').removeClass();
        },
        addPupil:function(){
            var dataObject={
                'Имя':this.$('.name').val(),
                'Фамилия':this.$('.surname').val(),
                'Математика':this.$('.mathematics').val(),
                'Английский':this.$('.english').val(),
                'Украинский':this.$('.ukrainian').val(),
                'История':this.$('.history').val()
            };
            this.collection.add(dataObject)
        },
    })
}(window.application));