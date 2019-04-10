var schema = new Schema({
    analysis: String,
    name: String,
    email: String,
    phoneNo: Number
})
export default mongoose.model("ContactUs", schema)
