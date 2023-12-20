// muc tieu tao ket noi tới mongo clound(database)
// note: xử lý bất đồng bộ

const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect(
            'mongodb+srv://Kinzent:CGgRYI2DtIsZzbjD@cluster0.fiy8tyg.mongodb.net/?retryWrites=true&w=majority',
            {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            }
        );
        console.log('Database - Connect successfully !!!');
    } catch (error) {
        console.log('Database - Connect failure!!!');
    }
}

module.exports = {connect};