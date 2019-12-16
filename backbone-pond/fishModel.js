// Please modify this file!

var Fish = Backbone.Model.extend({

  defaults: {
    name: 'Larry',
    image: 'http://www.google.com',
    description: 'Regular old fish',
    displayInfo: false
  },
  toggleDescription: function (){
    let status = this.get('displayInfo');
    console.log(this, status);
    this.set({'displayInfo': !status});
  }

});
