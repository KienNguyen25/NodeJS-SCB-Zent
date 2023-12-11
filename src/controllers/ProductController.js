class ProductController {
    find = (req, res, next) => {
        try {
            const {page, sort} = req.query;
            console.log(page,sort);
            res.status(200).json({msg: `get param page = ${page} va sort = ${sort}`});
        } catch (error) {
            throw error
        }
    }
    create = (req,res, next) => {
        try {
            const {name, password,sdt,email} = req.body;
            console.log('create product')
            res.status(200).json({
              name,
              password,
              sdt,
              email
            })
        } catch (error) {
            throw error
        }
    }
    update = (req,res, next) => {
        try {
            const {name, password,sdt,email} = req.body;
            res.status(200).json({
                name,
                password,
                sdt,
                email
              })
        } catch (error) {
            throw error
        }
    }
    delete = (req,res,next) => {
        try {
            let id = req.params.id;
            res.status(200).json({msg: `Xoa Customer co id = ${id}`});
        } catch (error) {
            throw error
        }
    }
}
module.exports = new ProductController();
