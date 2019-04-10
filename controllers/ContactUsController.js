const router = Router()
router.get("/search", (req, res) => {
    ContactUsModel.search(req.query, res.callback)
})
router.get(
    "/:id",
    ValidateRequest({
        params: {
            type: "object",
            properties: {
                id: {
                    type: "string",
                    format: "objectId"
                }
            }
        }
    }),
    (req, res) => {
        ContactUsModel.getOne(req.params, res.callback)
    }
)
router.post("/saveData", (req, res) => {
    // console.log("zxdfghjksdfgh",res)?
    ContactUsModel.saveData(req.body, res.callback)
})

// router.post("/paginatedUser", (req, res) => {
//     // console.log("zxdfghjksdfgh",res)?
//     ContactUsModel.paginatedUser(req.body, res.callback)
// })

router.put("/:id", (req, res) => {
    res.send(`Update For Id ${req.params.id}`)
})
router.patch("/:id", (req, res) => {
    res.send(`Path For Id ${req.params.id}`)
})
router.delete("/:id", (req, res) => {
    res.send(`Delete For Id ${req.params.id}`)
})
router.post(
    "/getAllUser/:page",
    // ValidateRequest({
    //     params: {
    //         type: "object",
    //         properties: {
    //             page: {
    //                 format: "integer"
    //             }
    //         }
    //     }
    // }),
    (req, res) => {
      ContactUsModel.getAllUser(req.params.page, req.body, res.callback)
    }
)
export default router
