Router.configure({
  layoutTemplate: "layoutOjos"
})

Router.route('/', {
  name: 'home',
  /*waitOn: function(){
    return [
      Meteor.subscribe("featuredProducts"),
      Meteor.subscribe("latestEvent")
    ]
  },*/
  data: function(){
    return {
      featuredProducts: function(){
        return Products.find({});
      }
    }
  }
});

Router.route('/events', {
  name: 'events',
  data: function(){
    return {
      eventsO: function(){
        return Events.find({});
      }
    }
  }
});
Router.route('/events/:_id', {
  name: 'event',
  data: function(){
    var self = this;
    return {
      event: function(){
        return Events.findOne({_id: self.params._id})
      }
    }
  }
});
Router.route('/contact', {name: 'contact'});
Router.route('/adminLogin', {name: 'adminLogin'});