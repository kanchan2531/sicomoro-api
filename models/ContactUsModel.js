export default {
    search: async function(_query, callback) {
       
        callback(null, await ContactUs.find().exec())
    },
    getOne: (data, callback) => {
        ContactUs.findOne({
            _id: data.id
        }).exec(callback)
    },
    saveData: (data, callback) => {
        // console.log("apiapiapiapiapoa",data)
        const contactUs = new ContactUs(data)
        // contactUs.save(data,callback)

        contactUs.save(data, function (err, updateData) {
console.log("apiapiapiapiapia",data)
            if (err)
              callback(err, null);
            else {
              var mailData = {
                from: 'hr@wohlig.com',
                to: data.email,
                subject: 'feedback',
                text: `email:` + data.email 
              }
              console.log("sdfghjkl",mailData)
              configModel.sendMail(mailData, function (err, mail) {
              
                callback(null, updateData);
              });
            }
      
          });
      
        },

    getAllUser: (page, data, callback) => {
            var page = page
            var max = 10
            var start = max * (page - 1)
            // var queryString = {
            //     accessLevel: "User"
            // }
            if (data.searchText) {
                var queryString = {
               name : {
                    $regex: data.searchText,
                    $options: "i"
                }
            }
        }
            ContactUs.find(queryString)
                .lean()
                .limit(max)
                .skip(start)
                .sort({
                    createdAt: -1
                })
               
              
.exec(function (err, data) {
    if (err) {
    callback(err, null)
    } else if (_.isEmpty(data)) {
        ContactUs.countDocuments(queryString).exec(function (err, count) {
    var objToSend = {}
    objToSend.TotalCount = count
    objToSend.count = max
    objToSend.data = data
    objToSend.status = 404
    callback(null, objToSend)
    })
    } else {
        ContactUs.countDocuments().exec(function (err, count) {
    var objToSend = {}
    objToSend.TotalCount = count
    objToSend.count = max
    objToSend.data = data
    objToSend.status = 200
    callback(null, objToSend)
    })
    }
    })
    },
}
