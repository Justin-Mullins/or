Meteor.publish("featuredProducts", function(){
  return Products.find({});
})

Meteor.publish("latestEvent", function(){
  return Events.find({});
})