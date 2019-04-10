const router = Router()

// sendmail: function (req, res) {
//     Config.sendEmail("chintan@wohlig.com", "jagruti@wohlig.com", "first email from endgrid", "", "<html><body>dome content</body></html>");
// }
router.post("/sendmail", (req, res) => {
    configModel.sendEmail("chintan@wohlig.com", "jagruti@wohlig.com", "first email from endgrid", "", "<html><body>dome content</body></html>");
})

export default router