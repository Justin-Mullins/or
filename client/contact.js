var ContactSchema = new SimpleSchema({
  name: {
    type: String,
    label: "Name"
  },
  email: {
    type: String,
    label: "Email"
  },
  message: {
    type: String,
    label: "Messages"
  }
})

Template.contact.helpers({
  contactFormSchema: ContactSchema
})