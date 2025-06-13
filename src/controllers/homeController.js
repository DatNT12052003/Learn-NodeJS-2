import db from '../models/index'
import CRUDService from '../services/CRUDService'

let getHomePage = async (req, res) => {
    try {
        let data = await db.User.findAll();
        return res.render('homePage.ejs', {
            data: data
        });
    } catch (e) {
        console.log(e)
    }
}

let getAboutPage = (req, res) => {
    return res.render('tests/aboutPage.ejs', {

    });
}

let getDatPage = (req, res) => {
    return res.send('Hello Nguyen Thanh Dat!');
}

let getCRUD = (req, res) => {
    return res.render('crud.ejs');
}

let postCRUD = async (req, res) => {
    let massage = await CRUDService.createNewUser(req.body);
    console.log(massage);
    return res.send('OKE DESU')
}

let displayCRUD = async (req, res) => {
    let data = await CRUDService.getAllUsers();
    console.log("----------------");
    console.log(data);
    console.log("----------------");
    return res.render('display-CRUD.ejs', {
        data: data
    });
}

// module.exports = {
//     getHomePage: getHomePage,
//     getDatPage: getDatPage
// }

export default {
    getHomePage,
    getDatPage,
    getAboutPage,
    getCRUD,
    postCRUD,
    displayCRUD,
};