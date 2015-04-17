Events = new Mongo.Collection("events");

EventsSchema = new SimpleSchema({
  name: {
    type: String,
    label: "Event Name"
  },
  
  date: {
    type: String,
    label: "Event Date"
  },
  
  info: {
    type: String,
    label: "Event Info"
  }
})

Events.attachSchema(EventsSchema);