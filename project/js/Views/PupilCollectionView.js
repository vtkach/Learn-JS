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
                '���':this.$('.name').val(),
                '�������':this.$('.surname').val(),
                '����������':this.$('.mathematics').val(),
                '����������':this.$('.english').val(),
                '����������':this.$('.ukrainian').val(),
                '�������':this.$('.history').val()
            };
            this.collection.add(dataObject)
        },
    })
}(window.application));